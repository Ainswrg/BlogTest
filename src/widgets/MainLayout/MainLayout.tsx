import { type FC } from "react";
import Container from "react-bootstrap/Container";
import { Outlet } from "react-router-dom";
import { Header } from "widgets/Header/Header";

const MainLayout: FC = () => {
  return (
    <>
      <Header />
      <Container fluid>
        <Outlet />
      </Container>
    </>
  );
};

export { MainLayout };
