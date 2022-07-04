import Paperbase from "./Components/Paperbase";
import {BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Paperbase/>
      </BrowserRouter>
    </div>
  );
}

export default App;
