import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    title: {
        flexGrow: 1
    }
}))

export default function Header() {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <AppBar position='static' color='primary'>
                <Toolbar>
                    <Typography variant='h4' className={classes.title}>
                        Welcome
                    </Typography>
                    <AccountCircleIcon fontSize='large' />
                </Toolbar>
            </AppBar>
        </div>
    )
}
