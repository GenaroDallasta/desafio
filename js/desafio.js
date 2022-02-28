let metodoDePago = prompt("Indicá tu metodo de pago");
let precio = 100;
let cuotas;

while (metodoDePago != "") {
  switch (metodoDePago.toUpperCase()) {
    case "TARJETA DE CREDITO":
      alert("Tenés 1, 3 y 6 cuotas sin interes");
      cuotas = prompt("¿Cuantas cuotas querés?");
      if (cuotas == 1) {
        alert("El valor de la cuota es " + precio);
        alert("Pago completado");
      } else if (cuotas == 3) {
        alert("El valor de las cuotas es " + precio / 3);
        alert("Pago completado");
      } else if (cuotas == 6) {
        alert("El valor de las cuotas es " + precio / 6);
        alert("Pago completado");
      } else {
        alert("No se pudo completar el pago");
      }
      break;
    case "CREDITO":
      alert("Tenés 1, 3 y 6 cuotas sin interes");
      cuotas = prompt("¿Cuantas cuotas querés?");
      if (cuotas == 1) {
        alert("El valor de la cuota es " + precio);
        alert("Pago completado");
      } else if (cuotas == 3) {
        alert("El valor de las cuotas es " + precio / 3);
        alert("Pago completado");
      } else if (cuotas == 6) {
        alert("El valor de las cuotas es " + precio / 6);
        alert("Pago completado");
      } else {
        alert("No se pudo completar el pago");
      }
      break;
    case "TARJETA DE DEBITO":
      alert("Lo podes hacer en una sola cuota");
      break;
    case "DEBITO":
      alert("Lo podes hacer en una sola cuota");
      break;
    case "EFECTIVO":
      alert("Tenés un 10% de descuento");
      alert("El valor final es " + (precio * 90) / 100);
  }
}
