export const locationChanged = (text) => {
  return {
      type: 'location_changed',
      payload: text
  };
};