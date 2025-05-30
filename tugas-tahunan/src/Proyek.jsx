import React from "react";

const timeline = [
  { bulan: "Januari", status: "Riset awal", catatan: "Dimulai sesuai rencana" },
  { bulan: "Februari", status: "Perencanaan", catatan: "Diskusi dengan pembina" },
  { bulan: "Maret", status: "Persiapan alat", catatan: "Inventarisasi kebutuhan" },
  { bulan: "April", status: "Latihan rutin", catatan: "Mulai latihan intensif 3x seminggu" },
  { bulan: "Mei", status: "Evaluasi tengah tahun", catatan: "Tinjau ulang progres & strategi" },
  { bulan: "Juni", status: "Simulasi lomba", catatan: "Uji coba performa dalam tim" },
  { bulan: "Juli", status: "Libur sekolah", catatan: "Kegiatan dihentikan sementara" },
  { bulan: "Agustus", status: "Latihan lanjutan", catatan: "Fokus pada teknik individu" },
  { bulan: "September", status: "Konsolidasi", catatan: "Latihan tim dan strategi" },
  { bulan: "Oktober", status: "Gladi bersih", catatan: "Simulasi penuh dan pemantapan" },
  { bulan: "November", status: "Pelaksanaan lomba", catatan: "Lomba berjalan lancar" },
  { bulan: "Desember", status: "Evaluasi akhir", catatan: "Refleksi dan dokumentasi hasil" },
];

const DetailPage = () => {
  return (
    <div className="bg-[#AB886D] min-h-screen py-10 px-4 sm:px-6 md:px-10">
      {/* Kartu Proyek */}
      <div className="max-w-xl mx-auto bg-[#E5D1C1] rounded-xl shadow-lg p-6 mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4">Proyek Tahunan</h2>
        <div className="text-sm sm:text-base text-gray-800 mb-2">Nama: <strong>Taekwondo</strong></div>
        <div className="text-sm sm:text-base text-gray-800 mb-2">Jenis: <strong>Lomba</strong></div>
        <div className="text-sm sm:text-base text-gray-800 mb-2">Kategori: <strong>Ekstrakurikuler</strong></div>
        <div className="text-sm sm:text-base text-gray-800 mb-4">Estimasi: <strong>2025-11-30</strong></div>

        <div className="w-full bg-gray-300 rounded-full h-4 relative overflow-hidden">
          <div
            className="h-4 rounded-full bg-gradient-to-r from-blue-600 via-purple-500 to-red-500"
            style={{ width: "70%" }}
          ></div>
          <span className="absolute right-2 top-[-6px] text-xs sm:text-sm font-semibold text-black">
            70%
          </span>
        </div>
      </div>

      {/* Timeline */}
      <div className="max-w-5xl mx-auto bg-[#E5D1C1] p-6 sm:p-8 rounded-lg shadow-md">
        <h3 className="text-xl sm:text-2xl font-bold text-center mb-6">
          Detail Proyek Tahunan Taekwondo
        </h3>
        <h4 className="text-base sm:text-lg font-semibold mb-3">Timeline Bulanan</h4>
        
        <div className="overflow-x-auto">
          <table className="min-w-full border border-black text-sm sm:text-base">
            <thead>
              <tr className="bg-gray-200 text-black">
                <th className="border border-black px-3 sm:px-4 py-2 text-left">Bulan</th>
                <th className="border border-black px-3 sm:px-4 py-2 text-left">Status</th>
                <th className="border border-black px-3 sm:px-4 py-2 text-left">Catatan</th>
              </tr>
            </thead>
            <tbody>
              {timeline.map((item, index) => (
                <tr key={index} className="hover:bg-gray-100 transition">
                  <td className="border border-black px-3 sm:px-4 py-2 capitalize">{item.bulan}</td>
                  <td className="border border-black px-3 sm:px-4 py-2 font-semibold">{item.status}</td>
                  <td className="border border-black px-3 sm:px-4 py-2">{item.catatan}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
