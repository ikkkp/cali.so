export const seo = {
  title: 'ikkkp | 02｜hangzhou｜FE dev｜INFJ 乐观的悲观主义者｜热爱开发、设计、Web3。',
  description:
    'ikkkp | 02｜hangzhou｜FE dev｜INFJ 乐观的悲观主义者｜热爱开发、设计、Web3。',
  url: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://ikkkp.me'
      : 'http://localhost:3000'
  ),
} as const
