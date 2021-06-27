import {makeStyles} from '@material-ui/core'
import {Field, Form, Formik} from 'formik'
import Grid from '@material-ui/core/Grid'

import * as Yup from 'yup'

const initialState = {
    id: '',
    name: '',
    area: '',
    location: '',
    imageUrl: ''
}

const ValidationSchema = Yup.object().shape({
    id: Yup.number()
        .integer('Must be a whole number.')
        .typeError('Must be a whole number.')
        .required('Field must not be empty.'),
    name: Yup.string().required('Field must not be empty.'),
    area: Yup.number()
        .typeError('Must be a number.')
        .required('Field must not be empty.')
})

const useStyles = makeStyles(theme => ({
    inputField: {
        marginLeft: '10px'
    },
    inputFieldWrapper: {
        marginTop: '30px'
    },
    formFooter: {
        marginTop: '30px',
        textAlign: 'center'
    },
    errorField: {
        fontSize: 'small',
        color: 'red'
    },
    cancelButton: {
        marginRight: '10px'
    }
}))

const PropertyForm = ({formData, onSubmit, onCancel}) => {
    const classes = useStyles()
    const ErrorField = ({errors, touched, fieldName}) =>
        errors[fieldName] && touched[fieldName] ? (
            <p className={classes.errorField}>{errors[fieldName]}</p>
        ) : null

    return (
        <Formik
            initialValues={formData || initialState}
            onSubmit={values => {
                onSubmit(values, formData)
            }}
            validationSchema={ValidationSchema}>
            {({errors, touched}) => (
                <Form>
                    <Grid container spacing={3}>
                        {!formData && (
                            <>
                                <Grid item xs={3}>
                                    <label htmlFor='Name'>Id: </label>
                                </Grid>
                                <Grid item xs={9}>
                                    <Field id='id' name='id' placeholder='Id' />
                                    <ErrorField fieldName='id' errors={errors} touched={touched} />
                                </Grid>
                            </>
                        )}
                    </Grid>
                    <Grid container spacing={3}>
                        <>
                            <Grid item xs={3}>
                                <label htmlFor='Name'>Name: </label>
                            </Grid>
                            <Grid item xs={9}>
                                <Field id='name' name='name' placeholder='Property Name' />
                                <ErrorField fieldName='name' errors={errors} touched={touched} />
                            </Grid>
                        </>
                    </Grid>

                    <Grid container spacing={3}>
                        <>
                            <Grid item xs={3}>
                                <label htmlFor='area'>Area: </label>
                            </Grid>
                            <Grid item xs={9}>
                                <Field id='area' name='area' placeholder='Area' />
                                <ErrorField fieldName='area' errors={errors} touched={touched} />
                            </Grid>
                        </>
                    </Grid>

                    <Grid container spacing={3}>
                        <>
                            <Grid item xs={3}>
                                <label htmlFor='location'>Location: </label>
                            </Grid>
                            <Grid item xs={9}>
                                <Field
                                    id='location'
                                    name='location'
                                    placeholder='Property Location'
                                    type='text'
                                />
                            </Grid>
                        </>
                    </Grid>

                    <Grid container spacing={3}>
                        <>
                            <Grid item xs={3}>
                                <label htmlFor='imageUrl'>ImageUrl: </label>
                            </Grid>
                            <Grid item xs={9}>
                                <Field
                                    id='imageUrl'
                                    name='imageUrl'
                                    placeholder='Property Image Url'
                                    type='text'
                                />
                            </Grid>
                        </>
                    </Grid>

                    <div className={classes.formFooter}>
                        <button className={classes.cancelButton} onClick={onCancel} type='button'>
                            Cancel
                        </button>
                        <button className={classes.submitButton} type='submit'>
                            Submit
                        </button>
                    </div>
                </Form>
            )}
        </Formik>
    )
}

export default PropertyForm
