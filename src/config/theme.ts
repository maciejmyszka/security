import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles/createPalette' {
  interface Palette {
    buttons: PaletteOptions['primary'];
    border: PaletteOptions['primary'];
  }

  interface PaletteOptions {
    buttons: PaletteOptions['primary'];
    border: PaletteOptions['primary'];
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    outfilled: true;
    red: true;
    'red-rounded': true;
    orange: true;
    'orange-rounded': true;
    'outfilled-rounded': true;
    'contained-rounded': true;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    description: true;
  }
}

export const theme = createTheme({
  typography: {
    fontFamily: 'Montserrat, sans-serif',
  },
  palette: {
    primary: {
      main: '#3399FF',
      light: '#fff',
    },
    secondary: {
      main: '#E5EAF2',
    },
    buttons: {
      main: '#3399FF',
      light: '#C2E0FF',
    },
    border: {
      main: '#E2E2E2',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: '#3399FF',
          borderRadius: '1.5rem',
          color: '#fff',
          padding: '0.2rem 0.7rem',
          border: '1px solid transparent',

          ':hover': {
            backgroundColor: '#E8F9FF',
            color: '#3399FF',
            borderColor: '#C2E0FF',
          },

          ':disabled': {
            backgroundColor: '#E2E2E2',
            color: 'gray',
            borderColor: '#E2E2E2',
          },
        },
      },
      variants: [
        {
          props: { variant: 'outfilled' },
          style: {
            border: '1px solid #C2E0FF',
            color: '#3399FF',
            backgroundColor: '#ffffffcc',

            ':hover': {
              backgroundColor: '#3399FF',
              color: '#fff',
            },
          },
        },
        {
          props: { variant: 'red' },
          style: {
            border: '1px solid #FF2828',
            color: '#FF2828',
            backgroundColor: '#ffffffcc',
            borderRadius: '0.2rem',

            ':hover': {
              backgroundColor: '#FF2828',
              color: '#fff',
              borderRadius: '0.2rem',
            },
          },
        },
        {
          props: { variant: 'red-rounded' },
          style: {
            border: '1px solid #FF2828',
            color: '#FF2828',
            backgroundColor: '#ffffffcc',

            ':hover': {
              backgroundColor: '#FF2828',
              color: '#fff',
            },
          },
        },
        {
          props: { variant: 'orange-rounded' },
          style: {
            border: '1px solid #FC9B00',
            color: '#FC9B00',
            backgroundColor: '#ffffffcc',
            borderRadius: '1.5rem',

            ':hover': {
              backgroundColor: '#FC9B00',
              color: '#fff',
              borderColor: '#FC9B00',
            },
          },
        },
        {
          props: { variant: 'orange' },
          style: {
            border: '1px solid #FC9B00',
            color: '#FC9B00',
            backgroundColor: '#ffffffcc',
            borderRadius: '0.2rem',

            ':hover': {
              backgroundColor: '#FC9B00',
              color: '#fff',
              borderColor: '#FC9B00',
              borderRadius: '0.2rem',
            },
          },
        },
        {
          props: { variant: 'outfilled' },
          style: {
            border: '1px solid #C2E0FF',
            color: '#3399FF',
            backgroundColor: '#ffffffcc',
            borderRadius: '0.2rem',

            ':hover': {
              backgroundColor: '#3399FF',
              color: '#fff',
              borderRadius: '0.2rem',
            },
          },
        },
        {
          props: { variant: 'outfilled-rounded' },
          style: {
            border: '1px solid #C2E0FF',
            color: '#3399FF',
            backgroundColor: '#ffffffcc',
            borderRadius: '1.5rem',

            ':hover': {
              backgroundColor: '#3399FF',
              color: '#fff',
            },
          },
        },
        {
          props: { variant: 'contained' },
          style: {
            border: '1px solid #3399FF',
            color: '#fff',
            backgroundColor: '#3399FF',
            borderRadius: '0.2rem',

            ':hover': {
              backgroundColor: '#E8F9FF',
              color: '#3399FF',
              borderColor: '#C2E0FF',
            },
          },
        },
        {
          props: { variant: 'contained-rounded' },
          style: {
            border: '1px solid #3399FF',
            color: '#fff',
            backgroundColor: '#3399FF',
            borderRadius: '1.5rem',

            ':hover': {
              backgroundColor: '#E8F9FF',
              color: '#3399FF',
              borderColor: '#C2E0FF',
            },
          },
        },
      ],
    },
    MuiTypography: {
      variants: [
        {
          props: { variant: 'description' },
          style: {
            fontSize: '0.8rem',
            color: '#CCCCCC',
          },
        },
      ],
    },
  },
});
