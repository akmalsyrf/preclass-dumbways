const express = require("express");
const path = require("path");
const hbs = require("hbs");
const session = require("express-session");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

const dbConnection = require("./connection/db");

app.set("view engine", "hbs");
app.use("/public", express.static(path.join(__dirname, "public")));

app.use(
  session({
    cookie: {
      maxAge: 1000 /*ms atau 1s*/ * 60 * 60 * 2,
    },
    store: new session.MemoryStore(),
    resave: false,
    saveUninitialized: true,
    secret: "VerySecret",
  })
);

app.use(function (req, res, next) {
  res.locals.message = req.session.message;
  delete req.session.message;
  next();
});

hbs.registerPartials(__dirname + "/views/partials");

const isLogin = false;

app.get("/", function (req, res) {
  const title = "Movie Ticket App";
  const info = "Buy ticket from home";
  res.render("index", {
    title,
    info,
    isLogin: req.session.isLogin,
  });
});

app.get("/ticket/:id", function (req, res) {
  const id = req.params.id;
  const title = "Godzilla";
  const info = "Order Ticket";
  res.render("ticketDetail", {
    title,
    info,
    id,
    isLogin: req.session.isLogin,
  });
});

app.get("/register/", function (req, res) {
  const title = "Register";
  const info = "Buy ticket from home";
  res.render("register", {
    title,
    info,
    isLogin,
  });
});

app.post("/register/", function (req, res) {
  const { email, password } = req.body;

  if (email == "" || password == "") {
    req.session.message = {
      type: "danger",
      message: "Please insert all field!",
    };

    return res.redirect("/register");
  }

  const query = `INSERT INTO tb_user (id, email, password, created_at, updated_at) VALUES (NULL, '${email}', '${password}', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);`;

  dbConnection.getConnection(function (err, conn) {
    if (err) throw err;
    conn.query(query, function (err, results) {
      if (err) throw err;

      req.session.message = {
        type: "success",
        message: "Register has successfull!",
      };

      res.redirect("/register");
    });
  });
});

app.get("/login/", function (req, res) {
  const title = "Login";
  const info = "Buy ticket from home";
  res.render("login", {
    title,
    info,
    isLogin,
  });
});

app.post("/login/", function (req, res) {
  const { email, password } = req.body;

  if (email == "" || password == "") {
    req.session.message = {
      type: "danger",
      message: "Please insert all field!",
    };

    return res.redirect("/login");
  }

  const query = `SELECT * FROM tb_user WHERE email = "${email}" AND password = "${password}";`;

  dbConnection.getConnection(function (err, conn) {
    if (err) throw err;
    conn.query(query, function (err, results) {
      if (err) throw err;

      if (results.length == 0) {
        req.session.message = {
          type: "danger",
          message: "Account doesn't exist!",
        };
        res.redirect("/login");
      } else {
        req.session.message = {
          type: "success",
          message: "Login has successfull!",
        };

        req.session.isLogin = true;

        req.session.user = {
          id: results[0].id,
          email: results[0].email,
        };
        res.redirect("/");
      }
    });
  });
});

app.get("/profile/", function (req, res) {
  const title = "Username";
  const info = "Buy ticket from home";
  res.render("profile", {
    title,
    info,
    isLogin: req.session.isLogin,
  });
});

app.get("/logout", function (req, res) {
  req.session.destroy();
  res.redirect("/");
});
