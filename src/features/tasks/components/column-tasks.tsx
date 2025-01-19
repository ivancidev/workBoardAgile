import { Task } from '@/types';
import { CardTask } from './card-task';
interface ColumnTasksProps {
  tasks: Task[];
  listRef: React.RefObject<HTMLUListElement>;
}

export const ColumnTasks = ({ tasks, listRef }: ColumnTasksProps) => {
  return (
    <section ref={listRef} className="flex flex-col items-center p-4 h-screen gap-3">
      {tasks.map((task) => (
        <CardTask key={task.id} task={task} />
      ))}
    </section>
  );
};
