import sqlite3
from pathlib import Path

ROOT_PATH = Path(__file__).parent

conexao =  sqlite3.connect(ROOT_PATH / 'firstbanc.db')
cursor = conexao.cursor()

def criar_tabela(cursos):
    cursor.execute('CREATE TABLE clientes(id INTEGER PRIMARY KEY AUTOINCREMENT, nome VARCHAR(100), email VARCHAR(100))')

def inserir_registro(conexao,cursor,nome,email):
    data = (nome,email)
    cursor.execute('INSERT INTO clientes (nome, email) VALUES(?,?);', data)
    conexao.commit()

def atualizar_registro(conexao,cursor,nome,email, id):
    data = (nome,email, id)
    cursor.execute('UPDATE clientes SET nome = ?, email = ? WHERE id = ?;', data)
    conexao.commit()

#atualizar_registro(conexao, cursor, 'Maite Lago', 'maite.lago@example.com', 3)

def excluir_registro(conexao,cursor, id):
    data = (id,)
    cursor.execute('DELETE FROM clientes WHERE id = ?;', data)
    conexao.commit()
#excluir_registro(conexao, cursor, 3)

def inserir_muitos(conexao, cursor, dados):
    cursor.executemany('INSERT INTO clientes (nome, email) VALUES(?,?);', dados)
    conexao.commit()
   
#dados = [
#    ('Maite Lago', 'maite.lago@example.com'),
#    ('Afonso Silva', 'afonso.silva@example.com'),
#    ('Marli Rodrigues', 'marli.rodrigues@example.com'),
#    ('Karina Balieiro', 'karina.balieiro@example.com'),
#] 
#inserir_muitos(conexao, cursor, dados)

def recuperar_cliente( cursor, id):
    cursor.row_factory = sqlite3.Row
    cursor.execute('SELECT * FROM clientes WHERE id = ?;', (id,))
    return cursor.fetchone()

def listar_clientes(cursor):
   return cursor.execute('SELECT * FROM clientes;')     

clientes = listar_clientes(cursor)
for cliente in clientes:
    print(cliente)

cliente = recuperar_cliente(cursor, 2)
print(dict(cliente))