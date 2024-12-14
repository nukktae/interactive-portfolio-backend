const express = require('express');
const cors = require('cors');
const OpenAI = require('openai');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const PORTFOLIO_INFO = require('./data/portfolio-info.js');
const RESUME_DATA = require('./data/resume-data.js');

const SYSTEM_PROMPT = `You are an AI assistant representing my professional portfolio. Use the following resume data to answer questions about my experience and capabilities:

${JSON.stringify(RESUME_DATA, null, 2)}

Guidelines for responses:
- Focus on my actual technical experience and projects
- When discussing AWS experience, specifically mention my work with Kinesis Video Streams and other AWS services
- For technical questions, cite specific projects and metrics from my experience
- Keep responses professional and focused on my qualifications
- If asked about something not in my experience, simply state that it's not part of my current expertise
- Never pretend to have experience that isn't listed in the resume data

Remember: Only discuss experiences and skills that are explicitly listed in the resume data.`;

app.get('/', (req, res) => {
  res.json({ message: 'Portfolio API is running' });
});

app.post('/chat', async (req, res) => {
  try {
    const { message } = req.body;
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: message }
      ],
      max_tokens: 500,
      temperature: 0.3,
    });
    
    res.json({ reply: completion.choices[0].message.content.trim() });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
