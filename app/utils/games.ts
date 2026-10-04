export type Tone = 'indigo' | 'dawn' | 'aqua' | 'sand'

export interface Game {
  id: string
  title: string
  players: string
  minutes: number
  tone: Tone
  blurb?: string
  note?: string
  tagline?: string
  teams?: number
  languages?: number
  about?: string[]
  tags?: string[]
  steps?: { title: string, description: string }[]
}

export interface Stat {
  label: string
  value: string | number
  meta?: string
  fullRow?: boolean
}

export const dummyStats: Stat[] = [
  { label: 'Played', value: 18 },
  { label: 'Won', value: 11 },
  { label: 'Best streak', value: 4 },
  { label: 'Your best clue here', value: '“River” for 3', meta: 'Found by Aiko and Jun', fullRow: true },
]

export const toneClasses: Record<Tone, string> = {
  indigo: 'from-primary-soft to-mist dark:from-team-a-soft',
  dawn: 'from-sky-top via-sky-mid via-55% to-sky-bottom',
  aqua: 'from-paper-raised to-aqua',
  sand: 'from-peach-soft to-sand',
}

// Dummy data until the games come from Supabase
export const dummyGames: Game[] = [
  { id: 'codenames', title: 'Codenames', players: '4–10', minutes: 15, tone: 'indigo', blurb: 'Word association in two teams', note: 'Last played', tagline: 'One word. Find them all.', teams: 2, languages: 2,
    about: [
      'Two teams race to find their words on a board of 25. Each team has one spymaster who can see which words belong to whom, and gives a single word as a clue, with a number for how many words it fits.',
      'The team talks it over and taps their guesses. Find all your words first, and stay away from the black one.',
    ],
    tags: ['Wordplay', 'Two teams', 'Lots of talking', 'Easy to learn'],
    steps: [
      { title: 'Split into two teams', description: 'Indigo and Crimson. Each picks a spymaster.' },
      { title: 'The spymaster gives a clue', description: 'One word and a number, like “river, 3”.' },
      { title: 'Guess together', description: 'Tap a word, then Guess. A wrong colour ends the turn.' },
      { title: 'Avoid the black word', description: 'Pick it and your team loses at once.' },
    ] },
  { id: 'moon-bluff', title: 'Moon Bluff', players: '3–8', minutes: 10, tone: 'dawn', note: 'New' },
  { id: 'ink-sketch', title: 'Ink Sketch', players: '3–12', minutes: 15, tone: 'aqua' },
  { id: 'mountain-pass', title: 'Mountain Pass', players: '2–6', minutes: 20, tone: 'sand' },
  { id: 'night-tide', title: 'Night Tide', players: '4–8', minutes: 12, tone: 'indigo' },
  { id: 'paper-crane', title: 'Paper Crane', players: '3–6', minutes: 8, tone: 'dawn' },
  { id: 'far-shore', title: 'Far Shore', players: '4–12', minutes: 20, tone: 'aqua' },
]
