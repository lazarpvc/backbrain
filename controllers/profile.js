const handleProfileGet = (req, res, db) => {
    const { id } = req.params;
    db.select('*')
      .from('users')
      .where({
        id: id,
      })
      .then((user) => {
        if (user.length) {
          res.json(user[0]);
        } else {
          res.status(400).json('error getting user');
        }
      })
      .catch((err) => {
        console.error("Error fetching profile:", err);
        res.status(500).json('internal server error');
      });
  };

  module.exports = {
    handleProfileGet
  }