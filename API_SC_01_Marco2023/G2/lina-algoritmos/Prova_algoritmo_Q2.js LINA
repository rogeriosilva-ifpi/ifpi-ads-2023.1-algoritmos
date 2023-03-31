import { question } from "readline-sync";
 
//Entrada 
 
     const nome = question ("Digite seu nome : ") 
     console.log (`Olá, ${nome}`)
     const per_tab_FIPE = Number(question("Digite o percentual que Argo sera vendido: "))
     const qnt_m_parcelas = Number(question("Digite quantos meses que deseja parcelar: "))
     const taxa_juros = Number(question("Digite taxa de juro: "))
     const taxa_juros_adm = Number(question("Digite taxa de administração consórsio: "))
 
//processamento 

    const Entrada = (89.000 - per_tab_FIPE)
    const Resto   = ( Entrada - 185.000)
    const parcela = ( Resto/qnt_m_parcelas)
    const juros   = ( parcela * taxa_juros )

//resultado 
 
   console.log (`Sr(a) ${nome}`)
   console.log (`Valor Bem ${Resto} R$` )
   console.log (`Valor total a pagar ${Entrada+Resto+parcela+juros}`)