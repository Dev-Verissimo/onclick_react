export default function App() {
  function selecionarOpcao(escolha) {
    if (escolha === "bolacha" || escolha === "nescau") {
      alert("Você escolheu erradamente");
    } else if (escolha === "biscoito" || escolha === "toddy") {
      alert("Você escolheu sabiamente");
    }
  }

  return (
    <>
      <div class="grupo">
        <h1>Escolha a opção correta</h1>
        <button onClick={() => selecionarOpcao("bolacha")}>Bolacha</button>
        <button onClick={() => selecionarOpcao("biscoito")}>Biscoito</button>
      </div>

      <div class="grupo">
        <h1>Escolha a opção correta</h1>
        <button onClick={() => selecionarOpcao("toddy")}>Toddy</button>
        <button onClick={() => selecionarOpcao("nescau")}>Nescau</button>
      </div>
    </>
  );
}
