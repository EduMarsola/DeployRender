import fastify from "fastify";

const server = fastify()
server.get('/', () =>{
    return "Deploy com sucesso"
})


server.listen({port : 1000})