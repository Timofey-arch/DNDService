migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("apbu7s8mn0khk6l")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ku74s4v1",
    "name": "description",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("apbu7s8mn0khk6l")

  // remove
  collection.schema.removeField("ku74s4v1")

  // remove
  collection.schema.removeField("gsp1bu2r")

  return dao.saveCollection(collection)
})
