import Fastify from 'fastify'
import dbConnector from './data/db-connector.js'
import firstRoute from './routes/first-route.js'

const PORT = 8090
const HOST = '0.0.0.0'

const fastify = Fastify({
  logger: true
})

fastify.register(dbConnector)
fastify.register(firstRoute)

const start = async() => {
  try {
    await fastify.listen({ 
      port: PORT,
      host: HOST
    })

    console.log('-----------------------------------------------')
    console.log(`[[ -- server listening on ${HOST}:${PORT} -- ]]`)

  } catch(err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()