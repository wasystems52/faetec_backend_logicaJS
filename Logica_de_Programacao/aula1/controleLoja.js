const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');

const rl = readline.createInterface({ input, output });

let subtotal = 0.0;
let desconto = 0.0;
let frete = 0.0;
let total = 0.0;

async function processarVenda() {
  let executando = true;

  while (executando) {
    console.log("\n--- SISTEMA DE LOJA - PROCESSAR VENDA ---");
    console.log("1 - Calcular subtotal (preço * qtd)");
    console.log("2 - Calcular desconto");
    console.log("3 - Calcular frete");
    console.log("4 - Calcular total");
    console.log("5 - Sair");

    const opcao = await rl.question("Escolha uma opção (1-5): ");

    switch (opcao.trim()) {
      case '1': {
        const precoInput = await rl.question("Digite o preço unitário: R$ ");
        const qtdInput = await rl.question("Digite a quantidade: ");
        
        const preco = parseFloat(precoInput);
        const qtd = parseInt(qtdInput);

        if (isNaN(preco) || isNaN(qtd)) {
          console.log("Valores inválidos! Tente novamente.");
        } else {
          subtotal = preco * qtd;
          console.log(`Subtotal: R$ ${subtotal.toFixed(2)}`);
        }
        break;
      }

      case '2': {
        if (subtotal === 0) {
          console.log("Aviso: Calcule o subtotal primeiro (Opção 1)!");
        } else {
          const tipoDesconto = await rl.question("Desconto em porcentagem (%) ou valor fixo (R$)? ");
          
          if (tipoDesconto.trim() === '%') {
            const pctInput = await rl.question("Digite a porcentagem (%): ");
            desconto = subtotal * (parseFloat(pctInput) / 100);
          } else {
            const valInput = await rl.question("Digite o valor em R$: ");
            desconto = parseFloat(valInput);
          }
          console.log(`Desconto aplicado: R$ ${desconto.toFixed(2)}`);
        }
        break;
      }

      case '3': {
        const freteInput = await rl.question("Digite o valor do frete: R$ ");
        frete = parseFloat(freteInput);
        console.log(`Frete: R$ ${frete.toFixed(2)}`);
        break;
      }

      case '4': {
        if (subtotal === 0) {
          console.log("Aviso: Calcule o subtotal primeiro (Opção 1)!");
        } else {
          total = subtotal - desconto + frete;
          console.log("\n==============================");
          console.log(`Subtotal : R$ ${subtotal.toFixed(2)}`);
          console.log(`Desconto : R$ ${desconto.toFixed(2)}`);
          console.log(`Frete    : R$ ${frete.toFixed(2)}`);
          console.log(`TOTAL    : R$ ${total.toFixed(2)}`);
          console.log("==============================");
        }
        break;
      }

      case '5': {
        console.log("Saindo do sistema... Venda finalizada!");
        executando = false;
        rl.close();
        break;
      }

      default:
        console.log("Opção inválida! Tente novamente.");
    }
  }
}

processarVenda();
