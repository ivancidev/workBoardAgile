import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components';
import { MessageIcon } from '@/components/shared/icons/message-icon';
import { Task } from '@/types';
import { convertDate } from '@/utils/convert-date';
interface CardTaskProps {
  task: Task;
}

export const CardTask = ({ task }: CardTaskProps) => {
  return (
    <Card className="w-full max-w-sm cursor-pointer border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
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
      </CardHeader>
      <CardContent>
        <CardDescription>{task.description}</CardDescription>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <p className="text-xs font-semibold">{convertDate(task.date)}</p>
        <div className="flex items-center gap-4">
          <span className='flex items-center gap-1'>
            <MessageIcon />
            <p>1</p>
          </span>
          <div className="flex items-center">
            {task.users.slice(0, 2).map((user) => (
              <img
                key={user.id}
                src={user.avatarUrl}
                alt={user.name}
                className="w-7 h-7 rounded-full border-2 border-white shadow-sm"
              />
            ))}
            {task.users.length > 2 && (
              <div className="w-7 h-7 rounded-full border-2 border-white shadow-sm flex items-center justify-center bg-gray-200 text-xs font-semibold">
                +{task.users.length - 2}
              </div>
            )}
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};
