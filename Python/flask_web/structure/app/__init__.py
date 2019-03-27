from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from config import config
from .api_1_0 import api as api_1_0_blueprint
from flask_session import Session

# db = SQLAlchemy()

# session = Session()

def create_app(config_name):
    app = Flask(__name__)
    app.config.from_object(config[config_name])
    config[config_name].init_app(app)

    # db初始化
    # db.init_app(app)

    # session初始化
    # session.init_app(app)

    # 注册蓝本
    app.register_blueprint(api_1_0_blueprint, url_prefix='api/v1')
    
    return app

