import express from 'express';
import controllers from '../controllers/controllers';

import modelUser from '../models/userModel';

const userRoute = new express.Router();
// productRoute.get('/', controllerProduct.allTheProducts);
userRoute.get('/newprofile', (req, res) => {
  res.send('creando mi perfil');
});

userRoute.get('/myprofile', async (req, res) => {
  // como obtengo mis datos ?
  // debe ser por algun tipo de id relacionaod al registrarme como usuario nuevo
  const total = await modelUser.findAll();
  res.send(total);
});

userRoute.get('/myprofile', controllers.userController.personalData);

export default userRoute;
