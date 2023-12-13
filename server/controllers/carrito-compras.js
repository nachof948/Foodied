const Compra = require('../models/Compra')
const Comidas= require('../models/Comidas')
const mongoose = require('mongoose')
const mostrarCarrito= async(req, res) => { 
    try{
        if(req.user){
            const carritoUsuario = await Compra.find({usuario: req.user._id})
            /* Si el usuario tiene elementos en su carrito, se muestra la "notificacion" */
            if(carritoUsuario && carritoUsuario.length > 0){
                res.send({carrito:carritoUsuario, user:req.user})
            }
            /* Si el usuario no tiene elementos dentro del carrito, no se muestra la "notificacion" */
            else{
                res.send({carrito:[], user:req.user})
            }
            /* Si el usuario no esta logueado, no se muestra la "notificacion" */
        } else{
            res.send({carrito:[], user:null})
        }
    } catch(err){
        res.status(404).send('error: ' + err);
    }
}

/* AGREGAR PRODUCTOS AL CARRITO */
const agregarProductos = async (req, res) => {
    const productoId = req.body.productoId; // Se recibe el ID del producto a agregar
    try {
        const usuarioId = req.user._id;

        // Buscamos el carrito del usuario
        let carritoUsuario = await Compra.findOne({ usuario: usuarioId });

        // Si el usuario no tiene un carrito, creamos uno nuevo para el mismo
        if (!carritoUsuario) {
            carritoUsuario = new Compra({ usuario: usuarioId, items: [] });
        }

        // Buscamos el producto por su ID
        const productoEnCarrito = carritoUsuario.items.find(item => item.producto.toString() === productoId);

        if (productoEnCarrito) {
            // Si el producto ya está en el carrito, podrías aumentar la cantidad o realizar alguna acción adicional
            // Por ejemplo, aumentar la cantidad en 1:
            productoEnCarrito.cantidad += 1;
        } else {
            // Si el producto no está en el carrito, lo agregamos buscando por su ID
            const productoEncontrado = await Comidas.findById(productoId);
            if (productoEncontrado) {
                carritoUsuario.items.push({
                    producto: productoId,
                    nombre: productoEncontrado.nombre,
                    imagen: productoEncontrado.imgUrl,
                    cantidad: 1,
                    precio: productoEncontrado.precio
                });
            } else {
                return res.status(404).json({ mensaje: "El producto no fue encontrado" });
            }
        }

        // Guardamos el carrito actualizado
        await carritoUsuario.save();
        res.redirect('/compras');
    } catch (error) {
        return res.status(500).json({ mensaje: "Error interno del servidor", error: error.message });
    }
};

const sumarProductos = async (req, res) => {
    const productoId = req.body.id;
    try {
        /* Tomamos el ID del usuario */
        const usuarioId = req.user._id;

        /* Buscamos el carrito del usuario */
        let compraUsuario = await Compra.findOne({ usuario: usuarioId });
        
        /* Convertimos el productoId a un objeto ObjectId */
        const productoObjectId = new mongoose.Types.ObjectId(productoId);

        /* Buscamos el producto por su ID */
        const productoEnCarrito = compraUsuario.items.find(item => item._id.equals(productoObjectId));

        /* Si está ese producto en el carrito, se suma 1 a la cantidad */
        if (productoEnCarrito) {
            productoEnCarrito.cantidad += 1;
            await compraUsuario.save();
            res.send(productoEnCarrito)
        } else {
            res.send('Producto no encontrado en el carrito');
        }
        
    } catch (error) {
        console.log(error);
    }
};

const restarProductos = async (req, res) => {
    const productoId = req.body.id;
    try {
        /* Tomamos el ID del usuario */
        const usuarioId = req.user._id;

        /* Buscamos el carrito del usuario */
        let compraUsuario = await Compra.findOne({ usuario: usuarioId });

        /* Convertimos el productoId a un objeto ObjectId */
        const productoObjectId = new mongoose.Types.ObjectId(productoId);

        /* Buscamos el producto por su ID */
        const productoEnCarrito = compraUsuario.items.find(item => item._id.equals(productoObjectId));

        /* Si está ese producto en el carrito, se resta 1 a la cantidad */
        if (productoEnCarrito) {
            productoEnCarrito.cantidad -= 1;

            /* Si la cantidad es menor o igual a 0, eliminamos el producto del carrito */
            if (productoEnCarrito.cantidad <= 0) {
                // Eliminamos el producto del carrito
                compraUsuario.items = compraUsuario.items.filter(item => !item._id.equals(productoObjectId));

                // Si ya no hay más productos en el carrito, eliminamos el registro del usuario del carrito
                if (compraUsuario.items.length === 0) {
                    await Compra.findOneAndDelete({ usuario: usuarioId });
                    res.send('Carrito vacío, usuario eliminado del carrito');
                } else {
                    await compraUsuario.save();
                    res.send(productoEnCarrito);
                }
            } else {
                await compraUsuario.save();
                res.send(productoEnCarrito);
            }
        } else {
            res.send('Producto no encontrado en el carrito');
        }

    } catch (error) {
        console.log(error);
    }
};







/* ELIMINAR PRODUCTO DEL CARRITO */
const eliminarProductos = async (req, res) => {
    const id = req.params.id;
    const usuarioId = req.user._id;

    try {
        const carritoUsuario = await Compra.findOneAndUpdate(
            { usuario: usuarioId },
            { $pull: { items: { _id: id } } },
            { new: true }
        );

        if (carritoUsuario) {
            if (carritoUsuario.items.length === 0) {
                // Si el carrito está vacío, eliminar el documento completo del carrito
                await Compra.findOneAndDelete({ usuario: usuarioId });
                res.send('Carrito vaciado');
            } else {
                // Si se eliminó el producto pero aún hay más en el carrito
                res.send('Producto eliminado del carrito');
            }
        } else {
            res.status(404).send('No se encontró el carrito del usuario');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al eliminar el producto del carrito');
    }
};


module.exports ={
    mostrarCarrito,
    agregarProductos,
    restarProductos,
    eliminarProductos,
    sumarProductos
}