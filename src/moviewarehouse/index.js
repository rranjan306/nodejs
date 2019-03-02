'use strict';

import express from 'express';
import MoviewarehouseController from './controller/moviewarehouse';

const router = express.Router();

router.get('/api/moviewarehouse/allmovies', MoviewarehouseController.getAll);
router.get('/api/moviewarehouse/movie/:id', MoviewarehouseController.getByID);
router.post('/api/moviewarehouse/register', MoviewarehouseController.register);

export default router;
