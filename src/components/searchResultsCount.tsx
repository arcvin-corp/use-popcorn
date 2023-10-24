export default function SearchResultsCount({ searchResultsCount }: { searchResultsCount: number }) {
  return (
    <p className="num-results">
      Found <strong>{searchResultsCount}</strong> results
    </p>
  );
}
