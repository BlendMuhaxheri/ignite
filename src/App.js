import React from 'react'
// Components and Pages
import Home from "./pages/Home"
import Nav from "./components/Nav"
// styles
import GlobalStyles from './components/GlobalStyles'
// react router
import { Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Route path={["/game/:id", "/"]} component={Home} />
    </div>
  );
}

export default App;
