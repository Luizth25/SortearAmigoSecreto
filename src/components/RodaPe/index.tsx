import { useNavigate } from "react-router-dom";

import { useListaParticipantes } from "state/hook/useListaParticipantes";
import { useSorteador } from "state/hook/useSorteador";

import sacolas from "image/sacolas.png";

import * as s from "./style";
import Button from "components/Button";

const RodaPe = () => {
  const participantes = useListaParticipantes();

  const navegarPara = useNavigate();

  const sortear = useSorteador();

  const iniciar = () => {
    sortear();
    navegarPara("/sorteio");
  };

  return (
    <s.FooterConfig>
      <Button
        disabled={participantes.length < 3}
        onClick={iniciar}
        text="Iniciar Brincadeira"
      />
      <img src={sacolas} alt="sacolas de papel" />
    </s.FooterConfig>
  );
};

export default RodaPe;
