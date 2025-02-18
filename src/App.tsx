import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LoadingScreen } from './components/common/LoadingScreen';
import { SchoolCodeEntry } from './pages/SchoolCodeEntry';
import { ProgramHero } from './pages/ProgramHero';
import { ProgramSection } from './pages/ProgramSection';
import { ProgramProducts } from './pages/ProgramProducts';
import { InstructorSignIn } from './pages/InstructorSignIn';
import { Welcome } from './pages/Welcome';

export default function App() {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<SchoolCodeEntry />} />
        <Route path="/:code" element={<ProgramHero />} />
        <Route path="/:code/instructorsignin" element={<InstructorSignIn />} />
        <Route path="/:code/:section" element={<ProgramSection />} />
        <Route path="/:code/:section/products" element={<ProgramProducts />} />
        <Route path="/welcome" element={<Welcome />} />
      </Routes>
    </Router>
  );
}