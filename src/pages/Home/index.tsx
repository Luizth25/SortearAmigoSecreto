import Card from "components/Card";
import Formulario from "components/Formulario";
import Header from "components/Header";
import ListaParticipantes from "components/ListaParticipantes/index.tsx";
import RodaPe from "components/RodaPe";

const Home = () => {
  return (
    <>
      <Header />
      <Card>
        <section>
          <h2>Vamos começar</h2>
          <Formulario />
          <ListaParticipantes />
          <RodaPe />
        </section>
      </Card>
    </>
  );
};

export default Home;
