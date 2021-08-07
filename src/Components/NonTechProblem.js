import React from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core'
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const useStyle = makeStyles({
    accordion:{
        marginTop: "3%",
        paddingTop: "1.5%",
        paddingBottom: "1.5%",
        paddingLeft: "2%",
        paddingRight: "2%"
    },
    heading:{
        ['@media (max-width:780px)']: { // eslint-disable-line no-useless-computed-key
            fontSize: 13
        }
    },
    collapse:{
        flexFlow: 'column'
    },
    txt:{
        ['@media (max-width:780px)']: { // eslint-disable-line no-useless-computed-key
            fontSize: 13
        }
    }
})

function NonTechProblem() {

    const classes=useStyle();
    return (
        <div>

            <Accordion className={classes.accordion}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="tile1"
                >
                    <Typography 
                        className={classes.heading}
                        variant="h6"
                        color="primary"
                    >
                        Chances of winning
                    </Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.collapse}>
                    <br/>
                    <Typography
                        className={classes.txt}
                        variant='body1'
                        component="p"
                        m="t"
                    >
                        Chances of winning tells you how likely you are to win in a consumer court had the complaint been filed there               
                    </Typography>
                    <br/>
                    <Typography
                        className={classes.txt}
                        variant='body1'
                        component="p"
                        m="t"
                    >
                        Or Alternatively,
                    </Typography>
                    <br/>
                    <Typography
                        className={classes.txt}
                        variant='body1'
                        component="p"
                        m="t"
                    >
                        How likely you are to win in a negotiation with the other party (device manufacturer or seller) by quoting your winning chances in a consumer court as a reference
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion className={classes.accordion}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="tile2"
                >
                    <Typography 
                        className={classes.heading}
                        variant="h6"
                        color="primary"
                    >
                        Expected compensation
                    </Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.collapse}>
                    <br/>
                    <Typography
                        className={classes.txt}
                        variant='body1'
                        component="p"
                        m="t"
                    >
                        Expected compensation tells you what compensation (free servicing, product/ part replacement or monetary compensation) you are likely to get from the other party had your complaint been filed in a consumer court
                    </Typography>
                    <br/>
                    <Typography
                        className={classes.txt}
                        variant='body1'
                        component="p"
                        m="t"
                    >
                        Or Alternatively,
                    </Typography>
                    <br/>
                    <Typography
                        className={classes.txt}
                        variant='body1'
                        component="p"
                        m="t"
                    >
                        what compensation (free servicing, product/ part replacement) you are likely to get from the other party in a negotiation
                    </Typography>
                </AccordionDetails>
            </Accordion>
            
        </div>
    )
}

export default NonTechProblem
