// ChatWindow.tsx
import { useState } from 'react';
import { Container, Input, Message, ChatForm, MessageWrapper, Button } from './styled';
import { fetchOpenAI, AIResponse } from '../../services/openaiService';

const ChatWindow = () => {
  const [userInput, setUserInput] = useState('');
  const [aiResponse, setAiResponse] = useState<AIResponse | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

    if (!apiKey) {
      setAiResponse({ text: 'API key is missing. Please check your environment config.' });
      return;
    }

    setLoading(true);
    const response = await fetchOpenAI(userInput, apiKey);
    setAiResponse(response);
    setLoading(false);
    setUserInput('');
  };

  return (
    <Container>
      <MessageWrapper>
        {loading ? (
          <Message>Thinking...</Message>
        ) : aiResponse ? (
          <>
            {aiResponse.media?.length ? (
              <img
                src={aiResponse.media[0]}
                alt="AI generated"
                style={{
                  width: '350px',
                  height: '350px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                  boxShadow: '0 0 10px rgba(255, 255, 255, 0.2)',
                }}
              />
            ) : null}
            <Message style={{ maxWidth: '600px', textAlign: 'left' }}>{aiResponse.text}</Message>
          </>
        ) : (
          <Message>Try asking for advice!</Message>
        )}
      </MessageWrapper>

      <ChatForm onSubmit={handleSubmit}>
        <Input
          value={userInput}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
            setUserInput(e.target.value);
            const target = e.target;
            requestAnimationFrame(() => {
              target.style.height = 'auto';
              target.style.height = `${target.scrollHeight}px`;
            });
          }}
          placeholder="Ask something..."
          disabled={loading}
        />
      <Button type="submit" disabled={loading}>Send</Button>
      </ChatForm>
    </Container>
  );
};

export default ChatWindow;
