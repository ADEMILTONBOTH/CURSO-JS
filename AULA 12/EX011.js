var idade = 22
console.log(`voce tem ${idade} anos`)
if (idade < 16){
  console.log('Não vota')
} else if (idade <18 || idade > 65){
        console.log('Voto opicional')
} else {
    console.log('Voto Obrigatorio')
}
