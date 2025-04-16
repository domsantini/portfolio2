import ContactButton from "./ContactButton";

function Footer() {
  return (
    <footer id='contact' className='relative h-[100dvh] bg-[#FBFCF8]'>
        <div className='h-full w-full fixed bottom-0 flex flex-col justify-center items-center'>
          <p className='font-chillax font-semibold text-[12vw]'>Get in touch!</p>
          <div className='flex  gap-2'>
            <ContactButton label='LinkedIn' href='https://www.linkedin.com/in/dominic-santini/'/>
            <ContactButton label='GitHub' href='https://github.com/domsantini'/>
          </div>
        </div>
      </footer>
  )
}

export default Footer;