import mongoose from "mongoose";

const orderSchema = mongoose.Schema(
  {
    customer: {
      firstName: {
        type: String,
        required: true,
      },
      lastName: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      phone: {
        type: String,
        required: true,
      },
      address: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      postalCode: {
        type: Number,
        required: true,
      },
    },

    product: {
      id: {
        type: Number,
      },
      title: {
        type: String,
      },
      price: {
        type: Number,
      },
      image: {
        type: String,
      },
    },

    totalAmount: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const orderModel = mongoose.model("orderModel", orderSchema, "orders");
export default orderModel;
