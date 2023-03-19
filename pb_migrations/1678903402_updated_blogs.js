migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6ey3lhvbkzdycql")

  // remove
  collection.schema.removeField("i25bvrph")

  // remove
  collection.schema.removeField("wdevyru6")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "usdlyttg",
    "name": "content",
    "type": "editor",
    "required": true,
    "unique": true,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "laqr408k",
    "name": "summary",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "i25bvrph",
    "name": "content",
    "type": "text",
    "required": true,
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
    "id": "wdevyru6",
    "name": "summary",
    "type": "editor",
    "required": true,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("usdlyttg")

  // remove
  collection.schema.removeField("laqr408k")

  return dao.saveCollection(collection)
})
