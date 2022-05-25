export const formatDisplayUserName = (displayName: string | undefined) => {
  if (displayName) {
    const name = displayName.split(' ');

    if (name.length >= 2) {
      return `${name[0]} ${name[1]}`;
    }

    return name[0];
  }
  return 'No Name';
};
