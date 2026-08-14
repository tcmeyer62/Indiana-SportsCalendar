from flask import Flask, render_template
import csv

app = Flask(__name__)

CSV_FILE = "data/data/master/master_schedule.csv"


@app.route("/")
def home():
    schedule = []

    with open(CSV_FILE, newline="", encoding="utf-8") as file:
        reader = csv.DictReader(file)
        schedule = list(reader)

    return render_template("index.html", schedule=schedule)


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5001, debug=True)