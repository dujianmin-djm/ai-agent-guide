<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
const isScrolled = ref(false)
const isMobileOpen = ref(false)

const navItems = [
  { label: '首页', path: '/', hash: '#hero', isDefault: true },
  { label: '苍穹标品开发', path: '/setup' },
  { label: 'AI 厂商', path: '/vendors' },
  { label: '场景推荐', path: '/recommend' },
  { label: '开发者手记', path: '/developer-notes' },
  { label: '资源下载', path: '/resources' },
]

function navigate(item: typeof navItems[0]) {
  isMobileOpen.value = false
  if (item.path === '/' && item.hash) {
    if (route.path !== '/') {
      router.push({ path: '/', hash: item.hash })
    } else {
      const el = document.querySelector(item.hash)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  } else {
    router.push(item.path)
  }
}

function isActive(item: typeof navItems[0]) {
  if (item.path !== '/') {
    return route.path === item.path
  }
 
  // 如果不在首页，首页相关的导航项均不高亮
  if (route.path !== '/') return false
 
  // 在首页且存在 hash 时，高亮对应的 hash 项
  if (route.hash) {
    return route.hash === item.hash
  }
 
  // 在首页且没有 hash 时，默认仅高亮“首页”（#hero）
  return item.hash === '#hero'
}

function onScroll() {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <header
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
      isScrolled
        ? 'glass shadow-apple-sm'
        : 'bg-transparent border-b border-transparent',
    ]"
  >
    <div class="mx-auto flex h-14 max-w-7xl items-center justify-between px-6">
      <!-- Logo -->
      <a
        href="#"
        class="flex items-center gap-2.5 text-[15px] font-semibold tracking-tight text-ink-800 transition-opacity hover:opacity-70"
        @click.prevent="navigate({ path: '/', hash: '#hero' } as any)"
      >
        <span class="flex h-7 w-7 items-center justify-center rounded-lg bg-ink-800 text-[11px] font-bold text-white">AI</span>
        <span>AI Agent 实践指南</span>
      </a>

      <!-- Desktop nav -->
      <nav class="hidden lg:flex items-center gap-1">
        <a
          v-for="item in navItems"
          :key="item.label"
          href="#"
          :class="[
            'rounded-full px-3.5 py-1.5 text-[13px] font-medium transition-colors',
            isActive(item)
              ? 'text-ink-900 bg-ink-100'
              : 'text-ink-600 hover:text-ink-900 hover:bg-ink-50',
          ]"
          @click.prevent="navigate(item)"
        >
          {{ item.label }}
        </a>
      </nav>

      <!-- Mobile toggle -->
      <button
        class="lg:hidden rounded-lg p-2 text-ink-700 transition-colors hover:bg-ink-100"
        aria-label="菜单"
        @click="isMobileOpen = !isMobileOpen"
      >
        <svg v-if="!isMobileOpen" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg v-else class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Mobile menu -->
    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-show="isMobileOpen"
        class="absolute left-0 right-0 top-full glass lg:hidden"
      >
        <nav class="mx-auto flex max-w-7xl flex-col px-6 py-3">
          <a
            v-for="item in navItems"
            :key="item.label"
            href="#"
            class="rounded-lg px-3 py-2.5 text-sm font-medium text-ink-700 transition-colors hover:bg-ink-100 hover:text-ink-900"
            @click.prevent="navigate(item)"
          >
            {{ item.label }}
          </a>
        </nav>
      </div>
    </transition>
  </header>
</template>
