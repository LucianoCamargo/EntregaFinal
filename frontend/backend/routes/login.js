const express = require ('express');
const Router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { TOKEN_SECRET, verifyToken } = require("../middlewares/Tokens-validate");


Router.post("/login", async (req, res,) => {
    try {
        const respuestaBaseDeDatos = await db.query(
            "select * from users u where mail = $1", 
            [req.body.mail]
        );
        
        const resBd = await db.query("*Select * from users where mail = $1", [ 
            req.body.mail,
        ]);

        let user = null;
        if(resBd.rows.lenght === 1) {
            user = resBd.rows[0];
        }

        const user = usuarios.find((u) => u.mail === req.body.mail);

        if (!user) {
            return res.status(400).json({ error: "Usuario no encontrado" });
        }

        const validPassword = await bcrypt.compare(
            req.body.password,
            user.password
        );

        if (!validPassword) {
            return res.status(400).json({ error: "contraseña no valida" });
        }

        const token = jwt.sign(
            {
                mail: user.mail,
                name: user.password
            },
            TOKEN_SECRET
        );

        return res.json({ error: null, data: "Login exitoso", token });
    }   catch (error) {
        return next(error);
    }
});

Router.get("/usuarios", verifyToken, (req, res) => {
    return res.json({ error: null, usuarios });
});



module.exports = Router;