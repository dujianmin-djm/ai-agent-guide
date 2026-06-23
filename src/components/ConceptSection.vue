<script setup lang="ts">
// Extended concepts with images for beginners
const extendedConcepts = [
  {
    title: 'AI Agent',
    subtitle: '智能体',
    icon: '🤖',
    image: '/images/concept-agent.svg',
    description:
      'AI Agent 是一种能够自主感知环境、制定计划并调用工具完成任务的智能系统。它不再只是"你问我答"，而是可以主动调用 API、查询数据库、生成代码，甚至跨系统执行操作。',
    keyPoints: ['自主决策', '工具调用', '多步规划', '持续迭代'],
  },
  {
    title: 'Skill',
    subtitle: '技能包',
    icon: '🛠️',
    image: '/images/concept-skill.svg',
    description:
      'Skill 是为 AI Agent 封装的专业能力模块。例如 cosmic-dev 就是一套面向金蝶云苍穹的"Vibe Coding"技能包，包含元数据建模、插件开发、UI 调整等完整开发流水线。',
    keyPoints: ['专业封装', '即插即用', '复用性强', '团队共享'],
  },
  {
    title: 'MCP',
    subtitle: 'Model Context Protocol',
    icon: '🔌',
    image: '/images/concept-mcp.svg',
    description:
      'MCP 是 Anthropic 推出的开放协议，让 AI 客户端能以标准化方式连接外部数据源与工具。它让 AI 像插 USB 一样，安全、统一地访问苍穹、数据库、文档库等资源。',
    keyPoints: ['标准协议', '安全连接', '统一接口', '生态开放'],
  },
]

// Additional AI knowledge for beginners
const knowledgeCards = [
  {
    title: 'LLM 大语言模型',
    subtitle: 'Large Language Model',
    icon: '🧠',
    image: '/images/concept-llm.svg',
    description:
      'LLM 是 AI Agent 的"大脑"。它通过海量文本训练，学会理解和生成人类语言。GPT、DeepSeek、Claude 都是大语言模型。它们能读懂需求、编写代码、总结文档，是整个 AI 体系的基础引擎。',
    example: '当你输入"帮我写一个苍穹单据插件"，LLM 负责理解这句话并生成对应的 Java 代码。',
  },
  {
    title: 'Prompt 提示词',
    subtitle: '与 AI 沟通的语言',
    icon: '💬',
    image: '/images/concept-prompt.svg',
    description:
      'Prompt 是你写给 AI 的指令。好的 Prompt 包含角色设定、任务描述、上下文和示例。写好 Prompt 就像写好需求文档——越清晰，AI 的输出越精准。',
    example: '"你是一名苍穹开发专家，请根据以下元数据生成单据插件代码……"这就是一个结构化 Prompt。',
  },
  {
    title: 'RAG 检索增强',
    subtitle: 'Retrieval-Augmented Generation',
    icon: '📚',
    image: '/images/concept-rag.svg',
    description:
      'RAG 让 AI 先从你的知识库中检索相关资料，再结合检索结果生成回答。这样 AI 就能"查阅"苍穹文档、历史案例，避免凭空编造，输出更准确、更贴合业务的内容。',
    example: '问"苍穹如何配置工作流"，AI 先检索苍穹文档库，再基于检索到的内容生成准确步骤。',
  },
  {
    title: 'ReAct 推理循环',
    subtitle: 'Reasoning + Acting',
    icon: '🔄',
    image: '/images/concept-flow.svg',
    description:
      'ReAct 是 Agent 的核心工作模式：先思考（Reason）该做什么，再行动（Act）调用工具，然后观察（Observe）结果，循环往复直到任务完成。这种模式让 AI 能处理复杂的多步骤任务。',
    example: 'Agent 思考"需要先查表结构"→ 调用 MCP 查询 → 观察结果 → 思考"现在可以生成代码"→ 生成代码。',
  },
]

// Learning path for beginners
const learningPath = [
  { step: '01', title: '认识 AI', desc: '了解大模型能做什么、不能做什么，建立合理预期' },
  { step: '02', title: '学会提问', desc: '掌握 Prompt 技巧，让 AI 输出更精准的结果' },
  { step: '03', title: '理解 Agent', desc: '从"对话"升级到"委托任务"，让 AI 自主完成多步工作' },
  { step: '04', title: '接入工具', desc: '通过 MCP / Skill 让 AI 连接苍穹系统，落地业务场景' },
  { step: '05', title: '持续迭代', desc: '在实践中优化提示词与技能包，形成团队 AI 资产' },
]
</script>


<template>
  <section id="concepts" class="bg-gradient-to-b from-ink-50/50 to-white py-24 md:py-32">
    <div class="mx-auto max-w-7xl px-6">
      <!-- Section header -->
      <div class="mx-auto max-w-3xl text-center">
        <p class="section-label">AI 基础概念</p>
        <h2 class="mt-3 text-display-md font-semibold text-ink-800">从零开始，理解 AI 的核心语言</h2>
        <p class="mt-5 text-lg leading-relaxed text-ink-600">
          无论你是开发工程师还是实施顾问，这几个概念是踏入 AI 世界的第一步。下文用最通俗的方式，帮你建立完整的认知框架。
        </p>
      </div>

      <!-- Core concept cards with images -->
      <div class="mt-16 grid gap-8 md:grid-cols-3">
        <div
          v-for="(item, index) in extendedConcepts"
          :key="item.title"
          class="group overflow-hidden rounded-apple-lg border border-ink-200 bg-white shadow-apple-sm transition-all duration-500 hover:shadow-apple hover:-translate-y-1 animate-fade-up"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <!-- Image -->
          <div class="aspect-[4/3] overflow-hidden bg-ink-50">
            <img
              :src="item.image"
              :alt="item.title"
              class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <!-- Content -->
          <div class="p-7">
            <div class="flex items-center gap-3">
              <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-ink-100 text-2xl">
                {{ item.icon }}
              </div>
              <div>
                <h3 class="text-xl font-semibold text-ink-800">{{ item.title }}</h3>
                <p class="text-sm text-ink-500">{{ item.subtitle }}</p>
              </div>
            </div>
            <p class="mt-4 text-base leading-relaxed text-ink-600">{{ item.description }}</p>
            <div class="mt-5 flex flex-wrap gap-2">
              <span
                v-for="point in item.keyPoints"
                :key="point"
                class="rounded-full bg-ink-100 px-3 py-1 text-xs font-medium text-ink-600"
              >
                {{ point }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Divider -->
      <div class="mt-24 text-center">
        <p class="section-label">进阶知识</p>
        <h3 class="mt-3 text-display-sm font-semibold text-ink-800">深入理解 AI 的工作原理</h3>
        <p class="mt-4 text-base leading-relaxed text-ink-600 mx-auto max-w-2xl">
          掌握这些概念，你就能真正看懂 AI 是如何"思考"和"行动"的，从而更好地驾驭它。
        </p>
      </div>

      <!-- Knowledge cards with alternating layout -->
      <div class="mt-16 space-y-8">
        <div
          v-for="(item, index) in knowledgeCards"
          :key="item.title"
          class="grid items-center gap-8 rounded-apple-lg border border-ink-200 bg-white p-8 shadow-apple-sm transition-all duration-500 hover:shadow-apple animate-fade-up md:grid-cols-2 md:p-10"
          :style="{ animationDelay: `${index * 0.08}s` }"
          :class="{ 'md:[direction:rtl]': index % 2 === 1 }"
        >
          <!-- Image -->
          <div class="overflow-hidden rounded-apple [direction:ltr]">
            <img
              :src="item.image"
              :alt="item.title"
              class="w-full rounded-apple transition-transform duration-700 hover:scale-105"
            />
          </div>
          <!-- Content -->
          <div class="[direction:ltr]">
            <div class="flex items-center gap-3">
              <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-ink-100 text-2xl">
                {{ item.icon }}
              </div>
              <div>
                <h4 class="text-2xl font-semibold text-ink-800">{{ item.title }}</h4>
                <p class="text-sm text-ink-500">{{ item.subtitle }}</p>
              </div>
            </div>
            <p class="mt-5 text-base leading-relaxed text-ink-600">{{ item.description }}</p>
            <div class="mt-5 rounded-apple bg-accent-50 border border-accent-100 p-4">
              <p class="text-sm leading-relaxed text-ink-700">
                <span class="font-semibold text-accent-600">💡 举个例子：</span>
                {{ item.example }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Learning path -->
      <div class="mt-24">
        <div class="text-center">
          <p class="section-label">学习路径</p>
          <h3 class="mt-3 text-display-sm font-semibold text-ink-800">五步走，从 AI 新手到熟练运用</h3>
          <p class="mt-4 text-base leading-relaxed text-ink-600 mx-auto max-w-2xl">
            按照这个路径循序渐进，每个人都能在自己的工作中找到 AI 的用武之地。
          </p>
        </div>
        <div class="mt-12 grid gap-6 md:grid-cols-5">
          <div
            v-for="(item, index) in learningPath"
            :key="item.step"
            class="relative rounded-apple border border-ink-200 bg-white p-6 text-center shadow-apple-sm transition-all duration-500 hover:shadow-apple hover:-translate-y-1 animate-fade-up"
            :style="{ animationDelay: `${index * 0.1}s` }"
          >
            <div class="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-accent-100 to-accent-200 text-lg font-bold text-accent-600">
              {{ item.step }}
            </div>
            <h4 class="mt-4 text-lg font-semibold text-ink-800">{{ item.title }}</h4>
            <p class="mt-2 text-sm leading-relaxed text-ink-600">{{ item.desc }}</p>
            <!-- Arrow connector -->
            <div v-if="index < learningPath.length - 1" class="absolute -right-6 top-1/2 hidden -translate-y-1/2 text-ink-300 md:block">
              <svg class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
