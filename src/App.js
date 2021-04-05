import Birthday from "./Components/Birthday";
import birthdays from "./data";
import "./index.css";
import { useState } from "react";

function App() {
  const [birtdays, setBirtdays] = useState(birthdays);
  const birth = birtdays.map((birthday) => (
    <Birthday key={birthday.id} birthday={birthday} />
  ));
  return (
    <div className="root">
      <section>
        <h2>Today are {birtdays.length} birthdays!</h2>
        {birth}
        <button onClick={() => setBirtdays([])}>Delete birtdays</button>
      </section>
    </div>
  );
}

export default App;
