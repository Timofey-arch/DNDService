migrate((db) => {
  const collection = new Collection({
    "id": "co1bo18osqekgoa",
    "created": "2023-03-23 12:27:54.808Z",
    "updated": "2023-03-23 12:27:54.808Z",
    "name": "armor",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "69rh0sck",
        "name": "name",
        "type": "text",
        "required": true,
        "unique": true,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "j5hxivrx",
        "name": "type",
        "type": "text",
        "required": true,
        "unique": true,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "kilcmz4b",
        "name": "cost",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
        "system": false,
        "id": "mzbp4cna",
        "name": "armorClass",
        "type": "json",
        "required": true,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "vyxpvtgt",
        "name": "strengthNeeded",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
        "system": false,
        "id": "lnul8pvv",
        "name": "secrecy",
        "type": "bool",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "nf5u7ycc",
        "name": "weigth",
        "type": "number",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("co1bo18osqekgoa");

  return dao.deleteCollection(collection);
})
