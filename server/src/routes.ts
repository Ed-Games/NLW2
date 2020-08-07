import express from 'express'
import ClassController from './controllers/classesController';
import ConnectionsController from './controllers/connectionsController';


const routes = express.Router();

const classesController = new ClassController();
const connections = new ConnectionsController();


routes.post('/classes',classesController.create);

routes.get('/classes',classesController.index);

routes.post('/connections',connections.create);

routes.get('/connections',connections.index);

export default routes; 