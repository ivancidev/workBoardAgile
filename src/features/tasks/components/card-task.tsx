import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components';
import { Task } from '@/types';
interface CardTaskProps {
  task: Task;
}

export const CardTask = ({ task }: CardTaskProps) => {
  return (
    <Card className="w-full max-w-sm cursor-pointer">
      <CardHeader>
        <CardTitle>{task.title}</CardTitle>
        <div className="flex gap-2">
          {task.tags.map((tag) => (
            <span
              key={tag.id}
              className="text-xs text-gray-700 mt-2 font-semibold"
            >
              {tag.name}
            </span>
          ))}
        </div>
        <CardDescription>{task.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{task.date}</p>
      </CardContent>
    </Card>
  );
};
