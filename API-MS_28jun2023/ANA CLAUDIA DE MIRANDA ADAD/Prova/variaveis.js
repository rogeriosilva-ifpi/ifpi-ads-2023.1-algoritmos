import { question } from "readline-sync";

function main(){

    const pessoas = ler_arquivo(" ./pessoas.txt", 'pessoas')
    console.log ('pessoas')
    const nome = question("Digite um nome: ")
    const idade= Number(question("Digite sua idade: "))
    const media_semestral_aluno = Number(question("Digite a nota semestral: "))
    const pessoa = nova_pessoa(nome, idade, media_semestral_aluno)
    pessoas.append(pessoas)
    escrever_em_arquivo("./pessoas.txt", pessoas, "pessoas")

}

function ler_arquivo(caminho_arquivo, tipo){
    File = open(caminho_arquivo, encoding= "UTf - 8", mode= 'r')
    linhas_arquivo = File.readlines()

    while (tipo == 'pessoas'){
        pessoas = []
    }if (linha in linhas_arquivo){
    linha = linha.strip()
    atributos = linha.strip(":")
    nome = atributos[0]
    idade = atributos[1]
    media_semestral_aluno = atributos[2]
    pessoa = nova_pessoa(nome, idade, media_semestral_aluno)
    pessoas.append(pessoa)
    return pessoas
    }else{
        print('Pessoa não encontrada')
    }
}

function escrever_em_arquivo(caminho_arquivo, contnt, tipo){
    File = open(caminho_arquivo, encoding= "utf-8", mode= 'r')
    while(tipo == 'pessoas'){
        lines = ""

    }if(pessoa in contnt){
        lines += (f`${pessoa} "nome", ${idade} "idade", ${media_semestral_aluno} "media semestral"`)
    }else{
        print('Pessoa não identificada')
    }

}

function nova_pessoa(nome, idade, media_semestral_aluno){
     pessoa = {

     }
}


main()
