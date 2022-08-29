import {} from 'react'

const DetailHeading = ({text}: {text: string}) => {
  return (
    <div className='w-screen portrait:h-10 landscape:h-16 p-5 flex'>
      <h1 className='font-anton uppercase text-[6vw] md:text-[4vw] leading-none dark:text-white'>{text}</h1>
      <div className='pl-[1vw] flex-1'>
        <div className='w-full h-[2px] bg-gradient-to-r from-black dark:from-white to-transparent translate-y-1'/>
      </div>
    </div>
  )
}

export default DetailHeading