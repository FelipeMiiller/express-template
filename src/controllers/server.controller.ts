import { Request, Response } from "express";

export class MainController {
  async handle(request: Request, response: Response): Promise<Response> {
    return response.status(200).json("Hello World");
  }
}
