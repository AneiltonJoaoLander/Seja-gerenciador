const btn = document.getElementById("add");
const pago = []
const em_aberto = [] 

btn.addEventListener("click", () => {
  const input1 = document.querySelector("#nome");
  const input2 = document.querySelector("#preco");
  const input4 = document.querySelector("#data");
  const input3 = document.getElementById("tipo");
  const pagamento = input4.value;
  const tipo = input3.value;
  const nome = input1.value;
  const preco = input2.value;
  const data = new Date();
  const dia = data.getDate();
  const me = data.getMonth();
  const mes = me + 1
  const ano = data.getFullYear();

  if(tipo == 0) {
    var novoTipo = "Pago"
  } else {
    var novoTipo = "Em aberto"
  }

  const lista = {
    Nome: nome,
    Preço: preco,
    Data: `DE ${dia}/${mes}/${ano} ATÉ ${pagamento}`,
    Tipo: novoTipo
  };

  if(tipo == 0) {
    pago.push(lista)
  } else {
    em_aberto.push(lista)
  }

  console.log(lista);
  console.log(pago);
  console.log(em_aberto);
});
