import { Avatar, Box, Typography } from '@mui/material';

export const TopBar = () => {
  return (
    <Box
      display='flex'
      alignItems='center'
      bgcolor='primary.light'
      width='100%'
      padding='0.5rem 2rem'
      justifyContent='space-between'
      borderBottom='2px solid'
      borderColor='border.main'
    >
      <Box display='flex' gap='1rem' alignItems='center'>
        <Avatar
          sx={{
            width: '2rem',
            height: '2rem',
          }}
        />

        <Typography fontSize={'1rem'}>
          Maciej Myszka - nr. albumu 15421
        </Typography>
      </Box>
    </Box>
  );
};
