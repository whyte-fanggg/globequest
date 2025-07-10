import React, { useState } from 'react';

interface SearchBarProps {
  onSearch: (countryName: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    onSearch(input.trim());
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-12 flex flex-col md:flex-row md:items-center md:space-x-4">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter country name..."
        className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-0 text-gray-800 bg-gradient-to-r from-white/70 to-white/50 backdrop-blur-sm"
      />
      <button
        type="submit"
        className="mt-4 md:mt-0 bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white px-6 py-3 rounded-lg font-medium transition"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
