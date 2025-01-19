import { Task } from '@/types';
import { doneTasks, inProgressTasks, todoTasks } from '@/utils/lib';
import { useDragAndDrop } from '@formkit/drag-and-drop/react';
import { ColumnTasks } from '../components/column-tasks';

export const DragAndDrop = () => {
  const [todoList, todos] = useDragAndDrop<HTMLUListElement, Task>(todoTasks, {
    group: 'todoList',
  });
  const [inProgressList, inProgress] = useDragAndDrop<HTMLUListElement, Task>(
    inProgressTasks,
    { group: 'todoList' },
  );
  const [doneList, dones] = useDragAndDrop<HTMLUListElement, Task>(doneTasks, {
    group: 'todoList',
  });
  return (
    <main className="flex gap-3 justify-center">
      <div className="flex flex-col items-center p-4 ">
        <h2 className="mt-2 text-lg font-semibold">Todo</h2>
        <ColumnTasks tasks={todos} listRef={todoList} />
      </div>
      <div className="flex flex-col items-center p-4">
        <h2 className="mt-2 text-lg font-semibold">In Progress</h2>
        <ColumnTasks tasks={inProgress} listRef={inProgressList} />
      </div>
      <div className="flex flex-col items-center p-4">
        <h2 className="mt-2 text-lg font-semibold">Done</h2>
        <ColumnTasks tasks={dones} listRef={doneList} />
      </div>
    </main>
  );
};
