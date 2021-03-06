import {BrowserRouter,Route} from 'react-router-dom'
import './App.css';
import Join from './components/Join/Join'
import Chat from './components/Chat/Chat'

function App() {
  return (
    <BrowserRouter>
      <Route path='/' exact component={Join}/>
      <Route path='/chat' component={Chat}/>
    </BrowserRouter>
  );
}

export default App;
