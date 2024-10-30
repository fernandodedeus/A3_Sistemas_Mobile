const express = require('express');
const app = express();
app.use(express.json()); // permissao pra api entender json

//exemplo de funcionamento
let tarefas = [
    {id: 1, titulo: "Estude para a prova", completo: false },
    {id: 2, titulo: 'Compre comida', completo: false }

];
// codigo para obter as tarefas pra fazer
app.get('/tarefas', (req, res) => {
    res.json(tarefas);
});

//para adicionar uma tarefa nova

app.post('/tarefas', (req,res) => {
    const novaTarefa = req.body;
    novaTarefa.id = tarefas.length + 1;
    tarefas.push(novaTarefa);
    res.status(201).json(novaTarefa);
});

//rota para uma tarefa especifica

app.get('/tarefas/:id', (req,res) => {
    const tarefa = tarefas.find(t => t.id === parseInt(req.params.id));
    tarefa ? res.json(tarefa) : res.status(404).send('Tarefa não encontrada');

});

//atualizar uma tarefa que ja existe

app.put('/tarefas/:id', (req,res) => {
    const tarefa = tarefas.find(t => t.id === parseInt(req.params.id));
    if (tarefa) {
        Object.assign(tarefa, req.body);
        res.json(tarefa);
    } else {
        res.status(404).send('Tarefa não encontrada');
    
    }
});

// deletar uma tarefa

app.delete('/tarefas/:id', (req,res) => {

        tarefas = tarefas.filter(t => t.id !== parseInt(req.params.id));
        res.status(204).send();

});

//iniciar o servidor

const PORT = 3000
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});