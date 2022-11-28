import { dbContext } from "../db/DbContext";

class BurgersService {
  async deleteBurger(burgerId) {
    const burger = this.burgerById(burgerId);
    let burgerRemoved = dbContext.Burgers.findByIdAndRemove(burger);
    return "Removed burger.";
  }

  async updateBurger(id, burgerData) {
    const burger = await this.burgerById(id);
    burger.name = burgerData.name || burger.name;
    burger.price = burgerData.price || burger.price;
    burger.ingredients = burgerData.ingredients || burger.ingredients;
    burger.description = burgerData.description || burger.description;
    burger.isGluten = burgerData.isGluten || burger.isGluten;
  }

  async burgerById(id) {
    const res = await dbContext.Burgers.findById(id);
    if (!res) {
      throw new Error("That Burger does not exist.");
    }
    return res;
  }

  async createBurger(body) {
    const res = await dbContext.Burgers.create(body);
    return res;
  }

  async getBurgers() {
    const res = await dbContext.Burgers.find();
    return res;
  }
}

export const burgersService = new BurgersService();
