import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resetQuiz } from "../store/quizSlice";
import { saveHighscore } from "../utils/storage";
import Layout from "../components/Layout";
import Card from "../components/Card";
import Button from "../components/Button";

export default function ResultPage() {
  const { score, questions } = useSelector(state => state.quiz);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleRestart = () => {
    saveHighscore(score);
    dispatch(resetQuiz());
    navigate("/");
  };

  const handleHighscores = () => {
    saveHighscore(score);
    dispatch(resetQuiz());
    navigate("/highscores");
  };

  return (
    <Layout>
      <Card>
        <h1 className="text-2xl mb-4">Result</h1>
        <p className="mb-4">
          You have <strong>{score}</strong> of{" "}
          <strong>{questions.length}</strong> correct!
        </p>
        <div className="flex gap-2">
          <Button onClick={handleRestart}>Restart</Button>
          <Button onClick={handleHighscores}>View highscores</Button>
        </div>
      </Card>
    </Layout>
  );
}
