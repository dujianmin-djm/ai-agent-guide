<script setup lang="ts">
import SiteHeader from '@/components/SiteHeader.vue'
import SiteFooter from '@/components/SiteFooter.vue'

const tips = [
  {
    icon: '🎯',
    title: '场景化选型，不要一棵树吊死',
    content: '没有"全能王"，每个模型都有擅长的场景。日常编码选 DeepSeek V4 Pro，长文档选 Kimi K2.7，图像生成选 GLM CogView，复杂编码订阅 GLM5.2。组合使用，性价比最高。',
  },
  {
    icon: '💰',
    title: '善用缓存，成本再降 4 倍',
    content: 'DeepSeek 的上下文缓存命中只要 ￥0.5 每百万 tokens，是正常价格的 1/4。把 cosmic-dev 技能包、苍穹开发规范等长上下文固定放在系统提示词里，能大幅降低成本。我每月因此省下 60% 的 Token 费用。',
  },
  {
    icon: '🔧',
    title: '用 cosmic-dev 技能包"喂"业务知识',
    content: '无论用哪个模型，对苍穹的理解都需要技能包加持。cosmic-dev 把苍穹插件开发规范、API 文档、最佳实践都封装成了模型可读的上下文，让任何模型都能秒变"苍穹专家"。',
  },
  {
    icon: '⚡',
    title: '高频调用选 Flash/Lite 版本',
    content: '不是所有任务都需要旗舰模型。代码补全、简单问答用 DeepSeek V4 Flash 或 GLM 5.2 Air，响应快、价格极低。把旗舰模型留给真正复杂的任务，整体成本能再降一半。',
  },
]

const finalThoughts = [
  {
    title: '国产模型已经"够用"了',
    content: '简单问题网页版问答，多文件就 Agent 去分析拆解，DeepSeek V4 Pro 体验丝滑、成本可控、能力够用。国产模型在编码、中文理解、长文档、金蝶生态等核心场景上已经追平甚至超越海外模型，差距主要在多模态与超复杂推理的"天花板"上，但对日常开发影响不大。',
  },
  {
    title: '性价比是国产模型的杀手锏',
    content: 'DeepSeek V4 Pro 的价格是 Claude Fable 5 的 1/30，能力却达到其 80-90%。对于个人开发者、中小团队、甚至大企业的内部工具开发，这种性价比优势是碾压级的。每月 50-100 元就能搞定所有 AI 编程需求，而用 Claude 至少要 1500-2000 元。',
  },
  {
    title: '生态与体验是国产模型的护城河',
    content: '国内直连、支付宝微信充值、中文 prompt 友好、对苍穹业务术语理解准确——这些"软实力"是海外模型永远给不了的。再加上 cosmic-dev 等技能包的加持，国产模型在金蝶生态下的体验已经全面领先。',
  },
  {
    title: '海外模型仍是"天花板"的标杆',
    content: 'Claude Fable 5 在 SWE-bench 等真实工程基准上仍是全球第一，GPT 5.5 的多模态与图像生成仍是行业标杆。对于追求极致能力、预算充足、能解决访问问题的团队，海外旗舰仍是首选。但对绝大多数金蝶开发者来说，国产模型已经"够用且好用"。',
  },
]

// 通用 AI 使用技巧 —— 适用于所有模型、所有场景
const generalTips = [
  {
    icon: '📝',
    title: '把需求写清楚，胜过反复追问',
    content: 'AI 不是读心术。与其说"帮我写个插件"，不如说"用 Java 写一个苍穹销售订单的表单插件，在保存前校验金额不能为负，校验失败弹出提示框"。需求越具体——技术栈、业务场景、约束条件、期望输出——AI 给出的结果越精准。养成"先想清楚再问"的习惯，效率会提升数倍。',
  },
  {
    icon: '🎯',
    title: '给 AI 一个明确的角色',
    content: '在对话开头告诉 AI 它是谁："你是一位有 10 年经验的金蝶云苍穹开发工程师，精通 Java 和元数据建模。"这个简单的"角色设定"能让 AI 的回答更专业、更贴合你的领域。它不是万能的魔法，而是一个需要被正确"启动"的专业助手。',
  },
  {
    icon: '🧩',
    title: '复杂任务拆成小步骤',
    content: '不要让 AI 一次性"帮我开发一个完整的审批流程"。把它拆成：先设计数据模型、再写表单插件、然后配置工作流、最后写操作指南。每一步都确认无误后再进入下一步。这既能让 AI 输出更可控，也方便你及时发现和纠正错误，避免"一步错步步错"。',
  },
  {
    icon: '🔍',
    title: '永远要人工审查 AI 的输出',
    content: 'AI 会"一本正经地胡说八道"（业内称为"幻觉"）。它可能编造不存在的 API、给出过时的语法、或者逻辑看似正确实则漏洞百出。无论 AI 多聪明，最终交付的代码、文档、方案都必须经过你的人工审查与测试。你是负责人，AI 只是助手——这个边界永远不能模糊。',
  },
  {
    icon: '💬',
    title: '不满意就追问，不要将就',
    content: 'AI 的第一次回答往往不是最优解。如果方向不对，直接说"这不是我想要的，我需要的是 XXX"；如果细节有误，指出具体哪里错了。AI 会在多轮对话中不断修正，通常 2-3 轮就能收敛到满意的结果。把 AI 当成一个可以反复打磨的"实习生"，而不是一次定终身的"搜索引擎"。',
  },
  {
    icon: '📚',
    title: '提供上下文和示例',
    content: '如果你有参考代码、设计文档、或者期望的输出格式，直接贴给 AI。"参考这段代码的风格，帮我写一个类似的插件"比凭空要求效果好得多。AI 是模式匹配的高手，给它好的"样本"，它就能举一反三。这也是 cosmic-dev 技能包的核心思路——用真实业务代码"喂"给 AI。',
  },
]

// 注意事项 —— 使用 AI 时的红线与风险
const precautions = [
  {
    icon: '🔒',
    title: '敏感数据不要直接发给 AI',
    content: '客户真实姓名、身份证号、银行账号、生产环境密码、商业机密——这些信息绝对不能直接粘贴到任何 AI 对话框中。即使是付费企业版，也建议先做脱敏处理。金蝶项目中的客户数据尤其要谨慎，遵循公司数据安全规范，使用脱敏后的测试数据与 AI 交互。',
  },
  {
    icon: '⚖️',
    title: '注意代码版权与开源协议',
    content: 'AI 生成的代码可能包含来自开源项目的片段，需要关注其原始协议（如 GPL、MIT、Apache）。在企业级项目中，尤其是交付给客户的代码，要确保不引入不兼容的开源依赖。建议在团队内部建立 AI 代码审查清单，标注哪些代码由 AI 生成、经过何种验证。',
  },
  {
    icon: '🧪',
    title: 'AI 代码必须经过完整测试',
    content: 'AI 生成的代码"看起来对"不等于"真的对"。它可能遗漏边界条件、忽略异常处理、或者与苍穹特定版本不兼容。所有 AI 生成的代码都必须经过单元测试、集成测试，并在开发/测试环境完整验证后才能上线。永远不要因为"AI 写的"就跳过测试环节。',
  },
  {
    icon: '🚫',
    title: '不要完全依赖 AI 做关键决策',
    content: '架构选型、技术路线、安全方案这类关键决策，AI 可以提供参考和建议，但最终拍板的必须是人。AI 缺乏对具体业务上下文、团队能力、历史包袱的深度理解。把 AI 当成"参谋"而不是"指挥官"，重大决策仍需团队讨论和专家把关。',
  },
  {
    icon: '🔄',
    title: '保持学习，不要让 AI 替代思考',
    content: 'AI 是加速器，不是替代品。如果遇到问题就直接问 AI 而不去理解原理，长期下来你的技术能力会退化。正确做法是：让 AI 帮你完成重复性工作，但花时间理解它给出的每一行代码。学习 AI 的同时，也要持续深耕你的专业领域——苍穹平台、业务逻辑、工程实践。',
  },
  {
    icon: '💡',
    title: '认识到 AI 的局限性',
    content: 'AI 不擅长：精确的数学计算、实时信息查询、对私有系统的深度理解、需要常识判断的场景。它擅长：文本生成、代码模板、文档总结、创意发散。了解这条"能力边界"，能帮你避免在 AI 不擅长的领域浪费时间，也能在合适的场景充分发挥它的价值。',
  },
]
</script>

<template>
  <div class="min-h-screen bg-white">
    <SiteHeader />

    <main class="pt-28 pb-24">
      <div class="mx-auto max-w-4xl px-6">
        <!-- Header -->
        <div class="text-center">
          <p class="section-label">开发者手记</p>
          <h1 class="mt-3 text-display-lg font-semibold text-ink-800">金蝶开发者的 AI 实践建议</h1>
          <p class="mt-5 text-lg leading-relaxed text-ink-600">
            作为金蝶开发工程师的真实使用感受。不谈跑分，只谈体验；不谈理论，只谈实战。
          </p>
          <div class="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm text-ink-500">
            <span class="inline-flex items-center gap-1.5 rounded-full bg-ink-100 px-3 py-1">
              <span class="h-2 w-2 rounded-full bg-emerald-500"></span>
              一线实战经验
            </span>
            <span class="inline-flex items-center gap-1.5 rounded-full bg-ink-100 px-3 py-1">
              <span class="h-2 w-2 rounded-full bg-blue-500"></span>
              真实成本数据
            </span>
            <span class="inline-flex items-center gap-1.5 rounded-full bg-ink-100 px-3 py-1">
              <span class="h-2 w-2 rounded-full bg-amber-500"></span>
              主观感受分享
            </span>
          </div>
        </div>

        <!-- TL;DR -->
        <div class="mt-12 overflow-hidden rounded-apple-xl border-2 border-emerald-200 bg-gradient-to-br from-emerald-50 to-teal-50 p-8 md:p-10">
          <div class="flex items-start gap-4">
            <div class="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-3xl shadow-apple-sm">
              💡
            </div>
            <div>
              <div class="text-xs font-semibold uppercase tracking-wide text-emerald-700">TL;DR · 太长不看版</div>
              <h2 class="mt-1 text-2xl font-semibold text-ink-800">首推性价比国产 DeepSeek V4 Pro</h2>
              <p class="mt-3 text-base leading-relaxed text-ink-700">
                如果你是第一次用 AI Agent，预算有限、不想折腾梯子、追求丝滑体验——<strong class="text-emerald-700">DeepSeek V4 Pro 是你的不二之选</strong>。编码能力跻身第一梯队（前20），价格仅为 Claude 的 1/30，国内直连、支付宝充值、对苍穹业务术语友好。配合 cosmic-dev 技能包，可搞定一般的苍穹平台开发任务。如果非金蝶二开而是进行复杂架构设计时可考虑 GLM5.2 或者国外顶尖大模型。
              </p>
              <p class="mt-2 text-base leading-relaxed text-ink-700">
                <strong class="text-red-600">不要盲目迷信AI，尤其是在金蝶这类封闭式、拥有完整生态体系的开发环境中</strong>。即便配备了苍穹技能包，AI给出的答案也不一定准确，有时甚至会出现“一本正经地胡说八道”的情况。我们需要保持自己的判断力，重点考量大模型自身的知识库、提示词准确性、上下文长度限制、和多模态能力等因素。
              </p>
              <p class="mt-2 text-base leading-relaxed text-ink-700">
                对于软件类工作者来说，接触AI Agent是非常必要的。它的应用场景非常广泛，建议<strong class="text-red-500">多与AI对话互动，在实践中不断摸索，逐步找到最适合自己的使用场景</strong>。
              </p>
            </div>
          </div>
        </div>

        <!-- Practical tips -->
        <section class="mt-16">
          <div class="text-center">
            <p class="section-label">实战心得</p>
            <h2 class="mt-3 text-display-sm font-semibold text-ink-800">金蝶生态开发</h2>
            <p class="mt-4 text-base leading-relaxed text-ink-600">
              
            </p>
          </div>

          <div class="mt-10 grid gap-5 md:grid-cols-2">
            <div
              v-for="(tip, index) in tips"
              :key="index"
              class="group rounded-apple-lg border border-ink-200 bg-white p-6 shadow-apple-sm transition-all hover:shadow-apple hover:-translate-y-0.5"
            >
              <div class="flex items-start gap-4">
                <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-400 to-accent-600 text-2xl shadow-apple-sm">
                  {{ tip.icon }}
                </div>
                <div>
                  <h3 class="text-base font-semibold text-ink-800">{{ tip.title }}</h3>
                  <p class="mt-2 text-sm leading-relaxed text-ink-600">{{ tip.content }}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- General AI usage tips -->
        <section class="mt-20">
          <div class="text-center">
            <p class="section-label">通用技巧</p>
            <h2 class="mt-3 text-display-sm font-semibold text-ink-800">AI 通用使用技巧</h2>
            <p class="mt-4 text-base leading-relaxed text-ink-600 mx-auto max-w-2xl">
              无论你用哪个模型、做什么任务，这 6 条技巧都能帮你从 AI 新手快速进阶为熟练用户。
            </p>
          </div>

          <div class="mt-10 grid gap-5 md:grid-cols-2">
            <div
              v-for="(tip, index) in generalTips"
              :key="`general-${index}`"
              class="group rounded-apple-lg border border-ink-200 bg-white p-6 shadow-apple-sm transition-all hover:shadow-apple hover:-translate-y-0.5"
            >
              <div class="flex items-start gap-4">
                <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-400 to-indigo-500 text-2xl shadow-apple-sm">
                  {{ tip.icon }}
                </div>
                <div>
                  <h3 class="text-base font-semibold text-ink-800">{{ tip.title }}</h3>
                  <p class="mt-2 text-sm leading-relaxed text-ink-600">{{ tip.content }}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Precautions -->
        <section class="mt-20">
          <div class="text-center">
            <p class="section-label">注意事项</p>
            <h2 class="mt-3 text-display-sm font-semibold text-ink-800">使用 AI 的注意事项</h2>
            <p class="mt-4 text-base leading-relaxed text-ink-600 mx-auto max-w-2xl">
              AI 是强大的工具，但也有不可忽视的风险。这 6 条注意事项是使用 AI 时的"安全红线"。
            </p>
          </div>

          <div class="mt-10 grid gap-5 md:grid-cols-2">
            <div
              v-for="(item, index) in precautions"
              :key="`precaution-${index}`"
              class="group rounded-apple-lg border border-rose-100 bg-rose-50/30 p-6 shadow-apple-sm transition-all hover:shadow-apple hover:-translate-y-0.5"
            >
              <div class="flex items-start gap-4">
                <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-400 to-red-500 text-2xl shadow-apple-sm">
                  {{ item.icon }}
                </div>
                <div>
                  <h3 class="text-base font-semibold text-ink-800">{{ item.title }}</h3>
                  <p class="mt-2 text-sm leading-relaxed text-ink-600">{{ item.content }}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Final thoughts -->
        <section class="mt-16">
          <div class="text-center">
            <p class="section-label">最终感悟</p>
            <h2 class="mt-3 text-display-sm font-semibold text-ink-800">我对国内外模型的看法</h2>
          </div>

          <div class="mt-10 space-y-6">
            <div
              v-for="(thought, index) in finalThoughts"
              :key="index"
              class="rounded-apple-lg border-l-4 border-accent-500 bg-ink-50 p-6 md:p-8"
            >
              <h3 class="text-lg font-semibold text-ink-800">{{ thought.title }}</h3>
              <p class="mt-3 text-base leading-relaxed text-ink-700">{{ thought.content }}</p>
            </div>
          </div>
        </section>

        <!-- Conclusion -->
        <div class="mt-16 overflow-hidden rounded-apple-xl bg-gradient-to-br from-ink-800 to-ink-900 p-8 text-white shadow-apple-lg md:p-12">
          <div class="mx-auto max-w-3xl text-center">
            <h3 class="mt-6 text-display-sm font-semibold">我的最终推荐</h3>
            <p class="mt-5 text-lg leading-relaxed text-ink-200">
              对于金蝶开发工程师与实施顾问，<strong class="text-emerald-300">DeepSeek V4 Pro + cosmic-dev 技能包</strong>是当前最优的日常组合。性价比碾压、国内直连、中文友好、能力够用。
            </p>
            <p class="mt-4 text-base leading-relaxed text-ink-300">
              AI 编程不是"用最贵的模型"，而是"用最合适的模型"。
            </p>
            <div class="mt-8 flex flex-wrap items-center justify-center gap-4">
              <router-link to="/recommend" class="btn-primary inline-flex">
                查看场景化推荐
                <svg class="ml-1 h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </router-link>
              <router-link to="/vendors" class="inline-flex items-center rounded-full border border-white/30 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10">
                了解 AI 厂商全景
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </main>

    <SiteFooter />
  </div>
</template>
