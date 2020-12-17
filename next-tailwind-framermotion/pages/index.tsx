import { motion } from "framer-motion";
import Link from "next/link";

interface CardProps {
  href: string;
  imgSrc: string;
  layoutId: string;
  borderColor: string;
}

const Card: React.FC<CardProps> = ({ href, imgSrc, layoutId, borderColor }) => {
  return (
    <Link href={href}>
      <motion.div
        variants={variants}
        className={`relative h-20 md:h-40 bg-gray-100 rounded-xl cursor-pointer hover:bg-gray-50 transition hover:border hover:border-${borderColor}`}
      >
        <motion.img
          src={imgSrc}
          className="w-full h-full"
          layoutId={layoutId}
          variants={variants}
        />
      </motion.div>
    </Link>
  );
};

const variants = {
  visible: {
    opacity: 1,
    transition: { duration: 1, delayChildren: 1, staggerChildren: 0.3 },
  },
  hidden: {
    opacity: 0,
  },
};

export default function Home() {
  return (
    <div>
      <motion.h1
        transition={{
          duration: 1,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-4xl sm:text-6xl lg:text-7xl mt-10 md:mt-24 leading-none font-extrabold tracking-tight text-gray-900"
      >
        Construa sites modernos com agilidade sem precisar sair do HTML
      </motion.h1>

      <motion.div
        transition={{
          delay: 2,
        }}
        variants={variants}
        initial="hidden"
        animate="visible"
        className="mt-10 mb-5 md:mt-24 grid w-full grid-cols-1 grid-rows-3 gap-4 md:grid-cols-3 md:grid-rows-1"
      >
        <Card
          href="/nextjs"
          imgSrc="/img/nextjs.svg"
          layoutId="nextjs-logo"
          borderColor="black"
        />
        <Card
          href="/tailwind"
          imgSrc="/img/tailwind.svg"
          layoutId="tailwind-logo"
          borderColor="green-600"
        />
        <Card
          href="/framermotion"
          imgSrc="/img/framermotion.svg"
          layoutId="framermotion-logo"
          borderColor="red-400"
        />
      </motion.div>
    </div>
  );
}
