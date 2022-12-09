import { useState } from "react";
import Banner from "./components/Banner/Banner";
import Feed from "./components/Feed/Feed";
import Header from "./components/Navbar/Navbar";
function App() {
  const [user, setUser] = useState('');
  return (
    <>
      <Header user={user} />
      <Banner />
      <Feed user={user} setUser={setUser} />
    </>
  );
}

export default App;