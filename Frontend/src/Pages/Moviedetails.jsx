
import { Box, Typography, Button } from '@mui/material';

export default function MovieDetails({ movie }) {
  return (
    <Box p={4}>
      <Typography variant="h3">{movie.name}</Typography>
      <Box component="img" src={movie.poster} alt={movie.name} width="100%" />
      <Typography variant="h6">Description</Typography>
      <Typography>{movie.description}</Typography>
      <Typography variant="h6">Cast</Typography>
      <Typography>{movie.cast.join(', ')}</Typography>
      <Typography variant="h6">Reviews</Typography>
      {/* Reviews component */}
      <Button variant="contained" color="primary" sx={{ mt: 4 }}>
        Book Ticket
      </Button>
    </Box>
  );
}
