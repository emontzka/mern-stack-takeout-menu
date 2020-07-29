import React from "react";
import { Container, Grid, Header } from "semantic-ui-react";

const Layout = ({
  title = "Title",
  description = "Description",
  className = "",
  children,
}) => {
  return (
    <Container>
      <Header>
        <h2>{title}</h2>
      </Header>
      <Grid centered columns={1}>
        <Grid.Row>
          <Grid.Column>{children}</Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default Layout;
