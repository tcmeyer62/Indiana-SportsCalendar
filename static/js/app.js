console.log("Indiana Sports Calendar Loaded");

document.addEventListener("DOMContentLoaded", function () {

    const timeline = document.querySelector(".timeline");
    const timelineViewport =
        document.querySelector(".timeline-viewport");

    const previousButton =
        document.getElementById("previousButton");

    const todayButton =
        document.getElementById("todayButton");

    const nextButton =
        document.getElementById("nextButton");

    const toolbarButtons =
        document.querySelectorAll(".toolbar button");

    // Starting width for each month
    let monthWidth = 220;

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

                if (button.textContent.includes("−") ||
                    button.textContent.includes("-")) {
                    monthWidth -= 20;
                }

                monthWidth = Math.max(
                    120,
                    Math.min(monthWidth, 350)
                );

                updateZoom();
            });
        }
    });

    // Previous and Next move three months
    function scrollMonths(direction) {
        timelineViewport.scrollLeft +=
            direction * monthWidth * 3;
    }

    previousButton.addEventListener("click", function () {
        scrollMonths(-1);
    });

    nextButton.addEventListener("click", function () {
        scrollMonths(1);
    });

    // Today moves to the current month
    todayButton.addEventListener("click", function () {

        const currentMonth = new Date().getMonth();

        timelineViewport.scrollLeft =
            currentMonth * monthWidth;
    });

    // Set initial month width
    updateZoom();
       // Team filters
    const filters = document.querySelectorAll(
        ".filters input[type='checkbox']"
    );

    const teamRows = document.querySelectorAll(
        ".timeline-row"
    );

    function updateFilters() {
        const selectedTeams = Array.from(filters)
            .filter(box => box.checked)
            .map(box =>
                box.parentElement.textContent.trim().toLowerCase()
            );

        teamRows.forEach(function (row) {
            const teamName = row.querySelector(
                ".team-column"
            ).textContent.trim().toLowerCase();

            const isSelected = selectedTeams.some(
                team => teamName.includes(team)
            );

            row.style.setProperty(
                "display",
                isSelected ? "grid" : "none",
                "important"
            );
        });
    }

    filters.forEach(function (checkbox) {
        checkbox.addEventListener("change", updateFilters);
    });

    updateFilters();

});