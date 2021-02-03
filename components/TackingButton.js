import { Button } from 'antd';
import { publishEvent } from './../services/optimizely.service';

export const TrackingButton = ({
  eventName,
  revenue,
  onClick,
  children,
  ...others
}) => {
  const buttonClicked = (e) => {
    if (eventName) {
      publishEvent({
        eventName,
        revenue,
      });
    }
    onClick(e);
  };

  return (
    <Button onClick={buttonClicked} {...others}>{children}</Button>
  );
}