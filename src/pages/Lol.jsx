import React from 'react'
import { motion } from 'framer-motion'

export default function Lol() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">League of Legends</h2>
      <motion.div whileHover={{ scale: 1.05 }} className="p-4 bg-gray-800 rounded-lg shadow">
        <h3 className="text-xl">Yasuo</h3>
        <p>O espadachim do vento, mestre em duelos intensos.</p>
      </motion.div>
      <motion.div whileHover={{ scale: 1.05 }} className="p-4 bg-gray-800 rounded-lg shadow">
        <h3 className="text-xl">Zed</h3>
        <p>O mestre das sombras, ágil e implacável.</p>
      </motion.div>
    </div>
  )
}
