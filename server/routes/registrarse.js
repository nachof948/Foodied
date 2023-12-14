const express = require('express')
const router = express.Router()
const passport = require('passport')


router.get('/error', (req, res) => {
    res.status(401).json({message:"Error al registarse"})
})
router.get('/exito', (req, res) => {
    const allowedOrigins = ['https://foodied-restaurante.vercel.app/', 'https://foodied-restaurante.vercel.app/auth/registrarse'];
    const origin = req.headers.origin;
    if (allowedOrigins.includes(origin)) {
        res.header('Access-Control-Allow-Origin', origin);
    }
    if(req.user){
        res.status(200).json({
            success: true,
            message:"Exito al registrarse",
            user:req.user,
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