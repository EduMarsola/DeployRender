import fastify from "fastify";
import dotenv from "dotenv";

const server = fastify()
server.get('/', () =>{
    return "Deploy com sucesso"
})


server.listen({port : process.env.PORT ?? 1000})