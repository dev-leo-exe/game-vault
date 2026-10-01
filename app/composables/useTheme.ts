export const useTheme = () =>
  useCookie<'light' | 'dark' | undefined>('theme', { maxAge: 60 * 60 * 24 * 365 })
