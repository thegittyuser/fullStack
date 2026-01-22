import cartModel from "../model/cart.model.js";

export const cart = async (req, res) => {
  try {
    const { id, title, price, image } = req.body;

    const existingItem = await cartModel.findOne({ id: id });
    if (existingItem) {
      existingItem.quantity += 1;
      existingItem.save();
      return res
        .status(200)
        .json({ ok: true, message: "Product Added to Cart" });
    }

    await cartModel.create({
      id,
      title,
      price,
      image,
    });

    res.status(201).json({
      ok: true,
      message: "Product Added to Cart",
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      ok: false,
      message: "Server error",
    });
  }
};

export const getCart = async (req, res) => {
  try {
    const cartItems = await cartModel.find();
    return res.status(200).json({ ok: true, cartItems });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      ok: false,
      message: "Server error",
    });
  }
};

export const increaseQty = async (req, res) => {
  try {
    const existingItem = await cartModel.findById(req.params.id);
    existingItem.quantity += 1;
    existingItem.save();
    return res.status(200).json({ ok: true, message: "Quantity Updated" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      ok: false,
      message: "Server error",
    });
  }
};

export const decreaseQty = async (req, res) => {
  try {
    const existingItem = await cartModel.findById(req.params.id);
    if (existingItem.quantity > 1) {
      existingItem.quantity -= 1;
      existingItem.save();
      return res.status(200).json({ ok: true, message: "Quantity Updated" });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      ok: false,
      message: "Server error",
    });
  }
};

export const removeItem = async (req, res) => {
  try {
    await cartModel.findByIdAndDelete(req.params.id);
    return res.status(200).json({ok: true, message: "Item removed from cart"})
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      ok: false,
      message: "Server error",
    });
  }
};


export const placeOrder = (req, res) => {
  
}