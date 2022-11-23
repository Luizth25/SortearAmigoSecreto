import { RecoilRoot } from "recoil";
import { fireEvent, render, screen } from "@testing-library/react";

import RodaPe from "components/RodaPe";

import { useListaParticipantes } from "state/hook/useListaParticipantes";

jest.mock("../../state/hook/useListaParticipantes", () => {
  return {
    useListaParticipantes: jest.fn(),
  };
});

const mockDeNavegacao = jest.fn();
const mockSorteio = jest.fn();

jest.mock("../../state/hook/useSorteador", () => {
  return {
    useSorteador: () => mockSorteio,
  };
});

jest.mock("react-router-dom", () => {
  return {
    useNavigate: () => mockDeNavegacao,
  };
});

describe("onde não existem participantes suficientes", () => {
  beforeEach(() => {
    return (useListaParticipantes as jest.Mock).mockReturnValue([]);
  });

  test("a brincadeira não pode ser iniciada", () => {
    render(
      <RecoilRoot>
        <RodaPe />
      </RecoilRoot>
    );

    const botao = screen.getByRole("button");
    expect(botao).toBeDisabled();
  });
});

describe("onde exitem participantes suficientes", () => {
  beforeEach(() => {
    return (useListaParticipantes as jest.Mock).mockReturnValue([
      "Jorge",
      "Tanaka",
      "Luiz",
      "Alan",
    ]);
  });

  test("a brincadeira pode ser iniciada", () => {
    render(
      <RecoilRoot>
        <RodaPe />
      </RecoilRoot>
    );

    const botao = screen.getByRole("button");
    expect(botao).not.toBeDisabled();
  });

  test("a brincadeira foi iniciada", () => {
    render(
      <RecoilRoot>
        <RodaPe />
      </RecoilRoot>
    );

    const botao = screen.getByRole("button");
    fireEvent.click(botao);

    expect(mockDeNavegacao).toHaveBeenCalledTimes(1);
    expect(mockDeNavegacao).toHaveBeenCalledWith("/sorteio");
    expect(mockSorteio).toHaveBeenCalledTimes(1);
  });
});
