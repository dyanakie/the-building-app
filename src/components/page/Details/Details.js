import {makeStyles} from '@material-ui/core'
import Footer from '../../Footer/Footer'
import Header from '../../Header/Header'
import PropertyTable from '../../common/Table/Table'
import {mockTableData} from '../../../mockData/mockData'
import {useEffect, useState} from 'react'
import FormModal from '../../common/Modal/Modal'

const useStyles = makeStyles(theme => ({
    tableWrapper: {
        width: '70%',
        marginTop: '50px',
        marginLeft: '15%'
    },
    link: {
        textDecoration: 'none',
        '&:hover': {
            cursor: 'pointer',
            color: 'rgb(117,147,202)'
        }
    }
}))

const initialModalState = {
    opened: false,
    formData: null
}

const Details = () => {
    const [data, setData] = useState([])
    const [modalInfo, setModalInfo] = useState(initialModalState)
    const classes = useStyles()

    useEffect(() => {
        // here on mount we can make a call or set mock data
        setData(mockTableData)
    }, [])

    const onAddRow = () => {
        setModalInfo({
            opened: true,
            formData: null
        })
    }

    const onEdit = itemId => {
        setModalInfo({
            opened: true,
            formData: data.find(({id}) => id === itemId) || {}
        })
    }

    const onDelete = itemId => {
        const newData = data.filter(({id}) => id !== itemId)
        setData(newData)
    }

    const onSubmit = (formData, editMode = false) => {
        if (editMode) {
            const newData = data.filter(({id}) => id !== formData.id)
            const newSortedData = [...newData, {...formData}].sort((a, b) => a.id - b.id)
            setData(newSortedData)
        } else {
            setData([...data, {...formData}].sort((a, b) => a.id - b.id))
        }
        setModalInfo(initialModalState)
    }

    const onCancel = () => {
        setModalInfo(initialModalState)
    }

    return (
        <div>
            <Header />
            <div className={classes.tableWrapper}>
                <PropertyTable data={data} onAddRow={onAddRow} onEdit={onEdit} onDelete={onDelete} />
                <FormModal modalInfo={modalInfo} onSubmit={onSubmit} onCancel={onCancel} />
            </div>
            <Footer />
        </div>
    )
}

export default Details
