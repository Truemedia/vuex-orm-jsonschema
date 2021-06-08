const Ajv = require("ajv")
const ajv = new Ajv() 

const schema = require('./person.schema.json')
const data = require('./person.json')

const validate = ajv.compile(schema.definitions.PersonSchema)

const valid = validate(data)
if (!valid) console.log(validate.errors)