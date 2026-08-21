console.log("Indiana Sports Calendar Loaded");

document.addEventListener("DOMContentLoaded", function () {

    const timeline = document.querySelector(".timeline");
    const toolbarButtons = document.querySelectorAll(".toolbar button");

    const previousButton = toolbarButtons[0];
    const todayButton = toolbarButtons[1];
    const nextButton = toolbarButtons[2];

    let monthWidth = 110;

    function updateZoom() {
        timeline.style.setProperty(
            "--month-width",
            monthWidth + "px"
        );
    }

    // Zoom controls
    toolbarButtons.forEach(function (button) {

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

    // Month navigation
    function scrollMonths(direction) {
        const amount = monthWidth * 3;

        timeline.scrollBy({
            left: direction * amount,
            behavior: "smooth"
        });
    }

    previousButton.addEventListener("click", function () {
        scrollMonths(-1);
    });

    nextButton.addEventListener("click", function () {
        scrollMonths(1);
    });

    todayButton.addEventListener("click", function () {
        timeline.scrollTo({
            left: monthWidth * 3,
            behavior: "smooth"
        });
    });

    updateZoom();
