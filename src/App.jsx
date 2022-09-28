
import './App.css';
import Body from './Components/Body/Body';
import Navbar from './Components/Navbar/Navbar';
import Social from './Components/Social/Social';

function App() {
  return (
    <>
     <div className="container">
           <Navbar></Navbar>
           <Body></Body>
           <Social></Social>
     </div>
    </>
  );
}

export default App;
