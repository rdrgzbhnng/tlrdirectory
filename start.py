from flask import Flask

app = Flask ( __name__ )

@app.route ( "/" )
def index( ):
  return "Home page"

@app.route('/results/<int:post_id>')
def results(post_id):
    return f'Post {post_id}'
