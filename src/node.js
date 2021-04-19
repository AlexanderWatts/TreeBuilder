import { v4 as uuidv4 } from 'uuid';

const node = () => {
  const id = uuidv4();
  const data = Math.floor(Math.random() * 100);
  const label = `${data}`;
  const children = [];

  return ({
    id,
    data,
    label,
    children,
  });
};

export default node;
