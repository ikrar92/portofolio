<script setup>
import { ChevronDown, FileSpreadsheet, ClipboardCheck, LayoutTemplate } from 'lucide-vue-next'

const emit = defineEmits(['discover'])
</script>

<template>
  <div class="w-full max-w-7xl mx-auto px-6 md:px-8 flex flex-col justify-center items-center text-center relative py-12 md:py-20 min-h-[85vh]">
    <!-- Dot Grid Background Overlay for Hero Section only -->
    <div class="absolute inset-0 dot-grid -z-10 opacity-70"></div>
    
    <!-- Floating visual badges for high-end aesthetic -->
    <div class="absolute top-[15%] left-[5%] md:left-[10%] animate-pulse-subtle p-3 bg-white rounded-2xl shadow-md border border-gray-100/80 hidden sm:flex items-center space-x-2">
      <div class="p-2 bg-indigo-50 text-indigo-600 rounded-lg">
        <FileSpreadsheet class="w-5 h-5" />
      </div>
      <div class="text-left">
        <p class="text-[10px] text-gray-400 font-semibold tracking-wider uppercase">Expertise</p>
        <p class="text-xs font-bold text-slate-800">Microsoft Excel</p>
      </div>
    </div>

    <div class="absolute bottom-[20%] right-[5%] md:right-[10%] animate-pulse-subtle p-3 bg-white rounded-2xl shadow-md border border-gray-100/80 hidden sm:flex items-center space-x-2" style="animation-delay: 1.5s;">
      <div class="p-2 bg-emerald-50 text-emerald-600 rounded-lg">
        <ClipboardCheck class="w-5 h-5" />
      </div>
      <div class="text-left">
        <p class="text-[10px] text-gray-400 font-semibold tracking-wider uppercase">Operational</p>
        <p class="text-xs font-bold text-slate-800">Stock Opname</p>
      </div>
    </div>

    <!-- Decorative Gradient Sphere behind name -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-80 md:h-80 bg-indigo-200/20 blur-[80px] rounded-full -z-20"></div>

    <!-- Hero Content -->
    <div class="space-y-6 md:space-y-8 max-w-3xl animate-fade-in-up">
      <!-- Tagline -->
      <span class="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 tracking-wide uppercase border border-indigo-100/50">
        Selamat Datang
      </span>

      <!-- Main Name -->
      <h1 class="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 leading-tight">
        Ikrar Jundan <span class="text-indigo-600 relative inline-block">
          Afza
          <!-- Decorative underline brush-like curve -->
          <svg class="absolute left-0 bottom-[-8px] w-full h-2.5 text-indigo-200" viewBox="0 0 100 10" preserveAspectRatio="none" fill="currentColor">
            <path d="M0,7 C30,2 70,2 100,7 L100,10 L0,10 Z"></path>
          </svg>
        </span>
      </h1>

      <!-- Professional Subtitle -->
      <p class="text-lg sm:text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto font-light leading-relaxed font-sans">
        Professional Portfolio — <span class="text-slate-900 font-semibold">Administration & Data Analysis</span>
      </p>

      <!-- Short Introduction Snippet -->
      <p class="text-sm md:text-base text-gray-500 max-w-xl mx-auto leading-relaxed">
        Mengintegrasikan ketelitian administratif dengan kekuatan analisis data untuk menciptakan alur kerja operasional yang rapi, transparan, dan efisien.
      </p>

      <!-- Action Buttons -->
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
        <button 
          @click="emit('discover')"
          class="w-full sm:w-auto bg-slate-900 hover:bg-indigo-900 text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 focus:outline-none flex items-center justify-center space-x-2"
        >
          <span>Pelajari Selengkapnya</span>
          <ChevronDown class="w-4 h-4 animate-bounce" />
        </button>
        
        <a 
          href="#contact"
          class="w-full sm:w-auto bg-white hover:bg-gray-50 text-slate-800 font-semibold px-8 py-3.5 rounded-full border border-gray-200 shadow-sm transition-all duration-300 hover:shadow active:scale-98 text-center"
        >
          Mari Terhubung
        </a>
      </div>
    </div>
  </div>
</template>
