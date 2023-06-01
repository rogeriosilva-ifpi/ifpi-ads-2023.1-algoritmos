# QUESTAO: https://olimpiada.ic.unicamp.br/pratique/ps/2021/f1/zero/
def main():
    count = int(input())
    numbers = []

    for i in range(count):
        number = int(input())
        if (number != 0):
            numbers.append(number)
        else:
            numbers.pop()

    print(sum(numbers))


# python zero_cancelar.py < zero_cancelar.txt
main()
