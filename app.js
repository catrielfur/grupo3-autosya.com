// Defino los requirements
const express = require('express')
const app = express()
const port = process.env.PORT;
const path = require('path');

const indexRoutes = require('./routes/indexRoutes');
const userRoutes = require('./routes/userRoutes');
const productsRoutes = require('./routes/productRoutes');


app.use(express.static('public')); // Defino a la carpeta public como la que tiene todos los assets
app.set('view engine', 'ejs'); // Defino a ejs como motor de renderizacion
app.use(express.urlencoded({ extended: false }));
const methodOverride = require('method-override'); // Requerimos este módulo para asegurar compatibilidad de métodos PUT y DELETE en todos los navegadores.
app.use(methodOverride('_method'))
app.use(express.json());



app.use('/', indexRoutes); // Rutas de la home pasan a controlarlas indexRoutes
app.use('/', userRoutes); // Rutas de login y register pasan a controlarlas userRoutes
app.use('/products', productsRoutes); // Rutas de edit y create pasan a controlarlas userRoutes

// Renderizo la pagina 404 si no identifica la ruta
app.use((req, res, next) => {
    res.status(404).render("not-found");
});



app.listen(port || 3000, () => {
    console.log('gogogogo en el puerto 3000 de una');
});