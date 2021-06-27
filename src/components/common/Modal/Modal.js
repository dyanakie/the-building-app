import Modal from '@material-ui/core/Modal'
import {Grid} from '@material-ui/core'
import './modal.css'
import PropertyForm from '../PropertyForm/PropertyForm'

const FormModal = ({modalInfo: {opened, formData}, handleClose, onSubmit, onCancel}) => (
    <Modal open={opened} onClose={handleClose}>
        <Grid container justify='center'>
            <div className='modal-container'>
                <PropertyForm formData={formData} onSubmit={onSubmit} onCancel={onCancel} />
            </div>
        </Grid>
    </Modal>
)

export default FormModal
