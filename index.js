const express = require('express');
const cors = require('cors');
const OpenAI = require('openai');
require('dotenv').config();

const app = express();

const corsOptions = {
  origin: [
    'http://localhost:3000',
    'http://localhost:5001',
    'https://www.anubilegdemberel.com'
  ],
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
  credentials: false,
  optionsSuccessStatus: 204
};

// Apply CORS middleware first
app.use(cors(corsOptions));

// Then add preflight handler
app.options('*', cors(corsOptions));

app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const PORTFOLIO_INFO = require('./data/portfolio-info.js');
const RESUME_DATA = require('./data/resume-data.js');

const SYSTEM_PROMPT = `You are an AI assistant representing my professional portfolio. Use the following resume data and project information to answer questions about my experience and capabilities:

${JSON.stringify({
  ...RESUME_DATA,
  projects: [{
    title: "Rootin (IoT-based plant care system)",
    description: "A sophisticated plant care automation system combining IoT hardware with a Flutter-powered iOS app for intelligent plant monitoring and maintenance.",
    detailedDescription: "An innovative IoT solution that transforms plant care through intelligent monitoring and automated maintenance. The system combines custom-built hardware sensors with an intuitive Flutter iOS interface, leveraging AI for plant identification and health diagnostics.",
    technologies: [
      "Flutter & Dart",
      "Firebase Realtime DB",
      "TensorFlow Lite",
      "REST APIs",
      "WebSockets",
      "Material Design",
      "Custom Animations"
    ],
    features: [
      "AI-powered plant identification",
      "Automated watering schedule creation",
      "Real-time plant health monitoring",
      "Customizable care reminders",
      "Detailed plant care history",
      "Offline mode functionality",
      "Multi-plant management dashboard",
      "Environmental condition tracking"
    ],
    metrics: [
      "User Satisfaction: 90%",
      "User Engagement: +40%",
      "Error Rate: -30%",
      "UI Response Time: -25%",
      "Widget Reusability: 20+ components"
    ],
    highlights: [
      "Led the complete UI/UX redesign of the plant care application",
      "Developed comprehensive design system with reusable components",
      "Implemented offline-first architecture for seamless user experience",
      "Integrated real-time data from soil moisture sensors into the app",
      "Created intuitive onboarding flow reducing user drop-off"
    ],
    roles: [
      {
        area: "UI/UX Design",
        percentage: 45,
        description: "User research, wireframing, and interaction design"
      },
      {
        area: "Frontend Development",
        percentage: 100,
        description: "Complete implementation of Flutter mobile app"
      },
      {
        area: "System Architecture",
        percentage: 70,
        description: "IoT system design and integration"
      }
    ]
  }]
}, null, 2)}

Guidelines for responses:
- Structure all responses with clear headers and sections
- Format the response in the following way:
  1. Main Topic Header (##)
  2. Brief Overview
  3. Key Details (with subheaders ###)
  4. Metrics and Achievements (as bullet points)
  5. Technical Specifications (as numbered lists)
  
- Use markdown formatting:
  * Headers: ## for main sections, ### for subsections
  * Lists: Use * for features and achievements
  * Numbers: Use 1. 2. 3. for steps or technical specifications
  * Metrics: Present in table format
  * Code: Use single backticks for inline code, triple for code blocks
  
- When discussing the Rootin project, include:
  * Project Overview
  * Technical Stack
  * Key Features
  * Metrics & Impact
  * Role & Responsibilities

- Keep responses professional and evidence-based
- Include specific metrics and data points
- Never include information not listed in the resume data

Remember: Rootin (formerly IoT-based plant care system) is a plant care automation project combining Flutter mobile development with IoT hardware integration.`;

app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`, {
    headers: req.headers,
    body: req.body
  });
  next();
});

app.use((err, req, res, next) => {
  console.error('Detailed error:', {
    message: err.message,
    stack: err.stack,
    headers: req.headers
  });
  
  res.status(500).json({ 
    error: err.message || 'Internal Server Error',
    details: process.env.NODE_ENV === 'development' ? err.stack : undefined
  });
});

app.get('/', (req, res) => {
  res.json({ message: 'Portfolio API is running' });
});

app.post('/chat', async (req, res) => {
  try {
    const { message } = req.body;
    
    // Enhance the system prompt to enforce structured responses
    const structuredPrompt = `
As a hiring-focused AI assistant, provide concise responses about Anu's:
- Technical achievements and metrics
- Project impact and results
- Problem-solving approach
- Development expertise

Format responses with:
## Main Topic
* Key achievement with metrics
* Technical implementation
* Business impact

Keep responses focused on hiring-relevant information.
Remember: Highlight quantifiable results and technical depth.
`;

    const messages = [
      { role: "system", content: structuredPrompt },
      { role: "user", content: message }
    ];

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages,
      max_tokens: 150,
      temperature: 0.3,
      presence_penalty: 0.1,
      frequency_penalty: 0.1,
    });

    let reply = completion.choices[0].message.content.trim();
    if (reply.length > 200) {
      reply = reply.substring(0, 197) + '...';
    }

    res.json({ reply });
  } catch (error) {
    console.error('Chat error:', error);
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

console.log('\n=== SERVER STARTUP CHECKS ===');
console.log('1. RESUME_DATA loaded:', {
  isLoaded: !!RESUME_DATA,
  hasExperience: !!RESUME_DATA?.experience,
  firstProjectHighlight: RESUME_DATA?.experience?.[0]?.highlights?.[0]
});
console.log('2. System Prompt contains project info:', {
  length: SYSTEM_PROMPT.length,
  containsRootin: SYSTEM_PROMPT.includes('Rootin'),
  containsIoT: SYSTEM_PROMPT.includes('IoT-based plant care system')
});
console.log('=== END STARTUP CHECKS ===\n');
