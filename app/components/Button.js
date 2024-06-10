

export default function Button({ children }) {

  function handleClick() {
    console.log("Button clicked");
  }

  return (
    <button
      onClick={handleClick}
      className="px-4 py-2 bg-blue-500 text-white rounded-md"
    >
      {children}
    </button>
  );
}

