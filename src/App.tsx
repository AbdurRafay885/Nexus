import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';

// Layouts
import { DashboardLayout } from './components/layout/DashboardLayout';

// Auth Pages
import { LoginPage } from './pages/auth/LoginPage';
import { RegisterPage } from './pages/auth/RegisterPage';

// Dashboard Pages
import { EntrepreneurDashboard } from './pages/dashboard/EntrepreneurDashboard';
import { InvestorDashboard } from './pages/dashboard/InvestorDashboard';

// Profile Pages
import { EntrepreneurProfile } from './pages/profile/EntrepreneurProfile';
import { InvestorProfile } from './pages/profile/InvestorProfile';

// Feature Pages
import { InvestorsPage } from './pages/investors/InvestorsPage';
import { EntrepreneursPage } from './pages/entrepreneurs/EntrepreneursPage';
import { MessagesPage } from './pages/messages/MessagesPage';
import { NotificationsPage } from './pages/notifications/NotificationsPage';
import { DocumentsPage } from './pages/documents/DocumentsPage';
import { SettingsPage } from './pages/settings/SettingsPage';
import { HelpPage } from './pages/help/HelpPage';
import { DealsPage } from './pages/deals/DealsPage';

// Milestone Components
import MeetingCalendar from './components/Week1/Calendar'; 
import { VideoCallSection } from './components/Week2/VideoCall'; 
import { DocumentChamber } from './components/Week2/DocumentChamber'; 
import { PaymentSection } from './components/Week3/Payment'; 
import { TwoFactorInput } from './components/Week3/Security'; 

// Chat Pages
import { ChatPage } from './pages/chat/ChatPage';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Authentication Routes */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          
          {/* Dashboard Routes */}
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route path="entrepreneur" element={<EntrepreneurDashboard />} />
            <Route path="investor" element={<InvestorDashboard />} />
          </Route>
          
          {/* Profile Routes */}
          <Route path="/profile" element={<DashboardLayout />}>
            <Route path="entrepreneur/:id" element={<EntrepreneurProfile />} />
            <Route path="investor/:id" element={<InvestorProfile />} />
          </Route>
          
          {/* Feature Routes */}
          <Route path="/investors" element={<DashboardLayout />}>
            <Route index element={<InvestorsPage />} />
          </Route>
          
          <Route path="/entrepreneurs" element={<DashboardLayout />}>
            <Route index element={<EntrepreneursPage />} />
          </Route>

          {/* Milestone 2: Calendar Route */}
          <Route path="/schedule" element={<DashboardLayout />}>
            <Route index element={
              <div className="p-6">
                <h1 className="text-2xl font-bold text-gray-900 mb-6">Meeting Schedule</h1>
                <MeetingCalendar events={[]} onSelectSlot={() => {}} />
              </div>
            } />
          </Route>

          {/* Milestone 3: Video Calling Route */}
          <Route path="/video-call" element={<DashboardLayout />}>
            <Route index element={<div className="p-6"><VideoCallSection /></div>} />
          </Route>

          {/* Milestone 4: Document Chamber Route */}
          <Route path="/documents" element={<DashboardLayout />}>
            <Route index element={<div className="p-6"><DocumentChamber /></div>} />
          </Route>
          <Route path="/deals" element={<DashboardLayout />}>
            <Route index element={<div className="p-6"><DocumentChamber /></div>} />
          </Route>

          {/* Milestone 5: Payment/Wallet Route */}
          <Route path="/wallet" element={<DashboardLayout />}>
            <Route index element={<div className="p-6"><PaymentSection /></div>} />
          </Route>

          {/* Milestone 6: Security/2FA Route */}
          <Route path="/security" element={<DashboardLayout />}>
            <Route index element={
              <div className="p-6 max-w-md mx-auto">
                <div className="bg-white rounded-xl shadow-md border border-gray-100">
                  <TwoFactorInput />
                </div>
              </div>
            } />
          </Route>

          <Route path="/messages" element={<DashboardLayout />}>
            <Route index element={<MessagesPage />} />
          </Route>
          
          <Route path="/notifications" element={<DashboardLayout />}>
            <Route index element={<NotificationsPage />} />
          </Route>
          
          <Route path="/settings" element={<DashboardLayout />}>
            <Route index element={<SettingsPage />} />
          </Route>
          
          <Route path="/help" element={<DashboardLayout />}>
            <Route index element={<HelpPage />} />
          </Route>
          
          {/* Chat Routes */}
          <Route path="/chat" element={<DashboardLayout />}>
            <Route index element={<ChatPage />} />
            <Route path=":userId" element={<ChatPage />} />
          </Route>
          
          {/* Redirect root to login */}
          <Route path="/" element={<Navigate to="/login" replace />} />
          
          {/* Catch all other routes and redirect to login */}
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;