import React from "react";
import PropsExample from './components/PropsExample';
import PropsMapping from './components/PropsMapping';

function App() {

  let visitedPlaces = ["Castle Gallery", "Morse Lake", "Noble Coffee", "Perk Up", "Coat Check", "Garfield Park"];
  return (
  <div>
    <PropsExample name="Tom" business="MySpace"/>
    <br/>
    <hr/>
    <PropsMapping visited={ visitedPlaces }/>
  </div>
  );
}

export default App;
