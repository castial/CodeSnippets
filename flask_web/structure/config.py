# 通用配置
class Config:
    SECRET_KEY = 'F5MgeYenAUQh7T6TdV1X/fwulCdtRMurfA9p0Lcg4dA='
    SQLALCHEMY_COMMIT_ON_TEARDOWN = True

    # SESSION_TYPE = 'redis'
    # SESSION_USE_SIGNER = True   # 混淆Session
    # SESSION_PERMANENT = False  # session是否长期有效
    # PERMANENT_SESSION_LIFETIME = 3600   # session有效时间


    @staticmethod
    def init_app(app):
        pass

# 开发环境配置
class DevelopmentConfig(Config):
    DEBUG = True
    SQLALCHEMY_DATABASE_URI = 'mysql://root:liyang5485589@127.0.0.1:3306/blog'

    # SESSION_REDIS = Redis()

# 测试环境配置
class TestingConfig(Config):
    TESTING = True
    SQLALCHEMY_DATABASE_URI = ''

# 生产环境配置
class ProductionConfig(Config):
    SQLALCHEMY_DATABASE_URI = ''

config = {
    'development': DevelopmentConfig,
    'testing': TestingConfig,
    'production': ProductionConfig,
    'default': DevelopmentConfig
}