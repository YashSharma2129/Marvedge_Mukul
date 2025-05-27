import React, { useState, useEffect, useRef } from 'react';
import { Play, Plus, Edit3, Trash2, Eye, ChevronLeft, ChevronRight } from 'lucide-react';

const emeraldGradient = 'bg-gradient-to-br from-emerald-500 via-teal-400 to-cyan-400';

const BuilderPage = () => {
  const [steps, setSteps] = useState([
    {
      id: 1,
      title: "Welcome to Our Platform",
      description: "Experience the most intuitive product demo platform designed for modern teams. Create, share, and analyze interactive product tours effortlessly.",
      mediaUrl: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&h=800&fit=crop&crop=center",
      mediaType: "image",
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

  // Auto-play functionality
  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentStep(prev => {
          const next = (prev + 1) % steps.length;
          setAnimationState('transition');
          setTimeout(() => setAnimationState('idle'), 500);
          return next;
        });
      }, steps[currentStep]?.duration || 3000);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [isPlaying, currentStep, steps]);

  const handlePlayDemo = () => {
    setIsPlaying(!isPlaying);
    setAnimationState('play');
    setTimeout(() => setAnimationState('idle'), 300);
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
    setTimeout(() => setAnimationState('idle'), 400);
  };

  const nextStep = () => {
    const next = (currentStep + 1) % steps.length;
    setCurrentStep(next);
    setAnimationState('next');
    setTimeout(() => setAnimationState('idle'), 400);
  };

  const prevStep = () => {
    const prev = currentStep === 0 ? steps.length - 1 : currentStep - 1;
    setCurrentStep(prev);
    setAnimationState('prev');
    setTimeout(() => setAnimationState('idle'), 400);
  };

  return (
    <div className={`min-h-screen ${emeraldGradient} bg-fixed`}>
      <div className="w-full max-w-[1500px] mx-auto py-10 px-2 sm:px-6 flex flex-col md:flex-row gap-6 items-start md:ml-36">
        {/* Main Preview */}
        <div className="w-full md:flex-1 min-w-[0] max-w-full md:min-w-[340px] md:max-w-[650px] bg-white/95 rounded-3xl shadow-2xl p-4 sm:p-8 md:p-10 flex flex-col items-center border border-emerald-100">
          <div className="w-full aspect-[16/5] rounded-2xl overflow-hidden mb-6 sm:mb-10 border-4 border-emerald-200 shadow-lg">
            {steps[currentStep]?.mediaType === 'image' ? (
              <img
                src={steps[currentStep]?.mediaUrl}
                alt={steps[currentStep]?.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <iframe
                src={steps[currentStep]?.mediaUrl}
                title={steps[currentStep]?.title}
                className="w-full h-full"
                allowFullScreen
              />
            )}
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-emerald-700 mb-2 text-center w-full">{steps[currentStep]?.title}</h2>
          <p className="text-gray-700 text-base mb-6 sm:mb-10 text-center w-full">{steps[currentStep]?.description}</p>
          <div className="flex flex-col sm:flex-row items-center justify-between w-full mt-auto mb-6 sm:mb-8 gap-4 sm:gap-0">
            <button
              onClick={prevStep}
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-100 text-emerald-700 font-semibold hover:bg-emerald-200 transition w-full sm:w-auto"
            >
              <ChevronLeft className="w-5 h-5" />
              Previous
            </button>
            <div className="flex gap-2 my-2 sm:my-0">
              {steps.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToStep(idx)}
                  className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                    idx === currentStep
                      ? 'bg-emerald-500 border-emerald-700 scale-125 shadow'
                      : 'bg-emerald-100 border-emerald-300 hover:bg-emerald-300'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={nextStep}
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-100 text-emerald-700 font-semibold hover:bg-emerald-200 transition w-full sm:w-auto"
            >
              Next
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mb-2 w-full sm:w-auto">
            <button
              onClick={handlePlayDemo}
              className={`flex items-center justify-center gap-2 px-7 py-2.5 rounded-full font-semibold shadow transition ${
                isPlaying
                  ? 'bg-red-500 text-white hover:bg-red-600'
                  : 'bg-emerald-500 text-white hover:bg-emerald-600'
              } w-full sm:w-auto`}
            >
              <Play className="w-5 h-5" />
              {isPlaying ? 'Stop Demo' : 'Play Demo'}
            </button>
            <button
              onClick={() => setShowEditor(true)}
              className="flex items-center justify-center gap-2 px-7 py-2.5 rounded-full bg-white border border-emerald-300 text-emerald-700 font-semibold hover:bg-emerald-50 transition w-full sm:w-auto"
            >
              <Plus className="w-5 h-5" />
              Add Step
            </button>
          </div>
        </div>
        {/* Steps List */}
        <div className="w-full md:w-[460px] flex-shrink-0 space-y-4 mt-8 md:mt-0">
          <h3 className="text-xl font-bold text-emerald-800 mb-6 text-center md:text-left">Steps</h3>
          <div className="space-y-4">
            {steps.map((step, idx) => (
              <div
                key={step.id}
                className={`flex flex-col sm:flex-row items-center justify-between p-4 sm:p-5 rounded-2xl cursor-pointer border transition ${
                  idx === currentStep
                    ? 'bg-emerald-100 border-emerald-400 shadow'
                    : 'bg-white border-emerald-100 hover:bg-emerald-50'
                }`}
                onClick={() => goToStep(idx)}
              >
                <div className="flex items-center gap-4 w-full sm:w-auto mb-2 sm:mb-0">
                  <span className="w-8 h-8 rounded-full bg-emerald-400 text-white flex items-center justify-center font-bold">{idx + 1}</span>
                  <div>
                    <div className="font-semibold text-emerald-700">{step.title}</div>
                    <div className="text-xs text-gray-500 truncate max-w-[180px] sm:max-w-[260px]">{step.description}</div>
                  </div>
                </div>
                <div className="flex gap-2 w-full sm:w-auto justify-end">
                  <button
                    onClick={e => { e.stopPropagation(); goToStep(idx); }}
                    className="p-2 rounded-lg hover:bg-emerald-100 text-emerald-600"
                    title="Preview"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                  <button
                    onClick={e => { e.stopPropagation(); handleEditStep(step); }}
                    className="p-2 rounded-lg hover:bg-yellow-100 text-yellow-600"
                    title="Edit"
                  >
                    <Edit3 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={e => { e.stopPropagation(); handleDeleteStep(step.id); }}
                    className="p-2 rounded-lg hover:bg-red-100 text-red-600"
                    title="Delete"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Editor Modal */}
      {showEditor && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 w-full max-w-md border border-emerald-100">
            <h3 className="text-xl font-bold mb-4 text-emerald-700">{editingStep ? 'Edit Step' : 'Add Step'}</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1 text-emerald-700">Title</label>
                <input
                  type="text"
                  value={newStep.title}
                  onChange={e => setNewStep({ ...newStep, title: e.target.value })}
                  className="w-full px-4 py-2 rounded border border-emerald-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                  placeholder="Step title"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-emerald-700">Description</label>
                <textarea
                  value={newStep.description}
                  onChange={e => setNewStep({ ...newStep, description: e.target.value })}
                  className="w-full px-4 py-2 rounded border border-emerald-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                  placeholder="Step description"
                  rows={3}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-emerald-700">Image or Video URL</label>
                <input
                  type="text"
                  value={newStep.mediaUrl}
                  onChange={e => setNewStep({ ...newStep, mediaUrl: e.target.value })}
                  className="w-full px-4 py-2 rounded border border-emerald-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                  placeholder="https://example.com/image.jpg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-emerald-700">Type</label>
                <select
                  value={newStep.mediaType}
                  onChange={e => setNewStep({ ...newStep, mediaType: e.target.value })}
                  className="w-full px-4 py-2 rounded border border-emerald-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                >
                  <option value="image">Image</option>
                  <option value="video">Video (iframe)</option>
                </select>
              </div>
            </div>
            <div className="flex gap-3 mt-8">
              <button
                onClick={() => {
                  setShowEditor(false);
                  setEditingStep(null);
                  setNewStep({ title: '', description: '', mediaUrl: '', mediaType: 'image' });
                }}
                className="flex-1 px-4 py-2 rounded bg-gray-100 text-gray-700 hover:bg-gray-200"
              >
                Cancel
              </button>
              <button
                onClick={editingStep ? handleUpdateStep : handleAddStep}
                className="flex-1 px-4 py-2 rounded bg-emerald-500 text-white font-semibold hover:bg-emerald-600"
              >
                {editingStep ? 'Update' : 'Add Step'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BuilderPage;