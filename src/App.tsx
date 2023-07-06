import React from "react"
import { Navigate, Route, Routes } from "react-router"

import Layout from "./components/Layout/Layout"
import Home from "./pages/Home/Home"
import Neo from "./pages/Neo/Neo"
// const Home = lazy(() => import('./pages/Home/Home'));
// const Neo = lazy(() => import('./pages/Neo/Neo'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="/neo" element={<Neo />} />
      </Route>
    </Routes>
  )
}

export default App
