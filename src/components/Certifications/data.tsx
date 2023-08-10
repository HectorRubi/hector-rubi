import {
  faSquareJs,
  faAngular,
  faReact,
  faNode,
  faPython,
  IconDefinition,
} from '@fortawesome/free-brands-svg-icons'
import { faGear } from '@fortawesome/free-solid-svg-icons'
import { platform } from 'os'

export type TopicNames =
  | 'JavaScript'
  | 'Angular'
  | 'React'
  | 'Node'
  | 'Other'
  | 'Python'
  | 'TypeScript'

export type Course = {
  name: string
  platform: 'Platzi' | 'Udemy'
  badge: string
}

export type Topic = {
  name: TopicNames
  icon: IconDefinition
  color: string
  courses: Course[]
}

export const topics: Topic[] = [
  {
    name: 'JavaScript',
    icon: faSquareJs,
    color: 'text-yellow-500',
    courses: [
      {
        name: 'Curso Básico de JavaScript',
        platform: 'Platzi',
        badge:
          'https://static.platzi.com/media/achievements/badge-basicojs-e2ead888-428e-4f55-962c-8894aeaeacda.png',
      },
      {
        name: 'Curso de Closures y Scope en JavaScript 2020',
        platform: 'Platzi',
        badge:
          'https://static.platzi.com/media/achievements/badge-_closures-scope-javascript-3848a8e7-cf6f-47c5-a824-df5fc0c14d41.png',
      },
      {
        name: 'Curso de Asincronismo con JavaScript 2019',
        platform: 'Platzi',
        badge:
          'https://static.platzi.com/media/achievements/badge-asincronismo-javascript-3f44d51e-209e-4e47-a228-4142d049525c.png',
      },
      {
        name: 'Curso de JavaScript Engine (V8) y el Navegador',
        platform: 'Platzi',
        badge:
          'https://static.platzi.com/media/achievements/badge-javascript-engine-v8-navegador-de67cba4-0548-4361-9c6a-1a25aa96fa2a.png',
      },
      {
        name: 'Curso de Single Page Application con JavaScript Vanilla',
        platform: 'Platzi',
        badge:
          'https://static.platzi.com/media/achievements/badge-spa-javascript-vanilla-71b296fc-7041-4084-9f94-0ed5e1b53d18.png',
      },
      {
        name: 'Taller de Creación de Router para Single Page App con JavaScript',
        platform: 'Platzi',
        badge:
          'https://static.platzi.com/media/achievements/badge-router-single-page-app-js-ac0b8cfa-7bc8-4010-a9df-7500e5c1e078.png',
      },
      {
        name: 'Curso de Gestión de Dependencias y Paquetes con NPM',
        platform: 'Platzi',
        badge:
          'https://static.platzi.com/media/achievements/badge-gestion-dependencias-paquetes-npm-f02e4608-c688-4d99-aa6d-293ea6c0be8d.png',
      },
    ],
  },
  {
    name: 'Angular',
    icon: faAngular,
    color: 'text-red-500',
    courses: [
      {
        name: 'Curso de Fundamentos de Angular',
        platform: 'Platzi',
        badge:
          'https://static.platzi.com/media/achievements/badge-fundamentos-angular-1e2e6052-abba-4c05-9233-03bba9866523.png',
      },
      {
        name: 'Curso de Angular: Componentes y Servicios',
        platform: 'Platzi',
        badge:
          'https://static.platzi.com/media/achievements/badge-angular-componentes-servicios-75f68ec3-48e0-430e-b7e2-889fad0d1984.png',
      },
      {
        name: 'Curso de Angular Router: Lazy Loading y Programación Modular',
        platform: 'Platzi',
        badge:
          'https://static.platzi.com/media/achievements/badge-angular-router-programacion-modular-c72b5fb5-f7e6-429c-b3d8-e2774b76acf9.png',
      },
      {
        name: 'Curso de Consumo de APIs REST con Angular',
        platform: 'Platzi',
        badge:
          'https://static.platzi.com/media/achievements/badge-consumo-apis-rest-angular-b8fa2303-5c95-40ab-8c8b-a6d4a0bc8f31.png',
      },
    ],
  },
  {
    name: 'React',
    icon: faReact,
    color: 'text-sky-500',
    courses: [
      {
        name: 'Curso de React 17',
        platform: 'Platzi',
        badge:
          'https://static.platzi.com/media/achievements/badge-react-2018-0a41bdc5-e874-45c9-ac67-98294c898da4.png',
      },
    ],
  },
  {
    name: 'Node',
    icon: faNode,
    color: 'text-lime-500',
    courses: [
      {
        name: 'Curso de Fundamentos de Node.js',
        platform: 'Platzi',
        badge:
          'https://static.platzi.com/media/achievements/badge-fundamentos-nodejs-8fd9c0f4-562a-48e9-a85a-3a7db0fa384b.png',
      },
      {
        name: 'Curso de Backend con Node.js: API REST con Express.js',
        platform: 'Platzi',
        badge:
          'https://static.platzi.com/media/achievements/badge-backend-nodejs-apirest-expressjs-3fc7bca3-8dcb-459c-9638-12c92d502f5f.png',
      },
    ],
  },
  {
    name: 'Python',
    icon: faPython,
    color: 'text-blue-500',
    courses: [
      {
        name: 'Curso Básico de Python',
        platform: 'Platzi',
        badge:
          'https://static.platzi.com/media/achievements/badge-basico-python-bdcc67b3-031d-4dce-8e78-5699fb243149.png',
      },
      {
        name: 'Curso de Python Intermedio: Comprehensions, Lambdas y Manejo de Errores',
        platform: 'Platzi',
        badge:
          'https://static.platzi.com/media/achievements/badge-intermedio-de-python-d0d16518-5edd-450a-b2a9-0710bded1494.png',
      },
    ],
  },
  {
    name: 'Other',
    icon: faGear,
    color: 'text-zinc-500',
    courses: [
      {
        name: 'Curso de Fundamentos de Bases de Datos',
        platform: 'Platzi',
        badge:
          'https://static.platzi.com/media/achievements/badge-fundamentos-de-bases-de-datos-cc5eff2a-a7e0-4110-af5d-a47b628611da.png',
      },
      {
        name: 'Curso de Programación Orientada a Objetos: POO',
        platform: 'Platzi',
        badge:
          'https://static.platzi.com/media/achievements/badges-poo-513deb20-a5bd-40a7-b97a-c36dc772d512.png',
      },
      {
        name: 'Curso Profesional de Git y GitHub',
        platform: 'Platzi',
        badge:
          'https://static.platzi.com/media/achievements/badge-github-0b729570-934d-47d8-ba6b-610d7f15e0ec.png',
      },
      {
        name: 'Curso Básico de GitHub Actions',
        platform: 'Platzi',
        badge:
          'https://static.platzi.com/media/achievements/piezas-github-actions_badge-6fad93d5-4c39-4739-aab3-50566d6a6627.png',
      },
      {
        name: 'Curso de Docker',
        platform: 'Platzi',
        badge:
          'https://static.platzi.com/media/achievements/badges-fundamentos-docker-c1277cec-3ef7-4557-9f83-2649bec9fe70.png',
      },
    ],
  },
]
