const fs = require('fs');
const path = require('path');



const mainController = {
    index: function (req, res) {
        const listadoProductosMain = listadoProductos() //Ejecuto la función listadoProductos para tener el objeto literal guardado como tal en formato js
        res.render('index',{
            productosMain: listadoProductosMain //Envío el objeto literal completo bajo el parámetro productosMain
        })
    },
    detalleProducto: function (req, res) {
        let id = req.params.id //Toma el id de la ruta indicada en al URL
        const listadoProductosMain = listadoProductos() //Ejecuto la función listadoProductos para tener el objeto literal guardado como tal en formato js
        const producto = listadoProductosMain.find(element => element.id == id)   /*El resultado de esto sería un objeto literal. 
        element = {
            titulo: string
            precio: number
            ....
            id: number --> De ese objeto necesito chequear si el id me coincide con el que levanto de la url
        }*/
        res.render('detalleMenu', {producto})
    }
}; //Acá termina el mainController que se exporta abajo

/*-----------------------------------------------------------------------------Sección de funciones helper-----------------------------------------------------------------------------*/

//Función para parsear la información guardada en el json y producir un objeto literal en formato javascript para poder leer y manipular
const listadoProductos = function () {
    let archivoJSON = fs.readFileSync (path.resolve(__dirname,'../db/listadoProductos.json'),'utf-8');
    return JSON.parse(archivoJSON)
}
/*-----------------------------------------------------------------------------Fin de Sección de funciones helper-----------------------------------------------------------------------------*/

module.exports = mainController