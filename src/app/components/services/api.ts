const API_URL = process.env.NEXT_PUBLIC_API_URL;

export type LinhaStatus = {
    codigo: number;
    situacao: string;
};

// Função para buscar a rota
export const getRota = async (origem: string, destino: string): Promise<string[]> => {
    const response = await fetch
    (`${API_URL}/rotas?origem=${encodeURIComponent(origem)}&destino=${encodeURIComponent(destino)}`);

    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || 'Erro ao calcular a rota');
    }

    const data : string[] = await response.json();
    console.log("Resposta do backend:", data)
    return data;
};

// Função para buscar o status das linhas
export const getStatusLinhas = async (): Promise<LinhaStatus[]> => {
    const response = await fetch(`${API_URL}/StatusLinha`);

    if (!response.ok) {
        throw new Error('Erro ao buscar status das linhas');
    }

    return response.json();
};
