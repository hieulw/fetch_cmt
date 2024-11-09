import csv
import os

from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

comment_file = "comments.csv"
share_file = "shares.csv"
comment_fields = [
    "profile_url",
    "profile_name",
    "comment_url",
    "comment_content",
    "comment_date",
    "photo_url",
    "reaction_count",
]
share_fields = [
    "profile_url",
    "share_url",
    "share_content",
    "share_date",
]


# A route to handle JSON requests and return a response
@app.route("/comments", methods=["POST"])
def post_comments():
    first_line = ""
    data = request.get_json()  # Get the JSON data from the request
    data = [{k: v for k, v in d.items() if v} for d in data if d]
    __import__("pprint").pprint(data)
    if os.path.exists(comment_file):
        with open(comment_file, "r") as file:
            first_line = file.readline().strip()
    with open(comment_file, "a", newline="") as file:
        writer = csv.DictWriter(file, fieldnames=comment_fields)
        if "profile_name" not in first_line:
            writer.writeheader()
        writer.writerows(data)
    return jsonify(data)


@app.route("/shares", methods=["POST"])
def post_shares():
    first_line = ""
    data = request.get_json()  # Get the JSON data from the request
    data = [{k: v for k, v in d.items() if v} for d in data if d]
    __import__("pprint").pprint(data)
    if os.path.exists(share_file):
        with open(share_file, "r") as file:
            first_line = file.readline().strip()
    with open(share_file, "a", newline="") as file:
        writer = csv.DictWriter(file, fieldnames=share_fields)
        if "profile_name" not in first_line:
            writer.writeheader()
        writer.writerows(data)
    return jsonify(data)


if __name__ == "__main__":
    count = 0
    app.run(debug=True, host="0.0.0.0", port=3103)
