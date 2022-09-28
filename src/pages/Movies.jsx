import SearchBar from 'components/searchBar/SearchBar';

export default function Movies(handleSubmit) {
  return (
    <div>
      <SearchBar handleSubmit={handleSubmit} />
    </div>
  );
}
