import SearchBar from 'components/searchBar/SearchBar';

export const Movies = handleSubmit => {
  return (
    <div>
      <SearchBar handleSubmit={handleSubmit} />
    </div>
  );
};
