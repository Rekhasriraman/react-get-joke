import PropTypes from "prop-types";
import "./Joke.css";

const Joke = ({ joke }) => {
  const isTwoPart = joke.type === "twopart";
  return (
    <div className="joke">
      <div className="box">
        {isTwoPart ? (
          <div className="jokes">
            <p>{joke.setup}</p>
            <p>{joke.delivery}</p>
          </div>
        ) : (
          <p>{joke.joke}</p>
        )}
      </div>
      <div className="btn-box">
        {Object.entries(joke.flags).map(([key, value]) => (
          <button className={value ? "red" : "green"} key={key}>
            {key}
          </button>
        ))}
      </div>
    </div>
  );
};

Joke.propTypes = {
  joke: PropTypes.shape({
    category: PropTypes.string.isRequired,
    type: PropTypes.oneOf(["single", "twopart"]).isRequired,
    setup: PropTypes.string,
    delivery: PropTypes.string,
    flags: PropTypes.object.isRequired,
    id: PropTypes.number.isRequired,
    safe: PropTypes.bool.isRequired,
    joke: PropTypes.string
  }).isRequired,
};

export default Joke;