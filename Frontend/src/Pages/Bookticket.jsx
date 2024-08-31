
import { Box, Typography, Button } from '@mui/material';

export default function BookTicketPage({ movie, availability, onBook }) {
  return (
    <Box p={4}>
      <Typography variant="h4">Book Ticket for {movie.name}</Typography>
      <Typography variant="h6">Availability: {availability}</Typography>
      {availability === 'Available' && (
        <Button variant="contained" color="primary" onClick={onBook}>
          Book Now
        </Button>
      )}
      {availability !== 'Available' && (
        <Typography color="error">Tickets are not available</Typography>
      )}
    </Box>
  );
}
