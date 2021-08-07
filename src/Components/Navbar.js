import React from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core'

const useStyle = makeStyles({
    navbar:{
        width: '90vw',
        display: 'flex',
        flexFlow:'row',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    image:{
        display: 'flex',
        justifyContent:'flex-start',
        marginRight: '12%',
        ['@media (max-width:780px)']: { // eslint-disable-line no-useless-computed-key
            width: '9%',
            height: '9%',
            marginRight: '10%'
        }
    },
    nav:{
        fontSize: 50,
        marginLeft:'auto',
        marginRight:'auto',
        marginTop: '1.3%',
        ['@media (max-width:780px)']: { // eslint-disable-line no-useless-computed-key
            fontSize: 45,
            width: '40%',
            marginTop: '0.3%',
        },
        
    },
    navItem:{
        marginLeft: '3vw',
        ['@media (max-width:780px)']: { // eslint-disable-line no-useless-computed-key
            // marginLeft: '2vw',
            fontSize: 11,
            marginLeft: '3vw'
        },
        ['@media (max-width:780px && min-width:425px)']: { // eslint-disable-line no-useless-computed-key
            fontSize: 8,
            marginLeft: '1.5vw'
        },
        cursor: 'pointer'
    },
    buttons:{
        display: 'flex',
        justifyContent:'flex-end',
        width: '30%',
        alignItems: 'center',
        paddingLeft: "5%",
        marginTop: '1%',
        ['@media (max-width:780px)']: { // eslint-disable-line no-useless-computed-key
            paddingLeft: "3%",
            marginTop: 10,
            width: '40%'
        },
        ['@media (max-width:780px && min-width:425px)']: { // eslint-disable-line no-useless-computed-key
            width: '40%',
        }
    },
    btn:{
        marginLeft: '8%',
        ['@media (max-width:780px)']: { // eslint-disable-line no-useless-computed-key
            fontSize: 11,
        },
        ['@media (max-width:780px && min-width:425px)']: { // eslint-disable-line no-useless-computed-key
            fontSize: 6,
        }
    },
    login:{
        '&:hover':{
            backgroundColor: 'none'
        }
    }

})

function Navbar() {

    const classes=useStyle();

    return (
        <div className={classes.navbar}>
            <img className={classes.image} src="data:image/png;base64,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" alt="" />
            <div className={classes.nav}>
                <Typography
                    className={classes.navItem}
                    variant="subtitle1"
                    component="a"
                >
                    HOW TO USE
                </Typography>
                <Typography
                    className={classes.navItem}
                    variant="subtitle1"
                    component="a"
                >
                    ABOUT US
                </Typography>
                <Typography
                    className={classes.navItem}
                    variant="subtitle1"
                    component="a"
                >
                    CONTACT US
                </Typography>
            </div>
            <div className={classes.buttons}>
                <Button
                 className={classes.btn}
                >
                <Typography
                    className={classes.navItem, classes.login}
                    variant="subtitle1"
                    component="a"
                >
                    Login
                </Typography>
                </Button>
                <Button
                    className={classes.btn}
                    variant="contained" 
                    color="primary"
                >
                    GET STARTED
                </Button>
            </div>
        </div>
    )
}

export default Navbar
