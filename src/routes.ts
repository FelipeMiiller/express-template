import express from 'express';
import { MainController } from './controllers/server.controller';

export const routes = express.Router();

const controller = new MainController();




routes.get('', controller.handle);

