<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import EducationSection from './components/EducationSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import ContactSection from './components/ContactSection.vue'
import { Menu, X, ArrowUp } from 'lucide-vue-next'

const activeSection = ref('home')
const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)
const showBackToTop = ref(false)

const navLinks = [
  { id: 'home', label: 'Beranda' },
  { id: 'about', label: 'Tentang Saya' },
  { id: 'education', label: 'Pendidikan' },
  { id: 'skills', label: 'Keahlian' },
  { id: 'experience', label: 'Pengalaman' },
  { id: 'contact', label: 'Hubungi Kami' }
]

const handleScroll = () => {
  // Update header transparency & back to top button visibility
  isScrolled.value = window.scrollY > 50
  showBackToTop.value = window.scrollY > 500

  // Calculate header offset for precise link highlighting
  const scrollPosition = window.scrollY + 140

  // Iterate backwards so lower visible sections match first
  for (let i = navLinks.length - 1; i >= 0; i--) {
    const link = navLinks[i]
    const el = document.getElementById(link.id)
    if (el) {
      if (scrollPosition >= el.offsetTop) {
        activeSection.value = link.id
        break
      }
    }
  }
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const scrollTo = (id) => {
  isMobileMenuOpen.value = false
  const el = document.getElementById(id)
  if (el) {
    const navbarOffset = 80
    const elementPosition = el.getBoundingClientRect().top + window.pageYOffset
    const offsetPosition = elementPosition - navbarOffset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div class="min-h-screen bg-gray-50 text-slate-900 font-sans selection:bg-indigo-900 selection:text-white flex flex-col relative overflow-hidden">
    <!-- Background accents -->
    <div class="absolute top-[-20%] left-[-10%] w-[50%] h-[60%] rounded-full bg-indigo-100/30 blur-[120px] pointer-events-none"></div>
    <div class="absolute bottom-[-10%] right-[-10%] w-[45%] h-[55%] rounded-full bg-slate-200/40 blur-[120px] pointer-events-none"></div>

    <!-- Navigation Header -->
    <header 
      class="fixed top-0 left-0 w-full z-50 transition-all duration-300"
      :class="isScrolled ? 'glass-panel shadow-sm py-4 border-b border-gray-200/50' : 'bg-transparent py-6'"
    >
      <div class="max-w-7xl mx-auto px-6 md:px-8 flex justify-between items-center">
        <!-- Logo / Name -->
        <a 
          href="#home" 
          @click.prevent="scrollTo('home')" 
          class="font-display font-bold text-lg tracking-tight transition-colors duration-200 text-slate-900"
        >
          Ikrar Jundan <span class="text-indigo-600">Afza</span>
        </a>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex items-center space-x-8">
          <a 
            v-for="link in navLinks" 
            :key="link.id" 
            :href="`#${link.id}`"
            @click.prevent="scrollTo(link.id)"
            class="text-sm font-medium transition-all duration-200 relative py-1"
            :class="activeSection === link.id ? 'text-indigo-600 font-semibold' : 'text-slate-600 hover:text-slate-900'"
          >
            {{ link.label }}
            <!-- Active Indicator Underline -->
            <span 
              class="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-600 transform scale-x-0 transition-transform duration-300"
              :class="{ 'scale-x-100': activeSection === link.id }"
            ></span>
          </a>
          <!-- Direct CTA -->
          <a 
            href="#contact" 
            @click.prevent="scrollTo('contact')" 
            class="bg-slate-900 hover:bg-indigo-900 text-white text-xs font-semibold px-4 py-2 rounded-full transition-all duration-300 hover:shadow-md active:scale-95"
          >
            Hubungi
          </a>
        </nav>

        <!-- Mobile Menu Toggle Button -->
        <button 
          @click="toggleMobileMenu" 
          class="md:hidden p-2 rounded-lg text-slate-700 hover:bg-gray-100 focus:outline-none transition-colors duration-200"
          aria-label="Toggle Menu"
        >
          <Menu v-if="!isMobileMenuOpen" class="w-6 h-6" />
          <X v-else class="w-6 h-6" />
        </button>
      </div>

      <!-- Mobile Navigation Drawer -->
      <transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="opacity-0 -translate-y-4"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-4"
      >
        <div 
          v-if="isMobileMenuOpen" 
          class="absolute top-full left-0 w-full glass-panel shadow-lg border-b border-gray-200/50 py-4 px-6 flex flex-col space-y-4 md:hidden"
        >
          <a 
            v-for="link in navLinks" 
            :key="link.id" 
            :href="`#${link.id}`"
            @click.prevent="scrollTo(link.id)"
            class="text-sm font-medium py-2 px-3 rounded-lg transition-colors"
            :class="activeSection === link.id ? 'bg-indigo-50 text-indigo-700 font-semibold' : 'text-slate-600 hover:bg-gray-50 hover:text-slate-900'"
          >
            {{ link.label }}
          </a>
          <button 
            @click="scrollTo('contact')" 
            class="w-full bg-slate-900 hover:bg-indigo-900 text-white text-center py-2.5 rounded-lg text-sm font-semibold transition-colors"
          >
            Hubungi Saya
          </button>
        </div>
      </transition>
    </header>

    <!-- Main Content Sections -->
    <main class="flex-grow">
      <section id="home" class="scroll-mt-20">
        <HeroSection @discover="scrollTo('about')" />
      </section>

      <section id="about" class="py-16 md:py-24 scroll-mt-20">
        <AboutSection />
      </section>

      <section id="education" class="py-16 md:py-24 bg-slate-50/50 scroll-mt-20">
        <EducationSection />
      </section>

      <section id="skills" class="py-16 md:py-24 scroll-mt-20">
        <SkillsSection />
      </section>

      <section id="experience" class="py-16 md:py-24 bg-slate-50/50 scroll-mt-20">
        <ExperienceSection />
      </section>

      <section id="contact" class="py-16 md:py-24 bg-slate-900 text-white scroll-mt-20">
        <ContactSection />
      </section>
    </main>

    <!-- Back to Top Button -->
    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 translate-y-4 scale-95"
      enter-to-class="opacity-100 translate-y-0 scale-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0 scale-100"
      leave-to-class="opacity-0 translate-y-4 scale-95"
    >
      <button 
        v-if="showBackToTop" 
        @click="scrollTo('home')" 
        class="fixed bottom-6 right-6 z-40 bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:-translate-y-1 active:scale-95 focus:outline-none"
        aria-label="Back to top"
      >
        <ArrowUp class="w-5 h-5" />
      </button>
    </transition>
  </div>
</template>

<style scoped>
/* Scoped overrides if any, utility styles are global */
</style>