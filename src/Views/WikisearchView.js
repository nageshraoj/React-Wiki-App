import React,{useRef, useState} from "react";
import { Container, InputBase,IconButton} from '@material-ui/core';
import {makeStyles} from "@material-ui/core/styles";
import Axios from "axios";
import {TableContainer,Table , TableHead,TableBody , TableRow,Paper ,TableCell } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';

const WikisearchView = () =>{
    const [wikiResults,setwikiResults] = useState([]);

    const TextRef = useRef(null);

    const WikiStyle = makeStyles(theme=>({
        TextFieldStyle:{
            width:"800px"
        },
        ButtonStyle:{
           margin:  theme.spacing(1)
        },
        TabRowStyle:{
            backgroundColor: "#a3d2ca",
            color: theme.palette.white,
            boxSizing: 'border-box'
        },
        TableTitleStyle:{
            boxSizing: 'border-box',
            backgroundColor: theme.palette.action.hover
        },
        iconButtonSytle:{
            marginRight:"auto"
        },
        InputBaseStyle:{
            width:"90%"
        }
    }));

    const ComponentStyle = WikiStyle();

   

    const WikiSearchResults =()=>{
        // console.log(TextRef.current.value);
        const results = async()=>{
        const{data}=  await Axios.get("https://en.wikipedia.org/w/api.php",{
            params:{
                action:'query',
                list:'search',
                origin:'*',
                format:'json',
                srsearch:TextRef.current.value
            }
        })
        setwikiResults(data.query.search);
         };
       if(TextRef.current.value)  results();
    }
        

    const ShowRestuls = (wikiResults.map(eachItem=>{
        return(
            <TableRow className={ComponentStyle.TabRowStyle} >
                        <TableCell component="th" scope="row">{eachItem.title}</TableCell>
                        <TableCell><span dangerouslySetInnerHTML={{__html:eachItem.snippet}}></span></TableCell>
            </TableRow>
          
        )
}));

    return(
        <Container>
             <Paper >
                    <InputBase className={ComponentStyle.InputBaseStyle} onChange={WikiSearchResults} inputRef={TextRef}  placeholder="Text to Search"/>
                    <IconButton className={ComponentStyle.iconButtonSytle} onClick={WikiSearchResults} type="submit"><SearchIcon /></IconButton>
            </Paper>

           <br/>
           {ShowRestuls.length?
           <TableContainer component={Paper} >
                <Table  aria-label="a dense table">
                    <TableHead >
                         <TableRow className={ComponentStyle.TableTitleStyle}>
                            <TableCell align="center">Title</TableCell>
                            <TableCell align="center">Discription</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                         {ShowRestuls}
                    </TableBody>
                </Table>
            </TableContainer>:null
            }
        </Container>
    );
}

export default WikisearchView;
