import { motion } from "framer-motion"

const PageTransitionClose = ({from} : {from: "home" | "detail"}) => {
  const animate = from === 'detail' ? '100vw' : '-100vw';

  return (
    <motion.div className="h-screen w-screen bg-dark fixed top-0 left-0 z-[100]"
                initial={{x : '0vw'}}
                animate={{x : animate, transition: {duration: .4, ease: [.05,.66,.42,.96]}}}
    />
  )
}

export default PageTransitionClose