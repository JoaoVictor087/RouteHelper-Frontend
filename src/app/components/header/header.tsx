import Image from "next/image";
import Menu from "../menu/menu";

const Header = () => {
    return (
        <>
            <header className="h-[100px] border-1 w-auto text-white border-white">

                <Image className=" float-left ml-7 mt-2 md:w-[300px] md:h-[60px] xl:w-[397px] xl:h-[75px] md:mt-4 sm:w-[397px] sm:h-[75px]" src="/images/Logo_ViaQuatro_ModoEscuro.png" alt="LogoViaQuatro" width={397} height={75} />
                
                <Menu />

            </header>
        </>
    )
}
export default Header;