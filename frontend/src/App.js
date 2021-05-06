import MonteCarlo from './MonteCarlo/MonteCarlo'
import Footer from './components/Footer'
import Header from './components/Header'
import {BrowserRouter as Router, Route}  from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header />
      <main style={{margin:"20px", }}>
        <MonteCarlo />
      </main>
      <Footer />
    </div>
  );
}

export default App;
