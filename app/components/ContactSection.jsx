function ContactSection({ id, className }) {
  return (
    <section id={id} className={`flex items-end h-[50svh] overflow-hidden ${className}`}>
      <h1 className="font-chillax font-semibold text-[8.5vw]">{`Let's chat!`}</h1>
    </section>
  )
}

export default ContactSection;

