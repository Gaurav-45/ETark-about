import React from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core'
import TechProblem from './TechProblem'
import NonTechProblem from './NonTechProblem'

const useStyle = makeStyles({

    about:{
        width:'48%',
        display:'flex',
        flexFlow: 'column',
        marginLeft: 'auto',
        marginRight: 'auto',
        // marginTop: '5vh'
        marginBottom: '5vh'
    },
    text:{
        marginTop: 20
    },
    headers:{
        marginTop: '5vh',
        fontWeight: 500,
        ['@media (max-width:780px)']: { // eslint-disable-line no-useless-computed-key
            fontSize: 23
        }
    },
    subheaders:{
        marginTop: '5vh',
        fontWeight: 500,
        ['@media (max-width:780px)']: { // eslint-disable-line no-useless-computed-key
            fontSize: 18
        }
    }

})

function About() {

    const classes=useStyle();

    return (
        <div className={classes.about}>
            <Typography
                className={classes.headers}
                variant="h4"
                component="h1"
                align='center'
                fontWeight="800"
            >
                About us
            </Typography>
            <Typography
                className={classes.text}
                variant="body1"
                component="p"
            >
            ETark is an automated complaint resolution platform for smartphone complaints. We help in resolving both technical and non-technical smartphone problems via. our service offerings. ETark was conceptualized after identifying the plight of hapless smartphone customers and the inefficiency of the service centers.
            </Typography>
            <Typography
                className={classes.text}
                variant="body1"
                component="p"
            >
            How ETark helps customers?
            </Typography>
            <Typography
                className={classes.subheaders} 
                variant="h6"
                component="h3"
                align='center'
            >
                Resolving technical problems :
            </Typography>
            <Typography
                className={classes.text}
                variant="body1"
                component="p"
            >
                Having a technical problem with your smartphone can be disastrous because unlike any other gadget, a smartphone lets you stay connected with the world and manage all your electronic records. The current approaches that a user usually takes :            
            </Typography>

            {/* Tech problems setion with collapsable divs */}
            <TechProblem/>

            <Typography
                className={classes.subheaders} 
                variant="h6"
                component="h3"
                align='center'
            >
                Resolving non-technical problems :
            </Typography>
            <Typography
                className={classes.text}
                variant="body1"
                component="p"
            >
                Problems like missing, damaged or duplicate items during purchase or Payment related issues like improper bill, wrongful deductions etc are some of the examples of non- technical problems that customers face.
            </Typography>
            <Typography
                className={classes.text}
                variant="body1"
                component="p"
            >
                The ideal way to solve this is to reach out to the seller (e-commerce firm/ offline retailer) or the device manufacturer (e.g. Samsung, Apple etc.). However a customer’s voice can go unheard in a discussion with the other party. So to lend a strength to the customer’s voice, we do an instant analysis of his/ her complaint and share certain reports with him/ her which can help identify the merit of the complaint/ grievance.
            </Typography>

            <NonTechProblem/>
        </div>
    )
}

export default About
