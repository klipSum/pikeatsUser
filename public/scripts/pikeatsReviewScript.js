// DECLARE VARIABLES FOR ENTIRE PAGE --------------------------------
// //////////////////////////////////////////////////////////////////

    // VARIABLES DECLARED -------------------------------------------
    // //////////////////////////////////////////////////////////////

        // VARIABLES FOR NAV BAR ------------------------------------
        // //////////////////////////////////////////////////////////

        // VARIABLES FOR PICTURE CAPTURE ----------------------------
        // //////////////////////////////////////////////////////////

            var getStartPicButton = document.querySelector(`.cameraStartButtonActual`)
            var getCamBox = document.querySelector(`.cameraBoxActualPicture`)
            var getSnapshotButton = document.querySelector(`.cameraTakePictureButtonActual`)

            var getCamSnipDisplay = document.querySelector(`.cameraSnipDisplayActual`)
            var getSnappedHeaderDataUrl = document.querySelector(`.cameraSnipDisplayHeaderUrlActual`)

            var getAreaDropDownSlider = document.querySelector(`.cameraSnapAreaDropAreaDownSliderContainer`)



        // VARIABLES FOR RATINGS CAPTURE ----------------------------
        // //////////////////////////////////////////////////////////

            // STAR CLICKERS ----------------------------------------
            // ------------------------------------------------------

                // STAR ONE CLICKERS --------------------------------
                // --------------------------------------------------

                    var starClickerOneOn = document.querySelector(`.cameraSnapRatingsAreaStarOneClickerOn`)
                    var starClickerOneOff = document.querySelector(`.cameraSnapRatingsAreaStarOneClickerOff`)

                // STAR TWO CLICKERS --------------------------------
                // --------------------------------------------------

                    var starClickerTwoOn = document.querySelector(`.cameraSnapRatingsAreaStarTwoClickerOn`)
                    var starClickerTwoOff = document.querySelector(`.cameraSnapRatingsAreaStarTwoClickerOff`)

                // STAR THREE CLICKERS ------------------------------
                // --------------------------------------------------

                    var starClickerThreeOn = document.querySelector(`.cameraSnapRatingsAreaStarThreeClickerOn`)
                    var starClickerThreeOff = document.querySelector(`.cameraSnapRatingsAreaStarThreeClickerOff`)

                // STAR FOUR CLICKERS -------------------------------
                // --------------------------------------------------

                    var starClickerFourOn = document.querySelector(`.cameraSnapRatingsAreaStarFourClickerOn`)
                    var starClickerFourOff = document.querySelector(`.cameraSnapRatingsAreaStarFourClickerOff`)

                // STAR FIVE CLICKERS -------------------------------
                // --------------------------------------------------

                    var starClickerFiveOn = document.querySelector(`.cameraSnapRatingsAreaStarFiveClickerOn`)
                    var starClickerFiveOff = document.querySelector(`.cameraSnapRatingsAreaStarFiveClickerOff`)



            // ACTUAL STARS -----------------------------------------
            // ------------------------------------------------------

                var getRatingStarOne = document.querySelector(`.cameraSnapRatingsAreaStarActualOne`)
                var getRatingStarTwo = document.querySelector(`.cameraSnapRatingsAreaStarActualTwo`)
                var getRatingStarThree = document.querySelector(`.cameraSnapRatingsAreaStarActualThree`)
                var getRatingStarFour = document.querySelector(`.cameraSnapRatingsAreaStarActualFour`)
                var getRatingStarFive = document.querySelector(`.cameraSnapRatingsAreaStarActualFive`)

        

    // SRINGS DECLARED ----------------------------------------------
    // //////////////////////////////////////////////////////////////

        // STRINGS FOR NAV BAR --------------------------------------
        // //////////////////////////////////////////////////////////

        // STRINGS FOR PICTURE CAPTURE ------------------------------
        // //////////////////////////////////////////////////////////

        // STRINGS FOR RATINGS CAPTURE ------------------------------
        // //////////////////////////////////////////////////////////

            // STRINGS FOR RATING IMAGE CAPTURE ---------------------
            // //////////////////////////////////////////////////////

                var startDefault = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAL+SURBVHgB7VrrcdpAEF5eMzDDs4LIFQR3IEpIBbErwKnAdgdOB6QCuwOUCowrgFQAA/zjlW+JxGBFgluxOsQM34zG9unmbj/2vYboiisuD/P5vDudToez2ex9PB47lCJylBJY8GKxONxb8mq1WodSQp5SQqlUegwtudDOHaWEVDQCk2pvNpv3iFeT5XJ502q1JqSMtDTyGrPezOfzD5QC1Imw+UAbTtx7EOnCf5qkDFUiLCAEfTyyrRnhPydDlQiiVPeQNgJgz4N2OFZz9ohwewyq4VhNIwnMxUWidEkJKho5EG6PQU0rWhp5pWRQS5InE+F6ysTBYwVAlNNwfLFpsRmt1+s2BPgKAm0suXQicrncCGcNcO4HzvWQ/UfI/iPRGXEvOCfAgZ09oV0sO3jUk1kMuIwZgCQT/A0ZRtVqdRC3eUfET2Z3hUIh+KTblE14PrmP1Wr1FtRtOyIwmeEptn4m7KLelkiCZJYZQG6nUqn82UYtdixoY0QXBpaZSfDvu/ALe+tcEhmWlWUO/v4UtdjE4Ox9OJNDGUZAYj9E/xd+/XKjT/bCrAiQbeKT+BSKI/OIX8z1KYNAsrwNk2BEligIaR6Y31PGAJO/jyLBiK216vV6D0nnB2UHz8jsvbiXB4vGRqPxwgfQ+fEMK3k6tMGoaITPPOGHep9tiKMkGMbVL/qGHmz0O9nFT5AwGh+JynhohiOZS3YwAIlb082ixorLabIE3PVLsj+12a8CRAlZRIQbLLIElEpfJPulGrFWtsC0WpL9IiI2Gy+p9kVEbFbF+NDS8RGU+LZ7+KZkam9MBC2l9bK+XC43TPcaEznHYGKxWOgnxKREuJvjZoiSQd+06N9wTgIPTwftwA2eFvc30pmA5MMzJoJwaJqgPDwdnjdxgxYscn/DpCSEJElR07Q8iiAQhoSQJCkaEzmQQzwyIBDGHqFv/hlRd+prJHwZLunx/8ylBMIAmTd/7NmJuGNgeo5xP+KPVbdNDgi8SMf+Ce6Z+Peof7ngChv4C+FebC5yhenSAAAAAElFTkSuQmCC`
                var starSelected = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKxSURBVHgB7Zo/kgFBFMafrU1dgAOQyHAAiVAiJCAjkLqAM5ARkJEIJS5AjgNwAA6wu19X9dTsmDH9xuveofZXNTVFqen3zfvT783IfP1Ab8AHvQn/QkxYLBZUr9ep2WzS5XIhm2Rs5QgMhwhNpVKh6XRKtrDmkfF4/Ovzbrej9XpNtrDikdPppMIpSDabpc1mo87SWPHIYDAI/f52u6m8sYG4EITPo8Sez+dKkDSiQmBgMDeS/CYJokJwt03KLMJLuhyLJXuw3MYhXY7FPMINF5Tj/X5PUogIQblNskdI5oqIkKhyG4fkJvm0kGcTF16RSHx2sh+PRxVK+oy7+iy5XI6KxSIVCgWqVqvqMw4OkUJQ78/ns2c0DMads7GZhYE2RotDhdNio/CEwEDEKww/HA7qnEYgCuIgqlareX2bJwR7gO2ZQRr/XqSSHQJeTQTQ4Q6UEMRfPp+nVwM266LglV+46JXEwFZ/i+MJgbJXEaNF+Ev0XflFtep0Os7KLBdUqdlspiqXn9B9BEnU7XYpjaxWqzsRILRFQVkbjUaUNmBTmAgQ2Ws1Gg0aDoeUFvr9vrIpiodNY6vVol6vR38NRMTZEdv9mlzEJqbrG7XxcW61BSciWG08KplE224CkhoVyhTWYFUul8kV3AhI7WsF7obMEuJyRuF24ywhLtsWqx7B6OsKjNccWEJcDl/WPOJ6hocQjhhjIdfrlVxjRYjL/NBw8sRYSNL8wBSX9FUbJwo+TX/IFYKZBn0SzgDPzCaTCcuznDXFhQQFaNBy4OAIsiIkbuEoAUE4gjjJbtz9lkql0O9NBUSx3W7VE/2wrhqPRZfLpdF1jD0CQ/2L4a5iTuE+NQ+C57c4cG14yL9G1HwehrFHEK942Qna7fbTAuLWQaXDOqYVz9p/UVzzNn9z+gbpq5ap2N5CMAAAAABJRU5ErkJggg==`

            // STRINGS FOR RATING NUMBER CAPTURE --------------------
            // //////////////////////////////////////////////////////

                var captureRatingNumber = 0

        // STRINGS VIDEO CAPTURE ------------------------------------
        // //////////////////////////////////////////////////////////

        // STRINGS BASE 64 CONVERT ----------------------------------
        // //////////////////////////////////////////////////////////

        // STRINGS TRANSLATE TO FORM --------------------------------
        // //////////////////////////////////////////////////////////

        

    // ARRAYS DECLARED ----------------------------------------------
    // //////////////////////////////////////////////////////////////

        // ARRAYS FOR CLASS NUMBERS ---------------------------------
        // //////////////////////////////////////////////////////////

            var classNumbers = [

                "One", "Two", "Three", "Four", "Five", 
                "Six", "Seven", "Eight", "Nine", "Ten",

                "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", 
                "Sixteen", "Seventeen", "Eighteen", "Nineteen", "Twenty",

                "TwentyOne", "TwentyTwo", "TwentyThree", "TwentyFour", "TwentyFive", 
                "TwentySix", "TwentySeven", "TwentyEight", "TwentyNine", "Thirty",

                "ThirtyOne", "ThirtyTwo", "ThirtyThree", "ThirtyFour", "ThirtyFive", 
                "ThirtySix", "ThirtySeven", "ThirtyEight", "ThirtyNine", "Fourty",

                "FourtyOne", "FourtyTwo", "FourtyThree", "FourtyFour", "FourtyFive", 
                "FourtySix", "FourtySeven", "FourtyEight", "FourtyNine", "Fiftty"

            ]

        // ARRAYS FOR NAV BAR ---------------------------------------
        // //////////////////////////////////////////////////////////

        // ARRAYS FOR PICTURE CAPTURE -------------------------------
        // //////////////////////////////////////////////////////////

            var captureComment = []
            var captureSnapshot64 = []
            var captureStarRating = []
            var captureLocationName = []

            var captureAreaItemsList = [

                "nc1", "nc2", "oxagon", "trojena"

            ]

            var captureDinerItemsList = [

                ["the terrace", "oasis", "american diner"],
                ["nc2 diner one", "nc2 diner main"],
                ["oxagon diner one", "oxagon diner main", "oxagon beach diner"],
                ["trojena diner one", "trojena diner main"]

            ]

            var captureLocationItemClassNames = []
            var captureLocationItemActualClassNames = []

            var captureDinerItemClassNames = []
            var captureDinerItemActualClassNames = []

        // ARRAYS FOR RATINGS CAPTURE -------------------------------
        // //////////////////////////////////////////////////////////

            var captureRatingsNumbers = []

                // ARRAYS FOR RATINGS STAR IMAGE --------------------
                // //////////////////////////////////////////////////

                    var cpatureRatingsStarImages = [

                        startDefault, starSelected

                    ]

        

    // NUMBER MAKERS DECLARED ---------------------------------------
    // //////////////////////////////////////////////////////////////

        // NUMBER MAKES FOR NAV BAR ---------------------------------
        // //////////////////////////////////////////////////////////

        // NUMBER MAKES FOR PICTURE CAPTURE -------------------------
        // //////////////////////////////////////////////////////////





// MAKE FUNCTIONS FOR ENTIRE PAGE -----------------------------------
// //////////////////////////////////////////////////////////////////

    // NAV BAR FUNCTIONS --------------------------------------------
    // //////////////////////////////////////////////////////////////

    // CAPTURE AREA FUNCTIONS ---------------------------------------
    // //////////////////////////////////////////////////////////////

        // POPULATE DROP DOWN AREA SELECTION FUNCTIONS --------------
        // //////////////////////////////////////////////////////////

            function populateAreaDropDownItems () {

                // DECLARE VARIABLES FOR USE ------------------------
                // //////////////////////////////////////////////////

                    var getAreaDropDownMain = document.querySelector(`.cameraSnapDropDownAreaSelectSide`)





                        // CLEAR OUT CLASS NAMES ARRAY --------------
                        // //////////////////////////////////////////

                            captureLocationItemClassNames = []
                            captureLocationItemActualClassNames = []










                        // RUN LOOP TO MAKE NEW AREA DROP DOWN ITEM -
                        // //////////////////////////////////////////


                            for ( areaItemCounter = 0; areaItemCounter < captureAreaItemsList.length; areaItemCounter++ ) {


                                // CREATE ITEM BLOCK FOR DROP DOWN ------
                                // //////////////////////////////////////
    
                                    var makeAreaDropDownItem = document.createElement("div")
                                    var makeAreaDropDownItemButton = document.createElement("div")
    
                                    makeAreaDropDownItem.className = `cameraSnapAreaDropAreaDownContentsItem${classNumbers[areaItemCounter]}Container`
                                    makeAreaDropDownItemButton.className = `cameraSnapAreaDropAreaDownContentsItem${classNumbers[areaItemCounter]}Resizer`
    
    
                                
    
                                // STYLE ITEM BLOCKS --------------------
                                // //////////////////////////////////////

                                    makeAreaDropDownItem.style = `
                                    
                                        width:99%;
                                        left:0;
                                        right:0;
                                        cursor:pointer;
                                        padding:10px 0px 0px 0px;
                                        margin:0px auto;
                                        position:relative;
                                        transition:all 600ms ease;
                                        -o-transition:all 600ms ease;
                                        -ms-transition:all 600ms ease;
                                        -moz-transition:all 600ms ease;
                                        -webkit-transition:all 600ms ease;

                                    `

                                        makeAreaDropDownItemButton.style = `
                                        
                                            width:100%;
                                            left:0;
                                            right:0;
                                            margin:0px auto;
                                            padding:10px 0px;
                                            position:relative;
                                            background:rgb(231, 221, 80, 0.00);
                                            border-radius:8px;
                                            transition:all 600ms ease;
                                            -o-transition:all 600ms ease;
                                            -ms-transition:all 600ms ease;
                                            -moz-transition:all 600ms ease;
                                            -webkit-transition:all 600ms ease;

                                        `
    
    
                                
    
                                // UPDATE TEXT OF BUTTON ----------------
                                // //////////////////////////////////////

                                    makeAreaDropDownItemButton.textContent = `${captureAreaItemsList[areaItemCounter]}`
    
    
                                
    
                                // UPDATE CLASSNAMES IN ARRAY -----------
                                // //////////////////////////////////////

                                    captureLocationItemClassNames.push(`cameraSnapAreaDropAreaDownContentsItem${classNumbers[areaItemCounter]}Container`)
                                    captureLocationItemActualClassNames.push(`cameraSnapAreaDropAreaDownContentsItem${classNumbers[areaItemCounter]}Resizer`)
    
    
                                
    
                                // APPEND BLOCKS TO DROP DOWN MAIN ------
                                // //////////////////////////////////////

                                    getAreaDropDownMain.appendChild(makeAreaDropDownItem)

                                        makeAreaDropDownItem.appendChild(makeAreaDropDownItemButton)

                                    


                            }










                        // RUN LOOP FOR MOUSE OVER EVENTS -----------
                        // //////////////////////////////////////////

                            captureLocationItemClassNames.forEach((classSkipper) => {

                                var getSkipperNumber = captureLocationItemClassNames.indexOf(classSkipper)

                                var makeElement = document.querySelector(`.${classSkipper}`)
                                var makeElementButtonActual = document.querySelector(`.${captureLocationItemActualClassNames[getSkipperNumber]}`)










                                    // CREATE EVENT LISTENER FOR SELECTED ELEMENT
                                    // //////////////////////////////

                                        // FOR CLICKS ---------------
                                        // //////////////////////////

                                            makeElement.addEventListener("click", function () {



                                                // SLIDE ITEM SLIDER TO AREA DINER SELECT AREA
                                                // //////////////////

                                                    getAreaDropDownSlider.style = `
                                                    
                                                        width:200%;
                                                        margin-left:-100%;
                                                        transition:all 600ms ease;
                                                        -o-transition:all 600ms ease;
                                                        -ms-transition:all 600ms ease;
                                                        -moz-transition:all 600ms ease;
                                                        -webkit-transition:all 600ms ease;

                                                    `



                                                // SELECT DINER FUNCTION
                                                // //////////////////

                                                    populateDinerDropDownItems(getSkipperNumber)



                                            })




                                        // FOR MOUSE OVERS AND OUTS -
                                        // //////////////////////////

                                            makeElement.addEventListener("mouseover", function () {

                                                makeElementButtonActual.style = `
                                                
                                                    width:100%;
                                                    left:0;
                                                    right:0;
                                                    margin:0px auto;
                                                    padding:10px 0px;
                                                    position:relative;
                                                    background:rgb(231, 221, 80, 1.00);
                                                    border-radius:8px;
                                                    transition:all 600ms ease;
                                                    -o-transition:all 600ms ease;
                                                    -ms-transition:all 600ms ease;
                                                    -moz-transition:all 600ms ease;
                                                    -webkit-transition:all 600ms ease;

                                                `

                                            })

                                            makeElement.addEventListener("mouseout", function () {

                                                makeElementButtonActual.style = `
                                                
                                                    width:100%;
                                                    left:0;
                                                    right:0;
                                                    margin:0px auto;
                                                    padding:10px 0px;
                                                    position:relative;
                                                    background:rgb(231, 221, 80, 0.00);
                                                    border-radius:8px;
                                                    transition:all 600ms ease;
                                                    -o-transition:all 600ms ease;
                                                    -ms-transition:all 600ms ease;
                                                    -moz-transition:all 600ms ease;
                                                    -webkit-transition:all 600ms ease; 

                                                `
                                                
                                            })

                                        



                            })



            }






            

        // POPULATE DROP DOWN DINER SELECTION FUNCTIONS -------------
        // //////////////////////////////////////////////////////////

            function populateDinerDropDownItems (selectDinerSet) {

                // DECLARE VARIABLES FOR USE ------------------------
                // //////////////////////////////////////////////////

                    var getDinerDropDownMain = document.querySelector(`.cameraSnapDropDownDinerSelectSide`)





                        // CLEAR OUT CLASS NAMES ARRAY --------------
                        // //////////////////////////////////////////

                            captureDinerItemClassNames = []
                            captureDinerItemActualClassNames = []





                        // CLEAR OUT DINER SECTION LIST AND READY FOR NEW
                        // //////////////////////////////////////////

                            // FIRST GET NUMBER OF CHILDREN INSIDE --
                            // //////////////////////////////////////

                                var getChildrenCount = getDinerDropDownMain.children.length

                            // THEN CHECK IF PARENT HAS CHILDREN ----
                            // //////////////////////////////////////

                                // IF HAS CHILDREN THEN CLEAR ALL CHILDREN
                                // //////////////////////////////////

                                    if ( getChildrenCount > 0 ) {

                                        for ( parentEraserCount = getChildrenCount; parentEraserCount != 0; parentEraserCount-- ) {

                                            // REMOVE FIRST CHILD UNTIL NOTHING LEFT
                                            // //////////////////////

                                                getDinerDropDownMain.removeChild(getDinerDropDownMain.children[0])

                                                console.log("REBOOTED...")
                                            
                                        }

                                    }










                        // RUN LOOP TO MAKE NEW AREA DROP DOWN ITEM -
                        // //////////////////////////////////////////

                            
                            for ( dineItemCounter = 0; dineItemCounter < captureDinerItemsList[selectDinerSet].length; dineItemCounter++ ) {


                                // CREATE ITEM BLOCK FOR DROP DOWN ------
                                // //////////////////////////////////////
    
                                    var makeDinerDropDownItem = document.createElement("div")
                                    var makeDinerDropDownItemButton = document.createElement("div")
    
                                    makeDinerDropDownItem.className = `cameraSnapDinerDropDinerDownContentsItem${classNumbers[dineItemCounter]}Container`
                                    makeDinerDropDownItemButton.className = `cameraSnapDinerDropDinerDownContentsItem${classNumbers[dineItemCounter]}Resizer`
    
    
                                
    
                                // STYLE ITEM BLOCKS --------------------
                                // //////////////////////////////////////

                                    makeDinerDropDownItem.style = `
                                    
                                        width:99%;
                                        left:0;
                                        right:0;
                                        cursor:pointer;
                                        padding:10px 0px 0px 0px;
                                        margin:0px auto;
                                        position:relative;
                                        transition:all 600ms ease;
                                        -o-transition:all 600ms ease;
                                        -ms-transition:all 600ms ease;
                                        -moz-transition:all 600ms ease;
                                        -webkit-transition:all 600ms ease;

                                    `

                                        makeDinerDropDownItemButton.style = `
                                        
                                            width:100%;
                                            left:0;
                                            right:0;
                                            margin:0px auto;
                                            padding:10px 0px;
                                            position:relative;
                                            background:rgb(231, 221, 80, 0.00);
                                            border-radius:8px;
                                            transition:all 600ms ease;
                                            -o-transition:all 600ms ease;
                                            -ms-transition:all 600ms ease;
                                            -moz-transition:all 600ms ease;
                                            -webkit-transition:all 600ms ease;

                                        `
    
    
                                
    
                                // UPDATE TEXT OF BUTTON ----------------
                                // //////////////////////////////////////

                                    captureDinerItemClassNames.push(`cameraSnapDinerDropDinerDownContentsItem${classNumbers[dineItemCounter]}Container`)
                                    captureDinerItemActualClassNames.push(`cameraSnapDinerDropDinerDownContentsItem${classNumbers[dineItemCounter]}Resizer`)
    
    
                                
    
                                // UPDATE CLASSNAMES IN ARRAY -----------
                                // //////////////////////////////////////

                                    makeDinerDropDownItemButton.textContent = `${captureDinerItemsList[selectDinerSet][dineItemCounter]}`
    
    
                                
    
                                // APPEND BLOCKS TO DROP DOWN MAIN ------
                                // //////////////////////////////////////

                                    getDinerDropDownMain.appendChild(makeDinerDropDownItem)

                                        makeDinerDropDownItem.appendChild(makeDinerDropDownItemButton)

                            }










                        // RUN LOOP FOR MOUSE OVER EVENTS -----------
                        // //////////////////////////////////////////

                            captureDinerItemClassNames.forEach((classSkipper) => {

                                var getSkipperNumber = captureDinerItemClassNames.indexOf(classSkipper)

                                var makeElement = document.querySelector(`.${classSkipper}`)
                                var makeElementButtonActual = document.querySelector(`.${captureDinerItemActualClassNames[getSkipperNumber]}`)










                                    // CREATE EVENT LISTENER FOR SELECTED ELEMENT
                                    // //////////////////////////////

                                        // FOR CLICKS ---------------
                                        // //////////////////////////

                                            makeElement.addEventListener("click", function () {



                                                // SLIDE ITEM SLIDER TO AREA DINER SELECT AREA
                                                // //////////////////

                                                    getAreaDropDownSlider.style = `
                                                    
                                                        width:200%;
                                                        margin-left:0%;
                                                        transition:all 600ms ease;
                                                        -o-transition:all 600ms ease;
                                                        -ms-transition:all 600ms ease;
                                                        -moz-transition:all 600ms ease;
                                                        -webkit-transition:all 600ms ease;

                                                    `



                                            })




                                        // FOR MOUSE OVERS AND OUTS -
                                        // //////////////////////////

                                            makeElement.addEventListener("mouseover", function () {

                                                makeElementButtonActual.style = `
                                                
                                                    width:100%;
                                                    left:0;
                                                    right:0;
                                                    margin:0px auto;
                                                    padding:10px 0px;
                                                    position:relative;
                                                    background:rgb(231, 221, 80, 1.00);
                                                    border-radius:8px;
                                                    transition:all 600ms ease;
                                                    -o-transition:all 600ms ease;
                                                    -ms-transition:all 600ms ease;
                                                    -moz-transition:all 600ms ease;
                                                    -webkit-transition:all 600ms ease;

                                                `

                                            })

                                            makeElement.addEventListener("mouseout", function () {

                                                makeElementButtonActual.style = `
                                                
                                                    width:100%;
                                                    left:0;
                                                    right:0;
                                                    margin:0px auto;
                                                    padding:10px 0px;
                                                    position:relative;
                                                    background:rgb(231, 221, 80, 0.00);
                                                    border-radius:8px;
                                                    transition:all 600ms ease;
                                                    -o-transition:all 600ms ease;
                                                    -ms-transition:all 600ms ease;
                                                    -moz-transition:all 600ms ease;
                                                    -webkit-transition:all 600ms ease; 

                                                `
                                                
                                            })

                                        



                            })

            }

    // VIDEO CAPTURE FUNCTIONS --------------------------------------
    // //////////////////////////////////////////////////////////////

    // BASE 64 CONVERT FUNCTIONS ------------------------------------
    // //////////////////////////////////////////////////////////////

    // TRANSLATE TO FORM FUNCTIONS ----------------------------------
    // //////////////////////////////////////////////////////////////





// MAKE EVENTS FOR ENTIRE PAGE --------------------------------------
// //////////////////////////////////////////////////////////////////

    // NAV BAR EVENTS -----------------------------------------------
    // //////////////////////////////////////////////////////////////

    // SETUP STREAM VIDEO EVENTS ------------------------------------
    // //////////////////////////////////////////////////////////////

        getStartPicButton.addEventListener("click", async function () {

            // START THE STREAM >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
            // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

                let stream = null;

                    try {

                        stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false});

                    }

                    catch (error) {

                        alert(error.message);
                        return;

                    }

            // STREAM VIDEO CAPTURE TO CAMERA BOX ON PAGE >>>>>>>>>>>
            // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

                getCamBox.srcObject = stream;

            // INLINE STYLES FOR STREAM BOX >>>>>>>>>>>>>>>>>>>>>>>>>
            // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

                getCamBox.style.display = `block`;
                getStartPicButton.style.display = `none`;
                getSnapshotButton.style.display = `block`;

        })

    // SNAP SHOT CAPTURE EVENTS -------------------------------------
    // //////////////////////////////////////////////////////////////

        getSnapshotButton.addEventListener("click", function () {

            // DRAW SNAPPED IMAGE TO CANVAS -------------------------
            // //////////////////////////////////////////////////////

                getCamSnipDisplay.getContext("2d").drawImage(getCamBox, 0, 0, getCamSnipDisplay.width, getCamSnipDisplay.height);


            // GET HEADER URL DATA ----------------------------------
            // //////////////////////////////////////////////////////

                let imageDataHeaderUrlText = getCamSnipDisplay.toDataURL(`image/jpeg`);

                    getSnappedHeaderDataUrl.textContent = imageDataHeaderUrlText


        })

    // CAPTURE AREA EVENTS ------------------------------------------
    // //////////////////////////////////////////////////////////////

        // POPULATE DROP DOWN AREA ----------------------------------
        // //////////////////////////////////////////////////////////

    // CAPTURE RATINGS EVENTS ---------------------------------------
    // //////////////////////////////////////////////////////////////










        // RATING STAR CLICKER ONE ----------------------------------
        // //////////////////////////////////////////////////////////

            // CLICKER ON -------------------------------------------
            // ------------------------------------------------------

                starClickerOneOn.addEventListener("click", function () {

                    // CHANGE STAR COUNTER --------------------------
                    // //////////////////////////////////////////////

                        captureRatingNumber = 1

                    // SEND ON CLICKER ONE TO BACK ------------------
                    // //////////////////////////////////////////////
                        
                        starClickerOneOn.style = `
                        
                            width:100%;
                            height:100%;
                            z-index:-1;
                            left:0px;
                            right:0;
                            display:none;
                            position:absolute;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `

                    // BRING OFF CLICKER ONE TO FRONT ---------------
                    // //////////////////////////////////////////////

                        starClickerOneOff.style = `
                        
                            width:100%;
                            height:100%;
                            z-index:1;
                            left:0px;
                            right:0;
                            display:block;
                            position:absolute;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `

                    // SWITCH ON SELECTED STAR ----------------------
                    // //////////////////////////////////////////////

                        getRatingStarOne.style = `
                        
                            width:25px;
                            height:25px;
                            top:0;
                            left:0;
                            right:0;
                            bottom:0;
                            margin:auto;
                            position:absolute;
                            overflow:hidden;
                            background:url("${cpatureRatingsStarImages[1]}");
                            background-size:cover;
                            background-repeat:no-repeat;
                            background-position:top;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `







                    // SWITCH OFF OTHER STARS -----------------------
                    // //////////////////////////////////////////////

                        getRatingStarTwo.style = `
                        
                            width:25px;
                            height:25px;
                            top:0;
                            left:0;
                            right:0;
                            bottom:0;
                            margin:auto;
                            position:absolute;
                            overflow:hidden;
                            background:url("${cpatureRatingsStarImages[0]}");
                            background-size:cover;
                            background-repeat:no-repeat;
                            background-position:top;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `

                        getRatingStarThree.style = `
                        
                            width:25px;
                            height:25px;
                            top:0;
                            left:0;
                            right:0;
                            bottom:0;
                            margin:auto;
                            position:absolute;
                            overflow:hidden;
                            background:url("${cpatureRatingsStarImages[0]}");
                            background-size:cover;
                            background-repeat:no-repeat;
                            background-position:top;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `

                        getRatingStarFour.style = `
                        
                            width:25px;
                            height:25px;
                            top:0;
                            left:0;
                            right:0;
                            bottom:0;
                            margin:auto;
                            position:absolute;
                            overflow:hidden;
                            background:url("${cpatureRatingsStarImages[0]}");
                            background-size:cover;
                            background-repeat:no-repeat;
                            background-position:top;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `

                        getRatingStarFive.style = `
                        
                            width:25px;
                            height:25px;
                            top:0;
                            left:0;
                            right:0;
                            bottom:0;
                            margin:auto;
                            position:absolute;
                            overflow:hidden;
                            background:url("${cpatureRatingsStarImages[0]}");
                            background-size:cover;
                            background-repeat:no-repeat;
                            background-position:top;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `







                    // SWITCH CLICKERS ------------------------------
                    // //////////////////////////////////////////////

                        // BRING ON CLICKERS TO DEFAULT POSITION >>>>
                        // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

                            starClickerTwoOn.style = `
                            
                                width:100%;
                                height:100%;
                                z-index:1;
                                left:0px;
                                right:0;
                                display:block;
                                position:absolute;
                                transition:all 600ms ease;
                                -o-transition:all 600ms ease;
                                -ms-transition:all 600ms ease;
                                -moz-transition:all 600ms ease;
                                -webkit-transition:all 600ms ease;

                            `

                            starClickerThreeOn.style = `
                            
                                width:100%;
                                height:100%;
                                z-index:1;
                                left:0px;
                                right:0;
                                display:block;
                                position:absolute;
                                transition:all 600ms ease;
                                -o-transition:all 600ms ease;
                                -ms-transition:all 600ms ease;
                                -moz-transition:all 600ms ease;
                                -webkit-transition:all 600ms ease;

                            `

                            starClickerFourOn.style = `
                            
                                width:100%;
                                height:100%;
                                z-index:1;
                                left:0px;
                                right:0;
                                display:block;
                                position:absolute;
                                transition:all 600ms ease;
                                -o-transition:all 600ms ease;
                                -ms-transition:all 600ms ease;
                                -moz-transition:all 600ms ease;
                                -webkit-transition:all 600ms ease;

                            `

                            starClickerFiveOn.style = `
                            
                                width:100%;
                                height:100%;
                                z-index:1;
                                left:0px;
                                right:0;
                                display:block;
                                position:absolute;
                                transition:all 600ms ease;
                                -o-transition:all 600ms ease;
                                -ms-transition:all 600ms ease;
                                -moz-transition:all 600ms ease;
                                -webkit-transition:all 600ms ease;

                            `

                        // SEND OFF CLICKERS TO BACK POSITION >>>>>>>
                        // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

                            starClickerTwoOff.style = `
                            
                                width:100%;
                                height:100%;
                                z-index:-1;
                                left:0px;
                                right:0;
                                display:none;
                                position:absolute;
                                transition:all 600ms ease;
                                -o-transition:all 600ms ease;
                                -ms-transition:all 600ms ease;
                                -moz-transition:all 600ms ease;
                                -webkit-transition:all 600ms ease;

                            `

                            starClickerThreeOff.style = `
                            
                                width:100%;
                                height:100%;
                                z-index:-1;
                                left:0px;
                                right:0;
                                display:none;
                                position:absolute;
                                transition:all 600ms ease;
                                -o-transition:all 600ms ease;
                                -ms-transition:all 600ms ease;
                                -moz-transition:all 600ms ease;
                                -webkit-transition:all 600ms ease;

                            `

                            starClickerFourOff.style = `
                            
                                width:100%;
                                height:100%;
                                z-index:-1;
                                left:0px;
                                right:0;
                                display:none;
                                position:absolute;
                                transition:all 600ms ease;
                                -o-transition:all 600ms ease;
                                -ms-transition:all 600ms ease;
                                -moz-transition:all 600ms ease;
                                -webkit-transition:all 600ms ease;

                            `

                            starClickerFiveOff.style = `
                            
                                width:100%;
                                height:100%;
                                z-index:-1;
                                left:0px;
                                right:0;
                                display:none;
                                position:absolute;
                                transition:all 600ms ease;
                                -o-transition:all 600ms ease;
                                -ms-transition:all 600ms ease;
                                -moz-transition:all 600ms ease;
                                -webkit-transition:all 600ms ease;

                            `



                })









            // CLICKER OFF ------------------------------------------
            // ------------------------------------------------------

                starClickerOneOff.addEventListener("click", function () {

                    // CHANGE STAR COUNTER --------------------------
                    // //////////////////////////////////////////////

                        captureRatingNumber = 0

                    // SEND ON CLICKER ONE TO FRONT -----------------
                    // //////////////////////////////////////////////
                        
                        starClickerOneOn.style = `
                        
                            width:100%;
                            height:100%;
                            z-index:1;
                            left:0px;
                            right:0;
                            display:block;
                            position:absolute;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `

                    // BRING OFF CLICKER ONE TO BACK ----------------
                    // //////////////////////////////////////////////

                        starClickerOneOff.style = `
                        
                            width:100%;
                            height:100%;
                            z-index:-1;
                            left:0px;
                            right:0;
                            display:none;
                            position:absolute;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `

                    // SWITCH OFF SELECTED STAR ----------------------
                    // //////////////////////////////////////////////

                        getRatingStarOne.style = `
                        
                            width:25px;
                            height:25px;
                            top:0;
                            left:0;
                            right:0;
                            bottom:0;
                            margin:auto;
                            position:absolute;
                            overflow:hidden;
                            background:url("${cpatureRatingsStarImages[0]}");
                            background-size:cover;
                            background-repeat:no-repeat;
                            background-position:top;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `







                    // SWITCH OFF OTHER STARS -----------------------
                    // //////////////////////////////////////////////

                        getRatingStarTwo.style = `
                        
                            width:25px;
                            height:25px;
                            top:0;
                            left:0;
                            right:0;
                            bottom:0;
                            margin:auto;
                            position:absolute;
                            overflow:hidden;
                            background:url("${cpatureRatingsStarImages[0]}");
                            background-size:cover;
                            background-repeat:no-repeat;
                            background-position:top;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `

                        getRatingStarThree.style = `
                        
                            width:25px;
                            height:25px;
                            top:0;
                            left:0;
                            right:0;
                            bottom:0;
                            margin:auto;
                            position:absolute;
                            overflow:hidden;
                            background:url("${cpatureRatingsStarImages[0]}");
                            background-size:cover;
                            background-repeat:no-repeat;
                            background-position:top;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `

                        getRatingStarFour.style = `
                        
                            width:25px;
                            height:25px;
                            top:0;
                            left:0;
                            right:0;
                            bottom:0;
                            margin:auto;
                            position:absolute;
                            overflow:hidden;
                            background:url("${cpatureRatingsStarImages[0]}");
                            background-size:cover;
                            background-repeat:no-repeat;
                            background-position:top;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `

                        getRatingStarFive.style = `
                        
                            width:25px;
                            height:25px;
                            top:0;
                            left:0;
                            right:0;
                            bottom:0;
                            margin:auto;
                            position:absolute;
                            overflow:hidden;
                            background:url("${cpatureRatingsStarImages[0]}");
                            background-size:cover;
                            background-repeat:no-repeat;
                            background-position:top;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `



                })

    








        // RATING STAR CLICKER TWO ----------------------------------
        // //////////////////////////////////////////////////////////

            // CLICKER ON -------------------------------------------
            // ------------------------------------------------------

                starClickerTwoOn.addEventListener("click", function () {

                    // CHANGE STAR COUNTER --------------------------
                    // //////////////////////////////////////////////

                        captureRatingNumber = 2

                    // SEND ON CLICKER TWO TO BACK ------------------
                    // //////////////////////////////////////////////
                        
                        starClickerTwoOn.style = `
                        
                            width:100%;
                            height:100%;
                            z-index:-1;
                            left:0px;
                            right:0;
                            display:none;
                            position:absolute;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `

                    // BRING OFF CLICKER TWO TO FRONT ---------------
                    // //////////////////////////////////////////////

                        starClickerTwoOff.style = `
                        
                            width:100%;
                            height:100%;
                            z-index:1;
                            left:0px;
                            right:0;
                            display:block;
                            position:absolute;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `

                    // SWITCH ON SELECTED STAR ----------------------
                    // //////////////////////////////////////////////

                        getRatingStarOne.style = `
                        
                            width:25px;
                            height:25px;
                            top:0;
                            left:0;
                            right:0;
                            bottom:0;
                            margin:auto;
                            position:absolute;
                            overflow:hidden;
                            background:url("${cpatureRatingsStarImages[1]}");
                            background-size:cover;
                            background-repeat:no-repeat;
                            background-position:top;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `

                        getRatingStarTwo.style = `
                        
                            width:25px;
                            height:25px;
                            top:0;
                            left:0;
                            right:0;
                            bottom:0;
                            margin:auto;
                            position:absolute;
                            overflow:hidden;
                            background:url("${cpatureRatingsStarImages[1]}");
                            background-size:cover;
                            background-repeat:no-repeat;
                            background-position:top;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `







                    // SWITCH OFF OTHER STARS -----------------------
                    // //////////////////////////////////////////////

                        getRatingStarThree.style = `
                        
                            width:25px;
                            height:25px;
                            top:0;
                            left:0;
                            right:0;
                            bottom:0;
                            margin:auto;
                            position:absolute;
                            overflow:hidden;
                            background:url("${cpatureRatingsStarImages[0]}");
                            background-size:cover;
                            background-repeat:no-repeat;
                            background-position:top;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `

                        getRatingStarFour.style = `
                        
                            width:25px;
                            height:25px;
                            top:0;
                            left:0;
                            right:0;
                            bottom:0;
                            margin:auto;
                            position:absolute;
                            overflow:hidden;
                            background:url("${cpatureRatingsStarImages[0]}");
                            background-size:cover;
                            background-repeat:no-repeat;
                            background-position:top;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `

                        getRatingStarFive.style = `
                        
                            width:25px;
                            height:25px;
                            top:0;
                            left:0;
                            right:0;
                            bottom:0;
                            margin:auto;
                            position:absolute;
                            overflow:hidden;
                            background:url("${cpatureRatingsStarImages[0]}");
                            background-size:cover;
                            background-repeat:no-repeat;
                            background-position:top;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `







                    // SWITCH CLICKERS ------------------------------
                    // //////////////////////////////////////////////

                        // BRING ON CLICKERS TO DEFAULT POSITION >>>>
                        // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

                            starClickerOneOn.style = `
                            
                                width:100%;
                                height:100%;
                                z-index:1;
                                left:0px;
                                right:0;
                                display:block;
                                position:absolute;
                                transition:all 600ms ease;
                                -o-transition:all 600ms ease;
                                -ms-transition:all 600ms ease;
                                -moz-transition:all 600ms ease;
                                -webkit-transition:all 600ms ease;

                            `

                            starClickerThreeOn.style = `
                            
                                width:100%;
                                height:100%;
                                z-index:1;
                                left:0px;
                                right:0;
                                display:block;
                                position:absolute;
                                transition:all 600ms ease;
                                -o-transition:all 600ms ease;
                                -ms-transition:all 600ms ease;
                                -moz-transition:all 600ms ease;
                                -webkit-transition:all 600ms ease;

                            `

                            starClickerFourOn.style = `
                            
                                width:100%;
                                height:100%;
                                z-index:1;
                                left:0px;
                                right:0;
                                display:block;
                                position:absolute;
                                transition:all 600ms ease;
                                -o-transition:all 600ms ease;
                                -ms-transition:all 600ms ease;
                                -moz-transition:all 600ms ease;
                                -webkit-transition:all 600ms ease;

                            `

                            starClickerFiveOn.style = `
                            
                                width:100%;
                                height:100%;
                                z-index:1;
                                left:0px;
                                right:0;
                                display:block;
                                position:absolute;
                                transition:all 600ms ease;
                                -o-transition:all 600ms ease;
                                -ms-transition:all 600ms ease;
                                -moz-transition:all 600ms ease;
                                -webkit-transition:all 600ms ease;

                            `

                        // SEND OFF CLICKERS TO BACK POSITION >>>>>>>
                        // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

                            starClickerOneOff.style = `
                            
                                width:100%;
                                height:100%;
                                z-index:-1;
                                left:0px;
                                right:0;
                                display:none;
                                position:absolute;
                                transition:all 600ms ease;
                                -o-transition:all 600ms ease;
                                -ms-transition:all 600ms ease;
                                -moz-transition:all 600ms ease;
                                -webkit-transition:all 600ms ease;

                            `

                            starClickerThreeOff.style = `
                            
                                width:100%;
                                height:100%;
                                z-index:-1;
                                left:0px;
                                right:0;
                                display:none;
                                position:absolute;
                                transition:all 600ms ease;
                                -o-transition:all 600ms ease;
                                -ms-transition:all 600ms ease;
                                -moz-transition:all 600ms ease;
                                -webkit-transition:all 600ms ease;

                            `

                            starClickerFourOff.style = `
                            
                                width:100%;
                                height:100%;
                                z-index:-1;
                                left:0px;
                                right:0;
                                display:none;
                                position:absolute;
                                transition:all 600ms ease;
                                -o-transition:all 600ms ease;
                                -ms-transition:all 600ms ease;
                                -moz-transition:all 600ms ease;
                                -webkit-transition:all 600ms ease;

                            `

                            starClickerFiveOff.style = `
                            
                                width:100%;
                                height:100%;
                                z-index:-1;
                                left:0px;
                                right:0;
                                display:none;
                                position:absolute;
                                transition:all 600ms ease;
                                -o-transition:all 600ms ease;
                                -ms-transition:all 600ms ease;
                                -moz-transition:all 600ms ease;
                                -webkit-transition:all 600ms ease;

                            `



                })









            // CLICKER OFF ------------------------------------------
            // ------------------------------------------------------

                starClickerTwoOff.addEventListener("click", function () {

                    // CHANGE STAR COUNTER --------------------------
                    // //////////////////////////////////////////////

                        captureRatingNumber = 0

                    // SEND ON CLICKER TWO TO FRONT -----------------
                    // //////////////////////////////////////////////
                        
                        starClickerTwoOn.style = `
                        
                            width:100%;
                            height:100%;
                            z-index:1;
                            left:0px;
                            right:0;
                            display:block;
                            position:absolute;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `

                    // BRING OFF CLICKER TWO TO BACK ----------------
                    // //////////////////////////////////////////////

                        starClickerTwoOff.style = `
                        
                            width:100%;
                            height:100%;
                            z-index:-1;
                            left:0px;
                            right:0;
                            display:none;
                            position:absolute;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `

                    // SWITCH OFF SELECTED STAR ----------------------
                    // //////////////////////////////////////////////

                        getRatingStarTwo.style = `
                        
                            width:25px;
                            height:25px;
                            top:0;
                            left:0;
                            right:0;
                            bottom:0;
                            margin:auto;
                            position:absolute;
                            overflow:hidden;
                            background:url("${cpatureRatingsStarImages[0]}");
                            background-size:cover;
                            background-repeat:no-repeat;
                            background-position:top;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `







                    // SWITCH OFF OTHER STARS -----------------------
                    // //////////////////////////////////////////////

                        getRatingStarOne.style = `
                        
                            width:25px;
                            height:25px;
                            top:0;
                            left:0;
                            right:0;
                            bottom:0;
                            margin:auto;
                            position:absolute;
                            overflow:hidden;
                            background:url("${cpatureRatingsStarImages[0]}");
                            background-size:cover;
                            background-repeat:no-repeat;
                            background-position:top;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `

                        getRatingStarThree.style = `
                        
                            width:25px;
                            height:25px;
                            top:0;
                            left:0;
                            right:0;
                            bottom:0;
                            margin:auto;
                            position:absolute;
                            overflow:hidden;
                            background:url("${cpatureRatingsStarImages[0]}");
                            background-size:cover;
                            background-repeat:no-repeat;
                            background-position:top;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `

                        getRatingStarFour.style = `
                        
                            width:25px;
                            height:25px;
                            top:0;
                            left:0;
                            right:0;
                            bottom:0;
                            margin:auto;
                            position:absolute;
                            overflow:hidden;
                            background:url("${cpatureRatingsStarImages[0]}");
                            background-size:cover;
                            background-repeat:no-repeat;
                            background-position:top;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `

                        getRatingStarFive.style = `
                        
                            width:25px;
                            height:25px;
                            top:0;
                            left:0;
                            right:0;
                            bottom:0;
                            margin:auto;
                            position:absolute;
                            overflow:hidden;
                            background:url("${cpatureRatingsStarImages[0]}");
                            background-size:cover;
                            background-repeat:no-repeat;
                            background-position:top;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `



                })

    








        // RATING STAR CLICKER THREE --------------------------------
        // //////////////////////////////////////////////////////////

            // CLICKER ON -------------------------------------------
            // ------------------------------------------------------

                starClickerThreeOn.addEventListener("click", function () {

                    // CHANGE STAR COUNTER --------------------------
                    // //////////////////////////////////////////////

                        captureRatingNumber = 3

                    // SEND ON CLICKER THREE TO BACK ----------------
                    // //////////////////////////////////////////////
                        
                        starClickerThreeOn.style = `
                        
                            width:100%;
                            height:100%;
                            z-index:-1;
                            left:0px;
                            right:0;
                            display:none;
                            position:absolute;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `

                    // BRING OFF CLICKER THREE TO FRONT -------------
                    // //////////////////////////////////////////////

                        starClickerThreeOff.style = `
                        
                            width:100%;
                            height:100%;
                            z-index:1;
                            left:0px;
                            right:0;
                            display:block;
                            position:absolute;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `

                    // SWITCH ON SELECTED STAR ----------------------
                    // //////////////////////////////////////////////

                        getRatingStarOne.style = `
                        
                            width:25px;
                            height:25px;
                            top:0;
                            left:0;
                            right:0;
                            bottom:0;
                            margin:auto;
                            position:absolute;
                            overflow:hidden;
                            background:url("${cpatureRatingsStarImages[1]}");
                            background-size:cover;
                            background-repeat:no-repeat;
                            background-position:top;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `

                        getRatingStarTwo.style = `
                        
                            width:25px;
                            height:25px;
                            top:0;
                            left:0;
                            right:0;
                            bottom:0;
                            margin:auto;
                            position:absolute;
                            overflow:hidden;
                            background:url("${cpatureRatingsStarImages[1]}");
                            background-size:cover;
                            background-repeat:no-repeat;
                            background-position:top;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `

                        getRatingStarThree.style = `
                        
                            width:25px;
                            height:25px;
                            top:0;
                            left:0;
                            right:0;
                            bottom:0;
                            margin:auto;
                            position:absolute;
                            overflow:hidden;
                            background:url("${cpatureRatingsStarImages[1]}");
                            background-size:cover;
                            background-repeat:no-repeat;
                            background-position:top;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `







                    // SWITCH OFF OTHER STARS -----------------------
                    // //////////////////////////////////////////////

                        getRatingStarFour.style = `
                        
                            width:25px;
                            height:25px;
                            top:0;
                            left:0;
                            right:0;
                            bottom:0;
                            margin:auto;
                            position:absolute;
                            overflow:hidden;
                            background:url("${cpatureRatingsStarImages[0]}");
                            background-size:cover;
                            background-repeat:no-repeat;
                            background-position:top;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `

                        getRatingStarFive.style = `
                        
                            width:25px;
                            height:25px;
                            top:0;
                            left:0;
                            right:0;
                            bottom:0;
                            margin:auto;
                            position:absolute;
                            overflow:hidden;
                            background:url("${cpatureRatingsStarImages[0]}");
                            background-size:cover;
                            background-repeat:no-repeat;
                            background-position:top;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `







                    // SWITCH CLICKERS ------------------------------
                    // //////////////////////////////////////////////

                        // BRING ON CLICKERS TO DEFAULT POSITION >>>>
                        // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

                            starClickerOneOn.style = `
                            
                                width:100%;
                                height:100%;
                                z-index:1;
                                left:0px;
                                right:0;
                                display:block;
                                position:absolute;
                                transition:all 600ms ease;
                                -o-transition:all 600ms ease;
                                -ms-transition:all 600ms ease;
                                -moz-transition:all 600ms ease;
                                -webkit-transition:all 600ms ease;

                            `

                            starClickerTwoOn.style = `
                            
                                width:100%;
                                height:100%;
                                z-index:1;
                                left:0px;
                                right:0;
                                display:block;
                                position:absolute;
                                transition:all 600ms ease;
                                -o-transition:all 600ms ease;
                                -ms-transition:all 600ms ease;
                                -moz-transition:all 600ms ease;
                                -webkit-transition:all 600ms ease;

                            `

                            starClickerFourOn.style = `
                            
                                width:100%;
                                height:100%;
                                z-index:1;
                                left:0px;
                                right:0;
                                display:block;
                                position:absolute;
                                transition:all 600ms ease;
                                -o-transition:all 600ms ease;
                                -ms-transition:all 600ms ease;
                                -moz-transition:all 600ms ease;
                                -webkit-transition:all 600ms ease;

                            `

                            starClickerFiveOn.style = `
                            
                                width:100%;
                                height:100%;
                                z-index:1;
                                left:0px;
                                right:0;
                                display:block;
                                position:absolute;
                                transition:all 600ms ease;
                                -o-transition:all 600ms ease;
                                -ms-transition:all 600ms ease;
                                -moz-transition:all 600ms ease;
                                -webkit-transition:all 600ms ease;

                            `

                        // SEND OFF CLICKERS TO BACK POSITION >>>>>>>
                        // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

                            starClickerOneOff.style = `
                            
                                width:100%;
                                height:100%;
                                z-index:-1;
                                left:0px;
                                right:0;
                                display:none;
                                position:absolute;
                                transition:all 600ms ease;
                                -o-transition:all 600ms ease;
                                -ms-transition:all 600ms ease;
                                -moz-transition:all 600ms ease;
                                -webkit-transition:all 600ms ease;

                            `

                            starClickerTwoOff.style = `
                            
                                width:100%;
                                height:100%;
                                z-index:-1;
                                left:0px;
                                right:0;
                                display:none;
                                position:absolute;
                                transition:all 600ms ease;
                                -o-transition:all 600ms ease;
                                -ms-transition:all 600ms ease;
                                -moz-transition:all 600ms ease;
                                -webkit-transition:all 600ms ease;

                            `

                            starClickerFourOff.style = `
                            
                                width:100%;
                                height:100%;
                                z-index:-1;
                                left:0px;
                                right:0;
                                display:none;
                                position:absolute;
                                transition:all 600ms ease;
                                -o-transition:all 600ms ease;
                                -ms-transition:all 600ms ease;
                                -moz-transition:all 600ms ease;
                                -webkit-transition:all 600ms ease;

                            `

                            starClickerFiveOff.style = `
                            
                                width:100%;
                                height:100%;
                                z-index:-1;
                                left:0px;
                                right:0;
                                display:none;
                                position:absolute;
                                transition:all 600ms ease;
                                -o-transition:all 600ms ease;
                                -ms-transition:all 600ms ease;
                                -moz-transition:all 600ms ease;
                                -webkit-transition:all 600ms ease;

                            `



                })









            // CLICKER OFF ------------------------------------------
            // ------------------------------------------------------

                starClickerThreeOff.addEventListener("click", function () {

                    // CHANGE STAR COUNTER --------------------------
                    // //////////////////////////////////////////////

                        captureRatingNumber = 0

                    // SEND ON CLICKER TWO TO FRONT -----------------
                    // //////////////////////////////////////////////
                        
                        starClickerThreeOn.style = `
                        
                            width:100%;
                            height:100%;
                            z-index:1;
                            left:0px;
                            right:0;
                            display:block;
                            position:absolute;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `

                    // BRING OFF CLICKER TWO TO BACK ----------------
                    // //////////////////////////////////////////////

                        starClickerThreeOff.style = `
                        
                            width:100%;
                            height:100%;
                            z-index:-1;
                            left:0px;
                            right:0;
                            display:none;
                            position:absolute;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `

                    // SWITCH OFF SELECTED STAR ----------------------
                    // //////////////////////////////////////////////

                        getRatingStarThree.style = `
                        
                            width:25px;
                            height:25px;
                            top:0;
                            left:0;
                            right:0;
                            bottom:0;
                            margin:auto;
                            position:absolute;
                            overflow:hidden;
                            background:url("${cpatureRatingsStarImages[0]}");
                            background-size:cover;
                            background-repeat:no-repeat;
                            background-position:top;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `







                    // SWITCH OFF OTHER STARS -----------------------
                    // //////////////////////////////////////////////

                        getRatingStarOne.style = `
                        
                            width:25px;
                            height:25px;
                            top:0;
                            left:0;
                            right:0;
                            bottom:0;
                            margin:auto;
                            position:absolute;
                            overflow:hidden;
                            background:url("${cpatureRatingsStarImages[0]}");
                            background-size:cover;
                            background-repeat:no-repeat;
                            background-position:top;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `

                        getRatingStarTwo.style = `
                        
                            width:25px;
                            height:25px;
                            top:0;
                            left:0;
                            right:0;
                            bottom:0;
                            margin:auto;
                            position:absolute;
                            overflow:hidden;
                            background:url("${cpatureRatingsStarImages[0]}");
                            background-size:cover;
                            background-repeat:no-repeat;
                            background-position:top;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `

                        getRatingStarFour.style = `
                        
                            width:25px;
                            height:25px;
                            top:0;
                            left:0;
                            right:0;
                            bottom:0;
                            margin:auto;
                            position:absolute;
                            overflow:hidden;
                            background:url("${cpatureRatingsStarImages[0]}");
                            background-size:cover;
                            background-repeat:no-repeat;
                            background-position:top;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `

                        getRatingStarFive.style = `
                        
                            width:25px;
                            height:25px;
                            top:0;
                            left:0;
                            right:0;
                            bottom:0;
                            margin:auto;
                            position:absolute;
                            overflow:hidden;
                            background:url("${cpatureRatingsStarImages[0]}");
                            background-size:cover;
                            background-repeat:no-repeat;
                            background-position:top;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `



                })

    








        // RATING STAR CLICKER FOUR ---------------------------------
        // //////////////////////////////////////////////////////////

            // CLICKER ON -------------------------------------------
            // ------------------------------------------------------

                starClickerFourOn.addEventListener("click", function () {

                    // CHANGE STAR COUNTER --------------------------
                    // //////////////////////////////////////////////

                        captureRatingNumber = 4

                    // SEND ON CLICKER FOUR TO BACK -----------------
                    // //////////////////////////////////////////////
                        
                        starClickerFourOn.style = `
                        
                            width:100%;
                            height:100%;
                            z-index:-1;
                            left:0px;
                            right:0;
                            display:none;
                            position:absolute;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `

                    // BRING OFF CLICKER FOUR TO FRONT --------------
                    // //////////////////////////////////////////////

                        starClickerFourOff.style = `
                        
                            width:100%;
                            height:100%;
                            z-index:1;
                            left:0px;
                            right:0;
                            display:block;
                            position:absolute;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `

                    // SWITCH ON SELECTED STAR ----------------------
                    // //////////////////////////////////////////////

                        getRatingStarOne.style = `
                        
                            width:25px;
                            height:25px;
                            top:0;
                            left:0;
                            right:0;
                            bottom:0;
                            margin:auto;
                            position:absolute;
                            overflow:hidden;
                            background:url("${cpatureRatingsStarImages[1]}");
                            background-size:cover;
                            background-repeat:no-repeat;
                            background-position:top;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `

                        getRatingStarTwo.style = `
                        
                            width:25px;
                            height:25px;
                            top:0;
                            left:0;
                            right:0;
                            bottom:0;
                            margin:auto;
                            position:absolute;
                            overflow:hidden;
                            background:url("${cpatureRatingsStarImages[1]}");
                            background-size:cover;
                            background-repeat:no-repeat;
                            background-position:top;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `

                        getRatingStarThree.style = `
                        
                            width:25px;
                            height:25px;
                            top:0;
                            left:0;
                            right:0;
                            bottom:0;
                            margin:auto;
                            position:absolute;
                            overflow:hidden;
                            background:url("${cpatureRatingsStarImages[1]}");
                            background-size:cover;
                            background-repeat:no-repeat;
                            background-position:top;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `

                        getRatingStarFour.style = `
                        
                            width:25px;
                            height:25px;
                            top:0;
                            left:0;
                            right:0;
                            bottom:0;
                            margin:auto;
                            position:absolute;
                            overflow:hidden;
                            background:url("${cpatureRatingsStarImages[1]}");
                            background-size:cover;
                            background-repeat:no-repeat;
                            background-position:top;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `







                    // SWITCH OFF OTHER STARS -----------------------
                    // //////////////////////////////////////////////

                        getRatingStarFive.style = `
                        
                            width:25px;
                            height:25px;
                            top:0;
                            left:0;
                            right:0;
                            bottom:0;
                            margin:auto;
                            position:absolute;
                            overflow:hidden;
                            background:url("${cpatureRatingsStarImages[0]}");
                            background-size:cover;
                            background-repeat:no-repeat;
                            background-position:top;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `







                    // SWITCH CLICKERS ------------------------------
                    // //////////////////////////////////////////////

                        // BRING ON CLICKERS TO DEFAULT POSITION >>>>
                        // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

                            starClickerOneOn.style = `
                            
                                width:100%;
                                height:100%;
                                z-index:1;
                                left:0px;
                                right:0;
                                display:block;
                                position:absolute;
                                transition:all 600ms ease;
                                -o-transition:all 600ms ease;
                                -ms-transition:all 600ms ease;
                                -moz-transition:all 600ms ease;
                                -webkit-transition:all 600ms ease;

                            `

                            starClickerTwoOn.style = `
                            
                                width:100%;
                                height:100%;
                                z-index:1;
                                left:0px;
                                right:0;
                                display:block;
                                position:absolute;
                                transition:all 600ms ease;
                                -o-transition:all 600ms ease;
                                -ms-transition:all 600ms ease;
                                -moz-transition:all 600ms ease;
                                -webkit-transition:all 600ms ease;

                            `

                            starClickerThreeOn.style = `
                            
                                width:100%;
                                height:100%;
                                z-index:1;
                                left:0px;
                                right:0;
                                display:block;
                                position:absolute;
                                transition:all 600ms ease;
                                -o-transition:all 600ms ease;
                                -ms-transition:all 600ms ease;
                                -moz-transition:all 600ms ease;
                                -webkit-transition:all 600ms ease;

                            `

                            starClickerFiveOn.style = `
                            
                                width:100%;
                                height:100%;
                                z-index:1;
                                left:0px;
                                right:0;
                                display:block;
                                position:absolute;
                                transition:all 600ms ease;
                                -o-transition:all 600ms ease;
                                -ms-transition:all 600ms ease;
                                -moz-transition:all 600ms ease;
                                -webkit-transition:all 600ms ease;

                            `

                        // SEND OFF CLICKERS TO BACK POSITION >>>>>>>
                        // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

                            starClickerOneOff.style = `
                            
                                width:100%;
                                height:100%;
                                z-index:-1;
                                left:0px;
                                right:0;
                                display:none;
                                position:absolute;
                                transition:all 600ms ease;
                                -o-transition:all 600ms ease;
                                -ms-transition:all 600ms ease;
                                -moz-transition:all 600ms ease;
                                -webkit-transition:all 600ms ease;

                            `

                            starClickerTwoOff.style = `
                            
                                width:100%;
                                height:100%;
                                z-index:-1;
                                left:0px;
                                right:0;
                                display:none;
                                position:absolute;
                                transition:all 600ms ease;
                                -o-transition:all 600ms ease;
                                -ms-transition:all 600ms ease;
                                -moz-transition:all 600ms ease;
                                -webkit-transition:all 600ms ease;

                            `

                            starClickerThreeOff.style = `
                            
                                width:100%;
                                height:100%;
                                z-index:-1;
                                left:0px;
                                right:0;
                                display:none;
                                position:absolute;
                                transition:all 600ms ease;
                                -o-transition:all 600ms ease;
                                -ms-transition:all 600ms ease;
                                -moz-transition:all 600ms ease;
                                -webkit-transition:all 600ms ease;

                            `

                            starClickerFiveOff.style = `
                            
                                width:100%;
                                height:100%;
                                z-index:-1;
                                left:0px;
                                right:0;
                                display:none;
                                position:absolute;
                                transition:all 600ms ease;
                                -o-transition:all 600ms ease;
                                -ms-transition:all 600ms ease;
                                -moz-transition:all 600ms ease;
                                -webkit-transition:all 600ms ease;

                            `



                })









            // CLICKER OFF ------------------------------------------
            // ------------------------------------------------------

                starClickerFourOff.addEventListener("click", function () {

                    // CHANGE STAR COUNTER --------------------------
                    // //////////////////////////////////////////////

                        captureRatingNumber = 0

                    // SEND ON CLICKER TWO TO FRONT -----------------
                    // //////////////////////////////////////////////
                        
                        starClickerFourOn.style = `
                        
                            width:100%;
                            height:100%;
                            z-index:1;
                            left:0px;
                            right:0;
                            display:block;
                            position:absolute;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `

                    // BRING OFF CLICKER TWO TO BACK ----------------
                    // //////////////////////////////////////////////

                        starClickerFourOff.style = `
                        
                            width:100%;
                            height:100%;
                            z-index:-1;
                            left:0px;
                            right:0;
                            display:none;
                            position:absolute;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `

                    // SWITCH OFF SELECTED STAR ----------------------
                    // //////////////////////////////////////////////

                        getRatingStarFour.style = `
                        
                            width:25px;
                            height:25px;
                            top:0;
                            left:0;
                            right:0;
                            bottom:0;
                            margin:auto;
                            position:absolute;
                            overflow:hidden;
                            background:url("${cpatureRatingsStarImages[0]}");
                            background-size:cover;
                            background-repeat:no-repeat;
                            background-position:top;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `







                    // SWITCH OFF OTHER STARS -----------------------
                    // //////////////////////////////////////////////

                        getRatingStarOne.style = `
                        
                            width:25px;
                            height:25px;
                            top:0;
                            left:0;
                            right:0;
                            bottom:0;
                            margin:auto;
                            position:absolute;
                            overflow:hidden;
                            background:url("${cpatureRatingsStarImages[0]}");
                            background-size:cover;
                            background-repeat:no-repeat;
                            background-position:top;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `

                        getRatingStarTwo.style = `
                        
                            width:25px;
                            height:25px;
                            top:0;
                            left:0;
                            right:0;
                            bottom:0;
                            margin:auto;
                            position:absolute;
                            overflow:hidden;
                            background:url("${cpatureRatingsStarImages[0]}");
                            background-size:cover;
                            background-repeat:no-repeat;
                            background-position:top;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `

                        getRatingStarThree.style = `
                        
                            width:25px;
                            height:25px;
                            top:0;
                            left:0;
                            right:0;
                            bottom:0;
                            margin:auto;
                            position:absolute;
                            overflow:hidden;
                            background:url("${cpatureRatingsStarImages[0]}");
                            background-size:cover;
                            background-repeat:no-repeat;
                            background-position:top;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `

                        getRatingStarFive.style = `
                        
                            width:25px;
                            height:25px;
                            top:0;
                            left:0;
                            right:0;
                            bottom:0;
                            margin:auto;
                            position:absolute;
                            overflow:hidden;
                            background:url("${cpatureRatingsStarImages[0]}");
                            background-size:cover;
                            background-repeat:no-repeat;
                            background-position:top;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `



                })

    








        // RATING STAR CLICKER FIVE ---------------------------------
        // //////////////////////////////////////////////////////////

            // CLICKER ON -------------------------------------------
            // ------------------------------------------------------

                starClickerFiveOn.addEventListener("click", function () {

                    // CHANGE STAR COUNTER --------------------------
                    // //////////////////////////////////////////////

                        captureRatingNumber = 5

                    // SEND ON CLICKER FIVE TO BACK -----------------
                    // //////////////////////////////////////////////
                        
                        starClickerFiveOn.style = `
                        
                            width:100%;
                            height:100%;
                            z-index:-1;
                            left:0px;
                            right:0;
                            display:none;
                            position:absolute;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `

                    // BRING OFF CLICKER FIVE TO FRONT --------------
                    // //////////////////////////////////////////////

                        starClickerFiveOff.style = `
                        
                            width:100%;
                            height:100%;
                            z-index:1;
                            left:0px;
                            right:0;
                            display:block;
                            position:absolute;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `

                    // SWITCH ON SELECTED STAR ----------------------
                    // //////////////////////////////////////////////

                        getRatingStarOne.style = `
                        
                            width:25px;
                            height:25px;
                            top:0;
                            left:0;
                            right:0;
                            bottom:0;
                            margin:auto;
                            position:absolute;
                            overflow:hidden;
                            background:url("${cpatureRatingsStarImages[1]}");
                            background-size:cover;
                            background-repeat:no-repeat;
                            background-position:top;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `

                        getRatingStarTwo.style = `
                        
                            width:25px;
                            height:25px;
                            top:0;
                            left:0;
                            right:0;
                            bottom:0;
                            margin:auto;
                            position:absolute;
                            overflow:hidden;
                            background:url("${cpatureRatingsStarImages[1]}");
                            background-size:cover;
                            background-repeat:no-repeat;
                            background-position:top;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `

                        getRatingStarThree.style = `
                        
                            width:25px;
                            height:25px;
                            top:0;
                            left:0;
                            right:0;
                            bottom:0;
                            margin:auto;
                            position:absolute;
                            overflow:hidden;
                            background:url("${cpatureRatingsStarImages[1]}");
                            background-size:cover;
                            background-repeat:no-repeat;
                            background-position:top;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `

                        getRatingStarFour.style = `
                        
                            width:25px;
                            height:25px;
                            top:0;
                            left:0;
                            right:0;
                            bottom:0;
                            margin:auto;
                            position:absolute;
                            overflow:hidden;
                            background:url("${cpatureRatingsStarImages[1]}");
                            background-size:cover;
                            background-repeat:no-repeat;
                            background-position:top;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `

                        getRatingStarFive.style = `
                        
                            width:25px;
                            height:25px;
                            top:0;
                            left:0;
                            right:0;
                            bottom:0;
                            margin:auto;
                            position:absolute;
                            overflow:hidden;
                            background:url("${cpatureRatingsStarImages[1]}");
                            background-size:cover;
                            background-repeat:no-repeat;
                            background-position:top;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `







                    // SWITCH OFF OTHER STARS -----------------------
                    // //////////////////////////////////////////////







                    // SWITCH CLICKERS ------------------------------
                    // //////////////////////////////////////////////

                        // BRING ON CLICKERS TO DEFAULT POSITION >>>>
                        // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

                            starClickerOneOn.style = `
                            
                                width:100%;
                                height:100%;
                                z-index:1;
                                left:0px;
                                right:0;
                                display:block;
                                position:absolute;
                                transition:all 600ms ease;
                                -o-transition:all 600ms ease;
                                -ms-transition:all 600ms ease;
                                -moz-transition:all 600ms ease;
                                -webkit-transition:all 600ms ease;

                            `

                            starClickerTwoOn.style = `
                            
                                width:100%;
                                height:100%;
                                z-index:1;
                                left:0px;
                                right:0;
                                display:block;
                                position:absolute;
                                transition:all 600ms ease;
                                -o-transition:all 600ms ease;
                                -ms-transition:all 600ms ease;
                                -moz-transition:all 600ms ease;
                                -webkit-transition:all 600ms ease;

                            `

                            starClickerThreeOn.style = `
                            
                                width:100%;
                                height:100%;
                                z-index:1;
                                left:0px;
                                right:0;
                                display:block;
                                position:absolute;
                                transition:all 600ms ease;
                                -o-transition:all 600ms ease;
                                -ms-transition:all 600ms ease;
                                -moz-transition:all 600ms ease;
                                -webkit-transition:all 600ms ease;

                            `

                            starClickerFourOn.style = `
                            
                                width:100%;
                                height:100%;
                                z-index:1;
                                left:0px;
                                right:0;
                                display:block;
                                position:absolute;
                                transition:all 600ms ease;
                                -o-transition:all 600ms ease;
                                -ms-transition:all 600ms ease;
                                -moz-transition:all 600ms ease;
                                -webkit-transition:all 600ms ease;

                            `

                        // SEND OFF CLICKERS TO BACK POSITION >>>>>>>
                        // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

                            starClickerOneOff.style = `
                            
                                width:100%;
                                height:100%;
                                z-index:-1;
                                left:0px;
                                right:0;
                                display:none;
                                position:absolute;
                                transition:all 600ms ease;
                                -o-transition:all 600ms ease;
                                -ms-transition:all 600ms ease;
                                -moz-transition:all 600ms ease;
                                -webkit-transition:all 600ms ease;

                            `

                            starClickerTwoOff.style = `
                            
                                width:100%;
                                height:100%;
                                z-index:-1;
                                left:0px;
                                right:0;
                                display:none;
                                position:absolute;
                                transition:all 600ms ease;
                                -o-transition:all 600ms ease;
                                -ms-transition:all 600ms ease;
                                -moz-transition:all 600ms ease;
                                -webkit-transition:all 600ms ease;

                            `

                            starClickerThreeOff.style = `
                            
                                width:100%;
                                height:100%;
                                z-index:-1;
                                left:0px;
                                right:0;
                                display:none;
                                position:absolute;
                                transition:all 600ms ease;
                                -o-transition:all 600ms ease;
                                -ms-transition:all 600ms ease;
                                -moz-transition:all 600ms ease;
                                -webkit-transition:all 600ms ease;

                            `

                            starClickerFourOff.style = `
                            
                                width:100%;
                                height:100%;
                                z-index:-1;
                                left:0px;
                                right:0;
                                display:none;
                                position:absolute;
                                transition:all 600ms ease;
                                -o-transition:all 600ms ease;
                                -ms-transition:all 600ms ease;
                                -moz-transition:all 600ms ease;
                                -webkit-transition:all 600ms ease;

                            `



                })









            // CLICKER OFF ------------------------------------------
            // ------------------------------------------------------

                starClickerFiveOff.addEventListener("click", function () {

                    // CHANGE STAR COUNTER --------------------------
                    // //////////////////////////////////////////////

                        captureRatingNumber = 0

                    // SEND ON CLICKER TWO TO FRONT -----------------
                    // //////////////////////////////////////////////
                        
                        starClickerFiveOn.style = `
                        
                            width:100%;
                            height:100%;
                            z-index:1;
                            left:0px;
                            right:0;
                            display:block;
                            position:absolute;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `

                    // BRING OFF CLICKER TWO TO BACK ----------------
                    // //////////////////////////////////////////////

                        starClickerFiveOff.style = `
                        
                            width:100%;
                            height:100%;
                            z-index:-1;
                            left:0px;
                            right:0;
                            display:none;
                            position:absolute;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `

                    // SWITCH OFF SELECTED STAR ----------------------
                    // //////////////////////////////////////////////

                        getRatingStarFive.style = `
                        
                            width:25px;
                            height:25px;
                            top:0;
                            left:0;
                            right:0;
                            bottom:0;
                            margin:auto;
                            position:absolute;
                            overflow:hidden;
                            background:url("${cpatureRatingsStarImages[0]}");
                            background-size:cover;
                            background-repeat:no-repeat;
                            background-position:top;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `







                    // SWITCH OFF OTHER STARS -----------------------
                    // //////////////////////////////////////////////

                        getRatingStarOne.style = `
                        
                            width:25px;
                            height:25px;
                            top:0;
                            left:0;
                            right:0;
                            bottom:0;
                            margin:auto;
                            position:absolute;
                            overflow:hidden;
                            background:url("${cpatureRatingsStarImages[0]}");
                            background-size:cover;
                            background-repeat:no-repeat;
                            background-position:top;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `

                        getRatingStarTwo.style = `
                        
                            width:25px;
                            height:25px;
                            top:0;
                            left:0;
                            right:0;
                            bottom:0;
                            margin:auto;
                            position:absolute;
                            overflow:hidden;
                            background:url("${cpatureRatingsStarImages[0]}");
                            background-size:cover;
                            background-repeat:no-repeat;
                            background-position:top;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `

                        getRatingStarThree.style = `
                        
                            width:25px;
                            height:25px;
                            top:0;
                            left:0;
                            right:0;
                            bottom:0;
                            margin:auto;
                            position:absolute;
                            overflow:hidden;
                            background:url("${cpatureRatingsStarImages[0]}");
                            background-size:cover;
                            background-repeat:no-repeat;
                            background-position:top;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `

                        getRatingStarFour.style = `
                        
                            width:25px;
                            height:25px;
                            top:0;
                            left:0;
                            right:0;
                            bottom:0;
                            margin:auto;
                            position:absolute;
                            overflow:hidden;
                            background:url("${cpatureRatingsStarImages[0]}");
                            background-size:cover;
                            background-repeat:no-repeat;
                            background-position:top;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `



                })




    // BASE 64 CONVERT EVENTS ---------------------------------------
    // //////////////////////////////////////////////////////////////

    // TRANSLATE TO FORM EVENTS -------------------------------------
    // //////////////////////////////////////////////////////////////





// MAKE AUTORUNS FOR ENTIRE PAGE ------------------------------------
// //////////////////////////////////////////////////////////////////

    // NAV BAR AUTORUN EVENTS ---------------------------------------
    // //////////////////////////////////////////////////////////////

    // SETUP STREAM VIDEO AUTORUN EVENTS ----------------------------
    // //////////////////////////////////////////////////////////////

    // SNAP SHOT CAPTURE AUTORUN EVENTS -----------------------------
    // //////////////////////////////////////////////////////////////

    // CAPTURE AREA AUTORUN EVENTS ----------------------------------
    // //////////////////////////////////////////////////////////////

        // POPULATE DROP DOWN AREA ----------------------------------
        // //////////////////////////////////////////////////////////

            populateAreaDropDownItems()

    // BASE 64 CONVERT AUTORUN EVENTS -------------------------------
    // //////////////////////////////////////////////////////////////

    // TRANSLATE TO FORM AUTORUN EVENTS -----------------------------
    // //////////////////////////////////////////////////////////////