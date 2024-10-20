import csv
import os

from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

csv_file_path = "data.csv"


fieldnames = [
    "profile_url",
    "profile_name",
    "comment_url",
    "content",
    "photo_url",
    "reaction_count",
    "date",
]


# A route to handle JSON requests and return a response
@app.route("/", methods=["POST"])
def post_data():
    global first, count
    if count >= 300:
        return jsonify("Reached the limit")
    data = request.get_json()  # Get the JSON data from the request
    data = [{k: v for k, v in d.items() if v} for d in data if d]
    __import__("pprint").pprint(data)
    with open(csv_file_path, "a", newline="") as file:
        writer = csv.DictWriter(file, fieldnames=fieldnames)
        if count == 0:
            writer.writeheader()
        writer.writerows(data)
        if data:
            count += 1
    print(count)
    return jsonify(data)


if __name__ == "__main__":
    count = 0
    app.run(debug=True, host="0.0.0.0", port=3103)
