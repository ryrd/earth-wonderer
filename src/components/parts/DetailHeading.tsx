const DetailHeading = ({text}: {text: string}) => {
  return (
    <div className='w-screen portrait:h-10 landscape:h-16 p-5 flex'>
      <h1 className='font-kaushan uppercase text-[5.5vw] md:text-[3vw] leading-none dark:text-white'>{text}</h1>
      <div className='pl-[3vw] sm:pl-[2vw] flex-1'>
        <div className='w-full h-[2px] bg-gradient-to-r from-black dark:from-white to-transparent sm:translate-y-1'/>
      </div>
    </div>
  )
}

export default DetailHeading