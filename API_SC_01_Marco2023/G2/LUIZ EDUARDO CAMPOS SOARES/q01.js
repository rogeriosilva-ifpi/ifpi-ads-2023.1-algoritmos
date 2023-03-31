import { question } from "readline-sync";

function main() {
    const valorBase = question("Valor base h/a: ") * 1;
    const nomeProfessor = question("Nome: ");
    const horasSemanais = question("Horas Semanais: ") * 1;
    const qualificacao = question("E - Especialista, M - Mestre, D - Doutor: ");
    const experiencia = question("Meses de experiencia: ") * 1;
    const filhos = question("Filhos 6- anos: ") * 1;
    const valorPlanoSaude = question("Valor do Plano: ") * 1;


    //const valorBase = 100;
    //const nomeProfessor = "Luiz Eduardo";
    //const horasSemanais = 10;
    //const qualificacao = "D";
    //const experiencia = 120;
    //const filhos = 2;
    //const valorPlanoSaude = 400;


    const valorHoraMaisBonus = valorBase * (
        qualificacao == "E" ? 1.2 :
        qualificacao == "M" ? 1.3 :
        qualificacao == "D" ? 1.4 : 1
    );
    const multiplicadorExperiencia = ((Math.floor(experiencia / 12) + (experiencia % 12 > 6 ? 1 : 0)) * 0.05) + 1;
    const valorComExperiencia = valorHoraMaisBonus * multiplicadorExperiencia;
    const salarioBaseSemanal = valorComExperiencia * horasSemanais;
    const salarioBaseMensal = salarioBaseSemanal * 4.5;
    const auxilioCreche = 700 * filhos;
    const ressarcimentoSaude = (valorPlanoSaude * 0.5) > 500 ? 500 : (valorPlanoSaude * 0.5);
    const auxilioCombustivel = Math.floor(horasSemanais / 8) * 30;
    const salarioBruto = salarioBaseMensal + auxilioCreche + ressarcimentoSaude + auxilioCombustivel;

    const fatorPrevidencia = (
        salarioBaseMensal <= 1302 ? 0.075 :
        salarioBaseMensal > 1302 && salarioBaseMensal <= 2500 ? 0.09 :
        salarioBaseMensal > 2500 && salarioBaseMensal <= 3900 ? 0.12 :
        salarioBaseMensal > 3900 && salarioBaseMensal <= 7500 ? 0.14 :
        salarioBaseMensal > 7500 ? 0.16 : 0.0
    );
    const valorPrevidencia = salarioBaseMensal * fatorPrevidencia;

    const fatorIR = salarioBaseMensal > 5000 ? 0.27 : 0;
    const valorIr = (salarioBaseMensal - 5000) * fatorIR;

    console.log("\n\n==============================================");
    console.log(`Professor ${nomeProfessor}`);
    console.log(`Valor Hora/Aula: R$ ${valorComExperiencia}`);
    console.log(`Salario Base Semanal: R$ ${salarioBaseSemanal}`);
    console.log(`Salario Base Mensal: R$ ${salarioBaseMensal}`);
    console.log(`Auxílio Creche: R$ ${auxilioCreche}`);
    console.log(`Ressarcimento Saúde: R$ ${ressarcimentoSaude}`);
    console.log(`Auxílio Combustível: R$ ${auxilioCombustivel}`);
    console.log(`Salário Bruto é: R$ ${salarioBruto}`);
    console.log(`Desconto da Previdência: R$ ${valorPrevidencia} (${fatorPrevidencia * 100}%)`);
    console.log(`Valor do IR: R$ ${valorIr} (${fatorIR * 100}%)`)
    console.log(`Total impostos: R$ ${valorIr + valorPrevidencia} (${(fatorPrevidencia + fatorIR)*100}%)`)
    console.log(`Salário líquido: ${salarioBruto - valorIr - valorPrevidencia}`);

}

main();