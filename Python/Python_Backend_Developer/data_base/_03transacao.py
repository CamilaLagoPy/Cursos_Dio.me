import sqlite3
from pathlib import Path

ROOT_PATH = Path(__file__).parent

conexao =  sqlite3.connect(ROOT_PATH / 'firstbanc.db')
cursor = conexao.cursor()
cursor.row_factory = sqlite3.Row

try:
    cursor.execute('INSERT INTO clientes (nome, email) VALUES(?,?);', ('Teste3', 'teste4@example.com'))
    cursor.execute('INSERT INTO clientes (nome, email) VALUES(?,?);', (2,'Teste4', 'teste4@example.com'))
    conexao.commit()
except Exception as exc:
    print(f"Erro ao inserir registro: {exc}")
    conexao.rollback()
