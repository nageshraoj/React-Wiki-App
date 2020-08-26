import React,{useState} from "react";
import { Container   } from '@material-ui/core';
import OptionsCompoent from "../Components/OptionsComponet";
import options from "../Data/indexcolors.json";
import {makeStyles} from "@material-ui/core/styles";

const OptionsView = () =>{
    const [InputOption,setInputOption] = useState(null);

    const useStyles = makeStyles((theme) => ({
        sourceOpt: {
            marginTop:100,
            marginLeft:200,
            display:"flex",
            flexDirection:"row",
            margin: theme.spacing(10),
            width: '500',
        }
      }));

      const AppStyle = useStyles();

    return(
        <Container className={AppStyle.sourceOpt}>
            <OptionsCompoent 
            options ={options}
            setInputOption ={setInputOption}
            InputDisplayText="Select Color"/>
            <br/>
            {InputOption}
        </Container>
    );
}

export default OptionsView;