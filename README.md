# Gemini AI Chatbot

A modern, responsive chatbot application built with React that integrates Google's Gemini AI API for intelligent conversations.

## Features

- 🤖 **AI-Powered Conversations** - Powered by Google Gemini 2.5 Flash
- 💬 **Real-time Chat Interface** - Smooth and responsive UI
- 📱 **Responsive Design** - Works seamlessly on desktop and mobile
- 🎨 **Modern UI** - Clean and intuitive user interface
- ⚡ **Fast Responses** - Optimized for quick AI responses
- 🔄 **Model Flexibility** - Easy to switch between different Gemini models

## Technologies Used

- **React** - Frontend framework
- **Google Gemini API** - AI language model
- **CSS3** - Styling and animations
- **JavaScript (ES6+)** - Core functionality

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- A Google Gemini API key

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/google.git
cd google
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Get Your Gemini API Key

1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Click **"Create API Key"**
4. Copy your API key

### 4. Configure Environment Variables

Create a `.env.local` file in the root directory of the project:

```bash
# Windows
echo REACT_APP_GEMINI_API_KEY=YOUR_API_KEY_HERE > .env.local

# macOS/Linux
echo "REACT_APP_GEMINI_API_KEY=YOUR_API_KEY_HERE" > .env.local
```

Or manually create the file with this content:

```env
REACT_APP_GEMINI_API_KEY=YOUR_API_KEY_HERE
```

**⚠️ Important:** Replace `YOUR_API_KEY_HERE` with your actual Gemini API key.

**Example:**
```env
REACT_APP_GEMINI_API_KEY=AIzaSyCx_iCbjoMGLhs8DUr4Y9dX4BHxNUwA-Dw
```

### 5. Run the Application

```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

## Project Structure

```
google/
├── public/
├── src/
│   ├── assets/          # Images and static assets
│   ├── Components/
│   │   ├── Main/        # Main chat interface
│   │   │   ├── Main.jsx
│   │   │   └── Main.css
│   │   └── SideBar/     # Sidebar component
│   │       ├── SideBar.jsx
│   │       └── SideBar.css
│   ├── Config/
│   │   └── Gemini.js    # Gemini API configuration
│   ├── Content/
│   │   └── Context.jsx  # React Context for state management
│   ├── App.js           # Main App component
│   ├── App.css
│   ├── index.js
│   └── index.css
├── .env.local           # Environment variables (API key)
├── package.json
└── README.md
```

## Checking Available Models

To see all available Gemini models and their capabilities, run this command in your terminal:

### Windows (Command Prompt/PowerShell)
```bash
curl "https://generativelanguage.googleapis.com/v1beta/models?key=YOUR_API_KEY_HERE"
```

### macOS/Linux
```bash
curl "https://generativelanguage.googleapis.com/v1beta/models?key=YOUR_API_KEY_HERE"
```

**Replace `YOUR_API_KEY_HERE` with your actual API key.**

**Example:**
```bash
curl "https://generativelanguage.googleapis.com/v1beta/models?key=AIzaSyCx_iCbjoMGLhs8DUr4Y9dX4BHxNUwA-Dw"
```

This will return a JSON response with all available models, their capabilities, and supported methods.

## Switching Models

### Step 1: Check Available Models

Run the curl command above to see available models that support `generateContent`.

### Step 2: Update the Model in Code

Open `src/Config/Gemini.js` and locate this line:

```javascript
`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`,
```

### Step 3: Replace the Model Name

Change `gemini-2.5-flash` to your desired model. For example:

```javascript
// For Gemini 2.5 Pro (more powerful)
`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-pro:generateContent?key=${API_KEY}`,

// For Gemini 3 Flash Preview (latest preview)
`https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent?key=${API_KEY}`,

// For Gemini Flash Latest (always latest)
`https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${API_KEY}`,
```

### Step 4: Restart the Development Server

```bash
# Stop the server (Ctrl+C)
npm start
```

## Available Gemini Models

Here are the recommended models that support `generateContent`:

| Model Name | Description | Input Limit | Output Limit | Best For |
|------------|-------------|-------------|--------------|----------|
| `gemini-2.5-flash` | Fast and efficient (Default) | 1M tokens | 65K tokens | General use |
| `gemini-2.5-pro` | Most powerful | 1M tokens | 65K tokens | Complex tasks |
| `gemini-3-flash-preview` | Latest preview | 1M tokens | 65K tokens | Cutting edge |
| `gemini-3-pro-preview` | Most advanced preview | 1M tokens | 65K tokens | Advanced tasks |
| `gemini-flash-latest` | Always latest Flash | 1M tokens | 65K tokens | Auto-updates |
| `gemini-pro-latest` | Always latest Pro | 1M tokens | 65K tokens | Auto-updates |
| `gemini-2.0-flash` | Stable older version | 1M tokens | 8K tokens | Production |

### Model Selection Guide

- **For Speed**: Use `gemini-2.5-flash` or `gemini-2.0-flash`
- **For Quality**: Use `gemini-2.5-pro` or `gemini-3-pro-preview`
- **For Latest Features**: Use `gemini-3-flash-preview`
- **For Stability**: Use `gemini-flash-latest` (auto-updates to stable)

## Usage

1. **Start a Conversation**: Type your message in the input box at the bottom
2. **Send Message**: Press Enter or click the send button
3. **View Response**: The AI will respond in real-time
4. **Continue Chat**: Keep the conversation going naturally

## Environment Variables

| Variable | Description | Required | Example |
|----------|-------------|----------|---------|
| `REACT_APP_GEMINI_API_KEY` | Your Google Gemini API key | Yes | `AIzaSyCx_iCbjoMGLhs8DUr4Y9dX4BHxNUwA-Dw` |

## API Rate Limits

- **Free tier**: 60 requests per minute
- **Token limits**: Vary by model (see table above)
- For production use, consider [Google Cloud AI Platform](https://cloud.google.com/ai-platform)

## Troubleshooting

### Error: "REACT_APP_GEMINI_API_KEY is not configured"
- Ensure `.env.local` file exists in the root directory
- Check that the API key is correctly set without quotes
- Restart the development server after adding the `.env.local` file

### Error: "models/gemini-pro is not found"
- Update the model name in `src/Config/Gemini.js` to `gemini-2.5-flash`
- Check available models using the curl command above

### Error: "Model not found for API version v1beta"
1. Run the curl command to check available models
2. Ensure the model supports `generateContent` method
3. Update your code with a valid model name

### API Key Not Working
- Verify your API key is valid at [Google AI Studio](https://makersuite.google.com/app/apikey)
- Check for any extra spaces in the `.env.local` file
- Ensure billing is enabled if required
- Try the curl command to test the API key

### Slow Responses
- Switch to a faster model like `gemini-2.5-flash`
- Check your internet connection
- Verify API rate limits haven't been exceeded

## Advanced Configuration

### Custom Model Configuration

You can modify `src/Config/Gemini.js` to add custom parameters:

```javascript
const response = await fetch(
  `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`,
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      contents: [
        {
          parts: [{ text: prompt }],
        },
      ],
      generationConfig: {
        temperature: 0.9,        // Creativity (0.0-2.0)
        topK: 64,                // Token selection
        topP: 0.95,              // Nucleus sampling
        maxOutputTokens: 8192,   // Response length
      },
    }),
  }
);
```

## Security Notes

⚠️ **Never commit your `.env.local` file to version control!**

The `.gitignore` file should include:
```
.env.local
.env
.env*.local
```

## Building for Production

```bash
npm run build
```

This creates an optimized production build in the `build/` folder.

## Deployment

The app can be deployed to:
- [Vercel](https://vercel.com)
- [Netlify](https://netlify.com)
- [GitHub Pages](https://pages.github.com)
- [Firebase Hosting](https://firebase.google.com/docs/hosting)

**Remember to set `REACT_APP_GEMINI_API_KEY` in your deployment platform's environment variables.**

### Deployment Example (Vercel)

1. Push your code to GitHub (without `.env.local`)
2. Import project in Vercel
3. Add environment variable:
   - Key: `REACT_APP_GEMINI_API_KEY`
   - Value: Your API key
4. Deploy

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Google Gemini API](https://ai.google.dev/)
- [React Documentation](https://react.dev/)
- [Google AI Studio](https://makersuite.google.com/)

## Support

For issues and questions:
- Open an issue on GitHub
- Check [Google AI Documentation](https://ai.google.dev/docs)
- Review [Gemini API Reference](https://ai.google.dev/api)

## Useful Links

- [Google AI Studio](https://makersuite.google.com/app/apikey) - Get API Key
- [Gemini API Docs](https://ai.google.dev/tutorials/rest_quickstart) - Documentation
- [Model List](https://ai.google.dev/models/gemini) - Available Models
- [Pricing](https://ai.google.dev/pricing) - API Pricing Information

---

**Made with ❤️ using React and Google Gemini AI**
