from features import *

def main():
        menu()
        opcao = input("Digite a opcao da figura geometrica que deseja calcular a area: ")
        
        a1 = 0 #area1
        a2 = 0 #area2
        
        contador  = 0
        while contador < 2: #para pedir duas vezes
            opcao = input("Digite a opcao da figura geometrica que deseja calcular a area: ")
            
            if opcao ==  'q' or opcao == 'Q':
                area_quadrado()

            elif opcao == 'r' or opcao == 'R':
                area_retangulo()
                
            elif opcao == 't' or opcao == 'T':
                area_triangulo()
                    
            elif opcao == 'z' or opcao == 'Z':
                area_trapezio()
                
            elif opcao == 'c' or opcao == 'C':
                area_circulo()
            else:
                print("Opcao invalida!")
                
            contador += 1   
            menu()     
        press_enter_to_continue()










main()