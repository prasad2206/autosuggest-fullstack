/**
 * SuggestionsList Component
 * - Renders dropdown list of suggestions
 * - Supports active item highlight
 */
import React from "react";

function SuggestionsList({ suggestions, query, activeIndex, onSelect, selected }) {
  // ✅ if no query or no suggestions to show, return null
  if (query.trim() === "" || (suggestions.length === 0 && selected)) return null;

  return (
    <ul className="suggestions-list">
      {suggestions.length > 0 ? (
        suggestions.map((item, index) => {
          // ✅ highlight matching part
          const regex = new RegExp(`(${query})`, "ig");
          const parts = item.split(regex);

          return (
            <li
              key={index}
              className={`suggestion-item ${index === activeIndex ? "active" : ""}`}
              onClick={() => onSelect(item)}
            >
              {parts.map((part, i) =>
                regex.test(part) ? (
                  <span key={i} className="highlight">{part}</span>
                ) : (
                  <span key={i}>{part}</span>
                )
              )}
            </li>
          );
        })
      ) : (
        !selected && <li className="no-match">No matches found</li>
      )}
    </ul>
  );
}

export default SuggestionsList;