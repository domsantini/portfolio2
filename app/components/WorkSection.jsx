import ProjectCard from "./ProjectCard";
import { projects } from '@/app/data.js'

function WorkSection({ id }) {  
  return (
    <section id={id} className='relative h-screen flex flex-col justify-end pt-10 text-[#E6E8E3] border-2 border-solid border-red-400'>
      <div className='sticky top-0 h-full border-2 border-solid border-orange-400'>
        {projects.map(project => (
          <div>
            <h1>{project.title}</h1>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
      <h1 className="absolute bottom-2 text-[#E6E8E3] text-[clamp(50px,9vw,140px)] font-chillax font-semibold">Select Work</h1>    
    </section>
  )
}

export default WorkSection;

// <section id={id} className='relative h-screen flex flex-col justify-end pt-10 text-[#E6E8E3] border-2 border-solid border-red-400'>
// <div className="sticky top-0 flex-1 overflow-scroll border-2 border-solid border-green-400">
//   {projects.map(({ id, title, description, type, link, stack }, index) => (  
//     <div className="relative flex items-center justify-center min-h-full border-2 border-solid border-orange-400">
//       <ProjectCard
//         key={id} 
//         index={index}
//         title={title}
//         description={description}
//         type={type}
//         link={link}
//         stack={stack}
//       />
//     </div>  
//   ))}
// </div>
// <h1 className=" text-[#E6E8E3] text-[clamp(50px,9vw,140px)] font-chillax font-semibold">Select Work</h1>    
// </section>