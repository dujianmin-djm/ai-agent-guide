<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ref, onMounted, onUnmounted } from 'vue'

const router = useRouter()
function goTo(path: string) {
  router.push(path)
}
function scrollTo(hash: string) {
  if (router.currentRoute.value.path !== '/') {
    router.push({ path: '/', hash })
    return
  }
  const el = document.querySelector(hash)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

// Carousel showcase images
const slides = [
  { src: '/images/image1.png', caption: '智能体协作 · 重构开发流程' },
  { src: '/images/image2.png', caption: '苍穹平台 · AI 原生开发体验' },
  { src: '/images/image3.png', caption: '综合使用场景示例' },
]
const current = ref(0)
let timer: ReturnType<typeof setInterval> | null = null

onMounted(() => {
  timer = setInterval(() => {
    current.value = (current.value + 1) % slides.length
  }, 5000)
})
onUnmounted(() => {
  if (timer) clearInterval(timer)
})

function goToSlide(idx: number) {
  current.value = idx
  if (timer) clearInterval(timer)
  timer = setInterval(() => {
    current.value = (current.value + 1) % slides.length
  }, 5000)
}
</script>

<template>
  <section id="hero" class="relative flex min-h-screen items-center overflow-hidden pt-16">
    <!-- Soft background gradient -->
    <div class="absolute inset-0 bg-gradient-to-br from-blue-50/40 via-white to-purple-50/30" />

    <!-- Decorative blurred orbs -->
    <div class="absolute -left-20 top-20 h-72 w-72 rounded-full bg-blue-200/20 blur-3xl" />
    <div class="absolute -right-20 bottom-20 h-72 w-72 rounded-full bg-purple-200/20 blur-3xl" />

    <div class="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:gap-8">
      <!-- Left: Text content -->
      <div class="text-center lg:text-left">
        <p class="animate-fade-up inline-flex items-center gap-2 rounded-full border border-ink-200 bg-white/80 px-4 py-1.5 text-sm font-medium text-ink-600 shadow-apple-sm backdrop-blur-sm">
          <span class="flex h-2 w-2 rounded-full bg-emerald-400" />
          面向金蝶云苍穹开发者的 AI 实践指南
        </p>

        <h1 class="animate-fade-up mt-6 text-display-lg font-semibold leading-tight tracking-tight text-ink-800" style="animation-delay: 0.1s">
          让 AI 不只是聊天，<br />
          而是真正提效。
        </h1>

        <p class="animate-fade-up mt-6 text-lg leading-relaxed text-ink-600 lg:text-xl" style="animation-delay: 0.2s">
          面向开发工程师与实施顾问，从核心概念到厂商选型，<br class="hidden lg:block" />
          从场景推荐到实战手记，一份指南带你完整走通 AI 落地全流程。
        </p>

        <div class="animate-fade-up mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start" style="animation-delay: 0.3s">
          <button class="btn-primary w-full sm:w-auto" @click="goTo('/setup')">
            开始苍穹标品开发
          </button>
          <button class="btn-secondary w-full sm:w-auto" @click="scrollTo('#concepts')">
            了解核心概念
          </button>
        </div>

        <!-- Stats -->
        <div class="animate-fade-up mt-12" style="animation-delay: 0.4s">
          <div class="grid grid-cols-3 gap-6 text-center lg:text-left">
            <div class="transition-transform hover:scale-105">
              <div class="text-3xl font-semibold tracking-tight text-ink-800 md:text-4xl">6</div>
              <div class="mt-1 text-sm text-ink-500">个核心步骤</div>
            </div>
            <div class="transition-transform hover:scale-105">
              <div class="text-3xl font-semibold tracking-tight text-ink-800 md:text-4xl">7</div>
              <div class="mt-1 text-sm text-ink-500">大 AI 概念</div>
            </div>
            <div class="transition-transform hover:scale-105">
              <div class="text-3xl font-semibold tracking-tight text-ink-800 md:text-4xl">1</div>
              <div class="mt-1 text-sm text-ink-500">套技能体系</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Right: Carousel showcase -->
      <div class="animate-fade-up relative" style="animation-delay: 0.3s">
        <!-- 修改了 aspect 比例，适配 1730/923 -->
        <div class="relative aspect-[1730/923] w-full overflow-hidden rounded-apple-xl border border-ink-100 bg-white shadow-apple-lg">
          <!-- Slides -->
          <transition-group name="carousel">
            <div
              v-for="(slide, idx) in slides"
              v-show="current === idx"
              :key="idx"
              class="absolute inset-0"
            >
              <img
                :src="slide.src"
                :alt="slide.caption"
                class="h-full w-full object-contain" 
              />
              <!-- Caption overlay at bottom -->
              <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent px-6 py-4">
                <transition name="caption" mode="out-in">
                  <p :key="current" class="text-sm font-medium text-white">
                    {{ slide.caption }}
                  </p>
                </transition>
              </div>
            </div>
          </transition-group>

          <!-- Carousel indicators -->
          <div class="absolute bottom-4 right-4 flex gap-2">
            <button
              v-for="(slide, idx) in slides"
              :key="`dot-${idx}`"
              class="h-2 rounded-full transition-all duration-300"
              :class="current === idx ? 'w-6 bg-white' : 'w-2 bg-white/50 hover:bg-white/80'"
              @click="goToSlide(idx)"
              :aria-label="`切换到第 ${idx + 1} 张`"
            />
          </div>
        </div>

        <!-- Floating decorative card -->
        <div class="absolute -bottom-5 -left-5 hidden rounded-apple border border-ink-100 bg-white/90 p-4 shadow-apple backdrop-blur-sm md:block">
          <div class="flex items-center gap-3">
            <div class="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 text-lg">
              ⚡
            </div>
            <div>
              <div class="text-sm font-semibold text-ink-800">cosmic-dev</div>
              <div class="text-xs text-ink-500">苍穹 AI 技能包</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.carousel-enter-active,
.carousel-leave-active {
  transition: opacity 0.8s ease;
}
.carousel-enter-from,
.carousel-leave-to {
  opacity: 0;
}

.caption-enter-active,
.caption-leave-active {
  transition: all 0.4s ease;
}
.caption-enter-from {
  opacity: 0;
  transform: translateY(8px);
}
.caption-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
