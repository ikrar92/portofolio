<script setup>
import { Mail, MessageSquare, Linkedin, MapPin, Send, ArrowUpRight } from 'lucide-vue-next'

const contactLinks = [
  {
    name: 'WhatsApp',
    value: '+62 838-3337-5409',
    href: 'https://wa.me/6283833375409',
    icon: MessageSquare,
    colorClass: 'bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border-emerald-500/20'
  },
  {
    name: 'Email Profesional',
    value: 'ikrarjundanafza92@email.com',
    href: 'mailto:ikrarjundanafza92@email.com',
    icon: Mail,
    colorClass: 'bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-450 text-indigo-300 border-indigo-500/20'
  },
  {
    name: 'LinkedIn Profile',
    value: 'www.linkedin.com/in/ikrar-afza',
    href: 'https:www.linkedin.com/in/ikrar-afza',
    icon: Linkedin,
    colorClass: 'bg-blue-500/10 hover:bg-blue-500/20 text-blue-450 text-blue-300 border-blue-500/20'
  }
]

const currentYear = new Date().getFullYear()
</script>

<template>
  <div class="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
    <!-- Background Dot Grid Decorator inside footer -->
    <div class="absolute inset-0 dot-grid-dark -z-10 opacity-30 pointer-events-none"></div>

    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
      <!-- Left Column: CTA & Info -->
      <div class="lg:col-span-6 space-y-6">
        <span class="text-xs font-semibold text-indigo-400 uppercase tracking-widest bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">Hubungi Saya</span>
        <h2 class="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
          Mari Terhubung dan Bekerja Sama
        </h2>
        <p class="text-slate-400 font-sans leading-relaxed text-base max-w-lg">
          Saya selalu terbuka untuk peluang kolaborasi baru, lowongan pekerjaan di bidang administrasi dan analisis data, maupun sekadar bertukar pikiran. Jangan ragu untuk menghubungi saya melalui salah satu saluran di bawah.
        </p>

        <!-- Location Meta -->
        <div class="flex items-center space-x-2 text-sm text-slate-400 font-sans pt-2">
          <MapPin class="w-4 h-4 text-indigo-400" />
          <span>Jember, Jawa Timur, Indonesia</span>
        </div>
      </div>

      <!-- Right Column: Interactive Buttons Grid -->
      <div class="lg:col-span-6 w-full space-y-4">
        <!-- Direct Quick Connection Cards -->
        <div class="grid grid-cols-1 sm:grid-cols-1 gap-4">
          <a 
            v-for="(link, index) in contactLinks" 
            :key="index"
            :href="link.href"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center justify-between p-5 rounded-2xl border transition-all duration-300 group hover:-translate-y-0.5"
            :class="link.colorClass"
          >
            <div class="flex items-center space-x-4">
              <div class="p-3 bg-white/5 rounded-xl text-white group-hover:scale-110 transition-transform">
                <component :is="link.icon" class="w-5 h-5" />
              </div>
              <div class="text-left">
                <p class="text-[10px] text-slate-400 font-semibold tracking-wider uppercase">{{ link.name }}</p>
                <p class="text-sm font-bold text-white tracking-wide font-sans">{{ link.value }}</p>
              </div>
            </div>
            <ArrowUpRight class="w-5 h-5 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-slate-400" />
          </a>
        </div>
      </div>
    </div>

    <!-- Divider Line -->
    <div class="h-[1px] w-full bg-slate-800 my-12 md:my-16"></div>

    <!-- Footer Copyright -->
    <div class="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-sans">
      <p>© {{ currentYear }} Ikrar Jundan Afza. Hak Cipta Dilindungi.</p>
      <div class="flex space-x-6">
        <a href="#home" class="hover:text-indigo-400 transition-colors">Beranda</a>
        <a href="#about" class="hover:text-indigo-400 transition-colors">Tentang Saya</a>
        <a href="#skills" class="hover:text-indigo-400 transition-colors">Keahlian</a>
        <a href="#experience" class="hover:text-indigo-400 transition-colors">Pengalaman</a>
      </div>
    </div>
  </div>
</template>
