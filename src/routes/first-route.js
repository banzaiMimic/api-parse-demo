const routes = async(fastify, options) => {
  const collection = fastify.mongo.db.collection('test_collection')

  fastify.get('/', async(req, reply) => {
    return { hello: 'friend' }
  })

  // @TODO impl basic api hit and parse it out into a mongo schema
  fastify.get('/api-parser', async(req, reply) => {
    const result = await collection.find().toArray()
    if (result.length === 0) {
      throw new Error('no docs found')
    }
    return result
  })

  // this is just a demo of how fastify handles endpoint params (i.e. for passing in filtering params later)
  fastify.get('/param/:demo', async(req, reply) => {
    const result = await collection.findOne({ animal: req.params.demo })
    if (!result) {
      throw new Error('invalid value')
    }
    return result
  })

  // pushing to mongo quickstart example
  const animalSchema = {
    type: 'object',
    required: ['animal'],
    properties: {
      animal: {
        type: 'string'
      }
    }
  }

  const schema = { body: animalSchema }

  // just demoing how to push into mongo db
  fastify.post('/push-to-mongo-demo', { schema }, async(req, reply) => {
    const result = await collection.insertOne({
      animal: req.body.animal
    })
    return result
  })

}

export default routes