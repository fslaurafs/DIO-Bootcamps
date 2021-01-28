from zeep import Client

client = Client('http://soapclient.com/xml/soapresponder.wsdl')
# result = client.service.Method1(bstrParam1='oi', bstrParam2='tchau')
result = client.service.Method1('oi', 'tchau')
print(result)