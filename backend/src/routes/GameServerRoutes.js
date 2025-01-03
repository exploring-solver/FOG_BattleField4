import express from 'express';
import { getCurrentServer, updateServer } from '../controllers/gameServerController.js';

const router = express.Router();
router.get('/servers/current', getCurrentServer);
router.put('/servers/current', updateServer);

export default router;