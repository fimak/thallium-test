import express from 'express';
import controller from '../controllers/images';

const router = express.Router();

router.get('/photos', controller.getPhotos);
router.get('/photos/:id', controller.getPhoto);
router.delete('/photos/:id', controller.deletePhoto);

export default router;
