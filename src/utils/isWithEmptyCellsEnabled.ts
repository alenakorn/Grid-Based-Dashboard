export const isWithEmptyCellsEnabled = () => {
  return new URLSearchParams(window.location.search).has('withEmptyCells');
};