import { render } from "@testing-library/react";
import { RecoilRoot } from "recoil";

import Home from "pages/Home";

const mockDeNavegacao = jest.fn();

jest.mock("react-router-dom", () => {
  return {
    useNavigate: () => mockDeNavegacao,
  };
});

describe("a pagina de configuração", () => {
  test("deve ser renderizida corretamente", () => {
    const { container } = render(
      <RecoilRoot>
        <Home />
      </RecoilRoot>
    );

    expect(container).toMatchSnapshot();
  });
});
