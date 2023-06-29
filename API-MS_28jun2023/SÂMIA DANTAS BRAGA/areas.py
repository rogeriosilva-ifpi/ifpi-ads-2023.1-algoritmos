from areas_utils import menu, obter_string, calcular_area, maior_area, tipo_figura
def main():

        menu()
        figura1 = obter_string(f'\nInforme o tipo da figura 1: ')
        figura2 = obter_string(f'\nInforme o tipo da figura 2: ')

    
            
        print(f'\n# O nome da figura 1 é: {tipo_figura(figura1)}')
        area_figura1 = calcular_area(figura1)
        print(f'>>> Sua área é: {area_figura1:.1f}')
    
        print(f'\n# O nome da figura 2 é: {tipo_figura(figura2)}')
        area_figura2 = calcular_area(figura2)
        print(f'>>> Sua área é: {area_figura2:.1f}')

        fig_maior_area = maior_area(area_figura1, area_figura2)

        if fig_maior_area == area_figura1:
            print(f'\nA figura com maior área é {tipo_figura(figura1)}')
        else:
            print(f'\n>>>> A figura com maior área é o {tipo_figura(figura2)}')

        if fig_maior_area == area_figura1:
            proporção = (area_figura2 * 100) / fig_maior_area
            print(f'\n>> O {tipo_figura(figura2)} tem {proporção}% da área do {tipo_figura(figura1)}.<<')
        else:
            proporção = (area_figura1 * 100) / fig_maior_area
            print(f'\n>> O {tipo_figura(figura1)} tem {proporção}% da área do {tipo_figura(figura2)}.<<')

main()