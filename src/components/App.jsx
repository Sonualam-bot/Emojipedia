import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function createEntry(emojipedia) {
 return <Entry 
  emoji={emojipedia.emoji} 
  name={emojipedia.name}
  meaning={emojipedia.meaning}
  />;
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      {emojipedia.map(createEntry)}
      {/* <Entry
        emoji=" 💪"
        name="Tense Biceps"
        meaning=" “You can do that!” or “I feel strong!” Arm with tense biceps. Also
      used in connection with doing sports, e.g. at the gym."
      /> */}
    </div>
  );
}

export default App;
