export const truncateString = (str: any, num: number = 100) => {
  const trncatedString = str.length > num ? str.slice(0, num) + "..." : str;
  return trncatedString;
};

export const getInitials = (str: string) => {
  return (
    str
      .match(/\b(\w)/g)
      ?.join("")
      ?.toUpperCase() || ""
  );
};
