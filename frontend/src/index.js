import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import App from './App';
import PostJob from './Components/Admin/PostJob';
import RecruiterLogin from './Components/Admin/RecruiterLogin';
import { AuthProvider, AuthContext } from './Components/Authentication/AuthContext';
import JobCard from './Components/Course/JobCard';
import BuyNow from './Components/Course/BuyNow';
import Apply from './Components/DomainJobs/Apply';

const ProtectedRoute = ({ element, ...rest }) => {
  const { isAuthenticated } = React.useContext(AuthContext);

  return isAuthenticated ? element : <Navigate to="/login" />;
};

const MainApp = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/buy-now" element={<BuyNow />} />
          <Route path="/login" element={<RecruiterLogin />} />
          <Route path="/post-job" element={<ProtectedRoute element={<PostJob />} />} />
          <Route path="/apply" element={<Apply />} /> {/* Add the Apply route */}
          {/* Add other routes as needed */}
        </Routes>
      </Router>
    </AuthProvider>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MainApp />
  </React.StrictMode>
);
