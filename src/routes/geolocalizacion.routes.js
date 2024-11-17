import { Router } from 'express';
import {getGeolocalizacion,getGeolocalizacionxId,postGeolocalizacion,putGeolocalizacion,patchGeolocalizacion,deleteGeolocalizacion} from '../controladores/geolocalizacionCtrl.js';

const router = Router();

// Definición de las rutas
router.get('/geolocalizacion', getGeolocalizacion); 
router.get('/geolocalizacion/:id', getGeolocalizacionxId);
router.post('/geolocalizacion', postGeolocalizacion); 
router.put('/geolocalizacion/:id', putGeolocalizacion); 
router.patch('/geolocalizacion/:id', patchGeolocalizacion); 
router.delete('/geolocalizacion/:id', deleteGeolocalizacion); 

export default router;