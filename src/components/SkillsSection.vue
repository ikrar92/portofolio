<script setup>
import { ref } from 'vue'
import { 
  FileSpreadsheet, 
  FileText, 
  Palette, 
  Package, 
  ClipboardCheck, 
  ChevronRight, 
  Sparkle,
  Sparkles
} from 'lucide-vue-next'

const skills = ref([
  {
    name: 'Microsoft Excel',
    category: 'Analisis Data & Rekapitulasi',
    description: 'Mahir dalam mengolah database, formula kompleks (VLOOKUP/XLOOKUP, IF, SUMIFS), Pivot Table, Visualisasi Chart, dan pembersihan data mentah.',
    proficiency: 'Keahlian Utama',
    colorClass: 'text-emerald-600 bg-emerald-50 border-emerald-100',
    icon: FileSpreadsheet
  },
  {
    name: 'Microsoft Word',
    category: 'Penyusunan Dokumen',
    description: 'Terbiasa menyusun dokumen formal, laporan bulanan, sistem arsip, surat menyurat resmi, serta formatting dokumen yang rapi dan standar.',
    proficiency: 'Administratif',
    colorClass: 'text-blue-600 bg-blue-50 border-blue-100',
    icon: FileText
  },
  {
    name: 'Canva',
    category: 'Visualisasi Laporan Kreatif',
    description: 'Mengubah data statistik dan laporan kaku menjadi infografis, slide presentasi, dan materi visual yang menarik, informatif, dan mudah dipahami.',
    proficiency: 'Visual & Media',
    colorClass: 'text-purple-600 bg-purple-50 border-purple-100',
    icon: Palette
  },
  {
    name: 'Manajemen Inventaris',
    category: 'Gudang & Logistik',
    description: 'Pengalaman memantau keluar-masuk barang, pencatatan kartu stok, penataan tata letak (layouting) gudang, dan optimasi kapasitas penyimpanan.',
    proficiency: 'Operasional',
    colorClass: 'text-amber-600 bg-amber-50 border-amber-100',
    icon: Package
  },
  {
    name: 'Ketelitian Stock Opname',
    category: 'Akurasi & Kontrol',
    description: 'Melakukan rekonsiliasi fisik barang dengan data sistem secara berkala untuk meminimalkan deviasi/selisih stok dan menjaga integritas data inventory.',
    proficiency: 'Akurasi Tinggi',
    colorClass: 'text-rose-600 bg-rose-50 border-rose-100',
    icon: ClipboardCheck
  },
    {
    name: 'AI',
    category: 'Generative AI & Prompt Engineering',
    description: 'Mampu memanfaatkan tools AI (seperti ChatGPT, Claude, dan Gemini) yang efektif untuk mempercepat pembuatan dokumen, riset, analisis data ringkas, serta otomatisasi tugas-tugas administratif secara efisien.',
    proficiency: 'Produktivitas dan Otomatisasi',
    colorClass: 'text-brown-600 bg-purple-50 border-purple-100',
    icon: Sparkles
  }
])
</script>

<template>
  <div class="max-w-7xl mx-auto px-6 md:px-8">
    <!-- Header Section -->
    <div class="text-center max-w-3xl mx-auto mb-16 md:mb-20 space-y-4">
      <span class="text-xs font-semibold text-indigo-600 uppercase tracking-widest bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100/50">Kompetensi</span>
      <h2 class="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
        Keahlian Utama
      </h2>
      <p class="text-slate-500 font-sans text-sm md:text-base">
        Kombinasi keahlian teknis pengolahan data dan pemahaman operasional lapangan yang kuat.
      </p>
      <div class="h-1 w-12 bg-indigo-600 mx-auto rounded-full"></div>
    </div>

    <!-- Skills Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <!-- Individual Skill Card -->
      <div 
        v-for="(skill, index) in skills" 
        :key="index" 
        class="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover-card-trigger flex flex-col justify-between"
      >
        <div class="space-y-4">
          <!-- Icon and Badge -->
          <div class="flex items-center justify-between">
            <div class="p-3 rounded-2xl" :class="skill.colorClass.split(' ').slice(1).join(' ') + ' border'">
              <component :is="skill.icon" class="w-6 h-6" :class="skill.colorClass.split(' ')[0]" />
            </div>
            <span class="text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider" :class="skill.colorClass">
              {{ skill.proficiency }}
            </span>
          </div>

          <!-- Titles -->
          <div class="space-y-1">
            <h3 class="text-lg font-bold text-slate-900 font-display">
              {{ skill.name }}
            </h3>
            <p class="text-xs font-semibold text-indigo-600 font-sans tracking-wide uppercase">
              {{ skill.category }}
            </p>
          </div>

          <!-- Description -->
          <p class="text-sm text-gray-500 leading-relaxed font-sans">
            {{ skill.description }}
          </p>
        </div>

        <!-- Card Footer -->
        <div class="pt-6 border-t border-gray-50 mt-6 flex items-center justify-between text-indigo-600 text-xs font-semibold">
          <span>Tingkat Pemahaman Luas</span>
          <ChevronRight class="w-4 h-4" />
        </div>
      </div>
    </div>
  </div>
</template>
