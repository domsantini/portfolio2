function AboutSection({ id }) {
  return (
    <section id={id} className="bg-zinc-700 min-h-screen h-[100svh] flex flex-col justify-end pt-20 p-4 md:px-8 lg:px-20 lg:pb-8">
      <div className='h-full'/>
      <h1 className="text-[#E6E8E3] text-[clamp(35px,9vw,140px)] font-chillax font-semibold">
        More About Me
      </h1>
    </section>
  );
}

export default AboutSection;

