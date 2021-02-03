import React, { useContext, useState }  from 'react';
import { DollarCircleOutlined } from '@ant-design/icons';
import { List, Space } from 'antd';
import styled from 'styled-components';
import { TrackingButton } from './TackingButton';
import { AppContext } from '../context/app.context';

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
  const {
    versionBId,
    currentVersion
  } = useContext(AppContext);
  const isVersionB = currentVersion === versionBId;
  const [buttonText, setButtonText] = useState('Adopt Me Now');
  const [isAdopted, setIsAdopted] = useState(false);

  const onButtonClick = () => {
    setIsAdopted(true);
    setButtonText('Adopted! 😎');
  }

  return (
    <StyledItem
      key={id}
      actions={[
        <IconText icon={DollarCircleOutlined} text={price} key="list-vertical-dollar-circle-o" />,
        <TrackingButton disabled={isAdopted} eventName='adopted_puppy' revenue={parseInt(price.replace('$','').replace('.', ''))} onClick={onButtonClick} key="adopt-button" type="primary">{buttonText}</TrackingButton>
      ]}
      extra={
        isVersionB && <img
          width={272}
          alt="logo"
          src={img}
        />
      }
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
