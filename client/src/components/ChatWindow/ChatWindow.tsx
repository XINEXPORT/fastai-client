import { useState } from 'react';
import { Container, Input, Message, ChatForm, MessageWrapper, Button, ResponsiveImage } from './styled';
import { fetchAIResponse, AIResponse } from '../../services/openaiService';

const ChatWindow = () => {
  const [userInput, setUserInput] = useState('');
  const [aiResponse, setAiResponse] = useState<AIResponse | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
    if (!apiKey) {
      setAiResponse({ text: 'OpenAI API key is missing. Please check your environment config.' });
      return;
    }

    setLoading(true);
    const response = await fetchAIResponse(userInput, apiKey);
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
              
              <ResponsiveImage
                src={aiResponse.media[0]}
                alt="AI generated"
              />
            ) : null}

            <Message style={{ }}>
              {aiResponse.text}
            </Message>
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
