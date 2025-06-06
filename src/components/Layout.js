import Box from '@mui/material/Box';
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import CameraIcon from '@mui/icons-material/PhotoCamera';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {' '}
      <Link color="inherit" href="https://www.tiktok.com/@slqnd1r">
        Mi tik tok =D
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const cards = [1];

export default function Album() {
  return (
    <React.Fragment>
      <CssBaseline />

      {/* Video de fondo */}
      <video
        autoPlay
        loop
        muted
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          objectFit: 'cover',
          zIndex: -1,
          filter: 'brightness(0.7)', // opcional para oscurecer el video y mejorar la legibilidad
        }}
      >
        <source src="video.mp4" type="video/mp4" />
        Tu navegador no soporta video HTML5.
      </video>

      <AppBar position="relative" sx={{ backgroundColor: 'rgba(0,0,0,0.6)' }}>
        <Toolbar>
          <CameraIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            Pagina de Slenderin :D
          </Typography>
        </Toolbar>
      </AppBar>

      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'transparent', // transparente para que se vea el video de fondo
            pt: 8,
            pb: 6,
            color: 'white', // texto blanco para que contraste con el video
            position: 'relative',
            zIndex: 1,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              gutterBottom
              sx={{ fontWeight: 'bold' }}
            >
              Slenderin
            </Typography>
            <Typography variant="h5" align="center" paragraph>
              Es una copilacion de mis mejores videos de yt y tiktok si quieren hablar conmigo mi
              discord es g75u o si unirse al clan de mis amigos solo pongan
            </Typography>
            <Box sx={{ mt: 4 }}>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Main call to action
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Secondary action
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </Box>

        <Container sx={{ pt: 8, pb: 8, position: 'relative', zIndex: 1 }} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                {/* Aquí va el contenido de las Cards */}
                <Card
  sx={{
    maxWidth: 1000,  // por ejemplo 1000px de ancho máximo para la Card
    width: '400%',   // o puedes usar un ancho fijo '900px', etc.
    margin: 'auto',  // para centrar la Card horizontalmente
  }}
>
  <CardContent sx={{ flexGrow: 1 }}>
    <Typography gutterBottom variant="h5" component="h2">
      Slenderin
    </Typography>
    <Typography>
    I'm a cheater?
    </Typography>
    <Box
      sx={{
        position: 'relative',
        paddingTop: '56.25%',  // 16:9 aspect ratio (ajusta si quieres otra proporción)
        mt: 2,
        mb: 2,
        width: '100%',
        height: 0,
      }}
    >
      <iframe
        src="https://www.youtube.com/embed/ZQdbvp6fyTc?si=ydN023T1sqJLTztr"
        title="Slenderin Video"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          border: 0,
        }}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </Box>
  </CardContent>
</Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>

      <Box
        component="footer"
        sx={{
          bgcolor: 'rgba(0,0,0,0.6)',
          p: 6,
          color: 'white',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" component="p">
          Visita mi TikTok para más contenido divertido!
        </Typography>
        <Copyright />
      </Box>
    </React.Fragment>
  );
}
