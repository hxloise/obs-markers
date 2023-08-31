const comment = "M";
const duration = 6;

document.addEventListener("DOMContentLoaded", function () {
    const addMarkerButton = document.getElementById("addMarkerButton");
    const settingsIcon = document.getElementById('settingsSvg');
    const settingsSvg = document.getElementById("settingsSvg");
    const closeSvg = document.getElementById("closeSvg");
    const settingsPopup = document.getElementById('settingsPopup');


    addMarkerButton.addEventListener("click", async function () {
        // Envoyer la requête à l'API avec le commentaire et la durée
        const response = await fetch(`http://localhost:8081/remote/addMarker/${encodeURIComponent(comment)}/${duration}`);
        console.log(response)

        if (response.ok) {
            console.log("Marker ajouté !");
        } else {
            console.error("Erreur lors de l'ajout du marqueur.");
        }
    });
    /* ---------------------------------------------------------------
        POPUP
    --------------------------------------------------------------- */
    settingsIcon.addEventListener('click', () => {
        settingsSvg.style.display = "none";
        closeSvg.style.display = "block";
        settingsPopup.style.display = 'flex';
    });

    closeSvg.addEventListener('click', () => {
        settingsSvg.style.display = "block";
        closeSvg.style.display = "none";
        settingsPopup.style.display = 'none';
    });
});
