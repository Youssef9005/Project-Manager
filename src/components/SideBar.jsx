export default function SideBar({ projects, getIndex, onAdd, editProject }) {
  function getIn(index) {
    getIndex((prevIndex) => (prevIndex = index));
    editProject();
  }

  return (
    <div className="sideBar rounded-tr h-screen w-1/4 mt-6 p-5 bg-black flex flex-col">
      <div className="header">
        <h1 className="text-2xl font-semibold text-white ">Your Projects</h1>

        <button
          onClick={onAdd}
          className="my-5 py-2 px-5 rounded ease-out transition font-sans tracking-wide font-semibold bg-neutral-800  text-neutral-700 hover:bg-neutral-600 hover:text-white"
        >
          + Add Project
        </button>
      </div>

      <div className="projects">
        <ul className="flex flex-col gap-3">
          {projects.map((project, index) => {
            return (
              <li
                key={index}
                onClick={() => getIn(index)}
                className="font-medium p-2 rounded cursor-pointer text-neutral-500 hover:text-white hover:bg-neutral-900"
              >
                {project.title}
              </li>
            );
          })}
          ;
        </ul>
      </div>
    </div>
  );
};