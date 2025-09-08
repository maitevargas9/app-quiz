import useHighscores from "../hooks/useHighscores";
import Layout from "../components/Layout";
import Card from "../components/Card";

export default function HighscoresPage() {
  const highscores = useHighscores();

  return (
    <Layout>
      <Card>
        <h1 className="text-2xl mb-4">🏆 Highscores</h1>

        {highscores.length > 0
          ? <ul className="space-y-2 mb-4">
              {highscores.map((hs, i) =>
                <li key={i}>
                  {i + 1}. {hs.name}: <strong>{hs.score}</strong>
                </li>
              )}
            </ul>
          : <p className="mb-4">No high scores available yet.</p>}
      </Card>
    </Layout>
  );
}
