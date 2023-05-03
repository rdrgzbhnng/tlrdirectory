from flask import Flask
from flask import render_template

app = Flask ( __name__ )

@app.route ( "/" )
def index(name=None):
  return render_template('home.html', name=name)

@app.route ( "/companyprofile" )
def companyprofile(name=None):
  return render_template('companyprofile.html', name=name)

@app.route ( "/warehouses" )
def warehouses(name=None):
  return render_template('warehouses.html', name=name)

@app.route ( "/frbrcompanies" )
def frbrcompanies(name=None):
  return render_template('frbrcompanies.html', name=name)

@app.route ( "/spanishcontacts" )
def spanishcontacts(name=None):
  return render_template('spanishcontacts.html', name=name)

@app.route ( "/frbrwarehouses" )
def frbrwarehouses(name=None):
  return render_template('frbrwarehouses.html', name=name)

@app.route ( "/fr33spanishcontacts" )
def fr33spanishcontacts(name=None):
  return render_template('fr33spanishcontacts.html', name=name)

@app.route ( "/warehousesspanishcontacts" )
def warehousesspanishcontacts(name=None):
  return render_template('warehousesspanishcontacts.html', name=name)

@app.route ( "/frbrwarehousesspanishcontacts" )
def frbrwarehousesspanishcontacts(name=None):
  return render_template('frbrwarehousesspanishcontacts.html', name=name)

@app.route ( "/moreInformation" )
def moreInformation(name=None):
  return render_template('moreInformation.html', name=name)

@app.route('/results/<int:post_id>')
def results(post_id):
    return f'Post {post_id}'


