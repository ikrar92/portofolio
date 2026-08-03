<script setup>
import { ref } from 'vue'
import { GraduationCap, Calendar } from 'lucide-vue-next'

const educationList = ref([
    {
    school: 'SMP NEGERI 4 JEMBER',
    major: 'Pendidikan Menengah Pertama',
    period: '2017 - 2020',
    description: 'Membangun fondasi akademik yang kuat dalam logika dasar, komunikasi formal, serta keorganisasian dan literasi digital.',
    logo: 'smpn4-logo.png',
    skills: ['Logika & Sains Dasar', 'Literasi Digital', 'Kepemimpinan Siswa']
  },
  {
    school: 'SMK NEGERI 2 JEMBER',
    major: 'Teknik Komputer dan Jaringan',
    period: '2020 - 2023',
    description: 'Berfokus pada tata kelola administrasi teknis, manajemen sistem informasi, arsitektur jaringan komputer, serta analisis & pengolahan data.',
    logo: 'logo stm.png',
    skills: ['Teknik Komputer & Jaringan', 'Administrasi Server', 'Analisis Data & Troubleshooting']
  },
   {
    school: 'UNIVERITAS TERBUKA',
    major: 'Sistem Informasi',
    period: '2023 - Sekarang',
    description: 'Berfokus pada Analisis & Perancangan Sistem, Software Development, Data & Information Management.',
    logo: 'logo univeritas terbuka-Photoroom.png',
    skills: ['Business & Systems Analysis', 'Technical Skills', 'IT Management & Governance']
   }
])
</script>

<template>
  <div class="max-w-7xl mx-auto px-6 md:px-8">
    <!-- Header Section -->
    <div class="text-center max-w-3xl mx-auto mb-16 md:mb-20 space-y-4">
      <span class="text-xs font-semibold text-indigo-600 uppercase tracking-widest bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100/50">Pendidikan</span>
      <h2 class="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
        Riwayat Pendidikan
      </h2>
      <p class="text-slate-500 font-sans text-sm md:text-base">
        Latar belakang pendidikan formal yang membentuk dasar keahlian teknis dan analitis.
      </p>
      <div class="h-1 w-12 bg-indigo-600 mx-auto rounded-full"></div>
    </div>

    <!-- Education Cards Container -->
    <div class="space-y-8 max-w-4xl mx-auto">
      <div 
        v-for="(item, index) in educationList" 
        :key="index" 
        class="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm hover-card-trigger transition-all duration-300"
      >
        <div class="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
          <!-- Left Content Column -->
          <div class="flex-1 space-y-4 w-full">
            <!-- Period badge -->
            <div class="flex flex-wrap items-center gap-3">
              <span class="inline-flex items-center text-xs font-semibold px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-100/60">
                <Calendar class="w-3.5 h-3.5 mr-1.5" />
                {{ item.period }}
              </span>
            </div>

            <div>
              <h3 class="text-xl sm:text-2xl font-bold text-slate-900 font-display flex items-center gap-2">
                <GraduationCap class="w-6 h-6 text-indigo-600 shrink-0" />
                <span>{{ item.school }}</span>
              </h3>
              <p class="text-sm font-semibold text-indigo-600 mt-1 font-sans">
                {{ item.major }}
              </p>
            </div>

            <!-- Description -->
            <p class="text-slate-600 text-sm leading-relaxed font-sans">
              {{ item.description }}
            </p>

            <!-- Skills / Highlight Badges -->
            <div class="flex flex-wrap gap-2 pt-2">
              <span 
                v-for="(skill, sIdx) in item.skills" 
                :key="sIdx" 
                class="text-xs font-medium px-3 py-1 rounded-lg bg-gray-50 text-slate-700 border border-gray-100"
              >
                {{ skill }}
              </span>
            </div>
          </div>

          <!-- Right Column: Logo Box Container (Kotak Gambar Logo Sekolah / Universitas) -->
          <div class="shrink-0 w-full md:w-auto flex flex-col items-center md:items-end justify-center">
            <div class="relative group">
              <!-- Border Accent Decorative Card -->
              <div class="w-32 h-32 sm:w-36 sm:h-36 rounded-2xl bg-white border-2 border-gray-100 p-3 shadow-sm hover:shadow-md hover:border-indigo-200 transition-all duration-300 flex flex-col items-center justify-center text-center overflow-hidden">
                <img 
                  :src="item.logo" 
                  :alt="`Logo ${item.school}`" 
                  class="w-full h-full object-contain p-1 transition-transform duration-300 group-hover:scale-105"
                  @error="(e) => e.target.style.display='none'"
                />
                <!-- Hover Label / Fallback indicator -->
                <div class="absolute inset-0 bg-slate-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none rounded-2xl"></div>
              </div>
              <!-- Subtitle badge below image box -->
              <p class="text-[10px] text-center text-gray-400 font-medium mt-1.5 uppercase tracking-wider"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>