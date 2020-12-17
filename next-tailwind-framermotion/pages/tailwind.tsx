import { motion } from "framer-motion";
import Link from "next/link";

const Tailwind: React.FC = ({ children }) => {
  return (
    <div className="flex flex-col items-center">
      <motion.img src="/img/tailwind.svg" layoutId="tailwind-logo" />

      <div className="mb-7 space-y-5">
        <p className="font-sans font-bold text-2xl">
          Crie rapidamente sites modernos sem sair do seu HTML.
        </p>

        <p className="font-sans">
          Um Framework CSS que prioriza a utilidade, com classes como
          <strong> flex, pt-4, text-center, rotate-90, </strong> que pode ser
          composta para construir qualquer design, diretamente em sua marcação.
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

export default Tailwind;
