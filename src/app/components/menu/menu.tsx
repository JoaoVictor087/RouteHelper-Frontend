
import Link from "next/link"

const Menu = () => {
    return (
        <>
            <ul className="flex space  md:w-100 lg:w-auto md:mt-0 sm:mt-4 md:float-right sm:float-left  mr-[0px]">
                <div className=" border-1 h-[99px] md:w-[150px] sm:w-[160px] text-center text-3xl text ">
                    <li className="text-center sm:text-3xl lg:text-3xl mt-7 md:text-xl  "><Link href="/">Home</Link></li>
                </div>

                <div className=" border-1 h-[99px] md:w-[150px] :w-[160px] text-center text-3xl text ">
                    <li className="text-center sm:text-3xl lg:text-3xl  md:mt-4 lg:mt-2 sm:mt-2 md:text-xl "><Link href="/components/mapaInterativo">Mapa Interativo</Link></li>
                </div>

                <div className="border-1 h-[99px] md:w-[150px]   text-center text-3xl text ">
                    <li className="text-center sm:text-3xl lg:text-3xl sm:mt-2 md:mt-7 md:text-xl "><Link href="/components/sobreNos">Sobre Nós</Link></li>
                </div>
            </ul>
        </>
    )
}
export default Menu;