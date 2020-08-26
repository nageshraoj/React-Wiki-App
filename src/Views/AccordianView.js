import React from "react";
import {Accordion,AccordionSummary,AccordionDetails } from "@material-ui/core";
import AccordionItems from "../Data/AccordianItems.json";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const AccordianView = () =>{
    const ShowAccordion = AccordionItems.map(eachItem=>{
            return(
                <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} >
                        {eachItem.Details}
                </AccordionSummary>
                <AccordionDetails>
                        {eachItem.Summary}
                </AccordionDetails>
            </Accordion>
            );
    });

    return(
        <div>
           {ShowAccordion}
        </div>
    );
}

export default AccordianView;