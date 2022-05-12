const countTime = (time) => {
  const delta = time - new Date();
  return Math.round(delta/86_400_000);
}

export default countTime;
