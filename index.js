const ejs = require("ejs");
const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");







// INITIALIZE EXPRESS -----------------------------------------------------------
// //////////////////////////////////////////////////////////////////////////////

    const app = express();







// INITIALIZE BODY PARSER -------------------------------------------------------
// //////////////////////////////////////////////////////////////////////////////

    // parse application/x-www-form-urlencoded xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

        app.use(bodyparser.urlencoded({ extended: true }))

    // parse application/json xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

        app.use(bodyparser.json())







// BRING IN STATIC FILES --------------------------------------------------------
// //////////////////////////////////////////////////////////////////////////////

    // FOR STYLES ---------------------------------------------------------------
    // //////////////////////////////////////////////////////////////////////////

        app.use("/public/styles", express.static("./public/styles"));



    // FOR SCRIPTS --------------------------------------------------------------
    // //////////////////////////////////////////////////////////////////////////

        app.use("/public/scripts", express.static("./public/scripts"));
    
    
    
    /////////////////////////////////////////////////////////////////////////////
    // SET VIEW ENGINE ----------------------------------------------------------
    /////////////////////////////////////////////////////////////////////////////
    
        app.set("view engine", "ejs");







// SETUP ROUTES xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// //////////////////////////////////////////////////////////////////////////////

    // SETUP ROUTES FOR DEFAULT PATHS -------------------------------------------
    // xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

        // FOR INDEX HOME PAGE --------------------------------------------------
        // //////////////////////////////////////////////////////////////////////

            app.get("/", (req, res) => {

                res.render("index");

            });

        // FOR REVIEW PAGE ------------------------------------------------------
        // //////////////////////////////////////////////////////////////////////

            app.get("/review", (req, res) => {

                res.render("review");

            });







/////////////////////////////////////////////////////////////////////////////////
// OPEN PORT AND LISTEN ---------------------------------------------------------
/////////////////////////////////////////////////////////////////////////////////
        
    // PORT LISTEN xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
    // //////////////////////////////////////////////////////////////////////////

        const port = 4000;


    // PORT LISTEN xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
    // //////////////////////////////////////////////////////////////////////////

        app.listen(port, () => {

            console.log("server started at port: "  + port);

        });