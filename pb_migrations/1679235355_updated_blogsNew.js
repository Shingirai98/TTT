migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6dneaga67q5hjhq")

  // remove
  collection.schema.removeField("j5emgp0s")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hqmgbop0",
    "name": "blog_image",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [],
      "thumbs": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6dneaga67q5hjhq")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "j5emgp0s",
    "name": "blog_image",
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
  collection.schema.removeField("hqmgbop0")

  return dao.saveCollection(collection)
})
