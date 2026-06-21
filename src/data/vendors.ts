// AI 厂商全景数据 - 国内外主流 AI 厂商背景、旗舰模型与能力定位

export interface FlagshipModel {
  name: string
  tier: 'flagship' | 'high-end' | 'cost-effective'
  capability: string
  bestFor: string
  contextWindow?: string
}

export interface Vendor {
  id: string
  name: string
  nameEn: string
  country: string
  countryFlag: string
  region: 'overseas' | 'domestic'
  founded: string
  founders: string
  valuation?: string
  background: string
  philosophy?: string
  flagshipModels: FlagshipModel[]
  strengths: string[]
  challenges: string[]
  accessInfo: string
  pricingLevel: 'high' | 'medium' | 'low'
  pricingDesc: string
  bestFor: string
  officialUrl: string
  accentColor: string
  logo?: string
  // 自定义标签：red / yellow / green，用于团队内部标记推荐度、合规状态等
  customTag?: {
    color: 'red' | 'yellow' | 'green'
    text: string
  }
}

// 国外厂商
export const overseasVendors: Vendor[] = [
  {
    id: 'anthropic',
    name: 'Anthropic',
    nameEn: 'Anthropic',
    country: '美国',
    countryFlag: '🇺🇸',
    region: 'overseas',
    founded: '2021 年',
    founders: 'Dario Amodei、Daniela Amodei（前 OpenAI 研究副总裁）',
    valuation: '约 1830 亿美元（2025 年估值）',
    background:
      'Anthropic 由前 OpenAI 研究副总裁 Dario Amodei 与其妹妹 Daniela Amodei 于 2021 年创立，总部位于旧金山。公司核心团队多来自 OpenAI 与 Google Brain，是"宪法 AI（Constitutional AI）"理念的提出者，强调 AI 安全与对齐。亚马逊累计投资超过 80 亿美元，Google 也投入约 20 亿美元，是当前与 OpenAI 并列的美国两大闭源旗舰模型厂商之一。Claude 系列模型在 SWE-bench、Terminal-Bench 等真实工程基准上长期占据榜首，被 Cursor、Windsurf、Qoder 等主流 AI 编程工具作为首选模型。',
    philosophy: '构建可靠、可解释、可控的 AI 系统',
    flagshipModels: [
      {
        name: 'Claude Fable 5',
        tier: 'flagship',
        capability: '当前 Claude 系列的旗舰型号，编码、推理与 Agent 编排能力全面登顶，SWE-bench Verified 得分突破 85%，可独立完成跨多文件的大型重构任务。',
        bestFor: '复杂工程重构、长链路 Agent 任务、苍穹插件深度开发',
        contextWindow: '500K tokens',
      },
      {
        name: 'Claude Opus 4.8',
        tier: 'high-end',
        capability: '高端型号，深度推理与学术级写作能力极强，适合需要严谨逻辑链的复杂任务，价格约为 Fable 5 的 60%。',
        bestFor: '架构设计、技术方案撰写、复杂业务规则推理',
        contextWindow: '500K tokens',
      },
      {
        name: 'Claude Sonnet 4.6',
        tier: 'cost-effective',
        capability: '性价比型号，编码能力接近旗舰，响应速度快，是 cosmic-dev 等技能包在海外模型上的默认推荐。',
        bestFor: '日常编码、代码评审、cosmic-dev 技能调用',
        contextWindow: '200K tokens',
      },
    ],
    strengths: [
      '编码与 Agent 编排能力全球顶尖，是 AI 编程工具的事实标准',
      '上下文窗口最大达 500K tokens，可一次性吞下整个苍穹工程',
      '输出风格严谨克制，幻觉率低，适合企业级生产场景',
      '工具调用（Tool Use）极其稳定，MCP 协议原生支持',
    ],
    challenges: [
      '对中国大陆地区实施严格封号政策，注册需海外手机号与企业资质',
      'API 直连在中国大陆无法稳定访问，必须通过中转或海外节点',
      'API 价格全行业最高，Fable 5 输入 $15 / 输出 $75 每百万 tokens',
      '闭源模型，无法私有化部署，金融政企客户需评估合规风险',
      '内容审查较严，部分正常业务 prompt 可能被误判拒绝',
    ],
    accessInfo: '需通过海外手机号注册 console.anthropic.com，国内通常经第三方 API 中转服务（如 OpenRouter、OneAPI）调用',
    pricingLevel: 'high',
    pricingDesc: '行业最高档，Fable 5：$15 / $75 per M tokens；Sonnet 4.6：$3 / $15 per M tokens',
    bestFor: '追求极致编码与 Agent 能力的资深开发，预算充足且能解决访问问题',
    officialUrl: 'https://www.anthropic.com',
    accentColor: 'from-orange-500 to-amber-600',
    logo: '/images/logos/anthropic.svg',
    customTag: { color: 'red', text: '极端排华' },
  },
  {
    id: 'openai',
    name: 'OpenAI',
    nameEn: 'OpenAI',
    country: '美国',
    countryFlag: '🇺🇸',
    region: 'overseas',
    founded: '2015 年',
    founders: 'Sam Altman、Elon Musk、Ilya Sutskever 等（Musk 已退出）',
    valuation: '约 5000 亿美元（2025 年估值）',
    background:
      'OpenAI 成立于 2015 年，最初是非营利研究实验室，2019 年转型为"封顶盈利"公司。ChatGPT 于 2022 年 11 月发布后引爆全球 AI 浪潮，是目前全球估值最高的 AI 公司。微软累计投资超过 130 亿美元，GPT 系列模型在通用对话、多模态理解、图像生成等领域长期保持领先。GPT-5 系列在 2025 年发布后，统一了此前 GPT-4o、o1、o3 等多条产品线，成为 OpenAI 旗舰模型的集大成者。',
    philosophy: '创造通用人工智能（AGI）造福全人类',
    flagshipModels: [
      {
        name: 'GPT 5.5',
        tier: 'flagship',
        capability: 'OpenAI 当前旗舰，统一架构下融合推理、编码、多模态能力，综合评分与 Claude Fable 5 并列第一梯队，图像生成与理解能力业界最强。',
        bestFor: '多模态任务、方案配图、复杂对话、跨语言沟通',
        contextWindow: '400K tokens',
      },
      {
        name: 'GPT 5.5 mini',
        tier: 'cost-effective',
        capability: '轻量版本，响应快、价格低，适合高频调用场景，能力对标 Claude Sonnet 4.6。',
        bestFor: '高频问答、批量处理、嵌入式场景',
        contextWindow: '200K tokens',
      },
      {
        name: 'Sora 2',
        tier: 'high-end',
        capability: '视频生成旗舰，可生成长达 60 秒的高清视频，物理一致性与镜头语言业界领先。',
        bestFor: '方案演示视频、培训素材生成',
      },
    ],
    strengths: [
      '综合能力最均衡，编码、写作、多模态、推理无明显短板',
      '图像生成（DALL·E / GPT-5 原生）业界顶尖，中文 prompt 友好',
      '生态最完善，插件、GPTs、Assistants API 一应俱全',
      '品牌认知度最高，客户与老板最容易认可',
    ],
    challenges: [
      '中国大陆无法直接访问 ChatGPT 与 API，需梯子或中转',
      'API 价格仅次于 Anthropic，大规模调用成本高',
      '闭源，无法私有化部署',
      '数据默认可能用于训练，企业版需额外付费关闭',
      '账号注册需海外手机号，封号风险较高',
    ],
    accessInfo: '国内主要通过第三方 API 中转服务调用，或使用 Azure OpenAI（需企业资质）',
    pricingLevel: 'high',
    pricingDesc: 'GPT 5.5：$10 / $40 per M tokens；GPT 5.5 mini：$0.5 / $2 per M tokens',
    bestFor: '需要多模态、图像生成、综合能力的场景，预算充足',
    officialUrl: 'https://openai.com',
    accentColor: 'from-emerald-500 to-teal-600',
    logo: '/images/logos/openai.svg',
    customTag: { color: 'red', text: '排华' },
  },
  {
    id: 'google',
    name: 'Google DeepMind',
    nameEn: 'Google DeepMind',
    country: '美国',
    countryFlag: '🇺🇸',
    region: 'overseas',
    founded: '2010 年（DeepMind），2023 年与 Google Brain 合并',
    founders: 'Demis Hassabis、Shane Legg、Mustafa Suleyman',
    valuation: 'Alphabet 旗下，母公司市值约 2.8 万亿美元',
    background:
      'Google DeepMind 是 Google 旗下顶尖 AI 实验室，由 2010 年成立的 DeepMind 与 Google Brain 于 2023 年合并而来。AlphaGo、AlphaFold、Gemini 系列均出自此处。Gemini 是 Google 对抗 GPT 的旗舰模型，原生多模态设计，从训练之初就同时学习文本、图像、音频、视频。Gemini 3 系列在长上下文、多模态理解、科学推理上表现突出，2M tokens 的上下文窗口为业界最长。',
    philosophy: '用 AI 解决人类最重大的科学与社会问题',
    flagshipModels: [
      {
        name: 'Gemini 3 Pro',
        tier: 'flagship',
        capability: 'Google 旗舰模型，2M tokens 超长上下文业界第一，多模态理解（视频、音频、图像）能力最强，科学推理与数学能力顶尖。',
        bestFor: '超长文档分析、视频理解、科研推理、整库代码理解',
        contextWindow: '2M tokens',
      },
      {
        name: 'Gemini 3 Flash',
        tier: 'cost-effective',
        capability: '轻量高速版本，响应速度业界顶尖，价格极低，适合高并发场景。',
        bestFor: '实时对话、高并发 API、移动端调用',
        contextWindow: '1M tokens',
      },
    ],
    strengths: [
      '2M tokens 超长上下文，可一次性分析整本需求文档或整个代码仓库',
      '原生多模态，视频理解能力业界第一',
      'Google Cloud 集成深，Vertex AI 平台企业级能力完善',
      '科学推理与数学能力强，AlphaFold 系列奠定生物 AI 基础',
    ],
    challenges: [
      '中国大陆无法直接访问，需通过 Google Cloud 或中转',
      '编码能力略逊于 Claude 与 GPT，Agent 编排生态较弱',
      '品牌在国内开发者中认知度不如 OpenAI / Anthropic',
      'Google Cloud 注册需海外信用卡',
    ],
    accessInfo: '通过 Google Cloud Vertex AI 调用，或第三方中转',
    pricingLevel: 'medium',
    pricingDesc: 'Gemini 3 Pro：$2.5 / $10 per M tokens；Flash：$0.15 / $0.6 per M tokens',
    bestFor: '超长文档处理、视频理解、科研场景',
    officialUrl: 'https://deepmind.google',
    accentColor: 'from-blue-500 to-indigo-600',
    logo: '/images/logos/google.svg',
    customTag: { color: 'yellow', text: '需科学上网' },
  },
  {
    id: 'xai',
    name: 'xAI',
    nameEn: 'xAI',
    country: '美国',
    countryFlag: '🇺🇸',
    region: 'overseas',
    founded: '2023 年',
    founders: 'Elon Musk（马斯克）',
    valuation: '约 1130 亿美元（2025 年估值）',
    background:
      'xAI 是马斯克于 2023 年创立的 AI 公司，旨在"理解宇宙的真实本质"。马斯克曾是 OpenAI 联合创始人，后因理念分歧退出。xAI 的 Grok 模型以"叛逆、幽默、实时"为卖点，深度集成 X（原 Twitter）平台，可获取实时信息。Grok 4 在推理与编码上跻身第一梯队，且审查较宽松。xAI 在孟菲斯自建了全球最大的超级计算集群 Colossus，训练效率极高。',
    philosophy: '构建最大化寻求真理的 AI',
    flagshipModels: [
      {
        name: 'Grok 4',
        tier: 'flagship',
        capability: 'xAI 旗舰模型，推理与编码能力跻身第一梯队，实时信息获取能力强，审查宽松。',
        bestFor: '实时信息查询、需要宽松审查的创意任务、技术调研',
        contextWindow: '256K tokens',
      },
      {
        name: 'Grok 4 Fast',
        tier: 'cost-effective',
        capability: '快速版本，推理能力强，价格亲民。',
        bestFor: '日常推理、技术问答',
        contextWindow: '128K tokens',
      },
    ],
    strengths: [
      '实时信息获取，深度集成 X 平台',
      '内容审查宽松，适合创意与边缘场景',
      '响应风格幽默直接，符合开发者口味',
      '推理能力强，Grok 4 在 ARC-AGI 等基准表现优异',
    ],
    challenges: [
      '中国大陆无法访问，需梯子',
      '编码能力虽强但生态不如 Claude / GPT 完善',
      '品牌争议较大，企业级采用率较低',
      'API 稳定性偶有波动',
    ],
    accessInfo: '通过 x.ai 或 X 平台订阅使用，国内需梯子',
    pricingLevel: 'medium',
    pricingDesc: 'Grok 4：$5 / $15 per M tokens；Fast：$0.2 / $0.5 per M tokens',
    bestFor: '实时信息、宽松审查场景、技术调研',
    officialUrl: 'https://x.ai',
    accentColor: 'from-slate-700 to-slate-900',
    logo: '/images/logos/xai.svg',
    customTag: { color: 'yellow', text: '需科学上网' },
  },
  {
    id: 'meta',
    name: 'Meta AI',
    nameEn: 'Meta AI',
    country: '美国',
    countryFlag: '🇺🇸',
    region: 'overseas',
    founded: '2013 年（FAIR 实验室）',
    founders: 'Mark Zuckerberg（Meta CEO）、Yann LeCun（首席 AI 科学家）',
    valuation: 'Meta 旗下，母公司市值约 1.5 万亿美元',
    background:
      'Meta AI（前身为 FAIR）是 Meta 旗下的 AI 研究部门，由图灵奖得主 Yann LeCun 领衔。Meta 是开源大模型的最坚定推动者，Llama 系列几乎以一己之力撑起了开源大模型生态。Llama 4 系列采用 MoE 架构，首次在多项基准上逼近闭源旗舰，且完全开放权重，可自由商用。Llama 系列是国产模型蒸馏与微调的重要基座之一。',
    philosophy: '开源 AI，让所有人都能使用与改进',
    flagshipModels: [
      {
        name: 'Llama 4 Behemoth',
        tier: 'flagship',
        capability: 'Meta 旗舰开源模型，MoE 架构，参数规模近 2 万亿，能力逼近 GPT 5.5，完全开放权重。',
        bestFor: '私有化部署、二次微调、研究用途',
        contextWindow: '256K tokens',
      },
      {
        name: 'Llama 4 Scout / Maverick',
        tier: 'high-end',
        capability: '中等规模开源模型，可在单卡或多卡服务器部署，性价比极高。',
        bestFor: '企业私有化、边缘部署、定制微调',
        contextWindow: '128K tokens',
      },
    ],
    strengths: [
      '完全开源，可自由商用，是私有化部署的首选基座',
      '生态最完善，HuggingFace 上有海量微调版本',
      'MoE 架构推理效率高，部署成本低',
      'Meta 持续投入，迭代速度快',
    ],
    challenges: [
      '原始模型中文能力一般，需中文语料微调',
      '部署需要较强 GPU 资源，Behemoth 需多卡集群',
      '编码能力略逊于 Claude / GPT 旗舰',
      '开源模型安全对齐需自行处理',
    ],
    accessInfo: '从 HuggingFace 下载权重自行部署，或通过 Groq、Together 等平台调用',
    pricingLevel: 'low',
    pricingDesc: '权重免费，部署成本取决于硬件；API 平台调用约 $0.5 / $1 per M tokens',
    bestFor: '私有化部署、二次开发、研究用途',
    officialUrl: 'https://ai.meta.com',
    accentColor: 'from-blue-600 to-blue-800',
    logo: '/images/logos/meta.svg',
    customTag: { color: 'yellow', text: '需科学上网' },
  },
  {
    id: 'mistral',
    name: 'Mistral AI',
    nameEn: 'Mistral AI',
    country: '法国',
    countryFlag: '🇪🇺',
    region: 'overseas',
    founded: '2023 年',
    founders: 'Arthur Mensch、Guillaume Lample、Timothée Lacroix（前 DeepMind / Meta 研究员）',
    valuation: '约 65 亿美元（2025 年估值）',
    background:
      'Mistral AI 是欧洲最具影响力的 AI 初创公司，由前 DeepMind 研究员 Arthur Mensch 创立，总部位于巴黎。在欧洲 AI 主权意识抬头的背景下，Mistral 被视为"欧洲的 OpenAI"，获得欧盟多项政策支持。Mistral 同时维护闭源旗舰与开源模型两条产品线，开源版本在欧洲企业私有化部署中颇受欢迎。模型在多语言（尤其是欧洲语言）处理上表现优异。',
    philosophy: '为欧洲与世界提供可信赖、可定制的 AI',
    flagshipModels: [
      {
        name: 'Mistral Large 3',
        tier: 'flagship',
        capability: 'Mistral 旗舰闭源模型，多语言与推理能力强，欧洲语言处理业界顶尖。',
        bestFor: '欧洲语言场景、多语言业务、欧盟合规需求',
        contextWindow: '128K tokens',
      },
      {
        name: 'Mixtral 8x22B',
        tier: 'high-end',
        capability: '开源 MoE 模型，可在中等规模 GPU 部署，性价比高。',
        bestFor: '欧洲企业私有化、多语言场景',
        contextWindow: '64K tokens',
      },
    ],
    strengths: [
      '欧洲品牌，符合 GDPR 与欧盟 AI Act 合规需求',
      '多语言能力强，欧洲语言处理业界顶尖',
      '同时提供开源与闭源版本，灵活度高',
      'API 价格相对亲民',
    ],
    challenges: [
      '中文能力一般，不适合中文为主的场景',
      '编码能力弱于 Claude / GPT / DeepSeek',
      '国内访问需通过其 API 或第三方中转',
      '品牌在国内认知度低',
    ],
    accessInfo: '通过 Mistral API 或 La Plateforme 平台调用',
    pricingLevel: 'medium',
    pricingDesc: 'Mistral Large 3：$2 / $6 per M tokens',
    bestFor: '欧洲业务、多语言场景、欧盟合规需求',
    officialUrl: 'https://mistral.ai',
    accentColor: 'from-amber-500 to-orange-600',
    logo: '/images/logos/mistral.svg',
    customTag: { color: 'yellow', text: '欧洲开源' },
  },
]

// 国内厂商
export const domesticVendors: Vendor[] = [
  {
    id: 'deepseek',
    name: '深度求索 DeepSeek',
    nameEn: 'DeepSeek',
    country: '中国',
    countryFlag: '🇨🇳',
    region: 'domestic',
    founded: '2023 年',
    founders: '梁文锋（幻方量化创始人）',
    valuation: '约 150 亿美元（2025 年估值）',
    background:
      'DeepSeek（深度求索）由幻方量化创始人梁文锋于 2023 年创立，总部位于杭州。背靠幻方强大的算力储备与工程能力，DeepSeek 以"极致性价比 + 完全开源"的策略横空出世，V3 系列发布时以 1/10 的训练成本逼近 GPT-4o，引发全球关注。DeepSeek V4 Pro 在编码、推理、数学上全面跻身世界第一梯队，且 API 价格仅为 Claude Sonnet 的 1/30，是国内开发者的性价比首选。模型权重完全开源，可自由商用。',
    philosophy: '以极致工程效率推动 AGI 普惠',
    flagshipModels: [
      {
        name: 'DeepSeek V4 Pro',
        tier: 'flagship',
        capability: 'DeepSeek 旗舰模型，编码能力对标 Claude Sonnet 4.6，推理与数学能力顶尖，MoE 架构推理效率极高，是国产模型的性价比之王。',
        bestFor: '苍穹日常开发、cosmic-dev 技能调用、批量代码生成、成本敏感场景',
        contextWindow: '256K tokens',
      },
      {
        name: 'DeepSeek V4 Pro Lite',
        tier: 'cost-effective',
        capability: '轻量版本，响应快、价格极低，适合高频调用。',
        bestFor: '高频问答、批量处理、嵌入式场景',
        contextWindow: '128K tokens',
      },
      {
        name: 'DeepSeek R2',
        tier: 'high-end',
        capability: '深度推理模型，专攻数学、逻辑、复杂推理任务，能力对标 OpenAI o3。',
        bestFor: '复杂业务规则推理、数学计算、架构设计',
        contextWindow: '128K tokens',
      },
    ],
    strengths: [
      '性价比全球第一，API 价格仅为 Claude 的 1/30',
      '编码能力跻身世界第一梯队，与 Claude Sonnet 接近',
      '完全开源，权重可自由商用，支持私有化部署',
      '中文原生优化，对苍穹业务术语理解准确',
      '国内直连访问，无需梯子，注册即用',
    ],
    challenges: [
      '高峰期偶有响应延迟，需做好重试机制',
      '多模态能力（图像、视频）弱于 GPT 5.5 与 Gemini',
      'Agent 编排与工具调用稳定性略逊于 Claude',
      '品牌国际认知度不如海外厂商',
    ],
    accessInfo: '国内直连 platform.deepseek.com 注册即用，支持微信/手机号登录',
    pricingLevel: 'low',
    pricingDesc: 'V4 Pro：￥2 / ￥8 每百万 tokens（缓存命中￥0.5）；Lite：￥0.5 / ￥2',
    bestFor: '苍穹日常开发、性价比敏感场景、批量调用、私有化部署',
    officialUrl: 'https://www.deepseek.com',
    accentColor: 'from-blue-500 to-cyan-600',
    logo: '/images/logos/deepseek.svg',
    customTag: { color: 'green', text: '性价比首选' },
  },
  {
    id: 'zhipu',
    name: '智谱 AI',
    nameEn: 'Zhipu AI',
    country: '中国',
    countryFlag: '🇨🇳',
    region: 'domestic',
    founded: '2019 年',
    founders: '唐杰、张鹏（清华大学知识工程实验室孵化）',
    valuation: '约 30 亿美元（2025 年估值）',
    background:
      '智谱 AI 是国内最早的大模型独角兽之一，源自清华大学知识工程实验室（KEG），首席科学家为清华大学唐杰教授。GLM 系列模型是国内最早开源的通用大模型之一，ChatGLM 在开源社区拥有极高人气。GLM 5.2 在编码、推理、多模态上全面升级，是国产模型中综合能力最均衡的之一。智谱同时提供闭源 API 与开源权重，企业版支持私有化部署，是政企客户的常见选择。',
    philosophy: '让机器像人一样思考，服务国家与产业',
    flagshipModels: [
      {
        name: 'GLM 5.2',
        tier: 'flagship',
        capability: '智谱旗舰模型，编码、推理、多模态能力均衡，中文理解业界顶尖，支持图像理解与生成。',
        bestFor: '苍穹开发、中文场景、多模态需求、政企私有化',
        contextWindow: '200K tokens',
      },
      {
        name: 'GLM 5.2 Air',
        tier: 'cost-effective',
        capability: '轻量版本，响应快、价格低，适合高频调用。',
        bestFor: '日常对话、批量处理',
        contextWindow: '128K tokens',
      },
      {
        name: 'GLM 5.2 CogView',
        tier: 'high-end',
        capability: '图像生成模型，中文 prompt 友好，画质细腻。',
        bestFor: '方案配图、UI 设计稿、营销素材',
      },
    ],
    strengths: [
      '综合能力均衡，无明显短板，国产第一梯队',
      '中文理解业界顶尖，对苍穹业务术语友好',
      '同时提供闭源 API 与开源权重，灵活度高',
      '政企合规经验丰富，支持私有化部署',
      '清华背景，学术与工程能力扎实',
    ],
    challenges: [
      '编码能力略逊于 DeepSeek V4 Pro 与 Claude',
      'API 价格略高于 DeepSeek',
      '多模态能力弱于 GPT 5.5 与 Gemini',
      '国际认知度有限',
    ],
    accessInfo: '国内直连 open.bigmodel.cn 注册即用，支持企业认证',
    pricingLevel: 'medium',
    pricingDesc: 'GLM 5.2：￥5 / ￥5 每百万 tokens；Air：￥1 / ￥1',
    bestFor: '苍穹开发、中文场景、政企私有化、多模态需求',
    officialUrl: 'https://www.zhipuai.cn',
    accentColor: 'from-purple-500 to-pink-600',
    logo: '/images/logos/zhipu.svg',
    customTag: { color: 'green', text: '世界第一梯队' },
  },
  {
    id: 'alibaba',
    name: '阿里通义',
    nameEn: 'Alibaba Tongyi',
    country: '中国',
    countryFlag: '🇨🇳',
    region: 'domestic',
    founded: '2017 年（达摩院）',
    founders: '阿里巴巴集团',
    valuation: '阿里集团旗下，市值约 3000 亿美元',
    background:
      '阿里通义是阿里巴巴达摩院推出的大模型系列，Qwen（通义千问）是国内开源生态最完善的模型家族。Qwen 系列覆盖从 0.5B 到 110B 的全尺寸参数，并在多模态、代码、数学等垂直领域有专门版本。QW3.7max 是通义系列的旗舰闭源模型，综合能力跻身世界第一梯队。Qwen 开源版本在 HuggingFace 下载量长期位居前列，是国产开源模型的标杆。',
    philosophy: '通义千问，让 AI 触手可及',
    flagshipModels: [
      {
        name: 'QW3.7max',
        tier: 'flagship',
        capability: '通义旗舰闭源模型，编码、推理、多模态能力全面，长上下文处理强，是国产模型的综合旗舰。',
        bestFor: '苍穹开发、长文档处理、多模态场景、企业级应用',
        contextWindow: '1M tokens',
      },
      {
        name: 'Qwen 3.5 72B（开源）',
        tier: 'high-end',
        capability: '开源旗舰，72B 参数，能力对标 GPT-4o，可私有化部署，HuggingFace 下载量顶尖。',
        bestFor: '私有化部署、二次微调、研究用途',
        contextWindow: '128K tokens',
      },
      {
        name: 'Qwen-VL 3',
        tier: 'high-end',
        capability: '多模态视觉模型，图像理解与 OCR 能力业界顶尖。',
        bestFor: 'UI 截图转代码、文档 OCR、图像分析',
      },
    ],
    strengths: [
      '开源生态最完善，全尺寸模型覆盖，HuggingFace 下载量顶尖',
      '多模态能力强，Qwen-VL 视觉理解业界领先',
      '长上下文达 1M tokens，适合整库代码分析',
      '阿里云生态集成深，企业级支持完善',
      '国内直连，注册即用',
    ],
    challenges: [
      '闭源旗舰 QW3.7max 价格略高于 DeepSeek',
      '编码能力略逊于 Claude 与 DeepSeek V4 Pro',
      '开源版本需自行部署，门槛较高',
      '品牌在 C 端认知度不如豆包、Kimi',
    ],
    accessInfo: '国内直连 bailian.console.aliyun.com 注册即用',
    pricingLevel: 'medium',
    pricingDesc: 'QW3.7max：￥8 / ￥24 每百万 tokens；开源版本免费',
    bestFor: '苍穹开发、多模态场景、长文档处理、私有化部署',
    officialUrl: 'https://tongyi.aliyun.com',
    accentColor: 'from-orange-500 to-red-600',
    logo: '/images/logos/alibaba.svg',
    customTag: { color: 'green', text: '生态完善' },
  },
  {
    id: 'moonshot',
    name: '月之暗面',
    nameEn: 'Moonshot AI',
    country: '中国',
    countryFlag: '🇨🇳',
    region: 'domestic',
    founded: '2023 年',
    founders: '杨植麟（清华博士，Recurrent AI 创始人）',
    valuation: '约 33 亿美元（2025 年估值）',
    background:
      '月之暗面由清华博士杨植麟于 2023 年创立，是国内最受关注的大模型独角兽之一。Kimi 是其面向 C 端的产品，以"长上下文"为核心卖点，Kimi K2.7 支持 2M tokens 超长上下文，是国内长文档处理的标杆。Kimi 在 C 端用户中人气极高，月活用户数百万。K2.7 在编码、推理、长文档处理上全面升级，是实施顾问处理需求文档、会议纪要的首选。',
    philosophy: '追求通用人工智能，让 AI 成为每个人的伙伴',
    flagshipModels: [
      {
        name: 'Kimi K2.7',
        tier: 'flagship',
        capability: '月之暗面旗舰模型，2M tokens 超长上下文业界顶尖，长文档处理与结构化能力极强，编码能力跻身国产第一梯队。',
        bestFor: '需求文档整理、会议纪要结构化、长文档分析、苍穹开发',
        contextWindow: '2M tokens',
      },
      {
        name: 'Kimi K2.7 mini',
        tier: 'cost-effective',
        capability: '轻量版本，响应快、价格低，适合高频调用。',
        bestFor: '日常对话、快速问答',
        contextWindow: '128K tokens',
      },
    ],
    strengths: [
      '2M tokens 超长上下文，国内最长，可一次性吞下整本需求文档',
      '长文档结构化能力极强，适合实施顾问整理交付物',
      'C 端产品体验好，Kimi 网页版/App 月活数百万',
      '中文理解优秀，对苍穹业务术语友好',
      '国内直连，注册即用',
    ],
    challenges: [
      '编码能力略逊于 DeepSeek V4 Pro 与 Claude',
      '多模态能力（图像生成）较弱',
      '高峰期偶有排队，C 端免费版限制较多',
      'API 价格略高于 DeepSeek',
    ],
    accessInfo: '国内直连 platform.moonshot.cn 注册即用，C 端访问 kimi.com',
    pricingLevel: 'medium',
    pricingDesc: 'K2.7：￥8 / ￥24 每百万 tokens；长上下文额外计费',
    bestFor: '需求文档整理、会议纪要、长文档分析、实施顾问场景',
    officialUrl: 'https://www.moonshot.cn',
    accentColor: 'from-indigo-500 to-purple-600',
    logo: '/images/logos/moonshot.svg',
    customTag: { color: 'yellow', text: '长文本强' },
  },
  {
    id: 'bytedance',
    name: '字节豆包',
    nameEn: 'ByteDance Doubao',
    country: '中国',
    countryFlag: '🇨🇳',
    region: 'domestic',
    founded: '2023 年',
    founders: '字节跳动',
    valuation: '字节跳动旗下，估值约 3000 亿美元',
    background:
      '豆包是字节跳动推出的大模型系列，依托字节强大的推荐算法与算力基础设施，豆包以"低价 + 多模态"快速抢占市场。豆包 1.5 Pro 在多模态理解、语音对话、图像生成上表现突出，且 API 价格极低，是国内最便宜的主流模型之一。豆包 C 端 App 用户数过亿，是国内用户量最大的 AI 助手之一。火山引擎平台提供企业级 API 服务。',
    philosophy: '让 AI 成为每个人的日常工具',
    flagshipModels: [
      {
        name: '豆包 1.5 Pro',
        tier: 'flagship',
        capability: '字节旗舰模型，多模态理解、语音对话、图像生成能力全面，价格极低，是国产性价比之选。',
        bestFor: '多模态对话、语音交互、批量调用、C 端应用',
        contextWindow: '256K tokens',
      },
      {
        name: '豆包 1.5 Vision',
        tier: 'high-end',
        capability: '视觉理解模型，图像识别与 OCR 能力强。',
        bestFor: '图像分析、UI 截图理解、文档 OCR',
      },
      {
        name: '豆包 1.5 Voice',
        tier: 'high-end',
        capability: '语音模型，支持实时语音对话与克隆。',
        bestFor: '语音助手、客服场景、语音交互',
      },
    ],
    strengths: [
      'API 价格极低，是国内最便宜的主流模型之一',
      '多模态能力强，语音与图像理解突出',
      'C 端用户量大，豆包 App 月活过亿',
      '火山引擎平台企业级支持完善',
      '国内直连，注册即用',
    ],
    challenges: [
      '编码能力弱于 DeepSeek、Claude、GLM',
      '长文档处理能力弱于 Kimi',
      '开源生态不如 Qwen、DeepSeek 完善',
      '品牌在开发者中认知度不如 DeepSeek、智谱',
    ],
    accessInfo: '国内直连 volcengine.com 注册即用',
    pricingLevel: 'low',
    pricingDesc: '豆包 1.5 Pro：￥0.8 / ￥2 每百万 tokens，业界最低档之一',
    bestFor: '多模态对话、语音交互、批量调用、C 端应用',
    officialUrl: 'https://www.doubao.com',
    accentColor: 'from-cyan-500 to-blue-600',
    logo: '/images/logos/bytedance.svg',
    customTag: { color: 'yellow', text: '多模态' },
  },
  {
    id: 'lingyiwanwu',
    name: '零一万物',
    nameEn: '01.AI',
    country: '中国',
    countryFlag: '🇨🇳',
    region: 'domestic',
    founded: '2023 年',
    founders: '李开复（创新工场董事长）',
    valuation: '约 10 亿美元（2025 年估值）',
    background:
      '零一万物由李开复博士于 2023 年创立，是创新工场孵化的 AI 独角兽。Yi 系列模型以开源为主，在多语言、长上下文上表现优异。Yi 2.0 是其旗舰开源模型，能力对标 Llama 4 系列，且对中文优化更好。零一万物在 2025 年战略调整后，更加聚焦企业级解决方案与开源生态，是国产开源模型的重要力量。',
    philosophy: '构建以人为中心的 AI',
    flagshipModels: [
      {
        name: 'Yi 2.0 Large',
        tier: 'flagship',
        capability: '零一万物旗舰开源模型，多语言与长上下文能力强，中文优化好，可私有化部署。',
        bestFor: '私有化部署、多语言场景、二次微调',
        contextWindow: '200K tokens',
      },
      {
        name: 'Yi 2.0 Vision',
        tier: 'high-end',
        capability: '视觉理解模型，图像识别与 OCR 能力强。',
        bestFor: '图像分析、文档 OCR',
      },
    ],
    strengths: [
      '开源模型，可自由商用，支持私有化部署',
      '多语言能力强，中文优化好',
      '李开复品牌背书，国际认知度较高',
      'API 价格亲民',
    ],
    challenges: [
      '编码能力弱于 DeepSeek、Claude',
      '2025 年战略调整后，迭代速度放缓',
      'C 端产品影响力不如 Kimi、豆包',
      '生态不如 Qwen、DeepSeek 完善',
    ],
    accessInfo: '国内直连 platform.lingyiwanwu.com 注册即用',
    pricingLevel: 'low',
    pricingDesc: 'Yi 2.0 Large：￥4 / ￥12 每百万 tokens；开源版本免费',
    bestFor: '私有化部署、多语言场景、二次开发',
    officialUrl: 'https://www.lingyiwanwu.com',
    accentColor: 'from-green-500 to-emerald-600',
    logo: '/images/logos/lingyiwanwu.svg',
    customTag: { color: 'green', text: '免费额度' },
  },
]

export const allVendors = [...overseasVendors, ...domesticVendors]
