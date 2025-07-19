import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Queue from "./components/Queue";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import ScrollToTop from "./components/ScrollToTop";
import BackToTop from "./components/BackToTop";
import "./App.css";
import Footer from "./components/Footer";

function App() {
  const [currentQueue, setCurrentQueue] = useState([]);
  const [servedToday, setServedToday] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [queueIdCounter, setQueueIdCounter] = useState(1);

  const addToQueue = (queueItem) => {
    const newItem = {
      ...queueItem,
      id: queueIdCounter,
      timestamp: new Date().toISOString(),
      type: queueItem.type || "online", // Default to online booking
    };
    setCurrentQueue((prev) => [...prev, newItem]);
    setQueueIdCounter((prev) => prev + 1);
    return currentQueue.length + 1;
  };

  const addWalkInCustomer = (customerData) => {
    const walkInItem = {
      ...customerData,
      id: queueIdCounter,
      timestamp: new Date().toISOString(),
      type: "walkin",
    };
    setCurrentQueue((prev) => [...prev, walkInItem]);
    setQueueIdCounter((prev) => prev + 1);
    return currentQueue.length + 1;
  };

  const removeFromQueue = (id) => {
    setCurrentQueue((prev) => prev.filter((item) => item.id !== id));
  };

  const serveCustomer = (id) => {
    removeFromQueue(id);
    setServedToday((prev) => prev + 1);
  };

  const callNext = () => {
    if (currentQueue.length > 0) {
      const nextCustomer = currentQueue[0];
      serveCustomer(nextCustomer.id);
      const customerName = nextCustomer.firstName ? `${nextCustomer.firstName} ${nextCustomer.lastName}` : nextCustomer.name;
      alert(`Called: ${customerName} for ${nextCustomer.service}`);
    }
  };

  const clearQueue = () => {
    setCurrentQueue([]);
  };

  const login = (username, password) => {
    if (username === "admin" && password === "password") {
      setIsLoggedIn(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Header />
        <div className="content-wrap">
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/queue"
                element={
                  <Queue currentQueue={currentQueue} addToQueue={addToQueue} />
                }
              />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
              <Route
                path="/login"
                element={<Login login={login} isLoggedIn={isLoggedIn} />}
              />
              <Route
                path="/dashboard"
                element={
                  <Dashboard
                    currentQueue={currentQueue}
                    servedToday={servedToday}
                    serveCustomer={serveCustomer}
                    removeFromQueue={removeFromQueue}
                    callNext={callNext}
                    clearQueue={clearQueue}
                    addWalkInCustomer={addWalkInCustomer}
                    logout={logout}
                    isLoggedIn={isLoggedIn}
                  />
                }
              />
            </Routes>
          </main>
        </div>
        <BackToTop />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
