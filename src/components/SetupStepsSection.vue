<script setup lang="ts">
import { setupDetails } from '@/data/content'

withDefaults(defineProps<{ showHeader?: boolean }>(), { showHeader: true })

const quickLinks = [
  {
    title: 'AI 厂商全景',
    desc: '国内外主流 AI 厂商背景、旗舰模型与能力定位一图看懂',
    path: '/vendors',
    icon: '🌐',
    accent: 'from-emerald-400 to-emerald-500',
    accentLight: 'bg-emerald-50 text-emerald-600',
  },
  {
    title: '场景化推荐',
    desc: '编码 / 文档 / 图像 / 多模态等场景按排名推荐最强模型',
    path: '/recommend',
    icon: '🏆',
    accent: 'from-amber-400 to-amber-500',
    accentLight: 'bg-amber-50 text-amber-600',
  },
  {
    title: '开发者手记',
    desc: '一线开发者的真实使用感受与性价比选型建议',
    path: '/developer-notes',
    icon: '💡',
    accent: 'from-rose-400 to-rose-500',
    accentLight: 'bg-rose-50 text-rose-600',
  },
]
</script>


<template>
  <section id="setup" class="py-18 md:py-24 bg-gradient-to-b from-white to-ink-50/50">
    <div class="mx-auto max-w-7xl px-6">
      <!-- Section header -->
      <div v-if="showHeader" class="mx-auto max-w-3xl text-center">
        <p class="section-label">苍穹标品开发</p>
        <h2 class="mt-3 text-display-md font-semibold text-ink-800">本地体验 AI 苍穹开发的所有步骤</h2>
        <p class="mt-5 text-lg leading-relaxed text-ink-600">
          按照以下顺序完成环境搭建，即可在个人电脑上调用 cosmic-dev 技能进行 AI 驱动开发。
        </p>
      </div>
      
      <!-- Setup steps — Apple style timeline -->
      <div :class="['relative', showHeader ? 'mt-16' : 'mt-0']">
        <!-- Vertical connecting line -->
        <div class="absolute left-6 top-6 bottom-6 w-px bg-gradient-to-b from-accent-200 via-ink-200 to-transparent hidden lg:block"></div>

        <div class="space-y-5">
          <div
            v-for="(group, index) in setupDetails"
            :key="group.title"
            class="relative animate-fade-up"
            :style="{ animationDelay: `${index * 0.08}s` }"
          >
            <!-- Step number badge -->
            <div class="flex items-start gap-5">
              <div class="relative z-10 flex-shrink-0">
                <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-white border border-ink-200 shadow-apple-sm text-lg font-semibold text-accent-600">
                  {{ String(index + 1).padStart(2, '0') }}
                </div>
              </div>

              <!-- Step content card -->
              <div class="flex-1 rounded-apple-lg border border-ink-200 bg-white p-7 shadow-apple-sm transition-all duration-500 hover:shadow-apple hover:-translate-y-0.5">
                <div class="flex items-center gap-3">
                  <span class="flex h-10 w-10 items-center justify-center rounded-xl bg-ink-50 text-lg">{{ group.icon }}</span>
                  <h3 class="text-lg font-semibold text-ink-800">{{ group.title }}</h3>
                </div>
                <ul class="mt-5 space-y-3">
                  <li v-for="item in group.items" :key="item" class="flex items-start gap-3">
                    <span class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-50 text-accent-600">
                      <svg class="h-3 w-3" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </span>
                    <span class="text-base leading-relaxed text-ink-700">{{ item }}</span>
                  </li>
                </ul>
                <a
                  v-if="group.link"
                  :href="group.link.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="link-arrow mt-5"
                >
                  {{ group.link.text }}
                  <svg class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Verification callout — Apple style, lighter -->
      <div class="mt-16 overflow-hidden rounded-apple-xl bg-gradient-to-br from-accent-50 to-blue-50 border border-accent-100 p-8 md:p-12">
        <div class="flex flex-col items-start gap-6 md:flex-row md:items-center">
          <div class="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-apple-sm text-2xl">⚡</div>
          <div>
            <h3 class="text-display-sm font-semibold text-ink-800">验证是否成功</h3>
            <p class="mt-3 text-base leading-relaxed text-ink-600">
              在 QoderWork 中输入指令“/cosmic-dev”，若 AI 工具返回技能信息，表明技能包已部署就绪。随后，初始化与本地苍穹服务的连接，并通过 AI 对话让其调用技能包中的接口进行连通性测试。若调用成功，即表示运行环境已完全就绪。随后可上传需求文档或直接描述需求开始建模。
            </p>
          </div>
        </div>
      </div>

      <!-- Quick navigation -->
      <div class="mt-16">
        <div class="mx-auto max-w-3xl text-center">
          <p class="section-label">快速导航</p>
          <h3 class="mt-3 text-display-sm font-semibold text-ink-800">环境就绪后，下一步去哪？</h3>
          <p class="mt-4 text-base leading-relaxed text-ink-600">
            环境配置完成后，可以从以下入口快速进入下一阶段：下载本地资源、探索更多提效场景、了解 AI 厂商全景、按场景选型，或阅读一线开发者的真实使用感受。
          </p>
        </div>

        <div class="mt-12 grid gap-5 sm:grid-cols-1 lg:grid-cols-3">
          <router-link
            v-for="(link, index) in quickLinks"
            :key="link.path"
            :to="link.path"
            class="group relative overflow-hidden rounded-apple-lg border border-ink-200 bg-white p-6 shadow-apple-sm transition-all duration-500 hover:shadow-apple hover:-translate-y-1 animate-fade-up"
            :style="{ animationDelay: `${index * 0.06}s` }"
          >
            <div :class="['absolute right-0 top-0 h-24 w-24 -translate-y-8 translate-x-8 rounded-full opacity-10 transition-opacity duration-500 group-hover:opacity-20', link.accentLight]"></div>
            <div class="relative">
              <div :class="['flex h-12 w-12 items-center justify-center rounded-2xl text-2xl', link.accentLight]">
                {{ link.icon }}
              </div>
              <h4 class="mt-5 flex items-center gap-1.5 text-lg font-semibold text-ink-800">
                {{ link.title }}
                <svg class="h-4 w-4 text-ink-400 transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </h4>
              <p class="mt-2 text-sm leading-relaxed text-ink-600">{{ link.desc }}</p>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>
