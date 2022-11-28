import { Schema } from "mongoose";

export const BurgerSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  ingredients: { type: String, required: true },
  description: { type: String, required: true },
  isGluten: { type: Boolean, required: true },
});
