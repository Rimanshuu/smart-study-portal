from flask import Flask, request, jsonify
from flask_cors import CORS
from SpacedRepScript import authenticate, schedule_repetitions

app = Flask(__name__)
CORS(app)  # allow file:// origin to call localhost API
service = authenticate()  # authenticate once

@app.route("/add_topic", methods=["POST"])
def add_topic():
    data = request.get_json()
    topic = data.get("topic")

    if not topic:
        return jsonify({"status": "error", "message": "No topic provided"}), 400

    try:
        schedule_repetitions(service, topic)
        return jsonify({"status": "success", "message": f"Scheduled repetitions for '{topic}'"})
    except Exception as e:
        return jsonify({"status": "error", "message": str(e)}), 500

if __name__ == "__main__":
    app.run(host="127.0.0.1", port=5001)
