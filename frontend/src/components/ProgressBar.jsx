export function ProgressBar({ value }) {
  return (
    <div className="progress-cell">
      <div className="progress-track">
        <span style={{ width: `${value}%` }} />
      </div>
      <strong>{value}%</strong>
    </div>
  );
}
