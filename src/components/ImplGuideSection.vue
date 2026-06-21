<script setup lang="ts">
import { implScenarios } from '@/data/content'
</script>

<template>
  <section id="impl-guide" class="bg-ink-50 py-24 md:py-32">
    <div class="mx-auto max-w-7xl px-6">
      <!-- Section header -->
      <div class="mx-auto max-w-3xl text-center">
        <p class="section-label">实施层面</p>
        <h2 class="mt-3 text-display-md font-semibold text-ink-800">QoderWork + DeepSeek，实施顾问的效率引擎</h2>
        <p class="mt-5 text-lg leading-relaxed text-ink-600">
          实施顾问不需要写代码。把重复性文档工作交给 AI，把精力放回业务沟通与方案设计上。
        </p>
      </div>

      <!-- Scenario cards -->
      <div class="mt-16 grid gap-6 md:grid-cols-2">
        <div
          v-for="(scenario, index) in implScenarios"
          :key="scenario.title"
          class="feature-card animate-fade-up"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <div class="flex items-start gap-4">
            <div class="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-accent-50 text-accent-600">
              <svg class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
              </svg>
            </div>
            <div class="flex-1">
              <h3 class="text-lg font-semibold text-ink-800">{{ scenario.title }}</h3>
              <p class="mt-2 text-base leading-relaxed text-ink-600">{{ scenario.desc }}</p>
              <div class="mt-4 flex flex-wrap gap-2">
                <span v-for="tag in scenario.tags" :key="tag" class="tag-pill-accent">
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Tips -->
      <div class="mt-16 rounded-apple-xl border border-ink-200 bg-white p-8 shadow-apple-sm md:p-12">
        <h3 class="text-display-sm font-semibold text-center text-ink-800">使用技巧提示</h3>
        <div class="mt-10 grid gap-6 md:grid-cols-3">
          <div class="rounded-apple bg-ink-50 p-6 transition hover:-translate-y-1 hover:shadow-apple-sm">
            <div class="text-lg font-semibold text-ink-800">1. 给足上下文</div>
            <p class="mt-2 text-sm leading-relaxed text-ink-600">
              把项目背景、客户行业、术语表一次性告诉 AI，后续输出更贴合。
            </p>
          </div>
          <div class="rounded-apple bg-ink-50 p-6 transition hover:-translate-y-1 hover:shadow-apple-sm">
            <div class="text-lg font-semibold text-ink-800">2. 分步骤追问</div>
            <p class="mt-2 text-sm leading-relaxed text-ink-600">
              先让 AI 列大纲，再逐段细化，比一次性生成长文档更容易把控。
            </p>
          </div>
          <div class="rounded-apple bg-ink-50 p-6 transition hover:-translate-y-1 hover:shadow-apple-sm">
            <div class="text-lg font-semibold text-ink-800">3. 固定模板</div>
            <p class="mt-2 text-sm leading-relaxed text-ink-600">
              把公司常用文档格式作为 prompt 模板，后续每次直接套用。
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
