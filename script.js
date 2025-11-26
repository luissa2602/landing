// script.js — você pode adicionar interações futuras aqui
document.addEventListener('DOMContentLoaded', () => {
  // Exemplo: quando clicar no botão de pedido, mostrar alerta ou redirecionar
  const orderBtn = document.getElementById('order_button');
  if (orderBtn) {
    orderBtn.addEventListener('click', () => {
      alert('Obrigado! Em breve entraremos em contato para seu pedido.');
    });
  }

  // Aqui você pode adicionar outras funcionalidades JS que desejar
});
