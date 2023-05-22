from random import randrange as rand

from .quicksort import quicksort


def main():
    values = [rand(100) for _ in range(8)]
    print(f'Original: {values}')

    sorted_values = quicksort(values)
    print(f'Ordenado: {sorted_values}')


main()
