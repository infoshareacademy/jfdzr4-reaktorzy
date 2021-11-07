import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export const LoadingEvents =()=> {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', margin: 'auto'}}>
      <CircularProgress />
    </Box>
  );
}