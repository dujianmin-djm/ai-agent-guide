<script setup lang="ts">
const year = new Date().getFullYear()

const footerLinks = [
  {
    title: '快速导航',
    links: [
      { label: '首页', path: '/' },
      { label: '核心概念', path: '/#concepts' },
      { label: '苍穹标品开发', path: '/setup' },
    ],
  },
  {
    title: 'AI 选型',
    links: [
      { label: 'AI 厂商全景', path: '/vendors' },
      { label: '场景化推荐', path: '/recommend' },
      { label: '开发者手记', path: '/developer-notes' },
    ],
  },
  {
    title: '官方链接',
    links: [
      { label: '资源下载', path: '/resources' },
      { label: '金蝶云社区', path: 'https://vip.kingdee.com' },
      { label: 'Qoder 官网', path: 'https://qoder.com.cn/' },
      { label: 'DeepSeek 平台', path: 'https://platform.deepseek.com/' },
      { label: 'Python 官网', path: 'https://www.python.org/' },
    ],
  },
]
</script>

<template>
  <footer class="border-t border-ink-200 bg-ink-50">
    <div class="mx-auto max-w-7xl px-6 py-16">
      <div class="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <!-- Brand -->
        <div class="lg:pr-8">
          <div class="flex items-center gap-2.5">
            <span class="flex h-7 w-7 items-center justify-center rounded-lg bg-ink-800 text-[11px] font-bold text-white">AI</span>
            <span class="text-[15px] font-semibold text-ink-800">AI Agent 实践指南</span>
          </div>
          <p class="mt-4 text-sm leading-relaxed text-ink-500">
            面向金蝶云苍穹开发工程师与实施顾问的 AI Agent 实践手册，帮助团队从"单纯问答"迈向"真正提效"。
          </p>
        </div>

        <!-- Link columns -->
        <div v-for="col in footerLinks" :key="col.title">
          <h4 class="text-sm font-semibold text-ink-800">{{ col.title }}</h4>
          <ul class="mt-4 space-y-2.5">
            <li v-for="link in col.links" :key="link.label">
              <a
                :href="link.path"
                :target="link.path.startsWith('http') ? '_blank' : '_self'"
                :rel="link.path.startsWith('http') ? 'noopener noreferrer' : ''"
                class="text-sm text-ink-500 transition-colors hover:text-accent-500"
              >
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom bar -->
      <div class="mt-12 flex flex-col items-center justify-between gap-3 border-t border-ink-200 pt-8 md:flex-row">
        <p class="text-sm text-ink-500">
          ©DJM 宝蝶信息技术 {{ year }} · AI Agent 实践指南
        </p>
        <p class="text-sm text-ink-400">
          基于 Vue 3 + Vite + TypeScript + Tailwind CSS 构建
        </p>
      </div>
    </div>
  </footer>
</template>
