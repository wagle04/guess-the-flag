import { useEffect } from "react";

export default function WinModal({ isOpen, onClose, winnerCountry, guesses }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-white/30 backdrop-blur-xs flex items-center justify-center">
      <div
        className="bg-white p-6 rounded-lg shadow-lg text-center w-[300px]"
        style={{ color: "black" }}
      >
        <h2 className="text-2xl font-bold mb-4">🎉 Congratulations! 🎉</h2>
        <p className="text-lg">
          You guessed the correct country in {guesses} guesses:{" "}
          <strong>{winnerCountry}</strong>!
        </p>
        <button
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}
