import "./App.css";

import Heading from "./components/Heading";
import JokeContainer from "./components/JokeContainer";

const App = () => {
  return (
    <div className="container">
      <Heading title="Get Jokes" />
      <JokeContainer />
    </div>
  );
};

export default App;