import ProjectCard from "./ProjectCard";

function WorkSection({ id }) {
  return (
    <section id={id} className='h-screen flex flex-col justify-end pt-10'>
      <div className="flex-1">
        <ProjectCard 
          title='NYT Connections Archive'
          description='Archive of popular NYT puzzle game Connections'
          type='Project'
        />
      </div>
      <h1 className=" text-[#E6E8E3] text-[clamp(50px,9vw,140px)] font-chillax font-semibold">Select Work</h1>    
    </section>
    
  )
}

export default WorkSection;