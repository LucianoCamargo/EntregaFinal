const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { TOKEN_SECRET, verifyToken } = require("../middlewares/Tokens-validate");
const db = require("../db");


router.post("/login", async (req, res) => {
  const resBd = await db.query("Select * from users where mail = $1", [
    req.body.mail,
  ]);

  let user = null;
  if (resBd.rows.length === 1) {
    user = resBd.rows[0];
  }

  if (!user) {
    return res.status(400).json({ error: "Usuario no encontrado" });
  }

  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) {
    return res.status(400).json({ error: "Contraseña no válida" });
  }

  //  token
  const token = jwt.sign(
    {
      name: user.name,
      mail: user.mail,
    },
    TOKEN_SECRET
  );

  return res.status(200).json({
    error: null,
    data: "Login exitoso",
    token,
  });
});

router.get("/usuarios", async (req, res) => {
  const users = await db.query("Select * from users");

  const result = users.rows;

  res.json({ error: null, result });
});

module.exports = {
  router: router,
};

module.exports = router