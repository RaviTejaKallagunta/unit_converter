//import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useContext, useState, useMemo } from 'react';
import { ConverterContext } from '../context/units';
import { allSubUnits, unitsConversion } from '../store/unitStore';
import { unitType } from '../types/unitTypes';
import SubUnitsSelect from './SubUnitsSelect';



export default function UnitConverterForm() {
    const {selectedUnit} = useContext(ConverterContext);

    const [fromUnit, setFromUnit] = useState('');
    const [toUnit, setToUnit] = useState('');

    const [input,setInput]=useState<any>();
    const [inputs,setInputs]=useState<any>();

    const subUnits = useMemo(() => {
        return selectedUnit ? allSubUnits(selectedUnit as unitType) : [];
    }, [selectedUnit]);

    // const Item = styled(Paper)(({ theme }) => ({
    //     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    //     ...theme.typography.body2,
    //     padding: theme.spacing(1),
    //     textAlign: 'center',
    //     color: theme.palette.text.secondary,
    //   }));

    function handleFromUnitChange(subUnit: string) {
        setFromUnit(subUnit);
    }

    function handleToUnitChange(subUnit: string) {
        setToUnit(subUnit);
    }

    function handleInputChange(input: number){
        setInput(input);
    }

    function handleInputsChange(inputs: number){
        setInputs(inputs)
    }
    const request = useMemo(() => unitsConversion(input, fromUnit, toUnit), [input, fromUnit, toUnit]);
    const response = useMemo(() => unitsConversion(inputs, fromUnit,toUnit), [inputs, fromUnit, toUnit]);

    return (
        <Paper>
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    {/* <Item> */}
                    <SubUnitsSelect label="From" subUnits={subUnits} selected={fromUnit} onSubUnitChange={handleFromUnitChange} onInputChange={handleInputChange} data={response}></SubUnitsSelect>
                    {/* </Item> */}
                </Grid>
                <Grid item xs={8}>
                    {/* <Item> */}
                        <SubUnitsSelect label="To" subUnits={subUnits} selected={toUnit} onSubUnitChange={handleToUnitChange} onInputChange={handleInputsChange} data={request}></SubUnitsSelect>
                    {/* </Item> */}
                </Grid>
            </Grid>
        </Paper>
    );
}