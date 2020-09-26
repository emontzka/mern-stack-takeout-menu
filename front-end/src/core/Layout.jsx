import React from "react";
import { Container, Grid, Header } from "semantic-ui-react";
// import MainNav from "./MainNav";

const Layout = ({
  title = "Title",
  description = "Description",
  className = "",
  children,
}) => {
  return (
    <Container>
      {/* <MainNav /> */}
      <Header>
        <h2>{title}</h2>
      </Header>
      <Grid padded centered columns={1}>
        <Grid.Row>
          <Grid.Column>{children}</Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default Layout;
