import { Button as MUIButton, ButtonProps } from '@mui/material';

interface Props extends ButtonProps {
  text: string;
  bgcolor?: string;
  borderRadius?: string;
  padding?: string;
  fontSize?: string;
}

export const Button = ({
  text,
  bgcolor,
  borderRadius,
  padding,
  fontSize,
  ...props
}: Props) => {
  return (
    <MUIButton
      sx={{ backgroundColor: bgcolor, borderRadius, padding, fontSize }}
      {...props}
    >
      {text}
    </MUIButton>
  );
};
