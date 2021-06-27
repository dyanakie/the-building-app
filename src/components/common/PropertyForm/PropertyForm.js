import { makeStyles } from "@material-ui/core";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";

const initialState = {
  id: "",
  name: "",
  area: "",
  location: "",
  imageUrl: "",
};

const ValidationSchema = Yup.object().shape({
  id: Yup.number()
    .integer("Must be a whole number.")
    .typeError("Must be a whole number.")
    .required("Field must not be empty."),
  name: Yup.string().required("Field must not be empty."),
  area: Yup.number()
    .typeError("Must be a number.")
    .required("Field must not be empty."),
});

const useStyles = makeStyles((theme) => ({
  inputField: {
    marginLeft: "10px",
  },
  inputFieldWrapper: {
    marginTop: "30px",
  },
  formFooter: {
    marginTop: "30px",
    textAlign: "center",
  },
  errorField: {
    fontSize: "small",
    color: "red",
  },
  cancelButton: {
    marginRight: "10px",
  },
}));

const PropertyForm = ({ formData, onSubmit, onCancel }) => {
  const classes = useStyles();
  const ErrorField = ({ errors, touched, fieldName }) => {
    return errors[fieldName] && touched[fieldName] ? (
      <p className={classes.errorField}>{errors[fieldName]}</p>
    ) : null;
  };

  return (
    <Formik
      initialValues={formData || initialState}
      onSubmit={(values) => {
        onSubmit(values, formData);
      }}
      validationSchema={ValidationSchema}
    >
      {({ errors, touched }) => (
        <Form>
          <div className={classes.inputFieldWrapper}>
            {!formData && (
              <>
                <label htmlFor="Name">Id: </label>
                <Field id="id" name="id" placeholder="Id" />
                <ErrorField fieldName="id" errors={errors} touched={touched} />
              </>
            )}
          </div>

          <div className={classes.inputFieldWrapper}>
            <label htmlFor="Name">Name: </label>
            <Field id="name" name="name" placeholder="Property Name" />
            <ErrorField fieldName="name" errors={errors} touched={touched} />
          </div>

          <div className={classes.inputFieldWrapper}>
            <label htmlFor="area">Area: </label>
            <Field id="area" name="area" placeholder="Area" />
            <ErrorField fieldName="area" errors={errors} touched={touched} />
          </div>

          <div className={classes.inputFieldWrapper}>
            <label htmlFor="location">Location: </label>
            <Field
              id="location"
              name="location"
              placeholder="Property Location"
              type="text"
            />
          </div>
          <div className={classes.inputFieldWrapper}>
            <label htmlFor="imageUrl">ImageUrl: </label>
            <Field
              id="imageUrl"
              name="imageUrl"
              placeholder="Property Image Url"
              type="text"
            />
          </div>

          <div className={classes.formFooter}>
            <button
              className={classes.cancelButton}
              onClick={onCancel}
              type="button"
            >
              Cancel
            </button>
            <button className={classes.submitButton} type="submit">
              Submit
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default PropertyForm;
