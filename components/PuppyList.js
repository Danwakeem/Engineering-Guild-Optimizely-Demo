import { List } from 'antd';
import { puppies } from './../data/puppies';
import { PuppyItem } from './PuppyItem';

export const PuppyList = () => {
  return (
    <List
      itemLayout="vertical"
      size="large"
      dataSource={puppies}
      renderItem={item => <PuppyItem {...item} />}
    ></List>
  );
};
