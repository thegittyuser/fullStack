import userModel from "../model/userdata.model.js";

export const doregister = async (req, res) => {
  try {
    const { username, email, password, phone } = req.body;

    // existing email checking
    const existingEmail = await userModel.findOne({ email });
    if (existingEmail) {
      res.status(400).json({ message: "Email already exist!" });
    }

    const userDetail = await userModel.create({
      username,
      email,
      password,
      phone,
    });
    res
      .status(201)
      .json({ message: "user registration successful", userDetail });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Invalid Server Response" });
  }
};

export const dologin = async (req, res) => {
  try {
    const { email, password } = req.body;
    // existing email checking
    const user = await userModel.findOne({ email });
    if (!user) return res.status(400).json({ message: "Email not found!" });
    if (user.password !== password) {
      return res.status(400).json({ message: "password not match" });
    } else {
      return res.status(200).json({ message: "Login Successful" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Invalid Server Response" });
  }
};
