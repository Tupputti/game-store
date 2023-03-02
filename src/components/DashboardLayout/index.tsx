import Footer from "../Footer";
import Header from "../Header";
import { Container, Content, PageContainer } from "./styles";

import { useState } from "react";

type DashboardLayoutProps = {
  children: React.ReactNode;
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [isOpened, setOpened] = useState(false);

  const toggleDrawer = () => {
    setOpened((prev) => !prev);
  };

  return (
    <>
      <Header isOpened={isOpened} toggleDrawer={toggleDrawer} />
      <Container>
        <Content>
          <PageContainer>{children}</PageContainer>
        </Content>
      </Container>
      {/* <Footer /> */}
    </>
  );
}
