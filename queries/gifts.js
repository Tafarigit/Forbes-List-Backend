const db = require("../db/dbConfig.js");

const getAllGifts = async () => {
    try {
        const allGifts = await db.any('SELECT * FROM gifts');
        return allGifts;
    } catch (err) {
        return err;
    }
}

const getGift = async (id) => {
    try {
    const oneGift = await db.one('SELECT * FROM gift WHERE id=$1', id);
    return oneGift;
} catch (error) {
    return { error: error };

}
}

const createGifts = async (gift) => {
    try {
        const newGift = await db.one(
            'INSERT INTO gifts (name, brand, price, quantity, description, in_stock) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
            [gift.name, gift.brand, gift.price, gift.quantity, gift.description, gift.is_favorite, gift.is_wearable]
        );
        return newGift;
    } catch (error) {
        throw { error: error };
    }
}

const deleteGifts = async(id) => {
    try {
      const deletedGift = await db.one(
        "DELETE FROM gift WHERE id=$1 RETURNING *",
        id);
        return deletedGift;
    }catch(error){
      return {error: error};
    }
  }

const updateGifts = async (id, gift) => {
    try {
        const updatedGift = await db.one(
            'UPDATE gifts SET name=$1, brand=$2, price=$3, quantity=$4,description=$5,in_stock=$6 where id=$7 RETURNING *',
            [gift.name, gift.brand, gift.price, gift.quantity, gift.description, gift.in_favorite, gift.is_wearable, id]
        );
        return updatedGift;
    } catch (error) {
        throw error;
    }
};

module.exports = { getAllGifts, getGift, createGifts, deleteGifts, updateGifts };