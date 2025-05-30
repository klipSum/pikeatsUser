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

        

    // ARRAYS DECLARED ----------------------------------------------
    // //////////////////////////////////////////////////////////////

        // ARRAYS FOR NAV BAR ---------------------------------------
        // //////////////////////////////////////////////////////////

        // ARRAYS FOR PICTURE CAPTURE -------------------------------
        // //////////////////////////////////////////////////////////

            var captureComment = []
            var captureSnapshot64 = []
            var captureStarRating = []
            var captureLocationName = []

        

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

    // BASE 64 CONVERT EVENTS ---------------------------------------
    // //////////////////////////////////////////////////////////////

    // TRANSLATE TO FORM EVENTS -------------------------------------
    // //////////////////////////////////////////////////////////////