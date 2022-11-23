import { render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";

import { useListaParticipantes } from "../../state/hook/useListaParticipantes";

import ListaParticipantes from "./index.tsx";

jest.mock("../../state/hook/useListaParticipantes", () => {
  return {
    useListaParticipantes: jest.fn(),
  };
});

describe("uma lista vazia de participantes", () => {
  beforeEach(() => {
    return (useListaParticipantes as jest.Mock).mockReturnValue([]);
  });

  test("deve ser renderizada sem elementos", () => {
    render(
      <RecoilRoot>
        <ListaParticipantes />
      </RecoilRoot>
    );

    const itens = screen.queryAllByRole("listitem");
    expect(itens).toHaveLength(0);
  });

  describe("uma lista preenchida de participantes", () => {
    const participantes = ["Ana, Jenny"];
    beforeEach(() => {
      (useListaParticipantes as jest.Mock).mockReturnValue(participantes);
    });

    test("deve ser renderizada sem elementos", () => {
      render(
        <RecoilRoot>
          <ListaParticipantes />
        </RecoilRoot>
      );

      const itens = screen.queryAllByRole("listitem");
      expect(itens).toHaveLength(participantes.length);
    });
  });
});
