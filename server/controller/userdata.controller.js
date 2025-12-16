import userModel from "../model/userdata.model.js";
import bcrypt from "bcrypt";
import cryptoJS from "crypto-js";
import { v4 as uuidv4 } from "uuid";

// =========================
//  USER REGISTRATION
// =========================
export const doregister = async (req, res) => {
  try {
    // Extract required fields from request body
    const { username, email, password, phone } = req.body;

    // Check if the email already exists in the database
    const existingEmail = await userModel.findOne({ email });
    if (existingEmail) {
      return res
        .status(400)
        .json({ ok: false, message: "Email already exists!" });
    } else {
      // Hash the user password for security
      const password_hash = await bcrypt.hash(password, 10);

      // Create a new user record in the database
      const userDetail = await userModel.create({
        username,
        email,
        password: password_hash,
        phone,
      });

      // Send success response after registration
      return res.status(201).json({
        ok: true,
        message: "User registration successful",
        userDetail,
      });
    }
  } catch (err) {
    // Catch unexpected server errors
    console.error(err);
    return res.status(500).json({ ok: false, message: "Server error" });
  }
};

// =========================
//  USER LOGIN
// =========================
// temporary data storage
const sessionKeys = {};
export const dologin = async (req, res) => {
  try {
    // Extract login credentials from request body
    const { email, password } = req.body;

    // Check whether the email exists in the database
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ ok: false, message: "Email not found!" });
    }
    const password_match = await bcrypt.compare(password, user.password);

    if (!password_match) {
      return res.status(400).json({ ok: false, message: "Password not match" });
    } else {
      // Send success response after login
      const dynamicKey = cryptoJS.lib.WordArray.random(16).toString();
      const sessionId = uuidv4();

      const encryptedMail = cryptoJS.AES.encrypt(email, dynamicKey).toString();

      sessionKeys[sessionId] = dynamicKey;

      return res.status(200).json({
        ok: true,
        message: "Login Successful",
        // userEmail: { email: user.email },
        userEmail: { email: encryptedMail, sessionId },
      });
    }
  } catch (err) {
    // Catch unexpected server errors
    console.error(err);
    return res.status(500).json({ ok: false, message: "Server error" });
  }
};

export const Profile = async (req, res) => {
  try {
    const { email } = req.params; //localhost/profile/:email
    // email checking from db
    const userEmail = await userModel.findOne({ email });
    if (!userEmail) {
      return res
        .status(400)
        .json({ ok: false, message: "user email not found" });
    } else {
      res.json(userEmail);
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ ok: false, message: "Server error" });
  }
};
