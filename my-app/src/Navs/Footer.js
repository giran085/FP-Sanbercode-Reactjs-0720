import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { useStyles } from "./UseStyles";

export default function Footer(props) {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Typography variant="body2" color="textSecondary" align="center">
          {"Final Project "}
          {new Date().getFullYear()}
          {" "}
          {" "}
          <Link color="teal" href="https://sanbercode.com/">
            Sanbercode
          </Link>{" "}
        </Typography>
      </Container>
    </footer>
  );
}
