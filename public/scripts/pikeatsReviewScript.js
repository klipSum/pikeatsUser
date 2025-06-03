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

                                    captureDinerItemClassNames.push(`cameraSnapDinerDropAreaDownContentsItem${classNumbers[dineItemCounter]}Container`)
                                    captureDinerItemActualClassNames.push(`cameraSnapDinerDropAreaDownContentsItem${classNumbers[dineItemCounter]}Resizer`)
    
    
                                
    
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