<script setup lang="ts">
import SiteHeader from '@/components/SiteHeader.vue'
import SiteFooter from '@/components/SiteFooter.vue'
import SetupStepsSection from '@/components/SetupStepsSection.vue'
</script>


<template>
  <div class="min-h-screen bg-white">
    <SiteHeader />

    <main class="pt-16">
      <!-- Page hero -->
      <section class="relative overflow-hidden bg-gradient-to-br from-blue-50/60 via-white to-indigo-50/40 py-20 md:py-28">
        <!-- Decorative blurred orbs -->
        <div class="absolute -right-20 top-10 h-72 w-72 rounded-full bg-blue-200/20 blur-3xl" />
        <div class="absolute -left-20 bottom-10 h-72 w-72 rounded-full bg-indigo-200/20 blur-3xl" />

        <div class="relative mx-auto max-w-4xl px-6 text-center">
          <p class="mt-6 section-label">苍穹标品开发</p>
          <h1 class="mt-3 text-display-lg font-semibold text-ink-800">
            本地体验 AI 苍穹开发的所有步骤
          </h1>
          <p class="mt-5 text-lg leading-relaxed text-ink-600 mx-auto max-w-2xl">
            按照以下顺序完成环境搭建，即可在个人电脑上调用 cosmic-dev 技能进行 AI 驱动开发。从工具安装到技能配置，每一步都有详细说明，零基础也能轻松上手。
          </p>

          <!-- Quick stats -->
          <div class="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            <div class="flex items-center gap-2">
              <span class="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-blue-600 text-sm font-semibold">6</span>
              <span class="text-sm text-ink-600">个核心步骤</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 text-sm">⚡</span>
              <span class="text-sm text-ink-600">cosmic-dev 技能包</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-50 text-amber-600 text-sm">🎯</span>
              <span class="text-sm text-ink-600">零基础上手</span>
            </div>
          </div>

          <router-link to="/resources" class="btn-primary mt-8 inline-flex">
            环境准备相关资源包下载
            <svg class="ml-1 h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </router-link>
        </div>
      </section>

      <!-- Setup steps content -->
      <SetupStepsSection :show-header="false" />
    </main>

    <SiteFooter />
  </div>
</template>
