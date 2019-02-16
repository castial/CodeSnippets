# -*- coding: utf-8 -*-
"""
    :author: Iafine
    :url: https://blog.iafine.com
    :copyright: © 2019 iafine
    :license: MIT, see LICENSE for more details.
"""

from flask import Flask

app = Flask(__name__)

@app.route('/')
def index():
    return '<h1>This is index page.</h1>'

@app.route('/hi')
@app.route('/hello')
def say_hello():
    return '<h1>Hello World!</h1>'

@app.route('/greet', defaults={'name': 'Programmer'})
@app.route('/greet/<name>')
def greet(name):
    return '<h1>Hello, %s!</h1>' % name

if __name__ == "__main__":
    app.run(debug=True)