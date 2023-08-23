import './App.css';
import AboutSection from './Components/AboutSection/AboutSection';
import Banner from './Components/Banner/Banner';
import ClassesSection from './Components/ClassesSection/ClassesSection';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import PricingSection from './Components/PricingSection/PricingSection';
import ScheduleSection from './Components/ScheduleSection/ScheduleSection';
import ServiceSection from './Components/ServiceSection/ServiceSection';
import TrainerSection from './Components/TrainerSection/TrainerSection';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <AboutSection />
      <ServiceSection />
      <ClassesSection />
      <PricingSection />
      <ScheduleSection />
      <TrainerSection />
      <Footer />
    </div>
  );
}

export default App;
