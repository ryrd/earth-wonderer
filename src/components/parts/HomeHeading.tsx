const HomeHeading = ({text}: {text:string}) => {
  return (
  <div className='flex items-center justify-center font-kaushan uppercase text-center z-10'>
    <div className='h-[2px] portrait:w-[20vw] landscape:w-[15vw] bg-gradient-to-r from-transparent to-dark dark:to-white'/>
    <h1 className='text-[5vw] md:text-[3.5vw] mx-2 md:mx-4 text-dark dark:text-white'>{text}</h1>
    <div className='h-[2px] portrait:w-[20vw] landscape:w-[15vw] bg-gradient-to-l from-transparent to-dark dark:to-white'/>
  </div>
  )
}

export default HomeHeading