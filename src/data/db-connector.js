import fastifyPlugin from 'fastify-plugin'
import fastifyMongo from '@fastify/mongodb'

const {
  MONGO_DB
} = process.env

const dbConnector = async(fastify, options) => {
  fastify.register(fastifyMongo, {
    forceClose: true,
    url: MONGO_DB
  })
}

export default fastifyPlugin(dbConnector)
