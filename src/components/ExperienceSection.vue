<script setup>
import { ref } from 'vue'
import { Calendar, Briefcase, Users, Eye } from 'lucide-vue-next'

// Tab state: 'work' atau 'organization'
const activeTab = ref('work')

// Data Pengalaman Kerja
const experiences = ref([
  {
    role: 'TEKNISI',
    company: 'Magang di Maspion IT Square Surabaya',
    period: '3 Januari 2022 - 30 Juli 2022',
    description: 'Bertanggung jawab atas pemeliharaan, pemeliharaan sistem, perbaikan perangkat keras (hardware), dan optimasi perangkat lunak (software) pada laptop maupun komputer. Berperan penting dalam memastikan keandalan operasional perangkat lunak dan fisik, meminimalkan downtime, serta memberikan solusi troubleshooting yang efisien dan terstruktur bagi pengguna individu maupun organisasi.',
    image: '/WhatsApp Image 2026-08-01 at 23.21.22.png',
    skills: ['Penggantian Komponen', 'Manajemen Thermal', 'Logika Troubleshooting', 'Manajemen Driver & Firmware'],
    stats: [
      { label: 'Akurasi Perbaikan', value: '99.8%' },
      { label: 'Efisiensi Ketepatan', value: '+40%' }
    ]
  },
  {
    role: 'Executive Administrative Assistant & E-Commerce Specialist',
    company: 'WAHANA SPAREPART',
    period: '15 Agustus 2023 - 4 Mei 2025',
    description: 'Menggabungkan keahlian dukungan administratif tingkat tinggi dengan eksekusi teknis operasional e-commerce. Berperan sebagai tangan kanan eksekutif/pemilik bisnis dalam mengelola penjadwalan, korespondensi, dan koordinasi internal, sekaligus bertanggung jawab penuh atas kelancaran operasional toko online (Shopee, Tokopedia, TikTok Shop, dll.), manajemen inventaris, integrasi data penjualan, dan optimasi traffic e-commerce.',
    image: '/admin.png',
    skills: ['Manajemen Jadwal & Agenda', 'Korespondensi & Dokumen Bisnis', 'Tren Fast-Moving', 'Pencatatan Transaksi'],
    stats: [
      { label: 'Analisis Tren', value: 'Harian' },
      { label: 'Rekap Omzet', value: 'Excel' }
    ]
  },
  {
    role: 'Logistics & Warehouse Specialist',
    company: 'HAVANA SPAREPART',
    period: '5 Mei 2025 - Sekarang',
    description: 'Fokus di bidang logistik dan operasional pergudangan yang bertanggung jawab atas efisiensi alur keluar-masuk barang (inbound & outbound), ketepatan inventaris, serta optimasi tata letak penyimpanan gudang. Berperan strategis dalam menjamin akurasi data stok, meminimalkan selisih inventory, serta memastikan seluruh proses pemenuhan pesanan (order fulfillment) dan pengiriman barang berjalan tepat waktu sesuai standar operasional (SLA).',
    image: '/gudang.png',
    skills: ['Manajemen Inbound & Outbound Logistik', 'Stock Control', 'Tata Kelola & Layout Gudang', 'Koordinasi Pemenuhan Pesanan (Fulfillment)'],
    stats: [
      { label: 'Akurasi Stok', value: '97,8%' },
      { label: 'Inventory Report', value: 'Excel' }
    ]
  }
])

// Data Pengalaman Organisasi
const organizations = ref([
  {
    role: 'PASKIBRA',
    company: '',
    period: '2017 - 2023',
    description: 'Menjalani pelatihan kedisiplinan dan kepemimpinan intensif untuk menjalankan tugas pengibaran bendera dengan tingkat presisi, sinkronisasi, dan akurasi tinggi. Berperan aktif dalam menjaga kekompakan formasi tim, mengelola manajemen waktu latihan yang ketat, serta mempertahankan fokus dan ketahanan fisik-mental di bawah tekanan operasional lapangan.',
    image: '/paskibraka.png', // Ganti dengan foto dokumentasi kegiatan Anda
    skills: ['Kedisiplinan & Ketahanan Mental', 'Kerja Sama Tim (Teamwork)', 'Manajemen Waktu', 'Eksekusi Presisi'],
    stats: [
      { label: 'Kejuaraan Tingkat Kabupaten', value: '4' },
      { label: 'Kejuaraan Tingkat Provinsi', value: '1' }
    ]
  },
  {
    role: 'OSIS',
    company: '',
    period: '2017 - 2022',
    description: 'Berkontribusi aktif dalam perancangan, perencanaan, dan eksekusi berbagai program kerja sekolah serta acara berskala internal maupun eksternal. Bertanggung jawab atas koordinasi operasional di lapangan, pengelolaan kebutuhan logistik, serta menjaga komunikasi yang efektif antar pengurus dan pihak sekolah demi memastikan keberhasilan pelaksanaan kegiatan.',
    image: '/sis.png', // Ganti dengan foto dokumentasi kegiatan Anda
    skills: ['Event Management', 'Koordinasi Tim', 'Komunikasi Antar Divisi', 'Manajemen Operasional'],
    stats: [
      { label: 'Eksekusi Tepat Waktu', value: '100%' },
      { label: 'Kolaborasi', value: 'Lintas Divisi' }
    ]
  },
  {
    role: 'PRAMUKA',
    company: '',
    period: '2020 - 2022',
    description: 'Bertanggung jawab atas perancangan, pengelolaan, dan eksekusi program kerja keorganisasian serta kegiatan lapangan berskala besar. Memimpin koordinasi tim, mengelola manajemen risiko operasional saat kegiatan luar ruang (outdoors), serta melatih anggota dalam keterampilan teknis, kedisiplinan, dan pemecahan masalah secara terstruktur.',
    image: '/pramuka.png', // Ganti dengan foto dokumentasi kegiatan Anda
    skills: ['Leadership & Team Management', 'Manajemen Risiko Operasional', 'Problem Solving di Lapangan', 'Navigasi & Perencanaan Teknis'],
    stats: [
      { label: 'Manajemen Risiko', value: 'Zero Accident' },
      { label: 'Eksekusi Kegiatan', value: '100% Terkendali' }
    ]
  },
  {
    role: 'FUTSAL',
    company: '',
    period: '2019 - 2020',
    description: 'Berkontribusi aktif sebagai pemain inti dalam membangun komunikasi, strategi permainan, dan eksekusi taktik tim di lapangan. Terbiasa mengambil keputusan krusial secara cepat di bawah tekanan kompetitif, menjaga kedisiplinan jadwal latihan fisik, serta menjunjung tinggi sportivitas dan efisiensi koordinasi lintas posisi.',
    image: '/futsal.png', // Ganti dengan foto dokumentasi kegiatan Anda
    skills: ['Kerja Sama Tim (Teamwork)', 'Pengambilan Keputusan Cepat', 'Komunikasi Taktis', 'Ketahanan Mental & Fisik'],
    stats: [
      { label: 'Koordinasi Lapangan', value: 'High Agility' },
      { label: 'Komitmen Tim', value: 'Disiplin Tinggi' }
    ]
  }
])
</script>

<template>
  <div class="max-w-7xl mx-auto px-6 md:px-8 py-12">
    <!-- Header Section -->
    <div class="text-center max-w-3xl mx-auto mb-12 space-y-4">
      <span class="text-xs font-semibold text-indigo-600 uppercase tracking-widest bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100/50">
        Rekam Jejak
      </span>
      <h2 class="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
        {{ activeTab === 'work' ? 'Pengalaman Kerja' : 'Pengalaman Organisasi' }}
      </h2>
      <p class="text-slate-500 font-sans text-sm md:text-base">
        Kontribusi nyata dalam efisiensi operasional, manajemen logistik, dan kepemimpinan tim di lapangan.
      </p>

      <!-- Tab Switcher Navigation -->
      <div class="flex justify-center items-center gap-3 pt-4">
        <button
          @click="activeTab = 'work'"
          :class="[
            'px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold transition-all duration-200 flex items-center gap-2 border',
            activeTab === 'work'
              ? 'bg-indigo-600 text-white border-indigo-600 shadow-md shadow-indigo-200'
              : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
          ]"
        >
          <Briefcase class="w-4 h-4" />
          Pengalaman Kerja ({{ experiences.length }})
        </button>

        <button
          @click="activeTab = 'organization'"
          :class="[
            'px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold transition-all duration-200 flex items-center gap-2 border',
            activeTab === 'organization'
              ? 'bg-indigo-600 text-white border-indigo-600 shadow-md shadow-indigo-200'
              : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
          ]"
        >
          <Users class="w-4 h-4" />
          Pengalaman Organisasi ({{ organizations.length }})
        </button>
      </div>

      <div class="h-1 w-12 bg-indigo-600 mx-auto rounded-full mt-6"></div>
    </div>

    <!-- Experiences / Organization List -->
    <div class="space-y-16 md:space-y-24">
      <div 
        v-for="(item, index) in (activeTab === 'work' ? experiences : organizations)" 
        :key="index" 
        class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center"
      >
        <!-- Text details column -->
        <div 
          class="lg:col-span-6 space-y-6"
          :class="index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'"
        >
          <!-- Meta tags -->
          <div class="flex flex-wrap items-center gap-3 text-xs font-sans">
            <span class="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 text-slate-800 font-semibold">
              <component :is="activeTab === 'work' ? Briefcase : Users" class="w-3.5 h-3.5 mr-1 text-slate-500" />
              {{ item.company }}
            </span>
            <span class="inline-flex items-center text-slate-500 font-medium">
              <Calendar class="w-3.5 h-3.5 mr-1 text-slate-400" />
              {{ item.period }}
            </span>
          </div>

          <!-- Role Title -->
          <h3 class="text-2xl md:text-3xl font-extrabold text-slate-900 leading-tight font-display">
            {{ item.role }}
          </h3>

          <!-- Role Description -->
          <p class="text-slate-600 leading-relaxed font-sans text-base">
            {{ item.description }}
          </p>

          <!-- Core stats / impacts -->
          <div class="grid grid-cols-2 gap-4 py-2">
            <div 
              v-for="(stat, sIdx) in item.stats" 
              :key="sIdx" 
              class="border-l-2 border-indigo-600 pl-3 py-1"
            >
              <p class="text-lg font-bold text-slate-900 font-display">{{ stat.value }}</p>
              <p class="text-xs text-gray-500 font-sans">{{ stat.label }}</p>
            </div>
          </div>

          <!-- Skills tags -->
          <div class="flex flex-wrap gap-2 pt-2">
            <span 
              v-for="(tag, tIdx) in item.skills" 
              :key="tIdx" 
              class="text-xs font-medium px-3 py-1 rounded-lg bg-indigo-50/50 text-indigo-700 border border-indigo-100/30"
            >
              {{ tag }}
            </span>
          </div>
        </div>

        <!-- Image artifact column -->
        <div 
          class="lg:col-span-6"
          :class="index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'"
        >
          <div class="relative group rounded-3xl overflow-hidden shadow-md border border-gray-200/60 bg-slate-50 transition-all duration-300 hover:shadow-xl">
            <div class="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/30 transition-all duration-300 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100">
              <span class="bg-white/95 text-slate-900 text-xs font-semibold px-4 py-2 rounded-full shadow flex items-center space-x-1.5 transition-transform duration-300 scale-90 group-hover:scale-100">
                <Eye class="w-4 h-4" />
                <span>Dokumentasi {{ activeTab === 'work' ? 'Kerja' : 'Kegiatan' }}</span>
              </span>
            </div>
            
            <img 
              :src="item.image" 
              :alt="`Bukti ${item.role}`" 
              class="w-full h-auto object-cover max-h-[360px] mx-auto transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>