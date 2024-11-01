const login = 'http://137.184.108.252:5000/api/login';
const cidades = 'http://137.184.108.252:5000/api/cidades';

async function gerarToken() {
    try {
        const response = await fetch(login, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: 'fernandodedeus525@gmail.com', 
                password: 'wadWaEGS00o1' 
            })
        });
        
        if (!response.ok) {
            throw new Error(`Erro de autenticação: ${response.status}`);
        }
        
        const data = await response.json();
        return data.token; 
    } catch (error) {
        console.error('Erro ao obter token:', error);
    }
}
