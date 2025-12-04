import userModel from "../model/userdata.model.js";

export const doregister = async (req, res) => {
  try {
    const { username, email, password, phone } = req.body;

    // existing email checking
    const existingEmail = await userModel.findOne({ email });
    if (existingEmail) {
      return res.status(400).json({
        ok: false,
        message: "Email already exists!",
      });
    }

    const userDetail = await userModel.create({
      username,
      email,
      password,
      phone,
    });
    return res
      .status(201)
      .json({ ok: true, message: "User registration successful", userDetail });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      ok: false,
      message: "Server error",
    });
  }
};

export const dologin = async (req, res) => {
  try {
    const { email, password } = req.body;
    // existing email checking
    const user = await userModel.findOne({ email });
    if (!user)
      return res.status(400).json({ ok: false, message: "Email not found!" });
    if (user.password !== password) {
      return res.status(400).json({ ok: false, message: "password not match" });
    } else {
      return res.status(200).json({ ok: true, message: "Login Successful" });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ ok: false, message: "Server error" });
  }
};
