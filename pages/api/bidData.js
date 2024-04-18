const bidData = require("../../shared/testData/bidsData");

export default function handler(req, res) {
  console.log(bidData.default)
  res.status(200).json(bidData.default);
}
