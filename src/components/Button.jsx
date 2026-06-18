function Button({ text }) {
  return (
    <button
      className="
      px-6
      py-3

      bg-red-500
      text-white

      rounded-lg
      font-semibold

      border
      border-red-500

      hover:bg-transparent
      hover:text-red-500

      hover:scale-105

      transition-all
      duration-300

      shadow-[0_0_15px_rgba(239,68,68,0.3)]
      "
    >
      {text}
    </button>
  );
}

export default Button;