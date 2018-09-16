const gnuTerryPratchett = async (ctx, next) => {
  ctx.set('X-Clacks-Overhead', 'GNU Terry Pratchett');
  await next();
};

module.exports = gnuTerryPratchett;
