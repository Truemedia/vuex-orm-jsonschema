# vuex-orm-jsonschema
Generate vuex orm models from JSON schema

## Quickly generate JSON schema from plain JSON
Install quicktype (https://github.com/quicktype/quicktype) and run:
```
quicktype person.json -l schema -o person.schema.json --top-level=person
quicktype coords.json -l schema -o coords.schema.json --top-level=coords
```