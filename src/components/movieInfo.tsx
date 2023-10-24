export default function MovieInfo({ infoIcon, infoText }: { infoIcon: string; infoText: string | number }) {
  return (
    <p>
      <span>{infoIcon}</span>
      <span>{infoText}</span>
    </p>
  );
}
