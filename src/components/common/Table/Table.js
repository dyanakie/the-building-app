import {noImageFoundText} from '../../../constants/constants'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import {makeStyles} from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import './table.css'

const useStyles = makeStyles(theme => ({
    tableWrapper: {
        width: '70%',
        marginTop: '50px',
        marginLeft: '15%'
    },
    addIcon: {
        float: 'right',
        '&:hover': {
            cursor: 'pointer',
            color: 'rgb(117,147,202)'
        }
    },
    actionIcon: {
        textDecoration: 'none',
        '&:hover': {
            cursor: 'pointer',
            color: 'rgb(117,147,202)'
        }
    }
}))

const PropertyTable = ({data, onEdit, onDelete, onAddRow}) => {
    const classes = useStyles()

    const mapDataToRows = () =>
        data.map(({id, name, area, location, imageUrl}, index) => {
            return (
                <tr key={`${id}-${index}`}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{area}</td>
                    <td>{location}</td>
                    <td style={{height: '50px', textAlign: 'center'}}>
                        <img height='50px' width='50px' src={imageUrl} alt={noImageFoundText} />
                    </td>
                    <td style={{textAlign: 'center'}}>
                        <EditIcon className={classes.actionIcon} onClick={() => onEdit(id)} />
                        <DeleteIcon className={classes.actionIcon} onClick={() => onDelete(id)} />
                    </td>
                </tr>
            )
        })

    return (
        <div>
            <AddIcon className={classes.addIcon} onClick={onAddRow} fontSize='large' />
            <table>
                <tbody>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Area</th>
                        <th>Location</th>
                        <th>Image</th>
                        <th>Action</th>
                    </tr>
                    {mapDataToRows()}
                </tbody>
            </table>
        </div>
    )
}

export default PropertyTable
