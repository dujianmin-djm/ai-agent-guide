<script setup lang="ts">
import { ref, computed } from 'vue'
import SiteHeader from '@/components/SiteHeader.vue'
import SiteFooter from '@/components/SiteFooter.vue'
import { overseasVendors, domesticVendors } from '@/data/vendors'
import type { Vendor } from '@/data/vendors'

type TabKey = 'overseas' | 'domestic'
const activeTab = ref<TabKey>('overseas')
const expandedVendor = ref<string | null>(null)

const currentVendors = computed(() =>
  activeTab.value === 'overseas' ? overseasVendors : domesticVendors
)

function toggleVendor(id: string) {
  expandedVendor.value = expandedVendor.value === id ? null : id
}

function getPricingLabel(level: string) {
  if (level === 'high') return { text: '高', class: 'bg-rose-50 text-rose-600 border border-rose-200' }
  if (level === 'medium') return { text: '中', class: 'bg-amber-50 text-amber-600 border border-amber-200' }
  return { text: '低', class: 'bg-emerald-50 text-emerald-600 border border-emerald-200' }
}

function getCustomTagClass(color: string) {
  if (color === 'red') return 'bg-red-50 text-red-600 border border-red-200'
  if (color === 'yellow') return 'bg-amber-50 text-amber-600 border border-amber-200'
  if (color === 'green') return 'bg-emerald-50 text-emerald-600 border border-emerald-200'
  return 'bg-ink-50 text-ink-600 border border-ink-200'
}

function getTierLabel(tier: string) {
  if (tier === 'flagship') return { text: '旗舰', class: 'bg-gradient-to-r from-amber-400 to-amber-600 text-white' }
  if (tier === 'high-end') return { text: '高端', class: 'bg-gradient-to-r from-slate-400 to-slate-600 text-white' }
  return { text: '性价比', class: 'bg-gradient-to-r from-emerald-400 to-emerald-600 text-white' }
}
</script>

<template>
  <div class="min-h-screen bg-white">
    <SiteHeader />

    <main class="pt-28 pb-24">
      <div class="mx-auto max-w-7xl px-6">
        <!-- Header -->
        <div class="mx-auto max-w-3xl text-center">
          <p class="section-label">AI 厂商全景</p>
          <h1 class="mt-3 text-display-lg font-semibold text-ink-800">国内外主流 AI 厂商与旗舰模型</h1>
          <p class="mt-5 text-lg leading-relaxed text-ink-600">
            选模型先选厂商。本页系统梳理了国内外 12 家主流 AI 厂商的背景、旗舰模型、能力定位、访问方式与价格档位，帮助你在合规、成本、能力之间做出最适合自己的选择。
          </p>
        </div>

        <!-- Summary stats -->
        <div class="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div class="rounded-apple border border-ink-200 bg-white p-6 shadow-apple-sm">
            <div class="text-3xl font-semibold text-ink-800">12</div>
            <div class="mt-1 text-sm text-ink-500">主流厂商</div>
          </div>
          <div class="rounded-apple border border-ink-200 bg-white p-6 shadow-apple-sm">
            <div class="text-3xl font-semibold text-ink-800">6 + 6</div>
            <div class="mt-1 text-sm text-ink-500">国外 + 国内</div>
          </div>
          <div class="rounded-apple border border-ink-200 bg-white p-6 shadow-apple-sm">
            <div class="text-3xl font-semibold text-ink-800">30+</div>
            <div class="mt-1 text-sm text-ink-500">旗舰模型</div>
          </div>
          <div class="rounded-apple border border-ink-200 bg-white p-6 shadow-apple-sm">
            <div class="text-3xl font-semibold text-ink-800">4 档</div>
            <div class="mt-1 text-sm text-ink-500">价格区间</div>
          </div>
        </div>

        <!-- Region tabs -->
        <div class="mt-12 flex justify-center">
          <div class="inline-flex rounded-full border border-ink-200 bg-ink-50 p-1">
            <button
              :class="[
                'rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-300',
                activeTab === 'overseas'
                  ? 'bg-white text-ink-800 shadow-apple-sm'
                  : 'text-ink-500 hover:text-ink-700',
              ]"
              @click="activeTab = 'overseas'; expandedVendor = null"
            >
              🌍 国外厂商（6 家）
            </button>
            <button
              :class="[
                'rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-300',
                activeTab === 'domestic'
                  ? 'bg-white text-ink-800 shadow-apple-sm'
                  : 'text-ink-500 hover:text-ink-700',
              ]"
              @click="activeTab = 'domestic'; expandedVendor = null"
            >
              🇨🇳 国内厂商（6 家）
            </button>
          </div>
        </div>

        <!-- Vendor cards -->
        <div class="mt-12 space-y-6">
          <div
            v-for="(vendor, index) in currentVendors"
            :key="vendor.id"
            class="overflow-hidden rounded-apple-lg border border-ink-200 bg-white shadow-apple-sm transition-all duration-500 hover:shadow-apple animate-fade-up"
            :style="{ animationDelay: `${index * 0.05}s` }"
          >
            <!-- Vendor header (clickable) -->
            <button
              class="flex w-full items-start gap-5 p-6 text-left transition-colors hover:bg-ink-50 md:p-8"
              @click="toggleVendor(vendor.id)"
            >
              <!-- Logo / flag -->
              <div class="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-apple-sm">
                <img v-if="vendor.logo" :src="vendor.logo" :alt="vendor.name" class="h-full w-full object-cover" />
                <span v-else :class="['flex h-full w-full items-center justify-center bg-gradient-to-br text-3xl', vendor.accentColor]">
                  {{ vendor.countryFlag }}
                </span>
              </div>

              <!-- Info -->
              <div class="flex-1 min-w-0">
                <div class="flex flex-wrap items-center gap-2">
                  <h3 class="text-xl font-semibold text-ink-800">{{ vendor.name }}</h3>
                  <span class="text-sm text-ink-400">{{ vendor.nameEn }}</span>
                  <span class="rounded-full bg-ink-50 px-2.5 py-0.5 text-xs font-medium text-ink-600 border border-ink-100">{{ vendor.country }}</span>
                  <span :class="['rounded-full px-2.5 py-0.5 text-xs font-medium', getPricingLabel(vendor.pricingLevel).class]">
                    价格：{{ getPricingLabel(vendor.pricingLevel).text }}
                  </span>
                  <!-- 自定义标签：红/黄/绿，可自由编辑 -->
                  <span
                    v-if="vendor.customTag"
                    :class="['rounded-full px-2.5 py-0.5 text-xs font-medium', getCustomTagClass(vendor.customTag.color)]"
                    :title="'自定义标签 · 可在 vendors.ts 中编辑'"
                  >
                    {{ vendor.customTag.text }}
                  </span>
                </div>
                <p class="mt-2 text-sm leading-relaxed text-ink-600 line-clamp-2">
                  {{ vendor.background }}
                </p>
                <div class="mt-3 flex flex-wrap gap-1.5">
                  <span
                    v-for="model in vendor.flagshipModels.slice(0, 3)"
                    :key="model.name"
                    class="rounded-full bg-accent-50 px-2.5 py-0.5 text-xs font-medium text-accent-600"
                  >
                    {{ model.name }}
                  </span>
                </div>
              </div>

              <!-- Expand icon -->
              <div class="shrink-0 self-center">
                <svg
                  :class="['h-5 w-5 text-ink-400 transition-transform duration-300', expandedVendor === vendor.id ? 'rotate-180' : '']"
                  fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </button>

            <!-- Expanded content -->
            <transition
              enter-active-class="transition duration-300 ease-out"
              enter-from-class="opacity-0 max-h-0"
              enter-to-class="opacity-100 max-h-[4000px]"
              leave-active-class="transition duration-200 ease-in"
              leave-from-class="opacity-100 max-h-[4000px]"
              leave-to-class="opacity-0 max-h-0"
            >
              <div v-show="expandedVendor === vendor.id" class="overflow-hidden">
                <div class="border-t border-ink-200 bg-ink-50 p-6 md:p-8">
                  <!-- Background details -->
                  <div class="grid gap-6 lg:grid-cols-3">
                    <div class="lg:col-span-2">
                      <h4 class="text-sm font-semibold uppercase tracking-wide text-ink-500">公司背景</h4>
                      <p class="mt-3 text-base leading-relaxed text-ink-700">{{ vendor.background }}</p>
                      <div v-if="vendor.philosophy" class="mt-4 rounded-apple bg-white p-4 border border-ink-200">
                        <div class="text-xs font-medium text-ink-400">企业理念</div>
                        <div class="mt-1 text-sm font-medium text-ink-700">{{ vendor.philosophy }}</div>
                      </div>
                    </div>
                    <div class="space-y-3">
                      <div class="rounded-apple bg-white p-4 border border-ink-200">
                        <div class="text-xs font-medium text-ink-400">成立时间</div>
                        <div class="mt-1 text-sm font-medium text-ink-700">{{ vendor.founded }}</div>
                      </div>
                      <div class="rounded-apple bg-white p-4 border border-ink-200">
                        <div class="text-xs font-medium text-ink-400">创始人</div>
                        <div class="mt-1 text-sm font-medium text-ink-700">{{ vendor.founders }}</div>
                      </div>
                      <div v-if="vendor.valuation" class="rounded-apple bg-white p-4 border border-ink-200">
                        <div class="text-xs font-medium text-ink-400">估值</div>
                        <div class="mt-1 text-sm font-medium text-ink-700">{{ vendor.valuation }}</div>
                      </div>
                    </div>
                  </div>

                  <!-- Flagship models -->
                  <div class="mt-8">
                    <h4 class="text-sm font-semibold uppercase tracking-wide text-ink-500">旗舰模型与能力</h4>
                    <div class="mt-4 grid gap-4 md:grid-cols-3">
                      <div
                        v-for="model in vendor.flagshipModels"
                        :key="model.name"
                        class="rounded-apple bg-white p-5 border border-ink-200 shadow-apple-sm"
                      >
                        <div class="flex items-center justify-between gap-2">
                          <h5 class="text-base font-semibold text-ink-800">{{ model.name }}</h5>
                          <span :class="['rounded-full px-2 py-0.5 text-xs font-medium', getTierLabel(model.tier).class]">
                            {{ getTierLabel(model.tier).text }}
                          </span>
                        </div>
                        <p class="mt-3 text-sm leading-relaxed text-ink-600">{{ model.capability }}</p>
                        <div v-if="model.contextWindow" class="mt-3 flex items-center gap-1.5 text-xs text-ink-500">
                          <svg class="h-3.5 w-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                          </svg>
                          上下文 {{ model.contextWindow }}
                        </div>
                        <div class="mt-3 rounded-lg bg-accent-50 px-3 py-2 text-xs text-accent-700">
                          <span class="font-medium">最适合：</span>{{ model.bestFor }}
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Strengths & Challenges -->
                  <div class="mt-8 grid gap-6 md:grid-cols-2">
                    <div class="rounded-apple bg-white p-5 border border-emerald-200">
                      <h4 class="flex items-center gap-2 text-sm font-semibold text-emerald-700">
                        <span class="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100">✓</span>
                        核心优势
                      </h4>
                      <ul class="mt-3 space-y-2">
                        <li v-for="item in vendor.strengths" :key="item" class="flex gap-2 text-sm leading-relaxed text-ink-700">
                          <span class="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-emerald-500"></span>
                          {{ item }}
                        </li>
                      </ul>
                    </div>
                    <div class="rounded-apple bg-white p-5 border border-rose-200">
                      <h4 class="flex items-center gap-2 text-sm font-semibold text-rose-700">
                        <span class="flex h-6 w-6 items-center justify-center rounded-full bg-rose-100">!</span>
                        注意事项
                      </h4>
                      <ul class="mt-3 space-y-2">
                        <li v-for="item in vendor.challenges" :key="item" class="flex gap-2 text-sm leading-relaxed text-ink-700">
                          <span class="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-rose-500"></span>
                          {{ item }}
                        </li>
                      </ul>
                    </div>
                  </div>

                  <!-- Access & pricing -->
                  <div class="mt-6 grid gap-4 md:grid-cols-3">
                    <div class="rounded-apple bg-white p-5 border border-ink-200">
                      <div class="text-xs font-medium text-ink-400">访问方式</div>
                      <div class="mt-2 text-sm leading-relaxed text-ink-700">{{ vendor.accessInfo }}</div>
                    </div>
                    <div class="rounded-apple bg-white p-5 border border-ink-200">
                      <div class="text-xs font-medium text-ink-400">价格档位</div>
                      <div class="mt-2 text-sm leading-relaxed text-ink-700">{{ vendor.pricingDesc }}</div>
                    </div>
                    <div class="rounded-apple bg-white p-5 border border-ink-200">
                      <div class="text-xs font-medium text-ink-400">最适合</div>
                      <div class="mt-2 text-sm leading-relaxed text-ink-700">{{ vendor.bestFor }}</div>
                    </div>
                  </div>

                  <!-- Official link -->
                  <div class="mt-6">
                    <a
                      :href="vendor.officialUrl"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="inline-flex items-center gap-2 rounded-full bg-ink-800 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-ink-700"
                    >
                      访问 {{ vendor.name }} 官网
                      <svg class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </transition>
          </div>
        </div>

        <!-- Comparison insight -->
        <div class="mt-16 overflow-hidden rounded-apple-xl bg-gradient-to-br from-accent-50 to-blue-50 p-8 text-ink-800 shadow-apple-sm md:p-12 border border-accent-100">
          <div class="mx-auto max-w-3xl text-center">
            <div class="flex h-14 w-14 mx-auto items-center justify-center rounded-2xl bg-white text-2xl shadow-apple-sm">🧭</div>
            <h3 class="mt-5 text-display-sm font-semibold">如何快速选厂商？</h3>
            <p class="mt-4 text-base leading-relaxed text-ink-600">
              追求极致编码与 Agent 能力、预算充足且能解决访问问题 → Anthropic Claude；需要多模态与图像生成 → OpenAI GPT；超长文档与视频理解 → Google Gemini；性价比与私有化首选 → DeepSeek V4 Pro；中文与政企合规 → 智谱 GLM；长文档结构化 → Kimi K2.7。下一页将按具体使用场景给出排名推荐。
            </p>
            <router-link to="/recommend" class="btn-primary mt-6 inline-flex">
              查看场景化推荐
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
