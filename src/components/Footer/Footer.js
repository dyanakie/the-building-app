import { makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    width: "100%",
    height: "40px",
    opacity: 0.7,
    marginTop: "50px",
    backgroundColor: "rgb(228,224,228)",
    overflowX: 'hidden',
    // marginBottom: '0px',
    // position: 'fixed',
    padding: '10px 10px 0px 10px',
    position: 'fixed',
    bottom: 0
  },
  link: {
    textDecoration: "none",
    marginLeft: '50px',
    fontSize: 'large',
    "&:hover": {
      cursor: "pointer",
      color: "rgb(117,147,202)",
    },
  },
  appName: {
    fontSize: 'large',
    // float: 'right'
  }
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <Grid container spacing={1}>
        <Grid item xs={9}>
           <Link to='/' className={classes.link}>Homepage</Link>
           <Link to='/details' className={classes.link}>Details</Link>
          </Grid>
          <Grid item xs={3}>
            <span className={classes.appName}>The Building App</span>
          </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
