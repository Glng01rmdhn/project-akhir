import React from "react";

function DetailPage() {
  const timeline = [
    { bulan: "Januari", status: "Riset awal", catatan: "Dimulai sesuai rencana" },
    { bulan: "Februari", status: "Perencanaan", catatan: "Diskusi dengan pembina" },
    { bulan: "Maret", status: "Eksekusi tahap 1", catatan: "Sedikit terlambat" },
    { bulan: "April", status: "Presentasi Tengah", catatan: "Perlu revisi" },
    { bulan: "Mei", status: "Eksekusi tahap 2", catatan: "Progres stabil" },
    { bulan: "Juni", status: "Monitoring", catatan: "Kendala teknis ringan" },
    { bulan: "Juli", status: "Perbaikan", catatan: "Tim solid" },
    { bulan: "Agustus", status: "Finalisasi", catatan: "Hampir selesai" },
    { bulan: "September", status: "Gladi bersih", catatan: "On track" },
    { bulan: "Oktober", status: "Presentasi Final", catatan: "Berjalan lancar" },
    { bulan: "November", status: "Evaluasi", catatan: "Feedback positif" },
    { bulan: "Desember", status: "Penutupan", catatan: "Proyek selesai 🎉" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-pink-100 p-6">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-purple-700 mb-4 text-center">Detail Proyek Tahunan</h1>

        <p className="mb-4 text-gray-700">
          <strong>Deskripsi:</strong> Proyek ini bertujuan untuk mengembangkan keterampilan siswa dalam kegiatan ekstrakurikuler dan akademik melalui perencanaan jangka panjang.
        </p>

        <h2 className="text-2xl font-bold text-indigo-700 mt-6 mb-2">📅 Timeline Bulanan</h2>
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-indigo-100 text-indigo-800 text-left">
              <th className="px-4 py-2 border">Bulan</th>
              <th className="px-4 py-2 border">Status</th>
              <th className="px-4 py-2 border">Catatan</th>
            </tr>
          </thead>
          <tbody>
            {timeline.map((item, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="border px-4 py-2">{item.bulan}</td>
                <td className="border px-4 py-2">{item.status}</td>
                <td className="border px-4 py-2">{item.catatan}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DetailPage;
