try {
  [].findIndex(item => true);
} catch (e) {
  throw new Error(e)
}
