import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FormLostAnimal from "./pages/FormLostAnimal";
import FindingAnimalForm from "./pages/FindingAnimalForm";
import LostAnimalPages from "./pages/LostAnimalPages";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form-lost-animal" element={<FormLostAnimal />} />
        <Route path="/finding-animal-form" element={<FindingAnimalForm />} />
        <Route path="/lost-animals" element={<LostAnimalPages />} />
      </Routes>
    </Router>
  );
};
