import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Container } from '@mui/material';
import studentService from '../services/student.service';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    minWidth: '50%'
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    minWidth: '50%'
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
}));

export default function Students() {
    const[students, setStudents] = React.useState([]);
    const [name, setName] = React.useState('');
    const [surname, setSurname] = React.useState('');
    const [birthdate, setBirthdate] = React.useState('');
    const [specialty, setSpecialty] = React.useState('');

    const [openAdd, setOpenAdd] = React.useState(false);
    const handleOpenAdd = () => setOpenAdd(true);
    const handleCloseAdd = () => {
      setOpenAdd(false);
      setSuccessAddedAlert(false);
      setErrorAddedAlert(false);
      setName('');
      setSurname('');
      setBirthdate('');
      setSpecialty('');
    }

    const [openDelete, setOpenDelete] = React.useState(false);
    const handleOpenDelete = () => setOpenDelete(true);
    const handleCloseDelete = () => setOpenDelete(false);

    const [successAddedAlert, setSuccessAddedAlert] = React.useState(false);
    const [successDeletedAlert, setSuccessDeletedAlert] = React.useState(false);
    const [errorAddedAlert, setErrorAddedAlert] = React.useState(false);
    const [errorDeletedAlert, setErrorDeletedAlert] = React.useState(false);

    React.useEffect(()=>{
        init();
    }, [])

    const init = () => {
      studentService.getAll()
        .then(response => {
          setStudents(response.data);
        })
        .catch(error => {
          console.log("Something went wrong: ", error);
        })
    }

    const handleDelete = id =>{
      studentService.remove(id)
        .then(response => {
          console.log('Student deleted successfully!', response.data);
          init();
          setSuccessDeletedAlert(true);
        })
        .catch(error => {
          console.log('Somethign went wrong: ', error)
          setErrorDeletedAlert(true);
        });
      setOpenDelete(false);
    }

    const addStudent = (e) => {
        e.preventDefault();
        
        const student = {name, surname, birthdate, specialty};
        studentService.add(student)
          .then(response => {
              console.log('Student added successfully', response.data);
              setSuccessAddedAlert(true);
              setName('');
              setSurname('');
              setBirthdate('');
              setSpecialty('');
              init();
          })
          .catch(error => {
              console.log('Something went wrong: ', error);
              setErrorAddedAlert(true);
          })
    }

  return (
    <Container style={{width:'75%'}}>
      <Collapse in={successDeletedAlert} style={{ marginTop:'10px'}}>
        <Alert severity="success"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setSuccessDeletedAlert(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          Student deleted successfully!
        </Alert>
      </Collapse>
      <Collapse in={errorDeletedAlert} style={{ marginTop:'10px'}}>
        <Alert severity="error"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setErrorDeletedAlert(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          Something went wrong!
        </Alert>
      </Collapse>
        <TableContainer component={Paper} style={{ marginTop:'10px'}}>
        <Table aria-label="customized table" >
            <TableHead>
            <TableRow>
                <StyledTableCell>ID</StyledTableCell>
                <StyledTableCell align="right">Name</StyledTableCell>
                <StyledTableCell align="right">Surname</StyledTableCell>
                <StyledTableCell align="right">Birthdate</StyledTableCell>
                <StyledTableCell align="right">Specialty</StyledTableCell>
                <StyledTableCell align="right">
                    
                <Button variant="contained" style={{backgroundColor:'green'}} onClick={handleOpenAdd}>Add new</Button>
                <Modal
                  open={openAdd}   
                  onClose={handleCloseAdd}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <Collapse in={successAddedAlert}>
                      <Alert severity="success"
                        action={
                          <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={() => {
                              setSuccessAddedAlert(false);
                            }}
                          >
                            <CloseIcon fontSize="inherit" />
                          </IconButton>
                        }
                        sx={{ mb: 2 }}
                      >
                        New student added successfully!
                      </Alert>
                    </Collapse>
                    <Collapse in={errorAddedAlert}>
                      <Alert severity="error"
                        action={
                          <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={() => {
                              setErrorAddedAlert(false);
                            }}
                          >
                            <CloseIcon fontSize="inherit" />
                          </IconButton>
                        }
                        sx={{ mb: 2 }}
                      >
                        Something went wrong!
                      </Alert>
                    </Collapse>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                      Add new student
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <form onSubmit={(e) => addStudent(e)}>
                            <TextField 
                                InputLabelProps={{shrink: true,}} 
                                value={name} 
                                onChange={(e) => setName(e.target.value)}
                                id="name" 
                                type="text" 
                                label="Student name" 
                                variant="filled" 
                                fullWidth 
                                required/>
                            <TextField 
                                InputLabelProps={{shrink: true,}} 
                                value={surname} 
                                onChange={(e) => setSurname(e.target.value)}
                                id="surname" 
                                type="text" 
                                label="Student surname" 
                                variant="filled" 
                                fullWidth 
                                style={{marginTop:'10px'}} 
                                required/>
                            <TextField 
                                InputLabelProps={{shrink: true,}} 
                                value={birthdate} 
                                onChange={(e) => setBirthdate(e.target.value)}
                                id="birthdate" 
                                type="date" 
                                label="Student birthdate" 
                                variant="filled" 
                                fullWidth 
                                style={{marginTop:'10px'}} 
                                required/>
                            <TextField 
                                InputLabelProps={{shrink: true,}} 
                                value={specialty} 
                                onChange={(e) => setSpecialty(e.target.value)}
                                id="specialty" 
                                type="text" 
                                label="Student specialty" 
                                variant="filled" 
                                fullWidth 
                                style={{marginTop:'10px'}} 
                                required/>
                            <Button 
                                variant="contained" 
                                style={{backgroundColor:'blue', marginTop:'10px'}} 
                                type="submit">
                                Add
                            </Button>
                        </form>
                    </Typography>
                  </Box>
                </Modal>
                </StyledTableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {students.map((student) => (
                <StyledTableRow key={student.id}>
                <StyledTableCell component="th" scope="row">
                    {student.id}
                </StyledTableCell>
                <StyledTableCell align="right">{student.name}</StyledTableCell>
                <StyledTableCell align="right">{student.surname}</StyledTableCell>
                <StyledTableCell align="right">{student.birthdate}</StyledTableCell>
                <StyledTableCell align="right">{student.specialty}</StyledTableCell>
                <StyledTableCell align="right">
                <a style={{textDecoration:'none'}} href={'/edit/'+student.id}>
                  <Button variant="contained" style={{backgroundColor:'blue', marginRight: '10px'}}>Edit</Button>
                </a>
                  <Button variant="contained" style={{backgroundColor:'red'}} onClick={handleOpenDelete}>Delete</Button>
                  <Dialog
                    open={openDelete}
                    onClose={handleCloseDelete}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                  >
                    <DialogTitle id="alert-dialog-title">
                      {"Are you sure?"}
                    </DialogTitle>
                    <DialogContent>
                      <DialogContentText id="alert-dialog-description">
                        Student will be deleted.
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={handleCloseDelete}>No</Button>
                      <Button onClick={(e) => {handleDelete(student.id)}} autoFocus>
                        Yes
                      </Button>
                    </DialogActions>
                  </Dialog>
                </StyledTableCell>
                </StyledTableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
    </Container>
  );
}