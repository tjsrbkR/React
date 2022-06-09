import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import Main from './component/Main';

function App() {
  return (
    <div>
        <Header />
        <Main name = {9} color = "red"/>
        <Footer />
    </div>
  );
}

export default App;
