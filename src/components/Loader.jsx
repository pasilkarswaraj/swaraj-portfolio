function Loader() {
  return (
    <div
      className="
      fixed
      inset-0

      bg-black

      flex
      items-center
      justify-center

      z-[99999]
      "
    >
      <div className="text-center">
        <h1 className="text-red-500 text-5xl font-bold">
          🦇
        </h1>

        <p className="text-white mt-4">
          Initializing Batcomputer...
        </p>
      </div>
    </div>
  );
}

export default Loader;