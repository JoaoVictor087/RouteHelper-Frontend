'use client';
import ListaStatus from "./components/listaStatus/listaStatus";
import Link from "next/link";


export default function Home() {
  return (
    <>
      <div>
        <div className="float-left sm:ml-12 md:ml-30 lg:ml-0 2xl:ml-15 ">
          <p className="sm:mt-[100px] lg:mt-[200px] xl:mt-[250px] sm:text-7xl md:text-7xl xl:text-7xl lg:text-5xl md:ml-7 xl:ml-7 lg:ml-4  text-white">Seja Bem-Vindo!</p>
          <Link href="/components/mapaInterativo">
          <button className="bg-[#474747] float-left  min-h-[100px] md:h-[300px]  md:w-[400px] xl:w-[400px] lg:w-[300px] rounded-2xl  mt-9 md:ml-[80px] xl:ml-[100px] lg:ml-12 text-5xl text-white text-center p-[5px]" type="button">Quer Calcular Sua Rota?</button>
          </Link>
        </div>

        <ListaStatus />


      </div>
    </>
  );
}
