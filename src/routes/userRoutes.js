const express = require('express');
const userService = require('../services/userService');

const router = express.Router();

router.get('/users', async (req, res) => {
  const users = await userService.getAllUsers();
  res.json(users);
});

router.get('/users/:id', async (req, res) => {
  const user = await userService.getUserById(req.params.id);
  res.json(user);
});

router.post('/users/Agregar', async (req, res) => {
  const user = await userService.addUser(req.body);
  res.json(user);
});

router.put('/users/Modificar/:id', async (req, res) => {
  const updatedUser = await userService.updateUser(req.params.id, req.body);
  res.json(updatedUser);
});

router.delete('/users/Eliminar/:id', async (req, res) => {
  await userService.deleteUser(req.params.id);
  res.json({ message: 'Usuario eliminado' });
});

module.exports = router;