export function toUnixTS(ISOString) {
  const date = new Date(ISOString);
  return date.valueOf();
}

// TODO: export function toLocalTime(ISOString) {}
