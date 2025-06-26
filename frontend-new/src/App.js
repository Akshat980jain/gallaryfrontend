import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import ImageUploadPage from './pages/ImageUploadPage';
import VideoUploadPage from './pages/VideoUploadPage';
import DocumentUploadPage from './pages/DocumentUploadPage';
import Header from './components/Header';
import ProfileModal from './components/ProfileModal';
import Chatbot from './components/Chatbot';

function App() {
  const [userInfo, setUserInfo] = useState(null);
  const [showProfileModal, setShowProfileModal] = useState(false);

  useEffect(() => {
    const storedUserInfo = localStorage.getItem('userInfo');
    if (storedUserInfo) {
      setUserInfo(JSON.parse(storedUserInfo));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('userInfo');
    setUserInfo(null);
  };

  const handleLogin = (newUserInfo) => {
    localStorage.setItem('userInfo', JSON.stringify(newUserInfo));
    setUserInfo(newUserInfo);
  };

  const handleUserInfoUpdate = (updatedUserInfo) => {
    localStorage.setItem('userInfo', JSON.stringify(updatedUserInfo));
    setUserInfo(updatedUserInfo);
  };

  const openProfileModal = () => setShowProfileModal(true);
  const closeProfileModal = () => setShowProfileModal(false);

  const token = userInfo ? userInfo.token : null;

  return (
    <Router>
      <div className="App">
        {userInfo && <Header userInfo={userInfo} onLogout={handleLogout} onProfileClick={openProfileModal} />}
        <Routes>
          <Route 
            path="/" 
            element={
              <HomePage 
                token={token} 
                onLogin={handleLogin} 
              />
            } 
          />
          <Route 
            path="/upload" 
            element={
              token ? (
                <ImageUploadPage token={token} />
              ) : (
                <Navigate to="/" replace />
              )
            } 
          />
          <Route 
            path="/videos" 
            element={
              token ? (
                <VideoUploadPage token={token} />
              ) : (
                <Navigate to="/" replace />
              )
            } 
          />
          <Route 
            path="/documents" 
            element={
              token ? (
                <DocumentUploadPage token={token} />
              ) : (
                <Navigate to="/" replace />
              )
            } 
          />
          <Route 
            path="/documents/pdf" 
            element={
              token ? (
                <DocumentUploadPage token={token} />
              ) : (
                <Navigate to="/" replace />
              )
            } 
          />
          <Route 
            path="/documents/ppt" 
            element={
              token ? (
                <DocumentUploadPage token={token} />
              ) : (
                <Navigate to="/" replace />
              )
            } 
          />
          <Route 
            path="/documents/excel" 
            element={
              token ? (
                <DocumentUploadPage token={token} />
              ) : (
                <Navigate to="/" replace />
              )
            } 
          />
          <Route 
            path="/documents/pptx" 
            element={
              token ? (
                <DocumentUploadPage token={token} />
              ) : (
                <Navigate to="/" replace />
              )
            } 
          />
          <Route 
            path="/documents/xls" 
            element={
              token ? (
                <DocumentUploadPage token={token} />
              ) : (
                <Navigate to="/" replace />
              )
            } 
          />
          <Route 
            path="/documents/xlsx" 
            element={
              token ? (
                <DocumentUploadPage token={token} />
              ) : (
                <Navigate to="/" replace />
              )
            } 
          />
          <Route 
            path="/documents/doc" 
            element={
              token ? (
                <DocumentUploadPage token={token} />
              ) : (
                <Navigate to="/" replace />
              )
            } 
          />
          <Route 
            path="/documents/docx" 
            element={
              token ? (
                <DocumentUploadPage token={token} />
              ) : (
                <Navigate to="/" replace />
              )
            } 
          />
          <Route 
            path="/documents/txt" 
            element={
              token ? (
                <DocumentUploadPage token={token} />
              ) : (
                <Navigate to="/" replace />
              )
            } 
          />
          <Route 
            path="/documents/zip" 
            element={
              token ? (
                <DocumentUploadPage token={token} />
              ) : (
                <Navigate to="/" replace />
              )
            } 
          />
          <Route 
            path="/documents/csv" 
            element={
              token ? (
                <DocumentUploadPage token={token} />
              ) : (
                <Navigate to="/" replace />
              )
            } 
          />
        </Routes>
        {showProfileModal && <ProfileModal token={token} closeModal={closeProfileModal} onUserInfoUpdate={handleUserInfoUpdate} />}
        {userInfo && <Chatbot token={token} userInfo={userInfo} />}
      </div>
    </Router>
  );
}

export default App;
