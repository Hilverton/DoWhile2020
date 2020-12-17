import { motion } from "framer-motion";
import Link from "next/link";

const FramerMotion: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <motion.img src="/img/framermotion.svg" layoutId="framermotion-logo" />

      <div className="mb-5 space-y-5">
        <p className="font-sans">
          Uma biblioteca de movimento pronta para produção para React. Utilize o
          poder por trás do Framer, a melhor ferramenta de prototipagem para
          equipes. Orgulhosamente de código aberto.
        </p>
        <p className="font-sans font-bold text-2xl">
          Animações declarativas prontas para produção.
        </p>

        <p className="font-sans">
          Uma sintaxe declarativa simples significa que você escreve menos
          código. Menos código significa que sua base de código é mais fácil de
          ler e manter.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <Link href="/">
          <a className="bg-gray-900 text-gray-50 px-6 py-3 text-lg font-semibold rounded-xl hover:bg-gray-700">
            Voltar para a Home
          </a>
        </Link>
      </motion.div>
    </div>
  );
};

export default FramerMotion;
