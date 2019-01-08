import pymysql

conn = pymysql.connect(host='127.0.0.1', port=3306, user='root', password='liyang5485589', database='learn', charset='utf8')

def query_all_user():
    sql_str = 'SELECT * FROM user'

    cursor = conn.cursor()
    cursor.execute(sql_str)

    rows = cursor.fetchall()
    
    cursor.close()
    conn.close()

    print(rows)

def insert_user(name, age, address):
    cursor = conn.cursor()
    
    try:
        sql_str = "INSERT INTO user(name, age, address) VALUE ('%s', %s, '%s')" % (name, age, address)
        print(sql_str)
        cursor.execute(sql_str)
        conn.commit()

        print(cursor.lastrowid)
    except:
        conn.rollback()
        print('Insert operation error.')
        raise
    finally:
        cursor.close()
        conn.close()

# insert_user('Iafine', 29, 'ShenZhen')
query_all_user()