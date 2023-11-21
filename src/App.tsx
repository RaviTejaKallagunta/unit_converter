import { useState } from 'react'
import './App.css'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Header from './components/Header'
import { ConverterContext } from './context/units';
import UnitSelect from './components/UnitSelect';
import { unitType } from './types/unitTypes';
import UnitConverterForm from './components/UnitConverterForm';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function App() {
 const [selectedUnit,setSelectedUnit]=useState('');

 function handleUnitChange(unitType: unitType) {
  setSelectedUnit(unitType);
}

  return (
    <>
      <ConverterContext.Provider value={{selectedUnit}}>
      <Box sx={{ flexGrow: 1 }}>
        <Header></Header>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Item></Item>
          </Grid>
          <Grid item xs={4}>
          <Item>
          <UnitSelect unit={selectedUnit} onUnitChange={handleUnitChange}></UnitSelect>
          </Item>
        </Grid>
        </Grid>
      </Box>
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Item>
            {selectedUnit && <UnitConverterForm></UnitConverterForm>}
          </Item>
        </Grid>
      </Grid>
    </Box>
      </ConverterContext.Provider>
    </>
  )
}
