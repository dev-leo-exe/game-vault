export type Tone = 'indigo' | 'dawn' | 'aqua' | 'sand'

export interface Game {
  id: string
  title: string
  players: string
  minutes: number
  tone: Tone
  blurb?: string
  note?: string
}

export const toneClasses: Record<Tone, string> = {
  indigo: 'from-primary-soft to-mist dark:from-team-a-soft',
  dawn: 'from-sky-top via-sky-mid via-55% to-sky-bottom',
  aqua: 'from-paper-raised to-aqua',
  sand: 'from-peach-soft to-sand',
}

// Dummy data until the games come from Supabase
export const dummyGames: Game[] = [
  { id: 'codenames', title: 'Codenames', players: '4–10', minutes: 15, tone: 'indigo', blurb: 'Word association in two teams', note: 'Last played' },
  { id: 'moon-bluff', title: 'Moon Bluff', players: '3–8', minutes: 10, tone: 'dawn', note: 'New' },
  { id: 'ink-sketch', title: 'Ink Sketch', players: '3–12', minutes: 15, tone: 'aqua' },
  { id: 'mountain-pass', title: 'Mountain Pass', players: '2–6', minutes: 20, tone: 'sand' },
  { id: 'night-tide', title: 'Night Tide', players: '4–8', minutes: 12, tone: 'indigo' },
  { id: 'paper-crane', title: 'Paper Crane', players: '3–6', minutes: 8, tone: 'dawn' },
  { id: 'far-shore', title: 'Far Shore', players: '4–12', minutes: 20, tone: 'aqua' },
]
