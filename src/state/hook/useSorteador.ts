import { useListaParticipantes } from "state/hook/useListaParticipantes";
import { useSetRecoilState } from "recoil";
import { resultadoAmigoSecreto } from "state/atom";
import { realizarSorteio } from "state/helpers";

export const useSorteador = () => {
  const participantes = useListaParticipantes();
  const setResultado = useSetRecoilState(resultadoAmigoSecreto);

  return () => {
    const resultado = realizarSorteio(participantes);
    setResultado(resultado);
  };
};
