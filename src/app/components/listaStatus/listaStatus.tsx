import { useEffect, useState } from "react";

type LinhaStatus = {
    codigo: number;
    situacao: string;
};

const ListaStatus = () => {
    const [statusLinhas, setStatusLinhas] = useState<LinhaStatus[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchStatus = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await fetch("https://routehelper.up.railway.app/statusLinha");
                if (!response.ok) {
                    throw new Error(`Erro na requisição: ${response.status}`);
                }
                const data = await response.json();
                setStatusLinhas(data);
            } catch (err: unknown) {
                console.error("Erro ao buscar status das linhas:", err);
                setError("Erro ao carregar os status das linhas.");
            } finally {
                setLoading(false);
            }
        };

        fetchStatus();
    }, []);

    const getStatus = (numeroLinha: number): string => {
        if (loading) {
            return "Carregando...";
        }
        if (error) {
            return "Erro ao carregar.";
        }
        const linha = statusLinhas.find((l: LinhaStatus) => l.codigo === numeroLinha);
        return linha ? linha.situacao : "Não encontrado";
    };

    return (
        <>
            <div className="float-right bg-[#D9D9D9] h-[900px] w-[600px] sm:mr-[20px] md:mr-[70px] lg:mr-6 rounded-2xl mt-10  ">
                <p className="text-black mt-5 text-3xl text-center">Operações das Linhas</p>

                <div className="flex flex-col float-left ml-5 mt-10 ">
                    <div>
                        <div className="w-[70px] h-[70px] bg-[#191792] float-left ">
                            <p className="text-white text-2xl text-center mt-5">1</p>
                        </div>
                        <p className="text-black text-xl float-left mt-[20px] ml-2">{getStatus(1)}</p>
                    </div>

                    <div>
                        <div className="w-[70px] h-[70px] bg-[#E92D3C]  mt-[40px] float-left">
                            <p className="text-white text-2xl text-center mt-5">3</p>
                        </div>
                        <p className="text-black text-xl float-left  ml-2 mt-[60px]">{getStatus(3)}</p>
                    </div>

                    <div>
                        <div className="w-[70px] h-[70px] bg-[#755098]  mt-[40px] float-left ">
                            <p className="text-white text-2xl text-center mt-5">5</p>
                        </div>
                        <p className="text-black text-xl float-left mt-[60px] ml-2">{getStatus(5)}</p>
                    </div>

                    <div>
                        <div className="w-[70px] h-[70px] bg-[#AFA691] mt-[40px] float-left">
                            <p className="text-white text-2xl text-center mt-5">8</p>
                        </div>
                        <p className="text-black text-xl float-left mt-[60px] ml-2">{getStatus(8)}</p>
                    </div>

                    <div>
                        <div className="w-[70px] h-[70px] bg-[#25839A] mt-[40px] float-left">
                            <p className="text-white text-2xl text-center mt-5">10</p>
                        </div>
                        <p className="text-black text-xl float-left mt-[60px] ml-2">{getStatus(10)}</p>
                    </div>

                    <div>
                        <div className="w-[70px] h-[70px] bg-[#1D2474] mt-[40px] float-left">
                            <p className="text-white text-2xl text-center mt-5">12</p>
                        </div>
                        <p className="text-black text-xl float-left mt-[60px] ml-2">{getStatus(12)}</p>
                    </div>

                    <div>
                        <div className="w-[70px] h-[70px] bg-[#8F8F8C] mt-[40px] float-left">
                            <p className="text-white text-2xl text-center mt-5">15</p>
                        </div>
                        <p className="text-black text-xl float-left mt-[60px] ml-2">{getStatus(15)}</p>
                    </div>
                </div>

                <div className="flex flex-col float-right mr-5 mt-10 ">
                    <div>
                        <div className="w-[70px] h-[70px] bg-[#167A5F] float-left">
                            <p className="text-white text-2xl text-center mt-5">2</p>
                        </div>
                        <p className="text-black text-xl float-left mt-[20px] ml-2">{getStatus(2)}</p>
                    </div>

                    <div>
                        <div className="w-[70px] h-[70px] bg-[#FAC552] mt-[40px] float-left">
                            <p className="text-white text-2xl text-center mt-5">4</p>
                        </div>
                        <p className="text-black text-xl float-left mt-[60px] ml-2">{getStatus(4)}</p>
                    </div>

                    <div>
                        <div className="w-[70px] h-[70px] bg-[#A9174A] mt-[40px] float-left">
                            <p className="text-white text-2xl text-center mt-5">7</p>
                        </div>
                        <p className="text-black text-xl float-left mt-[60px] ml-2">{getStatus(7)}</p>
                    </div>

                    <div>
                        <div className="w-[70px] h-[70px] bg-[#40AEA4] mt-[40px] float-left">
                            <p className="text-white text-2xl text-center mt-5">9</p>
                        </div>
                        <p className="text-black text-xl float-left mt-[60px] ml-2">{getStatus(9)}</p>
                    </div>

                    <div>
                        <div className="w-[70px] h-[70px] bg-[#E75F2C] mt-[40px] float-left">
                            <p className="text-white text-2xl text-center mt-5">11</p>
                        </div>
                        <p className="text-black text-xl float-left mt-[60px] ml-2">{getStatus(11)}</p>
                    </div>

                    <div>
                        <div className="w-[70px] h-[70px] bg-[#38B35A] mt-[40px] float-left">
                            <p className="text-white text-xl text-center mt-5">13</p>
                        </div>
                        <p className="text-black text-xl float-left mt-[60px] ml-2">{getStatus(13)}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ListaStatus;