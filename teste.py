print("Olá mundo")

#processamento - função
def maior(num1, num2):
    if num1 > num2:
        return num1
    else:
        return num2

#variáveis - Entrada
num1 = int(input("Digite o primeiro número: "))
num2 = int(input("Digite o segundo número: "))

#print - Sáida - Imprima
print("Você digitou o número ",num1," e ", num2)

resultado = maior(num1, num2)
print("O maior número é: ", resultado)