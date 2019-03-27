# -*- coding: utf-8 -*-
"""
    :author: Iafine
    :url: https://blog.iafine.com
    :copyright: © 2019 iafine
    :license: MIT, see LICENSE for more details.
"""

try:
    from urlparse import urlparse, urljoin
except ImportError:
    from urllib.parse import urlparse, urljoin
from jinja2 import escape
from jinja2.utils import generate_lorem_ipsum
from flask import Flask, request, session, redirect, url_for, abort, make_response

app = Flask(__name__)
app.secret_key = 'secret string'

@app.route('/')
@app.route('/hello')
def hello():
    name = request.args.get('name')
    if name is None:
        name = request.cookies.get('name', 'Human')
    response = '<h1>Hello, %s!</h1>' % escape(name)

    if 'logged_in' in session:
        response += '[Authenticated]'
    else:
        response += '[Not Authenticated]'
    return response

@app.route('/hi')
def hi():
    return redirect(url_for('hello'))

@app.route('/goback/<int:year>')
def go_back(year):
    return 'Welcome to %d!' % (2019 - year)

@app.route('/colors/<any(blue, white, red):color>')
def three_color(color):
    return color

# 418
@app.route('/brew/<drink>')
def teapot(drink):
    if drink == 'coffee':
        abort(418)
    else:
        return 'A drop of tea'

# 404
@app.route('/404')
def not_found():
    abort(404)

# 返回不同的响应结果
@app.route('/note', defaults={'content_type': 'text'})
@app.route('/note/<content_type>')
def note(content_type):
    content_type = content_type.lower()
    if content_type == 'text':
        return 'text'
    else:
        return content_type

# cookie
@app.route('/set/<name>')
def set_cookie(name):
    response = make_response(redirect(url_for('hello')))
    response.set_cookie('name', name)
    return response

# login
@app.route('/login')
def login():
    session['logged_in'] = True
    return redirect(url_for('hello'))

# logout
@app.route('/logout')
def logout():
    if 'logged_in' in session:
        session.pop('logged_in')
    return redirect(url_for('hello'))

# admin
@app.route('/admin')
def admin():
    if 'logged_in' not in session:
        abort(403)
    return 'Welcome to admin page.'

# Ajax
@app.route('/post')
def show_post():
    post_body = generate_lorem_ipsum(n=2)
    return '''
            <h1>A very long post</h1>
            <div class="body">%s</div>
            <button id="load">Load More</button>
            <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
            <script type="text/javascript">
            $(function() {
                $('#load').click(function() {
                    $.ajax({
                        url: '/more',
                        type: 'get',
                        success: function(data){
                            $('.body').append(data);
                        }
                    })
                })
            })
            </script>
            ''' % post_body

@app.route('/more')
def load_post():
    return generate_lorem_ipsum(n=1)
    
@app.route('/foo')
def foo():
    return '<h1>Foo page</h1><a href="%s">点击跳转</a>' % url_for('do_something', next=request.full_path)

@app.route('/bar')
def bar():
    return '<h1>Bar page</h1><a href="%s">点击跳转</a>' % url_for('do_something', next=request.full_path)


@app.route('/do-something')
def do_something():
    return redirect_back() 


def is_safe_url(target):
    ref_url = urlparse(request.host_url)
    test_url = urlparse(urljoin(request.host_url, target))
    return test_url.scheme in ('http', 'https') and \
           ref_url.netloc == test_url.netloc

def redirect_back(default='hello', **kwargs):
    for target in request.args.get('next'), request.referrer:
        if not target:
            continue
        if is_safe_url(target):
            return redirect(target)
    return redirect(url_for(default, **kwargs))


if __name__ == "__main__":
    app.run(debug=True)