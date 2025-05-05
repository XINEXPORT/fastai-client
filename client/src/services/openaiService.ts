
export type AIResponse = {
    text: string;
    media?: string[];
  };
  
  export const fetchOpenAI = async (prompt: string, apiKey: string): Promise<AIResponse> => {
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
  
      return {
        text,
        media: imageUrl ? [imageUrl] : [],
      };
    } catch (err) {
      console.error('OpenAI API error:', err);
      return {
        text: 'Failed to fetch from OpenAI.',
      };
    }
  };
  