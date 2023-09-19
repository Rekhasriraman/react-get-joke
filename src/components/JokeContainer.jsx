import { useEffect, useState } from "react";
import axios from "axios";

import "./JokeContainer.css";

import Loading from "./Loading";
import Joke from "./Joke";

const JokeContainer = () => {
  const [joke, setJoke] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    const getJoke = async () => {
      try {
        const response = await axios.get("https://v2.jokeapi.dev/joke/Any");
        if (response.status === 200) {
          setJoke(response.data);
        } else {
          throw new Error(
            `Failed to get a joke with status: ${response.status}`,
          );
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getJoke();
  }, [count]);

  const getJokeHandler = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div className="container">
      {loading && <Loading />}
      {error && <p className="error">{error}</p>}
      {joke && <Joke joke={joke} />}
      <button className="btn" onClick={getJokeHandler}>
        Get another Joke
      </button>
    </div>
  );
};

export default JokeContainer;