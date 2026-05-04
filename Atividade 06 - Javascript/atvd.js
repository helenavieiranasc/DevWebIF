class Aluno {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
}

let alunos = [];

function adicionarAluno() {
  let nome = prompt("Nome do aluno:");
  if (!nome) return alert("Nome inválido!");

  if (alunos.find(a => a.nome.toLowerCase() === nome.toLowerCase()))
    return alert("Já existe um aluno com esse nome!");

  let idade = Number(prompt("Idade do aluno:"));
  if (isNaN(idade) || idade < 1 || idade > 120)
    return alert("Idade inválida!");

  alunos.push(new Aluno(nome, idade));
  alert("Aluno adicionado com sucesso!");
}

function listarAlunos() {
  if (alunos.length === 0) return alert("Nenhum aluno cadastrado.");

  let lista = alunos.map((a, i) => `${i + 1}. ${a.nome} - ${a.idade} anos`).join("\n");
  alert("Lista de alunos:\n\n" + lista);
}

function buscarAluno() {
  let nome = prompt("Nome do aluno a buscar:");
  let aluno = alunos.find(a => a.nome.toLowerCase() === nome.toLowerCase());

  if (aluno) alert(`Aluno encontrado: ${aluno.nome} - ${aluno.idade} anos`);
  else alert("Aluno não encontrado.");
}

function alterarAluno() {
  let nome = prompt("Nome do aluno a alterar:");
  let aluno = alunos.find(a => a.nome.toLowerCase() === nome.toLowerCase());
  if (!aluno) return alert("Aluno não encontrado!");

  let novoNome = prompt("Novo nome (deixe vazio pra manter):", aluno.nome);
  if (novoNome && novoNome.toLowerCase() !== aluno.nome.toLowerCase()) {
    if (alunos.find(a => a.nome.toLowerCase() === novoNome.toLowerCase()))
      return alert("Já existe um aluno com esse nome!");
    aluno.nome = novoNome;
  }

  let novaIdade = Number(prompt("Nova idade:", aluno.idade));
  if (isNaN(novaIdade) || novaIdade < 1 || novaIdade > 120)
    return alert("Idade inválida!");

  aluno.idade = novaIdade;
  alert("Aluno alterado com sucesso!");
}

function removerAluno() {
  let nome = prompt("Nome do aluno a remover:");
  let index = alunos.findIndex(a => a.nome.toLowerCase() === nome.toLowerCase());
  if (index === -1) return alert("Aluno não encontrado!");

  alunos.splice(index, 1);
  alert("Aluno removido com sucesso!");
}

function menu() {
  let opcao;
  do {
    opcao = prompt(
      "--- GERENCIAR ALUNOS ---\n" +
      "1 - Adicionar aluno\n" +
      "2 - Listar alunos\n" +
      "3 - Buscar aluno\n" +
      "4 - Alterar aluno\n" +
      "5 - Remover aluno\n" +
      "0 - Sair\n\n" +
      "Escolha uma opção:"
    );

    if (opcao === "1") adicionarAluno();
    else if (opcao === "2") listarAlunos();
    else if (opcao === "3") buscarAluno();
    else if (opcao === "4") alterarAluno();
    else if (opcao === "5") removerAluno();
    else if (opcao !== "0") alert("Opção inválida!");

  } while (opcao !== "0");
}

menu();