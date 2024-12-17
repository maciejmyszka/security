import { Outlet } from 'react-router-dom';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { Box } from '@mui/material';
import { PageContainer } from '../../components/PageContainer';
import { LeftMenu } from '../../components/LeftMenu';
import { TopBar } from '../../components/TopBar';

export const Dashboard = () => {
  const menuItems = [
    {
      id: 3,
      name: 'Szyfr Cezara',
      to: '/szyfr-cezara',
      icon: <PersonOutlineOutlinedIcon sx={{ fill: 'gray' }} />,
    },
    {
      id: 1,
      name: 'Szyfr Polibiusza',
      to: '/szyfr-polibiusza',
      icon: <PersonOutlineOutlinedIcon sx={{ fill: 'gray' }} />,
    },
    {
      id: 2,
      name: 'Szyfr Vigenere',
      to: '/szyfr-vigenere',
      icon: <PersonOutlineOutlinedIcon sx={{ color: 'gray' }} />,
    },
  ];

  return (
    <PageContainer>
      <LeftMenu menuItems={menuItems} />

      <Box
        display='flex'
        width='calc(100% - 300px)'
        height='100%'
        alignItems='stretch'
        flexDirection='column'
      >
        <TopBar />

        <Outlet />
      </Box>
    </PageContainer>
  );
};
