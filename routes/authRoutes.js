const express = require('express');
const User = require('../models/User');
const router = express.Router();
const crypto = require('crypto');

router.post('/', async (req, res) => {
    try {
        const userFond = await User.find(req.body);
        console.log("Requête reçue :", userFond);

        // const service = new Service(req.body);
        // await service.save();
        if(!userFond){
            res.status(400).json({ message: "Utilisateur introuvable" });
        } else if (userFond){
            // res.status(201).json("lala");
            // Génération du token
            const token = jwt.sign({ id: user._id, role: user.role }, "SECRET_KEY", { expiresIn: "1h" });
            res.json({ token });
        }

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});



// Lire tous les services
router.get('/', async (req, res) => {
    try {
        console.log("get mandeha");
        // const services = await Service.find();
        // res.json(services);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
// async function login(req, res) {
//     const login = {
//         email: req.body.email,
//         password: cryptMDP(req.body.mdp)
//     };


//     let result = null;
//     result = login;
//     // result = await User.findOne(login);
    
    
//     return result;

//     // Génération du token
// }

function cryptMDP(mdp){
    const hash = crypto.createHash('sha256');
    hash.update(mdp);
    const hashHex = hash.digest('hex');
    return hashHex;
}

module.exports = router;
