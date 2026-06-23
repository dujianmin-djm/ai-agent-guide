export const devSteps = [
  {
    number: 1,
    title: '准备苍穹环境',
    desc: '确保已有可访问的金蝶云苍穹开发环境，并安装 JDK 与 Python 3.12+。Python 用于运行元数据拉取与表单搜索脚本。',
    link: {
      text: '查看 Cosmic 云社区官方帖',
      url: 'https://vip.kingdee.com/knowledge/654256103479458816?productLineId=40&isKnowledge=2&lang=zh-CN',
    },
  },
  {
    number: 2,
    title: '安装 Qoder / QoderWork',
    desc: '下载并安装 AI 编程工具 Qoder（或 QoderWork）。这类工具是 AI Agent 的宿主，负责理解需求并调度 Skill 完成任务。',
    link: {
      text: '访问 Qoder 官网',
      url: 'https://qoder.com.cn/',
    },
  },
  {
    number: 3,
    title: '接入 DeepSeek API',
    desc: '在 Qoder 的设置中配置 DeepSeek API Key。DeepSeek 作为底层大模型，负责理解需求、生成代码与方案。',
    link: {
      text: '前往 DeepSeek 开放平台',
      url: 'https://platform.deepseek.com/',
    },
  },
  {
    number: 4,
    title: '导入 cosmic-dev Skill',
    desc: '将 cosmic-dev-skill.zip 解压到 QoderWork 的 Skill 目录（如 ~/.qoderwork/skill），重启客户端后即可识别。',
  },
  {
    number: 5,
    title: '导入 JAR 与 OpenAPI',
    desc: '把 bos-designer-ai-*.jar 放入本地苍穹 /mservice-cosmic/lib/bos 目录并重启服务；在开放服务云导入自定义 API DTS 文件并授权第三方应用。',
  },
  {
    number: 6,
    title: '开始 Vibe Coding',
    desc: '在 Qoder 中通过“/cosmic-dev”唤起技能，上传需求文档或直接描述需求，即可自动完成建模、插件开发与测试。',
  },
]

export const implScenarios = [
  {
    title: '实施文档整理',
    desc: '将项目交付中的需求文档、会议纪要、接口说明丢给 QoderWork，让它自动提炼要点、生成标准格式文档，减少复制粘贴。',
    tags: ['文档', '交付', '效率'],
  },
  {
    title: '需求结构化',
    desc: '利用 DeepSeek 的理解能力，把客户口头或碎片化需求整理成字段清单、单据结构与验收标准，便于后续开发。',
    tags: ['需求', '结构化', '沟通'],
  },
  {
    title: 'FAQ 与知识库',
    desc: '将历史项目文档、常见问题导入 AI 上下文，实施顾问可随时查询最佳实践，降低对资深人员的依赖。',
    tags: ['知识库', '查询', '复用'],
  },
  {
    title: '日报/周报生成',
    desc: '输入当天处理的问题、沟通记录，AI 自动整理成条理清晰的日报或周报，统一团队表达口径。',
    tags: ['日报', '周报', '汇报'],
  },
]

export const moreScenarios = [
  {
    title: '代码评审辅助',
    desc: '把插件代码或 SQL 脚本提交给 AI，自动识别潜在风险、性能问题，并给出优化建议。新人也能快速跟上团队代码规范。',
    tags: ['代码审查', '质量', '学习'],
  },
  {
    title: '苍穹异常排查',
    desc: '将苍穹报错日志、堆栈信息输入 AI，结合 cosmic-dev 知识库快速定位是元数据、插件还是 API 问题，并给出排查路径。',
    tags: ['排查', '日志', '运维'],
  },
  {
    title: '培训材料生成',
    desc: '把复杂功能模块的说明文档自动转化为面向新员工的图文培训手册或 PPT 大纲，降低知识传递成本。',
    tags: ['培训', '知识传递', '文档'],
  },
  {
    title: '接口说明生成',
    desc: '根据苍穹 OpenAPI 或自定义 API 定义，自动生成接口说明、请求示例与调用指南，方便前后端联调。',
    tags: ['接口', '联调', '自动化'],
  },
  {
    title: '测试用例设计',
    desc: '基于需求文档或字段清单，让 AI 生成覆盖正常流、异常流、边界值的测试用例，提升交付质量。',
    tags: ['测试', '质量', '用例'],
  },
  {
    title: '多语言文案整理',
    desc: '针对苍穹单据的字段标题、提示文案，批量生成符合业务语境的多语言版本，适配集团多地区项目。',
    tags: ['多语言', '文案', '全球化'],
  },
]

export const setupDetails = [
  {
    title: 'Python 环境',
    icon: '🐍',
    items: [
      '访问 python.org 下载 Python 3.12+（推荐 3.12.7）',
      'Windows installer (64-bit)（Windows 10/11 64位系统）',
      '安装时务必勾选 “Add Python to PATH”',
      '建议选择 “Install launcher for all users”',
      '验证安装：打开终端输入 python --version',
    ],
    link: {
      text: '前往 Python 官网下载',
      url: 'https://www.python.org/downloads/',
    },
  },
  {
    title: '苍穹环境',
    icon: '☁️',
    items: [
      '确保有可访问的金蝶云苍穹开发环境',
      '建议安装星瀚环境，亲测 AI 套件（原星空旗舰版）环境官方 jar 包部分接口调用报错',
      '环境须有许可应用组（踩坑）：开发服务运行时-独立版、标准业务API - 使用许可',
      '准备 JDK（项目已有 JDK 即可）',
      '了解苍穹环境的基本目录结构',
    ],
    link: {
      text: '苍穹环境准备官方文档',
      url: 'https://vip.kingdee.com/knowledge/654256103479458816?productLineId=40&isKnowledge=2&lang=zh-CN',
    },
  },
  {
    title: '导入 JAR 包',
    icon: '📦',
    items: [
      '找到本地苍穹开发环境目录',
      '将 bos-designer-ai-5.0.1-dev.jar 复制到 /mservice-cosmic/lib/bos',
      '重启苍穹服务，使 API 生效',
      'AI套件环境 R202605.001 版本经测试重启后 jar 包被重置删除，可放到 /apppackage-cosmic/bos后重试',
    ],
  },
  {
    title: '导入 OpenAPI',
    icon: '🔌',
    items: [
      '要求环境须有标准业务API - 使用许可',
      '登录苍穹 → 开放服务云 → OpenAPI → API 管理 → API 开发',
      '导入 自定义API(openapi_customapi)_270.dts',
      '点击解析、导入，确认接口列表',
    ],
  },
  {
    title: '配置第三方应用',
    icon: '🔐',
    items: [
      '进入 安全策略 → 第三方应用，新增应用',
      '配置自定义认证密钥',
      '取消“增强型 Token 认证”',
      '在 API 授权中勾选已导入的 AI 能力中心接口',
    ],
  },
  {
    title: '添加 Skill',
    icon: '🛠️',
    items: [
      '解压 cosmic-dev-skill.zip',
      '将 cosmic-dev 文件夹复制到 ~/.qoderwork/skill',
      '重启 QoderWork，即可在技能列表看到 cosmic-dev',
      '和 AI 对话，了解苍穹技能包和如何初始化，如‘深度解析cosmic-dev这个技能包，并说明如何初始化连接本地苍穹服务’',
    ],
  },
]

export const downloadResources = [
  {
    title: 'cosmic-dev 安装及使用手册',
    desc: '官方安装步骤、业务场景示例与完整流程说明。',
    ext: 'docx',
    size: '2.9 MB',
    filename: 'cosmic-dev安装及使用手册.docx',
    icon: '/word.svg',
  },
  {
    title: 'cosmic-dev-skill.zip',
    desc: '完整的 AI 技能包，包含建模、修改、UI、插件开发等能力。',
    ext: 'zip',
    size: '3.0 MB',
    filename: 'cosmic-dev-skill.zip',
    icon: '/rar.svg',
  },
  {
    title: 'bos-designer-ai-5.0.1-dev.jar',
    desc: '元数据建模 API 依赖包，需放入本地苍穹环境。',
    ext: 'jar',
    size: '801 KB',
    filename: 'bos-designer-ai-5.0.1-dev.jar',
    icon: '/rar.svg',
  },
  {
    title: 'bos-open-v3-core-8.0.jar',
    desc: '苍穹开发核心依赖包。（环境更新到最新版本已有同名包，似乎用不到？）',
    ext: 'jar',
    size: '429 KB',
    filename: 'bos-open-v3-core-8.0.jar',
    icon: '/rar.svg',
  },
  {
    title: '自定义 API DTS',
    desc: '开放服务云 OpenAPI 导入文件，用于 API 授权。',
    ext: 'dts',
    size: '1.6 MB',
    filename: 'openapi_customapi_270.dts',
    icon: '/file.svg',
  },
  {
    title: 'AI产品规划与设计实战',
    desc: '关于AI产品规划与设计的实战指南，适合产品经理、实施顾问和开发者参考。',
    ext: 'pdf',
    size: '12.8 MB',
    filename: 'AI产品规划与设计实战.pdf',
    icon: '/pdf.svg',
  },
]
