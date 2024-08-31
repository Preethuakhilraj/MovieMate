import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Container,
  Button,
} from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import axios from "axios";

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/user/movies");
        setMovies(response.data || []); // Ensure movies is an array
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Container style={{ marginTop: "20px", maxWidth: "100vw", padding: 0 }}>
      {/* Carousel Section */}
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={3000}
        style={{ width: "100%", height: "100vh" }} // Fullscreen carousel
      >
        <div>
          <img
            src="https://wallpapercave.com/wp/wp6907816.jpg"
            alt="Image 1"
            style={{ objectFit: "cover", height: "100vh", width: "100%" }}
          />
          <button className="legend">
            <a href="/login">Book the Ticket</a>{" "}
          </button>
        </div>
        <div>
          <img
            src="https://wallpapercave.com/wp/wp7967861.jpg"
            alt="Image 2"
            style={{ objectFit: "cover", height: "100vh", width: "100%" }}
          />
          <button className="legend">
            <a href="/login">Book the Ticket</a>{" "}
          </button>
        </div>
        <div>
          <img
            src="https://wallpapercave.com/wp/wp8807385.jpg"
            alt="Image 3"
            style={{ objectFit: "cover", height: "100vh", width: "100%" }}
          />
          <button className="legend">
            <a href="/login">Book the Ticket</a>{" "}
          </button>
        </div>
      </Carousel>

      {/* Cards Section */}
      <Grid
        container
        spacing={4}
        style={{ marginTop: "10px", padding: "0 20px", }}
      >
        {movies.length > 0 ? (
          movies.map((movie) => (
            <Grid item xs={12} sm={6} md={4} key={movie._id}>
              <Card
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  // height: "100%",
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                }}
              >
                <img
                  src={movie.image}
                  alt={movie.name}
                  style={{
                    width: "100%",
                    height: "350px",
                    objectFit: "cover",
                    borderTopLeftRadius: "4px",
                    borderTopRightRadius: "4px",
                  }}
                />
                <CardContent style={{ flexGrow: 1 }}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    style={{ fontWeight: 700 }}
                  >
                    {movie.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    style={{ marginBottom: "15px" }}
                  >
                    {movie.description}
                  </Typography>
                  <Button
                    variant="contained"
                    color="yellow"
                    style={{
                      margin: "10px",
                      borderRadius: "20px",
                      fontWeight: "bold",
                      background: "yellow",
                      color: "black"
                    }}
                  >
                    More Details
                  </Button>{" "}
                </CardContent>
              </Card>
            </Grid>
          ))
        ) : (
          <Typography
            variant="h6"
            style={{ textAlign: "center", width: "100%" }}
          >
            No movies available
          </Typography>
        )}
      </Grid>
    </Container>
  );
};

export default Home;
