module.exports = function (req, res) {
  res.json([
    {
      name: 'Joke',
      id: 0
    },
    {
      name: 'Games',
      id: 1
    },
    {
      name: 'Braindead',
      id: 2
    }
  ]);
}