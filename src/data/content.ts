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
      '将 cosmic-dev 文件夹复制到 C:\\Users\\<用户名>\\.qoderwork\\skill',
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
