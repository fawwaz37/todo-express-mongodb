module.exports = {
    isAuthenticated: function(req, res, next) {
      if (req.isAuthenticated()) {
        return next();
      }
      res.render('login', {
        message: 'Please login to continue',
        messageClass: 'alert-danger'
    });
    },
    notAuthenticated: function(req, res, next) {
      if (!req.isAuthenticated()) {
        return next();
      }
      res.redirect('/todo');      
    }
  };