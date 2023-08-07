import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import {
  MainPage,
  ShopPage,
  ProductDetailPage,
  StylePage,
  StyleDetailPage,
  LoginPage,
  MyPage,
  NotFoundPage,
} from "./pages";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/product/:productId" element={<ProductDetailPage />} />
          <Route path="/style" element={<StylePage />} />
          <Route path="/style/:styleId" element={<StyleDetailPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/myPage" element={<MyPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
