const accesso = 'http://137.184.108.252:5000/api';
/*para acessar tenho que fazer requisições http, sendo:
 get: buscar dados
 post: enviar novos dados
 put/patch: atualizador dados existentes
 delete: deletar algum dado

 recursos como esses me permitem interajir com a api*/
 
 async function getDados() {
    try {
        const response = await fetch(accesso);
        if (!response.ok) {
            throw new Error(`Erro: ${response.status}`);
        }
            const dados = await response.json();
            console.log(dados);
    } catch(error) {
        console.error('Problema ao buscar dados:', error);
    }
 }

 getDados();

 /*async é uma palavra chave que permite o uso do await
 async marca uma função declarada para o uso do await, que pausa a exec
 até que a promise seja resolvida */
