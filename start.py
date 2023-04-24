from flask import Flask
from flask import render_template

app = Flask ( __name__ )

@app.route ( "/" )
def index(name=None):
  return render_template('home.html', name=name)

@app.route('/results/<int:post_id>')
def results(post_id):
    return f'Post {post_id}'
