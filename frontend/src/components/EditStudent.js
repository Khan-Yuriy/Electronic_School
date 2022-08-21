import * as React from 'react';
import studentService from '../services/student.service';
import { useNavigate, useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';

export default function EditStudents() {

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
    const navigate = useNavigate();

    const { id } = useParams();
    const [name, setName] = React.useState('');
    const [surname, setSurname] = React.useState('');
    const [birthdate, setBirthdate] = React.useState('');
    const [specialty, setSpecialty] = React.useState('');

    const [errorEditedAlert, setErrorEditedAlert] = React.useState(false);

    const editStudent = (e) => {
        e.preventDefault();
        
        const student = {id, name, surname, birthdate, specialty};
        studentService.save(student)
          .then(response => {
              console.log('Student edited successfully', response.data);
              navigate("/home");
          })
          .catch(error => {
              console.log('Something went wrong: ', error);
              setErrorEditedAlert(true);
          })
    }

    return (
        <Box sx={style}>
        <Collapse in={errorEditedAlert}>
            <Alert severity="error"
            action={
                <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                    setErrorEditedAlert(false);
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
            Edit student
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <form onSubmit={(e) => editStudent(e)}>
                <TextField 
                    InputLabelProps={{shrink: true,}} 
                    value={name}
                    autoComplete={name}
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
                    autoComplete={surname}
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
                    autoComplete={birthdate}
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
                    autoComplete={specialty}
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
                    Edit
                </Button>
            </form>
        </Typography>
        </Box>
    )
}