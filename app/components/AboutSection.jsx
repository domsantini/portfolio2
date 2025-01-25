function AboutSection({ id }) {
  return (
    <section id={id} className="bg-zinc-700 min-h-screen h-[100dvh] flex flex-col justify-end">
      <div className='h-full'/>
      <h1 className="text-[#E6E8E3] text-[clamp(40px,9vw,140px)] font-chillax font-semibold">
        More About Me
      </h1>
    </section>
  );
}

export default AboutSection;

