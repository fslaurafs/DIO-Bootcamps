import requests

def consulta():
    response = requests.get('url')
    print(response.status_code)
    print(response.json())

    # lista interada no for
    for pessoa in response.json():
        print(pessoa['id'], pessoa['nome'], pessoa['idade'])
    
def insere():
    nome = 'Rafael'
    idade = 31
    pessoa = {"nome": nome, "idade": idade}
    response = requests.post('url', json=pessoa)
    print(response.status_code)
    print(response.json())

#consulta()
#insere()
#consulta()
