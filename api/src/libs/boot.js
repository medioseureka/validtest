module.exports = app => {
  app.listen(app.get('port'), () => {
    console.log('running on port', app.get('port'));
  });
};
