export const setClassNameChannelsItems = (
  pathname: string,
  route: string,
  styleDefault: string,
  styleActive: string
) => {
  if (pathname === route || pathname === route + "/") {
    return styleDefault + " " + styleActive;
  }
  return styleDefault;
};
