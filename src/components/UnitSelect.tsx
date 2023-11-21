import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { allUnits } from '../store/unitStore';
import { unitType } from '../types/unitTypes';

export default function UnitSelect({unit, onUnitChange}: {unit:string, onUnitChange: (unitType: unitType) => void}) {
  const unitTypes = React.useMemo(allUnits, []);

  const handleChange = (event: SelectChangeEvent) => {
    onUnitChange as any as (unitType: unitType) => void;
    onUnitChange(event.target.value as unitType);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="select-unit">Unit</InputLabel>
        <Select
          labelId="select-unit-label"
          id="select-unit-select"
          value={unit}
          label="Unit"
          onChange={handleChange}
        >
          {
            unitTypes.map((unitType) => (<MenuItem  value={unitType}>{unitType}</MenuItem>))
          }
        </Select>
      </FormControl>
    </Box>
  );
}
