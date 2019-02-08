const express = require('express');
const morgan = require('morgan');
const multer = require('multer');
const path = require('path');

// require('./database');
// require('./config/passport');

const app = express();

/*                  Ajustes                     */
// Usa el puerto establecido o usa el puerto 3000
app.set('port', process.env.PORT || 3000);

/*                   Vistas                      */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

/*             Archivos Estáticos                */
app.use(express.static(path.join(__dirname, 'public')));

/*                 Middleware                   */
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(multer({ dest: path.join(__dirname, 'public/imagenes/uploads') }).single('imagen'));

/*              Variables globales              */
/* app.use((req, res, next) => {
  res.locals.mensajeCorrecto = req.flash('mensajeCorrecto');
  res.locals.mensajeError = req.flash('mensajeError');
  res.locals.error = req.flash('error');
  res.locals.usuario = req.user || null;

  next();
}); */

/*                    Rutas                      */
app.use(require('./routes/index'));

// Escucha en el puerto establecido
app.listen(app.get('port'), () => console.log(`Servidor en puerto ${app.get('port')}`));
