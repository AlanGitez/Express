const express = require("express");


const server = express();

let personas = [{id:1,nombre:"Alan"},{id:2,nombre:"Alejandra"}]

server.use(express.json());

server.get("/", (req, res) => {
    res.send("Hi world! que haces padre?");
})

server.get("/api/personas", (req, res) => {
    res.send(personas);
});

server.get("/api/personas/:id", (req, res) => {
    const id = req.params.id;
    const persona = personas.find(persona => persona.id == id);
    if(persona) res.send(persona);
    
    res.status(404).end();
});

server.post("/api/personas", (req, res) => {
    personas.push(req.body);
    res.status(201).send(req.body);
});

server.delete("api/personas/:id", (req, res) => {
    personas = personas.filter(persona => persona.id != Number(req.params.id));
    res.status(204).send("joya");
})

server.listen(3000);