import mongoose from "mongoose";
import { BurgerSchema } from "../models/Burger";
import { ValueSchema } from "../models/Value";

class DbContext {
  Values = mongoose.model("Value", ValueSchema);
  Burgers = mongoose.model("Burger", BurgerSchema);
}

export const dbContext = new DbContext();
