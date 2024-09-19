import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import NavHeader from "../../components/NavHeader";
import MyCards from "../../components/MyCards";
import Footer from "../../components/Footer";

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
}));

const cards = [
  {
    id: 1,
    image:
      "https://cdn.pixabay.com/photo/2020/07/23/15/34/mother-board-5431664_960_720.jpg",
    title: "Placa-mãe",
    description: "Placa-mãe de PC",
  },
  {
    id: 2,
    image:
      "https://cdn.pixabay.com/photo/2020/08/09/14/25/business-5475661_1280.jpg",
    title: "Notebook",
    description: "Notebook na mesa",
  },
  {
    id: 3,
    image:
      "https://cdn.pixabay.com/photo/2020/02/10/09/54/computers-4835965_960_720.jpg",
    title: "HD",
    description: "HD de PC",
  },
  {
    id: 4,
    image:
      "https://cdn.pixabay.com/photo/2020/02/22/08/40/memories-4869868_1280.jpg",
    title: "Memória RAM",
    description: "Memória RAM de PC",
  },
];

const App = () => {
  const classes = useStyles();

  return (
    <>
      <NavHeader />
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Lista de Tecnologias
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Primeiro projeto de ReactJS Antigo
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Entrar
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Cancelar
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <MyCards data={cards} />
      </main>
      <Footer />
    </>
  );
};

export default App;
