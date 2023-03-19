migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6ey3lhvbkzdycql")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lhalubpj",
    "name": "blog_title",
    "type": "text",
    "required": true,
    "unique": true,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6ey3lhvbkzdycql")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lhalubpj",
    "name": "title",
    "type": "text",
    "required": false,
    "unique": true,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
