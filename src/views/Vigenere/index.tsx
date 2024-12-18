import { BoxShadowContainer } from '../../components/BoxShadowContainer';
import { Stack, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { Button } from '../../components/Button';

const alphabet = 'aąbcćdeęfghijklłmnńoóprsśtuwyzźżv';

const vigenereEncrypt = (text: string, key: string) => {
  const textLength = text.length;
  const keyExtended = key.padEnd(textLength, key).slice(0, textLength);

  return text
    .split('')
    .map((char, i) => {
      const textIndex = alphabet.indexOf(char);
      const keyIndex = alphabet.indexOf(keyExtended[i]);

      if (textIndex === -1 || keyIndex === -1) return char;

      const newIndex = (textIndex + keyIndex) % alphabet.length;
      return alphabet[newIndex];
    })
    .join('');
};

const vigenereDecrypt = (text: string, key: string) => {
  const textLength = text.length;
  const keyExtended = key.padEnd(textLength, key).slice(0, textLength);

  return text
    .split('')
    .map((char, i) => {
      const textIndex = alphabet.indexOf(char);
      const keyIndex = alphabet.indexOf(keyExtended[i]);

      if (textIndex === -1 || keyIndex === -1) return char;

      const newIndex =
        (textIndex - keyIndex + alphabet.length) % alphabet.length;
      return alphabet[newIndex];
    })
    .join('');
};

export const Vigenere = () => {
  const [textInput, setTextInput] = useState('');
  const [key, setKey] = useState('');
  const [encryptedText, setEncryptedText] = useState('');
  const [decryptedText, setDecryptedText] = useState('');

  const handleEncrypt = () => {
    const result = vigenereEncrypt(textInput.toLowerCase(), key.toLowerCase());
    setEncryptedText(result);
  };

  const handleDecrypt = () => {
    const result = vigenereDecrypt(
      encryptedText.toLowerCase(),
      key.toLowerCase(),
    );
    setDecryptedText(result);
  };

  return (
    <Stack gap='1rem' overflow='auto'>
      <BoxShadowContainer mt='1rem' alignItems='flex-start'>
        <Typography variant='h5'>Szyfr Vigenère'a</Typography>

        <Stack gap='1rem' alignItems='flex-start'>
          <TextField
            label='Klucz szyfrujący'
            fullWidth
            value={key}
            onChange={(e) => setKey(e.target.value)}
            margin='normal'
            sx={{ maxWidth: '300px' }}
          />
        </Stack>
      </BoxShadowContainer>

      <BoxShadowContainer alignItems='flex-start'>
        <Typography variant='h5'>Szyfrowanie</Typography>

        <TextField
          label='Tekst do zaszyfrowania'
          fullWidth
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
          margin='normal'
          sx={{ maxWidth: '300px' }}
        />

        <Button variant='contained' onClick={handleEncrypt} text='Zaszyfruj' />

        <Typography variant='h6' mt='1rem'>
          Zaszyfrowany tekst: <strong>{encryptedText}</strong>
        </Typography>
      </BoxShadowContainer>

      <BoxShadowContainer alignItems='flex-start'>
        <Typography variant='h5'>Deszyfrowanie</Typography>

        <TextField
          label='Tekst do odszyfrowania'
          fullWidth
          value={encryptedText}
          onChange={(e) => setEncryptedText(e.target.value)}
          margin='normal'
          sx={{ maxWidth: '300px' }}
        />

        <Button variant='contained' onClick={handleDecrypt} text='Odszyfruj' />

        <Typography variant='h6' mt='1rem'>
          Odszyfrowany tekst: <strong>{decryptedText}</strong>
        </Typography>
      </BoxShadowContainer>
    </Stack>
  );
};
