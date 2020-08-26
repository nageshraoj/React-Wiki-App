import React from "react";
import AppBarComponent from "./Components/AppBarComponent";
import { ThemeProvider } from "@material-ui/core";
import theme from "./Styles/BaseStyle";
import { BrowserRouter,Switch, Route } from "react-router-dom";
import AccordianView from "./Views/AccordianView";
import WikisearchView from "./Views/WikisearchView";
import OptionsView from "./Views/OptionsView";
import TranslateView from "./Views/TranslateView";
import Facker from "faker";

const App = () =>{
    return(
        <div>
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <AppBarComponent/>
                    <Switch>
                         <Route exact path="/" component={()=><TranslateView/>}/>
                        <Route exact path="/Accordian" component={()=><AccordianView/>}/>
                        <Route exact path="/wikisearch" component={()=><WikisearchView/>}/>
                        <Route exact path="/Options" component={()=><OptionsView/>}/>
                        <Route exact path="/Help" component={()=><div>{Facker.lorem.sentences(1000)}</div>}/>
                    </Switch>
                </BrowserRouter>
            </ThemeProvider>
        </div>
    );
}

export default App;