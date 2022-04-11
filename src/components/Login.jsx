import React, { useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Alert } from '@mui/material';
import jsCookie from 'js-cookie';


const Login = ({isOpen, onLogin, error}) => {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    

  return (
    <Dialog open={isOpen} >
    <DialogTitle>login</DialogTitle>
    <DialogContent>
        {error && <Alert variant='standard' color='error'>{error}</Alert>}
      <TextField
        autoFocus
        margin="dense"
        id="userName"
        label="User Name"
        type="email"
        fullWidth
        variant="standard"
        value={userName}
        onChange={(e)=> setUserName(e.target.value)}
      />
      <TextField
        autoFocus
        margin="dense"
        id="password"
        label="Password"
        type="password"
        fullWidth
        variant="standard"
        value={password}
        onChange={(e)=> setPassword(e.target.value)}
      />
    </DialogContent>
    <DialogActions>
      <Button onClick={()=>onLogin(userName,password)}>Login</Button>
    </DialogActions>
  </Dialog>
  )
}

export default Login