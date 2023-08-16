import "./App.css";
import QuizBox from "./components/quizBox/quizBox";
import { Provider } from "react-redux";
import quizStore from "./store/store";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Result from "./components/result/result";
import Login from "./components/login/login";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  let persistor = persistStore(quizStore);
  return (
    <Provider store={quizStore}>
      <PersistGate persistor={persistor}>
        <Header />
        <div className="App">
          <Router>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/quiz" element={<QuizBox />} />
              <Route path="/result" element={<Result />} />
              <Route path="/*" element={<div>Page Not Found</div>} />
            </Routes>
          </Router>
        </div>
        <Footer />
      </PersistGate>
    </Provider>
  );
}

export default App;
