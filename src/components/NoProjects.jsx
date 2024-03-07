export default function NoProject({ onAdd }) {
  return (
    <section className="w-full flex flex-col justify-center items-center gap-2">
      <img src="/logo.png" alt="website logo" className="w-28 h-28" />

      <h1 className="text-2xl font-bold text-neutral-700">
        No Project Selected
      </h1>

      <p className="my-2 text-neutral-600">
        Select a project or get started with a new one
      </p>

      <button
        onClick={onAdd}
        className="my-5 py-2 px-5 rounded ease-out transition font-sans tracking-wide font-semibold bg-neutral-800  text-neutral-500 hover:bg-neutral-600 hover:text-white"
      >
        + Add Project
      </button>
    </section>
  );
};
