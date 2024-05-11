import React from "react";
import Home from "./pages/Home"; // Importing the Home component

const App = React.memo(() => {
  return (
    <>
      <Home /> {/* Rendering the Home component */}
    </>
  );
});

export default App;
