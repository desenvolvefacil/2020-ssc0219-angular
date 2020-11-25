module.exports = app => {
    const cat = require("../controllers/categoria.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", cat.create);
  
    // Retrieve all Tutorials
    router.get("/", cat.findAll);
  
    // Retrieve all published Tutorials
    router.get("/published", cat.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", cat.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", cat.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", cat.delete);
  
    // Create a new Tutorial
    router.delete("/", cat.deleteAll);
  
    app.use('/api/categoria', router);
  };