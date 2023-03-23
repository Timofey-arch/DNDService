migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qvbhsui4euvisad")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nqso0x5f",
    "name": "characterTraits",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fn4jiscb",
    "name": "ideals",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xdahh3j3",
    "name": "affections",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "s1xmuk4h",
    "name": "flaws",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "3arcocwj",
    "name": "statsToIncrease",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "aqaxxh5d",
    "name": "age",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lugiq4fj",
    "name": "outlook",
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
    "id": "vqknuewy",
    "name": "size",
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
    "id": "8blja16g",
    "name": "speed",
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
    "id": "6qrbzrk4",
    "name": "darkVision",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bkhr70au",
    "name": "languages",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nise5kbq",
    "name": "varieties",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qvbhsui4euvisad")

  // remove
  collection.schema.removeField("nqso0x5f")

  // remove
  collection.schema.removeField("fn4jiscb")

  // remove
  collection.schema.removeField("xdahh3j3")

  // remove
  collection.schema.removeField("s1xmuk4h")

  // remove
  collection.schema.removeField("3arcocwj")

  // remove
  collection.schema.removeField("aqaxxh5d")

  // remove
  collection.schema.removeField("lugiq4fj")

  // remove
  collection.schema.removeField("vqknuewy")

  // remove
  collection.schema.removeField("8blja16g")

  // remove
  collection.schema.removeField("6qrbzrk4")

  // remove
  collection.schema.removeField("bkhr70au")

  // remove
  collection.schema.removeField("nise5kbq")

  return dao.saveCollection(collection)
})
