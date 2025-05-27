import React, { useState, useEffect, useRef } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomePage from './components/pages/HomePage';
import BuilderPage from './components/pages/BuilderPage';
import FeaturesPage from './components/pages/FeaturesPage';
import AnalyticsPage from './components/pages/AnalyticsPage';
import ContactPage from './components/pages/ContactPage';

const App = () => {
  // Navigation state
  const [currentPage, setCurrentPage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Tour builder state
  const [steps, setSteps] = useState([
    {
      id: 1,
      title: "Welcome to Our Platform",
      description: "Experience the most intuitive product demo platform designed for modern teams. Create, share, and analyze interactive product tours effortlessly.",
      mediaUrl: "https://player.vimeo.com/video/147278891",
      mediaType: "video",
      duration: 4000
    },
    {
      id: 2,
      title: "Build Beautiful Demos",
      description: "Create stunning interactive demos with our drag-and-drop builder. No coding required - just point, click, and create amazing experiences.",
      mediaUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop&crop=center",
      mediaType: "image",
      duration: 3500
    },
    {
      id: 3,
      title: "Share & Collaborate",
      description: "Share your demos instantly with teams and customers. Get real-time analytics and insights to improve your product storytelling.",
      mediaUrl: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&h=800&fit=crop&crop=center",
      mediaType: "image",
      duration: 3000
    },
    {
      id: 4,
      title: "Analytics Dashboard",
      description: "Track engagement, measure success, and optimize your demos with powerful analytics. See exactly how users interact with your content.",
      mediaUrl: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&h=800&fit=crop&crop=center",
      mediaType: "image",
      duration: 3500
    }
  ]);
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showEditor, setShowEditor] = useState(false);
  const [editingStep, setEditingStep] = useState(null);
  const [newStep, setNewStep] = useState({ title: '', description: '', mediaUrl: '', mediaType: 'image' });
  const intervalRef = useRef(null);
  const [animationState, setAnimationState] = useState('idle');

  // Animation effects
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, [currentPage]);

  // Auto-play functionality
  useEffect(() => {
    if (isPlaying && currentPage === 'builder') {
      intervalRef.current = setInterval(() => {
        setCurrentStep(prev => {
          const next = (prev + 1) % steps.length;
          setAnimationState('transition');
          setTimeout(() => setAnimationState('idle'), 600);
          return next;
        });
      }, steps[currentStep]?.duration || 3000);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [isPlaying, currentStep, steps, currentPage]);

  // Tour management functions
  const handlePlayDemo = () => {
    setIsPlaying(!isPlaying);
    setAnimationState('play');
    setTimeout(() => setAnimationState('idle'), 400);
  };
  const handleAddStep = () => {
    if (newStep.title && newStep.description) {
      const id = Date.now();
      setSteps([...steps, { ...newStep, id, duration: 3000 }]);
      setNewStep({ title: '', description: '', mediaUrl: '', mediaType: 'image' });
      setShowEditor(false);
    }
  };
  const handleEditStep = (step) => {
    setEditingStep(step);
    setNewStep({ ...step });
    setShowEditor(true);
  };
  const handleUpdateStep = () => {
    setSteps(steps.map(s => s.id === editingStep.id ? { ...newStep, id: editingStep.id } : s));
    setEditingStep(null);
    setNewStep({ title: '', description: '', mediaUrl: '', mediaType: 'image' });
    setShowEditor(false);
  };
  const handleDeleteStep = (id) => {
    setSteps(steps.filter(s => s.id !== id));
    if (currentStep >= steps.length - 1) setCurrentStep(0);
  };
  const goToStep = (index) => {
    setCurrentStep(index);
    setAnimationState('navigate');
    setTimeout(() => setAnimationState('idle'), 500);
  };
  const nextStep = () => {
    const next = (currentStep + 1) % steps.length;
    setCurrentStep(next);
    setAnimationState('next');
    setTimeout(() => setAnimationState('idle'), 500);
  };
  const prevStep = () => {
    const prev = currentStep === 0 ? steps.length - 1 : currentStep - 1;
    setCurrentStep(prev);
    setAnimationState('prev');
    setTimeout(() => setAnimationState('idle'), 500);
  };

  // Render page function
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage setCurrentPage={setCurrentPage} />;
      case 'builder':
        return (
          <BuilderPage
            steps={steps}
            setSteps={setSteps}
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            showEditor={showEditor}
            setShowEditor={setShowEditor}
            editingStep={editingStep}
            setEditingStep={setEditingStep}
            newStep={newStep}
            setNewStep={setNewStep}
            animationState={animationState}
            setAnimationState={setAnimationState}
            handlePlayDemo={handlePlayDemo}
            handleAddStep={handleAddStep}
            handleEditStep={handleEditStep}
            handleUpdateStep={handleUpdateStep}
            handleDeleteStep={handleDeleteStep}
            goToStep={goToStep}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        );
      case 'features':
        return <FeaturesPage />;
      
      case 'analytics':
        return <AnalyticsPage setCurrentPage={setCurrentPage} />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

return (
  <div className="min-h-screen w-full bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
    <Navigation
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      isMenuOpen={isMenuOpen}
      setIsMenuOpen={setIsMenuOpen}
    />
    <main className="min-h-screen w-full pt-20"> {/* Changed from pt-24 and added w-full */}
      {renderPage()}
    </main>
    <Footer setCurrentPage={setCurrentPage} />
  </div>
);
};

export default App;
