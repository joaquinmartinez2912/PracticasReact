import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useContext} from 'react';
import { ModeContext } from "../contexts/ModeContext";


export default function BasicSelect() {
  //const [age, setAge] = React.useState('');
  const {TotalPorPagina, setTotalPorPagina, Modo} = useContext(ModeContext)
  const handleChange = (event) => {
    setTotalPorPagina(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }} style={{filter: Modo ? "none" : "invert(1)"}}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Cant</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={TotalPorPagina}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={15}>15</MenuItem>
          <MenuItem value={20}>20</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
