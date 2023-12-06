export const formatDate = (isoDate) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(isoDate).toDateString(undefined, options);
};
