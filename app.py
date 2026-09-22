from flask import Flask, render_template, request
import csv

app = Flask(__name__)

CSV_FILE = "data/data/master/master_schedule.csv"


@app.route("/")
def home():
    schedule = []

    with open(CSV_FILE, newline="", encoding="utf-8") as file:
        reader = csv.DictReader(file)
        schedule = list(reader)

    # Get the selected year (default: 2026)
    year = request.args.get("year", "2026")

    # Keep only games from the selected year
    schedule = [
        game for game in schedule
        if game.get("Date", "").startswith(year + "-")
    ]

    # Sort games by date
    schedule.sort(key=lambda game: game.get("Date", ""))

    return render_template(
        "index.html",
        schedule=schedule,
        selected_year=year
    )


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5001, debug=True)