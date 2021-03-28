const express = require("express");
const router = require("express").Router();
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg"
  ) {
    cb(null, true);
  } else {
    cb(new Error("File not supported"), false);
  }
};

const upload = multer({ storage: storage, fileFilter: fileFilter });

let Dataset = require("../models/datasets.model");

//get the data

router.get("/", async (req, res) => {
  try {
    const data = await Dataset.find();
    res.json(data);
  } catch (err) {
    res.json({ message: err });
  }
});

//add data

router.post("/image", upload.single("dataImage"), async (req, res) => {
  console.log(req.file);
  const newData = new Dataset({
    dataset: req.body.dataset,
    category: req.body.category,
    dataImage: req.file.path,
    // dataImage: req.body.dataImage,
  });

  try {
    const savedData = await newData.save();
    res.json(savedData);
  } catch (err) {
    res.json({ message: err });
  }
});

// find specific data
router.get("/:id", async (req, res) => {
  try {
    const dataById = await Dataset.findById(req.params.id);
    res.json(dataById);
  } catch (err) {
    res.json({ message: err });
  }
});

//find by dataset_id

router.get("/datasets/:dataset", async (req, res) => {
  let regex = new RegExp(req.params.dataset, "i");
  try {
    const dataByDatasetId = await Dataset.find({ dataset: regex });
    res.json(dataByDatasetId);
  } catch (err) {
    res.json({ message: err });
  }
});

//find by category_id
router.get("/categories/:category", async (req, res) => {
  let regex = new RegExp(req.params.category, "i");
  try {
    const categoryByCategoryId = await Dataset.find({ category: regex });
    res.json(categoryByCategoryId);
  } catch (err) {
    res.json({ message: err });
  }
});

//delete specific data
router.delete("/:id", async (req, res) => {
  try {
    const deleteData = await Dataset.remove({ _id: req.params.id });
    res.json(deleteData);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
