'use client'
import { useEffect, useState } from "react";

const Localizacao = () => {
    const [estacoes, setEstacoes] = useState<string[]>([]);

    useEffect(() => {
        const listaEstacoes = async () => {
            const response = await fetch('/TrensEMetrosSP.json')
            const data = await response.json();
            setEstacoes(data.map((estacao: { estacao: string }) => estacao.estacao))
        }
        listaEstacoes();
    }, [])

    return (
        <>
            <form>
                <div className=" md:h-[190px] 2xl:h-[224px] bg-black w-full  md:mt-0 sm:mt-25 sm:h-40 ">
                    <div className="  float-left 2xl:ml-90  text-white md:w-[200px] md:h-[60px] sm:w-[200px] sm:h-[30px] ">
                        <label>Selecione a sua origem</label>
                        <input list='listaEstacoes' id='origem' className="rounded-lg text-white p-1 h-15 w-50 text-center border-1 bg-black" placeholder="Ex: Água Branca"
                        />
                        <datalist id="listaEstacoes">
                            {estacoes.map((estacao, index) => (
                                <option key={index} value={estacao} />
                            ))}


                        </datalist>
                    </div>

                    <div className=" 2xl:mr-90 float-right mt-0  bg-black w-[200px] h-[60px] text-white ">
                        <label>Selecione o seu destino</label>
                        <input list='listaEstacoes' id='destino' className="rounded-lg text-white p-1 h-15 w-50 text-center border-1 bg-black" placeholder="Ex: São Joaquim"
                        />

                    </div>
                </div>

            </form>
        </>
    )
}
export default Localizacao;