migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wnd5fraktyre9rk")

  // remove
  collection.schema.removeField("pygloodk")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bkf5kzpo",
    "name": "hitsDices",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gj8hefrt",
    "name": "spells",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wnd5fraktyre9rk")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pygloodk",
    "name": "hitsDices",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // remove
  collection.schema.removeField("bkf5kzpo")

  // remove
  collection.schema.removeField("gj8hefrt")

  return dao.saveCollection(collection)
})
