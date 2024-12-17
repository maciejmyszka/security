import { memo } from 'react';
import { Box, BoxProps } from '@mui/material';

interface Props extends BoxProps {
  width?: string | string[];
}

export const BoxShadowContainer = memo(
  ({ children, width, ...props }: Props) => (
    <Box
      display='flex'
      gap='1rem'
      bgcolor='primary.light'
      flexDirection='column'
      width={width ? width : 'calc(100% - 2rem)'}
      padding='1rem 1.2rem'
      borderRadius='0.5rem'
      border='1px solid #E2E2E2'
      boxSizing='border-box'
      sx={{
        mx: '1rem',
        boxShadow:
          'rgba(0, 0, 0, 0.06) 0px 10px 15px, rgba(0, 0, 0, 0.04) 0px 5px 5px',
      }}
      {...props}
    >
      {children}
    </Box>
  ),
);
