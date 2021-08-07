import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './Components/Navbar';
import About from './Components/About';
import { makeStyles } from '@material-ui/core'
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';

const theme = createTheme({
  palette: {
    // primary: blue,
    primary: {
      main: '#1565c0',
    },
  },
  typography: {
   "fontFamily": `"Poppins", "Helvetica", "Arial", sans-serif`,
  //  "fontSize": 10,
   "fontWeightLight": 300,
   "fontWeightRegular": 400,
   "fontWeightMedium": 600,
  //  ['@media (max-width:780px)']: { // eslint-disable-line no-useless-computed-key
  //   "fontSize": 10
  //  }

  '@media (min-width:780px)': {
    'fontSize': 10,
  }
  }
});


const useStyle = makeStyles({
  app:{
    display:'flex',
    flexFlow:'column'
  }
})  

function App() {

  const classes=useStyle();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.app}>
        <Router>
          <Switch>
            <Route path="/">
              <Navbar/>
              <About/>
            </Route>
          </Switch>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
