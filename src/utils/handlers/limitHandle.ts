export const getLimit = () => {
  if (window.innerWidth < 1300) {
    return 2;
  }
  return 3;
};
