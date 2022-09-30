 

const a: number = 6
const b: number = 8
const c: number = 8

function checaTriangulo(a: number, b: number, c: number) : string {
    if (a !== b && b !== c) {
      return "Escaleno";
    } else if (a === b && b === c) {
      return "Equilátero";
    } else {
      return "Isósceles";
    }
  }

  console.log(checaTriangulo(a,b,c))
  /*-----------------------------------------------------------------*/

  