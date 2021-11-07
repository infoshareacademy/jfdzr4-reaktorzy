import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import './index.css'

export const LoadingEvents =()=> {
  return (
    <Box className="loading-events">
      <CircularProgress />
    </Box>
  );
}