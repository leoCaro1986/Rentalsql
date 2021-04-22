from flask import Flask, render_template, request, redirect, url_for
import mysql.connector
import mysql


mydb = mysql.connector.connect(
    host = "localhost",
    user = "root",
    port = 3306,
    password = "",
    database = "rental_db"
)
myCursor = mydb.cursor()

app = Flask(__name__)

@app.route('/')
def index():
    query = "SELECT * FROM property"
    myCursor.execute(query)
    result= myCursor.fetchall()
    return render_template("index.html", propertyp = result)
    
@app.route('/login')
def login():
    return render_template("login.html")

@app.route('/sign_in')
def sign_in():
    return render_template("sign_in.html")

@app.route('/sign_up',methods=["POST"])
def sign_up():
    if request.method == "POST":
        name = request.form['name']
        lastname = request.form['lastname']
        email = request.form['email']
        country = request.form['country']
        city = request.form['city']
        password = request.form['password']
        roll = request.form['roll']
        query = f"INSERT INTO user (name, lastname, email, country, city, password, roll) VALUES('{name}','{lastname}', '{email}','{country}','{city}','{password}','{roll}')"
        myCursor.execute(query)
        mydb.commit()
        return redirect(url_for('index'))
    else:
        return "Bad request"

@app.route('/addProperty')
def addProperty():
    return render_template("addProperty.html")    

@app.route('/property',methods=["POST"])
def property():
    if request.method == "POST":
        cityP = request.form['cityP']
        countryP = request.form['countryP']
        adressP = request.form['adressP']
        ubication = request.form['ubication']
        roomNumber = request.form['roomNumber']
        imageP = request.form['imageP']
        priceDay = request.form['priceDay']
        Description = request.form['Description']
        query = f"INSERT INTO property (cityP, countryP, adressP, ubication, roomNumber, imageP, priceDay, Description ) VALUES('{cityP}','{countryP}','{adressP}','{ubication}',{roomNumber},'{imageP}',{priceDay},'{Description}')"
        myCursor.execute(query)
        mydb.commit()
        return redirect(url_for('index'))
    else:
        return "Bad request"

@app.route('/deleteP/<string:id>/')
def deleteP(id):
    query=f'DELETE FROM property WHERE idProperty = {id}'
    myCursor.execute(query)
    mydb.commit()
    return redirect(url_for('editProperty'))
    
@app.route('/editP/<id>')
def editP(id):
    query = f'SELECT * FROM property WHERE idProperty = {id}'
    myCursor.execute(query)
    result= myCursor.fetchall()
    return render_template("formEditP.html", property = result[0])
    
@app.route('/updateP/<id>', methods=['POST'])
def updateP(id):
    if request.method == "POST":
        cityP = request.form['cityP']
        countryP = request.form['countryP']
        adressP = request.form['adressP']
        ubication = request.form['ubication']
        roomNumber = request.form['roomNumber']
        imageP = request.form['imageP']
        priceDay = request.form['priceDay']
        Description = request.form['Description']
        query = f"UPDATE property SET cityP='{cityP}', countryP='{countryP}', adressP='{adressP}', ubication='{ubication}', roomNumber={roomNumber}, imageP='{imageP}', priceDay={priceDay}, Description='{Description}'  WHERE idProperty = {id}"
        myCursor.execute(query)
        mydb.commit()
        return redirect(url_for('editProperty'))

@app.route('/editProperty')
def editProperty():
    query = "SELECT * FROM property"
    myCursor.execute(query)
    result= myCursor.fetchall()
    return render_template("editProperty.html", propertyp = result)


if __name__ == '__main__':
    app.run(debug=True) #se genera el servidor