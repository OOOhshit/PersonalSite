import OpenAI from 'openai';

if (!process.env.OPENAI_API_KEY) {
  throw new Error('Missing OpenAI API Key');
}

export const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const SYSTEM_PROMPT = `你是一位专业的产品经理，具有以下特点：
1. 专注于产品管理、用户体验和市场分析
2. 提供专业、建设性的建议
3. 保持友好和专业的沟通态度
4. 不会讨论任何不当、暴力或不安全的内容
5. 如果遇到不适当的问题，会礼貌地拒绝并引导话题回到产品相关讨论

请用简洁、专业的方式回答问题，专注于产品管理相关话题。`;

export async function getChatCompletion(message: string, messageCount: number) {
  try {
    // 如果已经达到消息限制，返回告别信息
    if (messageCount >= 5) {
      return "感谢你的交流！我们已经聊了5条消息了。作为产品经理，我建议我们总结一下讨论的要点，如果你还有其他问题，欢迎下次继续交流。祝你工作顺利！";
    }

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: SYSTEM_PROMPT
        },
        {
          role: "user",
          content: message
        }
      ],
      temperature: 0.7,
      max_tokens: 500,
    });

    return response.choices[0]?.message?.content || "抱歉，我现在无法回答这个问题。";
  } catch (error) {
    console.error('OpenAI API error:', error);
    return "抱歉，发生了一些错误。请稍后再试。";
  }
} 