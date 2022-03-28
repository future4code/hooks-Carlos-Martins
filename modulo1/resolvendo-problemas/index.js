function selecionarPessoas (pessoas) {

    const anoCorrente = new Date().getFullYear()

   return  pessoas.filter(pessoa => { 
       return (

       pessoa.nacionalidade === "brasileira" &&
       !pessoa.tomouVacina &&
       anoCorrente - pessoa.anoDoNascimento >= 60
       )
 })
}



const pessoasBananinhaCity = [
    {
        "nome": "Benevides Castro",
        "anoDoNascimento": 1950,
        "nacionalidade": "brasileira",
        "tomouVacina": false
    },
    {
        "nome": "Clara Ruiz",
        "anoDoNascimento": 1993,
        "nacionalidade": "colombiana",
        "tomouVacina": true
    },
    {
        "nome": "Maria Aparecida da Luz",
        "anoDoNascimento": 1961,
        "nacionalidade": "brasileira",
        "tomouVacina": false
    }
    
]

console.log(selecionarPessoas(pessoasBananinhaCity))
