function capitalize(string) {
  const output = string
    .toLowerCase()
    .replace(/\w\S*/g, (w) => w.replace(/^\w/, (c) => c.toUpperCase()));

  return output;
}

module.exports = { capitalize };
