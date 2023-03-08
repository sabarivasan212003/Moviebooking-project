import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const currencies = [
  {
    value: 'lime',
    label: 'Lime',
  },
  {
    value: 'lavender',
    label: 'Lavender',
  },
  {
    value: 'crimson',
    label: 'Crimson',
  },
  {
    value: 'darkblue',
    label: 'Darkblue',
  },
  {
    value: 'teal',
    label: 'Teal',
  },
  {
    value: 'rebeccaPurple',
    label: 'Rebecca Purple',
  },
  {
    value: 'ghostwhite',
    label: 'Ghost White',
  },
  {
    value: 'aquamqrine',
    label: 'Aqua Marine',
  },
];

export default function SelectColour() {
  const [currency, setCurrency] = React.useState();

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <>
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-select-currency"
          select
          label="Select"
          value={currency}
          onChange={handleChange}

          
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField> 
        
      </div>
    </Box>
  <div className='container' style={{padding:200,backgroundColor:currency,border:'2px solid black'}}>
  </div>
  </>
  );
}