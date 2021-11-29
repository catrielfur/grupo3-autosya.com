const fs = require('fs');
const path = require('path');



const mainController = {
    index: function(req, res) {
        const listadoProductosMain = listadoProductos()
        res.render('index', {
            productosMain: listadoProductosMain
        })
    },
    detalleProducto: function(req, res) {
        let id = req.params.id
        const listadoProductosMain = listadoProductos()
        const producto = listadoProductosMain.find(element => element.id == id)
        res.render('detalleMenu', { producto })
    }
};

const listadoProductos = function() {
    let archivoJSON = fs.readFileSync(path.resolve(__dirname, '../db/listadoProductos.json'), 'utf-8');
    return JSON.parse(archivoJSON)
}
module.exports = mainController