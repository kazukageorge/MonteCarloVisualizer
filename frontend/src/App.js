import MonteCarlo from './MonteCarlo/MonteCarlo'
import Footer from './components/Footer'
import Header from './components/Header'
import Homepage from './Homepage/Homepage'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <Router>

      <div className="App">
        <Header />
        <main style={{ margin: "20px", }}>
          <Route path = '/' component={Homepage} exact />
          <Route path = '/pi' component={MonteCarlo} />

        </main>
        <Footer />
      </div>
    </Router>

  );
}

export default App;
