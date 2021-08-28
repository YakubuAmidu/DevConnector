const express = reuire('express');
const router = express.Router();

//@route GET api/auth
//@desc Test route
//@access public
router.get('/auth', function (req, res) {
  res.send('Auth route');
});

module.exports = router;
