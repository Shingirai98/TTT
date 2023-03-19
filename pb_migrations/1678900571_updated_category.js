migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tmir08w4bhr0329")

  collection.name = "blog_categories"

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bse4wjlk",
    "name": "title",
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
  const collection = dao.findCollectionByNameOrId("tmir08w4bhr0329")

  collection.name = "category"

  // update
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
})
