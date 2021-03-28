const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// require('mongoose-currency').loadType(mongoose);
// const Currency = mongoose.Types.Currency;

const datasetSchema = new Schema(
  {
    dataset: { type: String, required: true },
    category: { type: String, required: true },
    dataImage: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Dataset = mongoose.model("dataset", datasetSchema);

module.exports = Dataset;
