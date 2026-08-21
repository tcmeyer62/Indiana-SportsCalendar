console.log("Indiana Sports Calendar Loaded");

document.addEventListener("DOMContentLoaded", function () {

    const timeline = document.querySelector(".timeline");
const toolbarButtons = document.querySelectorAll(".toolbar button");

const previousButton = document.getElementById("previousButton");
const todayButton = document.getElementById("todayButton");
const nextButton = document.getElementById("nextButton");

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
    const currentMonth = new Date().getMonth();

    const teamColumnWidth = 220;
    const monthPosition = teamColumnWidth + (currentMonth * monthWidth);

    timeline.scrollTo({
        left: monthPosition,
        behavior: "smooth"
    });
});

    updateZoom();
});