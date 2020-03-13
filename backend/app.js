require("dotenv").config();
const express = require('express');
const favicon = require("serve-favicon");
const hbs = require("hbs");
const mongoose = require("mongoose");
const logger = require("morgan");
const path = require("path");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const passport = require("passport");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
var cors = require('cors');

require("./configs/passport");


//var sslRedirect = require("heroku-ssl-redirect");


const app = express();

app.use(cors())

mongoose
    .connect(process.env.MONGODB_URI || "mongodb://localhost/plyo", {
    useNewUrlParser: true
    })
    .then(x => {
        console.log(
        `Connected to Mongo! Database name: "${x.connections[0].name}"`
        );
    })
    .catch(err => {
        console.error("Error connecting to mongo", err);
    });


const app_name = require("./package.json").name;
const debug = require("debug")(
    `${app_name}:${path.basename(__filename).split(".")[0]}`
);

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

//ssl for heroku
//app.use(sslRedirect());

app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
        store: new MongoStore({
        mongooseConnection: mongoose.connection
        })
    })
);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
app.use(express.static(path.join(__dirname, "/client/build")));
app.use(favicon(path.join(__dirname, "public", "images", "favicon.ico")));

app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res, next) => {
    res.send('Welcome');
})

const plyos = require("./routes/plyos");
app.use("/plyos", plyos);

const auth = require("./routes/auth");
app.use("/auth", auth);

app.locals.title = "Project Plyos";

module.exports = app;