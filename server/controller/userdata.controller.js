import userModel from "../model/userdata.model";

export const doregister = (req, res) => {
  try {
    const { username, email, password, phone } = req.body;

    const userDetail = userModel.create({
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
