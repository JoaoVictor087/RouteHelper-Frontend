'use client';
import { useState, useEffect } from 'react';
import Image from "next/image";
import Localizacao from "../localizacao/localizacao";
import SVGLinha1 from "@/app/components/SVGPaths/SVGLinha1/SVGLinha1";
import SVGLinha4 from "@/app/components/SVGPaths/SVGLinha4/SVGLinha4";
import SVGLinha2 from "@/app/components/SVGPaths/SVGLinha2/SVGLinha2";
import SVGLinha3 from "@/app/components/SVGPaths/SVGLinha3/SVGLinha3";
import SVGLinha5 from "@/app/components/SVGPaths/SVGLinha5/SVGLinha5";
import SVGLinha7 from "@/app/components/SVGPaths/SVGLinha7/SVGLinha7";
import SVGLinha8 from "@/app/components/SVGPaths/SVGLinha8/SVGLinha8";
import SVGLinha9 from "@/app/components/SVGPaths/SVGLinha9/SVGLinha9";
import SVGLinha10 from "@/app/components/SVGPaths/SVGLinha10/SVGLinha10";
import SVGLinha11 from "@/app/components/SVGPaths/SVGLinha11/SVGLinha11";
import SVGLinha12 from "@/app/components/SVGPaths/SVGLinha12/SVGLinha12";
import SVGLinha13 from "@/app/components/SVGPaths/SVGLinha13/SVGLinha13";
import SVGLinha15 from "@/app/components/SVGPaths/SVGLinha15/SVGLinha15";
import Baldeacoes from "@/app/components/SVGImages/Baldeações";
import {getRota} from "@/app/components/services/api";


const normalizarNomeEstacaoParaClasse = (nome: string): string => {
  if (!nome) return '';
  return nome.toLowerCase().replace(/\s+/g, '').replace(/[.\-']/g, '');
};

const MapaInterativo = () => {
  const [rota, setRota] = useState<string[]>([]);

  useEffect(() => {

    const todosOsPaths = document.querySelectorAll<SVGPathElement>('#mapaPrincipalSVG path');
    todosOsPaths.forEach(p => {
      p.setAttribute('stroke', 'rgba(200, 200, 200, 0.3)');
      p.setAttribute('strokeWidth', '8');
      p.setAttribute('stroke-dasharray', 'none');
    });


    const todasAsEstacoes = document.querySelectorAll<SVGCircleElement>('#mapaPrincipalSVG circle');
    todasAsEstacoes.forEach(c => {
      c.setAttribute('fill', 'rgba(150, 150, 150, 0.5)');
      c.setAttribute('r', '6');
    });

    if (rota && rota.length > 0) {
      const rotaNormalizada = rota.map(normalizarNomeEstacaoParaClasse);


      rotaNormalizada.forEach(nomeEstacaoNormalizado => {
        if (!nomeEstacaoNormalizado) return;
        const seletorEstacao = `#mapaPrincipalSVG .estacao-${nomeEstacaoNormalizado}`;
        const elementoEstacao = document.querySelector<SVGCircleElement>(seletorEstacao);
        if (elementoEstacao) {
          elementoEstacao.setAttribute('fill', 'rgb(0,255,127)');
          elementoEstacao.setAttribute('r', '9');
        } else {

        }
      });


      for (let i = 0; i < rotaNormalizada.length - 1; i++) {
        const estacaoOrigem = rotaNormalizada[i];
        const estacaoDestino = rotaNormalizada[i+1];

        if (!estacaoOrigem || !estacaoDestino) continue;


        let seletorPath = `#mapaPrincipalSVG .segmento-${estacaoOrigem}-${estacaoDestino}`;
        let elementoPath = document.querySelector<SVGPathElement>(seletorPath);

        if (!elementoPath) {
          seletorPath = `#mapaPrincipalSVG .segmento-${estacaoDestino}-${estacaoOrigem}`;
          elementoPath = document.querySelector<SVGPathElement>(seletorPath);
        }

        if (elementoPath) {
          elementoPath.setAttribute('stroke', 'rgb(0,255,127)');
          elementoPath.setAttribute('stroke-width', '12');
          elementoPath.setAttribute('stroke-dasharray', '15,7');
        } else {

        }
      }
    }
  }, [rota]);

  const trocaRota = async () => {
    const origemInput = document.getElementById("origem") as HTMLInputElement;
    const destinoInput = document.getElementById("destino") as HTMLInputElement;

    const origem = origemInput?.value;
    const destino = destinoInput?.value;

    if (!origem || !destino) {
      alert("Selecione sua origem e seu destino.");
      return;
    }

    try {
        const rotaCalculada = await getRota(origem, destino);
        setRota(rotaCalculada);
        alert("Sua rota foi traçada no mapa");
        console.log("resposta do backend2: ", rotaCalculada);
    }catch (error){
        console.error("Detalhe do erro: ", error);
        alert( "Ocorreu um erro ao buscar a rota.");
    }
  }

  return (
      <>
        <div className='h-70 border-2'>
          <Localizacao />
          <button onClick={trocaRota} className='lg:ml-[45%] md:ml-[40%] sm:ml-[35%] sm:mt-[-50px] md:mt-0 border-white text-white border-1 mt-0 bg-gray-500 2xl rounded-lg w-[200px] h-[60px]'>Calcular Rota</button>
        </div>

        <div className='relative w-auto  border-2 mt-7'>
          <Image className="  " src={"/images/mapa_cptm.png"} alt="Mapa CPTM" width={1900} height={900} />
          <svg
              id="mapaPrincipalSVG" 
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 2000 1800" 
              width="2000"
              height="1800"
              className='absolute top-0 left-0 w-full h-auto'
          >
            <rect
                x="0"
                y="0"
                width="2000"
                height="1600"
                fill="none"
                stroke="none"
                strokeWidth="2"
            />

            <SVGLinha1/>
            <SVGLinha2/>
            <SVGLinha3/>
            <SVGLinha4/>
            <SVGLinha5/>
            <SVGLinha7/>
            <SVGLinha8/>
            <SVGLinha9/>
            <SVGLinha10/>
            <SVGLinha11/>
            <SVGLinha12/>
            <SVGLinha13/>
            <SVGLinha15/>
            <Baldeacoes/>
          </svg>
        </div>
      </>
  );
}

export default MapaInterativo;