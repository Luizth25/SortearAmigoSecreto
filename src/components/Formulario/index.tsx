import { useRef, useState } from "react";

import { useAdicionarParticipante } from "state/hook/useAdicionarParticipante";
import { useMensagemDeErro } from "state/hook/useMensagemDeErro";

import * as s from "./style";

const Formulario = () => {
  const [nome, setNome] = useState("");

  const adicionar = useAdicionarParticipante();

  const mensagemDeErro = useMensagemDeErro();

  const adicionarParticipante = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    adicionar(nome);
    setNome("");
    InputRef.current?.focus();
  };

  const InputRef = useRef<HTMLInputElement>(null);

  return (
    <form onSubmit={adicionarParticipante}>
      <s.InputBtnContainer>
        <s.StyleInput
          ref={InputRef}
          value={nome}
          onChange={(evento) => setNome(evento.target.value)}
          type="text"
          placeholder="Insira os nomes dos participantes"
        />

        <s.StyledButton disabled={!nome}>Adicionar</s.StyledButton>
      </s.InputBtnContainer>
      {mensagemDeErro && (
        <s.AlertError role="alert">{mensagemDeErro}</s.AlertError>
      )}
    </form>
  );
};

export default Formulario;
