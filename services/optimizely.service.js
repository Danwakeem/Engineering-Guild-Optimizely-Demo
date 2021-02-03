export const publishEvent = ({
  eventName,
  revenue,
}) => {
  if (window && window.optimizely) {
    window.optimizely.push({
      type: 'event',
      eventName,
      tags: {
        revenue,
      },
    })
  }
};
