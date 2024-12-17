import { Box, Typography } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { ReactElement, ReactNode } from 'react';

interface Props {
  menuItems: {
    id: number;
    name: string;
    to: string;
    icon: ReactNode | ReactElement;
  }[];
}

export const LeftMenu = ({ menuItems }: Props) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <Box
      display='flex'
      borderRight='2px solid'
      borderColor='border.main'
      bgcolor='primary.light'
      padding='0.5rem'
      flexDirection='column'
      minWidth='300px'
      maxWidth='300px'
    >
      <Typography textAlign='center' fontSize='1.6rem'>
        Wyższa Szkoła Ekonomii i Informatyki
      </Typography>

      <Typography mt='2rem' fontWeight='bold'>
        Menu
      </Typography>

      <Box display='flex' flexDirection='column' mt='1rem' gap='0.5rem'>
        {menuItems.map(({ id, name, to, icon }) => (
          <Box
            display='flex'
            key={id}
            padding='0.5rem'
            gap='1rem'
            sx={{ cursor: 'pointer' }}
            onClick={() => navigate(to)}
            bgcolor={pathname.includes(to) ? 'secondary.main' : 'transparent'}
            borderRadius='0.5rem'
          >
            {icon}
            <Typography>{name}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
