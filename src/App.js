import './App.css';
import { Container } from '@mui/material';

import { BrowserRouter } from "react-router-dom";
import { Router } from './components/Router';

function App() {

  return (
    <Container>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Container>

  );
}

export default App;
