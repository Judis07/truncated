import Logo from './components/Logo/logo';
import Form from './components/Form/form';
import Banner from './components/Banner/banner';
import Footer from './components/Footer/footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <div>
        <header className="container">
          <Logo />
        </header>
        <main>
          <Form />
          <Banner />
        </main>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
