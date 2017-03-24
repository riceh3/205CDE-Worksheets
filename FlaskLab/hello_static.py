from flask import Flask, send_from_directory
app = Flask(__name__);

@app.route('/')
def send_static():
    return app.send_static_file('test.html')

@app.route('/<path:path>')
def send_static2(path):
    return send_from_directory('205CDE-Worksheets/FlaskLab/static', path)

if __name__ == '__main__':
    app.run()