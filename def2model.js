const schema = require('./person.schema.json')

let personSchema = schema.definitions.Person

let entity = personSchema.title
let fields = personSchema.properties
console.log('model info', entity, fields)
