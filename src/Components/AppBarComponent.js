import React,{useState} from "react";
import {AppBar,Toolbar,Tabs,Tab, Container} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {Link} from "react-router-dom";

const AppBarComponent = () =>{
    const [tabOption,settabOption] = useState(null);

    const AppTheme = makeStyles(theme=>({
        TabStyle:{
            marginLeft:"auto"
        },
        AppBarStyle:{
            ...theme.mixins.Toolbar,
            height:"5em"
        }
    }));
    const AppStyle = AppTheme();
    return(
        <div>
            <Container>
                <AppBar>
                    <Toolbar>
                        My Application
                        <Tabs value={tabOption} onChange={(e,value)=>settabOption(value)} className={AppStyle.TabStyle}>
                            <Tab label="Translate" component={Link} to="/" />
                            <Tab label="Accordian" component={Link} to="/Accordian" />
                            <Tab label="Wiki search" component={Link} to="/wikisearch" />
                            <Tab label="Options" component={Link} to="/Options" />
                            <Tab label="Help" component={Link} to="/Help" />
                        </Tabs>
                    </Toolbar>
                </AppBar>
            </Container>
        <div className={AppStyle.AppBarStyle}/>
        </div>
    );
}

export default AppBarComponent;