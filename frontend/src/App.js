import MonteCarlo from './MonteCarlo/MonteCarlo'
import Footer from './components/Footer'
import Header from './components/Header'

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
