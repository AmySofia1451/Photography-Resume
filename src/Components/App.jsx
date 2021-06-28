import {React, useState} from 'react';
import ReactDOM from 'react-dom';
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Home from "./Home.jsx"
import Pricing from "./Pricing.jsx";
import Form from "./Form.jsx";
import About from "./About.jsx";
import Contact from "./Contact.jsx";
import PhotographyPage from './PhotographyPage.jsx';
import FoodPhotos from '../PhotoLists/foodPhotos.js';
import AdvertisingPhotos from '../PhotoLists/advertisingPhotos.js';

//import Photo from "./Photos.jsx";
//import logo from './logo.svg';
import '../App.css';

function App() {
  const [showHome, setShowHome] = useState(true);
  const [showPricing, setShowPricing] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showFoodPhotos, setShowFoodPhotos] = useState(false);
  const [showAdvertPhotos, setShowAdvertPhotos] = useState(false);

  function hideComponents() {
    setShowHome(false);
    setShowAbout(false);
    setShowPricing(false);
    setShowForm(false);
    setShowContact(false);
    setShowFoodPhotos(false);
    setShowAdvertPhotos(false);

  }

  function showHomeComponent() {
    hideComponents();
    setShowHome(true);
  }

  function showPricingComponent() {
    hideComponents();
    setShowPricing(true);
  }

  function showFormComponent() {
    hideComponents();
    setShowForm(true);
  }

  function showAboutComponent() {
    hideComponents();
    setShowAbout(true);
  }

  function showContactComponent() {
    hideComponents();
    setShowContact(true);
  }

  function showFoodComponent() {
    hideComponents();
    setShowFoodPhotos(true);
  }

  function showAdvertComponent() {
    hideComponents();
    setShowAdvertPhotos(true);
  }

  return (
    <div className="App">
      <Header onHomeClick={showHomeComponent} onPricingClick={showPricingComponent}
      onFormClick={showFormComponent} onAboutClick={showAboutComponent} onContactClick={showContactComponent}/>
      {showHome ? <Home onFoodClick={showFoodComponent} onAdvertClick={showAdvertComponent}/> : null}
      {showFoodPhotos ? <PhotographyPage images={FoodPhotos} /> : null}
      {showAdvertPhotos ? <PhotographyPage images={AdvertisingPhotos} /> : null}
      {showPricing ? <Pricing /> : null}
      {showForm ? <Form /> : null}
      {showAbout ? <About /> : null}
      {showContact ? <Contact /> : null}
      <Footer />
    </div>
  );
}

export default App;
