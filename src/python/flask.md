# Flask (Python)

[flask official docs](https://flask.palletsprojects.com/en/stable/quickstart/#a-minimal-application)

[installation](https://flask.palletsprojects.com/en/stable/installation/)

`flask --app scriptfile.py run`


```py
from flask import Flask, render_template, jsonify, send_from_directory
import os

app = Flask(__name__, static_folder="./static")

#static host
@app.route("/", defaults={"path": ""})
@app.route("/<path:path>")
def serve(path):
    if path != "" and os.path.exists(os.path.join(app.static_folder, path)):
        return send_from_directory(app.static_folder, path)
    return send_from_directory(app.static_folder, "index.html")

@app.route('/hello/<path:subpath>', methods=['GET', 'POST'])
def hello_world(subpath):
    return f"<p>Hello, World! {subpath}</p>"
    
@app.route('/template/')
@app.route('/template/<name>')
def hello(name=None):
    request_data = request.get_json(silent=True)
    return render_template('hello.html', person=name)

@app.route('/json')
def json():
    dict = {"a": 0}
    return jsonify(dict)

if __name__ == "__main__":
    app.run()
```
