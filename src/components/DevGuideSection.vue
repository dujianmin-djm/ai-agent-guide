<script setup lang="ts">
import { devSteps } from '@/data/content'
</script>

<template>
  <section id="dev-guide" class="py-24 md:py-32">
    <div class="mx-auto max-w-7xl px-6">
      <!-- Section header -->
      <div class="mx-auto max-w-3xl text-center">
        <p class="section-label">开发层面</p>
        <h2 class="mt-3 text-display-md font-semibold text-ink-800">cosmic-dev 让苍穹开发进入 Vibe Coding</h2>
        <p class="mt-5 text-lg leading-relaxed text-ink-600">
          从环境准备到第一行代码，只需 6 步。上传需求文档，剩下的交给 AI Agent 与 cosmic-dev 技能包。
        </p>
      </div>

      <!-- Step cards -->
      <div class="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="(step, index) in devSteps"
          :key="step.number"
          class="step-card animate-fade-up"
          :style="{ animationDelay: `${index * 0.08}s` }"
        >
          <span class="step-number">{{ step.number }}</span>
          <h3 class="mt-4 text-lg font-semibold text-ink-800">{{ step.title }}</h3>
          <p class="mt-3 text-base leading-relaxed text-ink-600">{{ step.desc }}</p>
          <a
            v-if="step.link"
            :href="step.link.url"
            target="_blank"
            rel="noopener noreferrer"
            class="link-arrow mt-5"
          >
            {{ step.link.text }}
            <svg class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </a>
        </div>
      </div>

      <!-- Pipeline highlight -->
      <div class="mt-16 overflow-hidden rounded-apple-xl bg-ink-800 shadow-apple-lg">
        <div class="grid items-center gap-8 p-8 md:grid-cols-2 md:p-12">
          <div>
            <h3 class="text-display-sm font-semibold text-white">Vibe Coding 流水线</h3>
            <p class="mt-4 text-base leading-relaxed text-ink-300">
              cosmic-dev 将苍穹开发拆分为可独立调用的阶段：元数据建模 → 菜单发布 → 元数据修改 → PDM 生成 → 插件开发 → 单元测试。每个阶段都可以通过自然语言触发。
            </p>
          </div>
          <div class="space-y-2.5">
            <div class="flex items-center gap-3 rounded-2xl bg-white/5 p-4 backdrop-blur-sm transition hover:bg-white/10">
              <span class="flex h-7 w-7 items-center justify-center rounded-full bg-accent-500 text-xs font-semibold text-white">1</span>
              <span class="text-sm text-white">元数据建模：建单据、基础资料</span>
            </div>
            <div class="flex items-center gap-3 rounded-2xl bg-white/5 p-4 backdrop-blur-sm transition hover:bg-white/10">
              <span class="flex h-7 w-7 items-center justify-center rounded-full bg-accent-500 text-xs font-semibold text-white">2</span>
              <span class="text-sm text-white">元数据修改：字段、操作、规则</span>
            </div>
            <div class="flex items-center gap-3 rounded-2xl bg-white/5 p-4 backdrop-blur-sm transition hover:bg-white/10">
              <span class="flex h-7 w-7 items-center justify-center rounded-full bg-accent-500 text-xs font-semibold text-white">3</span>
              <span class="text-sm text-white">插件开发：表单 / 列表 / 操作插件</span>
            </div>
            <div class="flex items-center gap-3 rounded-2xl bg-white/5 p-4 backdrop-blur-sm transition hover:bg-white/10">
              <span class="flex h-7 w-7 items-center justify-center rounded-full bg-accent-500 text-xs font-semibold text-white">4</span>
              <span class="text-sm text-white">单元测试：验证元数据与业务逻辑</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
