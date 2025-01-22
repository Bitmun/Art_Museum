export const getSheetValue = (input: string): string => {
  const match = input.match(/Sheet:\s*(.*)/);
  return match ? match[1] : '';
};
