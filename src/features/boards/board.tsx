import { Button, PlusIcon, UsersIcon } from '../../components';

export default function Board() {
  return (
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
  );
}
