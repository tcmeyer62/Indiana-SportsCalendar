console.log("Indiana Sports Calendar Loaded");

document.addEventListener("DOMContentLoaded", function () {

    const timeline = document.querySelector(".timeline");
    const zoomButtons = document.querySelectorAll(".toolbar button");

    let monthWidth = 110;

    function updateZoom() {
        timeline.style.setProperty(
            "--month-width",
            monthWidth + "px"
        );
    }

    zoomButtons.forEach(function (button) {

        if (button.textContent.includes("Zoom")) {

            button.addEventListener("click", function () {

                if (button.textContent.includes("+")) {
                    monthWidth += 20;
                }

                if (button.textContent.includes("-")) {
                    monthWidth -= 20;
                }

                monthWidth = Math.max(70, Math.min(monthWidth, 250));

                updateZoom();
            });
        }
    });

    updateZoom();
});