import sqlite3
from pathlib import Path

ROOT_PATH = Path(__file__).parent

conexao =  sqlite3.connect(ROOT_PATH / 'firstbanc.db')
cursor = conexao.cursor()
cursor.row_factory = sqlite3.Row

#Boas práticas de programação: Evitar SQL Injection.
id_cliente = input('Digite o id do cliente que deseja buscar: ')
cursor.execute('SELECT * FROM clientes WHERE id = ?;', (id_cliente,))

#Forma incorreta de fazer a consulta, vulnerável a SQL Injection
#id_cliente = input('Digite o id do cliente que deseja buscar: ')
#cursor.execute(f'SELECT * FROM clientes WHERE id = {id_cliente};')


cliente = cursor.fetchall()

for cliente in cliente:
    print(dict(cliente))
    