import { useEffect, useRef } from "react";

function SearchForm({ search, setSearch, handleSearch }: { search: string; setSearch: (query: string) => void; handleSearch: (query: string) => void }) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSearch(search);
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <form className="flex items-center gap-2 mt-8" onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        type="text"
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder="Search meals..."
        className="px-4 py-2 rounded-l-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
      <button
        type="submit"
        className="px-4 py-2 rounded-r-md bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-colors"
      >
        Search
      </button>
    </form>
  );
}

export default SearchForm;