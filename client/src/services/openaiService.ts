export type AIResponse = {
    text: string;
    media?: string[];
  };
  
  export const fetchAIResponse = async (prompt: string, openaiApiKey: string): Promise<AIResponse> => {
    try {

      const mlResponse = await fetch('https://fastai-webapi.azurewebsites.net/ask', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: prompt }),
      });
  
      const mlData = await mlResponse.json();
      const text = Array.isArray(mlData.results) ? mlData.results[0] : 'No results returned';
  

      const dalleResponse = await fetch('https://api.openai.com/v1/images/generations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${openaiApiKey}`,
        },
        body: JSON.stringify({
          prompt,
          n: 1,
          size: '512x512',
        }),
      });
  
      const dalleData = await dalleResponse.json();
      const imageUrl = dalleData.data?.[0]?.url;
  
      return {
        text,
        media: imageUrl ? [imageUrl] : [],
      };
    } catch (err) {
      console.error('AI API error:', err);
      return {
        text: 'Failed to fetch AI response.',
      };
    }
  };
  