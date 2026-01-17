import cartModel from "../model/cart.model.js";

export const cart = async (req, res) => {
  try {
    const { id, title, price, image } = req.body;

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
  const cartItems = await cartModel.find();
  return res.status(200).json({ ok: true, cartItems });
};
