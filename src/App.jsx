// https://dribbble.com/shots/21047744-Shoe-e-commerce-website-design
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Oferted from './components/Oferted/Oferted';
import OurCollection from './components/OurCollection/OurCollection';
import Newsletter from './components/Newsletter/Newsletter';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Hero></Hero>
      <Oferted></Oferted>
      <OurCollection></OurCollection>
      <Newsletter></Newsletter>
      <Footer></Footer>
    </div>
  );
}

export default App;
