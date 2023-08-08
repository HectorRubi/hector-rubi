export type TopicNames = 'JavaScript' | 'Angular' | 'React' | 'Node' | 'Other'

export type Course = {
  name: string
  platform: 'Platzi' | 'Udemy'
  badge: string
}

export type Topic = {
  name: TopicNames
  icon: string
  courses: Course[]
}

export const topics: Topic[] = [
  {
    name: 'JavaScript',
    icon: 'fa-brands fa-square-js',
    courses: [
      {
        name: 'Curso Básico de JavaScript',
        platform: 'Platzi',
        badge:
          'https://static.platzi.com/media/achievements/badge-basicojs-e2ead888-428e-4f55-962c-8894aeaeacda.png',
      },
      {
        name: 'Curso de JavaScript Engine (V8) y el Navegador',
        platform: 'Platzi',
        badge:
          'https://static.platzi.com/media/achievements/badge-javascript-engine-v8-navegador-de67cba4-0548-4361-9c6a-1a25aa96fa2a.png',
      },
    ],
  },
  {
    name: 'Angular',
    icon: 'fa-brands fa-angular',
    courses: [
      {
        name: 'Curso de Angular: Componentes y Servicios',
        platform: 'Platzi',
        badge:
          'https://static.platzi.com/media/achievements/badge-angular-componentes-servicios-75f68ec3-48e0-430e-b7e2-889fad0d1984.png',
      },
    ],
  },
  {
    name: 'Other',
    icon: 'fa-solid fa-gear',
    courses: [
      {
        name: 'Curso de Fundamentos de Bases de Datos',
        platform: 'Platzi',
        badge:
          'https://static.platzi.com/media/achievements/badge-fundamentos-de-bases-de-datos-cc5eff2a-a7e0-4110-af5d-a47b628611da.png',
      },
    ],
  },
]
