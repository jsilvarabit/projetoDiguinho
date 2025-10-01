import { useState } from "react";
import { motion } from "framer-motion";
import diguinho from "../assets/diguinho.jpg";
import yasuo from "../assets/yasuo.jpg";
import zed from "../assets/zed.jpg";
import eldenring from "../assets/eldenRing.jpg";
import ds1 from "../assets/ds1.jpg";
import Lol from "./Lol";
import DarkSouls from "./DarkSouls";
import EldenRing from "./EldenRing";
import { i } from "framer-motion/client";

export default function Home() {
  const [tab, setTab] = useState("lol");

  return (
    <div className="px-6 md:px-20 py-10 space-y-20">
      {/* Hero / Perfil */}
      <section className="text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <img src={diguinho} alt="Gabriel" className="w-full h-full object-cover" />
            </div>
          </div>
          <h1 className="text-4x1 md:text-6xl font-extrabold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Gabriel Rodrigues
          </h1>
          <p className="mt-3 text-purple-300">Criador de conteúdo e gamer, apaixonado por aventuras épicas e batalhas estratégicas.<br/>League of Legends, Dark Souls e Elden Ring.</p>
          <div className="flex justify-center mt-6 space-x-6 text-purple-400">
            {/* <a href="https://twitch.tv" target="_blank" rel="noreferrer">Twitch</a> */}
            <a href="https://www.youtube.com/@rodgabrielrod" target="_blank" rel="noreferrer">Youtube</a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
            <a href="" target="_blank" rel="noreferrer">TikTok</a>
          </div>
        </motion.div>
      </section>

      {/* Jogos Favoritos */}
      <section id="jogos" className="text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-purple-300">Meus Jogos Favoritos</h2>
        <p className="mt-3 text-gray-400">Explore os mundos épicos que eu domino e os personagens que definem meu estilo</p>

        {/* Tabs */}
        <div className="flex justify-center mt-6 space-x-6">
          <button onClick={() => setTab("lol")} className={`px-4 py-2 rounded-lg ${tab === "lol" ? "bg-purple-500" : "bg-gray-700"}`}>League of Legends</button>
          <button onClick={() => setTab("ds")} className={`px-4 py-2 rounded-lg ${tab === "ds" ? "bg-purple-500" : "bg-gray-700"}`}>Dark Souls</button>
          <button onClick={() => setTab("er")} className={`px-4 py-2 rounded-lg ${tab === "er" ? "bg-purple-500" : "bg-gray-700"}`}>Elden Ring</button>
        </div>

        {/* Conteúdo das Tabs */}
        {tab === "lol" && (
          <div className="grid md:grid-cols-2 gap-6 mt-10">
            {/* Yasuo */}
            <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-purple-400">Yasuo</h3>
              <p className="mt-2 text-gray-300">O Imperdoável - Mestre da espada do vento, mobilidade e dano explosivo.</p>
              <div className="mt-3 text-sm text-gray-400">Maestria 7 • 73% WR</div>
              <div className="mt-2">
                <img src={yasuo} alt="Yasuo" className="w-100 h-100 object-cover" />
              </div>
              
            </motion.div>

            {/* Zed */}
            <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-purple-400">Zed</h3>
              <p className="mt-2 text-gray-300">O Mestre das Sombras - Ninja letal que emerge das trevas para eliminar seus inimigos.</p>
              <div className="mt-3 text-sm text-gray-400">Maestria 7 • 68% WR</div>
              <div className="mt-2">
                <img src={zed} alt="Zed" className="w-100 h-100 object-cover" />
              </div>
             
            </motion.div>
          </div> 
        )}

          {tab === "ds" && (
          <div className="grid md:grid-cols-2 gap-6 mt-10">
             {/* Dark Souls */}
            <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-purple-400">Chosen Undead</h3>
              <p className="mt-2 text-gray-300">Amaldiçoado a morrer e não morrer, preso no reino de Lordran. Sua missão é despertar os sinos da torre para confirmar seu destino e, eventualmente, escolher entre reacender a Primeira Chama, prolongando a era do fogo e da luz, ou deixar a escuridão consumir tudo.</p>
              <div className="mt-2">
                <img src={ds1} alt="dark_souls1" className="w-full h-full object-cover" />
              </div>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-purple-400">Minha Jornada:</h3>
              <p className="mt-2 text-gray-300">Horas Jogadas: 350h • Bosses Derrotados: 120 • Locais Descobertos: 45</p>
              <p className="mt-2 text-gray-300">Armas Favoritas: Espada Longa, Claymore</p>
              <p className="mt-2 text-gray-300">Build Atual: Guerreiro (Força/Destreza)</p>
              <p className="mt-2 text-gray-300">Pontos Fortes: Combate corpo a corpo, resistência a danos físicos</p>
              <p className="mt-2 text-gray-300">Pontos Fracos: Magia e ataques à distância</p>
            </motion.div>
          </div>
        )}

        {tab === "er" && (
          <div className="grid md:grid-cols-2 gap-6 mt-10">
            {/* Elden Ring */}
            <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-purple-400">A jornada do Maculado</h3>
              <p className="mt-2 text-gray-300">Um exilado que retorna às Terras Intermediárias para reunir os fragmentos do agora destruído Elden Ring, e se tornar o Elden Lord</p>
              <div className="mt-4">
                <img src={eldenring} alt="Yasuo" className="w-100 h-100 object-cover" />
              </div>
              
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-purple-400">Minha Jornada:</h3>
              <p className="mt-2 text-gray-300">Horas Jogadas: 350h • Bosses Derrotados: 120 • Locais Descobertos: 45</p>
              <p className="mt-2 text-gray-300">Armas Favoritas: Espada Longa, Claymore, Uchigatana</p>
              <p className="mt-2 text-gray-300">Build Atual: Guerreiro (Força/Destreza)</p>
            </motion.div>
          </div>
        )}
      </section>

      {/* Stats League of Legends */}
      <section id="stats" className="text-center">
        {tab === "lol" && (
        <div className="bg-gradient-to-r from-purple-800 to-indigo-800 p-10 rounded-xl shadow-lg max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">League of Legends - Status</h2>
          <div className="grid md:grid-cols-4 gap-6 text-gray-100">
            <div>
              <p className="text-xl font-bold">Platina III</p>
              <p className="text-gray-400">Rank</p>
            </div>
            <div>
              <p className="text-xl font-bold">Master</p>
              <p className="text-gray-400">Peak Rank</p>
            </div>
            <div>
              <p className="text-xl font-bold">1456</p>
              <p className="text-gray-400">Total Games</p>
            </div>
            <div>
              <p className="text-xl font-bold">71%</p>
              <p className="text-gray-400">Win Rate</p>
            </div>
          </div>
        </div>
        )}
      </section>

      {/* Rodapé */}
      <footer id="contato" className="text-center mt-20 text-gray-400">
        <p className="mb-3">🎮 R O D</p>
        <p>Criando conteúdo épico e dominando os campos de batalha</p>
      </footer>
    </div>
  );
}
