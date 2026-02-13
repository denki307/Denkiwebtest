from flask import Flask, render_template, jsonify
import os

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/status")
def status():
    # You can connect real bot ping check here later
    return jsonify({"status": "online"})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=int(os.environ.get("PORT", 5000)))
