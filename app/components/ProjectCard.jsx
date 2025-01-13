function ProjectCard({ index, title, description, type, link, stack }) {
  return (
    <div style={{ top:`calc(-10% + ${index * 25})px` }} className='sticky flex flex-col justify-between gap-10 p-4 rounded-[25px] bg-zinc-500 h-[250px]'>
      <div className="space-y-2">
        <h1 className="text-xl font-semibold">{title}</h1>
        <p className="font-thin">{description}</p>
      </div>
      {/* <div className='border-2 border-solid border-pink-100'>
        <ul>
            {stack.map((technology, index) => (
              <li key={`${technology}-${index}`}>{technology}</li>
            ))}
        </ul>
      </div>
      <p>{type}</p>
      <button>
        <a href={link}>See Project</a>
      </button> */}
    </div>
  );
}

export default ProjectCard;
