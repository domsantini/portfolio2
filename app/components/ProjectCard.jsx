function ProjectCard({ title, description, type}) {
  return (
    <div className='flex flex-col justify-between w-[300px] h-[500px] p-2 rounded-[25px] bg-zinc-500'>
      <div className='space-y-2'>  
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <p>{type}</p>
    </div>
  )
}

export default ProjectCard;