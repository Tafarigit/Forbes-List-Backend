const express = require("express");
const gifts = express.Router();

const {
  getAllGifts,
  getGift,
  createGifts,
  deleteGifts,
  updateGifts,
} = require("../queries/gifts.js");

gifts.get("/", async (req, res) => {
  const allGifts = await getAllGifts();
  res.send(allGifts);
});

gifts.get("/:id", async (req, res) => {
    const { id } = req.params;
    const gift = await getGift(id); 

    if (!gift.error) { 
        res.status(200).json(gift);
    } else if (supply.error.code === 0){
        res.status(404).send("Not Found")

    }
})


module.exports = gifts;