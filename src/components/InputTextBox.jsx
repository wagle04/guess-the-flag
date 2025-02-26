import { useState } from "react";

// eslint-disable-next-line react/prop-types
export default function InputTextBox({ countries = [], onCountrySelect }) {
  const [input, setInput] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);

  function handleChange(e) {
    const value = e.target.value;
    setInput(value);
    setFilteredSuggestions(
      countries.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase()),
      ),
    );
  }

  function handleSelect(e) {
    onCountrySelect(e);
    handleClear();
  }

  const handleClear = () => {
    setInput("");
    setFilteredSuggestions([]);
  };

  return (
    <div className="relative m-5">
      <input
        type="text"
        className={`form-control text-xl text-black border-2 w-lg border-amber-200 rounded-lg p-3 transition-all duration-200 outline-none
          ${isFocused ? "border-blue-400 ring-2 ring-blue-300" : ""}`}
        value={input}
        onChange={handleChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder="Enter country name..."
      />
      {input && (
        <span
          className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-black"
          onClick={handleClear}
        >
          ✕
        </span>
      )}
      {input && filteredSuggestions.length > 0 && (
        <ul className="absolute bg-white border border-gray-300 w-full mt-1 rounded-lg shadow-lg">
          {filteredSuggestions.map((suggestion, index) => (
            <li
              key={index}
              className="p-2 hover:bg-gray-100 cursor-pointer text-black"
              onClick={() => handleSelect(suggestion)}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
