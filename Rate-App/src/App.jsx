import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FeedbackProvider } from "./context/FeedbackContext";

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header text="Rate UI" />

        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            />

            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
