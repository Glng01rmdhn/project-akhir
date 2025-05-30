import React from "react";

function DetailPage() {
  const timeline = [
    {
      bulan: "HALAMAN INI",
      status: "BELOM JADI",
      catatan: "INSYAALLAH SAYA BUAT SUATU SAAT NANTI",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-pink-100 p-4 sm:p-6">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-6 sm:p-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-purple-700 mb-4 text-center">
          Detail Proyek Tahunan
        </h1>

        <p className="mb-6 text-gray-700 text-sm sm:text-base">
          <strong>Deskripsi:</strong> Proyek ini bertujuan untuk mengembangkan keterampilan siswa dalam kegiatan ekstrakurikuler dan akademik melalui perencanaan jangka panjang.
        </p>

        <h2 className="text-xl sm:text-2xl font-bold text-indigo-700 mb-4">📅 Timeline Bulanan</h2>

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm sm:text-base border border-indigo-300 rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-indigo-100 text-indigo-800">
                <th className="px-4 py-2 border border-indigo-300 text-left">Bulan</th>
                <th className="px-4 py-2 border border-indigo-300 text-left">Status</th>
                <th className="px-4 py-2 border border-indigo-300 text-left">Catatan</th>
              </tr>
            </thead>
            <tbody>
              {timeline.map((item, index) => (
                <tr key={index} className="hover:bg-indigo-50 transition">
                  <td className="px-4 py-2 border border-indigo-200">{item.bulan}</td>
                  <td className="px-4 py-2 border border-indigo-200 font-semibold">{item.status}</td>
                  <td className="px-4 py-2 border border-indigo-200">{item.catatan}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-6 text-center text-sm text-gray-500 italic">
          “Tenang, semua butuh proses. Yang penting niatnya udah ada 😎”
        </p>
      </div>
    </div>
  );
}

export default DetailPage;
