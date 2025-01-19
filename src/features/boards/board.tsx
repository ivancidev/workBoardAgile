import { Button, PlusIcon, UsersIcon } from '../../components';
import { DragAndDrop } from '../tasks/drag-and-drop/drag-and-drop';

export default function Board() {
  return (
    <main>
      <section className="flex items-center justify-between p-4 ">
        <h1 className="text-3xl font-semibold">Tablero del proyecto</h1>
        <div className="flex space-x-2">
          <Button
            text="Nueva tarea"
            label={<PlusIcon />}
            onClick={() => console.log('clicked')}
            variant="primary"
          />
          <Button
            text="Usuarios"
            label={<UsersIcon />}
            onClick={() => console.log('clicked')}
            variant="secondary"
          />
        </div>
      </section>
      <DragAndDrop />
    </main>
  );
}
