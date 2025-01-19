import { Task, User } from '@/types';

export const users: User[] = [
  {
    id: 1,
    name: 'Juan Pérez',
    avatarUrl: 'https://unavatar.io/github/mdo',
    email: 'juan.perez@example.com',
    password: 'hashedpassword123',
    role: 'admin',
    createdAt: '2023-01-15T08:00:00Z',
    updatedAt: '2023-12-20T09:00:00Z',
  },
  {
    id: 2,
    name: 'Ana Gómez',
    avatarUrl: 'https://unavatar.io/github/dimitri',
    email: 'ana.gomez@example.com',
    password: 'hashedpassword456',
    role: 'user',
    createdAt: '2023-03-10T10:00:00Z',
    updatedAt: '2023-12-15T10:00:00Z',
  },
  {
    id: 3,
    name: 'Carlos López',
    avatarUrl: 'https://unavatar.io/github/marcus',
    email: 'carlos.lopez@gmail.com',
    password: 'hashedpassword789',
    role: 'user',
    createdAt: '2023-04-20T12:00:00Z',
    updatedAt: '2023-12-10T12:00:00Z',
  },
  {
    id: 4,
    name: 'María Rodríguez',
    avatarUrl: 'https://unavatar.io/github/luke',
    email: 'maria@gmail.com',
    password: 'hashedpassword101112',
    role: 'user',
    createdAt: '2023-05-25T14:00:00Z',
    updatedAt: '2023-12-05T14:00:00Z',
  },
];

export const todoTasks: Task[] = [
  {
    id: 1,
    title: 'Implementar autenticación',
    description: 'Implementar el sistema de autenticación para la aplicación.',
    priority: {
      status: 'Alta',
    },
    color: '#FF5733',
    date: '2025-01-19',
    tags: [
      {
        id: 1,
        name: 'Backend',
      },
      {
        id: 2,
        name: 'API',
      },
    ],
    status: {
      status: 'En Proceso',
    },
    users: users,
    comments: [
      {
        id: 1,
        userId: 1,
        content: 'Necesitamos definir los endpoints.',
        user: users[0],
        createdAt: '2023-09-30T12:34:56Z',
      },
      {
        id: 2,
        userId: 2,
        content: 'Podría ayudarte con el diseño.',
        user: users[1],
        createdAt: '2023-09-30T14:00:00Z',
      },
    ],
    createdAt: '2023-09-29T10:00:00Z',
    updatedAt: '2023-09-30T12:00:00Z',
  },
  {
    id: 2,
    title: 'Diseñar la UI',
    description:
      'Crear el diseño de la interfaz de usuario para la aplicación.',
    priority: {
      status: 'Media',
    },
    color: '#FFD700',
    date: '2023-10-03',
    tags: [
      {
        id: 3,
        name: 'Frontend',
      },
      {
        id: 4,
        name: 'UI/UX',
      },
    ],
    status: {
      status: 'En Proceso',
    },
    users: [users[1]],
    comments: [
      {
        id: 3,
        userId: 2,
        content: '¿Tienes alguna preferencia de color para la UI?',
        user: users[1],
        createdAt: '2023-10-02T10:30:00Z',
      },
    ],
    createdAt: '2023-10-02T08:00:00Z',
    updatedAt: '2023-10-02T10:00:00Z',
  },
];

export const inProgressTasks: Task[] = [
  {
    id: 3,
    title: 'Integrar API de autenticación',
    description: 'Conectar la API de autenticación con el frontend.',
    priority: {
      status: 'Alta',
    },
    color: '#1E90FF',
    date: '2023-10-04',
    tags: [
      {
        id: 2,
        name: 'API',
      },
    ],
    status: {
      status: 'En Proceso',
    },
    users: [users[0]],
    comments: [
      {
        id: 4,
        userId: 1,
        content: 'Necesitamos revisar los tokens de autenticación.',
        user: users[0],
        createdAt: '2023-10-04T11:00:00Z',
      },
    ],
    createdAt: '2023-10-03T12:00:00Z',
    updatedAt: '2023-10-04T11:00:00Z',
  },
  {
    id: 4,
    title: 'Configurar base de datos',
    description:
      'Configurar la base de datos para almacenar los usuarios y las sesiones.',
    priority: {
      status: 'Alta',
    },
    color: '#8A2BE2',
    date: '2023-10-05',
    tags: [
      {
        id: 5,
        name: 'Database',
      },
    ],
    status: {
      status: 'En Proceso',
    },
    users: [users[0], users[1]],
    comments: [
      {
        id: 5,
        userId: 1,
        content: 'Estoy configurando las tablas para usuarios y sesiones.',
        user: users[0],
        createdAt: '2023-10-05T09:00:00Z',
      },
      {
        id: 6,
        userId: 2,
        content: 'Revisa los índices para mejorar el rendimiento.',
        user: users[1],
        createdAt: '2023-10-05T10:00:00Z',
      },
    ],
    createdAt: '2023-10-04T15:00:00Z',
    updatedAt: '2023-10-05T10:00:00Z',
  },
];

export const doneTasks: Task[] = [
  {
    id: 5,
    title: 'Revisar seguridad de la API',
    description: 'Realizar una auditoría de seguridad en la API.',
    priority: {
      status: 'Alta',
    },
    color: '#32CD32',
    date: '2023-10-06',
    tags: [
      {
        id: 6,
        name: 'Seguridad',
      },
    ],
    status: {
      status: 'Completado',
    },
    users: [users[0]],
    comments: [
      {
        id: 7,
        userId: 1,
        content: 'La API ha pasado la auditoría de seguridad.',
        user: users[0],
        createdAt: '2023-10-06T12:00:00Z',
      },
    ],
    createdAt: '2023-10-05T16:00:00Z',
    updatedAt: '2023-10-06T12:00:00Z',
  },
  {
    id: 6,
    title: 'Actualizar documentación de API',
    description:
      'Actualizar la documentación de la API con los últimos cambios.',
    priority: {
      status: 'Media',
    },
    color: '#00FA9A',
    date: '2023-10-07',
    tags: [
      {
        id: 7,
        name: 'Documentación',
      },
    ],
    status: {
      status: 'Completado',
    },
    users: [users[1]],
    comments: [
      {
        id: 8,
        userId: 2,
        content: 'La documentación ha sido actualizada y revisada.',
        user: users[1],
        createdAt: '2023-10-07T14:30:00Z',
      },
    ],
    createdAt: '2023-10-06T17:00:00Z',
    updatedAt: '2023-10-07T14:30:00Z',
  },
];
