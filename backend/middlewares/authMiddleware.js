const express = require("express");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const authMiddleware = (req, res, next) => {
  const accessToken = req.headers.authorization?.split(" ")[1];
  // Assuming the token is sent in the Authorization header as "Bearer <token>"
  if (!accessToken) {
    return res.status(401).json({ message: "Unauthorized: No token provided" });
  }
  // if token not valid, return 401
  if (accessToken) {
    jwt.verify(accessToken, process.env.TOKEN_SECRET, (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: "Unauthorized: Invalid token" });
      }
      req.user = decoded; // Attach the decoded user information to the request object
      next();
    });
  }
  // next();
};

module.exports = authMiddleware;
