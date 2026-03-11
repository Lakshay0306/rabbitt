import express from "express";
import multer from "multer";
import { parseCSV } from "../services/csvParser.js";
import { generateSummary } from "../services/aiService.js";
import { sendEmail } from "../services/emailService.js";
const router = express.Router();

const storage = multer.memoryStorage();

const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype === "text/csv" ||
      file.originalname.endsWith(".csv") ||
      file.originalname.endsWith(".xlsx")
    ) {
      cb(null, true);
    } else {
      cb(new Error("Only CSV or XLSX files allowed"));
    }
  }
});

router.post("/upload", upload.single("file"), async (req, res) => {

  try {

    const email = req.body.email;

    if (!req.file) {
      return res.status(400).json({ message: "File not uploaded" });
    }

    const analysis = await parseCSV(req.file.buffer);

    const summary = await generateSummary(analysis);

    if (email) {
      await sendEmail(email, summary);
    }

    res.json({
      message: "AI summary generated and email sent",
      summary: summary
    });

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }

});


export default router;