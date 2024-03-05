import { Layout } from "../components/molecule";
import { Routes, Route } from "react-router-dom";
import { CreatePertanyaan, CreateQuiz, DetailQuiz, Home } from "../pages";

const MainPage = () => {
  return (
    <Layout>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/quiz/:id" element={<DetailQuiz />} />
        <Route path="/quiz/create" element={<CreateQuiz />} />
        <Route path="/quiz/create/:id" element={<CreateQuiz />} />
        <Route path="/pertanyaan/create" element={<CreatePertanyaan />} />
        <Route path="/pertanyaan/create/:id" element={<CreatePertanyaan />} />
      </Routes>
    </Layout>
  );
};

export default MainPage;
