<script setup>
import { CheckCircle, Award, ShieldCheck, Heart } from 'lucide-vue-next'

const highlights = [
  { title: 'Manajemen Operasional', desc: 'Pengalaman nyata di bidang pergudangan & ritel' },
  { title: 'Pengolahan Data', desc: 'Merombak data mentah menjadi laporan terstruktur' },
  { title: 'Ketelitian Tinggi', desc: 'Mengutamakan akurasi data dalam stock opname & arsip' },
]
</script>

<template>
  <div class="max-w-7xl mx-auto px-6 md:px-8">
    <!-- Header Section -->
    <div class="text-center max-w-3xl mx-auto mb-16 md:mb-20 space-y-4">
      <span class="text-xs font-semibold text-indigo-600 uppercase tracking-widest bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100/50">Profil Singkat</span>
      <h2 class="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
        Tentang Saya
      </h2>
      <div class="h-1 w-12 bg-indigo-600 mx-auto rounded-full"></div>
    </div>

    <!-- Grid Container -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
      <!-- Profile Image Container -->
      <div class="lg:col-span-5 flex justify-center relative">
        <div class="relative w-72 sm:w-80 h-96 group">
          <!-- Background decorative border offset -->
          <div class="absolute inset-0 border-2 border-indigo-600 rounded-3xl translate-x-4 translate-y-4 transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2"></div>
          
          <!-- Image Wrapper -->
          <div class="absolute inset-0 bg-slate-100 rounded-3xl overflow-hidden shadow-lg border border-gray-200">
            <img 
              src="/profile-ikrar.png" 
              alt="Ikrar Jundan Afza Profile Picture" 
              class="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          
          <!-- Decorative Floating Card -->
          <div class="absolute bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 flex items-center space-x-3 max-w-[240px]">
            <div class="p-2.5 bg-indigo-50 text-indigo-600 rounded-xl">
              <Award class="w-5 h-5" />
            </div>
            <div>
              <p class="text-xs font-bold text-slate-800">Detail Oriented</p>
              <p class="text-[10px] text-gray-500 font-medium">Bekerja dengan tingkat akurasi tinggi</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Profile Bio Container -->
      <div class="lg:col-span-7 space-y-8">
        <div class="space-y-6">
          <h3 class="text-2xl font-bold text-slate-900 leading-tight">
            Menghubungkan Efisiensi Administrasi dengan Analisis Data yang Cerdas
          </h3>
          
          <!-- Bio Paragraphs -->
          <div class="space-y-4 text-slate-600 font-sans leading-relaxed text-base">
            <p>
              Saya adalah seorang profesional di bidang <span class="text-slate-900 font-semibold">Administrasi dan Analisis Data</span> yang memiliki pengalaman kerja nyata dalam manajemen operasional gudang dan ritel.
            </p>
            <p>
              Memiliki ketertarikan kuat dalam mengolah data mentah menjadi informasi yang rapi, terstruktur, dan efisien untuk mendukung pengambilan keputusan strategis. Saya terbiasa bekerja dengan ketelitian tinggi dalam menyusun dokumen maupun merapikan inventaris.
            </p>
          </div>
        </div>

        <!-- Key Strength Highlights -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
          <div v-for="(hl, index) in highlights" :key="index" class="p-4 bg-gray-50 rounded-2xl border border-gray-100 hover:border-indigo-100 transition-colors duration-200">
            <div class="flex items-center space-x-2 text-indigo-600 mb-2">
              <CheckCircle class="w-4 h-4 shrink-0" />
              <h4 class="text-sm font-bold text-slate-800 leading-tight">{{ hl.title }}</h4>
            </div>
            <p class="text-xs text-gray-500 leading-relaxed font-sans">{{ hl.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
