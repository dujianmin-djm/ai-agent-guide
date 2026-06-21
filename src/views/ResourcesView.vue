<script setup lang="ts">
import SiteHeader from '@/components/SiteHeader.vue'
import SiteFooter from '@/components/SiteFooter.vue'
import { downloadResources } from '@/data/content'

function downloadFile(filename: string) {
  const url = `/downloads/${filename}`
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  a.click()
}
</script>

<template>
  <div class="min-h-screen bg-white">
    <SiteHeader />

    <main class="pt-28 pb-24">
      <div class="mx-auto max-w-7xl px-6">
        <!-- Header -->
        <div class="mx-auto max-w-3xl text-center">
          <p class="section-label">资源下载</p>
          <h1 class="mt-3 text-display-lg font-semibold text-ink-800">随项目附带的原始资源</h1>
          <p class="mt-5 text-lg leading-relaxed text-ink-600">
            以下资源均来自金蝶官方外发的文件，可按需在公司内部共享或纳入知识库。
          </p>
        </div>

        <!-- Resource cards -->
        <div class="mt-16 grid gap-6 md:grid-cols-2">
          <div
            v-for="(res, index) in downloadResources"
            :key="res.title"
            class="rounded-apple-lg border border-ink-200 bg-white p-7 shadow-apple-sm transition-all duration-500 hover:shadow-apple hover:-translate-y-1 animate-fade-up"
            :style="{ animationDelay: `${index * 0.06}s` }"
          >
            <div class="flex items-start justify-between gap-4">
              <div class="flex items-center gap-3">
                <img :src="res.icon" alt="" class="h-11 w-11 shrink-0 rounded-xl bg-ink-100 p-2.5 object-contain" />
                <div>
                  <h3 class="text-base font-semibold text-ink-800">{{ res.title }}</h3>
                  <p class="mt-0.5 text-xs text-ink-400">{{ res.ext.toUpperCase() }} · {{ res.size }}</p>
                </div>
              </div>
              <button
                class="inline-flex items-center gap-1.5 rounded-full bg-accent-500 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-accent-600 hover:scale-105 active:scale-95"
                @click="downloadFile(res.filename)"
              >
                <svg class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
                下载
              </button>
            </div>
            <p class="mt-4 text-sm leading-relaxed text-ink-600">{{ res.desc }}</p>
          </div>
        </div>

        <!-- Official links -->
        <div class="mt-16 rounded-apple-xl bg-ink-50 p-8 md:p-12">
          <h3 class="text-display-sm font-semibold text-center text-ink-800">环境准备官方链接</h3>
          <div class="mt-10 grid gap-4 md:grid-cols-2">
            <a
              href="https://vip.kingdee.com/knowledge/654256103479458816?productLineId=40&isKnowledge=2&lang=zh-CN"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-4 rounded-apple bg-white p-6 shadow-apple-sm transition hover:shadow-apple hover:-translate-y-0.5"
            >
              <img src="/file.svg" alt="" class="h-11 w-11 shrink-0 rounded-xl bg-accent-50 p-2.5 object-contain" />
              <div class="flex-1">
                <div class="font-semibold text-ink-800">金蝶云苍穹环境准备</div>
                <div class="mt-1 text-sm text-ink-500">官方知识库文档</div>
              </div>
              <svg class="h-5 w-5 text-ink-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </a>
            <a
              href="https://www.python.org/downloads/"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-4 rounded-apple bg-white p-6 shadow-apple-sm transition hover:shadow-apple hover:-translate-y-0.5"
            >
              <img src="/file.svg" alt="" class="h-11 w-11 shrink-0 rounded-xl bg-accent-50 p-2.5 object-contain" />
              <div class="flex-1">
                <div class="font-semibold text-ink-800">Python 官方下载</div>
                <div class="mt-1 text-sm text-ink-500">建议下载 3.12+ 64-bit</div>
              </div>
              <svg class="h-5 w-5 text-ink-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </a>
            <a
              href="https://qoder.com.cn/"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-4 rounded-apple bg-white p-6 shadow-apple-sm transition hover:shadow-apple hover:-translate-y-0.5"
            >
              <img src="/file.svg" alt="" class="h-11 w-11 shrink-0 rounded-xl bg-accent-50 p-2.5 object-contain" />
              <div class="flex-1">
                <div class="font-semibold text-ink-800">Qoder / QoderWork 官方下载</div>
                <div class="mt-1 text-sm text-ink-500">Qoder 偏编码、QoderWork 偏日常工作</div>
              </div>
              <svg class="h-5 w-5 text-ink-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </a>
            <a
              href="https://platform.deepseek.com/"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-4 rounded-apple bg-white p-6 shadow-apple-sm transition hover:shadow-apple hover:-translate-y-0.5"
            >
              <img src="/file.svg" alt="" class="h-11 w-11 shrink-0 rounded-xl bg-accent-50 p-2.5 object-contain" />
              <div class="flex-1">
                <div class="font-semibold text-ink-800">DeepSeek 开放平台</div>
                <div class="mt-1 text-sm text-ink-500">AI 大模型和工具的官方平台</div>
              </div>
              <svg class="h-5 w-5 text-ink-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </main>

    <SiteFooter />
  </div>
</template>
