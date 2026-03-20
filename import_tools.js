import { createClient } from '@supabase/supabase-js';
import { GoogleGenAI, Type } from '@google/genai';
import dotenv from 'dotenv';
dotenv.config();

// --- CẤU HÌNH ---
// Hãy đảm bảo bạn đã thêm các biến môi trường này vào file .env hoặc Secrets
const SUPABASE_URL = process.env.VITE_SUPABASE_URL || '';
const SUPABASE_ANON_KEY = process.env.VITE_SUPABASE_ANON_KEY || '';
const GEMINI_API_KEY = process.env.GEMINI_API_KEY || '';

if (!SUPABASE_URL || !SUPABASE_ANON_KEY || !GEMINI_API_KEY) {
  console.error('Lỗi: Thiếu SUPABASE_URL, SUPABASE_ANON_KEY hoặc GEMINI_API_KEY trong biến môi trường.');
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

// --- DANH SÁCH TOOLS ---
// Thay đổi danh sách này thành 100 tools bạn muốn thêm
const toolsToImport = [
  { name: 'ChatGPT', domain: 'chatgpt.com', category: 'writing' },
  { name: 'Claude', domain: 'anthropic.com', category: 'writing' },
  { name: 'Gemini', domain: 'gemini.google.com', category: 'writing' },
  { name: 'Perplexity', domain: 'perplexity.ai', category: 'writing' },
  { name: 'Jasper', domain: 'jasper.ai', category: 'writing' },
  { name: 'Copy.ai', domain: 'copy.ai', category: 'writing' },
  { name: 'Writesonic', domain: 'writesonic.com', category: 'writing' },
  { name: 'Rytr', domain: 'rytr.me', category: 'writing' },
  { name: 'Grammarly', domain: 'grammarly.com', category: 'writing' },
  { name: 'Quillbot', domain: 'quillbot.com', category: 'writing' },
  { name: 'Midjourney', domain: 'midjourney.com', category: 'image' },
  { name: 'DALL-E 3', domain: 'openai.com/dall-e-3', category: 'image' },
  { name: 'Stable Diffusion', domain: 'stability.ai', category: 'image' },
  { name: 'Leonardo.ai', domain: 'leonardo.ai', category: 'image' },
  { name: 'Adobe Firefly', domain: 'firefly.adobe.com', category: 'image' },
  { name: 'Canva Magic Studio', domain: 'canva.com', category: 'image' },
  { name: 'Runway', domain: 'runwayml.com', category: 'video' },
  { name: 'Synthesia', domain: 'synthesia.io', category: 'video' },
  { name: 'HeyGen', domain: 'heygen.com', category: 'video' },
  { name: 'Pika', domain: 'pika.art', category: 'video' },
  { name: 'Sora', domain: 'openai.com/sora', category: 'video' },
  { name: 'InVideo', domain: 'invideo.io', category: 'video' },
  { name: 'CapCut', domain: 'capcut.com', category: 'video' },
  { name: 'Descript', domain: 'descript.com', category: 'video' },
  { name: 'ElevenLabs', domain: 'elevenlabs.io', category: 'audio' },
  { name: 'Suno', domain: 'suno.com', category: 'audio' },
  { name: 'Udio', domain: 'udio.com', category: 'audio' },
  { name: 'Murf.ai', domain: 'murf.ai', category: 'audio' },
  { name: 'Lovo', domain: 'lovo.ai', category: 'audio' },
  { name: 'Play.ht', domain: 'play.ht', category: 'audio' },
  { name: 'GitHub Copilot', domain: 'github.com/features/copilot', category: 'coding' },
  { name: 'Cursor', domain: 'cursor.com', category: 'coding' },
  { name: 'Tabnine', domain: 'tabnine.com', category: 'coding' },
  { name: 'Codeium', domain: 'codeium.com', category: 'coding' },
  { name: 'Amazon Q', domain: 'aws.amazon.com/q', category: 'coding' },
  { name: 'Replit Ghostwriter', domain: 'replit.com', category: 'coding' },
  { name: 'Notion AI', domain: 'notion.so', category: 'productivity' },
  { name: 'Taskade', domain: 'taskade.com', category: 'productivity' },
  { name: 'Mem', domain: 'mem.ai', category: 'productivity' },
  { name: 'Otter.ai', domain: 'otter.ai', category: 'productivity' },
  { name: 'Fireflies.ai', domain: 'fireflies.ai', category: 'productivity' },
  { name: 'Tome', domain: 'tome.app', category: 'productivity' },
  { name: 'Gamma', domain: 'gamma.app', category: 'productivity' },
  { name: 'Beautiful.ai', domain: 'beautiful.ai', category: 'productivity' },
  { name: 'ChatPDF', domain: 'chatpdf.com', category: 'productivity' },
  { name: 'Monica', domain: 'monica.im', category: 'productivity' },
  { name: 'Harpa.ai', domain: 'harpa.ai', category: 'productivity' },
  { name: 'Zapier Central', domain: 'zapier.com', category: 'productivity' },
  { name: 'Make', domain: 'make.com', category: 'productivity' },
  { name: 'Phind', domain: 'phind.com', category: 'coding' },
  { name: 'You.com', domain: 'you.com', category: 'writing' },
  { name: 'Poe', domain: 'poe.com', category: 'writing' },
  { name: 'Hugging Face', domain: 'huggingface.co', category: 'coding' },
  { name: 'Mistral', domain: 'mistral.ai', category: 'writing' },
  { name: 'Cohere', domain: 'cohere.com', category: 'writing' },
  { name: 'AI21 Labs', domain: 'ai21.com', category: 'writing' },
  { name: 'Scale AI', domain: 'scale.com', category: 'productivity' },
  { name: 'Glean', domain: 'glean.com', category: 'productivity' },
  { name: 'Harvey', domain: 'harvey.ai', category: 'productivity' },
  { name: 'Casetext', domain: 'casetext.com', category: 'productivity' },
  { name: 'Krea', domain: 'krea.ai', category: 'image' },
  { name: 'Magnific', domain: 'magnific.ai', category: 'image' },
  { name: 'Ideogram', domain: 'ideogram.ai', category: 'image' },
  { name: 'Luma Dream Machine', domain: 'lumalabs.ai', category: 'video' },
  { name: 'Kling AI', domain: 'klingai.com', category: 'video' },
  { name: 'Hailuo AI', domain: 'hailuo.ai', category: 'video' },
  { name: 'Veed.io', domain: 'veed.io', category: 'video' },
  { name: 'Opus Clip', domain: 'opus.pro', category: 'video' },
  { name: 'Munch', domain: 'getmunch.com', category: 'video' },
  { name: 'Suno Bark', domain: 'suno.com', category: 'audio' },
  { name: 'VoiceLabs', domain: 'voicelabs.co', category: 'audio' },
  { name: 'Resemble AI', domain: 'resemble.ai', category: 'audio' },
  { name: 'WellSaid Labs', domain: 'wellsaidlabs.com', category: 'audio' },
  { name: 'V0 by Vercel', domain: 'v0.dev', category: 'coding' },
  { name: 'Bolt.new', domain: 'bolt.new', category: 'coding' },
  { name: 'Lovable', domain: 'lovable.dev', category: 'coding' },
  { name: 'Devin', domain: 'cognition.ai', category: 'coding' },
  { name: 'Superhuman', domain: 'superhuman.com', category: 'productivity' },
  { name: 'Arc Browser', domain: 'arc.net', category: 'productivity' },
  { name: 'Perplexity Pages', domain: 'perplexity.ai', category: 'writing' },
  { name: 'Grok', domain: 'x.ai', category: 'writing' },
  { name: 'Llama 3', domain: 'meta.com/llama', category: 'writing' },
  { name: 'Qwen', domain: 'qwenlm.github.io', category: 'writing' },
  { name: 'DeepSeek', domain: 'deepseek.com', category: 'coding' },
  { name: 'Blackbox AI', domain: 'blackbox.ai', category: 'coding' },
  { name: 'Sourcegraph Cody', domain: 'sourcegraph.com/cody', category: 'coding' },
  { name: 'Bito', domain: 'bito.ai', category: 'coding' },
  { name: 'Mutable AI', domain: 'mutable.ai', category: 'coding' },
  { name: 'Mintlify', domain: 'mintlify.com', category: 'productivity' },
  { name: 'Guidde', domain: 'guidde.com', category: 'productivity' },
  { name: 'Scribe', domain: 'scribehow.com', category: 'productivity' },
  { name: 'Tango', domain: 'tango.us', category: 'productivity' },
  { name: 'Loom AI', domain: 'loom.com', category: 'video' },
  { name: 'Rewind', domain: 'rewind.ai', category: 'productivity' },
  { name: 'Limitless', domain: 'limitless.ai', category: 'productivity' },
  { name: 'Rabbit R1', domain: 'rabbit.tech', category: 'productivity' },
  { name: 'Humane Ai Pin', domain: 'hu.ma.ne', category: 'productivity' },
  { name: 'Character.ai', domain: 'character.ai', category: 'writing' },
  { name: 'Replika', domain: 'replika.com', category: 'writing' },
  { name: 'Pi', domain: 'pi.ai', category: 'writing' }
];

async function generateToolData(tool) {
  console.log(`Đang tạo dữ liệu cho: ${tool.name}...`);
  
  const prompt = `
    Tạo dữ liệu JSON chi tiết cho công cụ AI: ${tool.name} (Domain: ${tool.domain}, Category: ${tool.category}).
    Yêu cầu:
    - rating: từ 4.0 đến 5.0
    - reviewCount: từ 100 đến 10000
    - pricing: { en: "...", vi: "..." } (ví dụ: Freemium / Miễn phí cơ bản)
    - description: { en: "...", vi: "..." } (Mô tả ngắn gọn, hấp dẫn)
    - features: { en: ["...", "...", "..."], vi: ["...", "...", "..."] } (3-4 tính năng chính)
    - pros: { en: ["...", "..."], vi: ["...", "..."] } (2-3 ưu điểm)
    - cons: { en: ["...", "..."], vi: ["...", "..."] } (1-2 nhược điểm)
    - useCases: { en: [{ title: "...", examples: ["..."] }], vi: [{ title: "...", examples: ["..."] }] } (2 use cases)
    - howToUse: { en: ["...", "...", "..."], vi: ["...", "...", "..."] } (3 bước sử dụng)
    - expertTip: { en: "...", vi: "..." } (1 lời khuyên từ chuyên gia)
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3.1-pro-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            rating: { type: Type.NUMBER },
            reviewCount: { type: Type.INTEGER },
            pricing: { type: Type.OBJECT, properties: { en: { type: Type.STRING }, vi: { type: Type.STRING } } },
            description: { type: Type.OBJECT, properties: { en: { type: Type.STRING }, vi: { type: Type.STRING } } },
            features: { type: Type.OBJECT, properties: { en: { type: Type.ARRAY, items: { type: Type.STRING } }, vi: { type: Type.ARRAY, items: { type: Type.STRING } } } },
            pros: { type: Type.OBJECT, properties: { en: { type: Type.ARRAY, items: { type: Type.STRING } }, vi: { type: Type.ARRAY, items: { type: Type.STRING } } } },
            cons: { type: Type.OBJECT, properties: { en: { type: Type.ARRAY, items: { type: Type.STRING } }, vi: { type: Type.ARRAY, items: { type: Type.STRING } } } },
            useCases: { 
              type: Type.OBJECT, 
              properties: { 
                en: { type: Type.ARRAY, items: { type: Type.OBJECT, properties: { title: { type: Type.STRING }, examples: { type: Type.ARRAY, items: { type: Type.STRING } } } } },
                vi: { type: Type.ARRAY, items: { type: Type.OBJECT, properties: { title: { type: Type.STRING }, examples: { type: Type.ARRAY, items: { type: Type.STRING } } } } }
              } 
            },
            howToUse: { type: Type.OBJECT, properties: { en: { type: Type.ARRAY, items: { type: Type.STRING } }, vi: { type: Type.ARRAY, items: { type: Type.STRING } } } },
            expertTip: { type: Type.OBJECT, properties: { en: { type: Type.STRING }, vi: { type: Type.STRING } } }
          },
          required: ["rating", "reviewCount", "pricing", "description", "features", "pros", "cons", "useCases", "howToUse"]
        }
      }
    });

    const generatedData = JSON.parse(response.text);
    
    return {
      id: tool.name.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      name: tool.name,
      domain: tool.domain,
      category: tool.category,
      logo: `https://www.google.com/s2/favicons?domain=${tool.domain}&sz=128`,
      screenshots: [
        `https://picsum.photos/seed/${tool.name.replace(/\s/g, '')}1/800/450`,
        `https://picsum.photos/seed/${tool.name.replace(/\s/g, '')}2/800/450`
      ],
      affiliateUrl: `https://${tool.domain}`,
      ...generatedData
    };
  } catch (error) {
    console.error(`Lỗi khi tạo dữ liệu cho ${tool.name}:`, error);
    return null;
  }
}

async function main() {
  console.log('Bắt đầu quá trình tự động hóa...');
  
  const finalData = [];
  
  for (const tool of toolsToImport) {
    const data = await generateToolData(tool);
    if (data) {
      finalData.push(data);
    }
  }

  if (finalData.length > 0) {
    console.log(`Đang chèn ${finalData.length} tools vào Supabase...`);
    const { data, error } = await supabase
      .from('tools')
      .upsert(finalData, { onConflict: 'id' });

    if (error) {
      console.error('Lỗi khi chèn vào Supabase:', error);
    } else {
      console.log('Thành công! Đã thêm dữ liệu vào Supabase.');
    }
  } else {
    console.log('Không có dữ liệu nào được tạo.');
  }
}

main();
