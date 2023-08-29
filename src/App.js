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
import StarRating from "./MachineCodingRoundPrep/StarRating/StarRating";
import CShapeWith7boxes from "./MachineCodingRoundPrep/CShapeWith7boxes/CShapeWith7boxes";
import ModalComponent from "./MachineCodingRoundPrep/ModalComponent/ModelComponent";
import BishopOnChessBoard from "./MachineCodingRoundPrep/BishopOnChessBoard/BishopOnChessBoard";
import TicTacToe from "./MachineCodingRoundPrep/TicTcToe/TicTacToe";
import ToDoList from "./MachineCodingRoundPrep/ToDoList/ToDoList";
import Pagination from "./MachineCodingRoundPrep/Pagination/Pagination";
import InfiniteScroll from "./MachineCodingRoundPrep/InfiniteScroll/InfiniteScroll";
import NestedComment from "./MachineCodingRoundPrep/NestedComment/NestedComment";
import ProgressBar from "./MachineCodingRoundPrep/ProgressBar/ProgressBar";
import StopWatchTimer from "./MachineCodingRoundPrep/StopWatchTimer/StopWatchTimer";

function App() {
  // let persistor = persistStore(quizStore);
  return (
    // <Provider store={quizStore}>
    //   <PersistGate persistor={persistor}>
    //     <Header />
    //     <div className="App">
    //       <Router>
    //         <Routes>
    //           <Route path="/" element={<Login />} />
    //           <Route path="/quiz" element={<QuizBox />} />
    //           <Route path="/result" element={<Result />} />
    //           <Route path="/*" element={<div>Page Not Found</div>} />
    //         </Routes>
    //       </Router>
    //     </div>
    //     <Footer />
    //   </PersistGate>
    // </Provider>
    // <StarRating />
    // <CShapeWith7boxes />
    // <ModalComponent />
    // <BishopOnChessBoard />
    // <TicTacToe />
    // <ToDoList />
    // <Pagination />
    // <InfiniteScroll />
    // <NestedComment />
    // <ProgressBar />
    <StopWatchTimer />
  );
}

export default App;
