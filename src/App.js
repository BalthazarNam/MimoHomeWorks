import './App.css';
import Header from './Header.js'
import Page from './Page.js'
import Footer from './Footer.js'

function App() {

  const user = 'Balthazar';
  const test = 'Test'


  return (
    <div className="containermain">
      <Header/>
      <Page/>
      <Footer/>
    </div>
  );
}

export default App;