migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("apbu7s8mn0khk6l")

  // remove
  collection.schema.removeField("gsp1bu2r")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "1aa4xb7g",
    "name": "damage",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("apbu7s8mn0khk6l")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gsp1bu2r",
    "name": "damage",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // remove
  collection.schema.removeField("1aa4xb7g")

  return dao.saveCollection(collection)
})
