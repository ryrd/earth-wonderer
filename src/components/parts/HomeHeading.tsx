import { motion } from "framer-motion"
import { Dispatch, SetStateAction } from "react";

interface homeHeadingProps {
  text: string,
  type: 'click' | 'input',
  popup: { show: boolean, type: "" | "click" | "input", input: string }
  setpopup: Dispatch<SetStateAction<{ show: boolean, type: "" | "click" | "input", input: string}>>,
  edit?: boolean
}
const HomeHeading = ({text, type, popup, setpopup, edit = false}: homeHeadingProps) => {
  return (
  <div className='relative flex items-center justify-center font-kaushan uppercase text-center z-10'>
      <button className="w-6 h-6 bg-dark dark:bg-white text-white dark:text-dark rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" 
              onClick={() => setpopup({...popup, show: true, type: type})}>
        ...
      </button>
    <motion.div className="relative flex items-center justify-center"  
                drag="x" dragConstraints={{left: -450, right: 450}} 
                contentEditable={edit} suppressContentEditableWarning={true} 
                onInput={e => {
                  // @ts-ignore
                  setpopup({...popup, input: e.target.innerText.replace(/(?:^[\s\u00a0]+)|(?:[\s\u00a0]+$)/g, '')});
                }}
    >
      <img src="/paint.webp" className="absolute top-0 left-1/2 -translate-x-1/2 portrait:-translate-y-[15%] landscape:-translate-y-[10%] w-[50vw] portrait:h-[6vh] md:w-full landscape:h-[14vh] z-0 dark:invert"/>
      <h1 className='text-[5vw] md:text-[3.5vw] mx-2 md:mx-4 text-white dark:text-dark z-10'>{text}</h1>
    </motion.div>
  </div>
  )
}

export default HomeHeading