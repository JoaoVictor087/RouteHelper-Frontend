import Image from "next/image"
import Link from "next/link";

const SobreNos = () =>{
    return(
        <>
            <p className="text-white text-3xl mt-9 ml-7">Membros da equipe:</p>
          
        <div className="xl:ml-[80] ml-[80] sm:ml-[180] md:ml-[190] lg:ml-[0]  ">
            <div className="float-left 2xl:ml-[12%] lg:ml-[7%]  md:ml-[12%] border-2  rounded-2xl mt-15">
                <Image className="rounded-2xl" src="/images/foto2.png" alt="Membro 1" width={250} height={250} />
                <nav className="text-white text-center">
                    <Link className="mr-3" href="https://www.linkedin.com/in/vinicius-kenzo-tocuyosi-01a802326">Linkedin</Link>
                    |
                    <Link className="ml-3" href="https://github.com/vinikenzo">GitHub</Link>
                </nav>
                <p className="text-white">Vinicius Kenzo Tocuyosi RM-559982</p>
            </div>
            

            <div className="float-left 2xl:ml-[12%] md:ml-[12%] lg:ml-[7%] border-2  rounded-2xl mt-20 ">
                <Image className="rounded-2xl" src="/images/foto3.png" alt="Membro 2" width={250} height={250} />
                
                <nav className="text-white text-center ">
                    <Link className="mr-3" href="https://www.linkedin.com/in/joão-victor-alves-1a27ab168/">Linkedin</Link>
                    |
                    <Link className="ml-3" href="https://github.com/JoaoVictor087">GitHub</Link>
                </nav>
                <p className="text-white">João Victor Alves da Silva RM-559726</p>
            </div>

            <div className="float-left 2xl:ml-[12%] md:ml-[12%] lg:ml-[7%] border-2 rounded-2xl mt-15">
                <Image className="rounded-2xl" src="/images/foto1.png" alt="Membro 3" width={250} height={250} />
                <nav className="text-white text-center">
                    <Link className="mr-3" href="https://linkedin.com/in/trevisaan7">Linkedin</Link>
                    |
                    <Link className="ml-3" href="https://github.com/trevisz">GitHub</Link>
                </nav>
                <p className="text-white">João Victor Trevisan RM-560263</p>
            </div>
         </div>   
        </>
    )
}
export default SobreNos;