import { Comment } from './comment';
import { User } from './user';

export type Priority = {
  status: 'Baja' | 'Media' | 'Alta';
};

export type ColumnStatusTask = {
  status: 'Pendiente' | 'En Proceso' | 'Terminada';
};

export type Tag = {
  id: number;
  name: string;
};

export type Task = {
  id: number;
  title: string;
  description: string;
  priority: Priority;
  color: string;
  date: string;
  tags: Tag[];
  status: ColumnStatusTask;
  users: User[];
  comments: Comment[];
  createdAt: string;
  updatedAt: string;
};
