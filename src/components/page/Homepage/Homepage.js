import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import Footer from "../../Footer/Footer";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    width: "50%",
    marginLeft: "25%",
    textAlign: "center",
    minHeight: '900px'
  },
  link: {
    textDecoration: "none",
    "&:hover": {
      cursor: "pointer",
      color: "rgb(117,147,202)",
    },
  },
}));

const Homepage = () => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.wrapper}>
        <div>
          <Link to="/details" className={classes.link}>
            <h2>Buildings</h2>
          </Link>
          <img
            width="100%"
            src="https://cdn.dribbble.com/users/485292/screenshots/6758663/houserevealanimate.png"
            alt="https://i.ytimg.com/vi/gVwV_vnS_rg/maxresdefault.jpg"
          />
        </div>
        <div className={classes.textBody}>
          One of the greatest aspects of this great city we call home is that as
          Sofia grew it was influenced by many styles, architects and builders.
          This means that nearly every style of home is represented in the metro
          area from classic historical architecture to modern building styles.
          If you like the sculptured lines of historic mansions or the modern
          clean look of glass and open space, this part of the country has
          everything you have always wanted.
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
