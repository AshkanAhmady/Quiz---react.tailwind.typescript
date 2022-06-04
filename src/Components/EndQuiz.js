import { Link } from "react-router-dom";

const EndQuiz = ({ total }) => {
  return (
    <div>
      <h1>its done</h1>
      <p>true answers: {total}</p>
      <Link to="/">homePge</Link>
    </div>
  );
};

export default EndQuiz;
