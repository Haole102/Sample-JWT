const User = require('../models/user');

class BlogControler {
  constructor() {}

  index(req, res) {
    res.json({ message: 'Welcome to the Blog API' });
  }

  async profile(req, res) {
    const query = User.findOne({ username: 'toan' });
     query.select('username email bio profilePicture');
    const user = await query.exec();
    console.log('User:', user);
    res.json({ user });
  }

  // async updateProfile(req,res) {
  //   const { username, email, bio } = req.body;
  //   console.log('Received data:', { username, email, bio });
  //   try{
  //     const user = await User.findOneAndUpdate(
  //       { username: 'toan' },
  //       { username, email, bio },
  //       { new: true }
  //     );
  //     console.log('Updated User:', user);
  //     res.redirect('/profile');
  //   }catch(err){
  //     console.log(errr);
  //   }
  // }

  async updateProfile(req, res) {
    const { username, email, bio } = req.body;
    const profilePicture = req.file ? req.file.filename : null; // Get the uploaded file name if it exists
    // console.log('Received data:', { username, email, bio, profilePicture });
    // console.log('Uploaded file:', req.file); // Log the uploaded file information
    const user = await User.findOne({ username: 'toan' });
    user.username = username;
    user.email = email;
    user.bio = bio;
    if (profilePicture) {
    user.profilePicture = profilePicture;
    }
    await user.save();
    // res.redirect('/profile');
  }
}


module.exports = new BlogControler();