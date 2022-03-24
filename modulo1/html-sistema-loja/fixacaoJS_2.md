```
function calculaPrecoTotal(quantidade) {
  resultado = 0
  if(quantidade<12){
    resultado =  quantidade*1.3
  } else if(quantidade>=12){
    resultado = quantidade*1.0
  }
   return resultado
}

```