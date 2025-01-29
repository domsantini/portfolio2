export const projects = [
  {
    id: crypto.randomUUID(),
    title: 'NYT Connections Archive',
    description: 'Complete archive of the popular NYT puzzle game, Connections. Updated daily!',
    type: 'Project',
    link:'https://connections-archive.vercel.app/',
    stack: ['Next.js', 'TypeScript', 'TailwindCSS', 'Framer Motion','MongoDB'],
  },
  {
    id: crypto.randomUUID(),
    title: 'Growthware',
    description: 'Built out website template offering for small business clients.',
    type: 'Work',
    stack: ['React', 'TypeScript', 'TailwindCSS'],
  },
  {
    id: crypto.randomUUID(),
    title: 'NFL Radar Charts',
    description: 'NFL stats visualization tool.',
    type: 'Project',
    link:'https://nfl-radar-charts2-0.vercel.app/chart-builder',
    stack: ['Next.js', 'TypeScript', 'TailwindCSS','Supabase'],
  }
]