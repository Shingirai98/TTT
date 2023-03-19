migrate((db) => {
  const collection = new Collection({
    "id": "n1gabdjny484lj2",
    "created": "2023-03-19 07:50:27.971Z",
    "updated": "2023-03-19 07:50:27.971Z",
    "name": "review",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "msh7cygk",
        "name": "authorName",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "ofmeefix",
        "name": "reviewComment",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "oghnf43o",
        "name": "profilePic",
        "type": "file",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "maxSize": 5242880,
          "mimeTypes": [],
          "thumbs": []
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
  const collection = dao.findCollectionByNameOrId("n1gabdjny484lj2");

  return dao.deleteCollection(collection);
})
