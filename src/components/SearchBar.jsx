export default function SearchBar({ onSearch }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const city = e.target.city.value;
    if (!city) return;
    onSearch(city);
  };

  return (
    <form onSubmit={handleSubmit} className="search">
  <input name="city" placeholder="Search city..." />
  <button>Search</button>
    </form>
  );
}