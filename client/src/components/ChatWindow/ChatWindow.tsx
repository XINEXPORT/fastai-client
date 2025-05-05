import { useState } from 'react';
import { Container, Input, Message, ChatForm, MessageWrapper } from './styled';

type AIResponse = {
  text: string;
  media?: string[];
};

const ChatWindow = () => {
  const [userInput, setUserInput] = useState('');
  const [aiResponse, setAiResponse] = useState<AIResponse | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchOpenAI = async (prompt: string) => {
    const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

    if (!apiKey) {
      setAiResponse({
        text: 'API key is missing. Please check your environment config.',
      });
      return;
    }

    setLoading(true);

    try {
      const chatRes = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: 'gpt-4',
          messages: [{ role: 'user', content: prompt }],
          temperature: 0.7,
        }),
      });

      const chatData = await chatRes.json();
      const text = chatData.choices?.[0]?.message?.content || 'No text found';

      const dalleRes = await fetch('https://api.openai.com/v1/images/generations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          prompt,
          n: 1,
          size: '512x512',
        }),
      });

      const dalleData = await dalleRes.json();
      const imageUrl = dalleData.data?.[0]?.url;

      setAiResponse({
        text,
        media: imageUrl ? [imageUrl] : [],
      });
    } catch (err) {
      console.error('❌ OpenAI API error:', err);
      setAiResponse({
        text: 'Failed to fetch from OpenAI.',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    fetchOpenAI(userInput);
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
            <Message style={{ maxWidth: '600px', textAlign: 'left' }}>
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
      </ChatForm>
    </Container>
  );
};

export default ChatWindow;
