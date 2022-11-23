import { useState } from "react";

import AviaoPapel from "image/aviao.png";
import Card from "components/Card";

import { useListaParticipantes } from "state/hook/useListaParticipantes";
import { useResultadoSorteio } from "state/hook/useResultadoSorteio";

import * as s from "./styled";
import Button from "components/Button";

const Sorteio = () => {
  const participantes = useListaParticipantes();

  const [participanteDaVez, setParticipanteDaVez] = useState("");
  const [amigoScreto, setAmigoSecreto] = useState("");

  const resultado = useResultadoSorteio();

  const sortear = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    if (resultado.has(participanteDaVez)) {
      setAmigoSecreto(resultado.get(participanteDaVez)!);
    }
  };

  return (
    <Card>
      <section>
        <h2>Quem vai tirar o papelzinho?</h2>
        <form onSubmit={sortear}>
          <s.Sorteio
            required
            name="participanteDavez"
            id="participanteDavez"
            placeholder="Selecione o seu nome"
            value={participanteDaVez}
            onChange={(evento) => setParticipanteDaVez(evento.target.value)}
          >
            <option>Selecione o seu nome</option>
            {participantes.map((participante) => (
              <option key={participante}>{participante}</option>
            ))}
          </s.Sorteio>
          <s.StyledP>
            Clique em sortear para ver quem é seu amigo secreto!
          </s.StyledP>
          <Button text="Sortear" />
        </form>
        {amigoScreto && <s.Resultado role="alert">{amigoScreto}</s.Resultado>}
        <s.SorteioFooter>
          <img src={AviaoPapel} alt="Um desenho de um avião de papel" />
        </s.SorteioFooter>
      </section>
    </Card>
  );
};

export default Sorteio;
