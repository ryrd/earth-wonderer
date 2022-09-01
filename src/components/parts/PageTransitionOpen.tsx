import { motion } from 'framer-motion'

const PageTransitionOpen = ({direction} : {direction: "home" | "detail"}) => {
    const initial = direction === 'detail' ? '100vw' : '-100vw';

    return (
        <motion.div className="h-screen w-screen bg-dark fixed top-0 left-0 z-50"
                    initial={{x : initial}}
                    exit={{x : '0vw', transition: {duration: .4, ease: [.23,.64,.43,.94]}}}
        />
    )
}

export default PageTransitionOpen