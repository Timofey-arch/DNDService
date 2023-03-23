migrate((db) => {
  const collection = new Collection({
    "id": "qvbhsui4euvisad",
    "created": "2023-03-23 11:52:23.559Z",
    "updated": "2023-03-23 11:52:23.559Z",
    "name": "races",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "eq8eefuo",
        "name": "name",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
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
  const collection = dao.findCollectionByNameOrId("qvbhsui4euvisad");

  return dao.deleteCollection(collection);
})
