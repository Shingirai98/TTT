migrate((db) => {
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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6dneaga67q5hjhq")

  // remove
  collection.schema.removeField("j5emgp0s")

  return dao.saveCollection(collection)
})
