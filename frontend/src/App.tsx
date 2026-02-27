import AnnouncementBar from './components/AnnouncementBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Procedures from './components/Procedures';
import Dentistry from './components/Dentistry';
import Partners from './components/Partners';
import Services from './components/Services';
import Doctors from './components/Doctors';
import ConsultationForm from './components/ConsultationForm';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <AnnouncementBar />
      <Navbar />
      <main>
        <Hero />
        <Procedures />
        <Dentistry />
        <Partners />
        <Services />
        <Doctors />
        <ConsultationForm />
      </main>
      <Footer />
    </div>
  );
}
