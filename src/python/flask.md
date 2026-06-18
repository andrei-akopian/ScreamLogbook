# Flask (Python)

[flask official docs](https://flask.palletsprojects.com/en/stable/quickstart/#a-minimal-application)

[installation](https://flask.palletsprojects.com/en/stable/installation/)

`flask --app scriptfile.py run`


```py
from flask import Flask, render_template, jsonify

app = Flask(__name__)

@app.route('/hello/<path:subpath>', methods=['GET', 'POST'])
def hello_world(subpath):
    return f"<p>Hello, World! {subpath}</p>"
    
@app.route('/template/')
@app.route('/template/<name>')
def hello(name=None):
    request_data = request.get_json(silent=True)
    return render_template('hello.html', person=name)

@app.rout('/json')
def json():
    dict = {"a": 0}
    return jsonify(dict)
```
