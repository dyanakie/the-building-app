import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import Footer from "../../Footer/Footer";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    width: "50%",
    marginLeft: "25%",
    textAlign: "center",
  },
  link: {
    textDecoration: "none",
    "&:hover": {
      cursor: "pointer",
      color: "rgb(117,147,202)",
    },
  },
}));

const Details = () => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.wrapper}>
        Details Page
      </div>
      <Footer />
    </div>
  );
};

export default Details;

