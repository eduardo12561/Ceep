(() => {
  const criarTarefa = (evento) => {
    evento.preventDefault();

    const lista = document.querySelector("[data-list]");
    const input = document.querySelector("[data-form-input]");
    const valor = input.value;

    const calendario = document.querySelector('[data-form-date]')
    const data = moment(calendario.value)
    console.log(data.format('DD/MM/YYYY'))

    const tarefa = document.createElement("li");
    tarefa.classList.add("task");

    const conteudo = `<p class="content">${valor}</p>`;

    tarefa.innerHTML = conteudo;
    tarefa.appendChild(BotaoConlui());
    tarefa.appendChild(BotaoDeleta());

    if(input.value === '') {
      window.alert('Por favor, insira um dado na lista')
    } else {
      lista.appendChild(tarefa);
    }
    input.value = "";
  };

  const novaTarefa = document.querySelector("[data-form-button]");

  novaTarefa.addEventListener("click", criarTarefa);

  const BotaoConlui = () => {
    const botaoConclui = document.createElement("button");

    botaoConclui.classList.add("check-button");
    botaoConclui.innerText = "concluir";

    botaoConclui.addEventListener("click", concluirTarefa);

    return botaoConclui;
  };

  const concluirTarefa = (evento) => {
    const botaoConclui = evento.target;

    const tarefaCompleta = botaoConclui.parentElement;

    tarefaCompleta.classList.toggle("done");
  };

  const BotaoDeleta = () => {
    const botaoDeleta = document.createElement("button");
    botaoDeleta.innerText = "deletar";
    botaoDeleta.addEventListener("click", deletarTarefa);

    return botaoDeleta;
  };

  const deletarTarefa = (evento) => {
    const botaoDeleta = evento.target;
    botaoDeleta.classList.add("remove-button");
    const tarefaCompleta = botaoDeleta.parentElement;

    tarefaCompleta.remove();

    return botaoDeleta;
  };
})();
