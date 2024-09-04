function fibonacci(num) {
    let fibSeq = [0, 1]; // Inicializando a sequência com os dois primeiros números

    while (true) {
        let next = fibSeq[fibSeq.length - 1] + fibSeq[fibSeq.length - 2];
        if (next > num) {
            break; // Interrompe o loop se o próximo número na sequência for maior que 'num'
        }
        fibSeq.push(next);
    }

    return fibSeq;
}

// Função para verificar se um número pertence à sequência de Fibonacci
function isFibonacci(num) {
    let fibSeq = fibonacci(num); // Gera a sequência até 'num'
    if (fibSeq.includes(num)) {
        console.log(`O numero ${num} pertence à sequência de Fibonacci.`);
    } else {
        console.log(`O numero ${num} NÃO pertence à sequência de Fibonacci.`);
    }
}


// Chama a função passando o número informado
isFibonacci(21);