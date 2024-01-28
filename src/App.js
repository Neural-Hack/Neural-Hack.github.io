import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import Landing from './pages/Landing'
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </Router>
  );
}

export default App;
