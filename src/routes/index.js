const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/subirImagen', (req, res) => {
  res.send('Formulario');
});

router.post('/subirImagen', (req, res) => {
  res.send('Subido');
});

router.get('/imagen/:id', (req, res) => {
  res.send('Perfíl de imágen');
});

router.get('/imagen/:id/eliminarImagen', (req, res) => {
  res.send('Imagen eliminada');
});

module.exports = router;
