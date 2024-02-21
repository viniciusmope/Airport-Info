function mostrarHora() {
    var dataAtual = new Date();
    var horas = dataAtual.getHours();
    var minutos = dataAtual.getMinutes();
    var segundos = dataAtual.getSeconds();
  
    horas = formatarNumero(horas);
    minutos = formatarNumero(minutos);
    segundos = formatarNumero(segundos);
  
    document.getElementById('horaAtual').innerHTML = horas + ':' + minutos + ':' + segundos;
  }
  
  function formatarNumero(numero) {
    if (numero < 10) {
      return '0' + numero;
    }
    return numero;
  }
  

  setInterval(mostrarHora, 1000);
  
  mostrarHora();
  