from unittest import TestCase


def eh_letra(caractere):
    if len(caractere) > 1:
        return False
    codigo = ord(caractere)
    return (codigo >= 65 and codigo <= 90) or (codigo >= 97 and codigo <= 122)


class StringUtilsTestCase(TestCase):

    def test_verificar_se_eh_letra_maiuscula(self):
        self.assertEqual(eh_letra('Z'), True)
    
    def test_deve_retornar_false_se_numero(self):
        self.assertEqual(eh_letra('1'), False)
        self.assertEqual(eh_letra('0'), False)
    
    def test_nao_deve_retornar_true_se_texto_maior_que_1(self):
        self.assertEqual(eh_letra('Rogerio'), False)

# 'A' --> True
# '1' --> False
# 'BOLA' --> False
# '' --> False
# 'Z' --> True