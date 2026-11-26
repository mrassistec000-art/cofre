function gerarSenhaSegura() {
  const tamanho = parseInt(document.getElementById('tam-senha').value) || 12;
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*';
  let senha = '';
  const array = new Uint32Array(tamanho);
  window.crypto.getRandomValues(array);
  for (let i = 0; i < tamanho; i++) {
    senha += chars[array[i] % chars.length];
  }
  document.getElementById('resultado-gerador').textContent = 'Senha gerada: ' + senha;
}
