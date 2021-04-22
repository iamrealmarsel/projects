export const isSmallAmountOfText = (text) => {
  return text.length < 50;
};

export const isTextLimitExceeded = (text) => {
  return text.length > 400;
};
