console.log("Indiana Sports Calendar Loaded");

document.addEventListener("DOMContentLoaded", function () {

    const timeline = document.querySelector(".timeline");
const toolbarButtons = document.querySelectorAll(".toolbar button");
const timelineViewport = document.querySelector(".timeline-viewport");
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

    timelineViewport.scrollLeft += direction * amount;
}

    previousButton.addEventListener("click", function () {
        scrollMonths(-1);
    });

    nextButton.addEventListener("click", function () {
        scrollMonths(1);
    });

todayButton.addEventListener("click", function () {
    const currentMonth = new Date().getMonth();
    const months = document.querySelectorAll(".timeline-header .month");

    if (months.length === 12) {
        const targetMonth = months[currentMonth];

        timelineViewport.scrollLeft =
            targetMonth.offsetLeft - 220 + (monthWidth * 2);
    }
});

updateZoom();

});