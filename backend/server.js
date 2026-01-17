/*import connectDB from "./config/testdb.js";
import User from "./models/user.js";



await connectDB();
const createTestUser = async () => {
  try {
    const testUser = User.create({
      name: "Riri",
      email: "riri@example.com",
      password: "riri"
    });
    
    console.log("Test user created successfully");
  } catch (error) {
    console.error("Error creating test user:", error);
  }
};
createTestUser();*/
import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/testdb.js";
import todoRoutes from "./routes/toDoRoute.js";
import cors from "cors";

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/todos", todoRoutes);

app.listen(5000, () => {
  console.log("🚀 Server running on port 5000");
});



