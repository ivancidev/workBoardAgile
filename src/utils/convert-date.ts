import { formatDistanceToNow } from 'date-fns';

export const convertDate = (date: string) => {
  return formatDistanceToNow(new Date(date), { addSuffix: true });
};
