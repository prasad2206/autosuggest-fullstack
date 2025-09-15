import { useState } from "react";
import SuggestionsList from "./SuggestionsList";
import FALLBACK from "../data"; // fallback data import

/**
 * SearchBar Component
 * - Handles input state, keyboard navigation, selection
 */
function SearchBar() {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [activeIndex, setActiveIndex] = useState(-1); // for keyboard navigation
  const [selected, setSelected] = useState(false); // to handle "No matches found" correctly

  // Filter suggestions based on input
  const handleChange = async (e) => {
    const value = e.target.value;
    setQuery(value);
    setActiveIndex(-1);
    setSelected(false); // reset selected when typing

    if (value.length > 0) {
      try {
        const res = await fetch(`/api/suggestions?q=${value}`);
        if (!res.ok) throw new Error("Network response was not ok");
        const data = await res.json();
        setSuggestions(data);
      } catch (err) {
        // API fail ho toh fallback data use karo
        const filtered = FALLBACK.filter((item) =>
          item.toLowerCase().includes(value.toLowerCase())
        );
        setSuggestions(filtered);
      }
    } else {
      setSuggestions([]);
    }
  };

  // Keyboard navigation (↑ ↓ Enter)
  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      setActiveIndex((prev) =>
        prev < suggestions.length - 1 ? prev + 1 : prev
      );
    } else if (e.key === "ArrowUp") {
      setActiveIndex((prev) => (prev > 0 ? prev - 1 : prev));
    } else if (e.key === "Enter" && activeIndex >= 0) {
      // ✅ Use the same logic as mouse click
      handleSelect(suggestions[activeIndex]);
    } else if (e.key === "Escape") {
      // optional: ESC to close suggestions
      setSuggestions([]);
      setActiveIndex(-1);
    }
  };

  // Handle click selection
  const handleSelect = (value) => {
    setQuery(value);
    setSuggestions([]); // hide suggestions
    setActiveIndex(-1);
    setSelected(true); // mark as selected
  };

  return (
    <div className="search-wrapper">   {/* ✅ added back */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search here..."
          value={query}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          className="search-input"
        />
        <SuggestionsList
          suggestions={suggestions}
          query={query}
          activeIndex={activeIndex}
          onSelect={handleSelect}
          selected={selected}
        />
      </div>
    </div>
  );
}

export default SearchBar;
