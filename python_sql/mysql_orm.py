from sqlalchemy import create_engine

engine = create_engine('mysql+pymysql://root:liyang5485589@127.0.0.1:3306/learn')

cursor = engine.execute('SELECT * FROM user')
rows = cursor.fetchall()
print(rows)