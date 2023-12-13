const express = require("express");
const router = express.Router();
const controller = require("../controller/Unstitched.controller")


router.post("/",controller.store);

// router.get('/:category', controller.index);
// router.get('/:id', controller.get);
router.get('/category/:category', controller.index);
router.get('/id/:id', controller.get);

// router.get('/:category',controller.index);
// router.get('/:id',controller.get);

// Get data by ID

router.delete("/:id",controller.destroy)
router.put("/:id",controller.update)

module.exports = router;