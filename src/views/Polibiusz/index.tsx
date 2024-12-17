import { BoxShadowContainer } from '../../components/BoxShadowContainer';
import { Box, Stack, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { Button } from '../../components/Button';

const polishAlphabetTable: string[][] = [
  ['a', 'ą', 'b', 'c', 'ć', 'd', 'e'],
  ['ę', 'f', 'g', 'h', 'i', 'j', 'k'],
  ['l', 'ł', 'm', 'n', 'ń', 'o', 'ó'],
  ['p', 'q', 'r', 's', 'ś', 't', 'u'],
  ['w', 'x', 'y', 'z', 'ź', 'ż', 'v'],
];

const findInTable = (char: string) => {
  for (let i = 0; i < polishAlphabetTable.length; i++) {
    for (let j = 0; j < polishAlphabetTable[i].length; j++) {
      if (polishAlphabetTable[i][j] === char) {
        return (i + 1) * 10 + (j + 1);
      }
    }
  }
  return null;
};

const decodeFromTable = (code: number) => {
  const row = Math.floor(code / 10) - 1;
  const col = (code % 10) - 1;
  return polishAlphabetTable[row]?.[col] || '';
};

const applyEquation = (x: number, a: number, b: number): number => {
  return a * x ** 2 + b;
};

const reverseEquation = (y: number, a: number, b: number): number | null => {
  const baseValue = Math.sqrt((y - b) / a);
  return Number.isInteger(baseValue) ? baseValue : null;
};

export const Polibiusz = () => {
  const [textInput, setTextInput] = useState('');
  const [encodedText, setEncodedText] = useState('');
  const [decodedText, setDecodedText] = useState('');
  const [codeA, setCodeA] = useState<number>(1);
  const [codeB, setCodeB] = useState<number>(1);

  const handleEncode = () => {
    const result = textInput
      .toLowerCase()
      .split('')
      .map((char) => {
        const baseCode = findInTable(char);
        if (baseCode !== null) {
          return applyEquation(baseCode, codeA, codeB);
        }
        return char;
      })
      .join(' ');
    setEncodedText(result);
  };

  const handleDecode = () => {
    const numbers = encodedText.match(/\d+/g) || [];
    const result = numbers
      .map((num) => {
        const baseCode = reverseEquation(parseInt(num), codeA, codeB);
        if (baseCode !== null) {
          return decodeFromTable(baseCode);
        }
        return '?';
      })
      .join('');

    setDecodedText(result);
  };

  return (
    <Stack gap='1rem' overflow='auto'>
      <BoxShadowContainer mt='1rem' alignItems='flex-start'>
        <Typography variant='h5'>Szyfr Polibiusza</Typography>

        <Box display='flex' gap='2rem'>
          <Stack alignItems='flex-start'>
            <Typography variant='body1'>Tabela znaków:</Typography>
            <Stack direction='column' alignItems='center' spacing={1} mt='1rem'>
              <Stack direction='row' spacing={1}>
                <BoxShadowContainer
                  sx={{
                    padding: '0.5rem',
                    width: '2rem',
                    textAlign: 'center',
                    bgcolor: '#dbd5d5',
                  }}
                >
                  {' '}
                </BoxShadowContainer>
                {[...Array(polishAlphabetTable[0].length)].map((_, index) => (
                  <BoxShadowContainer
                    key={index}
                    sx={{
                      padding: '0.5rem',
                      width: '2rem',
                      textAlign: 'center',
                      bgcolor: '#dbd5d5',
                      fontWeight: 'bold',
                    }}
                  >
                    {index + 1}
                  </BoxShadowContainer>
                ))}
              </Stack>
              {polishAlphabetTable.map((row, rowIndex) => (
                <Stack key={rowIndex} direction='row' spacing={1}>
                  <BoxShadowContainer
                    sx={{
                      padding: '0.5rem',
                      width: '2rem',
                      textAlign: 'center',
                      fontWeight: 'bold',
                      bgcolor: '#dbd5d5',
                    }}
                  >
                    {rowIndex + 1}
                  </BoxShadowContainer>
                  {row.map((char, colIndex) => (
                    <BoxShadowContainer
                      key={colIndex}
                      sx={{
                        padding: '0.5rem',
                        width: '2rem',
                        textAlign: 'center',
                      }}
                    >
                      {char}
                    </BoxShadowContainer>
                  ))}
                </Stack>
              ))}
            </Stack>
          </Stack>

          <Stack>
            <Typography variant='body1'>
              Szyfrowanie drugiego stopnia (a, b):
            </Typography>

            <TextField
              label='a'
              type='number'
              fullWidth
              value={codeA}
              onChange={(e) => setCodeA(Number(e.target.value))}
              margin='normal'
              sx={{ maxWidth: '300px', mt: '1rem' }}
            />

            <TextField
              label='b'
              type='number'
              fullWidth
              value={codeB}
              onChange={(e) => setCodeB(Number(e.target.value))}
              margin='normal'
              sx={{ maxWidth: '300px', mt: '1rem' }}
            />
          </Stack>
        </Box>
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
        <Button variant='contained' onClick={handleEncode} text='Zaszyfruj' />
        <Typography variant='h6' mt='1rem'>
          Zaszyfrowany tekst: <strong>{encodedText}</strong>
        </Typography>
      </BoxShadowContainer>

      <BoxShadowContainer alignItems='flex-start' mb='1rem'>
        <Typography variant='h5'>Deszyfrowanie</Typography>
        <TextField
          label='Tekst do odszyfrowania (np. liczby)'
          fullWidth
          value={encodedText}
          onChange={(e) => setEncodedText(e.target.value)}
          margin='normal'
          sx={{ maxWidth: '300px' }}
        />
        <Button variant='contained' onClick={handleDecode} text='Odszyfruj' />
        <Typography variant='h6' mt='1rem'>
          Odszyfrowany tekst: <strong>{decodedText}</strong>
        </Typography>
      </BoxShadowContainer>
    </Stack>
  );
};
