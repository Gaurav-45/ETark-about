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
        paddingRight: "2%",
        ['@media (max-width:780px)']: { // eslint-disable-line no-useless-computed-key
            fontSize: 10
        }
    },
    heading:{
        ['@media (max-width:780px)']: { // eslint-disable-line no-useless-computed-key
            fontSize: 13
        }
    },
    subheading:{
        fontWeight: 600,
        ['@media (max-width:780px)']: { // eslint-disable-line no-useless-computed-key
            fontSize: 13
        }
    }, 
    collapse:{
        flexFlow: 'column'
    },
    subpoints:{
        paddingLeft:"8%",
        ['@media (max-width:780px)']: { // eslint-disable-line no-useless-computed-key
            fontSize: 13
        }
    },
    ul :{
        content: "•",
        fontSize: '110%', 
        paddingLeft: "12%",
        ['@media (max-width:780px)']: { // eslint-disable-line no-useless-computed-key
            fontSize: 13
        }
    },
    txt:{
        ['@media (max-width:780px)']: { // eslint-disable-line no-useless-computed-key
            fontSize: 13
        }
    }

})


function TechProblem() {

    const classes=useStyle();

    return (
        <div >
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
                    Visit an authorized service center
                </Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.collapse}>
                <Typography
                    className={classes.subheading}
                    variant='body1'
                    component="p"
                >
                While an authorized service center is always recommended, but as a user, you don’t know if:
                </Typography>
                
                <ol type="A">
                    <Typography
                        className={classes.subpoints}
                        variant='body1'
                        component="p"
                        m="t"
                        >
                    A. Parts are available at the service center to service your device
                    </Typography>
                    <br/>
                    <Typography
                        className={classes.subpoints}
                        variant='body1'
                        component="p"
                        m="t"
                        >
                    B. Your device would be considered within warranty by the service center
                    </Typography>
                    <br/>
                    <Typography
                        className={classes.subpoints}
                        variant='body1'
                        component="p"
                        m="t"
                        >
                    C. The exact problem in your device and the price to be paid to fix that
                    </Typography>
                </ol>
                <Typography
                    className={classes.txt}
                    variant='body1'
                    component="p"
                    m="t"
                >
                All this demands you to visit the service center and wait in a queue with other customers which can often take hours with the possibility of parts not available or the device not considered within warranty by the service center or the quoted price of servicing out of your budget!
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
                    Visit an unauthorized service center
                </Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.collapse}>
                <Typography
                    className={classes.subheading}
                    variant='body1'
                    component="p"
                >
                    Although an unauthorized service center might seem light on your pocket, this route is never recommended because :                </Typography>
                <br/>
                <ul className={classes.subpoints, classes.ul}>
                    <li >
                        <Typography
                            className={classes.txt}
                            variant='body1'
                            component="p"
                            m="t"
                            >
                            Due to the poor quality of servicing, they often result in frequent annual repairs for the same issue or some other problem thus making the actual cost of repair for that phone way higher than the cost of repair by an authorized service center                    
                        </Typography>
                    </li>
                    <br/>
                    <li >
                        <Typography
                            className={classes.txt}
                            variant='body1'
                            component="p"
                            m="t"
                            >
                            Your personal data could be retrieved from your device even if you have removed the same from your device. So due to low accountability of unauthorized service centers, data could be stolen from your device during servicing.                   
                        </Typography>
                    </li>
                </ul>
            </AccordionDetails>
      </Accordion>


      <Accordion className={classes.accordion}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="tile3"
            >
                <Typography 
                    className={classes.heading}
                    variant="h6"
                    color="primary"
                >
                    Book for a home visit repair service 
                </Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.collapse}>
                <Typography
                    className={classes.subheading}
                    variant='body1'
                    component="p"
                >
                   Home visit repair services are quite popular nowadays due to the convenience of home repair that they promise but this should be avoided due to the following reasons:                
                </Typography>
                <br/>
                <ul className={classes.subpoints, classes.ul}>
                    <li >
                        <Typography
                            className={classes.txt}
                            variant='body1'
                            component="p"
                            m="t"
                            >
                            Most of the home repair services don’t have any authorization from the device manufacture to provide servicing, thus the accountability and quality of servicing is low
                        </Typography>
                    </li>
                    <br/>
                    <li >
                        <Typography
                            className={classes.txt}
                            variant='body1'
                            component="p"
                            m="t"
                        >
                        Many a times your device demands a part replacement which may not be available for the home visit repair agent at that point and post their inspection of the device at your location, they might take your device to their service center thus causing an additional delay in the servicing of the device
                        </Typography>
                    </li>
                </ul>
            </AccordionDetails>
      </Accordion>


      <Accordion className={classes.accordion}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="tile4"
            >
                <Typography 
                    className={classes.heading}
                    variant="h6"
                    color="primary"
                >
                    Device Insurance companies
                </Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.collapse}>
                <Typography
                    className={classes.subheading}
                    variant='body1'
                    component="p"
                >
                    Although device Insurance companies promise to insure your device from future damage or malfunctioning:                
                </Typography>
                <br/>
                <Typography
                    className={classes.txt}
                    variant='body1'
                    component="p"
                    m="t"
                >
                    They often result in long waiting time to get clearance from the smartphone manufacturer to get the ensuing servicing covered which offsets the cost savings that they promise through their insurance                
                </Typography>
                <br/>
                <Typography
                    className={classes.txt}
                    variant='body1'
                    component="p"
                    m="t"
                >
                    All these approaches have their own share of flaws.
                </Typography>
                <br/>
                <Typography
                    className={classes.txt}
                    variant='body1'
                    component="p"
                    m="t"
                >
                    ETark firmly believes that the best way to solve any technical issue is through authorized service centers only provided the inefficiencies of the service centers are removed and the customer doesn’t have to go through any hassle. This is exactly where we step in and we ensure that both the customer and the service center are seamlessly connected!
                </Typography>
                
                
            </AccordionDetails>
      </Accordion>
    </div>  
    )
}

export default TechProblem
