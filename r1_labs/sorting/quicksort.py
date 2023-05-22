def quicksort(values: list[int]):
    if len(values) < 2:
        return values

    pivot = values[0]  # melhorar pivot
    left = [i for i in values[1:] if i < pivot]
    right = [i for i in values[1:] if i >= pivot]

    return quicksort(left) + [pivot] + quicksort(right)
