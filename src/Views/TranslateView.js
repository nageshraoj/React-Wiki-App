import React,{useState, useEffect} from "react";
import LaguageList from "../Data/Languages.json";
import { Container,Paper,TextField } from '@material-ui/core';
import OptionsCompoent from "../Components/OptionsComponet";
import { makeStyles } from '@material-ui/core/styles';
import Axios from "axios";

const TranslateView = () =>{
    const [SourceInputvalue,setSourceInputvalue] = useState(null);
    const [TargetInputvalue,setTargetInputvalue] = useState(null);
    const [TranslateText,SetTranslateText] = useState(null);
    const [FinalText,setFinalText] = useState(null);
    const KEY ="AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM";



    useEffect(()=>{

    if(!TranslateText || !SourceInputvalue || !TargetInputvalue) return;
    const TranslatedText =async () =>{
    const {data} = await Axios.post('https://translation.googleapis.com/language/translate/v2',{},{
        params:{
            key:KEY,
            source:SourceInputvalue,
            target:TargetInputvalue,
            q:TranslateText
        }
    })
    setFinalText(data.data.translations[0].translatedText);
    };
    TranslatedText();
        // console.log(FinalText);
    },[TranslateText,SourceInputvalue,TargetInputvalue])

    const useStyles = makeStyles((theme) => ({
        sourceOpt: {
            display:"flex",
            flexDirection:"row",
            margin: theme.spacing(10),
            width: '90%',
        },
        TextFieldStyle:{
            width:"90%"
        },
        ButtonStyle:{
           margin:  theme.spacing(1)
        }
      }));

      const AppStyle = useStyles();
    return(
        <div className="box-field">
            <Paper >
              <TextField value={TranslateText} onChange={(e)=>SetTranslateText(e.target.value)} label="Translate Text" className={AppStyle.TextFieldStyle} variant="outlined"/>
            </Paper>
            <Container className="box-field">
                <form  className={AppStyle.sourceOpt}>
                <OptionsCompoent  
                     options ={LaguageList}
                     setInputOption ={setSourceInputvalue}
                     InputDisplayText="Select Source Language"/>

                <OptionsCompoent 
                     options ={LaguageList}
                     setInputOption ={setTargetInputvalue}
                     InputDisplayText="Select Target Language"/>
                </form>
                {FinalText}
                {/* {SourceInputvalue} <br/>
                {TargetInputvalue} <br/>
                {TranslateText} */}
            </Container>
        </div>
    );
}

export default TranslateView;