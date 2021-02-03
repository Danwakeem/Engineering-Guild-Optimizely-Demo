import React from 'react';
import { DollarCircleOutlined } from '@ant-design/icons';
import { List, Button, Space } from 'antd';
import styled from 'styled-components';

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

export const PuppyItem = ({
  id,
  name,
  description,
  price,
  img
}) => {
  /* extra={
    <img
      width={272}
      alt="logo"
      src={img}
    />
  } */
  return (
    <StyledItem
      key={id}
      actions={[
        <IconText icon={DollarCircleOutlined} text={price} key="list-vertical-dollar-circle-o" />,
        <Button key="adopt-button" type="primary">Adopt Me Now</Button>
      ]}
    >
      <List.Item.Meta
        title={name}
        description={description}
      />
    </StyledItem>
  );
}

const StyledItem = styled(List.Item)`
  background: white;
  border-bottom: 1px solid #eee;
`;
