import { realizarSorteio } from "state/helpers";

describe("dado um sorteio de amigo secreto", () => {
  test("cada participante não sorteie o proprio nome", () => {
    const participante = ["Jorge", "Luiz", "Tanaka", "Alan", "Hugo", "Rennan"];

    const sorteio = realizarSorteio(participante);
    participante.forEach((participante) => {
      const amigoSecreto = sorteio.get(participante);
      expect(amigoSecreto).not.toEqual(participante);
    });
  });
});
