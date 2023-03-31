let n=0
let max=1000
let impas = 0

for(let i=n;i<max;i++){
    if(i%2!==0){
        continue
    }
    impas++
}
console.log('Quantidade de impas: ' + impas)
console.log('Fim do programa')