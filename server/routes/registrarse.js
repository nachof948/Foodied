const express = require('express')
const router = express.Router()
const passport = require('passport')
const cors = require('cors');

const app = express();
app.use(
    cors({
        origin: 'https://foodied-restaurante.vercel.app',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        credentials: true
    })
);


router.get('/error', (req, res) => {
    res.status(401).json({message:"Error al registarse"})
})
router.get('/exito', (req, res) => {
    if(req.user){
        res.header('Access-Control-Allow-Origin', 'https://foodied-restaurante.vercel.app');
        res.status(200).json({
            success: true,
            message: "Exito al registrarse",
            user: req.user,
        });
    } else {
        res.status(401).json({
            success: false,
            message: "Usuario no autenticado",
        });
    }
});


router.get('/logout', (req, res) => {
    req.logout()
    res.redirect('https://foodied-restaurante.vercel.app/')
})

router.get('/google', passport.authenticate('google', {
    scope: ['profile']
}));
router.get('/google/callback', passport.authenticate('google', {
    successRedirect: 'https://foodied-restaurante.vercel.app/comidas/all',
    failureRedirect: '/error' // Opcional: Redirección en caso de fallo en la autenticación
}));

module.exports = router