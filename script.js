const prompt = require("prompt-sync")();


function maior_menor() {

let array = [10,9,33,2,12,5,124];
let maior = 0;
let menor = 1000;

for (let i = 0; i < array.length; i++) {
    if (array[i] > maior) {
        maior = array[i];
    }
    if (array[i] < menor) {
        menor = array[i];
    }
}
alert(`O número menor é ${menor} \n O número maior é ${maior}` )
// console.log(`O número menor é ${menor} \n O número maior é ${maior}` )

}

function numero_faltando () {

/*para resolver essa questão precisei buscar uma fórmula matemática que localizasse o número faltando. 
a fórmula é esta:

Sn = n(n+1) / 2

EXPLICAÇÃO

"n" é o intervalo dos números -> [1,2,3,5,6,7,] -> 7
"S" é a soma desses números
logo "Sn" é a soma esperada -> 1 + 2 + 3 + 4 + 5 + 6 + 7 -> 28 (para não precisar somar tudo, basta usar a fórmula "Sn = n(n+1) / 2" )


Para concluir, basta subtrar ir soma esperada pela soma real
soma real -> [1,2,3,5,6,7] -> 24

28 - 24 -> 4 (número faltando)

*/

//declarando variáveis
let somaReal = 0; 
let array = [1,2,3,5,6,7,];

//ajustando tamanho da array
let tamanhoArray = array.length +1 

//formula "Sn = n(n+1) / 2"
let somaEsperada = tamanhoArray*(tamanhoArray + 1) / 2;


for (let i = 0; i < array.length; i++) {
somaReal += array[i];
}

let resultado = somaEsperada - somaReal
console.log(`O núemro faltando é ${resultado} ` );



}

function ordenarArray() {    


//entrada dos dados Array de objetos

const produtos = [
    { nome: "Produto A", preco: 10 },
    { nome: "Produto B", preco:  5 },
    { nome: "Produto C", preco: 15 },
    { nome: "Produto D", preco: 7 },
   ];
   
//declaração de variáveis
   let novaArray = []
   let guardaMenor = 0
   let menor = 10000   

//loop para varrer a array, comparando
for(let i in produtos) {
    for(let j in produtos) {
        
        //condicional que armazena o preço menor e impede que seja armazenado o mesmo valor novamente. 
        if(produtos[j].preco <= menor && produtos[j].preco > guardaMenor){                 
        menor = produtos[j].preco;
        guardaIndice = j; 

        }
    
    } 
    //após verificar qual valor menor, armazena em uma nova array. 
    novaArray.push(produtos[guardaIndice]);
    guardaMenor = menor;
    menor = 1000;


}
    return(novaArray)


}