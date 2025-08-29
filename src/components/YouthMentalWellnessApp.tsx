"use client";

import React, { useState, useEffect } from 'react';
import { Heart, Brain, Shield, Users, MessageCircle, Phone, Calendar, TrendingUp, Star, ArrowRight, Menu, X, BookOpen, Target, Zap } from 'lucide-react';

const YouthMentalWellnessApp = () => {
  type User = {
    name: string;
    age: number;
    streakDays: number;
    completedGoals: number;
    buddyName: string;
  };
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [moodData, setMoodData] = useState([
    { date: '2025-08-24', mood: 7, note: 'Had a good day at school' },
    { date: '2025-08-25', mood: 5, note: 'Feeling stressed about exams' },
    { date: '2025-08-26', mood: 8, note: 'Hung out with friends' },
    { date: '2025-08-27', mood: 6, note: 'Mixed emotions today' },
    { date: '2025-08-28', mood: 7, note: 'Feeling more balanced' }
  ]);
  const [currentMood, setCurrentMood] = useState(7);
  const [moodNote, setMoodNote] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Simulated user login
  useEffect(() => {
    setCurrentUser({
      name: 'Alex',
      age: 17,
      streakDays: 12,
      completedGoals: 8,
      buddyName: 'Jordan'
    });
  }, []);

  const handleMoodSubmit = () => {
    if (currentMood && moodNote.trim()) {
      const today = new Date().toISOString().split('T')[0];
      setMoodData(prev => [...prev, { date: today, mood: currentMood, note: moodNote }]);
      setMoodNote('');
      alert('Mood logged successfully! 🌟');
    }
  };

  const copingStrategies = [
    { trigger: 'Feeling anxious', alternative: 'Try the 5-4-3-2-1 grounding technique', icon: '🧘' },
    { trigger: 'Angry at someone', alternative: 'Take 10 deep breaths and write your feelings', icon: '✍️' },
    { trigger: 'Overwhelmed by school', alternative: 'Break tasks into smaller steps', icon: '📝' },
    { trigger: 'Social media comparison', alternative: 'Practice gratitude journaling', icon: '📖' },
    { trigger: 'Feeling lonely', alternative: 'Reach out to your buddy or join a group chat', icon: '🤝' }
  ];

  const emergencyContacts = [
    { name: 'Crisis Text Line', contact: 'Text HOME to 741741', available: '24/7' },
    { name: 'National Suicide Prevention Lifeline', contact: '988', available: '24/7' },
    { name: 'Your School Counselor', contact: 'Available during school hours', available: 'School Hours' },
    { name: 'Your Buddy - Jordan', contact: 'In-app messaging', available: 'Online Now' }
  ];

  const peerGroups = [
    { name: 'Anxiety Support Circle', members: 24, topic: 'Managing daily anxiety', nextMeeting: 'Tonight 7 PM' },
    { name: 'Study Stress Busters', members: 18, topic: 'Academic pressure', nextMeeting: 'Tomorrow 4 PM' },
    { name: 'Creative Expression', members: 31, topic: 'Art therapy & creativity', nextMeeting: 'Friday 6 PM' },
    { name: 'Social Connection Hub', members: 42, topic: 'Making friends & social skills', nextMeeting: 'Saturday 2 PM' }
  ];

 <h1 className="text-4xl text-blue-500">Hello Tailwind</h1>

  const NavigationComponent = () => (
    <nav className="bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 text-white p-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div className="bg-white/20 p-2 rounded-full">
            <Heart className="h-6 w-6" />
          </div>
          <h1 className="text-2xl font-bold">MindfulYouth</h1>
        </div>
        
        <div className="hidden md:flex space-x-6">
          {[
            { key: 'dashboard', label: 'Dashboard', icon: TrendingUp },
            { key: 'mood', label: 'Mood Tracker', icon: Heart },
            { key: 'coping', label: 'Coping Tools', icon: Shield },
            { key: 'connect', label: 'Connect', icon: Users },
            { key: 'help', label: 'Get Help', icon: Phone }
          ].map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
                activeTab === key 
                  ? 'bg-white/30 backdrop-blur-sm' 
                  : 'hover:bg-white/20'
              }`}
            >
              <Icon className="h-4 w-4" />
              <span>{label}</span>
            </button>
          ))}
        </div>

        <button 
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden mt-4 space-y-2">
          {[
            { key: 'dashboard', label: 'Dashboard', icon: TrendingUp },
            { key: 'mood', label: 'Mood Tracker', icon: Heart },
            { key: 'coping', label: 'Coping Tools', icon: Shield },
            { key: 'connect', label: 'Connect', icon: Users },
            { key: 'help', label: 'Get Help', icon: Phone }
          ].map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => {
                setActiveTab(key);
                setMobileMenuOpen(false);
              }}
              className={`w-full flex items-center space-x-2 p-3 rounded-lg transition-all ${
                activeTab === key ? 'bg-white/30' : 'hover:bg-white/20'
              }`}
            >
              <Icon className="h-4 w-4" />
              <span>{label}</span>
            </button>
          ))}
        </div>
      )}
    </nav>
  );

  const DashboardTab = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white rounded-2xl p-6">
        <h2 className="text-3xl font-bold mb-2">Welcome back, {currentUser?.name}! 🌟</h2>
        <p className="text-purple-100">You're doing great on your mental wellness journey</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-green-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Current Streak</p>
              <p className="text-3xl font-bold text-green-600">{currentUser?.streakDays} days</p>
            </div>
            <div className="bg-green-100 p-3 rounded-full">
              <Calendar className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-blue-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Goals Completed</p>
              <p className="text-3xl font-bold text-blue-600">{currentUser?.completedGoals}</p>
            </div>
            <div className="bg-blue-100 p-3 rounded-full">
              <Target className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-purple-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Wellness Buddy</p>
              <p className="text-xl font-bold text-purple-600">{currentUser?.buddyName}</p>
              <p className="text-sm text-green-600">● Online</p>
            </div>
            <div className="bg-purple-100 p-3 rounded-full">
              <Users className="h-6 w-6 text-purple-600" />
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-bold mb-4 flex items-center">
            <TrendingUp className="h-5 w-5 mr-2 text-blue-500" />
            Mood Trend (Last 5 Days)
          </h3>
          <div className="space-y-3">
            {moodData.slice(-5).map((entry, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="text-sm text-gray-600 w-20">{entry.date.slice(-2)}/08</div>
                <div className="flex-1 bg-gray-200 rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-red-400 via-yellow-400 to-green-400 h-3 rounded-full transition-all duration-500"
                    style={{ width: `${(entry.mood / 10) * 100}%` }}
                  ></div>
                </div>
                <div className="text-sm font-semibold w-8">{entry.mood}/10</div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-bold mb-4 flex items-center">
            <Zap className="h-5 w-5 mr-2 text-yellow-500" />
            Quick Actions
          </h3>
          <div className="space-y-3">
            <button 
              onClick={() => setActiveTab('mood')}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white p-3 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-between"
            >
              <span>Log Today's Mood</span>
              <ArrowRight className="h-4 w-4" />
            </button>
            <button 
              onClick={() => setActiveTab('coping')}
              className="w-full bg-gradient-to-r from-green-500 to-teal-500 text-white p-3 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-between"
            >
              <span>Get Coping Strategy</span>
              <ArrowRight className="h-4 w-4" />
            </button>
            <button 
              onClick={() => setActiveTab('connect')}
              className="w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white p-3 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-between"
            >
              <span>Join Peer Group</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const MoodTrackerTab = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <Heart className="h-6 w-6 mr-2 text-red-500" />
          How are you feeling today?
        </h2>
        
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Rate your mood (1 = Very Low, 10 = Excellent)
            </label>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-500">1</span>
              <input
                type="range"
                min="1"
                max="10"
                value={currentMood}
                onChange={(e) => setCurrentMood(parseInt(e.target.value))}
                className="flex-1 h-3 bg-gradient-to-r from-red-400 via-yellow-400 to-green-400 rounded-lg appearance-none cursor-pointer"
              />
              <span className="text-sm text-gray-500">10</span>
            </div>
            <div className="text-center mt-2">
              <span className="text-3xl font-bold text-blue-600">{currentMood}/10</span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              What's happening? (Optional)
            </label>
            <textarea
              value={moodNote}
              onChange={(e) => setMoodNote(e.target.value)}
              placeholder="Describe your day, feelings, or any thoughts you'd like to track..."
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              rows={4}
            />
          </div>

          <button
            onClick={handleMoodSubmit}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
          >
            Log Mood Entry
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h3 className="text-xl font-bold mb-4">Your Mood History</h3>
        <div className="space-y-3">
          {moodData.slice(-7).reverse().map((entry, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <div className="font-semibold">{entry.date}</div>
                <div className="text-sm text-gray-600">{entry.note}</div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="text-lg font-bold">{entry.mood}/10</div>
                <div className="flex">
                  {[...Array(Math.floor(entry.mood / 2))].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const CopingToolsTab = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <Shield className="h-6 w-6 mr-2 text-green-500" />
          "Instead of..." Coping Strategies
        </h2>
        <p className="text-gray-600 mb-6">
          When you feel triggered, try these healthier alternatives instead of harmful behaviors.
        </p>
        
        <div className="grid gap-4">
          {copingStrategies.map((strategy, index) => (
            <div key={index} className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg border border-blue-200">
              <div className="flex items-start space-x-3">
                <div className="text-2xl">{strategy.icon}</div>
                <div className="flex-1">
                  <div className="text-sm text-gray-600 mb-1">When you're:</div>
                  <div className="font-semibold text-gray-800 mb-2">{strategy.trigger}</div>
                  <div className="text-sm text-gray-600 mb-1">Try this instead:</div>
                  <div className="text-blue-600 font-medium">{strategy.alternative}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h3 className="text-xl font-bold mb-4 flex items-center">
          <Brain className="h-5 w-5 mr-2 text-purple-500" />
          AI Wellness Coach
        </h3>
        <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-4 rounded-lg">
          <div className="flex items-start space-x-3">
            <div className="bg-purple-500 text-white p-2 rounded-full">
              <Brain className="h-4 w-4" />
            </div>
            <div className="flex-1">
              <div className="font-semibold mb-2">Personalized Suggestion:</div>
              <p className="text-gray-700">
                Based on your recent mood patterns, I notice some stress around exam time. 
                Try the "Pomodoro Technique" - study for 25 minutes, then take a 5-minute break. 
                This can help reduce overwhelm and improve focus!
              </p>
              <button className="mt-3 bg-purple-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-purple-600 transition-colors">
                Tell me more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const ConnectTab = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <Users className="h-6 w-6 mr-2 text-blue-500" />
          Connect with Peers
        </h2>
        
        <div className="bg-gradient-to-r from-green-100 to-blue-100 p-4 rounded-lg mb-6">
          <div className="flex items-center space-x-3">
            <div className="bg-green-500 text-white p-2 rounded-full">
              <Users className="h-4 w-4" />
            </div>
            <div>
              <div className="font-semibold">Your Wellness Buddy: {currentUser?.buddyName}</div>
              <div className="text-sm text-gray-600">● Online now - Ready to chat!</div>
            </div>
            <button className="ml-auto bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors">
              Message
            </button>
          </div>
        </div>

        <div className="grid gap-4">
          {peerGroups.map((group, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-lg">{group.name}</h3>
                <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-sm">
                  {group.members} members
                </span>
              </div>
              <p className="text-gray-600 mb-2">{group.topic}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Next meeting: {group.nextMeeting}</span>
                <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all">
                  Join Group
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h3 className="text-xl font-bold mb-4">Anonymous Support Forum</h3>
        <div className="space-y-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="font-semibold mb-2">Recent Topic: "Dealing with social anxiety"</div>
            <p className="text-gray-600 text-sm mb-2">
              "I've been struggling to make friends at school. Does anyone have tips for starting conversations?"
            </p>
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <span>23 responses</span>
              <span>Posted 2 hours ago</span>
            </div>
          </div>
          <button className="w-full bg-teal-500 text-white py-2 px-4 rounded-lg hover:bg-teal-600 transition-colors">
            Browse All Topics
          </button>
        </div>
      </div>
    </div>
  );

  const GetHelpTab = () => (
    <div className="space-y-6">
      <div className="bg-red-50 border border-red-200 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-4 text-red-700 flex items-center">
          <Phone className="h-6 w-6 mr-2" />
          Crisis Support - Available 24/7
        </h2>
        <p className="text-red-600 mb-4">
          If you're in immediate danger or having thoughts of self-harm, please reach out now.
        </p>
        <button className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">
          🚨 Emergency Help - Call 988
        </button>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h3 className="text-xl font-bold mb-4">Get Support</h3>
        <div className="grid gap-4">
          {emergencyContacts.map((contact, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold">{contact.name}</div>
                  <div className="text-blue-600">{contact.contact}</div>
                  <div className="text-sm text-gray-500">{contact.available}</div>
                </div>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                  Contact
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h3 className="text-xl font-bold mb-4 flex items-center">
          <BookOpen className="h-5 w-5 mr-2 text-green-500" />
          Self-Help Resources
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <h4 className="font-semibold mb-2">Anxiety Management</h4>
            <p className="text-sm text-gray-600 mb-3">Learn breathing techniques and grounding exercises</p>
            <button className="text-green-600 font-medium hover:underline">Read Guide →</button>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <h4 className="font-semibold mb-2">Sleep Better</h4>
            <p className="text-sm text-gray-600 mb-3">Tips for healthy sleep habits and routines</p>
            <button className="text-blue-600 font-medium hover:underline">Read Guide →</button>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
            <h4 className="font-semibold mb-2">Building Confidence</h4>
            <p className="text-sm text-gray-600 mb-3">Strategies to boost self-esteem and confidence</p>
            <button className="text-purple-600 font-medium hover:underline">Read Guide →</button>
          </div>
          <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
            <h4 className="font-semibold mb-2">Stress Management</h4>
            <p className="text-sm text-gray-600 mb-3">Healthy ways to cope with academic pressure</p>
            <button className="text-orange-600 font-medium hover:underline">Read Guide →</button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'dashboard': return <DashboardTab />;
      case 'mood': return <MoodTrackerTab />;
      case 'coping': return <CopingToolsTab />;
      case 'connect': return <ConnectTab />;
      case 'help': return <GetHelpTab />;
      default: return <DashboardTab />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <NavigationComponent />
      <main className="max-w-7xl mx-auto px-4 py-8">
        {renderActiveTab()}
      </main>
    </div>
  );
};

export default YouthMentalWellnessApp;