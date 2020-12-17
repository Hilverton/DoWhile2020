import { motion } from "framer-motion";
import Link from "next/link";

const Next: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <motion.img src="/img/nextjs.svg" layoutId="nextjs-logo" />

      <div className="mb-7 space-y-5">
        <p className="font-sans font-bold text-2xl">
          O Framework React para produção.
        </p>

        <p className="font-sans">
          Next.js oferece a melhor experiência para o desenvolvedor com todos os
          recursos de que você precisa para produção: renderização estática e de
          servidor híbrida, suporte TypeScript, empacotamento inteligente,
          pré-busca de rota e muito mais. Nenhuma configuração necessária.
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

export default Next;
