

    console.log("Boas vindas ao jogo de Blackjack!")

    const jogo = confirm("Quer jogar?")
    
    
    if (jogo) {
    
       const carta_usuário1 = comprarCarta()
       const carta_usuário2 = comprarCarta()
       const carta_computador1 = comprarCarta()
       const carta_computador2 = comprarCarta()

       if (((carta_usuário1.valor && carta_usuário2.valor) == 11) || ((carta_computador1.valor && carta_computador2.valor) == 11)) {
         const carta_usuário1 = comprarCarta()
         const carta_usuário2 = comprarCarta()
         const carta_computador1 = comprarCarta()
         const carta_computador2 = comprarCarta()
       }
   confirm( `Suas cartas são ${carta_usuário1.texto} ${carta_usuário2.texto} . A carta revelada do computador é ${carta_computador1.texto}
Deseja comprar mais uma carta?`)
     
       

       const resultado_usuario = carta_usuário1.valor + carta_usuário2.valor
       const resultado_computador = carta_computador1.valor + carta_computador2.valor
    
       if(resultado_computador > resultado_usuario){
          console.log("O computador ganhou!")
       } else if ( resultado_usuario > resultado_computador){
          console.log("O usuário ganhou!")
       } else if ( resultado_computador == resultado_usuario){
          console.log("Empate!")
       }
      
       console.log(`"Usuário - cartas: ${carta_usuário1.texto} - ${carta_usuário2.texto}`)
       console.log(`"Computador - cartas: ${carta_computador1.texto} - ${carta_computador2.texto}`)
    
    } else {
       console.log("o jogo acabou!")
    }