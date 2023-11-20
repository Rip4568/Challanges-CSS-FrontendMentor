function NumeroPrimo(numero) {
  let contador = 0;
  for (let i = 1; i <= numero; i++) {
    if (numero % i == 0) {
      contador++;
      if (contador == 2) {
        return true;
      }
    }
  }
  return false;
}
