from . import api
from flask import jsonify

@api.app_errorhandler(404)
def page_not_found(e):
    response = jsonify({
        'code': -100404,
        'error': 'page not found'
    })
    response.status_code = 404
    return response

@api.app_errorhandler(403)
def forbidden(e):
    response = jsonify({
        'code': -100403,
        'error': 'forbidden'
    })
    