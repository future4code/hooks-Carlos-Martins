```
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  let contador = 0
  for(numero of arrayDeNumeros){
		if(numeroEscolhido === numero){
			contador ++ 
	} if( contador === 0) {
	  console.log(" Número não encontrado")
	} 
    console.log(`O número ${numeroEscolhido} aparece ${contador}`)
}
}

```