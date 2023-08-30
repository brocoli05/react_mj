export default function ClickHeading({ clicks }) {
  if (clicks === 0) {
    return null;
  }
  const times = clicks > 1 ? "times" : "time";
  return (
    <h1>
      You've clicked {clicks} {times}
    </h1>
  );
}
