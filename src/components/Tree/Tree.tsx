import { useState } from 'react';
import CommentItem from './CommentItem';
export default function Tree() {
  const getDate = () => {
    const today = new Date();
    return `${today.getFullYear() }-${ today.getMonth() + 1 }-${ today.getDate()}`;
  };
  const getTime = () => {
    const today = new Date();
    return `${today.getHours() }:${ today.getMinutes()}`;
  };
  const [commentsArray] = useState([
    {
      username: 'Jen',
      userId: 1,
      date: getDate(),
      time: getTime(),
      content: 'How Artistic!',
      replies: [
        {
          username: 'Elliot1',
          userId: 2,
          date: getDate(),
          time: getTime(),
          content: 'True2',
          replies: [
            {
              username: 'Elliot2',
              userId: 3,
              date: getDate(),
              time: getTime(),
              content: 'True3',
              replies: [
                {
                  username: 'Elliot3',
                  userId: 4,
                  date: getDate(),
                  time: getTime(),
                  content: 'True4',
                  replies: [],
                },
              ],
            },
          ],
        },
      ],
    },
  ]);
  return (
    <div>
      {commentsArray.map((item, index) => <CommentItem key={index} getDate={getDate} getTime={getTime} item={item} />)}
    </div>
  );
}
