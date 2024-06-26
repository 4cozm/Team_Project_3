import express from 'express';
import authMiddleware from '../middlewares/auth.middleware.js';
import { gacha } from '../controllers/player.controller.js';
import { sellPlayer, storeList, buyPlayer,cancelSell,saleRecords,marketPrice } from '../controllers/store.controller.js';
const storeRouter = express.Router();

// /api/store/ 에 대한 라우터들을 정의

storeRouter.post('/gacha/:director', authMiddleware, gacha);
storeRouter.post('/sell', authMiddleware, sellPlayer);
storeRouter.get('/', storeList);
storeRouter.patch('/buy', authMiddleware, buyPlayer);
storeRouter.delete('/sell/cancel',authMiddleware,cancelSell);
storeRouter.get('/sellRecords',saleRecords);
storeRouter.get('/sellRecords/:player_unique_id',marketPrice);
export default storeRouter;
