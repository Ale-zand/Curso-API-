import mongoose from "mongoose";

mongoose.connect("mongodb+srv://alezand:1234@alurajsexpress.keq0e1f.mongodb.net/alura-nodeJS-express");

let db = mongoose.connection;

export default db;
