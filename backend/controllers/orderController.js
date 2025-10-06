import Order from "../models/Order.js";

export const createOrder = async (req, res) => {
  try {
    const order = await Order.create({ ...req.body, user: req.user.id });
    res.json(order);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getUserOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user.id }).populate("books.book");
    res.json(orders);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
