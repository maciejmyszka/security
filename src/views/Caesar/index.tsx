import { BoxShadowContainer } from '../../components/BoxShadowContainer';
import { Stack, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { Button } from '../../components/Button';

const polishAlphabet = 'aąbcćdeęfghijklłmnńoóprsśtuwyzźżv';

export const Caesar = () => {
  const [encryptInput, setEncryptInput] = useState('');
  const [decryptInput, setDecryptInput] = useState('');
  const [shift, setShift] = useState(0);
  const [encryptedText, setEncryptedText] = useState('');
  const [decryptedText, setDecryptedText] = useState('');

  const caesarCipher = (text: string, shiftValue: number, isEncrypt = true) => {
    const alphabetLength = polishAlphabet.length;
    return text
      .toLowerCase()
      .split('')
      .map((char) => {
        const index = polishAlphabet.indexOf(char);
        if (index === -1) return char;

        const newIndex = isEncrypt
          ? (index + shiftValue) % alphabetLength
          : (index - shiftValue + alphabetLength) % alphabetLength;
        return polishAlphabet[newIndex];
      })
      .join('');
  };

  const handleEncrypt = () => {
    const result = caesarCipher(encryptInput, Number(shift), true);
    setEncryptedText(result);
  };

  const handleDecrypt = () => {
    const result = caesarCipher(decryptInput, Number(shift), false);
    setDecryptedText(result);
  };

  return (
    <Stack gap='1rem'>
      <BoxShadowContainer mt='1rem'>
        <Typography variant='h5'>Szyfr Cezara</Typography>

        <TextField
          label='Przesunięcie'
          type='number'
          fullWidth
          value={shift}
          onChange={(e) => setShift(Number(e.target.value))}
          margin='normal'
          helperText='Ustawia przesunięcie liter w alfabecie'
          sx={{
            maxWidth: '300px',
            mt: '-0.2rem',
          }}
        />
      </BoxShadowContainer>

      <BoxShadowContainer>
        <Stack alignItems='flex-start'>
          <Typography variant='h5'>Szyfrowanie</Typography>

          <TextField
            label='Tekst do zaszyfrowania'
            fullWidth
            value={encryptInput}
            onChange={(e) => setEncryptInput(e.target.value)}
            margin='normal'
            sx={{
              maxWidth: '300px',
            }}
          />

          <Button
            variant='contained'
            onClick={handleEncrypt}
            text='Zaszyfruj'
          />

          <Typography variant='h6' mt='1rem'>
            Zaszyfrowany tekst: <strong>{encryptedText}</strong>
          </Typography>
        </Stack>
      </BoxShadowContainer>

      <BoxShadowContainer>
        <Stack alignItems='flex-start'>
          <Typography variant='h5'>Deszyfrowanie</Typography>

          <TextField
            label='Tekst do odszyfrowania'
            fullWidth
            value={decryptInput}
            onChange={(e) => setDecryptInput(e.target.value)}
            margin='normal'
            sx={{
              maxWidth: '300px',
            }}
          />

          <Button
            variant='contained'
            onClick={handleDecrypt}
            text='Odszyfruj'
          />

          <Typography variant='h6' mt='1rem'>
            Odszyfrowany tekst: <strong>{decryptedText}</strong>
          </Typography>
        </Stack>
      </BoxShadowContainer>
    </Stack>
  );
};
