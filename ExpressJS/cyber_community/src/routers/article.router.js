import express from 'express';
import { articleController } from '../controllers/article.controller';

const articleRouter = express.Router();

// Tạo route CRUD
articleRouter.post('/', articleController.create);
articleRouter.get('/', articleController.findAll);
articleRouter.get('/:id', articleController.findOne);
articleRouter.patch('/:id', articleController.update);
articleRouter.delete('/:id', articleController.remove);

export default articleRouter;