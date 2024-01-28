import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import Landing from './components/pages/Landing'

function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Routes>
        <Route path="/" element={<Landing/>}/>
      </Routes>
    </Router>
  );
}

export default App;
