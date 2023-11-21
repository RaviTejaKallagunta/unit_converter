import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Grid';
import { TextField } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { eachUnit } from '../types/unitTypes';
import { ChangeEvent, useEffect, useState } from 'react';


export default function SubUnitsSelect({label, subUnits, selected, onSubUnitChange ,onInputChange, data}: {label: string, subUnits: eachUnit[], selected: string, onSubUnitChange: (subUnit: string) => void ,onInputChange: (input: number) => void, data:any}) {
  
  const handleChange = (event: SelectChangeEvent) => {
    onSubUnitChange(event.target.value as string);
  };

  const [result,setResult]=useState<number>(data);

  const handleInputChange = (event:ChangeEvent<HTMLInputElement>) => {
    setResult(Number(event.target.value))
    onInputChange(Number(event.target.value) )
  }

  useEffect(() => {
    setResult(data);
  }, [data]);

  return (
    <>
    <Grid container spacing={10}>
      <Grid item xs={6}>
        <TextField
            type="number"
            variant="outlined"
            value={result}
            onChange={handleInputChange}
            style={{ marginBottom: 16 }}
            >
        </TextField>
      </Grid>
    </Grid>
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="subUnit-select-input-label">{label} Unit</InputLabel>
        <Select
          labelId="subUnit-select-label"
          id="subUnit-select"
          value={selected}
          label="{label}"
          onChange={handleChange}
        >
          {
            subUnits.map((subUnit) => (<MenuItem  value={subUnit.name}>{subUnit.name}</MenuItem>))
          }
        </Select>
      </FormControl>
    </Box>
    </>
  );
}