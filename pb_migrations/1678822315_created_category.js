migrate((db) => {
  const collection = new Collection({
    "id": "tmir08w4bhr0329",
    "created": "2023-03-14 19:31:55.508Z",
    "updated": "2023-03-14 19:31:55.508Z",
    "name": "category",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "bse4wjlk",
        "name": "category_name",
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
  const collection = dao.findCollectionByNameOrId("tmir08w4bhr0329");

  return dao.deleteCollection(collection);
})
