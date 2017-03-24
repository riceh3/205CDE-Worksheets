from flask import Flask, render_template, request, send_from_directory

app = Flask(__name__)


@app.route('/')
def send_static():
    return app.send_static_file('home.html')

@app.route('/')
@app.route('/contact.html', methods=['GET', 'POST'])
def view_form():
    if request.method == 'GET':
        return render_template('contact.html')
    else:
        name = request.form['name'];
        comments = request.form['comments']
        return render_template('contact.html', name=name, comments=comments)


if __name__ == '__main__':
    app.run(port=8080, host='0.0.0.0', debug=True)

