import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import VideoDialog from './VideoDialog';
import { rows } from './Data';

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton aria-label='expand row' size='small' onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component='th' scope='row'>
          {row.name}
        </TableCell>
        <TableCell align='right'>{row.rec} sec.</TableCell>
        <TableCell align='right'>{row.rest} sec.</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout='auto' unmountOnExit>
            <Box margin={1}>
              <Typography variant='h6' gutterBottom component='div'>
                Descrizione Esercizio: {row.name}
              </Typography>
              <Typography gutterBottom align='justify' style={{ fontSize: '12px' }}>
                {row.description}
              </Typography>
              <Box style={{ marginTop: '1rem' }}>
                <VideoDialog name={row.name} url={row.url} />
              </Box>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

export default function Workout() {
  return (
    <TableContainer component={Paper} style={{ margin: `0 auto`, maxWidth: `600px`, width: `100%` }}>
      <Table aria-label='collapsible table'>
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Esercizio</TableCell>
            <TableCell align='right'>Fase Attiva</TableCell>
            <TableCell align='right'>Recupero</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
