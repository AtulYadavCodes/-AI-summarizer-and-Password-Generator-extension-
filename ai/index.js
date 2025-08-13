import { GoogleGenAI } from "@google/genai";
import express from "express";
import cors from "cors";

import "dotenv/config";
const app=express();
app.use(cors());
app.use(express.text());
let key=process.env.GEMINI_API_KEY
app.post("/backend",(req,res)=>{
  console.log(key);
    const ai = new GoogleGenAI({apiKey:key});

    let contents=`Scan for malware/phishing, give severity.
                  Summarize in ≤30 words.
                  Explain content simply, in detail.
                  Give trust score 0–100.`
async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: contents+req.body,
  });
  console.log(req.body);
  res.send(response.text);
}

main();
})
app.get("/",(req,res)=>{
    res.send("Hello from the backend");
});
app.listen(4000,()=>
    console.log("Server is running on port 4000")
);

// The client gets the API key from the environment variable `GEMINI_API_KEY`.
