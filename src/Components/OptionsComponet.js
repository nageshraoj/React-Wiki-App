import React,{useState} from "react";
import {FormControl ,Select,MenuItem,InputLabel   } from '@material-ui/core';
import {makeStyles} from "@material-ui/core/styles";

const OptionsCompoent = ({options,InputDisplayText,setInputOption}) =>{
    const [setColor,getColor] = useState(null);

    const OptSeachBar = options.map(eachOption=>{
         return(      
                  <MenuItem value={eachOption.value}>{eachOption.index}</MenuItem>   
        );
    });

    const UpdateOption = (e)=>{
        setInputOption(e.target.value);
        options.forEach(item => {
            if(item.value === e.target.value) {    
                getColor(item.color); 
            } 
        });
        //  console.log(setColor);
    }


    const OptViewStyle = (makeStyles(theme=>({
        frmcontrolStyle:{
            border:"solid",
            marginLeft:20,
            width:200
        },
        selectStyle:{
            color:setColor
        }
    })));
    
    const myAppStyle = OptViewStyle();

    return(
            <FormControl className={myAppStyle.frmcontrolStyle}>
               <InputLabel> {InputDisplayText}</InputLabel>
              <Select className={myAppStyle.selectStyle} onChange={(e)=>UpdateOption(e)}  >
                 {OptSeachBar}
                 </Select>
            </FormControl>
    );
}

export default OptionsCompoent;