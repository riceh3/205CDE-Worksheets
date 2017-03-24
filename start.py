from flask import Flask, render_template, request, send_from_directory

app = Flask(__name__)


@app.route('/')
def send_static():
    return app.send_static_file('other.html')



if __name__ == '__main__':
    app.run(port=8080, host='1.1.1.1', debug=True)