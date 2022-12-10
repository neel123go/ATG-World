import { useState } from "react";
import Banner from "./components/Banner/Banner";
import Feed from "./components/Feed/Feed";
import Header from "./components/Navbar/Navbar";
function App() {
  const [user, setUser] = useState('');
  return (
    <div>
      <Header user={user} />
      <Banner user={user} setUser={setUser} />
      <Feed user={user} setUser={setUser} />
    </div>
  );
}

export default App;