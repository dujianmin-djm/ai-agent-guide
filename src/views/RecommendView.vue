<script setup lang="ts">
import { ref } from 'vue'
import SiteHeader from '@/components/SiteHeader.vue'
import SiteFooter from '@/components/SiteFooter.vue'
import { scenarios } from '@/data/recommendations'
import type { Scenario } from '@/data/recommendations'

const activeScenario = ref<Scenario>(scenarios[0])

function selectScenario(scenario: Scenario) {
  activeScenario.value = scenario
  // Scroll to detail
  setTimeout(() => {
    document.getElementById('scenario-detail')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, 50)
}

function getRankBadge(rank: number) {
  if (rank === 1) return { text: '🥇', class: 'bg-gradient-to-br from-amber-400 to-amber-600 text-white' }
  if (rank === 2) return { text: '🥈', class: 'bg-gradient-to-br from-slate-300 to-slate-500 text-white' }
  if (rank === 3) return { text: '🥉', class: 'bg-gradient-to-br from-orange-400 to-orange-600 text-white' }
  return { text: String(rank), class: 'bg-ink-100 text-ink-600' }
}
</script>

<template>
  <div class="min-h-screen bg-white">
    <SiteHeader />

    <main class="pt-28 pb-24">
      <div class="mx-auto max-w-7xl px-6">
        <!-- Header -->
        <div class="mx-auto max-w-3xl text-center">
          <p class="section-label">场景化推荐</p>
          <h1 class="mt-3 text-display-lg font-semibold text-ink-800">按使用场景选择最合适的模型</h1>
          <p class="mt-5 text-lg leading-relaxed text-ink-600">
            不同场景对模型能力的要求差异巨大。本页针对金蝶开发工程师与实施顾问的 8 大高频场景，分别给出国外与国内模型的排名推荐，并标注每款模型的核心优势与价格档位，帮助你精准选型。（排名更新日期：2026年6月）
          </p>
        </div>

        <!-- Scenario tabs -->
        <div class="mt-12">
          <div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <button
              v-for="scenario in scenarios"
              :key="scenario.id"
              :class="[
                'group relative overflow-hidden rounded-apple-lg border p-5 text-left transition-all duration-300',
                activeScenario.id === scenario.id
                  ? 'border-accent-500 bg-accent-50 shadow-apple'
                  : 'border-ink-200 bg-white hover:border-ink-300 hover:shadow-apple-sm',
              ]"
              @click="selectScenario(scenario)"
            >
              <div :class="['flex h-11 w-11 items-center justify-center rounded-2xl text-2xl', scenario.accentColor, activeScenario.id === scenario.id ? 'shadow-apple-sm' : 'opacity-90']">
                {{ scenario.icon }}
              </div>
              <h3 class="mt-3 text-base font-semibold text-ink-800">{{ scenario.title }}</h3>
              <p class="mt-1 text-xs leading-relaxed text-ink-500 line-clamp-2">{{ scenario.description }}</p>
            </button>
          </div>
        </div>

        <!-- Scenario detail -->
        <div id="scenario-detail" class="mt-12 scroll-mt-28">
          <div class="overflow-hidden rounded-apple-xl border border-ink-200 bg-white shadow-apple">
            <!-- Scenario header -->
            <div :class="['relative overflow-hidden p-8 md:p-10', activeScenario.accentColor]">
              <div class="absolute right-0 top-0 h-48 w-48 -translate-y-12 translate-x-12 rounded-full bg-white/40"></div>
              <div class="relative">
                <div class="flex items-center gap-4">
                  <div class="flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-4xl shadow-apple-sm">
                    {{ activeScenario.icon }}
                  </div>
                  <div>
                    <h2 class="text-display-sm font-semibold text-ink-800">{{ activeScenario.title }}</h2>
                    <p class="mt-1 text-sm text-ink-500">共 {{ activeScenario.overseasModels.length + activeScenario.domesticModels.length }} 款推荐模型</p>
                  </div>
                </div>
                <p class="mt-5 max-w-3xl text-base leading-relaxed text-ink-600">{{ activeScenario.description }}</p>
              </div>
            </div>

            <!-- Best pick highlight -->
            <div class="border-b border-ink-200 bg-gradient-to-r from-amber-50 to-orange-50 p-6 md:p-8">
              <div class="flex flex-col items-start gap-4 md:flex-row md:items-center">
                <div class="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-orange-600 text-3xl shadow-apple-sm">
                  ⭐
                </div>
                <div class="flex-1">
                  <div class="text-xs font-semibold uppercase tracking-wide text-amber-700">本场景最佳推荐</div>
                  <div class="mt-1 flex flex-wrap items-baseline gap-2">
                    <span class="text-2xl font-semibold text-ink-800">{{ activeScenario.bestPick.modelName }}</span>
                    <span class="text-sm text-ink-500">— {{ activeScenario.bestPick.vendor }}</span>
                  </div>
                  <p class="mt-2 text-sm leading-relaxed text-ink-700">{{ activeScenario.bestPick.reason }}</p>
                </div>
              </div>
            </div>

            <!-- Models grid -->
            <div class="grid gap-px bg-ink-200 md:grid-cols-2">
              <!-- Overseas models -->
              <div class="bg-white p-6 md:p-8">
                <div class="flex items-center gap-2">
                  <span class="text-2xl">🌍</span>
                  <h3 class="text-lg font-semibold text-ink-800">国外模型排名</h3>
                </div>
                <p class="mt-1 text-xs text-ink-500">能力顶尖，但访问难、价格高</p>

                <div class="mt-6 space-y-4">
                  <div
                    v-for="model in activeScenario.overseasModels"
                    :key="model.rank"
                    class="rounded-apple border border-ink-200 bg-white p-5 transition-all hover:shadow-apple-sm"
                  >
                    <div class="flex items-start gap-3">
                      <div :class="['flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-semibold', getRankBadge(model.rank).class]">
                        {{ getRankBadge(model.rank).text }}
                      </div>
                      <div class="flex-1 min-w-0">
                        <div class="flex flex-wrap items-center gap-2">
                          <h4 class="text-base font-semibold text-ink-800">{{ model.modelName }}</h4>
                          <span class="text-xs text-ink-400">{{ model.vendor }}</span>
                          <span v-if="model.badge" class="rounded-full bg-gradient-to-r from-amber-400 to-orange-600 px-2 py-0.5 text-xs font-medium text-white">
                            {{ model.badge }}
                          </span>
                        </div>
                        <p class="mt-2 text-sm leading-relaxed text-ink-600">{{ model.reason }}</p>
                        <div class="mt-3 flex items-center gap-1.5 text-xs text-ink-500">
                          <svg class="h-3.5 w-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                          </svg>
                          {{ model.pricing }}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Domestic models -->
              <div class="bg-white p-6 md:p-8">
                <div class="flex items-center gap-2">
                  <span class="text-2xl">🇨🇳</span>
                  <h3 class="text-lg font-semibold text-ink-800">国内模型排名</h3>
                </div>
                <p class="mt-1 text-xs text-ink-500">直连访问、性价比高、中文友好</p>

                <div class="mt-6 space-y-4">
                  <div
                    v-for="model in activeScenario.domesticModels"
                    :key="model.rank"
                    class="rounded-apple border border-ink-200 bg-white p-5 transition-all hover:shadow-apple-sm"
                  >
                    <div class="flex items-start gap-3">
                      <div :class="['flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-semibold', getRankBadge(model.rank).class]">
                        {{ getRankBadge(model.rank).text }}
                      </div>
                      <div class="flex-1 min-w-0">
                        <div class="flex flex-wrap items-center gap-2">
                          <h4 class="text-base font-semibold text-ink-800">{{ model.modelName }}</h4>
                          <span class="text-xs text-ink-400">{{ model.vendor }}</span>
                          <span v-if="model.badge" class="rounded-full bg-gradient-to-r from-emerald-400 to-teal-600 px-2 py-0.5 text-xs font-medium text-white">
                            {{ model.badge }}
                          </span>
                        </div>
                        <p class="mt-2 text-sm leading-relaxed text-ink-600">{{ model.reason }}</p>
                        <div class="mt-3 flex items-center gap-1.5 text-xs text-ink-500">
                          <svg class="h-3.5 w-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                          </svg>
                          {{ model.pricing }}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Quick comparison table -->
        <div class="mt-16">
          <div class="mx-auto max-w-3xl text-center">
            <p class="section-label">速查表</p>
            <h3 class="mt-3 text-display-sm font-semibold text-ink-800">8 大场景最佳推荐一览</h3>
            <p class="mt-4 text-base leading-relaxed text-ink-600">
              一张表看懂每个场景的最佳选择，方便快速决策。
            </p>
          </div>

          <div class="mt-10 overflow-hidden rounded-apple-lg border border-ink-200 shadow-apple-sm">
            <div class="overflow-x-auto">
              <table class="w-full">
                <thead>
                  <tr class="bg-ink-50">
                    <th class="px-6 py-4 text-left text-sm font-semibold text-ink-700">场景</th>
                    <th class="px-6 py-4 text-left text-sm font-semibold text-ink-700">国外最佳</th>
                    <th class="px-6 py-4 text-left text-sm font-semibold text-ink-700">国内最佳</th>
                    <th class="px-6 py-4 text-left text-sm font-semibold text-ink-700">综合推荐</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-ink-200">
                  <tr
                    v-for="scenario in scenarios"
                    :key="scenario.id"
                    class="cursor-pointer transition-colors hover:bg-accent-50"
                    @click="selectScenario(scenario)"
                  >
                    <td class="px-6 py-4">
                      <div class="flex items-center gap-2">
                        <span class="text-xl">{{ scenario.icon }}</span>
                        <span class="text-sm font-medium text-ink-800">{{ scenario.title }}</span>
                      </div>
                    </td>
                    <td class="px-6 py-4 text-sm text-ink-700">
                      {{ scenario.overseasModels[0]?.modelName || '—' }}
                    </td>
                    <td class="px-6 py-4 text-sm text-ink-700">
                      {{ scenario.domesticModels[0]?.modelName || '—' }}
                    </td>
                    <td class="px-6 py-4">
                      <span class="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-amber-400 to-orange-600 px-3 py-1 text-xs font-medium text-white">
                        ⭐ {{ scenario.bestPick.modelName }}
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <!-- CTA -->
        <div class="mt-16 overflow-hidden rounded-apple-xl bg-ink-800 p-8 text-white shadow-apple-lg md:p-12">
          <div class="mx-auto max-w-3xl text-center">
            <div class="flex h-14 w-14 mx-auto items-center justify-center rounded-2xl bg-accent-500 text-2xl">💡</div>
            <h3 class="mt-5 text-display-sm font-semibold">想看一线开发者的真实使用感受？</h3>
            <p class="mt-4 text-base leading-relaxed text-ink-300">
              选型不仅要看跑分，更要看真实场景下的体验。下一页是一位金蝶开发工程师在 cosmic-dev + DeepSeek V4 Pro 组合下的真实使用感受与性价比分析。
            </p>
            <router-link to="/developer-notes" class="btn-primary mt-6 inline-flex">
              阅读开发者手记
              <svg class="ml-1 h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </router-link>
          </div>
        </div>
      </div>
    </main>

    <SiteFooter />
  </div>
</template>
