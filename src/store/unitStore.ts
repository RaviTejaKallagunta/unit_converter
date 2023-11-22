import { eachUnit, unitType } from "../types/unitTypes";

const UnitConverterStore: Record<unitType, Record<string, eachUnit>> = {

    "Temperature": {
        "Degree Celsius":{name:"Degree Celsius"},
        "Fahrenheit":{name:"Fahrenheit"},
        "Kelvin":{name:"Kelvin"}
    },
    "Area": {
        "Square foot":{name:"Square foot"},
        "Square meter":{name:"Square meter"},
        "Acre":{name:"Acre"}
    },
    "Digital Storage": {
        "Kilobyte":{name:"Bit"},
        "Megabyte":{name:"Byte"},
        "Gigabyte":{name:"Kilobyte"}
    },
}

export function allUnits(): unitType[] {
    return Object.keys(UnitConverterStore) as unitType[];
}

export function allSubUnits(unit: unitType): eachUnit[] {
    return Object.values(UnitConverterStore[unit]);
}

export function unitsConversion(input:number,from:string,to:string){
    if(from == 'Degree Celsius'){
        if(to == 'Fahrenheit'){
            return input*9/5+32;
        }else if(to == 'Kelvin'){
            return input+273.15;
        }else if(to == 'Degree Celsius'){
            return input;
        }
    }else if(from == 'Fahrenheit'){
        if(to == 'Degree Celsius'){
            return input-32*5/9;
        }else if(to == 'Kelvin'){
            return input-32*5/9+273.15;
        }else if(to == 'Fahrenheit'){
            return input;
        }
    }else if(from == 'Kelvin '){
        if(to == 'Degree Celsius'){
            return input-273.15;
        }else if(to == 'Fahrenheit'){
            return (input-273.15)*9/5+32;
        }else if(to == 'Kelvin'){
            return input;
        }
    }else if(from == 'Square foot'){
        if(to == 'Square meter'){
            return input/10.764;
        }else if(to == 'Acre'){
            return input/43560;
        }else if(to == 'Square foot'){
            return input;
        }
    }else if(from == 'Square meter'){
        if(to == 'Square foot'){
            return input*10.764;
        }else if(to == 'Acre'){
            return input/4047;
        }else if(to == 'Square meter'){
            return input;
        }
    }else if(from == 'Acre'){
        if(to == 'Square foot'){
            return input*43560;
        }else if(to == 'Square meter'){
            return input*4047;
        }else if(to == 'Acre'){
            return input;
        }
    }else if(from == 'Bit'){
        if(to == 'Byte'){
            return input/8;
        }else if(to == 'Kilobyte'){
            return input/8000;
        }else if(to == 'Bit'){
            return input;
        }
    }else if(from == 'Byte'){
        if(to == 'Bit'){
            return input*8;
        }else if(to == 'Kilobyte'){
            return input/1000;
        }else if(to == 'Byte'){
            return input;
        }
    }else if(from == 'Kilobyte'){
        if(to == 'Bit'){
            return input*8000;
        }else if(to == 'Byte'){
            return input*1000;
        }else if(to == 'Kilobyte'){
            return input;
        }
    }
}