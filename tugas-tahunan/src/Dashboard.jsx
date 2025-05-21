import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const dataProyek = [
  {
    nama: "Akademik",
    deskripsi: "Membuat desain website untuk memperkuat brand sekolah.",
  },
  {
    nama: "Non Akademik",
    deskripsi: "Pendapatan saya dalam bidang non akademik selama saya berada di sekolah ini.",
  },
  {
    nama: "portofolio",
    deskripsi: "Portofolio saya selama saya berada di sekolah.",
  },
];

const skillList = [
  { nama: "Taekwondo", nilai: 90 },
  { nama: "Berenang", nilai: 75 },
  { nama: "Futsal", nilai: 74 },
  { nama: "Memanah", nilai: 78 },
  { nama: "Desain Grafis", nilai: 80 },
  { nama: "Public Speaking", nilai: 75 },
  { nama: "Editing Video", nilai: 65 },
  { nama: "Koding", nilai: 33 },
  { nama: "Chat GPT", nilai: 88 },
];

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      style={{ backgroundColor: "#AB886D" }}
      className="min-h-screen p-6 font-sans"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Intro Section */}
      <motion.section
        style={{ backgroundColor: "#AB886D" }}
        className="mb-44 p-40 rounded-xl text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <h2 className="text-7xl font-extrabold text-gray-950 mb-4 drop-shadow-md">
          Selamat Datang di dalam dunia saya
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto text-2xl font-semibold">
          scroll ke bawah dikit mau perkenalan dulu.
        </p>
      </motion.section>

      {/* Perkenalan Section */}
      <motion.section
        style={{ backgroundColor: "#D6C0B3" }}
        className="flex flex-col gap-6 mb-44 p-40 rounded-xl shadow-md text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <h2 className="text-4xl font-extrabold text-gray-950 drop-shadow-md">
          Perkenalkan nama saya Galang Ramadhan.
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto text-lg">
          Selamat datang di website saya. Saya adalah seorang pelajar yang aktif, kreatif, dan terus berusaha mengembangkan diri di berbagai bidang, baik akademik maupun non-akademik. Melalui website ini, saya ingin berbagi perjalanan, pengalaman, dan berbagai karya yang telah saya capai selama berada di lingkungan sekolah. Semoga apa yang saya tampilkan di sini bisa menjadi inspirasi dan gambaran tentang semangat saya dalam belajar dan berkarya.
        </p>
      </motion.section>

      {/* Proyek Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {dataProyek.map((item, index) => (
          <motion.div
            key={index}
            className="flex flex-col rounded-xl shadow-md p-6 text-center border border-gray-200 transition transform hover:scale-105 hover:shadow-2xl"
            style={{ backgroundColor: "#D6C0B3" }}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index, duration: 0.5 }}
          >
            <h3 className="text-4xl font-bold text-gray mb-2">{item.nama}</h3>
            <p className="text-gray-800 mb-4 text-xl">{item.deskripsi}</p>
            <button
              onClick={() => navigate("/detail")}
              className="mt-auto bg-yellow-950 hover:bg-amber-900 text-white px-6 py-2 rounded-full font-medium transition"
            >
              Learn more
            </button>
          </motion.div>
        ))}
      </div>

      {/* Skill Section */}
      <motion.section
        className="mt-24"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold text-black mb-8 text-center">Skill Saya</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillList.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-[#D6C0B3] p-4 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index, duration: 0.5 }}
              whileHover={{ scale: 1.03 }}
            >
              <h3 className=" text-xl font-semibold text-black mb-7">{skill.nama}</h3>
              <div className="relative w-full h-4 bg-white rounded-full overflow-hidden">
                <div
                  className="absolute h-4 rounded-full left-0 top-0"
                  style={{
                    width: `${skill.nilai}%`,
                    background: "linear-gradient(to right, blue, red)",
                  }}
                ></div>
                <span className="absolute right-2 top-[-5px] text-sm font-semibold text-black">
                  {skill.nilai}%
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </motion.div>
  );
};

export default Dashboard;
