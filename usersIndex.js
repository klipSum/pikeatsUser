const ejs = require("ejs");
const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");

require("dotenv").config()

const giveSeason = process.env.giveOpenSeason







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







// SETUP MONGO DB xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// //////////////////////////////////////////////////////////////////////////////

    // CREATE MONGOOSE SCHEMA FOR UPLOAD ----------------------------------------
    // xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

        const postSchema = {

            // USER SUBMITS -------------------------------------
            // --------------------------------------------------

                userImage:String,                           // 1
                userArea:String,                            // 2
                userRating:Number,                          // 3
                userCalorie:Number,                         // 4
                userDescription:String,                     // 5
                userTime:String,                            // 6
                userDate:String,                            // 7
                userReply:String,                           // 8
                userReplyTime:String,                       // 9
                userReplyDate:String,                       // 10

            // ADMIN SUBMITS ------------------------------------
            // --------------------------------------------------

                adminComments:String,                       // 11
                adminCommentTime:String,                    // 12
                adminCommentDate:String,                    // 13

            // IDENTIFICATION SUBMITS ---------------------------
            // --------------------------------------------------

                userId:String                               // 14

        }

    // CREATE NEW USER POST -----------------------------------------------------
    // xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

        const Post = mongoose.model("Post", postSchema)







// SETUP ROUTES xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// //////////////////////////////////////////////////////////////////////////////

    // SETUP ROUTES FOR DEFAULT HOME PATH ---------------------------------------
    // xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

        // FOR INDEX HOME PAGE --------------------------------------------------
        // //////////////////////////////////////////////////////////////////////

            app.get("/", (req, res) => {

                res.render("index");

            });










    // SETUP ROUTES FOR OTHER PAGE ROUTES ---------------------------------------
    // xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

        // SETUP GET PATHS ------------------------------------------------------
        // //////////////////////////////////////////////////////////////////////

            // REVIEW PAGE PATH xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            // xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

                app.get("/review", (req, res) => {

                    res.render("review");

                });





        // SETUP POST PATHS -----------------------------------------------------
        // //////////////////////////////////////////////////////////////////////

            // REVIEW PAGE PATH xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            // xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

                app.post("/review", (req, res) => {

                    // CREATE TIME AND DATE STAMPS ------------------------------
                    // ----------------------------------------------------------

                        // SETUP VARIABLES --------------------------------------
                        // //////////////////////////////////////////////////////

                            // SETUP VARIABLES FOR TIME DATE STRINGS ////////////
                            // //////////////////////////////////////////////////

                                const timeDateInitiate = new Date()

                                    // SETUP VARIABLES FOR GET TIME MARKERS /////
                                    // //////////////////////////////////////////

                                        const hour = timeDateInitiate.getHours()
                                        const minute = timeDateInitiate.getMinutes()

                                    // SETUP VARIABLES FOR GET DATE MARKERS /////
                                    // //////////////////////////////////////////

                                        const day = timeDateInitiate.getDate()
                                        const month = timeDateInitiate.getMonth()
                                        const year = timeDateInitiate.getFullYear()


                            // SETUP VARIABLES FOR ARRAYS ///////////////////////
                            // //////////////////////////////////////////////////

                                const monthMappers = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"]

                            // SETUP FULL CONSTRUCTED STRINGS ///////////////////
                            // //////////////////////////////////////////////////

                                // MAKE FULL TIME AND DATE STRING ///////////////
                                // //////////////////////////////////////////////

                                    var currentTime = `${hour}H${minute}`
                                    var currentDate = `${day} ${monthMappers[month]} ${year}`

                    // OPEN CONNECTION FOR USERS POSTS --------------------------
                    // ----------------------------------------------------------

                        mongoose.connect(`${giveSeason}`)

                    // CREATE NEW POST ------------------------------------------
                    // ----------------------------------------------------------

                        let newPost = new Post ({

                            // USER SUBMITS -------------------------------------
                            // --------------------------------------------------

                                userImage:req.body.userImageConverted,
                                userArea:req.body.userArea,
                                userRating:req.body.userRatings,
                                userCalorie:req.body.userCalories,
                                userDescription:req.body.userComments,
                                userTime:currentTime,
                                userDate:currentDate,
                                userReply:"",
                                userReplyTime:"",
                                userReplyDate:"",

                            // ADMIN SUBMITS ------------------------------------
                            // --------------------------------------------------

                                adminComments:"",
                                adminCommentTime:"",
                                adminCommentDate:"",

                            // IDENTIFICATION SUBMITS ---------------------------
                            // --------------------------------------------------

                                userId:""

                        })

                    // SAVE POST TO MONGO DB ------------------------------------
                    // ----------------------------------------------------------

                        newPost.save()

                    // FINALLY RERENDER PAGE WHEN DONE --------------------------
                    // ----------------------------------------------------------

                        res.redirect("review");

                });









/////////////////////////////////////////////////////////////////////////////////
// OPEN PORT AND LISTEN ---------------------------------------------------------
/////////////////////////////////////////////////////////////////////////////////
        
    // PORT LISTEN xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
    // //////////////////////////////////////////////////////////////////////////

        const port = process.env.PORT || 8080;


    // PORT LISTEN xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
    // //////////////////////////////////////////////////////////////////////////

        app.listen(port, () => {

            console.log("server started at port: "  + port);

        });