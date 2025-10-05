'use client'
import { SubmitHandler, useForm } from "react-hook-form";

const Reportes = () => {


    type FormValue = {
        nome: string;
        local: string;
        descricao: string;
    }

    const { register, handleSubmit, formState: { errors } } = useForm<FormValue>();

    const onSubmit: SubmitHandler<FormValue> = async (data) => {
        try {
            const response = await fetch('https://routehelper.up.railway.app/reportes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    nome: data.nome || "",       
                    local: data.local,           
                    dscr: data.descricao         
                }),
            });

            if (!response.ok) {
                throw new Error('Erro ao enviar dados');
            }

            const result = await response.text();
            console.log('Resposta do backend:', result);
            alert(result);
        } catch (error) {
            console.error('Erro:', error);
            alert('Erro ao enviar o reporte.');
        }
    };
    return (
        <>
            <p className="text-white text-5xl ml-7 mt-4">Reporte de Incidentes</p>
            <form className="ml-6 mt-10" onSubmit={handleSubmit(onSubmit)}>
                <label className="text-white text-2xl">Nome: </label>
                <br />
                <input className="bg-white border border-white w-xl rounded" placeholder="Digite o seu nome (opcional)" {...register("nome")} />
                <br />
                <br />
                <label className="text-white text-2xl">Local:* </label>
                <br />
                <input className="bg-white border border-white w-xl rounded" placeholder="Digite o local do incidente" {...register("local", { required: true })} />
                {errors.local && <span className="text-white">campo obrigatório</span>}
                <br />
                <br />
                <label className="text-white text-2xl">Descrição:* </label>
                <br />
                <textarea className=" bg-white border border-white w-xl rounded" placeholder="Digite a descrição do incidente" {...register("descricao", { required: true })} />
                {errors.descricao && <span className="text-white">campo obrigatório</span>}
                <br />
                <br />

                <button className="text-white border border-white rounded text-2xl bg-blue-600" type="submit">Enviar</button>
            </form>

        </>
    )
}
export default Reportes;