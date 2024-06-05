const User = require('../models/User');

exports.getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select('-password');
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateUserProfile = async (req, res) => {
  const { name, lastName, email, password, license, company, phone } = req.body;
  try {
    const user = await User.findById(req.user._id);
    if (user) {
      user.name = name || user.name;
      user.lastName = lastName || user.lastName;
      user.email = email || user.email;
      if (password) {
        user.password = password;
      }
      user.license = license || user.license;
      user.company = company || user.company;
      user.phone = phone || user.phone;
      await user.save();
      res.json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};