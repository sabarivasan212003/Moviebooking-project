import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { SwipeTwoTone } from '@mui/icons-material';

export default function Changecolour() {
    const k={};
  const [age, setAge] = React.useState('');
  //const [color, setcolor] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
     //k=event.target.value;
  };
    


  return (
    <div>
        <div>
    <center>
    <Box sx={{ minWidth: 120 }}>
        
      <FormControl style={{width:500}}>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
          
        >
          <MenuItem value={10}>black</MenuItem>
          <MenuItem value={20}>blue</MenuItem>
          <MenuItem value={30}>red</MenuItem>
        </Select>
      </FormControl>
    </Box>
    </center>
    </div>
    <div style={{padding:100}}></div>
    <center>
    <div className='container' >
        

    </div>
    </center>
    </div>
  );
}
