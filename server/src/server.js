import express from "express";

const app = express();


app.get('/usuarios', () => {
    console.log('Listagem de usuários');
});


app.listen(7777);