def main():
    num1, num2 = input().split()

    while num1 != '0' or num2 != '0':
        count = count_carry(num1, num2)

        result = 'No carry operation.' if count == 0 \
            else f'{count} carry operations.' if count > 1 \
            else f'{count} carry operation.'

        print(result)

        num1, num2 = input().split()


def count_carry(n1: str, n2: str):
    carry = 0
    count_carry = 0

    for d1, d2 in zip(n1.rjust(9, '0')[::-1], n2.rjust(9, '0')[::-1]):
        if int(d1) + int(d2) + carry > 9:
            carry = 1
            count_carry += 1
        else:
            carry = 0

    return count_carry


main()
