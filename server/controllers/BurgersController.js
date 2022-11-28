import { burgersService } from "../services/BurgersService";
import BaseController from "../utils/BaseController";

export class BurgersController extends BaseController {
  constructor() {
    super("api/burgers");
    this.router
      .get("", this.getBurgers)
      .post("", this.createBurger)
      .get("/:id", this.burgerById)
      .put("/:id", this.updateBurger)
      .delete("/:id", this.deleteBurger);
  }
  async getBurgers(req, res, next) {
    try {
      let burgers = await burgersService.getBurgers();
      return res.send(burgers);
    } catch (error) {
      next(error);
    }
  }

  async createBurger(req, res, next) {
    try {
      let burger = await burgersService.createBurger(req.body);
      return res.send();
    } catch (error) {
      next(error);
    }
  }

  async burgerById(req, res, next) {
    try {
      let burger = await burgersService.burgerById(req.params.id);
      return res.send();
    } catch (error) {
      next(error);
    }
  }

  async updateBurger(req, res, next) {
    try {
      let burger = await burgersService.updateBurger(req.params.id, req.body);
      return res.send();
    } catch (error) {
      next(error);
    }
  }

  async deleteBurger(req, res, next) {
    try {
      let burger = await burgersService.deleteBurger(req.params.id);
      return res.send();
    } catch (error) {
      next(error);
    }
  }
}
