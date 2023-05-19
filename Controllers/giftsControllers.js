const express = require("express");
const gifts = express.Router();

const {
  getAllGifts,
  getGift,
  createGifts,
  deleteGifts,
  updateGifts,
} = require("../queries/gifts.js");

gifts.get("/", async (req, res)=> {
  const allGifts = await getAllGifts();
  res.send(allGifts);
});

gifts.get("/:id", async (req, res)=> {
    const { id } = req.params;
    const gift = await getGift(id); 

    if (!gift.error) { 
        res.status(200).json(gift);
    } else if (supply.error.code === 0){
        res.status(404).send("Not Found")

    } else {
        res.status(500).json({error: "server error"});
    }
})

gifts.post("/", async (req, res)=> {
  try {
  const newGift = await createGifts(req.body);
  res.status(200).json(newGift);
  console.log("new gift:", newGift);
}
catch (error) {
  res.status(400).json({ error: error });
}
});  

gifts.delete("/:id", async (req, res)=> {
  const { id } = req.params;
  const deletedGift = await deleteGifts(id);
  if (deletedGift.id) {
    res.status(200).json(deletedGift);
  }else{
  res.status(404).json(deletedGift);
  }
});

gifts.put("/:id", async (req, res)=> {
  const { id } = req.params;
  const {name, brand, price, quantity, description, is_favorite, is_wearable} = req.body; 
  const updatedGift = await updateGifts(id, req.body);

  res.status(200).json(updatedGift);
});


module.exports = gifts;