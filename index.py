from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/login')
def login():
    return render_template("login.html")

@app.route('/sign_in')
def sign_in():
    return render_template("sign_in.html")

@app.route('/addProperty')
def addProperty():
    return render_template("addProperty.html")    

if __name__ == '__main__':
    app.run(debug=True) #se genera el servidor