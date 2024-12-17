import { Box } from '@mui/material';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode | ReactNode[];
}

export const PageContainer = ({ children }: Props) => (
  <Box
    width='100vw'
    height='100vh'
    bgcolor='secondary.main'
    display='flex'
    overflow='hidden'
  >
    {children}
  </Box>
);
