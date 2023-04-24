 const form = document.querySelector('form');
  const table = document.querySelector('table');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const nomeInput = document.querySelector('#nome');
    const telefoneInput = document.querySelector('#telefone');
    const nome = nomeInput.value;
    const telefone = telefoneInput.value;

    const NovaLinha = table.insertRow();
    const nomeCell = NovaLinha.insertCell(0);
    const telefoneCell = NovaLinha.insertCell(1);

    nomeCell.innerText = nome;
    telefoneCell.innerText = telefone;

    nomeInput.value = '';
    telefoneInput.value = '';
  });

