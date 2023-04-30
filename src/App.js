import "./App.css";
import Contact from "./components/Contact.js";

function App() {
  return (
    <div className="App">
      <Contact
        name="Samantha Rodriquez"
        avatar="https://randomuser.me/api/portraits/women/86.jpg"
        isOnline={true}
      />
      <Contact
        name="Dolores White"
        avatar="https://randomuser.me/api/portraits/women/35.jpg"
        isOnline={false}
      />
      <Contact
        name="Jeffery Gutierrez"
        avatar="https://randomuser.me/api/portraits/men/15.jpg"
        isOnline={false}
      />
    </div>
  );
}

export default App;
