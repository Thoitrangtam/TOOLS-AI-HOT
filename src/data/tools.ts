export interface AITool {
  id: string;
  name: string;
  domain: string;
  logo: string;
  screenshots: string[];
  category: 'video' | 'image' | 'writing' | 'coding' | 'audio' | 'productivity';
  rating: number;
  reviewCount: number;
  createdAt: string;
  pricing: {
    en: string;
    vi: string;
  };
  description: {
    en: string;
    vi: string;
  };
  features: {
    en: string[];
    vi: string[];
  };
  pros: {
    en: string[];
    vi: string[];
  };
  cons: {
    en: string[];
    vi: string[];
  };
  useCases: {
    en: { title: string; examples: string[] }[];
    vi: { title: string; examples: string[] }[];
  };
  affiliateUrl: string;
  howToUse: {
    en: string[];
    vi: string[];
  };
  expertTip?: {
    en: string;
    vi: string;
  };
}

const getLogo = (domain: string) => `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;

export const TOOLS: AITool[] = [
  // --- WRITING ---
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    domain: 'openai.com',
    logo: getLogo('openai.com'),
    screenshots: ['https://picsum.photos/seed/chatgpt1/800/450', 'https://picsum.photos/seed/chatgpt2/800/450'],
    category: 'writing',
    rating: 4.9,
    reviewCount: 25000,
    createdAt: '2026-01-01',
    pricing: { en: 'Free / $20/mo', vi: 'Miễn phí / 500.000đ/tháng' },
    description: {
      en: 'ChatGPT, developed by OpenAI, is a revolutionary large language model that has redefined human-AI interaction. It leverages advanced transformer architectures to understand and generate human-like text across an almost infinite range of topics. From creative writing and technical documentation to complex coding and strategic planning, ChatGPT serves as a versatile intellectual partner. The latest versions, including GPT-4o, integrate multimodal capabilities, allowing it to "see," "hear," and "speak" in real-time, making it an indispensable tool for students, developers, and business leaders alike. Its ability to maintain context over long conversations and follow intricate instructions sets it apart as the gold standard in the generative AI space. By automating repetitive tasks and providing creative sparks, it significantly accelerates productivity and innovation in the digital age.',
      vi: 'ChatGPT, do OpenAI phát triển, là một mô hình ngôn ngữ lớn mang tính cách mạng đã định nghĩa lại sự tương tác giữa con người và AI. Nó tận dụng các kiến trúc transformer tiên tiến để hiểu và tạo ra văn bản giống con người trên một phạm vi chủ đề gần như vô hạn. Từ viết lách sáng tạo và tài liệu kỹ thuật đến lập trình phức tạp và lập kế hoạch chiến lược, ChatGPT đóng vai trò như một đối tác trí tuệ đa năng. Các phiên bản mới nhất, bao gồm GPT-4o, tích hợp khả năng đa phương thức, cho phép nó "nhìn", "nghe" và "nói" trong thời gian thực, khiến nó trở thành công cụ không thể thiếu cho sinh viên, nhà phát triển và các nhà lãnh đạo doanh nghiệp. Khả năng duy trì ngữ cảnh trong các cuộc hội thoại dài và tuân theo các hướng dẫn phức tạp giúp nó trở thành tiêu chuẩn vàng trong không gian AI tạo nảy. Bằng cách tự động hóa các tác vụ lặp đi lặp lại và cung cấp các tia sáng sáng tạo, nó thúc đẩy đáng kể năng suất và sự đổi mới trong kỷ nguyên kỹ thuật số.'
    },
    features: {
      en: ['GPT-4o Multimodal Intelligence', 'DALL-E 3 Image Generation', 'Advanced Data Analysis & Visualization', 'Custom GPTs for Specialized Tasks', 'Real-time Web Browsing'],
      vi: ['Trí tuệ đa phương thức GPT-4o', 'Tạo ảnh DALL-E 3', 'Phân tích & Trực quan hóa dữ liệu nâng cao', 'GPT tùy chỉnh cho các tác vụ chuyên biệt', 'Duyệt web thời gian thực']
    },
    pros: { 
      en: [
        'Unmatched versatility across writing, coding, and analysis', 
        'Extremely low barrier to entry with an intuitive chat interface', 
        'Massive ecosystem of custom GPTs and third-party integrations',
        'Continuous updates and rapid deployment of cutting-edge features',
        'Excellent mobile app with seamless voice interaction'
      ], 
      vi: [
        'Khả năng đa năng vô đối trong viết lách, lập trình và phân tích', 
        'Rào cản gia nhập cực thấp với giao diện chat trực quan', 
        'Hệ sinh thái khổng lồ gồm các GPT tùy chỉnh và tích hợp bên thứ ba',
        'Cập nhật liên tục và triển khai nhanh chóng các tính năng tiên tiến',
        'Ứng dụng di động xuất sắc với tương tác giọng nói mượt mà'
      ] 
    },
    cons: { 
      en: [
        'Occasional factual inaccuracies (hallucinations) require verification', 
        'Performance can fluctuate during periods of extreme global demand', 
        'Privacy and data usage policies may be a concern for sensitive info',
        'Limited knowledge cutoff for the free version models',
        'Can sometimes produce overly verbose or repetitive outputs'
      ], 
      vi: [
        'Đôi khi có những sai sót về sự thật (ảo giác) cần được xác minh', 
        'Hiệu suất có thể biến động trong thời gian nhu cầu toàn cầu cực cao', 
        'Chính sách quyền riêng tư và sử dụng dữ liệu có thể là mối lo ngại',
        'Giới hạn kiến thức cho các mô hình phiên bản miễn phí',
        'Đôi khi có thể tạo ra kết quả quá dài dòng hoặc lặp lại'
      ] 
    },
    useCases: {
      en: [
        { title: 'Academic & Technical Writing', examples: ['Drafting research paper outlines and abstracts', 'Explaining complex scientific concepts simply'] },
        { title: 'Software Development', examples: ['Debugging complex code snippets in multiple languages', 'Generating boilerplate code and unit tests'] }
      ],
      vi: [
        { title: 'Viết học thuật & Kỹ thuật', examples: ['Soạn thảo đề cương và tóm tắt bài báo nghiên cứu', 'Giải thích các khái niệm khoa học phức tạp một cách đơn giản'] },
        { title: 'Phát triển phần mềm', examples: ['Gỡ lỗi các đoạn mã phức tạp trong nhiều ngôn ngữ', 'Tạo mã mẫu và các bài kiểm tra đơn vị (unit tests)'] }
      ]
    },
    affiliateUrl: 'https://chat.openai.com',
    howToUse: {
      en: [
        'Sign up for an OpenAI account and navigate to the chat interface.',
        'Provide a clear, detailed prompt describing your goal or question.',
        'Iterate on the response by asking follow-up questions or requesting refinements.',
        'Utilize specialized tools like Data Analysis or DALL-E by mentioning them in your prompt.'
      ],
      vi: [
        'Đăng ký tài khoản OpenAI và truy cập vào giao diện chat.',
        'Cung cấp một câu lệnh (prompt) rõ ràng, chi tiết mô tả mục tiêu hoặc câu hỏi của bạn.',
        'Tinh chỉnh phản hồi bằng cách đặt các câu hỏi tiếp theo hoặc yêu cầu sửa đổi.',
        'Sử dụng các công cụ chuyên biệt như Phân tích dữ liệu hoặc DALL-E bằng cách đề cập đến chúng.'
      ]
    },
    expertTip: {
      en: 'Use the "Custom Instructions" feature to define your persona and preferred output style once, so you don\'t have to repeat it in every prompt.',
      vi: 'Sử dụng tính năng "Hướng dẫn tùy chỉnh" để xác định vai trò và phong cách đầu ra mong muốn một lần, để bạn không phải lặp lại trong mỗi câu lệnh.'
    }
  },
  {
    id: 'gemini',
    name: 'Google Gemini',
    domain: 'google.com',
    logo: getLogo('google.com'),
    screenshots: ['https://picsum.photos/seed/gemini1/800/450', 'https://picsum.photos/seed/gemini2/800/450'],
    category: 'writing',
    rating: 4.8,
    reviewCount: 18000,
    createdAt: '2026-03-01',
    pricing: { en: 'Free / $20/mo', vi: 'Miễn phí / 500.000đ/tháng' },
    description: {
      en: 'Google Gemini is a state-of-the-art multimodal AI designed to integrate seamlessly with the entire Google ecosystem, including Workspace and Search. It can process and reason across various types of information such as text, code, audio, image, and video simultaneously. Gemini empowers users to automate complex office tasks, conduct deep research, and generate creative content with ease. Its deep integration makes it a uniquely powerful tool for both personal and enterprise productivity.',
      vi: 'Google Gemini là AI đa phương thức hiện đại được thiết kế để tích hợp liền mạch với toàn bộ hệ sinh thái Google, bao gồm Workspace và Search. Nó có thể xử lý và lập luận trên nhiều loại thông tin khác nhau như văn bản, mã, âm thanh, hình ảnh và video cùng một lúc. Gemini cho phép người dùng tự động hóa các tác vụ văn phòng phức tạp, thực hiện nghiên cứu sâu và tạo nội dung sáng tạo một cách dễ dàng. Sự tích hợp sâu rộng này khiến nó trở thành một công cụ mạnh mẽ độc đáo cho năng suất cá nhân và doanh nghiệp.'
    },
    features: {
      en: ['Multimodal reasoning', 'Coding assistance', 'Creative writing', 'Google Workspace integration'],
      vi: ['Lập luận đa phương thức', 'Hỗ trợ lập trình', 'Tích hợp Google Workspace', 'Xử lý video/audio']
    },
    pros: { 
      en: ['Deep integration with Google Docs and Sheets', 'Fast response times for complex queries', 'Excellent multimodal reasoning capabilities'], 
      vi: ['Tích hợp sâu với Google Docs và Google Sheets', 'Thời gian phản hồi nhanh cho các truy vấn phức tạp', 'Khả năng lập luận đa phương thức xuất sắc'] 
    },
    cons: { 
      en: ['Occasional inaccuracies in fact-checking', 'Advanced features locked behind subscription', 'Privacy concerns for sensitive enterprise data'], 
      vi: ['Đôi khi thiếu chính xác trong việc kiểm chứng sự thật', 'Các tính năng nâng cao bị khóa sau gói trả phí', 'Lo ngại về quyền riêng tư đối với dữ liệu doanh nghiệp nhạy cảm'] 
    },
    useCases: {
      en: [
        { title: 'Research', examples: ['Summarizing long documents from Google Drive', 'Fact-checking information with Google Search grounding'] },
        { title: 'Office Automation', examples: ['Drafting personalized emails based on Sheets data', 'Creating presentation outlines from meeting notes'] }
      ],
      vi: [
        { title: 'Nghiên cứu', examples: ['Tóm tắt các tài liệu dài từ Google Drive', 'Kiểm chứng thông tin với tính năng tra cứu Google'] },
        { title: 'Tự động hóa văn phòng', examples: ['Soạn thảo email cá nhân hóa dựa trên dữ liệu Sheets', 'Tạo đề cương thuyết trình từ ghi chú cuộc họp'] }
      ]
    },
    affiliateUrl: 'https://gemini.google.com',
    howToUse: {
      en: [
        'Sign in with your Google account at gemini.google.com.',
        'Enter your prompt and choose between different model versions if available.',
        'Refine results by asking follow-up questions or using Google Search grounding.'
      ],
      vi: [
        'Đăng nhập bằng tài khoản Google tại gemini.google.com.',
        'Nhập yêu cầu và chọn phiên bản mô hình phù hợp.',
        'Tinh chỉnh kết quả bằng cách đặt câu hỏi nối tiếp hoặc sử dụng tính năng tra cứu Google.'
      ]
    }
  },

  // --- VIDEO ---

  // --- IMAGE ---

  // --- CODING ---

  // --- AUDIO ---
  {
    id: 'suno',
    name: 'Suno AI',
    domain: 'suno.com',
    logo: getLogo('suno.com'),
    screenshots: ['https://picsum.photos/seed/suno1/800/450', 'https://picsum.photos/seed/suno2/800/450'],
    category: 'audio',
    rating: 4.9,
    reviewCount: 15000,
    createdAt: '2026-02-20',
    pricing: { en: 'Free / $8/mo', vi: 'Miễn phí / 200.000đ/tháng' },
    description: {
      en: 'Suno AI is a groundbreaking music generation platform that allows anyone to create full songs with vocals and instrumentation from simple text prompts. It leverages advanced generative models to produce high-quality audio across a wide variety of genres and styles. Whether you want to create a catchy pop tune or a soulful ballad, Suno makes music production accessible to everyone. It is a perfect tool for content creators, songwriters, and hobbyists looking to explore musical creativity.',
      vi: 'Suno AI là một nền tảng tạo nhạc đột phá cho phép bất kỳ ai cũng có thể tạo ra các bài hát đầy đủ với giọng hát và nhạc cụ từ các câu lệnh văn bản đơn giản. Nó tận dụng các mô hình sáng tạo tiên tiến để tạo ra âm thanh chất lượng cao trên nhiều thể loại và phong cách khác nhau. Cho dù bạn muốn tạo một bản nhạc pop bắt tai hay một bản ballad truyền cảm, Suno giúp việc sản xuất âm nhạc trở nên dễ tiếp cận với mọi người. Đây là một công cụ hoàn hảo cho các nhà sáng tạo nội dung, nhạc sĩ và những người yêu thích âm nhạc muốn khám phá sự sáng tạo âm nhạc.'
    },
    features: {
      en: ['Text-to-Song', 'Custom lyrics', 'V3.5 model', 'Style control'],
      vi: ['Văn bản sang Bài hát', 'Lời bài hát tùy chỉnh', 'Mô hình V3.5', 'Kiểm soát phong cách']
    },
    pros: { 
      en: ['Incredible audio quality for AI-generated music', 'Extremely easy and fun to use for non-musicians', 'Fast generation of full-length tracks with vocals'], 
      vi: ['Chất lượng âm thanh đáng kinh ngạc cho nhạc do AI tạo ra', 'Cực kỳ dễ dàng và thú vị để sử dụng cho những người không phải nhạc sĩ', 'Tạo nhanh các bản nhạc dài đầy đủ với giọng hát'] 
    },
    cons: { 
      en: ['Copyright and ownership of AI music can be complex', 'Limited control over specific melodies or individual notes', 'Daily generation limits on the free tier can be restrictive'], 
      vi: ['Bản quyền và quyền sở hữu nhạc AI có thể phức tạp', 'Kiểm soát hạn chế đối với các giai điệu cụ thể hoặc nốt nhạc riêng lẻ', 'Giới hạn tạo hàng ngày trên gói miễn phí có thể gây hạn chế'] 
    },
    useCases: {
      en: [
        { title: 'Songwriting', examples: ['Generating full songs from simple text descriptions', 'Creating custom lyrics for specific themes or events'] },
        { title: 'Music Production', examples: ['Generating high-quality backing tracks for vocalists', 'Exploring new musical genres and styles quickly'] }
      ],
      vi: [
        { title: 'Sáng tác bài hát', examples: ['Tạo các bài hát đầy đủ từ mô tả văn bản đơn giản', 'Tạo lời bài hát tùy chỉnh cho các chủ đề hoặc sự kiện cụ thể'] },
        { title: 'Sản xuất âm nhạc', examples: ['Tạo các bản nhạc nền chất lượng cao cho ca sĩ', 'Khám phá các thể loại và phong cách âm nhạc mới nhanh chóng'] }
      ]
    },
    affiliateUrl: 'https://suno.com',
    howToUse: {
      en: [
        'Describe the mood, genre, and topic of your song in the prompt box.',
        'Choose between "Simple" mode or "Custom" mode for more control over lyrics.',
        'Generate the track and share it or download it for your projects.'
      ],
      vi: [
        'Mô tả tâm trạng, thể loại và chủ đề của bài hát trong ô lệnh.',
        'Chọn giữa chế độ "Simple" hoặc "Custom" để kiểm soát lời bài hát tốt hơn.',
        'Tạo bản nhạc và chia sẻ hoặc tải xuống cho dự án của bạn.'
      ]
    }
  },

  // --- MORE TOOLS (30+ TOTAL) ---
  {
    id: 'firefly',
    name: 'Adobe Firefly',
    domain: 'adobe.com',
    logo: getLogo('adobe.com'),
    screenshots: ['https://picsum.photos/seed/firefly1/800/450'],
    category: 'image',
    rating: 4.6,
    reviewCount: 15000,
    createdAt: '2026-02-10',
    pricing: { en: 'Free / Subscription', vi: 'Miễn phí / Thuê bao' },
    description: {
      en: 'Adobe Firefly is a family of creative generative AI models designed to integrate seamlessly into Adobe Creative Cloud applications like Photoshop and Illustrator. It focuses on providing high-quality, commercially safe AI generation for images, text effects, and vector recoloring. Firefly is trained on Adobe Stock images and public domain content, ensuring that creators can use its outputs with confidence. It is a powerful tool for professional designers who want to enhance their creative workflows with AI while maintaining ethical standards.',
      vi: 'Adobe Firefly là một nhóm các mô hình AI sáng tạo được thiết kế để tích hợp liền mạch vào các ứng dụng Adobe Creative Cloud như Photoshop và Illustrator. Nó tập trung vào việc cung cấp khả năng tạo AI chất lượng cao, an toàn về mặt thương mại cho hình ảnh, hiệu ứng văn bản và đổi màu vector. Firefly được huấn luyện trên các hình ảnh Adobe Stock và nội dung thuộc phạm vi công cộng, đảm bảo rằng các nhà sáng tạo có thể tự tin sử dụng các đầu ra của nó. Đây là một công cụ mạnh mẽ cho các nhà thiết kế chuyên nghiệp muốn tăng cường quy trình sáng tạo của họ với AI trong khi vẫn duy trì các tiêu chuẩn đạo đức.'
    },
    features: { 
      en: ['Generative Fill', 'Text to Image', 'Generative Recolor', 'Text Effects'],
      vi: ['Tô vẽ sáng tạo', 'Văn bản sang Hình ảnh', 'Đổi màu Vector', 'Hiệu ứng chữ nghệ thuật']
    },
    pros: { 
      en: ['Commercially safe AI generation with ethical training data', 'Deep integration with professional tools like Photoshop', 'High-quality outputs that match Adobe\'s professional standards'], 
      vi: ['Tạo AI an toàn về mặt thương mại với dữ liệu huấn luyện đạo đức', 'Tích hợp sâu với các công cụ chuyên nghiệp như Photoshop', 'Đầu ra chất lượng cao phù hợp với các tiêu chuẩn chuyên nghiệp của Adobe'] 
    },
    cons: { 
      en: ['Requires an Adobe Creative Cloud subscription for full access', 'Can be more restrictive in its generation compared to Midjourney', 'May have a learning curve for those unfamiliar with Adobe software'], 
      vi: ['Yêu cầu đăng ký Adobe Creative Cloud để truy cập đầy đủ', 'Có thể hạn chế hơn trong việc sáng tạo so với Midjourney', 'Có thể có lộ trình học tập cho những người không quen thuộc với phần mềm Adobe'] 
    },
    useCases: {
      en: [
        { title: 'Professional Photo Editing', examples: ['Using Generative Fill to change clothing or backgrounds', 'Expanding canvas size with AI-generated content'] },
        { title: 'Graphic Design', examples: ['Creating unique text effects and textures from prompts', 'Generating high-quality vectors for commercial use'] }
      ],
      vi: [
        { title: 'Chỉnh sửa ảnh chuyên nghiệp', examples: ['Sử dụng Generative Fill để thay đổi trang phục hoặc bối cảnh', 'Mở rộng kích thước canvas với nội dung do AI tạo ra'] },
        { title: 'Thiết kế đồ họa', examples: ['Tạo các hiệu ứng chữ và kết cấu độc đáo từ câu lệnh', 'Tạo các vector chất lượng cao cho mục đích thương mại'] }
      ]
    },
    affiliateUrl: 'https://firefly.adobe.com',
    howToUse: {
      en: [
        'Access the Adobe Firefly web app or use it within Photoshop/Illustrator.',
        'Select a feature like "Text to Image" or "Generative Fill".',
        'Enter your prompt and download the results, ensuring commercial safety.'
      ],
      vi: [
        'Truy cập ứng dụng web Adobe Firefly hoặc sử dụng nó trong Photoshop/Illustrator.',
        'Chọn một tính năng như "Text to Image" hoặc "Generative Fill".',
        'Nhập câu lệnh của bạn và tải xuống kết quả, đảm bảo an toàn thương mại.'
      ]
    }
  },
  {
    id: 'replit',
    name: 'Replit',
    domain: 'replit.com',
    logo: getLogo('replit.com'),
    screenshots: ['https://picsum.photos/seed/replit1/800/450'],
    category: 'coding',
    rating: 4.8,
    reviewCount: 40000,
    createdAt: '2026-01-15',
    pricing: { en: 'Free / $10/mo', vi: 'Miễn phí / 250.000đ/tháng' },
    description: {
      en: 'Replit is a powerful cloud-based IDE that integrates advanced AI to help developers write, test, and deploy code directly from their browser. Its Ghostwriter AI assistant provides real-time code completion, debugging help, and explanations for complex logic. Replit eliminates the need for local environment setup, making it perfect for rapid prototyping and collaborative coding. It is an essential tool for both beginners learning to code and professional developers building and hosting full-stack applications.',
      vi: 'Replit là một IDE dựa trên đám mây mạnh mẽ tích hợp AI tiên tiến để giúp các nhà phát triển viết, kiểm tra và triển khai mã trực tiếp từ trình duyệt của họ. Trợ lý Ghostwriter AI của nó cung cấp khả năng hoàn thành mã theo thời gian thực, hỗ trợ gỡ lỗi và giải thích cho các logic phức tạp. Replit loại bỏ nhu cầu thiết lập môi trường cục bộ, làm cho nó trở nên hoàn hảo cho việc tạo nguyên mẫu nhanh và lập trình cộng tác. Đây là một công cụ thiết yếu cho cả người mới bắt đầu học lập trình và các nhà phát triển chuyên nghiệp đang xây dựng và lưu trữ các ứng dụng full-stack.'
    },
    features: { 
      en: ['Ghostwriter AI assistant', 'Cloud-based development', 'Instant deployment', 'Real-time collaboration'],
      vi: ['Trợ lý Ghostwriter AI hỗ trợ viết code', 'Phát triển trên nền tảng đám mây', 'Triển khai tức thì', 'Cộng tác thời gian thực']
    },
    pros: { 
      en: ['Zero local configuration required for any language', 'Powerful AI assistance for coding and debugging', 'Seamless real-time collaboration with team members'], 
      vi: ['Không yêu cầu cấu hình cục bộ cho bất kỳ ngôn ngữ nào', 'Hỗ trợ AI mạnh mẽ cho việc lập trình và gỡ lỗi', 'Cộng tác thời gian thực liền mạch với các thành viên trong nhóm'] 
    },
    cons: { 
      en: ['Performance can depend on internet connection stability', 'Free tier has limited computing resources and storage', 'Advanced deployment features require a paid subscription'], 
      vi: ['Hiệu suất có thể phụ thuộc vào sự ổn định của kết nối internet', 'Gói miễn phí có tài nguyên tính toán và lưu trữ hạn chế', 'Các tính năng triển khai nâng cao yêu cầu đăng ký trả phí'] 
    },
    useCases: {
      en: [
        { title: 'Rapid Prototyping', examples: ['Building and deploying a full-stack web app in minutes', 'Testing new libraries and frameworks without local setup'] },
        { title: 'Collaborative Coding', examples: ['Pair programming in real-time with team members remotely', 'Sharing live code snippets for debugging and feedback'] }
      ],
      vi: [
        { title: 'Tạo nguyên mẫu nhanh', examples: ['Xây dựng và triển khai một ứng dụng web full-stack trong vài phút', 'Thử nghiệm các thư viện và khung làm việc mới mà không cần cài đặt cục bộ'] },
        { title: 'Lập trình cộng tác', examples: ['Lập trình cặp trong thời gian thực với các thành viên nhóm từ xa', 'Chia sẻ các đoạn mã trực tiếp để gỡ lỗi và nhận phản hồi'] }
      ]
    },
    affiliateUrl: 'https://replit.com',
    howToUse: {
      en: [
        'Create a new "Repl" and select your preferred programming language.',
        'Use the AI Ghostwriter to help you write, debug, and explain your code.',
        'Hit the "Run" button to execute your code and deploy it with one click.'
      ],
      vi: [
        'Tạo một "Repl" mới và chọn ngôn ngữ lập trình ưa thích của bạn.',
        'Sử dụng AI Ghostwriter để giúp bạn viết, gỡ lỗi và giải thích mã của mình.',
        'Nhấn nút "Run" để thực thi mã của bạn và triển khai nó chỉ bằng một cú nhấp chuột.'
      ]
    }
  },
  {
    id: 'tabnine',
    name: 'Tabnine',
    domain: 'tabnine.com',
    logo: getLogo('tabnine.com'),
    screenshots: ['https://picsum.photos/seed/tab1/800/450'],
    category: 'coding',
    rating: 4.6,
    reviewCount: 25000,
    createdAt: '2026-01-18',
    pricing: { en: 'Free / $12/mo', vi: 'Miễn phí / 300.000đ/tháng' },
    description: {
      en: 'Tabnine is a privacy-focused AI coding assistant that helps developers write code faster and more securely. It offers the unique ability to run AI models locally or in a private cloud, ensuring that your source code never leaves your secure environment. Tabnine supports a vast array of programming languages and integrates seamlessly with all popular IDEs. It is the preferred choice for enterprises and security-conscious developers who want the benefits of AI without compromising data privacy.',
      vi: 'Tabnine là một trợ lý lập trình AI tập trung vào quyền riêng tư giúp các nhà phát triển viết mã nhanh hơn và an toàn hơn. Nó cung cấp khả năng độc đáo để chạy các mô hình AI cục bộ hoặc trong một đám mây riêng, đảm bảo rằng mã nguồn của bạn không bao giờ rời khỏi môi trường an toàn của bạn. Tabnine hỗ trợ một loạt các ngôn ngữ lập trình và tích hợp liền mạch với tất cả các IDE phổ biến. Đây là lựa chọn ưu tiên cho các doanh nghiệp và các nhà phát triển có ý thức về bảo mật, những người muốn có lợi ích của AI mà không làm ảnh hưởng đến quyền riêng tư dữ liệu.'
    },
    features: { 
      en: ['Local & private cloud models', 'Multi-language support', 'IDE integration', 'Context-aware suggestions'],
      vi: ['Hỗ trợ chạy mô hình AI cục bộ (Local)', 'Hỗ trợ đa ngôn ngữ', 'Tích hợp IDE phổ biến', 'Gợi ý theo ngữ cảnh']
    },
    pros: { 
      en: ['Unmatched source code privacy and security options', 'Fast and accurate context-aware code completions', 'Broad support for numerous programming languages and IDEs'], 
      vi: ['Các tùy chọn bảo mật và quyền riêng tư mã nguồn vô song', 'Hoàn thành mã theo ngữ cảnh nhanh chóng và chính xác', 'Hỗ trợ rộng rãi cho nhiều ngôn ngữ lập trình và IDE'] 
    },
    cons: { 
      en: ['Local models may require significant system resources', 'Initial setup for private cloud can be more complex', 'Free version has limited features compared to Pro'], 
      vi: ['Các mô hình cục bộ có thể yêu cầu tài nguyên hệ thống đáng kể', 'Thiết lập ban đầu cho đám mây riêng có thể phức tạp hơn', 'Phiên bản miễn phí có các tính năng hạn chế so với bản Pro'] 
    },
    useCases: {
      en: [
        { title: 'Enterprise Development', examples: ['Speeding up coding while maintaining strict source code privacy', 'Standardizing code quality across large engineering teams'] },
        { title: 'Legacy Code Maintenance', examples: ['Understanding and refactoring old codebases with AI assistance', 'Generating unit tests for existing functions automatically'] }
      ],
      vi: [
        { title: 'Phát triển doanh nghiệp', examples: ['Tăng tốc độ lập trình trong khi vẫn duy trì quyền riêng tư nghiêm ngặt của mã nguồn', 'Tiêu chuẩn hóa chất lượng mã trên các nhóm kỹ thuật lớn'] },
        { title: 'Bảo trì mã cũ', examples: ['Hiểu và tái cấu trúc các cơ sở mã cũ với sự hỗ trợ của AI', 'Tự động tạo các bài kiểm tra đơn vị (unit tests) cho các hàm hiện có'] }
      ]
    },
    affiliateUrl: 'https://tabnine.com',
    howToUse: {
      en: [
        'Install the Tabnine extension for your preferred IDE (VS Code, IntelliJ, etc.).',
        'Configure the privacy settings to use local or private cloud models.',
        'Start typing code and accept AI suggestions to complete your tasks faster.'
      ],
      vi: [
        'Cài đặt tiện ích mở rộng Tabnine cho IDE ưa thích của bạn (VS Code, IntelliJ, v.v.).',
        'Cấu hình cài đặt quyền riêng tư để sử dụng các mô hình đám mây cục bộ hoặc riêng tư.',
        'Bắt đầu nhập mã và chấp nhận các đề xuất AI để hoàn thành công việc nhanh hơn.'
      ]
    }
  },
  {
    id: 'suno_audio',
    name: 'Udio',
    domain: 'udio.com',
    logo: getLogo('udio.com'),
    screenshots: ['https://picsum.photos/seed/udio1/800/450'],
    category: 'audio',
    rating: 4.8,
    reviewCount: 10000,
    createdAt: '2026-03-05',
    pricing: { en: 'Free / $10/mo', vi: 'Miễn phí / 250.000đ/tháng' },
    description: {
      en: 'Udio is a cutting-edge AI music generation platform that allows users to create professional-quality songs from simple text descriptions. It excels at producing high-fidelity audio with complex arrangements and emotionally resonant vocals across various genres. Udio provides granular control over song structure, lyrics, and vocal styles, making it a powerful tool for both casual creators and professional musicians. It is rapidly setting new standards for what is possible in AI-assisted music production.',
      vi: 'Udio là một nền tảng tạo nhạc AI tiên tiến cho phép người dùng tạo ra các bài hát chất lượng chuyên nghiệp từ các mô tả văn bản đơn giản. Nó vượt trội trong việc tạo ra âm thanh độ trung thực cao với các sắp xếp phức tạp và giọng hát vang dội về mặt cảm xúc trên nhiều thể loại khác nhau. Udio cung cấp khả năng kiểm soát chi tiết đối với cấu trúc bài hát, lời bài hát và phong cách giọng hát, làm cho nó trở thành một công cụ mạnh mẽ cho cả những người sáng tạo thông thường và các nhạc sĩ chuyên nghiệp. Nó đang nhanh chóng thiết lập các tiêu chuẩn mới cho những gì có thể trong sản xuất âm nhạc được hỗ trợ bởi AI.'
    },
    features: { 
      en: ['High-fidelity audio generation', 'Custom lyrics & structure', 'Professional mastering', 'Vocal style control'],
      vi: ['Tạo âm thanh độ trung thực cao', 'Tùy chỉnh lời và cấu trúc', 'Mastering chuyên nghiệp', 'Kiểm soát phong cách giọng hát']
    },
    pros: { 
      en: ['Exceptional audio quality and emotional depth in vocals', 'Highly intuitive interface for complex music creation', 'Powerful tools for refining and extending generated tracks'], 
      vi: ['Chất lượng âm thanh đặc biệt và chiều sâu cảm xúc trong giọng hát', 'Giao diện trực quan cao cho việc tạo nhạc phức tạp', 'Các công cụ mạnh mẽ để tinh chỉnh và mở rộng các bản nhạc đã tạo'] 
    },
    cons: { 
      en: ['Generation process can be slower than some competitors', 'Free tier has limited credits for high-quality generation', 'Copyright and ownership of AI-generated music can be complex'], 
      vi: ['Quy trình tạo có thể chậm hơn so với một số đối thủ cạnh tranh', 'Gói miễn phí có số lượng credit hạn chế cho việc tạo chất lượng cao', 'Bản quyền và quyền sở hữu nhạc do AI tạo ra có thể phức tạp'] 
    },
    useCases: {
      en: [
        { title: 'Music Production', examples: ['Creating high-fidelity song demos from simple text descriptions', 'Generating unique melodies and vocal performances for tracks'] },
        { title: 'Content Creation', examples: ['Producing original, royalty-free background music for videos', 'Creating catchy jingles for podcasts or social media ads'] }
      ],
      vi: [
        { title: 'Sản xuất âm nhạc', examples: ['Tạo các bản demo bài hát chất lượng cao từ các mô tả văn bản đơn giản', 'Tạo các giai điệu và phần trình diễn giọng hát độc đáo cho các bản nhạc'] },
        { title: 'Sáng tạo nội dung', examples: ['Sản xuất nhạc nền gốc, không bản quyền cho các video', 'Tạo các đoạn nhạc hiệu hấp dẫn cho podcast hoặc quảng cáo mạng xã hội'] }
      ]
    },
    affiliateUrl: 'https://udio.com',
    howToUse: {
      en: [
        'Enter a detailed prompt describing the genre, mood, and lyrics of your song.',
        'Customize the generation settings including song structure and vocal style.',
        'Generate the track and use the built-in tools to extend or refine the result.'
      ],
      vi: [
        'Nhập một câu lệnh chi tiết mô tả thể loại, tâm trạng và lời bài hát của bạn.',
        'Tùy chỉnh các cài đặt tạo bao gồm cấu trúc bài hát và phong cách giọng hát.',
        'Tạo bản nhạc và sử dụng các công cụ tích hợp để mở rộng hoặc tinh chỉnh kết quả.'
      ]
    }
  },
  {
    id: 'murf',
    name: 'Murf AI',
    domain: 'murf.ai',
    logo: getLogo('murf.ai'),
    screenshots: ['https://picsum.photos/seed/murf1/800/450'],
    category: 'audio',
    rating: 4.7,
    reviewCount: 8000,
    createdAt: '2026-01-22',
    pricing: { en: 'Free / $19/mo', vi: 'Miễn phí / 450.000đ/tháng' },
    description: {
      en: 'Murf AI is a comprehensive AI voiceover platform that provides studio-quality narrations for a wide range of creative and business projects. It features a diverse library of over 120 natural-sounding AI voices in multiple languages, allowing users to find the perfect tone for any content. Murf AI offers advanced tools for adjusting pitch, speed, and emphasis, as well as the ability to sync voiceovers perfectly with videos or presentations. It is an ideal solution for e-learning creators, marketers, and businesses looking to produce professional audio content efficiently.',
      vi: 'Murf AI là một nền tảng thuyết minh AI toàn diện cung cấp các lời dẫn chất lượng phòng thu cho một loạt các dự án sáng tạo và kinh doanh. Nó có một thư viện đa dạng gồm hơn 120 giọng nói AI tự nhiên bằng nhiều ngôn ngữ, cho phép người dùng tìm thấy tông giọng hoàn hảo cho bất kỳ nội dung nào. Murf AI cung cấp các công cụ nâng cao để điều chỉnh cao độ, tốc độ và sự nhấn mạnh, cũng như khả năng đồng bộ hóa thuyết minh hoàn hảo với video hoặc bản thuyết trình. Đây là một giải pháp lý tưởng cho các nhà sáng tạo e-learning, nhà tiếp thị và doanh nghiệp muốn sản xuất nội dung âm thanh chuyên nghiệp một cách hiệu quả.'
    },
    features: { 
      en: ['120+ AI Voices', 'Voice cloning', 'Pitch & speed control', 'Sync with video/slides'],
      vi: ['Hơn 120 giọng đọc AI chuyên nghiệp', 'Nhân bản giọng nói', 'Điều chỉnh cao độ & tốc độ', 'Đồng bộ với video/slide']
    },
    pros: { 
      en: ['High-quality, natural-sounding voices across various styles', 'Easy-to-use studio interface for precise audio editing', 'Excellent synchronization tools for video and slide content'], 
      vi: ['Giọng nói chất lượng cao, tự nhiên trên nhiều phong cách khác nhau', 'Giao diện studio dễ sử dụng để chỉnh sửa âm thanh chính xác', 'Công cụ đồng bộ hóa tuyệt vời cho nội dung video và slide'] 
    },
    cons: { 
      en: ['Paid plans can be expensive for individual creators', 'Free version has limited export and usage capabilities', 'Voice cloning features require higher-tier subscriptions'], 
      vi: ['Các gói trả phí có thể đắt đối với các nhà sáng tạo cá nhân', 'Phiên bản miễn phí có khả năng xuất và sử dụng hạn chế', 'Các tính năng nhân bản giọng nói yêu cầu đăng ký cấp cao hơn'] 
    },
    useCases: {
      en: [
        { title: 'E-learning Content', examples: ['Generating natural-sounding voiceovers for educational modules', 'Creating multi-speaker dialogues for interactive training videos'] },
        { title: 'Corporate Presentations', examples: ['Adding professional narration to slide decks and reports', 'Developing consistent brand voices for internal communications'] }
      ],
      vi: [
        { title: 'Nội dung E-learning', examples: ['Tạo thuyết minh giọng đọc tự nhiên cho các mô-đun giáo dục', 'Tạo các đoạn hội thoại nhiều người nói cho video đào tạo tương tác'] },
        { title: 'Thuyết trình doanh nghiệp', examples: ['Thêm lời dẫn chuyên nghiệp vào các bộ slide và báo cáo', 'Phát triển giọng văn thương hiệu nhất quán cho truyền thông nội bộ'] }
      ]
    },
    affiliateUrl: 'https://murf.ai',
    howToUse: {
      en: [
        'Upload your script or type it directly into the Murf AI studio.',
        'Select from over 120 high-quality AI voices and adjust pitch and speed.',
        'Sync the voiceover with your video or slides and export the final file.'
      ],
      vi: [
        'Tải lên kịch bản của bạn hoặc nhập trực tiếp vào studio Murf AI.',
        'Chọn từ hơn 120 giọng nói AI chất lượng cao và điều chỉnh cao độ, tốc độ.',
        'Đồng bộ hóa thuyết minh với video hoặc slide của bạn và xuất tệp cuối cùng.'
      ]
    }
  },
  {
    id: 'speechify',
    name: 'Speechify',
    domain: 'speechify.com',
    logo: getLogo('speechify.com'),
    screenshots: ['https://picsum.photos/seed/speech1/800/450'],
    category: 'audio',
    rating: 4.8,
    reviewCount: 100000,
    createdAt: '2026-01-01',
    pricing: { en: 'Free / $139/yr', vi: 'Miễn phí / 3.4tr/năm' },
    description: {
      en: 'Speechify is a leading AI-powered text-to-speech application that transforms any written text into high-quality, natural-sounding audio. It is designed to help users read faster and retain more information by listening to books, articles, and documents on the go. Speechify offers a wide variety of voices, including celebrity narrators, and allows for significant speed adjustments to suit individual listening preferences. It is an invaluable tool for students, professionals, and anyone with reading disabilities like dyslexia.',
      vi: 'Speechify là một ứng dụng chuyển đổi văn bản thành giọng nói hàng đầu được hỗ trợ bởi AI, chuyển đổi bất kỳ văn bản viết nào thành âm thanh chất lượng cao, tự nhiên. Nó được thiết kế để giúp người dùng đọc nhanh hơn và ghi nhớ nhiều thông tin hơn bằng cách nghe sách, bài báo và tài liệu khi đang di chuyển. Speechify cung cấp nhiều loại giọng nói, bao gồm cả những người dẫn chuyện là người nổi tiếng và cho phép điều chỉnh tốc độ đáng kể để phù hợp với sở thích nghe của từng cá nhân. Đây là một công cụ vô giá cho sinh viên, chuyên gia và bất kỳ ai bị khuyết tật đọc như chứng khó đọc.'
    },
    features: { 
      en: ['Advanced OCR technology', 'Natural AI voices', 'Speed control (up to 9x)', 'Cross-device sync'],
      vi: ['Công nghệ quét chữ từ hình ảnh (OCR)', 'Giọng đọc AI tự nhiên', 'Kiểm soát tốc độ (lên đến 9x)', 'Đồng bộ hóa đa thiết bị']
    },
    pros: { 
      en: ['Exceptional voice quality with many natural-sounding options', 'Powerful OCR technology for converting physical books to audio', 'Seamless synchronization across mobile and desktop devices'], 
      vi: ['Chất lượng giọng nói đặc biệt với nhiều tùy chọn âm thanh tự nhiên', 'Công nghệ OCR mạnh mẽ để chuyển đổi sách vật lý thành âm thanh', 'Đồng bộ hóa liền mạch trên các thiết bị di động và máy tính để bàn'] 
    },
    cons: { 
      en: ['Premium subscription is required for the best voices and features', 'Free version has limited daily listening limits', 'Some advanced features can be complex for new users to navigate'], 
      vi: ['Yêu cầu đăng ký Premium cho các giọng nói và tính năng tốt nhất', 'Phiên bản miễn phí có giới hạn nghe hàng ngày', 'Một số tính năng nâng cao có thể phức tạp đối với người dùng mới'] 
    },
    useCases: {
      en: [
        { title: 'Productivity Enhancement', examples: ['Listening to long PDFs or articles while commuting or exercising', 'Scanning physical books to convert them into audiobooks instantly'] },
        { title: 'Accessibility Support', examples: ['Assisting visually impaired users by reading digital text aloud', 'Helping users with dyslexia process written information more easily'] }
      ],
      vi: [
        { title: 'Tăng cường năng suất', examples: ['Nghe các tệp PDF hoặc bài báo dài khi đang di chuyển hoặc tập thể dục', 'Quét sách giấy để chuyển đổi chúng thành sách nói ngay lập tức'] },
        { title: 'Hỗ trợ khả năng tiếp cận', examples: ['Hỗ trợ người khiếm thị bằng cách đọc to văn bản kỹ thuật số', 'Giúp người mắc chứng khó đọc xử lý thông tin văn bản dễ dàng hơn'] }
      ]
    },
    affiliateUrl: 'https://speechify.com',
    howToUse: {
      en: [
        'Upload a document or paste a link into the Speechify app or extension.',
        'Choose your preferred AI voice and set the playback speed (up to 9x).',
        'Listen to the content across all your devices with synchronized progress.'
      ],
      vi: [
        'Tải lên tài liệu hoặc dán liên kết vào ứng dụng hoặc tiện ích Speechify.',
        'Chọn giọng nói AI ưa thích của bạn và đặt tốc độ phát lại (lên đến 9x).',
        'Nghe nội dung trên tất cả các thiết bị của bạn với tiến trình được đồng bộ hóa.'
      ]
    }
  },
  {
    id: 'gamma',
    name: 'Gamma',
    domain: 'gamma.app',
    logo: getLogo('gamma.app'),
    screenshots: ['https://picsum.photos/seed/gamma1/800/450'],
    category: 'productivity',
    rating: 4.9,
    reviewCount: 15000,
    createdAt: '2026-02-15',
    pricing: { en: 'Free / $8/mo', vi: 'Miễn phí / 200.000đ/tháng' },
    description: {
      en: 'Gamma is an AI-powered presentation and document creation platform that helps users turn ideas into beautiful visuals in seconds. It uses generative AI to build entire slide decks, web pages, and documents from simple text prompts or outlines. Gamma features a flexible, modular design system that allows for easy customization and real-time collaboration. It is a game-changer for professionals and students who want to create high-impact presentations without the manual effort of traditional software.',
      vi: 'Gamma là một nền tảng tạo bản thuyết trình và tài liệu được hỗ trợ bởi AI giúp người dùng biến các ý tưởng thành các hình ảnh đẹp mắt trong vài giây. Nó sử dụng AI sáng tạo để xây dựng toàn bộ các bộ slide, trang web và tài liệu từ các câu lệnh văn bản đơn giản hoặc dàn ý. Gamma có hệ thống thiết kế linh hoạt, mô-đun cho phép tùy chỉnh dễ dàng và cộng tác theo thời gian thực. Đây là một công cụ thay đổi cuộc chơi cho các chuyên gia và sinh viên muốn tạo ra các bản thuyết trình có tác động cao mà không cần nỗ lực thủ công của phần mềm truyền thống.'
    },
    features: { 
      en: ['AI Presentation builder', 'One-click styling', 'Interactive embeds', 'Analytics'],
      vi: ['Tạo slide bằng AI', 'Đổi phong cách 1-click', 'Nhúng nội dung tương tác', 'Phân tích lượt xem']
    },
    pros: { 
      en: ['Incredibly fast creation of professional-looking presentations', 'Modern and responsive layouts that look great on any device', 'Easy to customize and iterate on AI-generated content'], 
      vi: ['Tạo cực nhanh các bản thuyết trình trông chuyên nghiệp', 'Bố cục hiện đại và phản hồi tốt trên mọi thiết bị', 'Dễ dàng tùy chỉnh và lặp lại trên nội dung do AI tạo ra'] 
    },
    cons: { 
      en: ['Limited control over traditional slide-by-slide formatting', 'Free tier has limited credits for AI generation', 'May require manual adjustments for complex data visualizations'], 
      vi: ['Kiểm soát hạn chế đối với định dạng từng slide truyền thống', 'Gói miễn phí có số lượng credit hạn chế để tạo AI', 'Có thể yêu cầu điều chỉnh thủ công cho các hình ảnh hóa dữ liệu phức tạp'] 
    },
    useCases: {
      en: [
        { title: 'Business Pitching', examples: ['Generating a professional pitch deck from a simple project outline', 'Creating interactive web-based presentations for potential investors'] },
        { title: 'Educational Content', examples: ['Developing visually engaging lesson plans and study guides', 'Converting complex research into easy-to-understand visual documents'] }
      ],
      vi: [
        { title: 'Thuyết trình kinh doanh', examples: ['Tạo một bộ hồ sơ gọi vốn chuyên nghiệp từ một đề cương dự án đơn giản', 'Tạo các bài thuyết trình tương tác trên nền tảng web cho các nhà đầu tư'] },
        { title: 'Nội dung giáo dục', examples: ['Phát triển các kế hoạch bài giảng và hướng dẫn học tập hấp dẫn về mặt hình ảnh', 'Chuyển đổi các nghiên cứu phức tạp thành các tài liệu hình ảnh dễ hiểu'] }
      ]
    },
    affiliateUrl: 'https://gamma.app',
    howToUse: {
      en: [
        'Enter a topic or paste your existing notes into the Gamma AI generator.',
        'Select a visual theme and let the AI build the structure and content.',
        'Refine the design using the intuitive drag-and-drop editor and share live.'
      ],
      vi: [
        'Nhập một chủ đề hoặc dán các ghi chú hiện có của bạn vào trình tạo Gamma AI.',
        'Chọn một chủ đề hình ảnh và để AI xây dựng cấu trúc và nội dung.',
        'Tinh chỉnh thiết kế bằng trình chỉnh sửa kéo thả trực quan và chia sẻ trực tiếp.'
      ]
    }
  },
  {
    id: 'otter',
    name: 'Otter.ai',
    domain: 'otter.ai',
    logo: getLogo('otter.ai'),
    screenshots: ['https://picsum.photos/seed/otter1/800/450'],
    category: 'productivity',
    rating: 4.7,
    reviewCount: 25000,
    createdAt: '2026-01-10',
    pricing: { en: 'Free / $10/mo', vi: 'Miễn phí / 250.000đ/tháng' },
    description: {
      en: 'Otter.ai is an intelligent meeting assistant that uses advanced AI to provide real-time transcription, automated summaries, and actionable insights. It integrates seamlessly with popular video conferencing platforms like Zoom, Microsoft Teams, and Google Meet to capture every detail of your discussions. Otter.ai allows users to search transcripts, highlight key moments, and share notes with team members effortlessly. It is an essential tool for professionals and students who want to stay focused during meetings without worrying about manual note-taking.',
      vi: 'Otter.ai là một trợ lý cuộc họp thông minh sử dụng AI tiên tiến để cung cấp bản ghi chép thời gian thực, tóm tắt tự động và các thông tin chi tiết có thể hành động. Nó tích hợp liền mạch với các nền tảng hội nghị truyền hình phổ biến như Zoom, Microsoft Teams và Google Meet để ghi lại mọi chi tiết trong các cuộc thảo luận của bạn. Otter.ai cho phép người dùng tìm kiếm bản ghi chép, làm nổi bật các khoảnh khắc quan trọng và chia sẻ ghi chú với các thành viên trong nhóm một cách dễ dàng. Đây là một công cụ thiết yếu cho các chuyên gia và sinh viên muốn tập trung trong các cuộc họp mà không lo lắng về việc ghi chép thủ công.'
    },
    features: { 
      en: ['Real-time transcription', 'Speaker identification', 'Automated meeting summaries', 'Calendar integration'],
      vi: ['Ghi chép văn bản thời gian thực', 'Nhận dạng người nói', 'Tóm tắt cuộc họp tự động', 'Tích hợp lịch làm việc']
    },
    pros: { 
      en: ['Highly accurate real-time transcription for English', 'Excellent automated summaries that capture key action items', 'Seamless integration with major video conferencing tools'], 
      vi: ['Ghi chép thời gian thực độ chính xác cao cho tiếng Anh', 'Tóm tắt tự động tuyệt vời ghi lại các mục hành động chính', 'Tích hợp liền mạch với các công cụ hội nghị truyền hình lớn'] 
    },
    cons: { 
      en: ['Transcription accuracy for non-English languages is limited', 'Free tier has a strict monthly limit on transcription minutes', 'Advanced collaboration features require a paid business plan'], 
      vi: ['Độ chính xác ghi chép cho các ngôn ngữ không phải tiếng Anh còn hạn chế', 'Gói miễn phí có giới hạn nghiêm ngặt hàng tháng về số phút ghi chép', 'Các tính năng cộng tác nâng cao yêu cầu gói kinh doanh trả phí'] 
    },
    useCases: {
      en: [
        { title: 'Meeting Management', examples: ['Automatically transcribing Zoom or Google Meet calls in real-time', 'Generating concise summaries and action items from long discussions'] },
        { title: 'Journalism & Research', examples: ['Transcribing interviews and focus groups for quick analysis', 'Searching through months of recorded conversations for specific keywords'] }
      ],
      vi: [
        { title: 'Quản lý cuộc họp', examples: ['Tự động ghi chép các cuộc gọi Zoom hoặc Google Meet trong thời gian thực', 'Tạo các bản tóm tắt ngắn gọn và các mục hành động từ các cuộc thảo luận dài'] },
        { title: 'Báo chí & Nghiên cứu', examples: ['Ghi chép các cuộc phỏng vấn và nhóm tập trung để phân tích nhanh', 'Tìm kiếm qua nhiều tháng hội thoại đã ghi âm cho các từ khóa cụ thể'] }
      ]
    },
    affiliateUrl: 'https://otter.ai',
    howToUse: {
      en: [
        'Connect Otter to your calendar or invite it to your live video meetings.',
        'Let the AI record and transcribe the conversation with speaker identification.',
        'Review the generated notes, highlight key parts, and share with your team.'
      ],
      vi: [
        'Kết nối Otter với lịch của bạn hoặc mời nó tham gia các cuộc họp video trực tiếp.',
        'Để AI ghi âm và ghi chép cuộc hội thoại với tính năng nhận dạng người nói.',
        'Xem lại các ghi chú đã tạo, đánh dấu các phần quan trọng và chia sẻ với nhóm.'
      ]
    }
  },
  {
    id: 'fireflies',
    name: 'Fireflies',
    domain: 'fireflies.ai',
    logo: getLogo('fireflies.ai'),
    screenshots: ['https://picsum.photos/seed/fire1/800/450'],
    category: 'productivity',
    rating: 4.6,
    reviewCount: 12000,
    createdAt: '2026-01-12',
    pricing: { en: 'Free / $10/mo', vi: 'Miễn phí / 250.000đ/tháng' },
    description: {
      en: 'Fireflies.ai is an AI-powered voice assistant that automates the process of recording, transcribing, and searching through your voice conversations. It joins your meetings as a silent participant to capture every word and provides a searchable database of all your past discussions. Fireflies.ai uses advanced AI to identify key topics, action items, and sentiment, helping teams stay aligned and informed. It is a powerful tool for sales teams, recruiters, and managers who need to maintain accurate records of their interactions.',
      vi: 'Fireflies.ai là một trợ lý giọng nói được hỗ trợ bởi AI giúp tự động hóa quy trình ghi âm, ghi chép và tìm kiếm thông qua các cuộc hội thoại bằng giọng nói của bạn. Nó tham gia các cuộc họp của bạn như một người tham gia thầm lặng để ghi lại mọi từ và cung cấp cơ sở dữ liệu có thể tìm kiếm về tất cả các cuộc thảo luận trong quá khứ của bạn. Fireflies.ai sử dụng AI tiên tiến để xác định các chủ đề chính, các mục hành động và cảm xúc, giúp các nhóm luôn thống nhất và được thông tin đầy đủ. Đây là một công cụ mạnh mẽ cho các nhóm bán hàng, nhà tuyển dụng và quản lý, những người cần duy trì hồ sơ chính xác về các tương tác của họ.'
    },
    features: { 
      en: ['AI-powered search', 'Workflow automation', 'Video conferencing integration', 'Sentiment analysis'],
      vi: ['Tìm kiếm thông tin bằng AI', 'Tự động hóa quy trình làm việc', 'Tích hợp hội nghị truyền hình', 'Phân tích sắc thái hội thoại']
    },
    pros: { 
      en: ['Seamless automation of meeting documentation and storage', 'Powerful search capabilities across all past conversations', 'Excellent integration with CRMs and project management tools'], 
      vi: ['Tự động hóa liền mạch việc lập tài liệu và lưu trữ cuộc họp', 'Khả năng tìm kiếm mạnh mẽ trên tất cả các cuộc hội thoại trong quá khứ', 'Tích hợp tuyệt vời với CRM và các công cụ quản lý dự án'] 
    },
    cons: { 
      en: ['Setup for some complex meeting environments can be tricky', 'Transcription quality can vary depending on audio clarity', 'Advanced AI analysis features are locked behind higher-tier plans'], 
      vi: ['Thiết lập cho một số môi trường họp phức tạp có thể khó khăn', 'Chất lượng ghi chép có thể thay đổi tùy thuộc vào độ rõ của âm thanh', 'Các tính năng phân tích AI nâng cao bị khóa sau các gói cấp cao hơn'] 
    },
    useCases: {
      en: [
        { title: 'Team Collaboration', examples: ['Syncing meeting notes across Slack, Notion, and CRM platforms', 'Tracking decisions and deadlines across multiple project meetings'] },
        { title: 'Internal Training', examples: ['Creating a searchable library of all internal training sessions', 'Summarizing key takeaways from workshops for absent team members'] }
      ],
      vi: [
        { title: 'Cộng tác nhóm', examples: ['Đồng bộ hóa ghi chú cuộc họp trên các nền tảng Slack, Notion và CRM', 'Theo dõi các quyết định và thời hạn trong nhiều cuộc họp dự án'] },
        { title: 'Đào tạo nội bộ', examples: ['Tạo một thư viện có thể tìm kiếm cho tất cả các buổi đào tạo nội bộ', 'Tóm tắt các điểm chính từ các buổi workshop cho các thành viên vắng mặt'] }
      ]
    },
    affiliateUrl: 'https://fireflies.ai',
    howToUse: {
      en: [
        'Invite the Fireflies "Fred" bot to your meeting or upload an audio file.',
        'Wait for the AI to process the recording and generate a full transcript.',
        'Use the "AskFred" search feature to find specific information or summaries.'
      ],
      vi: [
        'Mời bot "Fred" của Fireflies tham gia cuộc họp của bạn hoặc tải lên tệp âm thanh.',
        'Đợi AI xử lý bản ghi âm và tạo ra một bản ghi chép đầy đủ.',
        'Sử dụng tính năng tìm kiếm "AskFred" để tìm thông tin hoặc bản tóm tắt cụ thể.'
      ]
    }
  },
  {
    id: 'luma',
    name: 'Luma Dream',
    domain: 'lumalabs.ai',
    logo: getLogo('lumalabs.ai'),
    screenshots: ['https://picsum.photos/seed/luma1/800/450'],
    category: 'video',
    rating: 4.8,
    reviewCount: 5000,
    createdAt: '2026-03-12',
    pricing: { en: 'Free / $30/mo', vi: 'Miễn phí / 750.000đ/tháng' },
    description: {
      en: 'Luma Dream Machine is a powerful AI video generation model that creates high-quality, realistic videos from simple text prompts and images. It is designed to produce cinematic visuals with consistent characters, realistic physics, and dynamic camera movements. Luma Dream Machine allows creators to bring their imaginative concepts to life with incredible speed and fidelity. It is a groundbreaking tool for filmmakers, advertisers, and digital artists looking to push the boundaries of AI-generated video content.',
      vi: 'Luma Dream Machine là một mô hình tạo video AI mạnh mẽ, tạo ra các video thực tế, chất lượng cao từ các lời nhắc văn bản và hình ảnh đơn giản. Nó được thiết kế để tạo ra các hình ảnh điện ảnh với các nhân vật nhất quán, vật lý thực tế và các chuyển động camera năng động. Luma Dream Machine cho phép các nhà sáng tạo đưa các khái niệm giàu trí tưởng tượng của họ vào cuộc sống với tốc độ và độ trung thực đáng kinh ngạc. Đây là một công cụ đột phá cho các nhà làm phim, nhà quảng cáo và nghệ sĩ kỹ thuật số muốn mở rộng ranh giới của nội dung video do AI tạo ra.'
    },
    features: { 
      en: ['Dream Machine video model', 'Text-to-video generation', 'Image-to-video animation', 'Realistic physics & lighting'],
      vi: ['Mô hình Dream Machine tạo video siêu thực', 'Tạo video từ văn bản', 'Hoạt hóa hình ảnh thành video', 'Vật lý và ánh sáng chân thực']
    },
    pros: { 
      en: ['Exceptional visual quality and realistic motion dynamics', 'Incredible speed in generating high-fidelity video clips', 'Strong ability to maintain character and style consistency'], 
      vi: ['Chất lượng hình ảnh đặc biệt và động lực chuyển động thực tế', 'Tốc độ đáng kinh ngạc trong việc tạo các đoạn video độ trung thực cao', 'Khả năng mạnh mẽ để duy trì sự nhất quán về nhân vật và phong cách'] 
    },
    cons: { 
      en: ['Free tier has limited daily generations and a queue system', 'Complex prompts may require multiple iterations for perfect results', 'Generated videos are currently limited in duration'], 
      vi: ['Gói miễn phí có số lượng tạo hàng ngày hạn chế và hệ thống hàng đợi', 'Các lời nhắc phức tạp có thể yêu cầu nhiều lần lặp lại để có kết quả hoàn hảo', 'Các video được tạo hiện bị giới hạn về thời lượng'] 
    },
    useCases: {
      en: [
        { title: 'Cinematic Filmmaking', examples: ['Generating high-fidelity video scenes from text descriptions', 'Animating static images with realistic physics and lighting'] },
        { title: 'Creative Advertising', examples: ['Creating stunning visual effects for product commercials', 'Developing unique social media content with surreal animations'] }
      ],
      vi: [
        { title: 'Làm phim điện ảnh', examples: ['Tạo các cảnh quay video chất lượng cao từ mô tả văn bản', 'Hoạt hóa hình ảnh tĩnh với vật lý và ánh sáng chân thực'] },
        { title: 'Quảng cáo sáng tạo', examples: ['Tạo các hiệu ứng hình ảnh tuyệt đẹp cho quảng cáo sản phẩm', 'Phát triển nội dung mạng xã hội độc đáo với các hoạt ảnh siêu thực'] }
      ]
    },
    affiliateUrl: 'https://lumalabs.ai',
    howToUse: {
      en: [
        'Access the Dream Machine on the Luma Labs website.',
        'Enter a detailed prompt or upload a high-resolution starting image.',
        'Generate the video and refine it using iterative prompting for best results.'
      ],
      vi: [
        'Truy cập Dream Machine trên trang web Luma Labs.',
        'Nhập một câu lệnh chi tiết hoặc tải lên một hình ảnh bắt đầu có độ phân giải cao.',
        'Tạo video và tinh chỉnh nó bằng cách sử dụng các câu lệnh lặp lại để có kết quả tốt nhất.'
      ]
    }
  },
  {
    id: 'kling',
    name: 'Kling AI',
    domain: 'klingai.com',
    logo: getLogo('klingai.com'),
    screenshots: ['https://picsum.photos/seed/kling1/800/450'],
    category: 'video',
    rating: 4.9,
    reviewCount: 3000,
    createdAt: '2026-03-14',
    pricing: { en: 'Free / Subscription', vi: 'Miễn phí / Trả phí' },
    description: {
      en: 'Kling AI is a state-of-the-art video generation model capable of producing cinematic, long-form videos with realistic physics and complex human movements. It sets itself apart by supporting video durations of up to two minutes with incredible visual fidelity and consistency. Kling AI allows users to generate high-quality videos from text prompts or reference images, making it a powerful tool for professional filmmakers and digital storytellers. It is at the forefront of the AI video revolution, offering unprecedented creative possibilities.',
      vi: 'Kling AI là một mô hình tạo video tiên tiến có khả năng tạo ra các video dài, chất lượng điện ảnh với vật lý thực tế và các chuyển động phức tạp của con người. Nó tạo nên sự khác biệt bằng cách hỗ trợ thời lượng video lên đến hai phút với độ trung thực và nhất quán về hình ảnh đáng kinh ngạc. Kling AI cho phép người dùng tạo các video chất lượng cao từ các lời nhắc văn bản hoặc hình ảnh tham chiếu, làm cho nó trở thành một công cụ mạnh mẽ cho các nhà làm phim chuyên nghiệp và những người kể chuyện kỹ thuật số. Nó đang đi đầu trong cuộc cách mạng video AI, mang đến những khả năng sáng tạo chưa từng có.'
    },
    features: { 
      en: ['Long-form video generation (up to 2 mins)', 'Cinematic 1080p resolution', 'Advanced physics simulation', 'Complex human movement'],
      vi: ['Tạo video dài lên đến 2 phút', 'Độ phân giải 1080p chuẩn điện ảnh', 'Mô phỏng vật lý nâng cao', 'Chuyển động con người phức tạp']
    },
    pros: { 
      en: ['Unmatched video duration and cinematic quality for AI video', 'Highly realistic physics and complex character movements', 'Strong consistency across long-form generated sequences'], 
      vi: ['Thời lượng video và chất lượng điện ảnh vô song cho video AI', 'Vật lý thực tế cao và chuyển động nhân vật phức tạp', 'Sự nhất quán mạnh mẽ trên các chuỗi được tạo dạng dài'] 
    },
    cons: { 
      en: ['Access may be limited or require a queue for international users', 'Generating long-form videos requires significant computing time', 'Advanced features often require a paid subscription plan'], 
      vi: ['Truy cập có thể bị hạn chế hoặc yêu cầu hàng đợi cho người dùng quốc tế', 'Tạo video dạng dài đòi hỏi thời gian tính toán đáng kể', 'Các tính năng nâng cao thường yêu cầu gói đăng ký trả phí'] 
    },
    useCases: {
      en: [
        { title: 'Professional Video Production', examples: ['Creating long-form AI videos with consistent characters and scenes', 'Generating cinematic sequences with complex human movements'] },
        { title: 'Digital Storytelling', examples: ['Developing immersive visual narratives for games or films', 'Creating high-quality marketing videos with realistic physics'] }
      ],
      vi: [
        { title: 'Sản xuất video chuyên nghiệp', examples: ['Tạo các video AI dài với các nhân vật và cảnh quay nhất quán', 'Tạo các chuỗi cảnh điện ảnh với các chuyển động phức tạp của con người'] },
        { title: 'Kể chuyện kỹ thuật số', examples: ['Phát triển các câu chuyện hình ảnh nhập vai cho trò chơi hoặc phim', 'Tạo các video marketing chất lượng cao với vật lý chân thực'] }
      ]
    },
    affiliateUrl: 'https://klingai.com',
    howToUse: {
      en: [
        'Sign up for an account on the Kling AI platform.',
        'Input your text prompt or upload a reference image for the video.',
        'Configure the video length and resolution, then start the generation.'
      ],
      vi: [
        'Đăng ký tài khoản trên nền tảng Kling AI.',
        'Nhập câu lệnh văn bản của bạn hoặc tải lên hình ảnh tham chiếu cho video.',
        'Cấu hình độ dài và độ phân giải video, sau đó bắt đầu quá trình tạo.'
      ]
    }
  },
  {
    id: 'canva_video',
    name: 'Canva Video',
    domain: 'canva.com',
    logo: getLogo('canva.com'),
    screenshots: ['https://picsum.photos/seed/canvav1/800/450'],
    category: 'video',
    rating: 4.6,
    reviewCount: 50000,
    createdAt: '2026-01-20',
    pricing: { en: 'Free / Pro', vi: 'Miễn phí / Pro' },
    description: {
      en: 'Canva Video is an intuitive, AI-powered online video editor that empowers anyone to create professional-quality videos with ease. It features a massive library of templates, stock footage, and music, combined with intelligent tools like Magic Design that generate videos from simple text prompts. Canva Video simplifies complex editing tasks with one-click transitions, automated resizing, and AI-driven background removal. It is the perfect solution for social media creators, small businesses, and educators who need to produce high-impact video content quickly.',
      vi: 'Canva Video là một trình chỉnh sửa video trực tuyến trực quan, được hỗ trợ bởi AI, cho phép bất kỳ ai cũng có thể tạo ra các video chất lượng chuyên nghiệp một cách dễ dàng. Nó có một thư viện khổng lồ gồm các mẫu, cảnh quay có sẵn và âm nhạc, kết hợp với các công cụ thông minh như Magic Design tạo video từ các câu lệnh văn bản đơn giản. Canva Video đơn giản hóa các tác vụ chỉnh sửa phức tạp bằng các hiệu ứng chuyển cảnh một lần nhấp, thay đổi kích thước tự động và xóa nền bằng AI. Đây là giải pháp hoàn hảo cho các nhà sáng tạo mạng xã hội, doanh nghiệp nhỏ và nhà giáo dục cần sản xuất nội dung video có tác động cao một cách nhanh chóng.'
    },
    features: { 
      en: ['Magic Design for video', 'Massive template library', 'AI-powered transitions', 'One-click resizing'],
      vi: ['Thiết kế video ma thuật', 'Thư viện mẫu khổng lồ', 'Hiệu ứng chuyển cảnh AI', 'Thay đổi kích thước một chạm']
    },
    pros: { 
      en: ['Extremely user-friendly interface with drag-and-drop simplicity', 'Access to a vast ecosystem of high-quality assets and templates', 'Powerful AI tools that automate repetitive and complex editing tasks'], 
      vi: ['Giao diện cực kỳ thân thiện với người dùng với sự đơn giản kéo và thả', 'Truy cập vào một hệ sinh thái rộng lớn gồm các tài sản và mẫu chất lượng cao', 'Các công cụ AI mạnh mẽ tự động hóa các tác vụ chỉnh sửa lặp đi lặp lại và phức tạp'] 
    },
    cons: { 
      en: ['Advanced professional editing features are limited compared to specialized software', 'High-resolution exports and premium assets require a Canva Pro subscription', 'Performance can occasionally lag when working with very large video projects'], 
      vi: ['Các tính năng chỉnh sửa chuyên nghiệp nâng cao bị hạn chế so với phần mềm chuyên dụng', 'Xuất bản độ phân giải cao và tài sản cao cấp yêu cầu đăng ký Canva Pro', 'Hiệu suất đôi khi có thể bị lag khi làm việc với các dự án video rất lớn'] 
    },
    useCases: {
      en: [
        { title: 'Social Media Marketing', examples: ['Creating catchy TikTok and Reel videos from pre-made templates', 'Generating promotional videos for products using AI Magic Design'] },
        { title: 'Educational Content', examples: ['Developing short instructional videos for online courses', 'Creating engaging video presentations for classroom use'] }
      ],
      vi: [
        { title: 'Marketing mạng xã hội', examples: ['Tạo các video TikTok và Reel hấp dẫn từ các mẫu có sẵn', 'Tạo video quảng cáo cho sản phẩm bằng AI Magic Design'] },
        { title: 'Nội dung giáo dục', examples: ['Phát triển các video hướng dẫn ngắn cho các khóa học trực tuyến', 'Tạo các bài thuyết trình video hấp dẫn để sử dụng trong lớp học'] }
      ]
    },
    affiliateUrl: 'https://canva.com',
    howToUse: {
      en: [
        'Open a video project in Canva and choose a professional template.',
        'Upload your own clips or use AI tools to generate content from text.',
        'Add music, transitions, and text overlays, then export for social media.'
      ],
      vi: [
        'Mở một dự án video trong Canva và chọn một mẫu chuyên nghiệp.',
        'Tải lên các đoạn phim của riêng bạn hoặc sử dụng các công cụ AI để tạo nội dung từ văn bản.',
        'Thêm nhạc, hiệu ứng chuyển cảnh và lớp phủ văn bản, sau đó xuất cho mạng xã hội.'
      ]
    }
  },
  {
    id: 'descript',
    name: 'Descript',
    domain: 'descript.com',
    logo: getLogo('descript.com'),
    screenshots: ['https://picsum.photos/seed/desc1/800/450'],
    category: 'audio',
    rating: 4.8,
    reviewCount: 15000,
    createdAt: '2026-01-15',
    pricing: { en: 'Free / $12/mo', vi: 'Miễn phí / 300.000đ/tháng' },
    description: {
      en: 'Descript is a revolutionary AI-powered media editor that allows users to edit video and audio as easily as a text document. It automatically generates highly accurate transcripts, enabling you to cut, copy, and rearrange media by simply manipulating the text. Descript features groundbreaking tools like Overdub for voice cloning, Studio Sound for professional audio enhancement, and automated filler word removal. It is an essential platform for podcasters, video creators, and marketing teams who want to streamline their post-production workflow.',
      vi: 'Descript là một trình chỉnh sửa phương tiện được hỗ trợ bởi AI mang tính cách mạng, cho phép người dùng chỉnh sửa video và âm thanh dễ dàng như một tài liệu văn bản. Nó tự động tạo ra các bản ghi chép có độ chính xác cao, cho phép bạn cắt, sao chép và sắp xếp lại phương tiện bằng cách thao tác đơn giản trên văn bản. Descript có các công cụ đột phá như Overdub để nhân bản giọng nói, Studio Sound để nâng cao âm thanh chuyên nghiệp và tự động xóa từ thừa. Đây là một nền tảng thiết yếu cho các podcaster, nhà sáng tạo video và nhóm tiếp thị muốn hợp lý hóa quy trình hậu kỳ của họ.'
    },
    features: { 
      en: ['Text-based media editing', 'AI Overdub voice cloning', 'Automatic filler word removal', 'Studio Sound enhancement'],
      vi: ['Chỉnh sửa phương tiện qua văn bản', 'Nhân bản giọng nói Overdub', 'Tự động xóa từ thừa', 'Cải thiện âm thanh Studio Sound']
    },
    pros: { 
      en: ['Revolutionary text-based editing that saves massive amounts of time', 'Exceptional AI-driven audio cleaning and enhancement tools', 'Powerful collaboration features for teams working on media projects'], 
      vi: ['Chỉnh sửa dựa trên văn bản mang tính cách mạng giúp tiết kiệm một lượng lớn thời gian', 'Các công cụ làm sạch và nâng cao âm thanh dựa trên AI đặc biệt', 'Các tính năng cộng tác mạnh mẽ cho các nhóm làm việc trong các dự án phương tiện'] 
    },
    cons: { 
      en: ['The desktop application can be resource-intensive on older hardware', 'There is a learning curve to master advanced AI features like Overdub', 'Transcription accuracy can vary with low-quality audio or heavy accents'], 
      vi: ['Ứng dụng máy tính để bàn có thể tiêu tốn tài nguyên trên phần cứng cũ', 'Có một lộ trình học tập để nắm vững các tính năng AI nâng cao như Overdub', 'Độ chính xác ghi chép có thể thay đổi với âm thanh chất lượng thấp hoặc giọng địa phương nặng'] 
    },
    useCases: {
      en: [
        { title: 'Podcast Editing', examples: ['Editing audio by simply deleting text from the transcript', 'Removing filler words like "um" and "uh" with one click'] },
        { title: 'Video Content Creation', examples: ['Creating social media clips with automatic captions and subtitles', 'Using AI Overdub to fix audio mistakes without re-recording'] }
      ],
      vi: [
        { title: 'Chỉnh sửa Podcast', examples: ['Chỉnh sửa âm thanh bằng cách xóa văn bản khỏi bản ghi chép', 'Xóa các từ thừa như "um" và "uh" chỉ bằng một cú nhấp chuột'] },
        { title: 'Sáng tạo nội dung video', examples: ['Tạo các đoạn phim mạng xã hội với phụ đề tự động', 'Sử dụng AI Overdub để sửa lỗi âm thanh mà không cần thu âm lại'] }
      ]
    },
    affiliateUrl: 'https://descript.com',
    howToUse: {
      en: [
        'Import your audio or video file to generate an automatic transcript.',
        'Edit the media by highlighting and deleting text in the transcript editor.',
        'Apply AI effects like Studio Sound or Overdub and export your project.'
      ],
      vi: [
        'Nhập tệp âm thanh hoặc video của bạn để tạo bản ghi chép tự động.',
        'Chỉnh sửa phương tiện bằng cách đánh dấu và xóa văn bản trong trình chỉnh sửa bản ghi chép.',
        'Áp dụng các hiệu ứng AI như Studio Sound hoặc Overdub và xuất dự án của bạn.'
      ]
    }
  },
  {
    id: 'podcastle',
    name: 'Podcastle',
    domain: 'podcastle.ai',
    logo: getLogo('podcastle.ai'),
    screenshots: ['https://picsum.photos/seed/pod1/800/450'],
    category: 'audio',
    rating: 4.7,
    reviewCount: 5000,
    createdAt: '2026-01-18',
    pricing: { en: 'Free / $14/mo', vi: 'Miễn phí / 350.000đ/tháng' },
    description: {
      en: 'Podcastle is an all-in-one, AI-powered online podcast studio that simplifies the entire production process from recording to editing. It offers high-quality remote multi-track recording, ensuring studio-grade audio regardless of your location. Podcastle features intelligent tools like Magic Dust for automated noise removal, AI-generated voices for text-to-speech, and an intuitive audio editor. It is an ideal solution for independent podcasters and content creators looking for a professional yet accessible platform to produce high-fidelity audio content.',
      vi: 'Podcastle là một studio podcast trực tuyến tất cả trong một, được hỗ trợ bởi AI, giúp đơn giản hóa toàn bộ quy trình sản xuất từ ghi âm đến chỉnh sửa. Nó cung cấp tính năng ghi âm đa kênh từ xa chất lượng cao, đảm bảo âm thanh cấp độ phòng thu bất kể vị trí của bạn. Podcastle có các công cụ thông minh như Magic Dust để tự động xóa tiếng ồn, giọng nói do AI tạo ra để chuyển văn bản thành giọng nói và trình chỉnh sửa âm thanh trực quan. Đây là giải pháp lý tưởng cho các podcaster độc lập và nhà sáng tạo nội dung đang tìm kiếm một nền tảng chuyên nghiệp nhưng dễ tiếp cận để sản xuất nội dung âm thanh độ trung thực cao.'
    },
    features: { 
      en: ['Magic Dust noise removal', 'Remote multi-track recording', 'AI text-to-speech', 'Intuitive audio editor'],
      vi: ['Lọc tạp âm Magic Dust tự động', 'Ghi âm đa kênh từ xa', 'Chuyển văn bản thành giọng nói', 'Trình chỉnh sửa âm thanh trực quan']
    },
    pros: { 
      en: ['Highly intuitive and user-friendly interface for all skill levels', 'Exceptional AI-powered audio enhancement and noise reduction tools', 'Comprehensive all-in-one platform for the entire podcasting workflow'], 
      vi: ['Giao diện cực kỳ trực quan và thân thiện với người dùng cho mọi cấp độ kỹ năng', 'Các công cụ giảm tiếng ồn và nâng cao âm thanh được hỗ trợ bởi AI đặc biệt', 'Nền tảng tất cả trong một toàn diện cho toàn bộ quy trình làm việc podcast'] 
    },
    cons: { 
      en: ['Free version has significant limitations on export formats and quality', 'Advanced AI features and higher-quality recording require a paid plan', 'Mobile application features are currently more limited than the web version'], 
      vi: ['Phiên bản miễn phí có những hạn chế đáng kể về định dạng và chất lượng xuất', 'Các tính năng AI nâng cao và ghi âm chất lượng cao hơn yêu cầu gói trả phí', 'Các tính năng của ứng dụng di động hiện hạn chế hơn so với phiên bản web'] 
    },
    useCases: {
      en: [
        { title: 'Professional Podcasting', examples: ['Recording high-quality remote interviews with AI noise cancellation', 'Using Magic Dust to instantly improve audio quality to studio standards'] },
        { title: 'Audiobook Production', examples: ['Converting written manuscripts into natural-sounding audiobooks', 'Creating multi-speaker audio content for digital storytelling'] }
      ],
      vi: [
        { title: 'Podcasting chuyên nghiệp', examples: ['Ghi âm các cuộc phỏng vấn từ xa chất lượng cao với tính năng khử tiếng ồn AI', 'Sử dụng Magic Dust để cải thiện ngay lập tức chất lượng âm thanh đạt chuẩn phòng thu'] },
        { title: 'Sản xuất sách nói', examples: ['Chuyển đổi các bản thảo viết tay thành sách nói có giọng đọc tự nhiên', 'Tạo nội dung âm thanh nhiều người nói cho kể chuyện kỹ thuật số'] }
      ]
    },
    affiliateUrl: 'https://podcastle.ai',
    howToUse: {
      en: [
        'Start a new recording session or upload your existing audio files.',
        'Apply "Magic Dust" to remove background noise and enhance your voice.',
        'Edit the audio using the intuitive tools and export in high-fidelity formats.'
      ],
      vi: [
        'Bắt đầu một phiên ghi âm mới hoặc tải lên các tệp âm thanh hiện có của bạn.',
        'Áp dụng "Magic Dust" để loại bỏ tiếng ồn nền và nâng cao giọng nói của bạn.',
        'Chỉnh sửa âm thanh bằng các công cụ trực quan và xuất ở các định dạng chất lượng cao.'
      ]
    }
  },
  {
    id: 'claude',
    name: 'Claude',
    domain: 'anthropic.com',
    logo: getLogo('anthropic.com'),
    screenshots: ['https://picsum.photos/seed/claude1/800/450'],
    category: 'writing',
    rating: 4.8,
    reviewCount: 15000,
    createdAt: '2026-02-01',
    pricing: { en: 'Free / $20/mo', vi: 'Miễn phí / 500.000đ/tháng' },
    description: {
      en: 'Claude, developed by Anthropic, is a next-generation AI assistant built with a focus on safety, reliability, and helpfulness. Known for its exceptional ability to process large amounts of information—with context windows reaching up to 200,000 tokens—Claude excels at analyzing complex documents, summarizing long books, and writing nuanced, high-quality prose. It is designed to be more "constitutional" and less prone to harmful outputs compared to other models. Claude 3.5 Sonnet, the latest flagship, offers industry-leading performance in coding, reasoning, and creative writing, often surpassing competitors in benchmarks. Its tone is generally more human-like and less robotic, making it a favorite for creative professionals and researchers who need a sophisticated collaborator for deep intellectual work.',
      vi: 'Claude, do Anthropic phát triển, là một trợ lý AI thế hệ mới được xây dựng tập trung vào sự an toàn, độ tin cậy và tính hữu ích. Được biết đến với khả năng đặc biệt trong việc xử lý lượng lớn thông tin—với cửa sổ ngữ cảnh lên tới 200.000 token—Claude xuất sắc trong việc phân tích các tài liệu phức tạp, tóm tắt các cuốn sách dài và viết văn xuôi chất lượng cao, sắc thái. Nó được thiết kế để mang tính "hiến pháp" hơn và ít có khả năng tạo ra các đầu ra có hại so với các mô hình khác. Claude 3.5 Sonnet, phiên bản hàng đầu mới nhất, cung cấp hiệu suất dẫn đầu ngành trong lập trình, suy luận và viết lách sáng tạo, thường vượt qua các đối thủ cạnh tranh trong các bài kiểm tra chuẩn. Giọng điệu của nó thường giống con người hơn và ít máy móc hơn, khiến nó trở thành lựa chọn yêu thích của các chuyên gia sáng tạo và nhà nghiên cứu, những người cần một cộng tác viên tinh tế cho công việc trí tuệ chuyên sâu.'
    },
    features: {
      en: ['200K Context Window', 'Advanced Reasoning & Coding', 'Artifacts for Real-time Preview', 'Vision Capabilities', 'Constitutional AI Safety'],
      vi: ['Cửa sổ ngữ cảnh 200K', 'Suy luận & Lập trình nâng cao', 'Artifacts để xem trước thời gian thực', 'Khả năng thị giác', 'An toàn AI theo Hiến pháp']
    },
    pros: {
      en: [
        'Superior ability to summarize and analyze extremely long documents',
        'More natural and nuanced writing style compared to competitors',
        'Exceptional coding performance with the Artifacts feature',
        'Strong focus on safety and reducing harmful hallucinations',
        'Clean and intuitive user interface optimized for productivity'
      ],
      vi: [
        'Khả năng tóm tắt và phân tích các tài liệu cực dài vượt trội',
        'Phong cách viết tự nhiên và sắc thái hơn so với các đối thủ',
        'Hiệu suất lập trình đặc biệt với tính năng Artifacts',
        'Tập trung mạnh mẽ vào sự an toàn và giảm thiểu ảo giác có hại',
        'Giao diện người dùng sạch sẽ và trực quan được tối ưu hóa cho năng suất'
      ]
    },
    cons: {
      en: [
        'Availability can be limited in certain geographic regions',
        'Free tier has relatively strict message limits per day',
        'Lacks a built-in image generation tool like DALL-E',
        'Can sometimes be overly cautious or "preachy" due to safety filters',
        'Mobile app is newer and may lack some desktop features'
      ],
      vi: [
        'Khả năng truy cập có thể bị hạn chế ở một số khu vực địa lý',
        'Gói miễn phí có giới hạn tin nhắn tương đối nghiêm ngặt mỗi ngày',
        'Thiếu công cụ tạo hình ảnh tích hợp như DALL-E',
        'Đôi khi có thể quá thận trọng hoặc "giảng giải" do bộ lọc an toàn',
        'Ứng dụng di động mới hơn và có thể thiếu một số tính năng trên máy tính'
      ]
    },
    useCases: {
      en: [
        { title: 'Complex Document Analysis', examples: ['Analyzing 100-page legal contracts for specific clauses', 'Summarizing entire technical manuals into key takeaways'] },
        { title: 'Creative Writing', examples: ['Developing deep character arcs for novels', 'Writing sophisticated marketing copy with a specific brand voice'] }
      ],
      vi: [
        { title: 'Phân tích tài liệu phức tạp', examples: ['Phân tích các hợp đồng pháp lý dài 100 trang để tìm các điều khoản cụ thể', 'Tóm tắt toàn bộ hướng dẫn kỹ thuật thành các điểm chính'] },
        { title: 'Viết lách sáng tạo', examples: ['Phát triển các tuyến nhân vật sâu sắc cho tiểu thuyết', 'Viết nội dung tiếp thị tinh tế với giọng điệu thương hiệu cụ thể'] }
      ]
    },
    affiliateUrl: 'https://claude.ai',
    howToUse: {
      en: [
        'Log in to Claude.ai and start a new conversation.',
        'Upload documents or paste long texts using the attachment icon.',
        'Use the "Artifacts" view to see code, websites, or diagrams rendered side-by-side.',
        'Provide feedback to refine the tone or depth of the generated content.'
      ],
      vi: [
        'Đăng nhập vào Claude.ai và bắt đầu một cuộc trò chuyện mới.',
        'Tải lên tài liệu hoặc dán các văn bản dài bằng biểu tượng đính kèm.',
        'Sử dụng chế độ xem "Artifacts" để xem mã, trang web hoặc sơ đồ được hiển thị cạnh nhau.',
        'Cung cấp phản hồi để tinh chỉnh giọng điệu hoặc độ sâu của nội dung được tạo.'
      ]
    },
    expertTip: {
      en: 'Claude is exceptionally good at following "XML tags" in prompts. Wrap your instructions or data in tags like <instructions> or <data> for better structure.',
      vi: 'Claude cực kỳ giỏi trong việc tuân theo các "thẻ XML" trong câu lệnh. Hãy bọc các hướng dẫn hoặc dữ liệu của bạn trong các thẻ như <instructions> hoặc <data> để có cấu trúc tốt hơn.'
    }
  },
  {
    id: 'midjourney',
    name: 'Midjourney',
    domain: 'midjourney.com',
    logo: getLogo('midjourney.com'),
    screenshots: ['https://picsum.photos/seed/mj1/800/450'],
    category: 'image',
    rating: 4.9,
    reviewCount: 50000,
    createdAt: '2026-01-10',
    pricing: { en: '$10 - $120/mo', vi: '250.000đ - 3.000.000đ/tháng' },
    description: {
      en: 'Midjourney is widely considered the most artistic and high-quality AI image generator available today. Operating primarily through Discord (and now an alpha web interface), it allows users to create breathtaking visuals from simple text descriptions. Unlike other generators that aim for literal accuracy, Midjourney has a distinct "aesthetic" that leans towards painterly, cinematic, and hyper-realistic styles. It is the tool of choice for concept artists, designers, and photographers looking to push the boundaries of visual creativity. With features like "Vary Region" (Inpainting), "Pan," and "Zoom Out," Midjourney provides granular control over the final composition. The latest v6 model offers improved prompt following and incredible detail, making it capable of generating everything from professional logos to complex architectural visualizations.',
      vi: 'Midjourney được coi là công cụ tạo hình ảnh AI có tính nghệ thuật và chất lượng cao nhất hiện nay. Hoạt động chủ yếu thông qua Discord (và hiện đã có giao diện web alpha), nó cho phép người dùng tạo ra các hình ảnh ngoạn mục từ các mô tả văn bản đơn giản. Không giống như các công cụ tạo khác hướng tới sự chính xác theo nghĩa đen, Midjourney có một "thẩm mỹ" riêng biệt nghiêng về phong cách hội họa, điện ảnh và siêu thực. Đây là công cụ được lựa chọn cho các nghệ sĩ ý tưởng, nhà thiết kế và nhiếp ảnh gia muốn phá vỡ các giới hạn của sự sáng tạo thị giác. Với các tính năng như "Vary Region" (Inpainting), "Pan" và "Zoom Out", Midjourney cung cấp khả năng kiểm soát chi tiết đối với bố cục cuối cùng. Mô hình v6 mới nhất cung cấp khả năng tuân thủ câu lệnh được cải thiện và độ chi tiết đáng kinh ngạc.'
    },
    features: {
      en: ['High-fidelity Image Generation', 'Inpainting & Outpainting', 'Style Reference (sref)', 'Character Reference (cref)', 'Web-based Alpha Interface'],
      vi: ['Tạo hình ảnh độ trung thực cao', 'Inpainting & Outpainting', 'Tham chiếu phong cách (sref)', 'Tham chiếu nhân vật (cref)', 'Giao diện Web Alpha']
    },
    pros: {
      en: [
        'Unrivaled artistic quality and aesthetic appeal',
        'Powerful style and character consistency tools',
        'Extremely active community and continuous feature updates',
        'Versatile aspect ratio and stylization controls',
        'Fast generation speeds with "Turbo" mode'
      ],
      vi: [
        'Chất lượng nghệ thuật và sức hấp dẫn thẩm mỹ vô đối',
        'Công cụ nhất quán về phong cách và nhân vật mạnh mẽ',
        'Cộng đồng cực kỳ năng động và cập nhật tính năng liên tục',
        'Kiểm soát tỷ lệ khung hình và phong cách hóa đa năng',
        'Tốc độ tạo nhanh với chế độ "Turbo"'
      ]
    },
    cons: {
      en: [
        'Discord-based workflow can be confusing for new users',
        'No permanent free trial; requires a paid subscription',
        'Steep learning curve for advanced parameters and prompting',
        'Public by default unless on higher-tier "Stealth" plans',
        'Can sometimes struggle with specific text rendering'
      ],
      vi: [
        'Quy trình làm việc trên Discord có thể gây bối rối cho người mới',
        'Không có bản dùng thử miễn phí vĩnh viễn; yêu cầu đăng ký trả phí',
        'Lộ trình học tập dốc cho các tham số và câu lệnh nâng cao',
        'Công khai theo mặc định trừ khi sử dụng các gói "Stealth" cao cấp',
        'Đôi khi có thể gặp khó khăn với việc hiển thị văn bản cụ thể'
      ]
    },
    useCases: {
      en: [
        { title: 'Commercial Design', examples: ['Creating unique brand assets and marketing illustrations', 'Generating high-end product mockups and concept art'] },
        { title: 'Photography & Film', examples: ['Storyboarding cinematic scenes with precise lighting', 'Generating realistic stock-style photography for web use'] }
      ],
      vi: [
        { title: 'Thiết kế thương mại', examples: ['Tạo các tài sản thương hiệu độc đáo và minh họa tiếp thị', 'Tạo các bản dựng sản phẩm cao cấp và nghệ thuật ý tưởng'] },
        { title: 'Nhiếp ảnh & Điện ảnh', examples: ['Xây dựng kịch bản hình ảnh cho các cảnh phim với ánh sáng chính xác', 'Tạo ảnh phong cách stock thực tế để sử dụng trên web'] }
      ]
    },
    affiliateUrl: 'https://midjourney.com',
    howToUse: {
      en: [
        'Join the Midjourney Discord server or use the web interface.',
        'Use the /imagine command followed by your descriptive prompt.',
        'Upscale or create variations of your favorite images using the U and V buttons.',
        'Use parameters like --ar 16:9 for aspect ratio or --stylize to control creativity.'
      ],
      vi: [
        'Tham gia máy chủ Discord Midjourney hoặc sử dụng giao diện web.',
        'Sử dụng lệnh /imagine kèm theo câu lệnh mô tả của bạn.',
        'Phóng to hoặc tạo các biến thể của hình ảnh yêu thích bằng các nút U và V.',
        'Sử dụng các tham số như --ar 16:9 cho tỷ lệ khung hình hoặc --stylize để kiểm soát sự sáng tạo.'
      ]
    },
    expertTip: {
      en: 'Use the --sref parameter followed by an image URL to copy the exact style of an existing image into your new creation.',
      vi: 'Sử dụng tham số --sref kèm theo URL hình ảnh để sao chép chính xác phong cách của một hình ảnh hiện có vào tác phẩm mới của bạn.'
    }
  },
  {
    id: 'github-copilot',
    name: 'GitHub Copilot',
    domain: 'github.com',
    logo: getLogo('github.com'),
    screenshots: ['https://picsum.photos/seed/copilot1/800/450'],
    category: 'coding',
    rating: 4.7,
    reviewCount: 100000,
    createdAt: '2026-01-05',
    pricing: { en: '$10/mo for individuals', vi: '250.000đ/tháng cho cá nhân' },
    description: {
      en: 'GitHub Copilot is the pioneer of AI-powered pair programming, developed by GitHub in collaboration with OpenAI. It integrates directly into popular IDEs like VS Code, JetBrains, and Visual Studio, providing real-time code suggestions as you type. Trained on billions of lines of public code, Copilot understands context across multiple files, allowing it to complete entire functions, write unit tests, and even explain complex code blocks. With the introduction of Copilot Chat, developers can now have a conversational interface to debug issues, refactor code, and ask architectural questions without leaving their editor. It significantly reduces boilerplate work and helps developers stay in "the flow," making it an essential tool for modern software engineering teams.',
      vi: 'GitHub Copilot là công cụ tiên phong trong việc lập trình cặp được hỗ trợ bởi AI, do GitHub hợp tác với OpenAI phát triển. Nó tích hợp trực tiếp vào các IDE phổ biến như VS Code, JetBrains và Visual Studio, cung cấp các gợi ý mã theo thời gian thực khi bạn gõ. Được huấn luyện trên hàng tỷ dòng mã công khai, Copilot hiểu ngữ cảnh trên nhiều tệp, cho phép nó hoàn thành toàn bộ các hàm, viết các bài kiểm tra đơn vị và thậm chí giải thích các khối mã phức tạp. Với việc giới thiệu Copilot Chat, các nhà phát triển hiện có thể có giao diện hội thoại để gỡ lỗi, cấu trúc lại mã và đặt các câu hỏi về kiến trúc mà không cần rời khỏi trình soạn thảo.'
    },
    features: {
      en: ['Real-time Code Autocomplete', 'Copilot Chat in IDE', 'Unit Test Generation', 'Code Refactoring Suggestions', 'Support for 40+ Languages'],
      vi: ['Tự động hoàn thành mã thời gian thực', 'Copilot Chat trong IDE', 'Tạo bài kiểm tra đơn vị', 'Gợi ý cấu trúc lại mã', 'Hỗ trợ hơn 40 ngôn ngữ']
    },
    pros: {
      en: [
        'Drastically increases coding speed by automating boilerplate',
        'Deep integration with the most popular development environments',
        'Learns from your coding style and project context',
        'Excellent at generating repetitive patterns and unit tests',
        'Large community and extensive documentation'
      ],
      vi: [
        'Tăng đáng kể tốc độ lập trình bằng cách tự động hóa mã mẫu',
        'Tích hợp sâu với các môi trường phát triển phổ biến nhất',
        'Học hỏi từ phong cách lập trình và ngữ cảnh dự án của bạn',
        'Xuất sắc trong việc tạo ra các mẫu lặp lại và bài kiểm tra đơn vị',
        'Cộng đồng lớn và tài liệu phong phú'
      ]
    },
    cons: {
      en: [
        'Can sometimes suggest insecure or outdated coding patterns',
        'Requires a stable internet connection for real-time suggestions',
        'Potential for copyright concerns with generated code snippets',
        'Subscription cost can be high for small teams or students',
        'May lead to over-reliance on AI for critical logic'
      ],
      vi: [
        'Đôi khi có thể gợi ý các mẫu mã không an toàn hoặc lỗi thời',
        'Yêu cầu kết nối internet ổn định để có gợi ý thời gian thực',
        'Tiềm ẩn lo ngại về bản quyền với các đoạn mã được tạo',
        'Chi phí đăng ký có thể cao đối với các nhóm nhỏ hoặc sinh viên',
        'Có thể dẫn đến việc quá phụ thuộc vào AI cho các logic quan trọng'
      ]
    },
    useCases: {
      en: [
        { title: 'Rapid Prototyping', examples: ['Generating API endpoints and data models quickly', 'Writing boilerplate for new React components'] },
        { title: 'Learning New Frameworks', examples: ['Getting syntax suggestions for unfamiliar languages', 'Understanding how to use new libraries through examples'] }
      ],
      vi: [
        { title: 'Tạo mẫu nhanh', examples: ['Tạo nhanh các điểm cuối API và mô hình dữ liệu', 'Viết mã mẫu cho các thành phần React mới'] },
        { title: 'Học các Framework mới', examples: ['Nhận gợi ý cú pháp cho các ngôn ngữ lạ', 'Hiểu cách sử dụng các thư viện mới thông qua các ví dụ'] }
      ]
    },
    affiliateUrl: 'https://github.com/features/copilot',
    howToUse: {
      en: [
        'Install the GitHub Copilot extension in your preferred IDE.',
        'Sign in with your GitHub account and activate your subscription.',
        'Start typing code, and press Tab to accept suggestions.',
        'Use Cmd+I (or Ctrl+I) to open Copilot Chat for complex tasks.'
      ],
      vi: [
        'Cài đặt tiện ích mở rộng GitHub Copilot trong IDE ưa thích của bạn.',
        'Đăng nhập bằng tài khoản GitHub và kích hoạt gói đăng ký của bạn.',
        'Bắt đầu gõ mã và nhấn Tab để chấp nhận các gợi ý.',
        'Sử dụng Cmd+I (hoặc Ctrl+I) để mở Copilot Chat cho các tác vụ phức tạp.'
      ]
    },
    expertTip: {
      en: 'Write descriptive comments before your code to "guide" Copilot into generating the exact logic you need.',
      vi: 'Viết các chú thích mô tả trước mã của bạn để "hướng dẫn" Copilot tạo ra đúng logic mà bạn cần.'
    }
  },
  {
    id: 'elevenlabs',
    name: 'ElevenLabs',
    domain: 'elevenlabs.io',
    logo: getLogo('elevenlabs.io'),
    screenshots: ['https://picsum.photos/seed/eleven1/800/450'],
    category: 'audio',
    rating: 4.9,
    reviewCount: 30000,
    createdAt: '2026-01-15',
    pricing: { en: 'Free / $5/mo+', vi: 'Miễn phí / 125.000đ/tháng+' },
    description: {
      en: 'ElevenLabs is the undisputed leader in AI voice synthesis and text-to-speech technology. Its platform allows users to generate incredibly lifelike, emotionally resonant voices in over 29 languages. What sets ElevenLabs apart is its proprietary deep learning models that capture the subtle nuances of human speech, including intonation, pacing, and emotional breathiness. Features like "Instant Voice Cloning" allow users to create a digital twin of any voice from just a minute of audio, while "Professional Voice Cloning" provides studio-quality replicas for long-form content. It is widely used by YouTubers, game developers, and audiobook publishers to create high-quality narration without the need for expensive recording equipment or voice actors.',
      vi: 'ElevenLabs là người dẫn đầu không thể bàn cãi trong công nghệ tổng hợp giọng nói AI và chuyển văn bản thành giọng nói. Nền tảng của nó cho phép người dùng tạo ra các giọng nói cực kỳ sống động, giàu cảm xúc với hơn 29 ngôn ngữ. Điều làm nên sự khác biệt của ElevenLabs là các mô hình học sâu độc quyền nắm bắt được những sắc thái tinh tế của lời nói con người, bao gồm ngữ điệu, nhịp độ và hơi thở cảm xúc. Các tính năng như "Instant Voice Cloning" cho phép người dùng tạo bản sao kỹ thuật số của bất kỳ giọng nói nào chỉ từ một phút âm thanh.'
    },
    features: {
      en: ['Speech Synthesis (TTS)', 'Instant Voice Cloning', 'Professional Voice Cloning', 'Speech-to-Speech', 'AI Dubbing'],
      vi: ['Tổng hợp giọng nói (TTS)', 'Sao chép giọng nói tức thì', 'Sao chép giọng nói chuyên nghiệp', 'Chuyển đổi giọng nói', 'Lồng tiếng AI']
    },
    pros: {
      en: [
        'Most realistic and human-sounding AI voices on the market',
        'Support for a wide range of languages and accents',
        'Incredible voice cloning accuracy with minimal data',
        'Intuitive interface for controlling emotion and stability',
        'Powerful API for developers to integrate into apps'
      ],
      vi: [
        'Giọng nói AI thực tế và giống người nhất trên thị trường',
        'Hỗ trợ nhiều ngôn ngữ và giọng điệu khác nhau',
        'Độ chính xác sao chép giọng nói đáng kinh ngạc với dữ liệu tối thiểu',
        'Giao diện trực quan để kiểm soát cảm xúc và độ ổn định',
        'API mạnh mẽ cho các nhà phát triển tích hợp vào ứng dụng'
      ]
    },
    cons: {
      en: [
        'High-quality cloning requires a paid subscription',
        'Character-based pricing can get expensive for long content',
        'Potential for misuse in creating deepfakes',
        'Some languages have fewer voice options than English',
        'Free tier has very limited character credits'
      ],
      vi: [
        'Sao chép chất lượng cao yêu cầu đăng ký trả phí',
        'Giá dựa trên số lượng ký tự có thể đắt đối với nội dung dài',
        'Tiềm ẩn khả năng lạm dụng để tạo deepfake',
        'Một số ngôn ngữ có ít tùy chọn giọng nói hơn tiếng Anh',
        'Gói miễn phí có giới hạn ký tự rất thấp'
      ]
    },
    useCases: {
      en: [
        { title: 'Content Creation', examples: ['Generating professional narration for YouTube videos', 'Creating realistic character voices for video games'] },
        { title: 'Accessibility', examples: ['Converting blog posts into high-quality audio articles', 'Providing natural-sounding screen readers for the visually impaired'] }
      ],
      vi: [
        { title: 'Sáng tạo nội dung', examples: ['Tạo lời thuyết minh chuyên nghiệp cho video YouTube', 'Tạo giọng nói nhân vật thực tế cho trò chơi điện tử'] },
        { title: 'Khả năng tiếp cận', examples: ['Chuyển đổi bài viết blog thành các bài báo âm thanh chất lượng cao', 'Cung cấp trình đọc màn hình có giọng nói tự nhiên cho người khiếm thị'] }
      ]
    },
    affiliateUrl: 'https://elevenlabs.io',
    howToUse: {
      en: [
        'Choose a pre-made voice or clone your own in the Voice Lab.',
        'Enter your text in the Speech Synthesis box.',
        'Adjust settings like Stability and Clarity to fine-tune the output.',
        'Click Generate and download your high-quality audio file.'
      ],
      vi: [
        'Chọn một giọng nói có sẵn hoặc sao chép giọng nói của riêng bạn trong Voice Lab.',
        'Nhập văn bản của bạn vào ô Tổng hợp giọng nói.',
        'Điều chỉnh các cài đặt như Độ ổn định và Độ rõ nét để tinh chỉnh kết quả.',
        'Nhấp vào Tạo và tải xuống tệp âm thanh chất lượng cao của bạn.'
      ]
    },
    expertTip: {
      en: 'Use the "Speech-to-Speech" feature to record your own performance and then transform it into another voice while keeping your original emotion and timing.',
      vi: 'Sử dụng tính năng "Speech-to-Speech" để ghi lại phần trình bày của chính bạn và sau đó chuyển đổi nó thành một giọng nói khác trong khi vẫn giữ nguyên cảm xúc và nhịp điệu gốc.'
    }
  },
  {
    id: 'notion-ai',
    name: 'Notion AI',
    domain: 'notion.so',
    logo: getLogo('notion.so'),
    screenshots: ['https://picsum.photos/seed/notion1/800/450'],
    category: 'productivity',
    rating: 4.6,
    reviewCount: 45000,
    createdAt: '2026-01-20',
    pricing: { en: '$10/mo (Add-on)', vi: '250.000đ/tháng (Tiện ích bổ sung)' },
    description: {
      en: 'Notion AI is a powerful suite of generative AI tools integrated directly into the popular Notion workspace. It acts as a collaborative partner that can write, summarize, brainstorm, and edit content without you ever having to switch tabs. Whether you are drafting a project proposal, taking meeting notes, or organizing a massive database, Notion AI can help you work faster and more effectively. It can automatically extract action items from notes, translate entire pages into dozens of languages, and even help you fix grammar or change the tone of your writing. By living where your work already happens, Notion AI eliminates the friction of copying and pasting between different AI tools, making it a seamless part of your daily productivity routine.',
      vi: 'Notion AI là một bộ công cụ AI sáng tạo mạnh mẽ được tích hợp trực tiếp vào không gian làm việc Notion phổ biến. Nó đóng vai trò như một đối tác cộng tác có thể viết, tóm tắt, động não và chỉnh sửa nội dung mà bạn không bao giờ phải chuyển tab. Cho dù bạn đang soạn thảo một đề xuất dự án, ghi chép cuộc họp hay tổ chức một cơ sở dữ liệu khổng lồ, Notion AI có thể giúp bạn làm việc nhanh hơn và hiệu quả hơn.'
    },
    features: {
      en: ['AI Writing Assistant', 'Automatic Summarization', 'Action Item Extraction', 'Tone & Grammar Fixer', 'In-place Translation'],
      vi: ['Trợ lý viết AI', 'Tóm tắt tự động', 'Trích xuất mục hành động', 'Sửa giọng điệu & ngữ pháp', 'Dịch thuật tại chỗ']
    },
    pros: {
      en: [
        'Seamlessly integrated into your existing workspace',
        'Excellent at summarizing long pages and meeting notes',
        'Helps overcome writer\'s block with brainstorming tools',
        'Supports a wide range of languages for translation',
        'Simple and intuitive interface that matches Notion\'s design'
      ],
      vi: [
        'Tích hợp liền mạch vào không gian làm việc hiện có của bạn',
        'Xuất sắc trong việc tóm tắt các trang dài và ghi chú cuộc họp',
        'Giúp vượt qua rào cản sáng tạo với các công cụ động não',
        'Hỗ trợ nhiều ngôn ngữ để dịch thuật',
        'Giao diện đơn giản và trực quan phù hợp với thiết kế của Notion'
      ]
    },
    cons: {
      en: [
        'Requires a paid add-on subscription even for Pro users',
        'AI quality can sometimes be less "creative" than standalone models',
        'Limited advanced parameters compared to dedicated AI writers',
        'Can sometimes struggle with complex database automation',
        'No free tier for AI features beyond a limited trial'
      ],
      vi: [
        'Yêu cầu đăng ký tiện ích bổ sung trả phí ngay cả với người dùng Pro',
        'Chất lượng AI đôi khi ít "sáng tạo" hơn các mô hình độc lập',
        'Giới hạn các tham số nâng cao so với các công cụ viết AI chuyên dụng',
        'Đôi khi có thể gặp khó khăn với tự động hóa cơ sở dữ liệu phức tạp',
        'Không có gói miễn phí cho các tính năng AI ngoài bản dùng thử giới hạn'
      ]
    },
    useCases: {
      en: [
        { title: 'Project Management', examples: ['Summarizing project status from multiple meeting notes', 'Generating task lists and timelines from a brief'] },
        { title: 'Knowledge Management', examples: ['Fixing grammar and spelling across an entire wiki', 'Translating company policies for international teams'] }
      ],
      vi: [
        { title: 'Quản lý dự án', examples: ['Tóm tắt trạng thái dự án từ nhiều ghi chú cuộc họp', 'Tạo danh sách công việc và lộ trình từ một bản tóm tắt'] },
        { title: 'Quản lý tri thức', examples: ['Sửa lỗi ngữ pháp và chính tả trên toàn bộ wiki', 'Dịch các chính sách công ty cho các nhóm quốc tế'] }
      ]
    },
    affiliateUrl: 'https://notion.so/product/ai',
    howToUse: {
      en: [
        'Open any Notion page and press Space or type /ai.',
        'Select a prompt like "Summarize" or "Brainstorm ideas".',
        'Highlight existing text to see AI editing options.',
        'Accept, discard, or ask the AI to try again with a different tone.'
      ],
      vi: [
        'Mở bất kỳ trang Notion nào và nhấn Phím cách hoặc gõ /ai.',
        'Chọn một câu lệnh như "Tóm tắt" hoặc "Động não ý tưởng".',
        'Bôi đen văn bản hiện có để xem các tùy chọn chỉnh sửa AI.',
        'Chấp nhận, loại bỏ hoặc yêu cầu AI thử lại với một giọng điệu khác.'
      ]
    },
    expertTip: {
      en: 'Use the "Custom AI Block" to create a permanent summary or action item list that updates as you add more content to the page.',
      vi: 'Sử dụng "Khối AI tùy chỉnh" để tạo một bản tóm tắt hoặc danh sách mục hành động vĩnh viễn tự động cập nhật khi bạn thêm nội dung vào trang.'
    }
  },
  {
    id: 'perplexity',
    name: 'Perplexity',
    domain: 'perplexity.ai',
    logo: getLogo('perplexity.ai'),
    screenshots: ['https://picsum.photos/seed/perp1/800/450'],
    category: 'productivity',
    rating: 4.8,
    reviewCount: 20000,
    createdAt: '2026-01-12',
    pricing: { en: 'Free / $20/mo', vi: 'Miễn phí / 500.000đ/tháng' },
    description: {
      en: 'Perplexity AI is a powerful "answer engine" that combines the conversational capabilities of a chatbot with the real-time information retrieval of a search engine. Unlike traditional search engines that provide a list of links, Perplexity provides direct, cited answers to your questions, pulling from a vast array of web sources. It is designed for researchers, students, and professionals who need accurate, up-to-date information without the clutter of ads and SEO-optimized fluff. With features like "Pro Search," it can ask clarifying questions to narrow down exactly what you are looking for. It also allows users to choose between different underlying models like GPT-4o or Claude 3, providing flexibility in how your answers are generated. Perplexity is the future of information discovery, making research faster and more transparent than ever before.',
      vi: 'Perplexity AI là một "công cụ trả lời" mạnh mẽ kết hợp khả năng hội thoại của một chatbot với khả năng truy xuất thông tin thời gian thực của một công cụ tìm kiếm. Không giống như các công cụ tìm kiếm truyền thống cung cấp một danh sách các liên kết, Perplexity cung cấp các câu trả lời trực tiếp, có trích dẫn cho các câu hỏi của bạn.'
    },
    features: {
      en: ['Real-time Web Search', 'Cited Sources & Footnotes', 'Pro Search (Clarifying Questions)', 'Choice of AI Models', 'File Upload & Analysis'],
      vi: ['Tìm kiếm web thời gian thực', 'Nguồn trích dẫn & Chú thích', 'Pro Search (Câu hỏi làm rõ)', 'Tùy chọn mô hình AI', 'Tải lên & Phân tích tệp']
    },
    pros: {
      en: [
        'Provides direct answers with transparent source citations',
        'Always up-to-date with real-time internet access',
        'Pro Search is excellent for complex, multi-step research',
        'Clean, ad-free interface focused on information',
        'Allows switching between top-tier AI models'
      ],
      vi: [
        'Cung cấp câu trả lời trực tiếp với trích dẫn nguồn minh bạch',
        'Luôn cập nhật với khả năng truy cập internet thời gian thực',
        'Pro Search xuất sắc cho các nghiên cứu phức tạp, nhiều bước',
        'Giao diện sạch sẽ, không quảng cáo tập trung vào thông tin',
        'Cho phép chuyển đổi giữa các mô hình AI hàng đầu'
      ]
    },
    cons: {
      en: [
        'Can sometimes misinterpret sources or hallucinate citations',
        'Free version has limits on Pro Search usage',
        'Not as strong for creative writing as dedicated LLMs',
        'Requires internet access to function effectively',
        'Can be slower than simple chatbots for non-search tasks'
      ],
      vi: [
        'Đôi khi có thể hiểu sai nguồn hoặc ảo giác trích dẫn',
        'Phiên bản miễn phí có giới hạn sử dụng Pro Search',
        'Không mạnh về viết lách sáng tạo như các LLM chuyên dụng',
        'Yêu cầu truy cập internet để hoạt động hiệu quả',
        'Có thể chậm hơn các chatbot đơn giản cho các tác vụ không tìm kiếm'
      ]
    },
    useCases: {
      en: [
        { title: 'Market Research', examples: ['Finding the latest statistics on AI adoption in 2026', 'Comparing competitor features based on recent reviews'] },
        { title: 'Technical Troubleshooting', examples: ['Finding solutions to specific coding errors from forums', 'Summarizing recent documentation for a new library'] }
      ],
      vi: [
        { title: 'Nghiên cứu thị trường', examples: ['Tìm các số liệu thống kê mới nhất về việc áp dụng AI vào năm 2026', 'So sánh các tính năng của đối thủ cạnh tranh dựa trên các đánh giá gần đây'] },
        { title: 'Khắc phục sự cố kỹ thuật', examples: ['Tìm giải pháp cho các lỗi lập trình cụ thể từ các diễn đàn', 'Tóm tắt tài liệu gần đây cho một thư viện mới'] }
      ]
    },
    affiliateUrl: 'https://perplexity.ai',
    howToUse: {
      en: [
        'Type your question in the search box on the homepage.',
        'Select a "Focus" (e.g., Academic, YouTube, Reddit) to narrow the search.',
        'Review the cited answer and click on footnotes to verify sources.',
        'Use the "Related" questions at the bottom to dive deeper into the topic.'
      ],
      vi: [
        'Nhập câu hỏi của bạn vào ô tìm kiếm trên trang chủ.',
        'Chọn một "Focus" (ví dụ: Học thuật, YouTube, Reddit) để thu hẹp tìm kiếm.',
        'Xem câu trả lời có trích dẫn và nhấp vào chú thích để xác minh nguồn.',
        'Sử dụng các câu hỏi "Liên quan" ở dưới cùng để đi sâu hơn vào chủ đề.'
      ]
    },
    expertTip: {
      en: 'Use the "Focus" mode set to "Writing" if you want to use Perplexity as a standard chatbot without it searching the web for every response.',
      vi: 'Sử dụng chế độ "Focus" đặt thành "Writing" nếu bạn muốn sử dụng Perplexity như một chatbot tiêu chuẩn mà không cần nó tìm kiếm web cho mỗi phản hồi.'
    }
  },
  {
    id: 'sora',
    name: 'Sora',
    domain: 'openai.com/sora',
    logo: getLogo('openai.com'),
    screenshots: ['https://picsum.photos/seed/sora1/800/450'],
    category: 'video',
    rating: 4.9,
    reviewCount: 5000,
    createdAt: '2026-02-15',
    pricing: { en: 'Enterprise / Waitlist', vi: 'Doanh nghiệp / Danh sách chờ' },
    description: {
      en: 'Sora is OpenAI\'s groundbreaking text-to-video model that can create realistic and imaginative scenes from text instructions. It is capable of generating videos up to a minute long while maintaining high visual quality and adherence to the user\'s prompt. Sora understands not only what the user has asked for in the prompt, but also how those things exist in the physical world. It can generate complex scenes with multiple characters, specific types of motion, and accurate details of the subject and background. The model has a deep understanding of language, enabling it to accurately interpret prompts and generate compelling characters that express vibrant emotions. Sora can also create multiple shots within a single generated video that accurately persist characters and visual style.',
      vi: 'Sora là mô hình chuyển văn bản thành video đột phá của OpenAI, có thể tạo ra các cảnh thực tế và giàu trí tưởng tượng từ các hướng dẫn văn bản. Nó có khả năng tạo video dài tới một phút trong khi vẫn duy trì chất lượng hình ảnh cao và tuân thủ câu lệnh của người dùng.'
    },
    features: {
      en: ['60-second Video Generation', 'Complex Scene Understanding', 'Multi-shot Consistency', 'High Fidelity Visuals', 'Physical World Simulation'],
      vi: ['Tạo video dài 60 giây', 'Hiểu cảnh phức tạp', 'Nhất quán nhiều cảnh quay', 'Hình ảnh độ trung thực cao', 'Mô phỏng thế giới vật lý']
    },
    pros: {
      en: [
        'Unprecedented video length and quality for AI generation',
        'Deep understanding of physical world dynamics and lighting',
        'Maintains character and style consistency across shots',
        'Capable of generating highly complex and detailed environments',
        'Seamlessly interprets intricate and creative text prompts'
      ],
      vi: [
        'Chiều dài và chất lượng video chưa từng có cho thế hệ AI',
        'Hiểu biết sâu sắc về động lực học thế giới vật lý và ánh sáng',
        'Duy trì sự nhất quán của nhân vật và phong cách qua các cảnh quay',
        'Có khả năng tạo ra các môi trường cực kỳ phức tạp và chi tiết',
        'Diễn giải liền mạch các câu lệnh văn bản phức tạp và sáng tạo'
      ]
    },
    cons: {
      en: [
        'Extremely limited availability (currently red-teaming)',
        'High computational cost for generation',
        'Can sometimes struggle with complex physics (e.g., glass shattering)',
        'Potential for misuse in creating highly realistic deepfakes',
        'No public pricing or general access yet'
      ],
      vi: [
        'Khả năng truy cập cực kỳ hạn chế (hiện đang thử nghiệm bảo mật)',
        'Chi phí tính toán cao để tạo video',
        'Đôi khi có thể gặp khó khăn với vật lý phức tạp (ví dụ: kính vỡ)',
        'Tiềm ẩn khả năng lạm dụng để tạo deepfake cực kỳ thực tế',
        'Chưa có giá công khai hoặc quyền truy cập chung'
      ]
    },
    useCases: {
      en: [
        { title: 'Filmmaking & Storyboarding', examples: ['Creating high-fidelity concept trailers for movies', 'Visualizing complex action sequences before filming'] },
        { title: 'Advertising & Marketing', examples: ['Generating unique and impossible visual effects for ads', 'Rapidly prototyping video concepts for brand campaigns'] }
      ],
      vi: [
        { title: 'Làm phim & Kịch bản hình ảnh', examples: ['Tạo các đoạn giới thiệu ý tưởng chất lượng cao cho phim', 'Trực quan hóa các cảnh hành động phức tạp trước khi quay'] },
        { title: 'Quảng cáo & Tiếp thị', examples: ['Tạo các hiệu ứng hình ảnh độc đáo và không tưởng cho quảng cáo', 'Nhanh chóng tạo mẫu các ý tưởng video cho chiến dịch thương hiệu'] }
      ]
    },
    affiliateUrl: 'https://openai.com/sora',
    howToUse: {
      en: [
        'Currently available to select visual artists and designers for feedback.',
        'Enter a detailed text prompt describing the scene, motion, and style.',
        'The model generates a high-resolution video based on the instructions.',
        'Review and refine the prompt for better adherence to physical laws.'
      ],
      vi: [
        'Hiện có sẵn cho một số nghệ sĩ thị giác và nhà thiết kế được chọn để lấy phản hồi.',
        'Nhập một câu lệnh văn bản chi tiết mô tả cảnh, chuyển động và phong cách.',
        'Mô hình tạo ra một video độ phân giải cao dựa trên các hướng dẫn.',
        'Xem xét và tinh chỉnh câu lệnh để tuân thủ tốt hơn các quy luật vật lý.'
      ]
    },
    expertTip: {
      en: 'When Sora becomes public, focus on describing the camera movement (e.g., "cinematic tracking shot") to get more professional-looking results.',
      vi: 'Khi Sora trở nên công khai, hãy tập trung vào việc mô tả chuyển động của camera (ví dụ: "cinematic tracking shot") để có kết quả trông chuyên nghiệp hơn.'
    }
  },
  {
    id: 'canva-ai',
    name: 'Canva AI',
    domain: 'canva.com',
    logo: getLogo('canva.com'),
    screenshots: ['https://picsum.photos/seed/canva1/800/450'],
    category: 'productivity',
    rating: 4.7,
    reviewCount: 150000,
    createdAt: '2026-01-08',
    pricing: { en: 'Free / $12/mo', vi: 'Miễn phí / 300.000đ/tháng' },
    description: {
      en: 'Canva AI (Magic Studio) is a comprehensive suite of AI-powered design tools integrated directly into the world\'s most popular graphic design platform. It democratizes high-end design by allowing anyone to create professional visuals, videos, and presentations using simple AI commands. Features like "Magic Media" generate images and videos from text, while "Magic Edit" allows users to swap or add objects in photos effortlessly. "Magic Design" can build entire presentation decks or social media posts from a single prompt, complete with layout, text, and imagery. By combining AI with Canva\'s massive library of templates and assets, Magic Studio makes the creative process faster, more intuitive, and accessible to non-designers.',
      vi: 'Canva AI (Magic Studio) là một bộ công cụ thiết kế toàn diện được hỗ trợ bởi AI được tích hợp trực tiếp vào nền tảng thiết kế đồ họa phổ biến nhất thế giới. Nó dân chủ hóa thiết kế cao cấp bằng cách cho phép bất kỳ ai cũng có thể tạo ra các hình ảnh, video và bản thuyết trình chuyên nghiệp bằng các lệnh AI đơn giản.'
    },
    features: {
      en: ['Magic Media (Text-to-Image/Video)', 'Magic Edit & Eraser', 'Magic Design for Presentations', 'AI Brand Voice', 'Magic Switch (Instant Resizing)'],
      vi: ['Magic Media (Văn bản thành Ảnh/Video)', 'Magic Edit & Eraser', 'Magic Design cho thuyết trình', 'Giọng điệu thương hiệu AI', 'Magic Switch (Đổi kích thước tức thì)']
    },
    pros: {
      en: [
        'Extremely easy to use for non-designers',
        'All-in-one platform for social media, print, and video',
        'Massive library of templates and stock assets',
        'Seamless integration of AI tools into existing workflows',
        'Affordable pricing for the value provided'
      ],
      vi: [
        'Cực kỳ dễ sử dụng cho những người không phải nhà thiết kế',
        'Nền tảng tất cả trong một cho mạng xã hội, in ấn và video',
        'Thư viện mẫu và tài sản stock khổng lồ',
        'Tích hợp liền mạch các công cụ AI vào quy trình làm việc hiện có',
        'Giá cả phải chăng so với giá trị mang lại'
      ]
    },
    cons: {
      en: [
        'AI generation quality can be less "artistic" than Midjourney',
        'Limited advanced control for professional graphic designers',
        'Some AI features require a Canva Pro subscription',
        'Can sometimes produce generic-looking designs',
        'Mobile app can be cluttered with so many features'
      ],
      vi: [
        'Chất lượng tạo AI có thể kém "nghệ thuật" hơn Midjourney',
        'Hạn chế khả năng kiểm soát nâng cao cho các nhà thiết kế đồ họa chuyên nghiệp',
        'Một số tính năng AI yêu cầu đăng ký Canva Pro',
        'Đôi khi có thể tạo ra các thiết kế trông có vẻ phổ thông',
        'Ứng dụng di động có thể bị rối mắt với quá nhiều tính năng'
      ]
    },
    useCases: {
      en: [
        { title: 'Social Media Marketing', examples: ['Generating a week\'s worth of Instagram posts in minutes', 'Creating eye-catching YouTube thumbnails with AI assets'] },
        { title: 'Business Presentations', examples: ['Building professional pitch decks from a text outline', 'Instantly resizing presentations for different platforms'] }
      ],
      vi: [
        { title: 'Tiếp thị mạng xã hội', examples: ['Tạo nội dung bài đăng Instagram cho cả tuần trong vài phút', 'Tạo hình thu nhỏ YouTube bắt mắt với các tài sản AI'] },
        { title: 'Thuyết trình kinh doanh', examples: ['Xây dựng các bản thuyết trình chuyên nghiệp từ một đề cương văn bản', 'Tức thời thay đổi kích thước bản thuyết trình cho các nền tảng khác nhau'] }
      ]
    },
    affiliateUrl: 'https://canva.com/magic-studio',
    howToUse: {
      en: [
        'Open a new design and look for the "Magic Studio" icon.',
        'Use "Magic Media" to generate unique images for your project.',
        'Try "Magic Design" by entering a prompt for a presentation or post.',
        'Use "Magic Switch" to instantly transform your design into different formats.'
      ],
      vi: [
        'Mở một thiết kế mới và tìm biểu tượng "Magic Studio".',
        'Sử dụng "Magic Media" để tạo các hình ảnh độc đáo cho dự án của bạn.',
        'Thử "Magic Design" bằng cách nhập câu lệnh cho một bản thuyết trình hoặc bài đăng.',
        'Sử dụng "Magic Switch" để tức thời chuyển đổi thiết kế của bạn sang các định dạng khác nhau.'
      ]
    },
    expertTip: {
      en: 'Use the "Brand Voice" feature to ensure all AI-generated text matches your company\'s specific tone and style across all designs.',
      vi: 'Sử dụng tính năng "Giọng điệu thương hiệu" để đảm bảo tất cả văn bản do AI tạo ra đều phù hợp với tông giọng và phong cách cụ thể của công ty bạn trên tất cả các thiết kế.'
    }
  },
  {
    id: 'runway',
    name: 'Runway',
    domain: 'runwayml.com',
    logo: getLogo('runwayml.com'),
    screenshots: ['https://picsum.photos/seed/runway1/800/450'],
    category: 'video',
    rating: 4.8,
    reviewCount: 25000,
    createdAt: '2026-01-05',
    pricing: { en: 'Free / $12/mo+', vi: 'Miễn phí / 300.000đ/tháng+' },
    description: {
      en: 'Runway is a leading AI research company focused on creative tools for filmmakers and artists. Its flagship product, Gen-3 Alpha, is a powerful video generation model that can create high-quality cinematic clips from text, images, or existing videos. Runway offers a comprehensive suite of "AI Magic Tools" that allow for advanced video editing tasks like removing backgrounds (Green Screen), tracking objects, and generating textures. The platform is designed for professional workflows, offering granular control over motion, camera angles, and style. Runway is at the forefront of the "AI film" movement, providing tools that were previously only available to major Hollywood studios to independent creators worldwide.',
      vi: 'Runway là một công ty nghiên cứu AI hàng đầu tập trung vào các công cụ sáng tạo cho các nhà làm phim và nghệ sĩ. Sản phẩm hàng đầu của nó, Gen-3 Alpha, là một mô hình tạo video mạnh mẽ có thể tạo ra các đoạn phim điện ảnh chất lượng cao từ văn bản, hình ảnh hoặc video hiện có.'
    },
    features: {
      en: ['Gen-3 Alpha Text-to-Video', 'Image-to-Video Generation', 'AI Green Screen', 'Motion Brush Control', 'Multi-Motion Brush'],
      vi: ['Gen-3 Alpha Văn bản thành Video', 'Tạo Video từ Ảnh', 'AI Green Screen', 'Kiểm soát Motion Brush', 'Multi-Motion Brush']
    },
    pros: {
      en: [
        'Industry-leading video generation quality and realism',
        'Granular control over specific areas of motion with Motion Brush',
        'Comprehensive suite of professional video editing tools',
        'Fast generation times with high-resolution output',
        'Active community and frequent model updates'
      ],
      vi: [
        'Chất lượng và tính thực tế của thế hệ video dẫn đầu ngành',
        'Kiểm soát chi tiết các khu vực chuyển động cụ thể với Motion Brush',
        'Bộ công cụ chỉnh sửa video chuyên nghiệp toàn diện',
        'Thời gian tạo nhanh với đầu ra độ phân giải cao',
        'Cộng đồng năng động và cập nhật mô hình thường xuyên'
      ]
    },
    cons: {
      en: [
        'Requires a paid subscription for high-resolution and watermark-free video',
        'Can be complex for beginners due to many advanced features',
        'Credits can be consumed quickly for long video projects',
        'Occasional artifacts in complex motion sequences',
        'Mobile experience is not as powerful as the desktop web app'
      ],
      vi: [
        'Yêu cầu đăng ký trả phí cho video độ phân giải cao và không có watermark',
        'Có thể phức tạp cho người mới bắt đầu do có nhiều tính năng nâng cao',
        'Điểm credit có thể bị tiêu tốn nhanh chóng cho các dự án video dài',
        'Đôi khi có lỗi hình ảnh trong các chuỗi chuyển động phức tạp',
        'Trải nghiệm di động không mạnh mẽ bằng ứng dụng web trên máy tính'
      ]
    },
    useCases: {
      en: [
        { title: 'Visual Effects (VFX)', examples: ['Removing complex backgrounds from moving shots instantly', 'Generating realistic environmental textures for 3D scenes'] },
        { title: 'Content Creation', examples: ['Creating high-quality B-roll for YouTube videos', 'Generating social media teasers from static product images'] }
      ],
      vi: [
        { title: 'Hiệu ứng hình ảnh (VFX)', examples: ['Loại bỏ các nền phức tạp khỏi các cảnh quay chuyển động ngay lập tức', 'Tạo các kết cấu môi trường thực tế cho các cảnh 3D'] },
        { title: 'Sáng tạo nội dung', examples: ['Tạo các cảnh quay B-roll chất lượng cao cho video YouTube', 'Tạo các đoạn giới thiệu mạng xã hội từ hình ảnh sản phẩm tĩnh'] }
      ]
    },
    affiliateUrl: 'https://runwayml.com',
    howToUse: {
      en: [
        'Log in to Runway and select Gen-3 Alpha for video generation.',
        'Enter your text prompt or upload an image as a starting point.',
        'Use the Motion Brush to define which parts of the image should move.',
        'Adjust camera settings and style presets before clicking Generate.'
      ],
      vi: [
        'Đăng nhập vào Runway và chọn Gen-3 Alpha để tạo video.',
        'Nhập câu lệnh văn bản hoặc tải lên một hình ảnh làm điểm bắt đầu.',
        'Sử dụng Motion Brush để xác định phần nào của hình ảnh sẽ chuyển động.',
        'Điều chỉnh cài đặt camera và các thiết lập phong cách trước khi nhấp vào Tạo.'
      ]
    },
    expertTip: {
      en: 'Combine "Image-to-Video" with a high-quality Midjourney image for the most consistent and visually stunning AI video results.',
      vi: 'Kết hợp "Image-to-Video" với một hình ảnh Midjourney chất lượng cao để có kết quả video AI nhất quán và ấn tượng nhất.'
    }
  },
  {
    id: 'cursor',
    name: 'Cursor',
    domain: 'cursor.com',
    logo: getLogo('cursor.com'),
    screenshots: ['https://picsum.photos/seed/cursor1/800/450'],
    category: 'coding',
    rating: 4.9,
    reviewCount: 12000,
    createdAt: '2026-02-01',
    pricing: { en: 'Free / $20/mo', vi: 'Miễn phí / 500.000đ/tháng' },
    description: {
      en: 'Cursor is an AI-first code editor built on top of VS Code, designed to make developers significantly more productive. Unlike simple extensions, Cursor is deeply integrated with AI models like Claude 3.5 Sonnet and GPT-4o, allowing it to understand your entire codebase. It features "Composer," a powerful multi-file editing mode where you can describe a feature, and Cursor will write the code across multiple files simultaneously. It can debug errors by reading your terminal output, refactor large sections of code with a single command, and provide context-aware answers to any question about your project. Cursor is rapidly becoming the preferred editor for developers who want a seamless, AI-native coding experience that feels like having a senior engineer sitting right next to you.',
      vi: 'Cursor là một trình soạn thảo mã ưu tiên AI được xây dựng trên nền tảng VS Code, được thiết kế để giúp các nhà phát triển làm việc hiệu quả hơn đáng kể. Không giống như các tiện ích mở rộng đơn giản, Cursor được tích hợp sâu với các mô hình AI như Claude 3.5 Sonnet và GPT-4o, cho phép nó hiểu toàn bộ mã nguồn của bạn.'
    },
    features: {
      en: ['AI Composer (Multi-file editing)', 'Codebase Indexing & Search', 'Terminal Error Debugging', 'Inline Code Generation', 'Model Switching (Claude/GPT)'],
      vi: ['AI Composer (Chỉnh sửa nhiều tệp)', 'Lập chỉ mục & Tìm kiếm mã nguồn', 'Gỡ lỗi Terminal', 'Tạo mã trực tiếp', 'Chuyển đổi mô hình (Claude/GPT)']
    },
    pros: {
      en: [
        'Unrivaled multi-file editing capabilities with Composer',
        'Deep understanding of project context through codebase indexing',
        'Seamless transition for VS Code users (supports all extensions)',
        'Extremely fast and intuitive AI-powered refactoring',
        'Direct integration with the latest and most powerful LLMs'
      ],
      vi: [
        'Khả năng chỉnh sửa nhiều tệp vô đối với tính năng Composer',
        'Hiểu biết sâu sắc về ngữ cảnh dự án thông qua lập chỉ mục mã nguồn',
        'Chuyển đổi liền mạch cho người dùng VS Code (hỗ trợ tất cả tiện ích)',
        'Cấu trúc lại mã bằng AI cực nhanh và trực quan',
        'Tích hợp trực tiếp với các LLM mới nhất và mạnh mẽ nhất'
      ]
    },
    cons: {
      en: [
        'Requires a subscription for unlimited use of top-tier models',
        'Can be resource-intensive for very large codebases',
        'Requires switching from standard VS Code to the Cursor fork',
        'AI suggestions still require careful human review',
        'Some features may feel overwhelming for beginner coders'
      ],
      vi: [
        'Yêu cầu đăng ký để sử dụng không giới hạn các mô hình hàng đầu',
        'Có thể tốn tài nguyên đối với các mã nguồn cực lớn',
        'Yêu cầu chuyển từ VS Code tiêu chuẩn sang bản phân nhánh Cursor',
        'Các gợi ý AI vẫn cần sự xem xét cẩn thận của con người',
        'Một số tính năng có thể gây choáng ngợp cho người mới lập trình'
      ]
    },
    useCases: {
      en: [
        { title: 'Building New Features', examples: ['Describing a new API endpoint and having Cursor create the route, controller, and tests', 'Adding a new UI component and its styles across multiple files'] },
        { title: 'Bug Fixing & Refactoring', examples: ['Pasting a terminal error and letting Cursor find and fix the root cause', 'Converting a large class-based component to functional hooks'] }
      ],
      vi: [
        { title: 'Xây dựng tính năng mới', examples: ['Mô tả một điểm cuối API mới và để Cursor tạo route, controller và các bài kiểm tra', 'Thêm một thành phần UI mới và các kiểu dáng của nó trên nhiều tệp'] },
        { title: 'Sửa lỗi & Cấu trúc lại', examples: ['Dán một lỗi terminal và để Cursor tìm và khắc phục nguyên nhân gốc rễ', 'Chuyển đổi một thành phần dựa trên lớp lớn sang functional hooks'] }
      ]
    },
    affiliateUrl: 'https://cursor.com',
    howToUse: {
      en: [
        'Download and install Cursor from cursor.com.',
        'Import your VS Code extensions and settings for a familiar feel.',
        'Use Cmd+K to generate or edit code in-line.',
        'Use Cmd+L to chat with your codebase or Cmd+I for the Composer mode.'
      ],
      vi: [
        'Tải xuống và cài đặt Cursor từ cursor.com.',
        'Nhập các tiện ích mở rộng và cài đặt VS Code của bạn để có cảm giác quen thuộc.',
        'Sử dụng Cmd+K để tạo hoặc chỉnh sửa mã trực tiếp.',
        'Sử dụng Cmd+L để chat với mã nguồn hoặc Cmd+I cho chế độ Composer.'
      ]
    },
    expertTip: {
      en: 'Use the "@" symbol in the chat to reference specific files, folders, or even documentation URLs to give the AI precise context.',
      vi: 'Sử dụng ký hiệu "@" trong ô chat để tham chiếu các tệp, thư mục cụ thể hoặc thậm chí là URL tài liệu để cung cấp cho AI ngữ cảnh chính xác.'
    }
  },
  {
    id: 'tome',
    name: 'Tome',
    domain: 'tome.app',
    logo: getLogo('tome.app'),
    screenshots: ['https://picsum.photos/seed/tome1/800/450'],
    category: 'productivity',
    rating: 4.6,
    reviewCount: 10000,
    createdAt: '2026-01-25',
    pricing: { en: 'Free / $8/mo', vi: 'Miễn phí / 200.000đ/tháng' },
    description: {
      en: 'Tome is an innovative AI-powered storytelling and presentation platform that helps users transform raw ideas into compelling, interactive narratives. It uses generative AI to automatically build entire presentation structures, write engaging content, and generate relevant visuals from simple text prompts. Tome features dynamic, responsive layouts that look beautiful on any device and support live web embeds for a truly interactive experience. It is a powerful tool for professionals and students who want to create high-impact presentations with minimal manual effort.',
      vi: 'Tome là một nền tảng kể chuyện và thuyết trình được hỗ trợ bởi AI sáng tạo giúp người dùng biến các ý tưởng thô thành các câu chuyện tương tác, hấp dẫn. Nó sử dụng AI sáng tạo để tự động xây dựng toàn bộ cấu trúc bài thuyết trình, viết nội dung hấp dẫn và tạo ra các hình ảnh liên quan từ các câu lệnh văn bản đơn giản. Tome có các bố cục năng động, phản hồi tốt trông đẹp mắt trên mọi thiết bị và hỗ trợ nhúng web trực tiếp cho trải nghiệm thực sự tương tác. Đây là một công cụ mạnh mẽ cho các chuyên gia và sinh viên muốn tạo ra các bản thuyết trình có tác động cao với nỗ lực thủ công tối thiểu.'
    },
    features: { 
      en: ['Generative storytelling', 'Dynamic interactive layouts', 'AI-generated visuals', 'Live web embeds'],
      vi: ['Kể chuyện sáng tạo bằng AI', 'Bố cục tương tác năng động', 'Hình ảnh minh họa bằng AI', 'Nhúng nội dung web trực tiếp']
    },
    pros: { 
      en: ['Incredibly fast generation of professional and interactive presentations', 'Modern, sleek design aesthetic that stands out from traditional tools', 'Powerful AI assistance for both content writing and visual creation'], 
      vi: ['Tạo cực nhanh các bản thuyết trình chuyên nghiệp và tương tác', 'Thẩm mỹ thiết kế hiện đại, bóng bẩy nổi bật so với các công cụ truyền thống', 'Hỗ trợ AI mạnh mẽ cho cả việc viết nội dung và tạo hình ảnh'] 
    },
    cons: { 
      en: ['The mobile viewing experience can occasionally be inconsistent', 'Export options are currently more limited compared to traditional presentation software', 'Advanced customization of AI-generated layouts can sometimes be restricted'], 
      vi: ['Trải nghiệm xem trên thiết bị di động đôi khi có thể không nhất quán', 'Các tùy chọn xuất hiện hạn chế hơn so với phần mềm thuyết trình truyền thống', 'Tùy chỉnh nâng cao các bố cục do AI tạo ra đôi khi có thể bị hạn chế'] 
    },
    useCases: {
      en: [
        { title: 'Interactive Storytelling', examples: ['Creating dynamic, visually rich presentations for digital products', 'Developing engaging reports that combine text, images, and live embeds'] },
        { title: 'Pitch Deck Creation', examples: ['Building persuasive startup pitch decks with AI-generated visuals', 'Creating professional portfolios that stand out with modern design'] }
      ],
      vi: [
        { title: 'Kể chuyện tương tác', examples: ['Tạo các bài thuyết trình năng động, giàu hình ảnh cho các sản phẩm kỹ thuật số', 'Phát triển các báo cáo hấp dẫn kết hợp văn bản, hình ảnh và các nhúng trực tiếp'] },
        { title: 'Tạo Pitch Deck', examples: ['Xây dựng các bộ hồ sơ gọi vốn thuyết phục với hình ảnh do AI tạo ra', 'Tạo các danh mục đầu tư chuyên nghiệp nổi bật với thiết kế hiện đại'] }
      ]
    },
    affiliateUrl: 'https://tome.app',
    howToUse: {
      en: [
        'Enter a prompt describing the story or presentation you want to create.',
        'Let the AI generate the initial structure, text, and relevant images.',
        'Customize the layout and add interactive elements before sharing the link.'
      ],
      vi: [
        'Nhập một câu lệnh mô tả câu chuyện hoặc bài thuyết trình bạn muốn tạo.',
        'Để AI tạo cấu trúc ban đầu, văn bản và hình ảnh liên quan.',
        'Tùy chỉnh bố cục và thêm các yếu tố tương tác trước khi chia sẻ liên kết.'
      ]
    }
  },
  {
    id: 'jasper',
    name: 'Jasper',
    domain: 'jasper.ai',
    logo: getLogo('jasper.ai'),
    screenshots: ['https://picsum.photos/seed/jasper1/800/450'],
    category: 'writing',
    rating: 4.8,
    reviewCount: 15000,
    createdAt: '2026-01-10',
    pricing: { en: 'Starts at $39/mo', vi: 'Từ 1.000.000đ/tháng' },
    description: {
      en: 'Jasper is an enterprise-grade AI content platform designed to help marketing teams create high-quality, on-brand content at scale. It offers a wide range of templates for blog posts, social media, emails, and ad copy, all powered by advanced language models. Jasper stands out with its "Brand Voice" feature, which allows companies to train the AI on their specific tone and style. It also includes powerful collaboration tools and integrations with popular marketing software, making it a top choice for professional content creators and agencies.',
      vi: 'Jasper là một nền tảng nội dung AI cấp doanh nghiệp được thiết kế để giúp các nhóm marketing tạo ra nội dung chất lượng cao, đúng thương hiệu ở quy mô lớn. Nó cung cấp một loạt các mẫu cho bài viết blog, mạng xã hội, email và bản sao quảng cáo, tất cả đều được hỗ trợ bởi các mô hình ngôn ngữ tiên tiến. Jasper nổi bật với tính năng "Brand Voice", cho phép các công ty huấn luyện AI theo tông giọng và phong cách cụ thể của họ. Nó cũng bao gồm các công cụ cộng tác mạnh mẽ và tích hợp với các phần mềm marketing phổ biến, khiến nó trở thành lựa chọn hàng đầu cho các nhà sáng tạo nội dung chuyên nghiệp và các đại lý.'
    },
    features: {
      en: ['Brand Voice', 'Campaign Builder', 'Art Generation', 'SEO Mode'],
      vi: ['Giọng điệu thương hiệu', 'Trình tạo chiến dịch', 'Tạo ảnh nghệ thuật', 'Chế độ tối ưu SEO']
    },
    pros: {
      en: ['Excellent for maintaining consistent brand voice', 'Wide variety of templates for different content types', 'Powerful collaboration features for marketing teams'],
      vi: ['Tuyệt vời để duy trì giọng điệu thương hiệu nhất quán', 'Đa dạng các mẫu cho nhiều loại nội dung khác nhau', 'Tính năng cộng tác mạnh mẽ cho các nhóm marketing']
    },
    cons: {
      en: ['Higher price point compared to individual tools', 'Can sometimes produce generic content if not guided well', 'Requires some time to set up brand voice correctly'],
      vi: ['Mức giá cao hơn so với các công cụ cá nhân', 'Đôi khi có thể tạo ra nội dung chung chung nếu không được hướng dẫn tốt', 'Cần thời gian để thiết lập giọng điệu thương hiệu chính xác']
    },
    useCases: {
      en: [
        { title: 'Marketing Campaigns', examples: ['Generating a full month of social media posts in minutes', 'Creating consistent ad copy across multiple platforms'] },
        { title: 'Blog Writing', examples: ['Drafting long-form articles with SEO optimization', 'Generating creative headlines and meta descriptions'] }
      ],
      vi: [
        { title: 'Chiến dịch Marketing', examples: ['Tạo nội dung mạng xã hội cho cả tháng chỉ trong vài phút', 'Tạo bản sao quảng cáo nhất quán trên nhiều nền tảng'] },
        { title: 'Viết Blog', examples: ['Soạn thảo các bài viết dài với tối ưu hóa SEO', 'Tạo các tiêu đề sáng tạo và mô tả meta'] }
      ]
    },
    affiliateUrl: 'https://jasper.ai',
    howToUse: {
      en: [
        'Set up your Brand Voice by providing examples of your content.',
        'Choose a template or use the "Chat" feature to start a new project.',
        'Refine the AI output and use the SEO mode to optimize for search engines.'
      ],
      vi: [
        'Thiết lập Giọng điệu thương hiệu bằng cách cung cấp các ví dụ về nội dung của bạn.',
        'Chọn một mẫu hoặc sử dụng tính năng "Chat" để bắt đầu dự án mới.',
        'Tinh chỉnh kết quả AI và sử dụng chế độ SEO để tối ưu hóa cho công cụ tìm kiếm.'
      ]
    },
    expertTip: {
      en: 'Use the "Campaigns" feature to generate a cohesive set of assets for a product launch or event in one go.',
      vi: 'Sử dụng tính năng "Chiến dịch" để tạo một bộ tài sản gắn kết cho một buổi ra mắt sản phẩm hoặc sự kiện chỉ trong một lần.'
    }
  },
  {
    id: 'copyai',
    name: 'Copy.ai',
    domain: 'copy.ai',
    logo: getLogo('copy.ai'),
    screenshots: ['https://picsum.photos/seed/copy1/800/450'],
    category: 'writing',
    rating: 4.7,
    reviewCount: 12000,
    createdAt: '2026-01-05',
    pricing: { en: 'Free / $36/mo', vi: 'Miễn phí / 900.000đ/tháng' },
    description: {
      en: 'Copy.ai is a versatile AI writing assistant that specializes in generating high-converting marketing copy and creative content. It offers over 90 tools and templates to help users overcome writer\'s block and produce engaging text for social media, blogs, and websites. Copy.ai is known for its simplicity and ease of use, making it a favorite among small business owners and freelancers. It leverages advanced AI to understand context and tone, ensuring that the generated content resonates with the target audience.',
      vi: 'Copy.ai là một trợ lý viết lách AI đa năng chuyên tạo ra các bản sao marketing có tỷ lệ chuyển đổi cao và nội dung sáng tạo. Nó cung cấp hơn 90 công cụ và mẫu để giúp người dùng vượt qua rào cản sáng tạo và tạo ra văn bản hấp dẫn cho mạng xã hội, blog và trang web. Copy.ai nổi tiếng với sự đơn giản và dễ sử dụng, khiến nó trở thành lựa chọn yêu thích của các chủ doanh nghiệp nhỏ và những người làm tự do. Nó tận dụng AI tiên tiến để hiểu ngữ cảnh và tông giọng, đảm bảo rằng nội dung được tạo ra cộng hưởng với đối tượng mục tiêu.'
    },
    features: {
      en: ['90+ writing tools', 'Workflows', 'Brand Voice', 'Team collaboration'],
      vi: ['Hơn 90 công cụ viết', 'Quy trình làm việc tự động', 'Giọng điệu thương hiệu', 'Cộng tác nhóm']
    },
    pros: {
      en: ['Very intuitive and easy to get started', 'Excellent for short-form marketing copy', 'Generous free tier for individual users'],
      vi: ['Rất trực quan và dễ dàng bắt đầu', 'Tuyệt vời cho các bản sao marketing dạng ngắn', 'Gói miễn phí hào phóng cho người dùng cá nhân']
    },
    cons: {
      en: ['Long-form content may require more manual editing', 'Can sometimes produce repetitive suggestions', 'Advanced workflow features have a learning curve'],
      vi: ['Nội dung dạng dài có thể yêu cầu chỉnh sửa thủ công nhiều hơn', 'Đôi khi có thể đưa ra các gợi ý lặp lại', 'Các tính năng quy trình làm việc nâng cao có lộ trình học tập']
    },
    useCases: {
      en: [
        { title: 'Social Media Management', examples: ['Generating engaging Instagram captions and hashtags', 'Creating catchy LinkedIn posts for professional networking'] },
        { title: 'Email Marketing', examples: ['Drafting persuasive subject lines and email body copy', 'Generating personalized cold outreach messages'] }
      ],
      vi: [
        { title: 'Quản lý mạng xã hội', examples: ['Tạo các chú thích và hashtag Instagram hấp dẫn', 'Tạo các bài đăng LinkedIn bắt mắt để kết nối chuyên nghiệp'] },
        { title: 'Email Marketing', examples: ['Soạn thảo các tiêu đề thuyết phục và nội dung email', 'Tạo các tin nhắn tiếp cận khách hàng cá nhân hóa'] }
      ]
    },
    affiliateUrl: 'https://copy.ai',
    howToUse: {
      en: [
        'Select a tool or template based on your writing goal.',
        'Provide a brief description of your product or topic.',
        'Choose from the generated options and refine the text to fit your needs.'
      ],
      vi: [
        'Chọn một công cụ hoặc mẫu dựa trên mục tiêu viết của bạn.',
        'Cung cấp mô tả ngắn gọn về sản phẩm hoặc chủ đề của bạn.',
        'Chọn từ các tùy chọn được tạo ra và tinh chỉnh văn bản cho phù hợp.'
      ]
    }
  },
  {
    id: 'writesonic',
    name: 'Writesonic',
    domain: 'writesonic.com',
    logo: getLogo('writesonic.com'),
    screenshots: ['https://picsum.photos/seed/write1/800/450'],
    category: 'writing',
    rating: 4.7,
    reviewCount: 10000,
    createdAt: '2026-02-05',
    pricing: { en: 'Free / $12/mo', vi: 'Miễn phí / 300.000đ/tháng' },
    description: {
      en: 'Writesonic is a powerful AI writing and image generation platform that helps users create high-quality content for blogs, ads, and websites. It features a wide range of tools, including an AI Article Writer, Paraphrasing Tool, and Text Expander. Writesonic stands out with its ability to generate SEO-optimized content that ranks well on search engines. It also includes Chatsonic, a conversational AI assistant with real-time web access, making it a comprehensive solution for modern content creators.',
      vi: 'Writesonic là một nền tảng viết lách và tạo hình ảnh AI mạnh mẽ giúp người dùng tạo ra nội dung chất lượng cao cho blog, quảng cáo và trang web. Nó có một loạt các công cụ, bao gồm Trình viết bài báo AI, Công cụ diễn đạt lại và Trình mở rộng văn bản. Writesonic nổi bật với khả năng tạo ra nội dung tối ưu hóa SEO xếp hạng tốt trên các công cụ tìm kiếm. Nó cũng bao gồm Chatsonic, một trợ lý AI trò chuyện với quyền truy cập web thời gian thực, khiến nó trở thành một giải pháp toàn diện cho các nhà sáng tạo nội dung hiện đại.'
    },
    features: {
      en: ['AI Article Writer 5.0', 'Chatsonic', 'Photosonic', 'Audiosonic'],
      vi: ['Trình viết bài báo AI 5.0', 'Chatsonic (Chat với web)', 'Photosonic (Tạo ảnh)', 'Audiosonic (Tạo âm thanh)']
    },
    pros: {
      en: ['Excellent for generating long-form SEO blog posts', 'Real-time web access for up-to-date information', 'Integrated image and audio generation tools'],
      vi: ['Tuyệt vời để tạo các bài viết blog SEO dạng dài', 'Truy cập web thời gian thực cho thông tin cập nhật', 'Tích hợp các công cụ tạo hình ảnh và âm thanh']
    },
    cons: {
      en: ['Credit-based system can be confusing for some', 'Quality can vary depending on the chosen AI model', 'Some advanced features require a higher-tier plan'],
      vi: ['Hệ thống dựa trên credit có thể gây nhầm lẫn cho một số người', 'Chất lượng có thể thay đổi tùy thuộc vào mô hình AI đã chọn', 'Một số tính năng nâng cao yêu cầu gói cao hơn']
    },
    useCases: {
      en: [
        { title: 'SEO Content Creation', examples: ['Generating 2000-word blog posts with relevant keywords', 'Creating SEO-optimized product descriptions for e-commerce'] },
        { title: 'Conversational Search', examples: ['Using Chatsonic to research current events and trends', 'Generating creative ideas through interactive chat'] }
      ],
      vi: [
        { title: 'Tạo nội dung SEO', examples: ['Tạo các bài viết blog 2000 từ với các từ khóa liên quan', 'Tạo mô tả sản phẩm tối ưu hóa SEO cho thương mại điện tử'] },
        { title: 'Tìm kiếm hội thoại', examples: ['Sử dụng Chatsonic để nghiên cứu các sự kiện và xu hướng hiện tại', 'Tạo các ý tưởng sáng tạo thông qua trò chuyện tương tác'] }
      ]
    },
    affiliateUrl: 'https://writesonic.com',
    howToUse: {
      en: [
        'Choose the "AI Article Writer" for long-form content or "Chatsonic" for research.',
        'Provide your topic, keywords, and preferred tone of voice.',
        'Generate the content and use the built-in editor to make final adjustments.'
      ],
      vi: [
        'Chọn "AI Article Writer" cho nội dung dài hoặc "Chatsonic" để nghiên cứu.',
        'Cung cấp chủ đề, từ khóa và tông giọng mong muốn của bạn.',
        'Tạo nội dung và sử dụng trình chỉnh sửa tích hợp để thực hiện các điều chỉnh cuối cùng.'
      ]
    }
  },
  {
    id: 'grammarly',
    name: 'Grammarly',
    domain: 'grammarly.com',
    logo: getLogo('grammarly.com'),
    screenshots: ['https://picsum.photos/seed/gram1/800/450'],
    category: 'writing',
    rating: 4.9,
    reviewCount: 500000,
    createdAt: '2026-01-01',
    pricing: { en: 'Free / $12/mo', vi: 'Miễn phí / 300.000đ/tháng' },
    description: {
      en: 'Grammarly is the world\'s most popular AI writing assistant, designed to help users improve their grammar, spelling, and clarity across all digital platforms. It offers real-time suggestions as you type in browsers, desktop apps, and mobile devices. Grammarly goes beyond simple spell-checking by providing insights into tone, conciseness, and engagement. With the introduction of GrammarlyGO, it now includes generative AI capabilities to help users draft, rewrite, and brainstorm content with ease.',
      vi: 'Grammarly là trợ lý viết lách AI phổ biến nhất thế giới, được thiết kế để giúp người dùng cải thiện ngữ pháp, chính tả và sự rõ ràng trên tất cả các nền tảng kỹ thuật số. Nó cung cấp các gợi ý theo thời gian thực khi bạn gõ trong trình duyệt, ứng dụng máy tính và thiết bị di động. Grammarly vượt xa việc kiểm tra chính tả đơn giản bằng cách cung cấp thông tin chi tiết về tông giọng, sự súc tích và mức độ hấp dẫn. Với việc giới thiệu GrammarlyGO, giờ đây nó bao gồm các khả năng AI sáng tạo để giúp người dùng soạn thảo, viết lại và lên ý tưởng nội dung một cách dễ dàng.'
    },
    features: {
      en: ['Grammar & Spelling Check', 'Tone Detector', 'Plagiarism Checker', 'GrammarlyGO (Generative AI)'],
      vi: ['Kiểm tra ngữ pháp & chính tả', 'Phát hiện tông giọng', 'Kiểm tra đạo văn', 'GrammarlyGO (AI sáng tạo)']
    },
    pros: {
      en: ['Extremely reliable and accurate grammar suggestions', 'Seamless integration across almost all writing platforms', 'Excellent for improving professional and academic writing'],
      vi: ['Gợi ý ngữ pháp cực kỳ đáng tin cậy và chính xác', 'Tích hợp liền mạch trên hầu hết các nền tảng viết', 'Tuyệt vời để cải thiện văn bản chuyên nghiệp và học thuật']
    },
    cons: {
      en: ['Premium version can be expensive for some users', 'Can occasionally be over-prescriptive with style suggestions', 'Generative AI features are limited on the free tier'],
      vi: ['Phiên bản Premium có thể đắt đối với một số người dùng', 'Đôi khi có thể quá khắt khe với các gợi ý phong cách', 'Các tính năng AI sáng tạo bị hạn chế trên gói miễn phí']
    },
    useCases: {
      en: [
        { title: 'Professional Communication', examples: ['Ensuring error-free emails and reports', 'Adjusting the tone of messages for different audiences'] },
        { title: 'Academic Writing', examples: ['Checking essays for grammatical errors and plagiarism', 'Improving the clarity and flow of research papers'] }
      ],
      vi: [
        { title: 'Giao tiếp chuyên nghiệp', examples: ['Đảm bảo email và báo cáo không có lỗi', 'Điều chỉnh tông giọng của tin nhắn cho các đối tượng khác nhau'] },
        { title: 'Viết học thuật', examples: ['Kiểm tra các bài luận lỗi ngữ pháp và đạo văn', 'Cải thiện sự rõ ràng và mạch lạc của các bài báo nghiên cứu'] }
      ]
    },
    affiliateUrl: 'https://grammarly.com',
    howToUse: {
      en: [
        'Install the Grammarly browser extension or desktop application.',
        'Start writing in your preferred app and look for the Grammarly icon.',
        'Review and accept suggestions to improve your writing in real-time.'
      ],
      vi: [
        'Cài đặt tiện ích mở rộng trình duyệt hoặc ứng dụng máy tính Grammarly.',
        'Bắt đầu viết trong ứng dụng yêu thích và tìm biểu tượng Grammarly.',
        'Xem lại và chấp nhận các gợi ý để cải thiện bài viết của bạn theo thời gian thực.'
      ]
    }
  },
  {
    id: 'quillbot',
    name: 'QuillBot',
    domain: 'quillbot.com',
    logo: getLogo('quillbot.com'),
    screenshots: ['https://picsum.photos/seed/quill1/800/450'],
    category: 'writing',
    rating: 4.8,
    reviewCount: 80000,
    createdAt: '2026-01-15',
    pricing: { en: 'Free / $9.95/mo', vi: 'Miễn phí / 250.000đ/tháng' },
    description: {
      en: 'QuillBot is a popular AI-powered paraphrasing tool designed to help users rewrite and enhance their sentences for better clarity and flow. It offers several modes, including Standard, Fluency, and Creative, to suit different writing needs. QuillBot also includes a Grammar Checker, Plagiarism Checker, and Summarizer, making it a versatile tool for students and writers. Its intuitive interface and powerful AI make it easy to refine content and avoid repetitive language while maintaining the original meaning.',
      vi: 'QuillBot là một công cụ diễn đạt lại phổ biến được hỗ trợ bởi AI được thiết kế để giúp người dùng viết lại và tăng cường các câu văn của họ để có sự rõ ràng và mạch lạc tốt hơn. Nó cung cấp một số chế độ, bao gồm Tiêu chuẩn, Lưu loát và Sáng tạo, để phù hợp với các nhu cầu viết khác nhau. QuillBot cũng bao gồm Trình kiểm tra ngữ pháp, Trình kiểm tra đạo văn và Trình tóm tắt, khiến nó trở thành một công cụ đa năng cho sinh viên và người viết. Giao diện trực quan và AI mạnh mẽ giúp bạn dễ dàng tinh chỉnh nội dung và tránh ngôn ngữ lặp lại trong khi vẫn duy trì ý nghĩa ban đầu.'
    },
    features: {
      en: ['Paraphraser', 'Grammar Checker', 'Summarizer', 'Citation Generator'],
      vi: ['Công cụ diễn đạt lại', 'Kiểm tra ngữ pháp', 'Trình tóm tắt văn bản', 'Trình tạo trích dẫn']
    },
    pros: {
      en: ['Excellent for rewriting sentences while keeping the meaning', 'Very user-friendly interface with multiple paraphrasing modes', 'Helpful for students to avoid plagiarism and improve flow'],
      vi: ['Tuyệt vời để viết lại câu trong khi vẫn giữ nguyên ý nghĩa', 'Giao diện rất thân thiện với người dùng với nhiều chế độ diễn đạt lại', 'Hữu ích cho sinh viên để tránh đạo văn và cải thiện mạch lạc']
    },
    cons: {
      en: ['Free version has strict character limits for paraphrasing', 'Plagiarism checker requires a premium subscription', 'Can occasionally produce slightly awkward sentence structures'],
      vi: ['Gói miễn phí có giới hạn ký tự nghiêm ngặt để diễn đạt lại', 'Trình kiểm tra đạo văn yêu cầu đăng ký trả phí', 'Đôi khi có thể tạo ra các cấu trúc câu hơi gượng ép']
    },
    useCases: {
      en: [
        { title: 'Academic Writing', examples: ['Paraphrasing research findings to avoid plagiarism', 'Summarizing long articles for quick review and study'] },
        { title: 'Content Creation', examples: ['Rewriting blog introductions for better engagement', 'Improving the flow of social media captions'] }
      ],
      vi: [
        { title: 'Viết học thuật', examples: ['Diễn đạt lại các kết quả nghiên cứu để tránh đạo văn', 'Tóm tắt các bài báo dài để xem xét và học tập nhanh chóng'] },
        { title: 'Tạo nội dung', examples: ['Viết lại phần mở đầu blog để hấp dẫn hơn', 'Cải thiện mạch lạc của các chú thích mạng xã hội'] }
      ]
    },
    affiliateUrl: 'https://quillbot.com',
    howToUse: {
      en: [
        'Paste your text into the QuillBot editor and select a paraphrasing mode.',
        'Click "Paraphrase" and review the suggested changes in the output box.',
        'Use the built-in thesaurus to further refine specific words and phrases.'
      ],
      vi: [
        'Dán văn bản của bạn vào trình chỉnh sửa QuillBot và chọn một chế độ diễn đạt lại.',
        'Nhấp vào "Paraphrase" và xem lại các thay đổi được gợi ý trong ô kết quả.',
        'Sử dụng từ điển đồng nghĩa tích hợp để tinh chỉnh thêm các từ và cụm từ cụ thể.'
      ]
    }
  },
  {
    id: 'leonardo',
    name: 'Leonardo.ai',
    domain: 'leonardo.ai',
    logo: getLogo('leonardo.ai'),
    screenshots: ['https://picsum.photos/seed/leo1/800/450'],
    category: 'image',
    rating: 4.8,
    reviewCount: 25000,
    createdAt: '2026-02-15',
    pricing: { en: 'Free / $10/mo', vi: 'Miễn phí / 250.000đ/tháng' },
    description: {
      en: 'Leonardo.ai is a powerful and versatile AI image generation platform designed for creators who want high-quality visuals with granular control. It offers a wide range of fine-tuned models for different styles, including photorealism, 3D render, and anime. Leonardo.ai features advanced tools like Canvas for in-painting and out-painting, as well as the ability to train your own custom models. It is a top choice for game developers, designers, and digital artists who need consistent and high-fidelity AI-generated assets.',
      vi: 'Leonardo.ai là một nền tảng tạo hình ảnh AI mạnh mẽ và đa năng được thiết kế cho các nhà sáng tạo muốn có hình ảnh chất lượng cao với khả năng kiểm soát chi tiết. Nó cung cấp một loạt các mô hình được tinh chỉnh cho các phong cách khác nhau, bao gồm siêu thực, render 3D và anime. Leonardo.ai có các công cụ nâng cao như Canvas để in-painting và out-painting, cũng như khả năng huấn luyện các mô hình tùy chỉnh của riêng bạn. Đây là lựa chọn hàng đầu cho các nhà phát triển game, nhà thiết kế và nghệ sĩ kỹ thuật số cần các tài sản do AI tạo ra nhất quán và có độ trung thực cao.'
    },
    features: {
      en: ['Fine-tuned models', 'AI Canvas', 'Texture generation', 'Custom model training'],
      vi: ['Mô hình tinh chỉnh đa dạng', 'AI Canvas (Chỉnh sửa ảnh)', 'Tạo kết cấu 3D', 'Huấn luyện model tùy chỉnh']
    },
    pros: {
      en: ['Exceptional control over the generation process', 'Wide variety of high-quality pre-trained models', 'Generous daily free credits for all users'],
      vi: ['Kiểm soát đặc biệt đối với quá trình tạo ảnh', 'Đa dạng các mô hình được huấn luyện sẵn chất lượng cao', 'Tặng credit miễn phí hàng ngày cho tất cả người dùng']
    },
    cons: {
      en: ['Interface can be slightly complex for absolute beginners', 'High-res rendering can consume credits quickly', 'Some advanced features require a paid subscription'],
      vi: ['Giao diện có thể hơi phức tạp đối với người mới bắt đầu', 'Kết xuất độ phân giải cao có thể tiêu tốn credit nhanh chóng', 'Một số tính năng nâng cao yêu cầu đăng ký trả phí']
    },
    useCases: {
      en: [
        { title: 'Game Development', examples: ['Generating consistent character assets and environments', 'Creating high-quality textures for 3D models'] },
        { title: 'Digital Art', examples: ['Creating stunning illustrations with specific artistic styles', 'Using AI Canvas to expand and refine existing artworks'] }
      ],
      vi: [
        { title: 'Phát triển Game', examples: ['Tạo các tài sản nhân vật và môi trường nhất quán', 'Tạo các kết cấu chất lượng cao cho mô hình 3D'] },
        { title: 'Nghệ thuật kỹ thuật số', examples: ['Tạo các minh họa tuyệt đẹp với các phong cách nghệ thuật cụ thể', 'Sử dụng AI Canvas để mở rộng và tinh chỉnh các tác phẩm nghệ thuật hiện có'] }
      ]
    },
    affiliateUrl: 'https://leonardo.ai',
    howToUse: {
      en: [
        'Choose a fine-tuned model that matches your desired artistic style.',
        'Enter your prompt and adjust settings like aspect ratio and guidance scale.',
        'Generate the images and use the AI Canvas for further refinements.'
      ],
      vi: [
        'Chọn một mô hình tinh chỉnh phù hợp với phong cách nghệ thuật mong muốn của bạn.',
        'Nhập câu lệnh và điều chỉnh các cài đặt như tỷ lệ khung hình và mức độ hướng dẫn.',
        'Tạo hình ảnh và sử dụng AI Canvas để tinh chỉnh thêm.'
      ]
    }
  },
  {
    id: 'stablediffusion',
    name: 'Stable Diffusion',
    domain: 'stability.ai',
    logo: getLogo('stability.ai'),
    screenshots: ['https://picsum.photos/seed/sd1/800/450'],
    category: 'image',
    rating: 4.7,
    reviewCount: 100000,
    createdAt: '2026-01-01',
    pricing: { en: 'Free (Open Source)', vi: 'Miễn phí (Mã nguồn mở)' },
    description: {
      en: 'Stable Diffusion is a revolutionary open-source latent text-to-image diffusion model capable of generating photo-realistic images from any text input. Developed by Stability AI, it has empowered a massive ecosystem of tools, plugins, and custom models. Stable Diffusion can be run locally on consumer hardware, offering unparalleled privacy and customization. It is the foundation for many popular AI image generators and is widely used by researchers, developers, and artists who want full control over their AI creative process.',
      vi: 'Stable Diffusion là một mô hình khuếch tán văn bản thành hình ảnh mã nguồn mở mang tính cách mạng, có khả năng tạo ra các hình ảnh siêu thực từ bất kỳ đầu vào văn bản nào. Được phát triển bởi Stability AI, nó đã thúc đẩy một hệ sinh thái khổng lồ gồm các công cụ, plugin và mô hình tùy chỉnh. Stable Diffusion có thể được chạy cục bộ trên phần cứng người dùng, mang lại quyền riêng tư và khả năng tùy chỉnh vô đối. Đây là nền tảng cho nhiều công cụ tạo hình ảnh AI phổ biến và được sử dụng rộng rãi bởi các nhà nghiên cứu, nhà phát triển và nghệ sĩ muốn kiểm soát hoàn toàn quá trình sáng tạo AI của họ.'
    },
    features: {
      en: ['Open Source', 'Local execution', 'In-painting & Out-painting', 'ControlNet support'],
      vi: ['Mã nguồn mở', 'Chạy cục bộ trên máy tính', 'In-painting & Out-painting', 'Hỗ trợ ControlNet']
    },
    pros: {
      en: ['Completely free and open-source to use locally', 'Unparalleled level of customization and control', 'Massive community-driven ecosystem of models and tools'],
      vi: ['Hoàn toàn miễn phí và mã nguồn mở để sử dụng cục bộ', 'Mức độ tùy chỉnh và kiểm soát vô đối', 'Hệ sinh thái mô hình và công cụ khổng lồ do cộng đồng thúc đẩy']
    },
    cons: {
      en: ['Requires significant technical knowledge to set up locally', 'Demanding hardware requirements for fast generation', 'Interface can be complex compared to web-based tools'],
      vi: ['Yêu cầu kiến thức kỹ thuật đáng kể để thiết lập cục bộ', 'Yêu cầu phần cứng khắt khe để tạo ảnh nhanh', 'Giao diện có thể phức tạp so với các công cụ dựa trên web']
    },
    useCases: {
      en: [
        { title: 'Custom Model Training', examples: ['Training the AI on specific characters or artistic styles', 'Creating unique models for specialized creative projects'] },
        { title: 'Privacy-Focused Creation', examples: ['Generating images locally without uploading data to the cloud', 'Maintaining full ownership and control over creative outputs'] }
      ],
      vi: [
        { title: 'Huấn luyện Model tùy chỉnh', examples: ['Huấn luyện AI trên các nhân vật hoặc phong cách nghệ thuật cụ thể', 'Tạo các mô hình độc đáo cho các dự án sáng tạo chuyên biệt'] },
        { title: 'Sáng tạo tập trung vào quyền riêng tư', examples: ['Tạo hình ảnh cục bộ mà không cần tải dữ liệu lên đám mây', 'Duy trì toàn quyền sở hữu và kiểm soát các đầu ra sáng tạo'] }
      ]
    },
    affiliateUrl: 'https://stability.ai',
    howToUse: {
      en: [
        'Download and install a Stable Diffusion UI like Automatic1111 or ComfyUI.',
        'Download pre-trained models from sites like Civitai or Hugging Face.',
        'Enter your prompt, select your model, and generate images locally.'
      ],
      vi: [
        'Tải xuống và cài đặt một giao diện Stable Diffusion như Automatic1111 hoặc ComfyUI.',
        'Tải xuống các mô hình được huấn luyện sẵn từ các trang web như Civitai hoặc Hugging Face.',
        'Nhập câu lệnh, chọn mô hình của bạn và tạo hình ảnh cục bộ.'
      ]
    }
  },
  {
    id: 'dalle3',
    name: 'DALL-E 3',
    domain: 'openai.com',
    logo: getLogo('openai.com'),
    screenshots: ['https://picsum.photos/seed/dalle1/800/450'],
    category: 'image',
    rating: 4.8,
    reviewCount: 50000,
    createdAt: '2026-01-01',
    pricing: { en: 'Included in ChatGPT Plus', vi: 'Bao gồm trong ChatGPT Plus' },
    description: {
      en: 'DALL-E 3 is OpenAI\'s latest and most advanced image generation model, designed to understand and follow complex instructions with incredible precision. It is deeply integrated with ChatGPT, allowing users to brainstorm and refine their prompts through a conversational interface. DALL-E 3 excels in rendering text, complex compositions, and specific artistic styles with high fidelity. It is a powerful tool for anyone who wants to turn their ideas into stunning visuals without needing to master complex prompt engineering.',
      vi: 'DALL-E 3 là mô hình tạo hình ảnh mới nhất và tiên tiến nhất của OpenAI, được thiết kế để hiểu và tuân theo các hướng dẫn phức tạp với độ chính xác đáng kinh ngạc. Nó được tích hợp sâu với ChatGPT, cho phép người dùng lên ý tưởng và tinh chỉnh các câu lệnh của họ thông qua giao diện hội thoại. DALL-E 3 xuất sắc trong việc hiển thị văn bản, các bố cục phức tạp và các phong cách nghệ thuật cụ thể với độ trung thực cao. Đây là một công cụ mạnh mẽ cho bất kỳ ai muốn biến ý tưởng của mình thành những hình ảnh tuyệt đẹp mà không cần phải thành thạo kỹ thuật viết prompt phức tạp.'
    },
    features: {
      en: ['ChatGPT integration', 'Precise prompt following', 'Text rendering in images', 'Safety mitigations'],
      vi: ['Tích hợp với ChatGPT', 'Tuân thủ prompt chính xác', 'Hiển thị văn bản trong ảnh', 'Các biện pháp an toàn']
    },
    pros: {
      en: ['Extremely easy to use through ChatGPT conversation', 'Excellent at following detailed and complex instructions', 'High-quality rendering of text within images'],
      vi: ['Cực kỳ dễ sử dụng thông qua hội thoại ChatGPT', 'Xuất sắc trong việc tuân theo các hướng dẫn chi tiết và phức tạp', 'Hiển thị văn bản trong ảnh chất lượng cao']
    },
    cons: {
      en: ['Requires a ChatGPT Plus subscription for full access', 'Less granular control over technical settings than Midjourney', 'Daily generation limits can be restrictive for power users'],
      vi: ['Yêu cầu đăng ký ChatGPT Plus để truy cập đầy đủ', 'Kiểm soát ít chi tiết hơn đối với các cài đặt kỹ thuật so với Midjourney', 'Giới hạn tạo hàng ngày có thể gây hạn chế cho người dùng chuyên sâu']
    },
    useCases: {
      en: [
        { title: 'Visual Brainstorming', examples: ['Using ChatGPT to develop and visualize creative concepts', 'Generating multiple variations of an idea through conversation'] },
        { title: 'Graphic Design', examples: ['Creating logos and icons with specific text elements', 'Generating unique illustrations for blog posts and social media'] }
      ],
      vi: [
        { title: 'Lên ý tưởng trực quan', examples: ['Sử dụng ChatGPT để phát triển và hình dung các khái niệm sáng tạo', 'Tạo nhiều biến thể của một ý tưởng thông qua hội thoại'] },
        { title: 'Thiết kế đồ họa', examples: ['Tạo logo và biểu tượng với các yếu tố văn bản cụ thể', 'Tạo các minh họa độc đáo cho bài viết blog và mạng xã hội'] }
      ]
    },
    affiliateUrl: 'https://openai.com/dall-e-3',
    howToUse: {
      en: [
        'Open ChatGPT and select the GPT-4 model with DALL-E 3 enabled.',
        'Describe the image you want to create in natural language.',
        'Ask ChatGPT to make specific changes or refinements to the generated image.'
      ],
      vi: [
        'Mở ChatGPT và chọn mô hình GPT-4 đã bật DALL-E 3.',
        'Mô tả hình ảnh bạn muốn tạo bằng ngôn ngữ tự nhiên.',
        'Yêu cầu ChatGPT thực hiện các thay đổi hoặc tinh chỉnh cụ thể cho hình ảnh đã tạo.'
      ]
    }
  },
  {
    id: 'pika',
    name: 'Pika Labs',
    domain: 'pika.art',
    logo: getLogo('pika.art'),
    screenshots: ['https://picsum.photos/seed/pika1/800/450'],
    category: 'video',
    rating: 4.7,
    reviewCount: 8000,
    createdAt: '2026-02-01',
    pricing: { en: 'Free / $8/mo', vi: 'Miễn phí / 200.000đ/tháng' },
    description: {
      en: 'Pika Labs is a cutting-edge AI video generation platform that allows users to create high-quality animations and cinematic sequences from text and images. It offers a user-friendly web interface and a Discord-based community for sharing and refining creations. Pika excels in producing smooth motion, consistent characters, and stylized visual effects. It features advanced tools like Lip Sync and Sound Effects generation, making it a comprehensive solution for digital storytellers and content creators.',
      vi: 'Pika Labs là một nền tảng tạo video AI tiên tiến cho phép người dùng tạo ra các hoạt ảnh chất lượng cao và các chuỗi cảnh quay điện ảnh từ văn bản và hình ảnh. Nó cung cấp một giao diện web thân thiện với người dùng và một cộng đồng dựa trên Discord để chia sẻ và tinh chỉnh các sáng tạo. Pika xuất sắc trong việc tạo ra chuyển động mượt mà, nhân vật nhất quán và các hiệu ứng hình ảnh phong cách. Nó có các công cụ nâng cao như Hát nhép (Lip Sync) và tạo Hiệu ứng âm thanh, khiến nó trở thành một giải pháp toàn diện cho những người kể chuyện kỹ thuật số và các nhà sáng tạo nội dung.'
    },
    features: {
      en: ['Text-to-Video', 'Image-to-Video', 'Lip Sync', 'Sound Effects'],
      vi: ['Văn bản sang Video', 'Hình ảnh sang Video', 'Hát nhép (Lip Sync)', 'Hiệu ứng âm thanh']
    },
    pros: {
      en: ['Very easy to use with high-quality cinematic results', 'Innovative features like Lip Sync and Sound Effects', 'Active community and frequent model improvements'],
      vi: ['Rất dễ sử dụng với kết quả điện ảnh chất lượng cao', 'Các tính năng sáng tạo như Lip Sync và Hiệu ứng âm thanh', 'Cộng đồng năng động và cải thiện mô hình thường xuyên']
    },
    cons: {
      en: ['Free tier includes watermarks on generated videos', 'High-res rendering can be slow during peak times', 'Subscription plans can be expensive for casual users'],
      vi: ['Gói miễn phí bao gồm watermark trên các video đã tạo', 'Kết xuất độ phân giải cao có thể chậm trong thời gian cao điểm', 'Các gói đăng ký có thể đắt đối với người dùng thông thường']
    },
    useCases: {
      en: [
        { title: 'Social Media Content', examples: ['Generating eye-catching short videos for TikTok and Reels', 'Creating dynamic animated graphics for social media posts'] },
        { title: 'Digital Storytelling', examples: ['Animating character portraits for interactive narratives', 'Creating cinematic sequences for personal film projects'] }
      ],
      vi: [
        { title: 'Nội dung mạng xã hội', examples: ['Tạo các video ngắn bắt mắt cho TikTok và Reels', 'Tạo đồ họa hoạt hình năng động cho các bài đăng mạng xã hội'] },
        { title: 'Kể chuyện kỹ thuật số', examples: ['Hoạt hình hóa chân dung nhân vật cho các câu chuyện tương tác', 'Tạo các chuỗi cảnh quay điện ảnh cho các dự án phim cá nhân'] }
      ]
    },
    affiliateUrl: 'https://pika.art',
    howToUse: {
      en: [
        'Upload an image or write a descriptive text prompt in the Pika interface.',
        'Adjust motion settings and use features like Lip Sync if needed.',
        'Generate the video and download it for your creative projects.'
      ],
      vi: [
        'Tải lên một hình ảnh hoặc viết câu lệnh mô tả trong giao diện Pika.',
        'Điều chỉnh các cài đặt chuyển động và sử dụng các tính năng như Lip Sync nếu cần.',
        'Tạo video và tải xuống cho các dự án sáng tạo của bạn.'
      ]
    }
  },
  {
    id: 'heygen',
    name: 'HeyGen',
    domain: 'heygen.com',
    logo: getLogo('heygen.com'),
    screenshots: ['https://picsum.photos/seed/hey1/800/450'],
    category: 'video',
    rating: 4.8,
    reviewCount: 15000,
    createdAt: '2026-01-20',
    pricing: { en: 'Free / $24/mo', vi: 'Miễn phí / 600.000đ/tháng' },
    description: {
      en: 'HeyGen is a leading AI video generation platform that specializes in creating realistic AI avatars for professional presentations, marketing, and training. It allows users to turn text into engaging video content with lifelike avatars that speak in multiple languages. HeyGen features advanced capabilities like Video Translation with voice cloning, enabling companies to localize their content instantly. It is a powerful tool for businesses looking to scale their video production without the need for expensive equipment or actors.',
      vi: 'HeyGen là một nền tảng tạo video AI hàng đầu chuyên tạo ra các avatar AI thực tế cho các bài thuyết trình chuyên nghiệp, marketing và đào tạo. Nó cho phép người dùng biến văn bản thành nội dung video hấp dẫn với các avatar giống như thật nói bằng nhiều ngôn ngữ. HeyGen có các khả năng nâng cao như Dịch video với nhân bản giọng nói, cho phép các công ty bản địa hóa nội dung của họ ngay lập tức. Đây là một công cụ mạnh mẽ cho các doanh nghiệp muốn mở rộng quy mô sản xuất video mà không cần thiết bị đắt tiền hoặc diễn viên.'
    },
    features: {
      en: ['AI Avatars', 'Video Translation', 'Voice Cloning', 'Talking Photos'],
      vi: ['Avatar AI thực tế', 'Dịch video đa ngôn ngữ', 'Nhân bản giọng nói', 'Ảnh nói chuyện']
    },
    pros: {
      en: ['Extremely realistic AI avatars and lip-syncing', 'Powerful video translation and localization tools', 'User-friendly interface with a wide range of templates'],
      vi: ['Avatar AI và hát nhép cực kỳ thực tế', 'Công cụ dịch video và bản địa hóa mạnh mẽ', 'Giao diện thân thiện với người dùng với nhiều mẫu đa dạng']
    },
    cons: {
      en: ['Subscription plans can be expensive for small businesses', 'Credit-based system can limit high-volume production', 'Some avatars may still have a slightly "uncanny valley" feel'],
      vi: ['Các gói đăng ký có thể đắt đối với doanh nghiệp nhỏ', 'Hệ thống dựa trên credit có thể hạn chế sản xuất khối lượng lớn', 'Một số avatar vẫn có thể mang lại cảm giác hơi "thiếu tự nhiên"']
    },
    useCases: {
      en: [
        { title: 'Corporate Training', examples: ['Creating engaging training videos with AI instructors', 'Localizing educational content for global employees'] },
        { title: 'Marketing & Sales', examples: ['Generating personalized video messages for potential clients', 'Creating professional product explainer videos with avatars'] }
      ],
      vi: [
        { title: 'Đào tạo doanh nghiệp', examples: ['Tạo các video đào tạo hấp dẫn với giảng viên AI', 'Bản địa hóa nội dung giáo dục cho nhân viên toàn cầu'] },
        { title: 'Marketing & Bán hàng', examples: ['Tạo tin nhắn video cá nhân hóa cho khách hàng tiềm năng', 'Tạo các video giải thích sản phẩm chuyên nghiệp với avatar'] }
      ]
    },
    affiliateUrl: 'https://heygen.com',
    howToUse: {
      en: [
        'Choose an AI avatar and select a voice from the library.',
        'Enter your script and customize the background and layout.',
        'Generate the video and use the translation feature for global reach.'
      ],
      vi: [
        'Chọn một avatar AI và chọn một giọng đọc từ thư viện.',
        'Nhập kịch bản của bạn và tùy chỉnh nền cũng như bố cục.',
        'Tạo video và sử dụng tính năng dịch để tiếp cận toàn cầu.'
      ]
    }
  }
,
  {
    id: 'copilot',
    name: 'GitHub Copilot',
    domain: 'github.com',
    logo: getLogo('github.com'),
    screenshots: ['https://picsum.photos/seed/copilot1/800/450', 'https://picsum.photos/seed/copilot2/800/450'],
    category: 'coding',
    rating: 4.3,
    reviewCount: 4020,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    pricing: {
      en: 'Freemium',
      vi: 'Miễn phí cơ bản'
    },
    description: {
      en: 'GitHub Copilot is a powerful AI tool for coding that helps you achieve more in less time.',
      vi: 'GitHub Copilot là một công cụ AI mạnh mẽ dành cho coding giúp bạn đạt được nhiều thành tựu hơn trong thời gian ngắn hơn.'
    },
    features: {
      en: ['Advanced AI capabilities', 'User-friendly interface', 'Fast processing', 'Cloud sync'],
      vi: ['Khả năng AI tiên tiến', 'Giao diện thân thiện', 'Xử lý nhanh', 'Đồng bộ đám mây']
    },
    pros: {
      en: ['High quality output', 'Easy to use', 'Regular updates'],
      vi: ['Đầu ra chất lượng cao', 'Dễ sử dụng', 'Cập nhật thường xuyên']
    },
    cons: {
      en: ['Premium features require subscription', 'Learning curve for advanced features'],
      vi: ['Tính năng cao cấp yêu cầu trả phí', 'Cần thời gian học các tính năng nâng cao']
    },
    useCases: {
      en: [
        { title: 'Professional Use', examples: ['Enhancing daily workflows', 'Automating repetitive tasks'] },
        { title: 'Personal Projects', examples: ['Creative exploration', 'Learning new skills'] }
      ],
      vi: [
        { title: 'Sử dụng chuyên nghiệp', examples: ['Nâng cao quy trình làm việc hàng ngày', 'Tự động hóa các tác vụ lặp đi lặp lại'] },
        { title: 'Dự án cá nhân', examples: ['Khám phá sáng tạo', 'Học kỹ năng mới'] }
      ]
    },
    affiliateUrl: 'https://github.com',
    howToUse: {
      en: ['Sign up for an account', 'Explore the dashboard', 'Start creating with AI'],
      vi: ['Đăng ký tài khoản', 'Khám phá bảng điều khiển', 'Bắt đầu sáng tạo với AI']
    }
  },
  {
    id: 'stable-diffusion',
    name: 'Stable Diffusion',
    domain: 'stability.ai',
    logo: getLogo('stability.ai'),
    screenshots: ['https://picsum.photos/seed/stable-diffusion1/800/450', 'https://picsum.photos/seed/stable-diffusion2/800/450'],
    category: 'image',
    rating: 4.8,
    reviewCount: 1452,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    pricing: {
      en: 'Freemium',
      vi: 'Miễn phí cơ bản'
    },
    description: {
      en: 'Stable Diffusion is a powerful AI tool for image that helps you achieve more in less time.',
      vi: 'Stable Diffusion là một công cụ AI mạnh mẽ dành cho image giúp bạn đạt được nhiều thành tựu hơn trong thời gian ngắn hơn.'
    },
    features: {
      en: ['Advanced AI capabilities', 'User-friendly interface', 'Fast processing', 'Cloud sync'],
      vi: ['Khả năng AI tiên tiến', 'Giao diện thân thiện', 'Xử lý nhanh', 'Đồng bộ đám mây']
    },
    pros: {
      en: ['High quality output', 'Easy to use', 'Regular updates'],
      vi: ['Đầu ra chất lượng cao', 'Dễ sử dụng', 'Cập nhật thường xuyên']
    },
    cons: {
      en: ['Premium features require subscription', 'Learning curve for advanced features'],
      vi: ['Tính năng cao cấp yêu cầu trả phí', 'Cần thời gian học các tính năng nâng cao']
    },
    useCases: {
      en: [
        { title: 'Professional Use', examples: ['Enhancing daily workflows', 'Automating repetitive tasks'] },
        { title: 'Personal Projects', examples: ['Creative exploration', 'Learning new skills'] }
      ],
      vi: [
        { title: 'Sử dụng chuyên nghiệp', examples: ['Nâng cao quy trình làm việc hàng ngày', 'Tự động hóa các tác vụ lặp đi lặp lại'] },
        { title: 'Dự án cá nhân', examples: ['Khám phá sáng tạo', 'Học kỹ năng mới'] }
      ]
    },
    affiliateUrl: 'https://stability.ai',
    howToUse: {
      en: ['Sign up for an account', 'Explore the dashboard', 'Start creating with AI'],
      vi: ['Đăng ký tài khoản', 'Khám phá bảng điều khiển', 'Bắt đầu sáng tạo với AI']
    }
  },
  {
    id: 'udio',
    name: 'Udio',
    domain: 'udio.com',
    logo: getLogo('udio.com'),
    screenshots: ['https://picsum.photos/seed/udio1/800/450', 'https://picsum.photos/seed/udio2/800/450'],
    category: 'audio',
    rating: 4.1,
    reviewCount: 3887,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    pricing: {
      en: 'Freemium',
      vi: 'Miễn phí cơ bản'
    },
    description: {
      en: 'Udio is a powerful AI tool for audio that helps you achieve more in less time.',
      vi: 'Udio là một công cụ AI mạnh mẽ dành cho audio giúp bạn đạt được nhiều thành tựu hơn trong thời gian ngắn hơn.'
    },
    features: {
      en: ['Advanced AI capabilities', 'User-friendly interface', 'Fast processing', 'Cloud sync'],
      vi: ['Khả năng AI tiên tiến', 'Giao diện thân thiện', 'Xử lý nhanh', 'Đồng bộ đám mây']
    },
    pros: {
      en: ['High quality output', 'Easy to use', 'Regular updates'],
      vi: ['Đầu ra chất lượng cao', 'Dễ sử dụng', 'Cập nhật thường xuyên']
    },
    cons: {
      en: ['Premium features require subscription', 'Learning curve for advanced features'],
      vi: ['Tính năng cao cấp yêu cầu trả phí', 'Cần thời gian học các tính năng nâng cao']
    },
    useCases: {
      en: [
        { title: 'Professional Use', examples: ['Enhancing daily workflows', 'Automating repetitive tasks'] },
        { title: 'Personal Projects', examples: ['Creative exploration', 'Learning new skills'] }
      ],
      vi: [
        { title: 'Sử dụng chuyên nghiệp', examples: ['Nâng cao quy trình làm việc hàng ngày', 'Tự động hóa các tác vụ lặp đi lặp lại'] },
        { title: 'Dự án cá nhân', examples: ['Khám phá sáng tạo', 'Học kỹ năng mới'] }
      ]
    },
    affiliateUrl: 'https://udio.com',
    howToUse: {
      en: ['Sign up for an account', 'Explore the dashboard', 'Start creating with AI'],
      vi: ['Đăng ký tài khoản', 'Khám phá bảng điều khiển', 'Bắt đầu sáng tạo với AI']
    }
  },
  {
    id: 'v0',
    name: 'v0 by Vercel',
    domain: 'v0.dev',
    logo: getLogo('v0.dev'),
    screenshots: ['https://picsum.photos/seed/v01/800/450', 'https://picsum.photos/seed/v02/800/450'],
    category: 'coding',
    rating: 4.9,
    reviewCount: 4441,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    pricing: {
      en: 'Freemium',
      vi: 'Miễn phí cơ bản'
    },
    description: {
      en: 'v0 by Vercel is a powerful AI tool for coding that helps you achieve more in less time.',
      vi: 'v0 by Vercel là một công cụ AI mạnh mẽ dành cho coding giúp bạn đạt được nhiều thành tựu hơn trong thời gian ngắn hơn.'
    },
    features: {
      en: ['Advanced AI capabilities', 'User-friendly interface', 'Fast processing', 'Cloud sync'],
      vi: ['Khả năng AI tiên tiến', 'Giao diện thân thiện', 'Xử lý nhanh', 'Đồng bộ đám mây']
    },
    pros: {
      en: ['High quality output', 'Easy to use', 'Regular updates'],
      vi: ['Đầu ra chất lượng cao', 'Dễ sử dụng', 'Cập nhật thường xuyên']
    },
    cons: {
      en: ['Premium features require subscription', 'Learning curve for advanced features'],
      vi: ['Tính năng cao cấp yêu cầu trả phí', 'Cần thời gian học các tính năng nâng cao']
    },
    useCases: {
      en: [
        { title: 'Professional Use', examples: ['Enhancing daily workflows', 'Automating repetitive tasks'] },
        { title: 'Personal Projects', examples: ['Creative exploration', 'Learning new skills'] }
      ],
      vi: [
        { title: 'Sử dụng chuyên nghiệp', examples: ['Nâng cao quy trình làm việc hàng ngày', 'Tự động hóa các tác vụ lặp đi lặp lại'] },
        { title: 'Dự án cá nhân', examples: ['Khám phá sáng tạo', 'Học kỹ năng mới'] }
      ]
    },
    affiliateUrl: 'https://v0.dev',
    howToUse: {
      en: ['Sign up for an account', 'Explore the dashboard', 'Start creating with AI'],
      vi: ['Đăng ký tài khoản', 'Khám phá bảng điều khiển', 'Bắt đầu sáng tạo với AI']
    }
  },
  {
    id: 'bolt',
    name: 'Bolt.new',
    domain: 'bolt.new',
    logo: getLogo('bolt.new'),
    screenshots: ['https://picsum.photos/seed/bolt1/800/450', 'https://picsum.photos/seed/bolt2/800/450'],
    category: 'coding',
    rating: 4.2,
    reviewCount: 2901,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    pricing: {
      en: 'Freemium',
      vi: 'Miễn phí cơ bản'
    },
    description: {
      en: 'Bolt.new is a powerful AI tool for coding that helps you achieve more in less time.',
      vi: 'Bolt.new là một công cụ AI mạnh mẽ dành cho coding giúp bạn đạt được nhiều thành tựu hơn trong thời gian ngắn hơn.'
    },
    features: {
      en: ['Advanced AI capabilities', 'User-friendly interface', 'Fast processing', 'Cloud sync'],
      vi: ['Khả năng AI tiên tiến', 'Giao diện thân thiện', 'Xử lý nhanh', 'Đồng bộ đám mây']
    },
    pros: {
      en: ['High quality output', 'Easy to use', 'Regular updates'],
      vi: ['Đầu ra chất lượng cao', 'Dễ sử dụng', 'Cập nhật thường xuyên']
    },
    cons: {
      en: ['Premium features require subscription', 'Learning curve for advanced features'],
      vi: ['Tính năng cao cấp yêu cầu trả phí', 'Cần thời gian học các tính năng nâng cao']
    },
    useCases: {
      en: [
        { title: 'Professional Use', examples: ['Enhancing daily workflows', 'Automating repetitive tasks'] },
        { title: 'Personal Projects', examples: ['Creative exploration', 'Learning new skills'] }
      ],
      vi: [
        { title: 'Sử dụng chuyên nghiệp', examples: ['Nâng cao quy trình làm việc hàng ngày', 'Tự động hóa các tác vụ lặp đi lặp lại'] },
        { title: 'Dự án cá nhân', examples: ['Khám phá sáng tạo', 'Học kỹ năng mới'] }
      ]
    },
    affiliateUrl: 'https://bolt.new',
    howToUse: {
      en: ['Sign up for an account', 'Explore the dashboard', 'Start creating with AI'],
      vi: ['Đăng ký tài khoản', 'Khám phá bảng điều khiển', 'Bắt đầu sáng tạo với AI']
    }
  },
  {
    id: 'lovable',
    name: 'Lovable',
    domain: 'lovable.dev',
    logo: getLogo('lovable.dev'),
    screenshots: ['https://picsum.photos/seed/lovable1/800/450', 'https://picsum.photos/seed/lovable2/800/450'],
    category: 'coding',
    rating: 4.6,
    reviewCount: 802,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    pricing: {
      en: 'Freemium',
      vi: 'Miễn phí cơ bản'
    },
    description: {
      en: 'Lovable is a powerful AI tool for coding that helps you achieve more in less time.',
      vi: 'Lovable là một công cụ AI mạnh mẽ dành cho coding giúp bạn đạt được nhiều thành tựu hơn trong thời gian ngắn hơn.'
    },
    features: {
      en: ['Advanced AI capabilities', 'User-friendly interface', 'Fast processing', 'Cloud sync'],
      vi: ['Khả năng AI tiên tiến', 'Giao diện thân thiện', 'Xử lý nhanh', 'Đồng bộ đám mây']
    },
    pros: {
      en: ['High quality output', 'Easy to use', 'Regular updates'],
      vi: ['Đầu ra chất lượng cao', 'Dễ sử dụng', 'Cập nhật thường xuyên']
    },
    cons: {
      en: ['Premium features require subscription', 'Learning curve for advanced features'],
      vi: ['Tính năng cao cấp yêu cầu trả phí', 'Cần thời gian học các tính năng nâng cao']
    },
    useCases: {
      en: [
        { title: 'Professional Use', examples: ['Enhancing daily workflows', 'Automating repetitive tasks'] },
        { title: 'Personal Projects', examples: ['Creative exploration', 'Learning new skills'] }
      ],
      vi: [
        { title: 'Sử dụng chuyên nghiệp', examples: ['Nâng cao quy trình làm việc hàng ngày', 'Tự động hóa các tác vụ lặp đi lặp lại'] },
        { title: 'Dự án cá nhân', examples: ['Khám phá sáng tạo', 'Học kỹ năng mới'] }
      ]
    },
    affiliateUrl: 'https://lovable.dev',
    howToUse: {
      en: ['Sign up for an account', 'Explore the dashboard', 'Start creating with AI'],
      vi: ['Đăng ký tài khoản', 'Khám phá bảng điều khiển', 'Bắt đầu sáng tạo với AI']
    }
  },
  {
    id: 'windsurf',
    name: 'Windsurf',
    domain: 'codeium.com',
    logo: getLogo('codeium.com'),
    screenshots: ['https://picsum.photos/seed/windsurf1/800/450', 'https://picsum.photos/seed/windsurf2/800/450'],
    category: 'coding',
    rating: 4.3,
    reviewCount: 1411,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    pricing: {
      en: 'Freemium',
      vi: 'Miễn phí cơ bản'
    },
    description: {
      en: 'Windsurf is a powerful AI tool for coding that helps you achieve more in less time.',
      vi: 'Windsurf là một công cụ AI mạnh mẽ dành cho coding giúp bạn đạt được nhiều thành tựu hơn trong thời gian ngắn hơn.'
    },
    features: {
      en: ['Advanced AI capabilities', 'User-friendly interface', 'Fast processing', 'Cloud sync'],
      vi: ['Khả năng AI tiên tiến', 'Giao diện thân thiện', 'Xử lý nhanh', 'Đồng bộ đám mây']
    },
    pros: {
      en: ['High quality output', 'Easy to use', 'Regular updates'],
      vi: ['Đầu ra chất lượng cao', 'Dễ sử dụng', 'Cập nhật thường xuyên']
    },
    cons: {
      en: ['Premium features require subscription', 'Learning curve for advanced features'],
      vi: ['Tính năng cao cấp yêu cầu trả phí', 'Cần thời gian học các tính năng nâng cao']
    },
    useCases: {
      en: [
        { title: 'Professional Use', examples: ['Enhancing daily workflows', 'Automating repetitive tasks'] },
        { title: 'Personal Projects', examples: ['Creative exploration', 'Learning new skills'] }
      ],
      vi: [
        { title: 'Sử dụng chuyên nghiệp', examples: ['Nâng cao quy trình làm việc hàng ngày', 'Tự động hóa các tác vụ lặp đi lặp lại'] },
        { title: 'Dự án cá nhân', examples: ['Khám phá sáng tạo', 'Học kỹ năng mới'] }
      ]
    },
    affiliateUrl: 'https://codeium.com',
    howToUse: {
      en: ['Sign up for an account', 'Explore the dashboard', 'Start creating with AI'],
      vi: ['Đăng ký tài khoản', 'Khám phá bảng điều khiển', 'Bắt đầu sáng tạo với AI']
    }
  },
  {
    id: 'codeium',
    name: 'Codeium',
    domain: 'codeium.com',
    logo: getLogo('codeium.com'),
    screenshots: ['https://picsum.photos/seed/codeium1/800/450', 'https://picsum.photos/seed/codeium2/800/450'],
    category: 'coding',
    rating: 4.9,
    reviewCount: 3901,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    pricing: {
      en: 'Freemium',
      vi: 'Miễn phí cơ bản'
    },
    description: {
      en: 'Codeium is a powerful AI tool for coding that helps you achieve more in less time.',
      vi: 'Codeium là một công cụ AI mạnh mẽ dành cho coding giúp bạn đạt được nhiều thành tựu hơn trong thời gian ngắn hơn.'
    },
    features: {
      en: ['Advanced AI capabilities', 'User-friendly interface', 'Fast processing', 'Cloud sync'],
      vi: ['Khả năng AI tiên tiến', 'Giao diện thân thiện', 'Xử lý nhanh', 'Đồng bộ đám mây']
    },
    pros: {
      en: ['High quality output', 'Easy to use', 'Regular updates'],
      vi: ['Đầu ra chất lượng cao', 'Dễ sử dụng', 'Cập nhật thường xuyên']
    },
    cons: {
      en: ['Premium features require subscription', 'Learning curve for advanced features'],
      vi: ['Tính năng cao cấp yêu cầu trả phí', 'Cần thời gian học các tính năng nâng cao']
    },
    useCases: {
      en: [
        { title: 'Professional Use', examples: ['Enhancing daily workflows', 'Automating repetitive tasks'] },
        { title: 'Personal Projects', examples: ['Creative exploration', 'Learning new skills'] }
      ],
      vi: [
        { title: 'Sử dụng chuyên nghiệp', examples: ['Nâng cao quy trình làm việc hàng ngày', 'Tự động hóa các tác vụ lặp đi lặp lại'] },
        { title: 'Dự án cá nhân', examples: ['Khám phá sáng tạo', 'Học kỹ năng mới'] }
      ]
    },
    affiliateUrl: 'https://codeium.com',
    howToUse: {
      en: ['Sign up for an account', 'Explore the dashboard', 'Start creating with AI'],
      vi: ['Đăng ký tài khoản', 'Khám phá bảng điều khiển', 'Bắt đầu sáng tạo với AI']
    }
  },
  {
    id: 'replit-ghostwriter',
    name: 'Replit Ghostwriter',
    domain: 'replit.com',
    logo: getLogo('replit.com'),
    screenshots: ['https://picsum.photos/seed/replit-ghostwriter1/800/450', 'https://picsum.photos/seed/replit-ghostwriter2/800/450'],
    category: 'coding',
    rating: 4.3,
    reviewCount: 4897,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    pricing: {
      en: 'Freemium',
      vi: 'Miễn phí cơ bản'
    },
    description: {
      en: 'Replit Ghostwriter is a powerful AI tool for coding that helps you achieve more in less time.',
      vi: 'Replit Ghostwriter là một công cụ AI mạnh mẽ dành cho coding giúp bạn đạt được nhiều thành tựu hơn trong thời gian ngắn hơn.'
    },
    features: {
      en: ['Advanced AI capabilities', 'User-friendly interface', 'Fast processing', 'Cloud sync'],
      vi: ['Khả năng AI tiên tiến', 'Giao diện thân thiện', 'Xử lý nhanh', 'Đồng bộ đám mây']
    },
    pros: {
      en: ['High quality output', 'Easy to use', 'Regular updates'],
      vi: ['Đầu ra chất lượng cao', 'Dễ sử dụng', 'Cập nhật thường xuyên']
    },
    cons: {
      en: ['Premium features require subscription', 'Learning curve for advanced features'],
      vi: ['Tính năng cao cấp yêu cầu trả phí', 'Cần thời gian học các tính năng nâng cao']
    },
    useCases: {
      en: [
        { title: 'Professional Use', examples: ['Enhancing daily workflows', 'Automating repetitive tasks'] },
        { title: 'Personal Projects', examples: ['Creative exploration', 'Learning new skills'] }
      ],
      vi: [
        { title: 'Sử dụng chuyên nghiệp', examples: ['Nâng cao quy trình làm việc hàng ngày', 'Tự động hóa các tác vụ lặp đi lặp lại'] },
        { title: 'Dự án cá nhân', examples: ['Khám phá sáng tạo', 'Học kỹ năng mới'] }
      ]
    },
    affiliateUrl: 'https://replit.com',
    howToUse: {
      en: ['Sign up for an account', 'Explore the dashboard', 'Start creating with AI'],
      vi: ['Đăng ký tài khoản', 'Khám phá bảng điều khiển', 'Bắt đầu sáng tạo với AI']
    }
  },
  {
    id: 'amazon-q',
    name: 'Amazon Q',
    domain: 'aws.amazon.com',
    logo: getLogo('aws.amazon.com'),
    screenshots: ['https://picsum.photos/seed/amazon-q1/800/450', 'https://picsum.photos/seed/amazon-q2/800/450'],
    category: 'coding',
    rating: 4.3,
    reviewCount: 1153,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    pricing: {
      en: 'Freemium',
      vi: 'Miễn phí cơ bản'
    },
    description: {
      en: 'Amazon Q is a powerful AI tool for coding that helps you achieve more in less time.',
      vi: 'Amazon Q là một công cụ AI mạnh mẽ dành cho coding giúp bạn đạt được nhiều thành tựu hơn trong thời gian ngắn hơn.'
    },
    features: {
      en: ['Advanced AI capabilities', 'User-friendly interface', 'Fast processing', 'Cloud sync'],
      vi: ['Khả năng AI tiên tiến', 'Giao diện thân thiện', 'Xử lý nhanh', 'Đồng bộ đám mây']
    },
    pros: {
      en: ['High quality output', 'Easy to use', 'Regular updates'],
      vi: ['Đầu ra chất lượng cao', 'Dễ sử dụng', 'Cập nhật thường xuyên']
    },
    cons: {
      en: ['Premium features require subscription', 'Learning curve for advanced features'],
      vi: ['Tính năng cao cấp yêu cầu trả phí', 'Cần thời gian học các tính năng nâng cao']
    },
    useCases: {
      en: [
        { title: 'Professional Use', examples: ['Enhancing daily workflows', 'Automating repetitive tasks'] },
        { title: 'Personal Projects', examples: ['Creative exploration', 'Learning new skills'] }
      ],
      vi: [
        { title: 'Sử dụng chuyên nghiệp', examples: ['Nâng cao quy trình làm việc hàng ngày', 'Tự động hóa các tác vụ lặp đi lặp lại'] },
        { title: 'Dự án cá nhân', examples: ['Khám phá sáng tạo', 'Học kỹ năng mới'] }
      ]
    },
    affiliateUrl: 'https://aws.amazon.com',
    howToUse: {
      en: ['Sign up for an account', 'Explore the dashboard', 'Start creating with AI'],
      vi: ['Đăng ký tài khoản', 'Khám phá bảng điều khiển', 'Bắt đầu sáng tạo với AI']
    }
  },
  {
    id: 'cody',
    name: 'Cody by Sourcegraph',
    domain: 'sourcegraph.com',
    logo: getLogo('sourcegraph.com'),
    screenshots: ['https://picsum.photos/seed/cody1/800/450', 'https://picsum.photos/seed/cody2/800/450'],
    category: 'coding',
    rating: 4.4,
    reviewCount: 380,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    pricing: {
      en: 'Freemium',
      vi: 'Miễn phí cơ bản'
    },
    description: {
      en: 'Cody by Sourcegraph is a powerful AI tool for coding that helps you achieve more in less time.',
      vi: 'Cody by Sourcegraph là một công cụ AI mạnh mẽ dành cho coding giúp bạn đạt được nhiều thành tựu hơn trong thời gian ngắn hơn.'
    },
    features: {
      en: ['Advanced AI capabilities', 'User-friendly interface', 'Fast processing', 'Cloud sync'],
      vi: ['Khả năng AI tiên tiến', 'Giao diện thân thiện', 'Xử lý nhanh', 'Đồng bộ đám mây']
    },
    pros: {
      en: ['High quality output', 'Easy to use', 'Regular updates'],
      vi: ['Đầu ra chất lượng cao', 'Dễ sử dụng', 'Cập nhật thường xuyên']
    },
    cons: {
      en: ['Premium features require subscription', 'Learning curve for advanced features'],
      vi: ['Tính năng cao cấp yêu cầu trả phí', 'Cần thời gian học các tính năng nâng cao']
    },
    useCases: {
      en: [
        { title: 'Professional Use', examples: ['Enhancing daily workflows', 'Automating repetitive tasks'] },
        { title: 'Personal Projects', examples: ['Creative exploration', 'Learning new skills'] }
      ],
      vi: [
        { title: 'Sử dụng chuyên nghiệp', examples: ['Nâng cao quy trình làm việc hàng ngày', 'Tự động hóa các tác vụ lặp đi lặp lại'] },
        { title: 'Dự án cá nhân', examples: ['Khám phá sáng tạo', 'Học kỹ năng mới'] }
      ]
    },
    affiliateUrl: 'https://sourcegraph.com',
    howToUse: {
      en: ['Sign up for an account', 'Explore the dashboard', 'Start creating with AI'],
      vi: ['Đăng ký tài khoản', 'Khám phá bảng điều khiển', 'Bắt đầu sáng tạo với AI']
    }
  },
  {
    id: 'supermaven',
    name: 'Supermaven',
    domain: 'supermaven.com',
    logo: getLogo('supermaven.com'),
    screenshots: ['https://picsum.photos/seed/supermaven1/800/450', 'https://picsum.photos/seed/supermaven2/800/450'],
    category: 'coding',
    rating: 4.5,
    reviewCount: 4371,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    pricing: {
      en: 'Freemium',
      vi: 'Miễn phí cơ bản'
    },
    description: {
      en: 'Supermaven is a powerful AI tool for coding that helps you achieve more in less time.',
      vi: 'Supermaven là một công cụ AI mạnh mẽ dành cho coding giúp bạn đạt được nhiều thành tựu hơn trong thời gian ngắn hơn.'
    },
    features: {
      en: ['Advanced AI capabilities', 'User-friendly interface', 'Fast processing', 'Cloud sync'],
      vi: ['Khả năng AI tiên tiến', 'Giao diện thân thiện', 'Xử lý nhanh', 'Đồng bộ đám mây']
    },
    pros: {
      en: ['High quality output', 'Easy to use', 'Regular updates'],
      vi: ['Đầu ra chất lượng cao', 'Dễ sử dụng', 'Cập nhật thường xuyên']
    },
    cons: {
      en: ['Premium features require subscription', 'Learning curve for advanced features'],
      vi: ['Tính năng cao cấp yêu cầu trả phí', 'Cần thời gian học các tính năng nâng cao']
    },
    useCases: {
      en: [
        { title: 'Professional Use', examples: ['Enhancing daily workflows', 'Automating repetitive tasks'] },
        { title: 'Personal Projects', examples: ['Creative exploration', 'Learning new skills'] }
      ],
      vi: [
        { title: 'Sử dụng chuyên nghiệp', examples: ['Nâng cao quy trình làm việc hàng ngày', 'Tự động hóa các tác vụ lặp đi lặp lại'] },
        { title: 'Dự án cá nhân', examples: ['Khám phá sáng tạo', 'Học kỹ năng mới'] }
      ]
    },
    affiliateUrl: 'https://supermaven.com',
    howToUse: {
      en: ['Sign up for an account', 'Explore the dashboard', 'Start creating with AI'],
      vi: ['Đăng ký tài khoản', 'Khám phá bảng điều khiển', 'Bắt đầu sáng tạo với AI']
    }
  },
  {
    id: 'bito',
    name: 'Bito',
    domain: 'bito.ai',
    logo: getLogo('bito.ai'),
    screenshots: ['https://picsum.photos/seed/bito1/800/450', 'https://picsum.photos/seed/bito2/800/450'],
    category: 'coding',
    rating: 4.4,
    reviewCount: 3854,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    pricing: {
      en: 'Freemium',
      vi: 'Miễn phí cơ bản'
    },
    description: {
      en: 'Bito is a powerful AI tool for coding that helps you achieve more in less time.',
      vi: 'Bito là một công cụ AI mạnh mẽ dành cho coding giúp bạn đạt được nhiều thành tựu hơn trong thời gian ngắn hơn.'
    },
    features: {
      en: ['Advanced AI capabilities', 'User-friendly interface', 'Fast processing', 'Cloud sync'],
      vi: ['Khả năng AI tiên tiến', 'Giao diện thân thiện', 'Xử lý nhanh', 'Đồng bộ đám mây']
    },
    pros: {
      en: ['High quality output', 'Easy to use', 'Regular updates'],
      vi: ['Đầu ra chất lượng cao', 'Dễ sử dụng', 'Cập nhật thường xuyên']
    },
    cons: {
      en: ['Premium features require subscription', 'Learning curve for advanced features'],
      vi: ['Tính năng cao cấp yêu cầu trả phí', 'Cần thời gian học các tính năng nâng cao']
    },
    useCases: {
      en: [
        { title: 'Professional Use', examples: ['Enhancing daily workflows', 'Automating repetitive tasks'] },
        { title: 'Personal Projects', examples: ['Creative exploration', 'Learning new skills'] }
      ],
      vi: [
        { title: 'Sử dụng chuyên nghiệp', examples: ['Nâng cao quy trình làm việc hàng ngày', 'Tự động hóa các tác vụ lặp đi lặp lại'] },
        { title: 'Dự án cá nhân', examples: ['Khám phá sáng tạo', 'Học kỹ năng mới'] }
      ]
    },
    affiliateUrl: 'https://bito.ai',
    howToUse: {
      en: ['Sign up for an account', 'Explore the dashboard', 'Start creating with AI'],
      vi: ['Đăng ký tài khoản', 'Khám phá bảng điều khiển', 'Bắt đầu sáng tạo với AI']
    }
  },
  {
    id: 'mintlify',
    name: 'Mintlify',
    domain: 'mintlify.com',
    logo: getLogo('mintlify.com'),
    screenshots: ['https://picsum.photos/seed/mintlify1/800/450', 'https://picsum.photos/seed/mintlify2/800/450'],
    category: 'coding',
    rating: 4.6,
    reviewCount: 1017,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    pricing: {
      en: 'Freemium',
      vi: 'Miễn phí cơ bản'
    },
    description: {
      en: 'Mintlify is a powerful AI tool for coding that helps you achieve more in less time.',
      vi: 'Mintlify là một công cụ AI mạnh mẽ dành cho coding giúp bạn đạt được nhiều thành tựu hơn trong thời gian ngắn hơn.'
    },
    features: {
      en: ['Advanced AI capabilities', 'User-friendly interface', 'Fast processing', 'Cloud sync'],
      vi: ['Khả năng AI tiên tiến', 'Giao diện thân thiện', 'Xử lý nhanh', 'Đồng bộ đám mây']
    },
    pros: {
      en: ['High quality output', 'Easy to use', 'Regular updates'],
      vi: ['Đầu ra chất lượng cao', 'Dễ sử dụng', 'Cập nhật thường xuyên']
    },
    cons: {
      en: ['Premium features require subscription', 'Learning curve for advanced features'],
      vi: ['Tính năng cao cấp yêu cầu trả phí', 'Cần thời gian học các tính năng nâng cao']
    },
    useCases: {
      en: [
        { title: 'Professional Use', examples: ['Enhancing daily workflows', 'Automating repetitive tasks'] },
        { title: 'Personal Projects', examples: ['Creative exploration', 'Learning new skills'] }
      ],
      vi: [
        { title: 'Sử dụng chuyên nghiệp', examples: ['Nâng cao quy trình làm việc hàng ngày', 'Tự động hóa các tác vụ lặp đi lặp lại'] },
        { title: 'Dự án cá nhân', examples: ['Khám phá sáng tạo', 'Học kỹ năng mới'] }
      ]
    },
    affiliateUrl: 'https://mintlify.com',
    howToUse: {
      en: ['Sign up for an account', 'Explore the dashboard', 'Start creating with AI'],
      vi: ['Đăng ký tài khoản', 'Khám phá bảng điều khiển', 'Bắt đầu sáng tạo với AI']
    }
  },
  {
    id: 'warp',
    name: 'Warp',
    domain: 'warp.dev',
    logo: getLogo('warp.dev'),
    screenshots: ['https://picsum.photos/seed/warp1/800/450', 'https://picsum.photos/seed/warp2/800/450'],
    category: 'coding',
    rating: 4.6,
    reviewCount: 3212,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    pricing: {
      en: 'Freemium',
      vi: 'Miễn phí cơ bản'
    },
    description: {
      en: 'Warp is a powerful AI tool for coding that helps you achieve more in less time.',
      vi: 'Warp là một công cụ AI mạnh mẽ dành cho coding giúp bạn đạt được nhiều thành tựu hơn trong thời gian ngắn hơn.'
    },
    features: {
      en: ['Advanced AI capabilities', 'User-friendly interface', 'Fast processing', 'Cloud sync'],
      vi: ['Khả năng AI tiên tiến', 'Giao diện thân thiện', 'Xử lý nhanh', 'Đồng bộ đám mây']
    },
    pros: {
      en: ['High quality output', 'Easy to use', 'Regular updates'],
      vi: ['Đầu ra chất lượng cao', 'Dễ sử dụng', 'Cập nhật thường xuyên']
    },
    cons: {
      en: ['Premium features require subscription', 'Learning curve for advanced features'],
      vi: ['Tính năng cao cấp yêu cầu trả phí', 'Cần thời gian học các tính năng nâng cao']
    },
    useCases: {
      en: [
        { title: 'Professional Use', examples: ['Enhancing daily workflows', 'Automating repetitive tasks'] },
        { title: 'Personal Projects', examples: ['Creative exploration', 'Learning new skills'] }
      ],
      vi: [
        { title: 'Sử dụng chuyên nghiệp', examples: ['Nâng cao quy trình làm việc hàng ngày', 'Tự động hóa các tác vụ lặp đi lặp lại'] },
        { title: 'Dự án cá nhân', examples: ['Khám phá sáng tạo', 'Học kỹ năng mới'] }
      ]
    },
    affiliateUrl: 'https://warp.dev',
    howToUse: {
      en: ['Sign up for an account', 'Explore the dashboard', 'Start creating with AI'],
      vi: ['Đăng ký tài khoản', 'Khám phá bảng điều khiển', 'Bắt đầu sáng tạo với AI']
    }
  },
  {
    id: 'figma-ai',
    name: 'Figma AI',
    domain: 'figma.com',
    logo: getLogo('figma.com'),
    screenshots: ['https://picsum.photos/seed/figma-ai1/800/450', 'https://picsum.photos/seed/figma-ai2/800/450'],
    category: 'image',
    rating: 4.6,
    reviewCount: 1441,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    pricing: {
      en: 'Freemium',
      vi: 'Miễn phí cơ bản'
    },
    description: {
      en: 'Figma AI is a powerful AI tool for image that helps you achieve more in less time.',
      vi: 'Figma AI là một công cụ AI mạnh mẽ dành cho image giúp bạn đạt được nhiều thành tựu hơn trong thời gian ngắn hơn.'
    },
    features: {
      en: ['Advanced AI capabilities', 'User-friendly interface', 'Fast processing', 'Cloud sync'],
      vi: ['Khả năng AI tiên tiến', 'Giao diện thân thiện', 'Xử lý nhanh', 'Đồng bộ đám mây']
    },
    pros: {
      en: ['High quality output', 'Easy to use', 'Regular updates'],
      vi: ['Đầu ra chất lượng cao', 'Dễ sử dụng', 'Cập nhật thường xuyên']
    },
    cons: {
      en: ['Premium features require subscription', 'Learning curve for advanced features'],
      vi: ['Tính năng cao cấp yêu cầu trả phí', 'Cần thời gian học các tính năng nâng cao']
    },
    useCases: {
      en: [
        { title: 'Professional Use', examples: ['Enhancing daily workflows', 'Automating repetitive tasks'] },
        { title: 'Personal Projects', examples: ['Creative exploration', 'Learning new skills'] }
      ],
      vi: [
        { title: 'Sử dụng chuyên nghiệp', examples: ['Nâng cao quy trình làm việc hàng ngày', 'Tự động hóa các tác vụ lặp đi lặp lại'] },
        { title: 'Dự án cá nhân', examples: ['Khám phá sáng tạo', 'Học kỹ năng mới'] }
      ]
    },
    affiliateUrl: 'https://figma.com',
    howToUse: {
      en: ['Sign up for an account', 'Explore the dashboard', 'Start creating with AI'],
      vi: ['Đăng ký tài khoản', 'Khám phá bảng điều khiển', 'Bắt đầu sáng tạo với AI']
    }
  },
  {
    id: 'canva-magic',
    name: 'Canva Magic Studio',
    domain: 'canva.com',
    logo: getLogo('canva.com'),
    screenshots: ['https://picsum.photos/seed/canva-magic1/800/450', 'https://picsum.photos/seed/canva-magic2/800/450'],
    category: 'image',
    rating: 4.7,
    reviewCount: 4553,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    pricing: {
      en: 'Freemium',
      vi: 'Miễn phí cơ bản'
    },
    description: {
      en: 'Canva Magic Studio is a powerful AI tool for image that helps you achieve more in less time.',
      vi: 'Canva Magic Studio là một công cụ AI mạnh mẽ dành cho image giúp bạn đạt được nhiều thành tựu hơn trong thời gian ngắn hơn.'
    },
    features: {
      en: ['Advanced AI capabilities', 'User-friendly interface', 'Fast processing', 'Cloud sync'],
      vi: ['Khả năng AI tiên tiến', 'Giao diện thân thiện', 'Xử lý nhanh', 'Đồng bộ đám mây']
    },
    pros: {
      en: ['High quality output', 'Easy to use', 'Regular updates'],
      vi: ['Đầu ra chất lượng cao', 'Dễ sử dụng', 'Cập nhật thường xuyên']
    },
    cons: {
      en: ['Premium features require subscription', 'Learning curve for advanced features'],
      vi: ['Tính năng cao cấp yêu cầu trả phí', 'Cần thời gian học các tính năng nâng cao']
    },
    useCases: {
      en: [
        { title: 'Professional Use', examples: ['Enhancing daily workflows', 'Automating repetitive tasks'] },
        { title: 'Personal Projects', examples: ['Creative exploration', 'Learning new skills'] }
      ],
      vi: [
        { title: 'Sử dụng chuyên nghiệp', examples: ['Nâng cao quy trình làm việc hàng ngày', 'Tự động hóa các tác vụ lặp đi lặp lại'] },
        { title: 'Dự án cá nhân', examples: ['Khám phá sáng tạo', 'Học kỹ năng mới'] }
      ]
    },
    affiliateUrl: 'https://canva.com',
    howToUse: {
      en: ['Sign up for an account', 'Explore the dashboard', 'Start creating with AI'],
      vi: ['Đăng ký tài khoản', 'Khám phá bảng điều khiển', 'Bắt đầu sáng tạo với AI']
    }
  },
  {
    id: 'adobe-firefly',
    name: 'Adobe Firefly',
    domain: 'adobe.com',
    logo: getLogo('adobe.com'),
    screenshots: ['https://picsum.photos/seed/adobe-firefly1/800/450', 'https://picsum.photos/seed/adobe-firefly2/800/450'],
    category: 'image',
    rating: 5.0,
    reviewCount: 4507,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    pricing: {
      en: 'Freemium',
      vi: 'Miễn phí cơ bản'
    },
    description: {
      en: 'Adobe Firefly is a powerful AI tool for image that helps you achieve more in less time.',
      vi: 'Adobe Firefly là một công cụ AI mạnh mẽ dành cho image giúp bạn đạt được nhiều thành tựu hơn trong thời gian ngắn hơn.'
    },
    features: {
      en: ['Advanced AI capabilities', 'User-friendly interface', 'Fast processing', 'Cloud sync'],
      vi: ['Khả năng AI tiên tiến', 'Giao diện thân thiện', 'Xử lý nhanh', 'Đồng bộ đám mây']
    },
    pros: {
      en: ['High quality output', 'Easy to use', 'Regular updates'],
      vi: ['Đầu ra chất lượng cao', 'Dễ sử dụng', 'Cập nhật thường xuyên']
    },
    cons: {
      en: ['Premium features require subscription', 'Learning curve for advanced features'],
      vi: ['Tính năng cao cấp yêu cầu trả phí', 'Cần thời gian học các tính năng nâng cao']
    },
    useCases: {
      en: [
        { title: 'Professional Use', examples: ['Enhancing daily workflows', 'Automating repetitive tasks'] },
        { title: 'Personal Projects', examples: ['Creative exploration', 'Learning new skills'] }
      ],
      vi: [
        { title: 'Sử dụng chuyên nghiệp', examples: ['Nâng cao quy trình làm việc hàng ngày', 'Tự động hóa các tác vụ lặp đi lặp lại'] },
        { title: 'Dự án cá nhân', examples: ['Khám phá sáng tạo', 'Học kỹ năng mới'] }
      ]
    },
    affiliateUrl: 'https://adobe.com',
    howToUse: {
      en: ['Sign up for an account', 'Explore the dashboard', 'Start creating with AI'],
      vi: ['Đăng ký tài khoản', 'Khám phá bảng điều khiển', 'Bắt đầu sáng tạo với AI']
    }
  },
  {
    id: 'leonardo-ai',
    name: 'Leonardo.Ai',
    domain: 'leonardo.ai',
    logo: getLogo('leonardo.ai'),
    screenshots: ['https://picsum.photos/seed/leonardo-ai1/800/450', 'https://picsum.photos/seed/leonardo-ai2/800/450'],
    category: 'image',
    rating: 4.3,
    reviewCount: 742,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    pricing: {
      en: 'Freemium',
      vi: 'Miễn phí cơ bản'
    },
    description: {
      en: 'Leonardo.Ai is a powerful AI tool for image that helps you achieve more in less time.',
      vi: 'Leonardo.Ai là một công cụ AI mạnh mẽ dành cho image giúp bạn đạt được nhiều thành tựu hơn trong thời gian ngắn hơn.'
    },
    features: {
      en: ['Advanced AI capabilities', 'User-friendly interface', 'Fast processing', 'Cloud sync'],
      vi: ['Khả năng AI tiên tiến', 'Giao diện thân thiện', 'Xử lý nhanh', 'Đồng bộ đám mây']
    },
    pros: {
      en: ['High quality output', 'Easy to use', 'Regular updates'],
      vi: ['Đầu ra chất lượng cao', 'Dễ sử dụng', 'Cập nhật thường xuyên']
    },
    cons: {
      en: ['Premium features require subscription', 'Learning curve for advanced features'],
      vi: ['Tính năng cao cấp yêu cầu trả phí', 'Cần thời gian học các tính năng nâng cao']
    },
    useCases: {
      en: [
        { title: 'Professional Use', examples: ['Enhancing daily workflows', 'Automating repetitive tasks'] },
        { title: 'Personal Projects', examples: ['Creative exploration', 'Learning new skills'] }
      ],
      vi: [
        { title: 'Sử dụng chuyên nghiệp', examples: ['Nâng cao quy trình làm việc hàng ngày', 'Tự động hóa các tác vụ lặp đi lặp lại'] },
        { title: 'Dự án cá nhân', examples: ['Khám phá sáng tạo', 'Học kỹ năng mới'] }
      ]
    },
    affiliateUrl: 'https://leonardo.ai',
    howToUse: {
      en: ['Sign up for an account', 'Explore the dashboard', 'Start creating with AI'],
      vi: ['Đăng ký tài khoản', 'Khám phá bảng điều khiển', 'Bắt đầu sáng tạo với AI']
    }
  },
  {
    id: 'ideogram',
    name: 'Ideogram',
    domain: 'ideogram.ai',
    logo: getLogo('ideogram.ai'),
    screenshots: ['https://picsum.photos/seed/ideogram1/800/450', 'https://picsum.photos/seed/ideogram2/800/450'],
    category: 'image',
    rating: 4.7,
    reviewCount: 614,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    pricing: {
      en: 'Freemium',
      vi: 'Miễn phí cơ bản'
    },
    description: {
      en: 'Ideogram is a powerful AI tool for image that helps you achieve more in less time.',
      vi: 'Ideogram là một công cụ AI mạnh mẽ dành cho image giúp bạn đạt được nhiều thành tựu hơn trong thời gian ngắn hơn.'
    },
    features: {
      en: ['Advanced AI capabilities', 'User-friendly interface', 'Fast processing', 'Cloud sync'],
      vi: ['Khả năng AI tiên tiến', 'Giao diện thân thiện', 'Xử lý nhanh', 'Đồng bộ đám mây']
    },
    pros: {
      en: ['High quality output', 'Easy to use', 'Regular updates'],
      vi: ['Đầu ra chất lượng cao', 'Dễ sử dụng', 'Cập nhật thường xuyên']
    },
    cons: {
      en: ['Premium features require subscription', 'Learning curve for advanced features'],
      vi: ['Tính năng cao cấp yêu cầu trả phí', 'Cần thời gian học các tính năng nâng cao']
    },
    useCases: {
      en: [
        { title: 'Professional Use', examples: ['Enhancing daily workflows', 'Automating repetitive tasks'] },
        { title: 'Personal Projects', examples: ['Creative exploration', 'Learning new skills'] }
      ],
      vi: [
        { title: 'Sử dụng chuyên nghiệp', examples: ['Nâng cao quy trình làm việc hàng ngày', 'Tự động hóa các tác vụ lặp đi lặp lại'] },
        { title: 'Dự án cá nhân', examples: ['Khám phá sáng tạo', 'Học kỹ năng mới'] }
      ]
    },
    affiliateUrl: 'https://ideogram.ai',
    howToUse: {
      en: ['Sign up for an account', 'Explore the dashboard', 'Start creating with AI'],
      vi: ['Đăng ký tài khoản', 'Khám phá bảng điều khiển', 'Bắt đầu sáng tạo với AI']
    }
  },
  {
    id: 'krea',
    name: 'Krea AI',
    domain: 'krea.ai',
    logo: getLogo('krea.ai'),
    screenshots: ['https://picsum.photos/seed/krea1/800/450', 'https://picsum.photos/seed/krea2/800/450'],
    category: 'image',
    rating: 4.9,
    reviewCount: 4426,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    pricing: {
      en: 'Freemium',
      vi: 'Miễn phí cơ bản'
    },
    description: {
      en: 'Krea AI is a powerful AI tool for image that helps you achieve more in less time.',
      vi: 'Krea AI là một công cụ AI mạnh mẽ dành cho image giúp bạn đạt được nhiều thành tựu hơn trong thời gian ngắn hơn.'
    },
    features: {
      en: ['Advanced AI capabilities', 'User-friendly interface', 'Fast processing', 'Cloud sync'],
      vi: ['Khả năng AI tiên tiến', 'Giao diện thân thiện', 'Xử lý nhanh', 'Đồng bộ đám mây']
    },
    pros: {
      en: ['High quality output', 'Easy to use', 'Regular updates'],
      vi: ['Đầu ra chất lượng cao', 'Dễ sử dụng', 'Cập nhật thường xuyên']
    },
    cons: {
      en: ['Premium features require subscription', 'Learning curve for advanced features'],
      vi: ['Tính năng cao cấp yêu cầu trả phí', 'Cần thời gian học các tính năng nâng cao']
    },
    useCases: {
      en: [
        { title: 'Professional Use', examples: ['Enhancing daily workflows', 'Automating repetitive tasks'] },
        { title: 'Personal Projects', examples: ['Creative exploration', 'Learning new skills'] }
      ],
      vi: [
        { title: 'Sử dụng chuyên nghiệp', examples: ['Nâng cao quy trình làm việc hàng ngày', 'Tự động hóa các tác vụ lặp đi lặp lại'] },
        { title: 'Dự án cá nhân', examples: ['Khám phá sáng tạo', 'Học kỹ năng mới'] }
      ]
    },
    affiliateUrl: 'https://krea.ai',
    howToUse: {
      en: ['Sign up for an account', 'Explore the dashboard', 'Start creating with AI'],
      vi: ['Đăng ký tài khoản', 'Khám phá bảng điều khiển', 'Bắt đầu sáng tạo với AI']
    }
  },
  {
    id: 'magnific',
    name: 'Magnific AI',
    domain: 'magnific.ai',
    logo: getLogo('magnific.ai'),
    screenshots: ['https://picsum.photos/seed/magnific1/800/450', 'https://picsum.photos/seed/magnific2/800/450'],
    category: 'image',
    rating: 4.8,
    reviewCount: 3576,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    pricing: {
      en: 'Freemium',
      vi: 'Miễn phí cơ bản'
    },
    description: {
      en: 'Magnific AI is a powerful AI tool for image that helps you achieve more in less time.',
      vi: 'Magnific AI là một công cụ AI mạnh mẽ dành cho image giúp bạn đạt được nhiều thành tựu hơn trong thời gian ngắn hơn.'
    },
    features: {
      en: ['Advanced AI capabilities', 'User-friendly interface', 'Fast processing', 'Cloud sync'],
      vi: ['Khả năng AI tiên tiến', 'Giao diện thân thiện', 'Xử lý nhanh', 'Đồng bộ đám mây']
    },
    pros: {
      en: ['High quality output', 'Easy to use', 'Regular updates'],
      vi: ['Đầu ra chất lượng cao', 'Dễ sử dụng', 'Cập nhật thường xuyên']
    },
    cons: {
      en: ['Premium features require subscription', 'Learning curve for advanced features'],
      vi: ['Tính năng cao cấp yêu cầu trả phí', 'Cần thời gian học các tính năng nâng cao']
    },
    useCases: {
      en: [
        { title: 'Professional Use', examples: ['Enhancing daily workflows', 'Automating repetitive tasks'] },
        { title: 'Personal Projects', examples: ['Creative exploration', 'Learning new skills'] }
      ],
      vi: [
        { title: 'Sử dụng chuyên nghiệp', examples: ['Nâng cao quy trình làm việc hàng ngày', 'Tự động hóa các tác vụ lặp đi lặp lại'] },
        { title: 'Dự án cá nhân', examples: ['Khám phá sáng tạo', 'Học kỹ năng mới'] }
      ]
    },
    affiliateUrl: 'https://magnific.ai',
    howToUse: {
      en: ['Sign up for an account', 'Explore the dashboard', 'Start creating with AI'],
      vi: ['Đăng ký tài khoản', 'Khám phá bảng điều khiển', 'Bắt đầu sáng tạo với AI']
    }
  },
  {
    id: 'freepik-pikaso',
    name: 'Freepik Pikaso',
    domain: 'freepik.com',
    logo: getLogo('freepik.com'),
    screenshots: ['https://picsum.photos/seed/freepik-pikaso1/800/450', 'https://picsum.photos/seed/freepik-pikaso2/800/450'],
    category: 'image',
    rating: 4.5,
    reviewCount: 523,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    pricing: {
      en: 'Freemium',
      vi: 'Miễn phí cơ bản'
    },
    description: {
      en: 'Freepik Pikaso is a powerful AI tool for image that helps you achieve more in less time.',
      vi: 'Freepik Pikaso là một công cụ AI mạnh mẽ dành cho image giúp bạn đạt được nhiều thành tựu hơn trong thời gian ngắn hơn.'
    },
    features: {
      en: ['Advanced AI capabilities', 'User-friendly interface', 'Fast processing', 'Cloud sync'],
      vi: ['Khả năng AI tiên tiến', 'Giao diện thân thiện', 'Xử lý nhanh', 'Đồng bộ đám mây']
    },
    pros: {
      en: ['High quality output', 'Easy to use', 'Regular updates'],
      vi: ['Đầu ra chất lượng cao', 'Dễ sử dụng', 'Cập nhật thường xuyên']
    },
    cons: {
      en: ['Premium features require subscription', 'Learning curve for advanced features'],
      vi: ['Tính năng cao cấp yêu cầu trả phí', 'Cần thời gian học các tính năng nâng cao']
    },
    useCases: {
      en: [
        { title: 'Professional Use', examples: ['Enhancing daily workflows', 'Automating repetitive tasks'] },
        { title: 'Personal Projects', examples: ['Creative exploration', 'Learning new skills'] }
      ],
      vi: [
        { title: 'Sử dụng chuyên nghiệp', examples: ['Nâng cao quy trình làm việc hàng ngày', 'Tự động hóa các tác vụ lặp đi lặp lại'] },
        { title: 'Dự án cá nhân', examples: ['Khám phá sáng tạo', 'Học kỹ năng mới'] }
      ]
    },
    affiliateUrl: 'https://freepik.com',
    howToUse: {
      en: ['Sign up for an account', 'Explore the dashboard', 'Start creating with AI'],
      vi: ['Đăng ký tài khoản', 'Khám phá bảng điều khiển', 'Bắt đầu sáng tạo với AI']
    }
  },
  {
    id: 'recraft',
    name: 'Recraft',
    domain: 'recraft.ai',
    logo: getLogo('recraft.ai'),
    screenshots: ['https://picsum.photos/seed/recraft1/800/450', 'https://picsum.photos/seed/recraft2/800/450'],
    category: 'image',
    rating: 4.5,
    reviewCount: 1022,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    pricing: {
      en: 'Freemium',
      vi: 'Miễn phí cơ bản'
    },
    description: {
      en: 'Recraft is a powerful AI tool for image that helps you achieve more in less time.',
      vi: 'Recraft là một công cụ AI mạnh mẽ dành cho image giúp bạn đạt được nhiều thành tựu hơn trong thời gian ngắn hơn.'
    },
    features: {
      en: ['Advanced AI capabilities', 'User-friendly interface', 'Fast processing', 'Cloud sync'],
      vi: ['Khả năng AI tiên tiến', 'Giao diện thân thiện', 'Xử lý nhanh', 'Đồng bộ đám mây']
    },
    pros: {
      en: ['High quality output', 'Easy to use', 'Regular updates'],
      vi: ['Đầu ra chất lượng cao', 'Dễ sử dụng', 'Cập nhật thường xuyên']
    },
    cons: {
      en: ['Premium features require subscription', 'Learning curve for advanced features'],
      vi: ['Tính năng cao cấp yêu cầu trả phí', 'Cần thời gian học các tính năng nâng cao']
    },
    useCases: {
      en: [
        { title: 'Professional Use', examples: ['Enhancing daily workflows', 'Automating repetitive tasks'] },
        { title: 'Personal Projects', examples: ['Creative exploration', 'Learning new skills'] }
      ],
      vi: [
        { title: 'Sử dụng chuyên nghiệp', examples: ['Nâng cao quy trình làm việc hàng ngày', 'Tự động hóa các tác vụ lặp đi lặp lại'] },
        { title: 'Dự án cá nhân', examples: ['Khám phá sáng tạo', 'Học kỹ năng mới'] }
      ]
    },
    affiliateUrl: 'https://recraft.ai',
    howToUse: {
      en: ['Sign up for an account', 'Explore the dashboard', 'Start creating with AI'],
      vi: ['Đăng ký tài khoản', 'Khám phá bảng điều khiển', 'Bắt đầu sáng tạo với AI']
    }
  },
  {
    id: 'photoroom',
    name: 'Photoroom',
    domain: 'photoroom.com',
    logo: getLogo('photoroom.com'),
    screenshots: ['https://picsum.photos/seed/photoroom1/800/450', 'https://picsum.photos/seed/photoroom2/800/450'],
    category: 'image',
    rating: 4.9,
    reviewCount: 1428,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    pricing: {
      en: 'Freemium',
      vi: 'Miễn phí cơ bản'
    },
    description: {
      en: 'Photoroom is a powerful AI tool for image that helps you achieve more in less time.',
      vi: 'Photoroom là một công cụ AI mạnh mẽ dành cho image giúp bạn đạt được nhiều thành tựu hơn trong thời gian ngắn hơn.'
    },
    features: {
      en: ['Advanced AI capabilities', 'User-friendly interface', 'Fast processing', 'Cloud sync'],
      vi: ['Khả năng AI tiên tiến', 'Giao diện thân thiện', 'Xử lý nhanh', 'Đồng bộ đám mây']
    },
    pros: {
      en: ['High quality output', 'Easy to use', 'Regular updates'],
      vi: ['Đầu ra chất lượng cao', 'Dễ sử dụng', 'Cập nhật thường xuyên']
    },
    cons: {
      en: ['Premium features require subscription', 'Learning curve for advanced features'],
      vi: ['Tính năng cao cấp yêu cầu trả phí', 'Cần thời gian học các tính năng nâng cao']
    },
    useCases: {
      en: [
        { title: 'Professional Use', examples: ['Enhancing daily workflows', 'Automating repetitive tasks'] },
        { title: 'Personal Projects', examples: ['Creative exploration', 'Learning new skills'] }
      ],
      vi: [
        { title: 'Sử dụng chuyên nghiệp', examples: ['Nâng cao quy trình làm việc hàng ngày', 'Tự động hóa các tác vụ lặp đi lặp lại'] },
        { title: 'Dự án cá nhân', examples: ['Khám phá sáng tạo', 'Học kỹ năng mới'] }
      ]
    },
    affiliateUrl: 'https://photoroom.com',
    howToUse: {
      en: ['Sign up for an account', 'Explore the dashboard', 'Start creating with AI'],
      vi: ['Đăng ký tài khoản', 'Khám phá bảng điều khiển', 'Bắt đầu sáng tạo với AI']
    }
  },
  {
    id: 'luma-dream-machine',
    name: 'Luma Dream Machine',
    domain: 'lumalabs.ai',
    logo: getLogo('lumalabs.ai'),
    screenshots: ['https://picsum.photos/seed/luma-dream-machine1/800/450', 'https://picsum.photos/seed/luma-dream-machine2/800/450'],
    category: 'video',
    rating: 4.1,
    reviewCount: 2859,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    pricing: {
      en: 'Freemium',
      vi: 'Miễn phí cơ bản'
    },
    description: {
      en: 'Luma Dream Machine is a powerful AI tool for video that helps you achieve more in less time.',
      vi: 'Luma Dream Machine là một công cụ AI mạnh mẽ dành cho video giúp bạn đạt được nhiều thành tựu hơn trong thời gian ngắn hơn.'
    },
    features: {
      en: ['Advanced AI capabilities', 'User-friendly interface', 'Fast processing', 'Cloud sync'],
      vi: ['Khả năng AI tiên tiến', 'Giao diện thân thiện', 'Xử lý nhanh', 'Đồng bộ đám mây']
    },
    pros: {
      en: ['High quality output', 'Easy to use', 'Regular updates'],
      vi: ['Đầu ra chất lượng cao', 'Dễ sử dụng', 'Cập nhật thường xuyên']
    },
    cons: {
      en: ['Premium features require subscription', 'Learning curve for advanced features'],
      vi: ['Tính năng cao cấp yêu cầu trả phí', 'Cần thời gian học các tính năng nâng cao']
    },
    useCases: {
      en: [
        { title: 'Professional Use', examples: ['Enhancing daily workflows', 'Automating repetitive tasks'] },
        { title: 'Personal Projects', examples: ['Creative exploration', 'Learning new skills'] }
      ],
      vi: [
        { title: 'Sử dụng chuyên nghiệp', examples: ['Nâng cao quy trình làm việc hàng ngày', 'Tự động hóa các tác vụ lặp đi lặp lại'] },
        { title: 'Dự án cá nhân', examples: ['Khám phá sáng tạo', 'Học kỹ năng mới'] }
      ]
    },
    affiliateUrl: 'https://lumalabs.ai',
    howToUse: {
      en: ['Sign up for an account', 'Explore the dashboard', 'Start creating with AI'],
      vi: ['Đăng ký tài khoản', 'Khám phá bảng điều khiển', 'Bắt đầu sáng tạo với AI']
    }
  },
  {
    id: 'haiper',
    name: 'Haiper',
    domain: 'haiper.ai',
    logo: getLogo('haiper.ai'),
    screenshots: ['https://picsum.photos/seed/haiper1/800/450', 'https://picsum.photos/seed/haiper2/800/450'],
    category: 'video',
    rating: 4.8,
    reviewCount: 3635,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    pricing: {
      en: 'Freemium',
      vi: 'Miễn phí cơ bản'
    },
    description: {
      en: 'Haiper is a powerful AI tool for video that helps you achieve more in less time.',
      vi: 'Haiper là một công cụ AI mạnh mẽ dành cho video giúp bạn đạt được nhiều thành tựu hơn trong thời gian ngắn hơn.'
    },
    features: {
      en: ['Advanced AI capabilities', 'User-friendly interface', 'Fast processing', 'Cloud sync'],
      vi: ['Khả năng AI tiên tiến', 'Giao diện thân thiện', 'Xử lý nhanh', 'Đồng bộ đám mây']
    },
    pros: {
      en: ['High quality output', 'Easy to use', 'Regular updates'],
      vi: ['Đầu ra chất lượng cao', 'Dễ sử dụng', 'Cập nhật thường xuyên']
    },
    cons: {
      en: ['Premium features require subscription', 'Learning curve for advanced features'],
      vi: ['Tính năng cao cấp yêu cầu trả phí', 'Cần thời gian học các tính năng nâng cao']
    },
    useCases: {
      en: [
        { title: 'Professional Use', examples: ['Enhancing daily workflows', 'Automating repetitive tasks'] },
        { title: 'Personal Projects', examples: ['Creative exploration', 'Learning new skills'] }
      ],
      vi: [
        { title: 'Sử dụng chuyên nghiệp', examples: ['Nâng cao quy trình làm việc hàng ngày', 'Tự động hóa các tác vụ lặp đi lặp lại'] },
        { title: 'Dự án cá nhân', examples: ['Khám phá sáng tạo', 'Học kỹ năng mới'] }
      ]
    },
    affiliateUrl: 'https://haiper.ai',
    howToUse: {
      en: ['Sign up for an account', 'Explore the dashboard', 'Start creating with AI'],
      vi: ['Đăng ký tài khoản', 'Khám phá bảng điều khiển', 'Bắt đầu sáng tạo với AI']
    }
  },
  {
    id: 'synthesia',
    name: 'Synthesia',
    domain: 'synthesia.io',
    logo: getLogo('synthesia.io'),
    screenshots: ['https://picsum.photos/seed/synthesia1/800/450', 'https://picsum.photos/seed/synthesia2/800/450'],
    category: 'video',
    rating: 4.1,
    reviewCount: 1442,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    pricing: {
      en: 'Freemium',
      vi: 'Miễn phí cơ bản'
    },
    description: {
      en: 'Synthesia is a powerful AI tool for video that helps you achieve more in less time.',
      vi: 'Synthesia là một công cụ AI mạnh mẽ dành cho video giúp bạn đạt được nhiều thành tựu hơn trong thời gian ngắn hơn.'
    },
    features: {
      en: ['Advanced AI capabilities', 'User-friendly interface', 'Fast processing', 'Cloud sync'],
      vi: ['Khả năng AI tiên tiến', 'Giao diện thân thiện', 'Xử lý nhanh', 'Đồng bộ đám mây']
    },
    pros: {
      en: ['High quality output', 'Easy to use', 'Regular updates'],
      vi: ['Đầu ra chất lượng cao', 'Dễ sử dụng', 'Cập nhật thường xuyên']
    },
    cons: {
      en: ['Premium features require subscription', 'Learning curve for advanced features'],
      vi: ['Tính năng cao cấp yêu cầu trả phí', 'Cần thời gian học các tính năng nâng cao']
    },
    useCases: {
      en: [
        { title: 'Professional Use', examples: ['Enhancing daily workflows', 'Automating repetitive tasks'] },
        { title: 'Personal Projects', examples: ['Creative exploration', 'Learning new skills'] }
      ],
      vi: [
        { title: 'Sử dụng chuyên nghiệp', examples: ['Nâng cao quy trình làm việc hàng ngày', 'Tự động hóa các tác vụ lặp đi lặp lại'] },
        { title: 'Dự án cá nhân', examples: ['Khám phá sáng tạo', 'Học kỹ năng mới'] }
      ]
    },
    affiliateUrl: 'https://synthesia.io',
    howToUse: {
      en: ['Sign up for an account', 'Explore the dashboard', 'Start creating with AI'],
      vi: ['Đăng ký tài khoản', 'Khám phá bảng điều khiển', 'Bắt đầu sáng tạo với AI']
    }
  },
  {
    id: 'opus-clip',
    name: 'Opus Clip',
    domain: 'opus.pro',
    logo: getLogo('opus.pro'),
    screenshots: ['https://picsum.photos/seed/opus-clip1/800/450', 'https://picsum.photos/seed/opus-clip2/800/450'],
    category: 'video',
    rating: 4.9,
    reviewCount: 796,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    pricing: {
      en: 'Freemium',
      vi: 'Miễn phí cơ bản'
    },
    description: {
      en: 'Opus Clip is a powerful AI tool for video that helps you achieve more in less time.',
      vi: 'Opus Clip là một công cụ AI mạnh mẽ dành cho video giúp bạn đạt được nhiều thành tựu hơn trong thời gian ngắn hơn.'
    },
    features: {
      en: ['Advanced AI capabilities', 'User-friendly interface', 'Fast processing', 'Cloud sync'],
      vi: ['Khả năng AI tiên tiến', 'Giao diện thân thiện', 'Xử lý nhanh', 'Đồng bộ đám mây']
    },
    pros: {
      en: ['High quality output', 'Easy to use', 'Regular updates'],
      vi: ['Đầu ra chất lượng cao', 'Dễ sử dụng', 'Cập nhật thường xuyên']
    },
    cons: {
      en: ['Premium features require subscription', 'Learning curve for advanced features'],
      vi: ['Tính năng cao cấp yêu cầu trả phí', 'Cần thời gian học các tính năng nâng cao']
    },
    useCases: {
      en: [
        { title: 'Professional Use', examples: ['Enhancing daily workflows', 'Automating repetitive tasks'] },
        { title: 'Personal Projects', examples: ['Creative exploration', 'Learning new skills'] }
      ],
      vi: [
        { title: 'Sử dụng chuyên nghiệp', examples: ['Nâng cao quy trình làm việc hàng ngày', 'Tự động hóa các tác vụ lặp đi lặp lại'] },
        { title: 'Dự án cá nhân', examples: ['Khám phá sáng tạo', 'Học kỹ năng mới'] }
      ]
    },
    affiliateUrl: 'https://opus.pro',
    howToUse: {
      en: ['Sign up for an account', 'Explore the dashboard', 'Start creating with AI'],
      vi: ['Đăng ký tài khoản', 'Khám phá bảng điều khiển', 'Bắt đầu sáng tạo với AI']
    }
  },
  {
    id: 'captions',
    name: 'Captions',
    domain: 'captions.ai',
    logo: getLogo('captions.ai'),
    screenshots: ['https://picsum.photos/seed/captions1/800/450', 'https://picsum.photos/seed/captions2/800/450'],
    category: 'video',
    rating: 5.0,
    reviewCount: 2494,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    pricing: {
      en: 'Freemium',
      vi: 'Miễn phí cơ bản'
    },
    description: {
      en: 'Captions is a powerful AI tool for video that helps you achieve more in less time.',
      vi: 'Captions là một công cụ AI mạnh mẽ dành cho video giúp bạn đạt được nhiều thành tựu hơn trong thời gian ngắn hơn.'
    },
    features: {
      en: ['Advanced AI capabilities', 'User-friendly interface', 'Fast processing', 'Cloud sync'],
      vi: ['Khả năng AI tiên tiến', 'Giao diện thân thiện', 'Xử lý nhanh', 'Đồng bộ đám mây']
    },
    pros: {
      en: ['High quality output', 'Easy to use', 'Regular updates'],
      vi: ['Đầu ra chất lượng cao', 'Dễ sử dụng', 'Cập nhật thường xuyên']
    },
    cons: {
      en: ['Premium features require subscription', 'Learning curve for advanced features'],
      vi: ['Tính năng cao cấp yêu cầu trả phí', 'Cần thời gian học các tính năng nâng cao']
    },
    useCases: {
      en: [
        { title: 'Professional Use', examples: ['Enhancing daily workflows', 'Automating repetitive tasks'] },
        { title: 'Personal Projects', examples: ['Creative exploration', 'Learning new skills'] }
      ],
      vi: [
        { title: 'Sử dụng chuyên nghiệp', examples: ['Nâng cao quy trình làm việc hàng ngày', 'Tự động hóa các tác vụ lặp đi lặp lại'] },
        { title: 'Dự án cá nhân', examples: ['Khám phá sáng tạo', 'Học kỹ năng mới'] }
      ]
    },
    affiliateUrl: 'https://captions.ai',
    howToUse: {
      en: ['Sign up for an account', 'Explore the dashboard', 'Start creating with AI'],
      vi: ['Đăng ký tài khoản', 'Khám phá bảng điều khiển', 'Bắt đầu sáng tạo với AI']
    }
  },
  {
    id: 'invideo',
    name: 'InVideo AI',
    domain: 'invideo.io',
    logo: getLogo('invideo.io'),
    screenshots: ['https://picsum.photos/seed/invideo1/800/450', 'https://picsum.photos/seed/invideo2/800/450'],
    category: 'video',
    rating: 4.0,
    reviewCount: 3414,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    pricing: {
      en: 'Freemium',
      vi: 'Miễn phí cơ bản'
    },
    description: {
      en: 'InVideo AI is a powerful AI tool for video that helps you achieve more in less time.',
      vi: 'InVideo AI là một công cụ AI mạnh mẽ dành cho video giúp bạn đạt được nhiều thành tựu hơn trong thời gian ngắn hơn.'
    },
    features: {
      en: ['Advanced AI capabilities', 'User-friendly interface', 'Fast processing', 'Cloud sync'],
      vi: ['Khả năng AI tiên tiến', 'Giao diện thân thiện', 'Xử lý nhanh', 'Đồng bộ đám mây']
    },
    pros: {
      en: ['High quality output', 'Easy to use', 'Regular updates'],
      vi: ['Đầu ra chất lượng cao', 'Dễ sử dụng', 'Cập nhật thường xuyên']
    },
    cons: {
      en: ['Premium features require subscription', 'Learning curve for advanced features'],
      vi: ['Tính năng cao cấp yêu cầu trả phí', 'Cần thời gian học các tính năng nâng cao']
    },
    useCases: {
      en: [
        { title: 'Professional Use', examples: ['Enhancing daily workflows', 'Automating repetitive tasks'] },
        { title: 'Personal Projects', examples: ['Creative exploration', 'Learning new skills'] }
      ],
      vi: [
        { title: 'Sử dụng chuyên nghiệp', examples: ['Nâng cao quy trình làm việc hàng ngày', 'Tự động hóa các tác vụ lặp đi lặp lại'] },
        { title: 'Dự án cá nhân', examples: ['Khám phá sáng tạo', 'Học kỹ năng mới'] }
      ]
    },
    affiliateUrl: 'https://invideo.io',
    howToUse: {
      en: ['Sign up for an account', 'Explore the dashboard', 'Start creating with AI'],
      vi: ['Đăng ký tài khoản', 'Khám phá bảng điều khiển', 'Bắt đầu sáng tạo với AI']
    }
  },
  {
    id: 'playht',
    name: 'PlayHT',
    domain: 'play.ht',
    logo: getLogo('play.ht'),
    screenshots: ['https://picsum.photos/seed/playht1/800/450', 'https://picsum.photos/seed/playht2/800/450'],
    category: 'audio',
    rating: 4.5,
    reviewCount: 3796,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    pricing: {
      en: 'Freemium',
      vi: 'Miễn phí cơ bản'
    },
    description: {
      en: 'PlayHT is a powerful AI tool for audio that helps you achieve more in less time.',
      vi: 'PlayHT là một công cụ AI mạnh mẽ dành cho audio giúp bạn đạt được nhiều thành tựu hơn trong thời gian ngắn hơn.'
    },
    features: {
      en: ['Advanced AI capabilities', 'User-friendly interface', 'Fast processing', 'Cloud sync'],
      vi: ['Khả năng AI tiên tiến', 'Giao diện thân thiện', 'Xử lý nhanh', 'Đồng bộ đám mây']
    },
    pros: {
      en: ['High quality output', 'Easy to use', 'Regular updates'],
      vi: ['Đầu ra chất lượng cao', 'Dễ sử dụng', 'Cập nhật thường xuyên']
    },
    cons: {
      en: ['Premium features require subscription', 'Learning curve for advanced features'],
      vi: ['Tính năng cao cấp yêu cầu trả phí', 'Cần thời gian học các tính năng nâng cao']
    },
    useCases: {
      en: [
        { title: 'Professional Use', examples: ['Enhancing daily workflows', 'Automating repetitive tasks'] },
        { title: 'Personal Projects', examples: ['Creative exploration', 'Learning new skills'] }
      ],
      vi: [
        { title: 'Sử dụng chuyên nghiệp', examples: ['Nâng cao quy trình làm việc hàng ngày', 'Tự động hóa các tác vụ lặp đi lặp lại'] },
        { title: 'Dự án cá nhân', examples: ['Khám phá sáng tạo', 'Học kỹ năng mới'] }
      ]
    },
    affiliateUrl: 'https://play.ht',
    howToUse: {
      en: ['Sign up for an account', 'Explore the dashboard', 'Start creating with AI'],
      vi: ['Đăng ký tài khoản', 'Khám phá bảng điều khiển', 'Bắt đầu sáng tạo với AI']
    }
  },
  {
    id: 'voiceflow',
    name: 'Voiceflow',
    domain: 'voiceflow.com',
    logo: getLogo('voiceflow.com'),
    screenshots: ['https://picsum.photos/seed/voiceflow1/800/450', 'https://picsum.photos/seed/voiceflow2/800/450'],
    category: 'audio',
    rating: 4.8,
    reviewCount: 2784,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    pricing: {
      en: 'Freemium',
      vi: 'Miễn phí cơ bản'
    },
    description: {
      en: 'Voiceflow is a powerful AI tool for audio that helps you achieve more in less time.',
      vi: 'Voiceflow là một công cụ AI mạnh mẽ dành cho audio giúp bạn đạt được nhiều thành tựu hơn trong thời gian ngắn hơn.'
    },
    features: {
      en: ['Advanced AI capabilities', 'User-friendly interface', 'Fast processing', 'Cloud sync'],
      vi: ['Khả năng AI tiên tiến', 'Giao diện thân thiện', 'Xử lý nhanh', 'Đồng bộ đám mây']
    },
    pros: {
      en: ['High quality output', 'Easy to use', 'Regular updates'],
      vi: ['Đầu ra chất lượng cao', 'Dễ sử dụng', 'Cập nhật thường xuyên']
    },
    cons: {
      en: ['Premium features require subscription', 'Learning curve for advanced features'],
      vi: ['Tính năng cao cấp yêu cầu trả phí', 'Cần thời gian học các tính năng nâng cao']
    },
    useCases: {
      en: [
        { title: 'Professional Use', examples: ['Enhancing daily workflows', 'Automating repetitive tasks'] },
        { title: 'Personal Projects', examples: ['Creative exploration', 'Learning new skills'] }
      ],
      vi: [
        { title: 'Sử dụng chuyên nghiệp', examples: ['Nâng cao quy trình làm việc hàng ngày', 'Tự động hóa các tác vụ lặp đi lặp lại'] },
        { title: 'Dự án cá nhân', examples: ['Khám phá sáng tạo', 'Học kỹ năng mới'] }
      ]
    },
    affiliateUrl: 'https://voiceflow.com',
    howToUse: {
      en: ['Sign up for an account', 'Explore the dashboard', 'Start creating with AI'],
      vi: ['Đăng ký tài khoản', 'Khám phá bảng điều khiển', 'Bắt đầu sáng tạo với AI']
    }
  },
  {
    id: 'fathom',
    name: 'Fathom',
    domain: 'fathom.video',
    logo: getLogo('fathom.video'),
    screenshots: ['https://picsum.photos/seed/fathom1/800/450', 'https://picsum.photos/seed/fathom2/800/450'],
    category: 'productivity',
    rating: 4.0,
    reviewCount: 1116,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    pricing: {
      en: 'Freemium',
      vi: 'Miễn phí cơ bản'
    },
    description: {
      en: 'Fathom is a powerful AI tool for productivity that helps you achieve more in less time.',
      vi: 'Fathom là một công cụ AI mạnh mẽ dành cho productivity giúp bạn đạt được nhiều thành tựu hơn trong thời gian ngắn hơn.'
    },
    features: {
      en: ['Advanced AI capabilities', 'User-friendly interface', 'Fast processing', 'Cloud sync'],
      vi: ['Khả năng AI tiên tiến', 'Giao diện thân thiện', 'Xử lý nhanh', 'Đồng bộ đám mây']
    },
    pros: {
      en: ['High quality output', 'Easy to use', 'Regular updates'],
      vi: ['Đầu ra chất lượng cao', 'Dễ sử dụng', 'Cập nhật thường xuyên']
    },
    cons: {
      en: ['Premium features require subscription', 'Learning curve for advanced features'],
      vi: ['Tính năng cao cấp yêu cầu trả phí', 'Cần thời gian học các tính năng nâng cao']
    },
    useCases: {
      en: [
        { title: 'Professional Use', examples: ['Enhancing daily workflows', 'Automating repetitive tasks'] },
        { title: 'Personal Projects', examples: ['Creative exploration', 'Learning new skills'] }
      ],
      vi: [
        { title: 'Sử dụng chuyên nghiệp', examples: ['Nâng cao quy trình làm việc hàng ngày', 'Tự động hóa các tác vụ lặp đi lặp lại'] },
        { title: 'Dự án cá nhân', examples: ['Khám phá sáng tạo', 'Học kỹ năng mới'] }
      ]
    },
    affiliateUrl: 'https://fathom.video',
    howToUse: {
      en: ['Sign up for an account', 'Explore the dashboard', 'Start creating with AI'],
      vi: ['Đăng ký tài khoản', 'Khám phá bảng điều khiển', 'Bắt đầu sáng tạo với AI']
    }
  },
  {
    id: 'read-ai',
    name: 'Read AI',
    domain: 'read.ai',
    logo: getLogo('read.ai'),
    screenshots: ['https://picsum.photos/seed/read-ai1/800/450', 'https://picsum.photos/seed/read-ai2/800/450'],
    category: 'productivity',
    rating: 4.9,
    reviewCount: 3615,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    pricing: {
      en: 'Freemium',
      vi: 'Miễn phí cơ bản'
    },
    description: {
      en: 'Read AI is a powerful AI tool for productivity that helps you achieve more in less time.',
      vi: 'Read AI là một công cụ AI mạnh mẽ dành cho productivity giúp bạn đạt được nhiều thành tựu hơn trong thời gian ngắn hơn.'
    },
    features: {
      en: ['Advanced AI capabilities', 'User-friendly interface', 'Fast processing', 'Cloud sync'],
      vi: ['Khả năng AI tiên tiến', 'Giao diện thân thiện', 'Xử lý nhanh', 'Đồng bộ đám mây']
    },
    pros: {
      en: ['High quality output', 'Easy to use', 'Regular updates'],
      vi: ['Đầu ra chất lượng cao', 'Dễ sử dụng', 'Cập nhật thường xuyên']
    },
    cons: {
      en: ['Premium features require subscription', 'Learning curve for advanced features'],
      vi: ['Tính năng cao cấp yêu cầu trả phí', 'Cần thời gian học các tính năng nâng cao']
    },
    useCases: {
      en: [
        { title: 'Professional Use', examples: ['Enhancing daily workflows', 'Automating repetitive tasks'] },
        { title: 'Personal Projects', examples: ['Creative exploration', 'Learning new skills'] }
      ],
      vi: [
        { title: 'Sử dụng chuyên nghiệp', examples: ['Nâng cao quy trình làm việc hàng ngày', 'Tự động hóa các tác vụ lặp đi lặp lại'] },
        { title: 'Dự án cá nhân', examples: ['Khám phá sáng tạo', 'Học kỹ năng mới'] }
      ]
    },
    affiliateUrl: 'https://read.ai',
    howToUse: {
      en: ['Sign up for an account', 'Explore the dashboard', 'Start creating with AI'],
      vi: ['Đăng ký tài khoản', 'Khám phá bảng điều khiển', 'Bắt đầu sáng tạo với AI']
    }
  },
  {
    id: 'beautiful-ai',
    name: 'Beautiful.ai',
    domain: 'beautiful.ai',
    logo: getLogo('beautiful.ai'),
    screenshots: ['https://picsum.photos/seed/beautiful-ai1/800/450', 'https://picsum.photos/seed/beautiful-ai2/800/450'],
    category: 'productivity',
    rating: 4.7,
    reviewCount: 4424,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    pricing: {
      en: 'Freemium',
      vi: 'Miễn phí cơ bản'
    },
    description: {
      en: 'Beautiful.ai is a powerful AI tool for productivity that helps you achieve more in less time.',
      vi: 'Beautiful.ai là một công cụ AI mạnh mẽ dành cho productivity giúp bạn đạt được nhiều thành tựu hơn trong thời gian ngắn hơn.'
    },
    features: {
      en: ['Advanced AI capabilities', 'User-friendly interface', 'Fast processing', 'Cloud sync'],
      vi: ['Khả năng AI tiên tiến', 'Giao diện thân thiện', 'Xử lý nhanh', 'Đồng bộ đám mây']
    },
    pros: {
      en: ['High quality output', 'Easy to use', 'Regular updates'],
      vi: ['Đầu ra chất lượng cao', 'Dễ sử dụng', 'Cập nhật thường xuyên']
    },
    cons: {
      en: ['Premium features require subscription', 'Learning curve for advanced features'],
      vi: ['Tính năng cao cấp yêu cầu trả phí', 'Cần thời gian học các tính năng nâng cao']
    },
    useCases: {
      en: [
        { title: 'Professional Use', examples: ['Enhancing daily workflows', 'Automating repetitive tasks'] },
        { title: 'Personal Projects', examples: ['Creative exploration', 'Learning new skills'] }
      ],
      vi: [
        { title: 'Sử dụng chuyên nghiệp', examples: ['Nâng cao quy trình làm việc hàng ngày', 'Tự động hóa các tác vụ lặp đi lặp lại'] },
        { title: 'Dự án cá nhân', examples: ['Khám phá sáng tạo', 'Học kỹ năng mới'] }
      ]
    },
    affiliateUrl: 'https://beautiful.ai',
    howToUse: {
      en: ['Sign up for an account', 'Explore the dashboard', 'Start creating with AI'],
      vi: ['Đăng ký tài khoản', 'Khám phá bảng điều khiển', 'Bắt đầu sáng tạo với AI']
    }
  },
  {
    id: 'copy-ai',
    name: 'Copy.ai',
    domain: 'copy.ai',
    logo: getLogo('copy.ai'),
    screenshots: ['https://picsum.photos/seed/copy-ai1/800/450', 'https://picsum.photos/seed/copy-ai2/800/450'],
    category: 'writing',
    rating: 4.4,
    reviewCount: 2867,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    pricing: {
      en: 'Freemium',
      vi: 'Miễn phí cơ bản'
    },
    description: {
      en: 'Copy.ai is a powerful AI tool for writing that helps you achieve more in less time.',
      vi: 'Copy.ai là một công cụ AI mạnh mẽ dành cho writing giúp bạn đạt được nhiều thành tựu hơn trong thời gian ngắn hơn.'
    },
    features: {
      en: ['Advanced AI capabilities', 'User-friendly interface', 'Fast processing', 'Cloud sync'],
      vi: ['Khả năng AI tiên tiến', 'Giao diện thân thiện', 'Xử lý nhanh', 'Đồng bộ đám mây']
    },
    pros: {
      en: ['High quality output', 'Easy to use', 'Regular updates'],
      vi: ['Đầu ra chất lượng cao', 'Dễ sử dụng', 'Cập nhật thường xuyên']
    },
    cons: {
      en: ['Premium features require subscription', 'Learning curve for advanced features'],
      vi: ['Tính năng cao cấp yêu cầu trả phí', 'Cần thời gian học các tính năng nâng cao']
    },
    useCases: {
      en: [
        { title: 'Professional Use', examples: ['Enhancing daily workflows', 'Automating repetitive tasks'] },
        { title: 'Personal Projects', examples: ['Creative exploration', 'Learning new skills'] }
      ],
      vi: [
        { title: 'Sử dụng chuyên nghiệp', examples: ['Nâng cao quy trình làm việc hàng ngày', 'Tự động hóa các tác vụ lặp đi lặp lại'] },
        { title: 'Dự án cá nhân', examples: ['Khám phá sáng tạo', 'Học kỹ năng mới'] }
      ]
    },
    affiliateUrl: 'https://copy.ai',
    howToUse: {
      en: ['Sign up for an account', 'Explore the dashboard', 'Start creating with AI'],
      vi: ['Đăng ký tài khoản', 'Khám phá bảng điều khiển', 'Bắt đầu sáng tạo với AI']
    }
  },
  {
    id: 'rytr',
    name: 'Rytr',
    domain: 'rytr.me',
    logo: getLogo('rytr.me'),
    screenshots: ['https://picsum.photos/seed/rytr1/800/450', 'https://picsum.photos/seed/rytr2/800/450'],
    category: 'writing',
    rating: 5.0,
    reviewCount: 3227,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    pricing: {
      en: 'Freemium',
      vi: 'Miễn phí cơ bản'
    },
    description: {
      en: 'Rytr is a powerful AI tool for writing that helps you achieve more in less time.',
      vi: 'Rytr là một công cụ AI mạnh mẽ dành cho writing giúp bạn đạt được nhiều thành tựu hơn trong thời gian ngắn hơn.'
    },
    features: {
      en: ['Advanced AI capabilities', 'User-friendly interface', 'Fast processing', 'Cloud sync'],
      vi: ['Khả năng AI tiên tiến', 'Giao diện thân thiện', 'Xử lý nhanh', 'Đồng bộ đám mây']
    },
    pros: {
      en: ['High quality output', 'Easy to use', 'Regular updates'],
      vi: ['Đầu ra chất lượng cao', 'Dễ sử dụng', 'Cập nhật thường xuyên']
    },
    cons: {
      en: ['Premium features require subscription', 'Learning curve for advanced features'],
      vi: ['Tính năng cao cấp yêu cầu trả phí', 'Cần thời gian học các tính năng nâng cao']
    },
    useCases: {
      en: [
        { title: 'Professional Use', examples: ['Enhancing daily workflows', 'Automating repetitive tasks'] },
        { title: 'Personal Projects', examples: ['Creative exploration', 'Learning new skills'] }
      ],
      vi: [
        { title: 'Sử dụng chuyên nghiệp', examples: ['Nâng cao quy trình làm việc hàng ngày', 'Tự động hóa các tác vụ lặp đi lặp lại'] },
        { title: 'Dự án cá nhân', examples: ['Khám phá sáng tạo', 'Học kỹ năng mới'] }
      ]
    },
    affiliateUrl: 'https://rytr.me',
    howToUse: {
      en: ['Sign up for an account', 'Explore the dashboard', 'Start creating with AI'],
      vi: ['Đăng ký tài khoản', 'Khám phá bảng điều khiển', 'Bắt đầu sáng tạo với AI']
    }
  },
  {
    id: 'grammarly-go',
    name: 'GrammarlyGO',
    domain: 'grammarly.com',
    logo: getLogo('grammarly.com'),
    screenshots: ['https://picsum.photos/seed/grammarly-go1/800/450', 'https://picsum.photos/seed/grammarly-go2/800/450'],
    category: 'writing',
    rating: 4.2,
    reviewCount: 2657,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    pricing: {
      en: 'Freemium',
      vi: 'Miễn phí cơ bản'
    },
    description: {
      en: 'GrammarlyGO is a powerful AI tool for writing that helps you achieve more in less time.',
      vi: 'GrammarlyGO là một công cụ AI mạnh mẽ dành cho writing giúp bạn đạt được nhiều thành tựu hơn trong thời gian ngắn hơn.'
    },
    features: {
      en: ['Advanced AI capabilities', 'User-friendly interface', 'Fast processing', 'Cloud sync'],
      vi: ['Khả năng AI tiên tiến', 'Giao diện thân thiện', 'Xử lý nhanh', 'Đồng bộ đám mây']
    },
    pros: {
      en: ['High quality output', 'Easy to use', 'Regular updates'],
      vi: ['Đầu ra chất lượng cao', 'Dễ sử dụng', 'Cập nhật thường xuyên']
    },
    cons: {
      en: ['Premium features require subscription', 'Learning curve for advanced features'],
      vi: ['Tính năng cao cấp yêu cầu trả phí', 'Cần thời gian học các tính năng nâng cao']
    },
    useCases: {
      en: [
        { title: 'Professional Use', examples: ['Enhancing daily workflows', 'Automating repetitive tasks'] },
        { title: 'Personal Projects', examples: ['Creative exploration', 'Learning new skills'] }
      ],
      vi: [
        { title: 'Sử dụng chuyên nghiệp', examples: ['Nâng cao quy trình làm việc hàng ngày', 'Tự động hóa các tác vụ lặp đi lặp lại'] },
        { title: 'Dự án cá nhân', examples: ['Khám phá sáng tạo', 'Học kỹ năng mới'] }
      ]
    },
    affiliateUrl: 'https://grammarly.com',
    howToUse: {
      en: ['Sign up for an account', 'Explore the dashboard', 'Start creating with AI'],
      vi: ['Đăng ký tài khoản', 'Khám phá bảng điều khiển', 'Bắt đầu sáng tạo với AI']
    }
  },
  {
    id: 'wordtune',
    name: 'Wordtune',
    domain: 'wordtune.com',
    logo: getLogo('wordtune.com'),
    screenshots: ['https://picsum.photos/seed/wordtune1/800/450', 'https://picsum.photos/seed/wordtune2/800/450'],
    category: 'writing',
    rating: 4.7,
    reviewCount: 3802,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    pricing: {
      en: 'Freemium',
      vi: 'Miễn phí cơ bản'
    },
    description: {
      en: 'Wordtune is a powerful AI tool for writing that helps you achieve more in less time.',
      vi: 'Wordtune là một công cụ AI mạnh mẽ dành cho writing giúp bạn đạt được nhiều thành tựu hơn trong thời gian ngắn hơn.'
    },
    features: {
      en: ['Advanced AI capabilities', 'User-friendly interface', 'Fast processing', 'Cloud sync'],
      vi: ['Khả năng AI tiên tiến', 'Giao diện thân thiện', 'Xử lý nhanh', 'Đồng bộ đám mây']
    },
    pros: {
      en: ['High quality output', 'Easy to use', 'Regular updates'],
      vi: ['Đầu ra chất lượng cao', 'Dễ sử dụng', 'Cập nhật thường xuyên']
    },
    cons: {
      en: ['Premium features require subscription', 'Learning curve for advanced features'],
      vi: ['Tính năng cao cấp yêu cầu trả phí', 'Cần thời gian học các tính năng nâng cao']
    },
    useCases: {
      en: [
        { title: 'Professional Use', examples: ['Enhancing daily workflows', 'Automating repetitive tasks'] },
        { title: 'Personal Projects', examples: ['Creative exploration', 'Learning new skills'] }
      ],
      vi: [
        { title: 'Sử dụng chuyên nghiệp', examples: ['Nâng cao quy trình làm việc hàng ngày', 'Tự động hóa các tác vụ lặp đi lặp lại'] },
        { title: 'Dự án cá nhân', examples: ['Khám phá sáng tạo', 'Học kỹ năng mới'] }
      ]
    },
    affiliateUrl: 'https://wordtune.com',
    howToUse: {
      en: ['Sign up for an account', 'Explore the dashboard', 'Start creating with AI'],
      vi: ['Đăng ký tài khoản', 'Khám phá bảng điều khiển', 'Bắt đầu sáng tạo với AI']
    }
  },
  {
    id: 'sudowrite',
    name: 'Sudowrite',
    domain: 'sudowrite.com',
    logo: getLogo('sudowrite.com'),
    screenshots: ['https://picsum.photos/seed/sudowrite1/800/450', 'https://picsum.photos/seed/sudowrite2/800/450'],
    category: 'writing',
    rating: 4.4,
    reviewCount: 3439,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    pricing: {
      en: 'Freemium',
      vi: 'Miễn phí cơ bản'
    },
    description: {
      en: 'Sudowrite is a powerful AI tool for writing that helps you achieve more in less time.',
      vi: 'Sudowrite là một công cụ AI mạnh mẽ dành cho writing giúp bạn đạt được nhiều thành tựu hơn trong thời gian ngắn hơn.'
    },
    features: {
      en: ['Advanced AI capabilities', 'User-friendly interface', 'Fast processing', 'Cloud sync'],
      vi: ['Khả năng AI tiên tiến', 'Giao diện thân thiện', 'Xử lý nhanh', 'Đồng bộ đám mây']
    },
    pros: {
      en: ['High quality output', 'Easy to use', 'Regular updates'],
      vi: ['Đầu ra chất lượng cao', 'Dễ sử dụng', 'Cập nhật thường xuyên']
    },
    cons: {
      en: ['Premium features require subscription', 'Learning curve for advanced features'],
      vi: ['Tính năng cao cấp yêu cầu trả phí', 'Cần thời gian học các tính năng nâng cao']
    },
    useCases: {
      en: [
        { title: 'Professional Use', examples: ['Enhancing daily workflows', 'Automating repetitive tasks'] },
        { title: 'Personal Projects', examples: ['Creative exploration', 'Learning new skills'] }
      ],
      vi: [
        { title: 'Sử dụng chuyên nghiệp', examples: ['Nâng cao quy trình làm việc hàng ngày', 'Tự động hóa các tác vụ lặp đi lặp lại'] },
        { title: 'Dự án cá nhân', examples: ['Khám phá sáng tạo', 'Học kỹ năng mới'] }
      ]
    },
    affiliateUrl: 'https://sudowrite.com',
    howToUse: {
      en: ['Sign up for an account', 'Explore the dashboard', 'Start creating with AI'],
      vi: ['Đăng ký tài khoản', 'Khám phá bảng điều khiển', 'Bắt đầu sáng tạo với AI']
    }
  },
  {
    id: 'novelai',
    name: 'NovelAI',
    domain: 'novelai.net',
    logo: getLogo('novelai.net'),
    screenshots: ['https://picsum.photos/seed/novelai1/800/450', 'https://picsum.photos/seed/novelai2/800/450'],
    category: 'writing',
    rating: 4.1,
    reviewCount: 4355,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    pricing: {
      en: 'Freemium',
      vi: 'Miễn phí cơ bản'
    },
    description: {
      en: 'NovelAI is a powerful AI tool for writing that helps you achieve more in less time.',
      vi: 'NovelAI là một công cụ AI mạnh mẽ dành cho writing giúp bạn đạt được nhiều thành tựu hơn trong thời gian ngắn hơn.'
    },
    features: {
      en: ['Advanced AI capabilities', 'User-friendly interface', 'Fast processing', 'Cloud sync'],
      vi: ['Khả năng AI tiên tiến', 'Giao diện thân thiện', 'Xử lý nhanh', 'Đồng bộ đám mây']
    },
    pros: {
      en: ['High quality output', 'Easy to use', 'Regular updates'],
      vi: ['Đầu ra chất lượng cao', 'Dễ sử dụng', 'Cập nhật thường xuyên']
    },
    cons: {
      en: ['Premium features require subscription', 'Learning curve for advanced features'],
      vi: ['Tính năng cao cấp yêu cầu trả phí', 'Cần thời gian học các tính năng nâng cao']
    },
    useCases: {
      en: [
        { title: 'Professional Use', examples: ['Enhancing daily workflows', 'Automating repetitive tasks'] },
        { title: 'Personal Projects', examples: ['Creative exploration', 'Learning new skills'] }
      ],
      vi: [
        { title: 'Sử dụng chuyên nghiệp', examples: ['Nâng cao quy trình làm việc hàng ngày', 'Tự động hóa các tác vụ lặp đi lặp lại'] },
        { title: 'Dự án cá nhân', examples: ['Khám phá sáng tạo', 'Học kỹ năng mới'] }
      ]
    },
    affiliateUrl: 'https://novelai.net',
    howToUse: {
      en: ['Sign up for an account', 'Explore the dashboard', 'Start creating with AI'],
      vi: ['Đăng ký tài khoản', 'Khám phá bảng điều khiển', 'Bắt đầu sáng tạo với AI']
    }
  },
  {
    id: 'character-ai',
    name: 'Character.AI',
    domain: 'character.ai',
    logo: getLogo('character.ai'),
    screenshots: ['https://picsum.photos/seed/character-ai1/800/450', 'https://picsum.photos/seed/character-ai2/800/450'],
    category: 'productivity',
    rating: 4.5,
    reviewCount: 4442,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    pricing: {
      en: 'Freemium',
      vi: 'Miễn phí cơ bản'
    },
    description: {
      en: 'Character.AI is a powerful AI tool for productivity that helps you achieve more in less time.',
      vi: 'Character.AI là một công cụ AI mạnh mẽ dành cho productivity giúp bạn đạt được nhiều thành tựu hơn trong thời gian ngắn hơn.'
    },
    features: {
      en: ['Advanced AI capabilities', 'User-friendly interface', 'Fast processing', 'Cloud sync'],
      vi: ['Khả năng AI tiên tiến', 'Giao diện thân thiện', 'Xử lý nhanh', 'Đồng bộ đám mây']
    },
    pros: {
      en: ['High quality output', 'Easy to use', 'Regular updates'],
      vi: ['Đầu ra chất lượng cao', 'Dễ sử dụng', 'Cập nhật thường xuyên']
    },
    cons: {
      en: ['Premium features require subscription', 'Learning curve for advanced features'],
      vi: ['Tính năng cao cấp yêu cầu trả phí', 'Cần thời gian học các tính năng nâng cao']
    },
    useCases: {
      en: [
        { title: 'Professional Use', examples: ['Enhancing daily workflows', 'Automating repetitive tasks'] },
        { title: 'Personal Projects', examples: ['Creative exploration', 'Learning new skills'] }
      ],
      vi: [
        { title: 'Sử dụng chuyên nghiệp', examples: ['Nâng cao quy trình làm việc hàng ngày', 'Tự động hóa các tác vụ lặp đi lặp lại'] },
        { title: 'Dự án cá nhân', examples: ['Khám phá sáng tạo', 'Học kỹ năng mới'] }
      ]
    },
    affiliateUrl: 'https://character.ai',
    howToUse: {
      en: ['Sign up for an account', 'Explore the dashboard', 'Start creating with AI'],
      vi: ['Đăng ký tài khoản', 'Khám phá bảng điều khiển', 'Bắt đầu sáng tạo với AI']
    }
  },
  {
    id: 'pi',
    name: 'Pi by Inflection',
    domain: 'pi.ai',
    logo: getLogo('pi.ai'),
    screenshots: ['https://picsum.photos/seed/pi1/800/450', 'https://picsum.photos/seed/pi2/800/450'],
    category: 'productivity',
    rating: 4.2,
    reviewCount: 1991,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    pricing: {
      en: 'Freemium',
      vi: 'Miễn phí cơ bản'
    },
    description: {
      en: 'Pi by Inflection is a powerful AI tool for productivity that helps you achieve more in less time.',
      vi: 'Pi by Inflection là một công cụ AI mạnh mẽ dành cho productivity giúp bạn đạt được nhiều thành tựu hơn trong thời gian ngắn hơn.'
    },
    features: {
      en: ['Advanced AI capabilities', 'User-friendly interface', 'Fast processing', 'Cloud sync'],
      vi: ['Khả năng AI tiên tiến', 'Giao diện thân thiện', 'Xử lý nhanh', 'Đồng bộ đám mây']
    },
    pros: {
      en: ['High quality output', 'Easy to use', 'Regular updates'],
      vi: ['Đầu ra chất lượng cao', 'Dễ sử dụng', 'Cập nhật thường xuyên']
    },
    cons: {
      en: ['Premium features require subscription', 'Learning curve for advanced features'],
      vi: ['Tính năng cao cấp yêu cầu trả phí', 'Cần thời gian học các tính năng nâng cao']
    },
    useCases: {
      en: [
        { title: 'Professional Use', examples: ['Enhancing daily workflows', 'Automating repetitive tasks'] },
        { title: 'Personal Projects', examples: ['Creative exploration', 'Learning new skills'] }
      ],
      vi: [
        { title: 'Sử dụng chuyên nghiệp', examples: ['Nâng cao quy trình làm việc hàng ngày', 'Tự động hóa các tác vụ lặp đi lặp lại'] },
        { title: 'Dự án cá nhân', examples: ['Khám phá sáng tạo', 'Học kỹ năng mới'] }
      ]
    },
    affiliateUrl: 'https://pi.ai',
    howToUse: {
      en: ['Sign up for an account', 'Explore the dashboard', 'Start creating with AI'],
      vi: ['Đăng ký tài khoản', 'Khám phá bảng điều khiển', 'Bắt đầu sáng tạo với AI']
    }
  },
  {
    id: 'poe',
    name: 'Poe',
    domain: 'poe.com',
    logo: getLogo('poe.com'),
    screenshots: ['https://picsum.photos/seed/poe1/800/450', 'https://picsum.photos/seed/poe2/800/450'],
    category: 'productivity',
    rating: 5.0,
    reviewCount: 1677,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    pricing: {
      en: 'Freemium',
      vi: 'Miễn phí cơ bản'
    },
    description: {
      en: 'Poe is a powerful AI tool for productivity that helps you achieve more in less time.',
      vi: 'Poe là một công cụ AI mạnh mẽ dành cho productivity giúp bạn đạt được nhiều thành tựu hơn trong thời gian ngắn hơn.'
    },
    features: {
      en: ['Advanced AI capabilities', 'User-friendly interface', 'Fast processing', 'Cloud sync'],
      vi: ['Khả năng AI tiên tiến', 'Giao diện thân thiện', 'Xử lý nhanh', 'Đồng bộ đám mây']
    },
    pros: {
      en: ['High quality output', 'Easy to use', 'Regular updates'],
      vi: ['Đầu ra chất lượng cao', 'Dễ sử dụng', 'Cập nhật thường xuyên']
    },
    cons: {
      en: ['Premium features require subscription', 'Learning curve for advanced features'],
      vi: ['Tính năng cao cấp yêu cầu trả phí', 'Cần thời gian học các tính năng nâng cao']
    },
    useCases: {
      en: [
        { title: 'Professional Use', examples: ['Enhancing daily workflows', 'Automating repetitive tasks'] },
        { title: 'Personal Projects', examples: ['Creative exploration', 'Learning new skills'] }
      ],
      vi: [
        { title: 'Sử dụng chuyên nghiệp', examples: ['Nâng cao quy trình làm việc hàng ngày', 'Tự động hóa các tác vụ lặp đi lặp lại'] },
        { title: 'Dự án cá nhân', examples: ['Khám phá sáng tạo', 'Học kỹ năng mới'] }
      ]
    },
    affiliateUrl: 'https://poe.com',
    howToUse: {
      en: ['Sign up for an account', 'Explore the dashboard', 'Start creating with AI'],
      vi: ['Đăng ký tài khoản', 'Khám phá bảng điều khiển', 'Bắt đầu sáng tạo với AI']
    }
  },
  {
    id: 'you',
    name: 'You.com',
    domain: 'you.com',
    logo: getLogo('you.com'),
    screenshots: ['https://picsum.photos/seed/you1/800/450', 'https://picsum.photos/seed/you2/800/450'],
    category: 'productivity',
    rating: 4.5,
    reviewCount: 3060,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    pricing: {
      en: 'Freemium',
      vi: 'Miễn phí cơ bản'
    },
    description: {
      en: 'You.com is a powerful AI tool for productivity that helps you achieve more in less time.',
      vi: 'You.com là một công cụ AI mạnh mẽ dành cho productivity giúp bạn đạt được nhiều thành tựu hơn trong thời gian ngắn hơn.'
    },
    features: {
      en: ['Advanced AI capabilities', 'User-friendly interface', 'Fast processing', 'Cloud sync'],
      vi: ['Khả năng AI tiên tiến', 'Giao diện thân thiện', 'Xử lý nhanh', 'Đồng bộ đám mây']
    },
    pros: {
      en: ['High quality output', 'Easy to use', 'Regular updates'],
      vi: ['Đầu ra chất lượng cao', 'Dễ sử dụng', 'Cập nhật thường xuyên']
    },
    cons: {
      en: ['Premium features require subscription', 'Learning curve for advanced features'],
      vi: ['Tính năng cao cấp yêu cầu trả phí', 'Cần thời gian học các tính năng nâng cao']
    },
    useCases: {
      en: [
        { title: 'Professional Use', examples: ['Enhancing daily workflows', 'Automating repetitive tasks'] },
        { title: 'Personal Projects', examples: ['Creative exploration', 'Learning new skills'] }
      ],
      vi: [
        { title: 'Sử dụng chuyên nghiệp', examples: ['Nâng cao quy trình làm việc hàng ngày', 'Tự động hóa các tác vụ lặp đi lặp lại'] },
        { title: 'Dự án cá nhân', examples: ['Khám phá sáng tạo', 'Học kỹ năng mới'] }
      ]
    },
    affiliateUrl: 'https://you.com',
    howToUse: {
      en: ['Sign up for an account', 'Explore the dashboard', 'Start creating with AI'],
      vi: ['Đăng ký tài khoản', 'Khám phá bảng điều khiển', 'Bắt đầu sáng tạo với AI']
    }
  },
  {
    id: 'phind',
    name: 'Phind',
    domain: 'phind.com',
    logo: getLogo('phind.com'),
    screenshots: ['https://picsum.photos/seed/phind1/800/450', 'https://picsum.photos/seed/phind2/800/450'],
    category: 'coding',
    rating: 4.3,
    reviewCount: 2241,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    pricing: {
      en: 'Freemium',
      vi: 'Miễn phí cơ bản'
    },
    description: {
      en: 'Phind is a powerful AI tool for coding that helps you achieve more in less time.',
      vi: 'Phind là một công cụ AI mạnh mẽ dành cho coding giúp bạn đạt được nhiều thành tựu hơn trong thời gian ngắn hơn.'
    },
    features: {
      en: ['Advanced AI capabilities', 'User-friendly interface', 'Fast processing', 'Cloud sync'],
      vi: ['Khả năng AI tiên tiến', 'Giao diện thân thiện', 'Xử lý nhanh', 'Đồng bộ đám mây']
    },
    pros: {
      en: ['High quality output', 'Easy to use', 'Regular updates'],
      vi: ['Đầu ra chất lượng cao', 'Dễ sử dụng', 'Cập nhật thường xuyên']
    },
    cons: {
      en: ['Premium features require subscription', 'Learning curve for advanced features'],
      vi: ['Tính năng cao cấp yêu cầu trả phí', 'Cần thời gian học các tính năng nâng cao']
    },
    useCases: {
      en: [
        { title: 'Professional Use', examples: ['Enhancing daily workflows', 'Automating repetitive tasks'] },
        { title: 'Personal Projects', examples: ['Creative exploration', 'Learning new skills'] }
      ],
      vi: [
        { title: 'Sử dụng chuyên nghiệp', examples: ['Nâng cao quy trình làm việc hàng ngày', 'Tự động hóa các tác vụ lặp đi lặp lại'] },
        { title: 'Dự án cá nhân', examples: ['Khám phá sáng tạo', 'Học kỹ năng mới'] }
      ]
    },
    affiliateUrl: 'https://phind.com',
    howToUse: {
      en: ['Sign up for an account', 'Explore the dashboard', 'Start creating with AI'],
      vi: ['Đăng ký tài khoản', 'Khám phá bảng điều khiển', 'Bắt đầu sáng tạo với AI']
    }
  },
  {
    id: 'devin',
    name: 'Devin',
    domain: 'cognition.ai',
    logo: getLogo('cognition.ai'),
    screenshots: ['https://picsum.photos/seed/devin1/800/450', 'https://picsum.photos/seed/devin2/800/450'],
    category: 'coding',
    rating: 4.5,
    reviewCount: 4668,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    pricing: {
      en: 'Freemium',
      vi: 'Miễn phí cơ bản'
    },
    description: {
      en: 'Devin is a powerful AI tool for coding that helps you achieve more in less time.',
      vi: 'Devin là một công cụ AI mạnh mẽ dành cho coding giúp bạn đạt được nhiều thành tựu hơn trong thời gian ngắn hơn.'
    },
    features: {
      en: ['Advanced AI capabilities', 'User-friendly interface', 'Fast processing', 'Cloud sync'],
      vi: ['Khả năng AI tiên tiến', 'Giao diện thân thiện', 'Xử lý nhanh', 'Đồng bộ đám mây']
    },
    pros: {
      en: ['High quality output', 'Easy to use', 'Regular updates'],
      vi: ['Đầu ra chất lượng cao', 'Dễ sử dụng', 'Cập nhật thường xuyên']
    },
    cons: {
      en: ['Premium features require subscription', 'Learning curve for advanced features'],
      vi: ['Tính năng cao cấp yêu cầu trả phí', 'Cần thời gian học các tính năng nâng cao']
    },
    useCases: {
      en: [
        { title: 'Professional Use', examples: ['Enhancing daily workflows', 'Automating repetitive tasks'] },
        { title: 'Personal Projects', examples: ['Creative exploration', 'Learning new skills'] }
      ],
      vi: [
        { title: 'Sử dụng chuyên nghiệp', examples: ['Nâng cao quy trình làm việc hàng ngày', 'Tự động hóa các tác vụ lặp đi lặp lại'] },
        { title: 'Dự án cá nhân', examples: ['Khám phá sáng tạo', 'Học kỹ năng mới'] }
      ]
    },
    affiliateUrl: 'https://cognition.ai',
    howToUse: {
      en: ['Sign up for an account', 'Explore the dashboard', 'Start creating with AI'],
      vi: ['Đăng ký tài khoản', 'Khám phá bảng điều khiển', 'Bắt đầu sáng tạo với AI']
    }
  },
  {
    id: 'huggingface',
    name: 'Hugging Face Chat',
    domain: 'huggingface.co',
    logo: getLogo('huggingface.co'),
    screenshots: ['https://picsum.photos/seed/huggingface1/800/450', 'https://picsum.photos/seed/huggingface2/800/450'],
    category: 'productivity',
    rating: 4.2,
    reviewCount: 734,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    pricing: {
      en: 'Freemium',
      vi: 'Miễn phí cơ bản'
    },
    description: {
      en: 'Hugging Face Chat is a powerful AI tool for productivity that helps you achieve more in less time.',
      vi: 'Hugging Face Chat là một công cụ AI mạnh mẽ dành cho productivity giúp bạn đạt được nhiều thành tựu hơn trong thời gian ngắn hơn.'
    },
    features: {
      en: ['Advanced AI capabilities', 'User-friendly interface', 'Fast processing', 'Cloud sync'],
      vi: ['Khả năng AI tiên tiến', 'Giao diện thân thiện', 'Xử lý nhanh', 'Đồng bộ đám mây']
    },
    pros: {
      en: ['High quality output', 'Easy to use', 'Regular updates'],
      vi: ['Đầu ra chất lượng cao', 'Dễ sử dụng', 'Cập nhật thường xuyên']
    },
    cons: {
      en: ['Premium features require subscription', 'Learning curve for advanced features'],
      vi: ['Tính năng cao cấp yêu cầu trả phí', 'Cần thời gian học các tính năng nâng cao']
    },
    useCases: {
      en: [
        { title: 'Professional Use', examples: ['Enhancing daily workflows', 'Automating repetitive tasks'] },
        { title: 'Personal Projects', examples: ['Creative exploration', 'Learning new skills'] }
      ],
      vi: [
        { title: 'Sử dụng chuyên nghiệp', examples: ['Nâng cao quy trình làm việc hàng ngày', 'Tự động hóa các tác vụ lặp đi lặp lại'] },
        { title: 'Dự án cá nhân', examples: ['Khám phá sáng tạo', 'Học kỹ năng mới'] }
      ]
    },
    affiliateUrl: 'https://huggingface.co',
    howToUse: {
      en: ['Sign up for an account', 'Explore the dashboard', 'Start creating with AI'],
      vi: ['Đăng ký tài khoản', 'Khám phá bảng điều khiển', 'Bắt đầu sáng tạo với AI']
    }
  },
  {
    id: 'mistral',
    name: 'Le Chat Mistral',
    domain: 'mistral.ai',
    logo: getLogo('mistral.ai'),
    screenshots: ['https://picsum.photos/seed/mistral1/800/450', 'https://picsum.photos/seed/mistral2/800/450'],
    category: 'productivity',
    rating: 4.6,
    reviewCount: 362,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    pricing: {
      en: 'Freemium',
      vi: 'Miễn phí cơ bản'
    },
    description: {
      en: 'Le Chat Mistral is a powerful AI tool for productivity that helps you achieve more in less time.',
      vi: 'Le Chat Mistral là một công cụ AI mạnh mẽ dành cho productivity giúp bạn đạt được nhiều thành tựu hơn trong thời gian ngắn hơn.'
    },
    features: {
      en: ['Advanced AI capabilities', 'User-friendly interface', 'Fast processing', 'Cloud sync'],
      vi: ['Khả năng AI tiên tiến', 'Giao diện thân thiện', 'Xử lý nhanh', 'Đồng bộ đám mây']
    },
    pros: {
      en: ['High quality output', 'Easy to use', 'Regular updates'],
      vi: ['Đầu ra chất lượng cao', 'Dễ sử dụng', 'Cập nhật thường xuyên']
    },
    cons: {
      en: ['Premium features require subscription', 'Learning curve for advanced features'],
      vi: ['Tính năng cao cấp yêu cầu trả phí', 'Cần thời gian học các tính năng nâng cao']
    },
    useCases: {
      en: [
        { title: 'Professional Use', examples: ['Enhancing daily workflows', 'Automating repetitive tasks'] },
        { title: 'Personal Projects', examples: ['Creative exploration', 'Learning new skills'] }
      ],
      vi: [
        { title: 'Sử dụng chuyên nghiệp', examples: ['Nâng cao quy trình làm việc hàng ngày', 'Tự động hóa các tác vụ lặp đi lặp lại'] },
        { title: 'Dự án cá nhân', examples: ['Khám phá sáng tạo', 'Học kỹ năng mới'] }
      ]
    },
    affiliateUrl: 'https://mistral.ai',
    howToUse: {
      en: ['Sign up for an account', 'Explore the dashboard', 'Start creating with AI'],
      vi: ['Đăng ký tài khoản', 'Khám phá bảng điều khiển', 'Bắt đầu sáng tạo với AI']
    }
  },
  {
    id: 'cohere',
    name: 'Coral by Cohere',
    domain: 'cohere.com',
    logo: getLogo('cohere.com'),
    screenshots: ['https://picsum.photos/seed/cohere1/800/450', 'https://picsum.photos/seed/cohere2/800/450'],
    category: 'productivity',
    rating: 4.3,
    reviewCount: 2299,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    pricing: {
      en: 'Freemium',
      vi: 'Miễn phí cơ bản'
    },
    description: {
      en: 'Coral by Cohere is a powerful AI tool for productivity that helps you achieve more in less time.',
      vi: 'Coral by Cohere là một công cụ AI mạnh mẽ dành cho productivity giúp bạn đạt được nhiều thành tựu hơn trong thời gian ngắn hơn.'
    },
    features: {
      en: ['Advanced AI capabilities', 'User-friendly interface', 'Fast processing', 'Cloud sync'],
      vi: ['Khả năng AI tiên tiến', 'Giao diện thân thiện', 'Xử lý nhanh', 'Đồng bộ đám mây']
    },
    pros: {
      en: ['High quality output', 'Easy to use', 'Regular updates'],
      vi: ['Đầu ra chất lượng cao', 'Dễ sử dụng', 'Cập nhật thường xuyên']
    },
    cons: {
      en: ['Premium features require subscription', 'Learning curve for advanced features'],
      vi: ['Tính năng cao cấp yêu cầu trả phí', 'Cần thời gian học các tính năng nâng cao']
    },
    useCases: {
      en: [
        { title: 'Professional Use', examples: ['Enhancing daily workflows', 'Automating repetitive tasks'] },
        { title: 'Personal Projects', examples: ['Creative exploration', 'Learning new skills'] }
      ],
      vi: [
        { title: 'Sử dụng chuyên nghiệp', examples: ['Nâng cao quy trình làm việc hàng ngày', 'Tự động hóa các tác vụ lặp đi lặp lại'] },
        { title: 'Dự án cá nhân', examples: ['Khám phá sáng tạo', 'Học kỹ năng mới'] }
      ]
    },
    affiliateUrl: 'https://cohere.com',
    howToUse: {
      en: ['Sign up for an account', 'Explore the dashboard', 'Start creating with AI'],
      vi: ['Đăng ký tài khoản', 'Khám phá bảng điều khiển', 'Bắt đầu sáng tạo với AI']
    }
  },
  {
    id: 'grok',
    name: 'Grok',
    domain: 'x.ai',
    logo: getLogo('x.ai'),
    screenshots: ['https://picsum.photos/seed/grok1/800/450', 'https://picsum.photos/seed/grok2/800/450'],
    category: 'productivity',
    rating: 4.8,
    reviewCount: 1459,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    pricing: {
      en: 'Freemium',
      vi: 'Miễn phí cơ bản'
    },
    description: {
      en: 'Grok is a powerful AI tool for productivity that helps you achieve more in less time.',
      vi: 'Grok là một công cụ AI mạnh mẽ dành cho productivity giúp bạn đạt được nhiều thành tựu hơn trong thời gian ngắn hơn.'
    },
    features: {
      en: ['Advanced AI capabilities', 'User-friendly interface', 'Fast processing', 'Cloud sync'],
      vi: ['Khả năng AI tiên tiến', 'Giao diện thân thiện', 'Xử lý nhanh', 'Đồng bộ đám mây']
    },
    pros: {
      en: ['High quality output', 'Easy to use', 'Regular updates'],
      vi: ['Đầu ra chất lượng cao', 'Dễ sử dụng', 'Cập nhật thường xuyên']
    },
    cons: {
      en: ['Premium features require subscription', 'Learning curve for advanced features'],
      vi: ['Tính năng cao cấp yêu cầu trả phí', 'Cần thời gian học các tính năng nâng cao']
    },
    useCases: {
      en: [
        { title: 'Professional Use', examples: ['Enhancing daily workflows', 'Automating repetitive tasks'] },
        { title: 'Personal Projects', examples: ['Creative exploration', 'Learning new skills'] }
      ],
      vi: [
        { title: 'Sử dụng chuyên nghiệp', examples: ['Nâng cao quy trình làm việc hàng ngày', 'Tự động hóa các tác vụ lặp đi lặp lại'] },
        { title: 'Dự án cá nhân', examples: ['Khám phá sáng tạo', 'Học kỹ năng mới'] }
      ]
    },
    affiliateUrl: 'https://x.ai',
    howToUse: {
      en: ['Sign up for an account', 'Explore the dashboard', 'Start creating with AI'],
      vi: ['Đăng ký tài khoản', 'Khám phá bảng điều khiển', 'Bắt đầu sáng tạo với AI']
    }
  },
  {
    id: 'meta-ai',
    name: 'Meta AI',
    domain: 'meta.ai',
    logo: getLogo('meta.ai'),
    screenshots: ['https://picsum.photos/seed/meta-ai1/800/450', 'https://picsum.photos/seed/meta-ai2/800/450'],
    category: 'productivity',
    rating: 4.4,
    reviewCount: 2268,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    pricing: {
      en: 'Freemium',
      vi: 'Miễn phí cơ bản'
    },
    description: {
      en: 'Meta AI is a powerful AI tool for productivity that helps you achieve more in less time.',
      vi: 'Meta AI là một công cụ AI mạnh mẽ dành cho productivity giúp bạn đạt được nhiều thành tựu hơn trong thời gian ngắn hơn.'
    },
    features: {
      en: ['Advanced AI capabilities', 'User-friendly interface', 'Fast processing', 'Cloud sync'],
      vi: ['Khả năng AI tiên tiến', 'Giao diện thân thiện', 'Xử lý nhanh', 'Đồng bộ đám mây']
    },
    pros: {
      en: ['High quality output', 'Easy to use', 'Regular updates'],
      vi: ['Đầu ra chất lượng cao', 'Dễ sử dụng', 'Cập nhật thường xuyên']
    },
    cons: {
      en: ['Premium features require subscription', 'Learning curve for advanced features'],
      vi: ['Tính năng cao cấp yêu cầu trả phí', 'Cần thời gian học các tính năng nâng cao']
    },
    useCases: {
      en: [
        { title: 'Professional Use', examples: ['Enhancing daily workflows', 'Automating repetitive tasks'] },
        { title: 'Personal Projects', examples: ['Creative exploration', 'Learning new skills'] }
      ],
      vi: [
        { title: 'Sử dụng chuyên nghiệp', examples: ['Nâng cao quy trình làm việc hàng ngày', 'Tự động hóa các tác vụ lặp đi lặp lại'] },
        { title: 'Dự án cá nhân', examples: ['Khám phá sáng tạo', 'Học kỹ năng mới'] }
      ]
    },
    affiliateUrl: 'https://meta.ai',
    howToUse: {
      en: ['Sign up for an account', 'Explore the dashboard', 'Start creating with AI'],
      vi: ['Đăng ký tài khoản', 'Khám phá bảng điều khiển', 'Bắt đầu sáng tạo với AI']
    }
  },
  {
    id: 'apple-intelligence',
    name: 'Apple Intelligence',
    domain: 'apple.com',
    logo: getLogo('apple.com'),
    screenshots: ['https://picsum.photos/seed/apple-intelligence1/800/450', 'https://picsum.photos/seed/apple-intelligence2/800/450'],
    category: 'productivity',
    rating: 4.9,
    reviewCount: 4383,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    pricing: {
      en: 'Freemium',
      vi: 'Miễn phí cơ bản'
    },
    description: {
      en: 'Apple Intelligence is a powerful AI tool for productivity that helps you achieve more in less time.',
      vi: 'Apple Intelligence là một công cụ AI mạnh mẽ dành cho productivity giúp bạn đạt được nhiều thành tựu hơn trong thời gian ngắn hơn.'
    },
    features: {
      en: ['Advanced AI capabilities', 'User-friendly interface', 'Fast processing', 'Cloud sync'],
      vi: ['Khả năng AI tiên tiến', 'Giao diện thân thiện', 'Xử lý nhanh', 'Đồng bộ đám mây']
    },
    pros: {
      en: ['High quality output', 'Easy to use', 'Regular updates'],
      vi: ['Đầu ra chất lượng cao', 'Dễ sử dụng', 'Cập nhật thường xuyên']
    },
    cons: {
      en: ['Premium features require subscription', 'Learning curve for advanced features'],
      vi: ['Tính năng cao cấp yêu cầu trả phí', 'Cần thời gian học các tính năng nâng cao']
    },
    useCases: {
      en: [
        { title: 'Professional Use', examples: ['Enhancing daily workflows', 'Automating repetitive tasks'] },
        { title: 'Personal Projects', examples: ['Creative exploration', 'Learning new skills'] }
      ],
      vi: [
        { title: 'Sử dụng chuyên nghiệp', examples: ['Nâng cao quy trình làm việc hàng ngày', 'Tự động hóa các tác vụ lặp đi lặp lại'] },
        { title: 'Dự án cá nhân', examples: ['Khám phá sáng tạo', 'Học kỹ năng mới'] }
      ]
    },
    affiliateUrl: 'https://apple.com',
    howToUse: {
      en: ['Sign up for an account', 'Explore the dashboard', 'Start creating with AI'],
      vi: ['Đăng ký tài khoản', 'Khám phá bảng điều khiển', 'Bắt đầu sáng tạo với AI']
    }
  },
  {
    id: 'arc-search',
    name: 'Arc Search',
    domain: 'arc.net',
    logo: getLogo('arc.net'),
    screenshots: ['https://picsum.photos/seed/arc-search1/800/450', 'https://picsum.photos/seed/arc-search2/800/450'],
    category: 'productivity',
    rating: 4.5,
    reviewCount: 4392,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    pricing: {
      en: 'Freemium',
      vi: 'Miễn phí cơ bản'
    },
    description: {
      en: 'Arc Search is a powerful AI tool for productivity that helps you achieve more in less time.',
      vi: 'Arc Search là một công cụ AI mạnh mẽ dành cho productivity giúp bạn đạt được nhiều thành tựu hơn trong thời gian ngắn hơn.'
    },
    features: {
      en: ['Advanced AI capabilities', 'User-friendly interface', 'Fast processing', 'Cloud sync'],
      vi: ['Khả năng AI tiên tiến', 'Giao diện thân thiện', 'Xử lý nhanh', 'Đồng bộ đám mây']
    },
    pros: {
      en: ['High quality output', 'Easy to use', 'Regular updates'],
      vi: ['Đầu ra chất lượng cao', 'Dễ sử dụng', 'Cập nhật thường xuyên']
    },
    cons: {
      en: ['Premium features require subscription', 'Learning curve for advanced features'],
      vi: ['Tính năng cao cấp yêu cầu trả phí', 'Cần thời gian học các tính năng nâng cao']
    },
    useCases: {
      en: [
        { title: 'Professional Use', examples: ['Enhancing daily workflows', 'Automating repetitive tasks'] },
        { title: 'Personal Projects', examples: ['Creative exploration', 'Learning new skills'] }
      ],
      vi: [
        { title: 'Sử dụng chuyên nghiệp', examples: ['Nâng cao quy trình làm việc hàng ngày', 'Tự động hóa các tác vụ lặp đi lặp lại'] },
        { title: 'Dự án cá nhân', examples: ['Khám phá sáng tạo', 'Học kỹ năng mới'] }
      ]
    },
    affiliateUrl: 'https://arc.net',
    howToUse: {
      en: ['Sign up for an account', 'Explore the dashboard', 'Start creating with AI'],
      vi: ['Đăng ký tài khoản', 'Khám phá bảng điều khiển', 'Bắt đầu sáng tạo với AI']
    }
  },
  {
    id: 'raycast-ai',
    name: 'Raycast AI',
    domain: 'raycast.com',
    logo: getLogo('raycast.com'),
    screenshots: ['https://picsum.photos/seed/raycast-ai1/800/450', 'https://picsum.photos/seed/raycast-ai2/800/450'],
    category: 'productivity',
    rating: 4.1,
    reviewCount: 2554,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    pricing: {
      en: 'Freemium',
      vi: 'Miễn phí cơ bản'
    },
    description: {
      en: 'Raycast AI is a powerful AI tool for productivity that helps you achieve more in less time.',
      vi: 'Raycast AI là một công cụ AI mạnh mẽ dành cho productivity giúp bạn đạt được nhiều thành tựu hơn trong thời gian ngắn hơn.'
    },
    features: {
      en: ['Advanced AI capabilities', 'User-friendly interface', 'Fast processing', 'Cloud sync'],
      vi: ['Khả năng AI tiên tiến', 'Giao diện thân thiện', 'Xử lý nhanh', 'Đồng bộ đám mây']
    },
    pros: {
      en: ['High quality output', 'Easy to use', 'Regular updates'],
      vi: ['Đầu ra chất lượng cao', 'Dễ sử dụng', 'Cập nhật thường xuyên']
    },
    cons: {
      en: ['Premium features require subscription', 'Learning curve for advanced features'],
      vi: ['Tính năng cao cấp yêu cầu trả phí', 'Cần thời gian học các tính năng nâng cao']
    },
    useCases: {
      en: [
        { title: 'Professional Use', examples: ['Enhancing daily workflows', 'Automating repetitive tasks'] },
        { title: 'Personal Projects', examples: ['Creative exploration', 'Learning new skills'] }
      ],
      vi: [
        { title: 'Sử dụng chuyên nghiệp', examples: ['Nâng cao quy trình làm việc hàng ngày', 'Tự động hóa các tác vụ lặp đi lặp lại'] },
        { title: 'Dự án cá nhân', examples: ['Khám phá sáng tạo', 'Học kỹ năng mới'] }
      ]
    },
    affiliateUrl: 'https://raycast.com',
    howToUse: {
      en: ['Sign up for an account', 'Explore the dashboard', 'Start creating with AI'],
      vi: ['Đăng ký tài khoản', 'Khám phá bảng điều khiển', 'Bắt đầu sáng tạo với AI']
    }
  },
  {
    id: 'alfred-ai',
    name: 'Alfred AI',
    domain: 'alfredapp.com',
    logo: getLogo('alfredapp.com'),
    screenshots: ['https://picsum.photos/seed/alfred-ai1/800/450', 'https://picsum.photos/seed/alfred-ai2/800/450'],
    category: 'productivity',
    rating: 4.3,
    reviewCount: 4690,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    pricing: {
      en: 'Freemium',
      vi: 'Miễn phí cơ bản'
    },
    description: {
      en: 'Alfred AI is a powerful AI tool for productivity that helps you achieve more in less time.',
      vi: 'Alfred AI là một công cụ AI mạnh mẽ dành cho productivity giúp bạn đạt được nhiều thành tựu hơn trong thời gian ngắn hơn.'
    },
    features: {
      en: ['Advanced AI capabilities', 'User-friendly interface', 'Fast processing', 'Cloud sync'],
      vi: ['Khả năng AI tiên tiến', 'Giao diện thân thiện', 'Xử lý nhanh', 'Đồng bộ đám mây']
    },
    pros: {
      en: ['High quality output', 'Easy to use', 'Regular updates'],
      vi: ['Đầu ra chất lượng cao', 'Dễ sử dụng', 'Cập nhật thường xuyên']
    },
    cons: {
      en: ['Premium features require subscription', 'Learning curve for advanced features'],
      vi: ['Tính năng cao cấp yêu cầu trả phí', 'Cần thời gian học các tính năng nâng cao']
    },
    useCases: {
      en: [
        { title: 'Professional Use', examples: ['Enhancing daily workflows', 'Automating repetitive tasks'] },
        { title: 'Personal Projects', examples: ['Creative exploration', 'Learning new skills'] }
      ],
      vi: [
        { title: 'Sử dụng chuyên nghiệp', examples: ['Nâng cao quy trình làm việc hàng ngày', 'Tự động hóa các tác vụ lặp đi lặp lại'] },
        { title: 'Dự án cá nhân', examples: ['Khám phá sáng tạo', 'Học kỹ năng mới'] }
      ]
    },
    affiliateUrl: 'https://alfredapp.com',
    howToUse: {
      en: ['Sign up for an account', 'Explore the dashboard', 'Start creating with AI'],
      vi: ['Đăng ký tài khoản', 'Khám phá bảng điều khiển', 'Bắt đầu sáng tạo với AI']
    }
  },
  {
    id: 'macwhisper',
    name: 'MacWhisper',
    domain: 'macwhisper.com',
    logo: getLogo('macwhisper.com'),
    screenshots: ['https://picsum.photos/seed/macwhisper1/800/450', 'https://picsum.photos/seed/macwhisper2/800/450'],
    category: 'audio',
    rating: 4.7,
    reviewCount: 1556,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    pricing: {
      en: 'Freemium',
      vi: 'Miễn phí cơ bản'
    },
    description: {
      en: 'MacWhisper is a powerful AI tool for audio that helps you achieve more in less time.',
      vi: 'MacWhisper là một công cụ AI mạnh mẽ dành cho audio giúp bạn đạt được nhiều thành tựu hơn trong thời gian ngắn hơn.'
    },
    features: {
      en: ['Advanced AI capabilities', 'User-friendly interface', 'Fast processing', 'Cloud sync'],
      vi: ['Khả năng AI tiên tiến', 'Giao diện thân thiện', 'Xử lý nhanh', 'Đồng bộ đám mây']
    },
    pros: {
      en: ['High quality output', 'Easy to use', 'Regular updates'],
      vi: ['Đầu ra chất lượng cao', 'Dễ sử dụng', 'Cập nhật thường xuyên']
    },
    cons: {
      en: ['Premium features require subscription', 'Learning curve for advanced features'],
      vi: ['Tính năng cao cấp yêu cầu trả phí', 'Cần thời gian học các tính năng nâng cao']
    },
    useCases: {
      en: [
        { title: 'Professional Use', examples: ['Enhancing daily workflows', 'Automating repetitive tasks'] },
        { title: 'Personal Projects', examples: ['Creative exploration', 'Learning new skills'] }
      ],
      vi: [
        { title: 'Sử dụng chuyên nghiệp', examples: ['Nâng cao quy trình làm việc hàng ngày', 'Tự động hóa các tác vụ lặp đi lặp lại'] },
        { title: 'Dự án cá nhân', examples: ['Khám phá sáng tạo', 'Học kỹ năng mới'] }
      ]
    },
    affiliateUrl: 'https://macwhisper.com',
    howToUse: {
      en: ['Sign up for an account', 'Explore the dashboard', 'Start creating with AI'],
      vi: ['Đăng ký tài khoản', 'Khám phá bảng điều khiển', 'Bắt đầu sáng tạo với AI']
    }
  },
  {
    id: 'audiopen',
    name: 'AudioPen',
    domain: 'audiopen.ai',
    logo: getLogo('audiopen.ai'),
    screenshots: ['https://picsum.photos/seed/audiopen1/800/450', 'https://picsum.photos/seed/audiopen2/800/450'],
    category: 'audio',
    rating: 4.4,
    reviewCount: 2295,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    pricing: {
      en: 'Freemium',
      vi: 'Miễn phí cơ bản'
    },
    description: {
      en: 'AudioPen is a powerful AI tool for audio that helps you achieve more in less time.',
      vi: 'AudioPen là một công cụ AI mạnh mẽ dành cho audio giúp bạn đạt được nhiều thành tựu hơn trong thời gian ngắn hơn.'
    },
    features: {
      en: ['Advanced AI capabilities', 'User-friendly interface', 'Fast processing', 'Cloud sync'],
      vi: ['Khả năng AI tiên tiến', 'Giao diện thân thiện', 'Xử lý nhanh', 'Đồng bộ đám mây']
    },
    pros: {
      en: ['High quality output', 'Easy to use', 'Regular updates'],
      vi: ['Đầu ra chất lượng cao', 'Dễ sử dụng', 'Cập nhật thường xuyên']
    },
    cons: {
      en: ['Premium features require subscription', 'Learning curve for advanced features'],
      vi: ['Tính năng cao cấp yêu cầu trả phí', 'Cần thời gian học các tính năng nâng cao']
    },
    useCases: {
      en: [
        { title: 'Professional Use', examples: ['Enhancing daily workflows', 'Automating repetitive tasks'] },
        { title: 'Personal Projects', examples: ['Creative exploration', 'Learning new skills'] }
      ],
      vi: [
        { title: 'Sử dụng chuyên nghiệp', examples: ['Nâng cao quy trình làm việc hàng ngày', 'Tự động hóa các tác vụ lặp đi lặp lại'] },
        { title: 'Dự án cá nhân', examples: ['Khám phá sáng tạo', 'Học kỹ năng mới'] }
      ]
    },
    affiliateUrl: 'https://audiopen.ai',
    howToUse: {
      en: ['Sign up for an account', 'Explore the dashboard', 'Start creating with AI'],
      vi: ['Đăng ký tài khoản', 'Khám phá bảng điều khiển', 'Bắt đầu sáng tạo với AI']
    }
  },
  {
    id: 'castmagic',
    name: 'Castmagic',
    domain: 'castmagic.io',
    logo: getLogo('castmagic.io'),
    screenshots: ['https://picsum.photos/seed/castmagic1/800/450', 'https://picsum.photos/seed/castmagic2/800/450'],
    category: 'audio',
    rating: 4.1,
    reviewCount: 2338,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    pricing: {
      en: 'Freemium',
      vi: 'Miễn phí cơ bản'
    },
    description: {
      en: 'Castmagic is a powerful AI tool for audio that helps you achieve more in less time.',
      vi: 'Castmagic là một công cụ AI mạnh mẽ dành cho audio giúp bạn đạt được nhiều thành tựu hơn trong thời gian ngắn hơn.'
    },
    features: {
      en: ['Advanced AI capabilities', 'User-friendly interface', 'Fast processing', 'Cloud sync'],
      vi: ['Khả năng AI tiên tiến', 'Giao diện thân thiện', 'Xử lý nhanh', 'Đồng bộ đám mây']
    },
    pros: {
      en: ['High quality output', 'Easy to use', 'Regular updates'],
      vi: ['Đầu ra chất lượng cao', 'Dễ sử dụng', 'Cập nhật thường xuyên']
    },
    cons: {
      en: ['Premium features require subscription', 'Learning curve for advanced features'],
      vi: ['Tính năng cao cấp yêu cầu trả phí', 'Cần thời gian học các tính năng nâng cao']
    },
    useCases: {
      en: [
        { title: 'Professional Use', examples: ['Enhancing daily workflows', 'Automating repetitive tasks'] },
        { title: 'Personal Projects', examples: ['Creative exploration', 'Learning new skills'] }
      ],
      vi: [
        { title: 'Sử dụng chuyên nghiệp', examples: ['Nâng cao quy trình làm việc hàng ngày', 'Tự động hóa các tác vụ lặp đi lặp lại'] },
        { title: 'Dự án cá nhân', examples: ['Khám phá sáng tạo', 'Học kỹ năng mới'] }
      ]
    },
    affiliateUrl: 'https://castmagic.io',
    howToUse: {
      en: ['Sign up for an account', 'Explore the dashboard', 'Start creating with AI'],
      vi: ['Đăng ký tài khoản', 'Khám phá bảng điều khiển', 'Bắt đầu sáng tạo với AI']
    }
  },
  {
    id: 'riverside',
    name: 'Riverside Magic Clips',
    domain: 'riverside.fm',
    logo: getLogo('riverside.fm'),
    screenshots: ['https://picsum.photos/seed/riverside1/800/450', 'https://picsum.photos/seed/riverside2/800/450'],
    category: 'video',
    rating: 4.8,
    reviewCount: 2341,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    pricing: {
      en: 'Freemium',
      vi: 'Miễn phí cơ bản'
    },
    description: {
      en: 'Riverside Magic Clips is a powerful AI tool for video that helps you achieve more in less time.',
      vi: 'Riverside Magic Clips là một công cụ AI mạnh mẽ dành cho video giúp bạn đạt được nhiều thành tựu hơn trong thời gian ngắn hơn.'
    },
    features: {
      en: ['Advanced AI capabilities', 'User-friendly interface', 'Fast processing', 'Cloud sync'],
      vi: ['Khả năng AI tiên tiến', 'Giao diện thân thiện', 'Xử lý nhanh', 'Đồng bộ đám mây']
    },
    pros: {
      en: ['High quality output', 'Easy to use', 'Regular updates'],
      vi: ['Đầu ra chất lượng cao', 'Dễ sử dụng', 'Cập nhật thường xuyên']
    },
    cons: {
      en: ['Premium features require subscription', 'Learning curve for advanced features'],
      vi: ['Tính năng cao cấp yêu cầu trả phí', 'Cần thời gian học các tính năng nâng cao']
    },
    useCases: {
      en: [
        { title: 'Professional Use', examples: ['Enhancing daily workflows', 'Automating repetitive tasks'] },
        { title: 'Personal Projects', examples: ['Creative exploration', 'Learning new skills'] }
      ],
      vi: [
        { title: 'Sử dụng chuyên nghiệp', examples: ['Nâng cao quy trình làm việc hàng ngày', 'Tự động hóa các tác vụ lặp đi lặp lại'] },
        { title: 'Dự án cá nhân', examples: ['Khám phá sáng tạo', 'Học kỹ năng mới'] }
      ]
    },
    affiliateUrl: 'https://riverside.fm',
    howToUse: {
      en: ['Sign up for an account', 'Explore the dashboard', 'Start creating with AI'],
      vi: ['Đăng ký tài khoản', 'Khám phá bảng điều khiển', 'Bắt đầu sáng tạo với AI']
    }
  },
  {
    id: 'munch',
    name: 'Munch',
    domain: 'getmunch.com',
    logo: getLogo('getmunch.com'),
    screenshots: ['https://picsum.photos/seed/munch1/800/450', 'https://picsum.photos/seed/munch2/800/450'],
    category: 'video',
    rating: 4.5,
    reviewCount: 2240,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    pricing: {
      en: 'Freemium',
      vi: 'Miễn phí cơ bản'
    },
    description: {
      en: 'Munch is a powerful AI tool for video that helps you achieve more in less time.',
      vi: 'Munch là một công cụ AI mạnh mẽ dành cho video giúp bạn đạt được nhiều thành tựu hơn trong thời gian ngắn hơn.'
    },
    features: {
      en: ['Advanced AI capabilities', 'User-friendly interface', 'Fast processing', 'Cloud sync'],
      vi: ['Khả năng AI tiên tiến', 'Giao diện thân thiện', 'Xử lý nhanh', 'Đồng bộ đám mây']
    },
    pros: {
      en: ['High quality output', 'Easy to use', 'Regular updates'],
      vi: ['Đầu ra chất lượng cao', 'Dễ sử dụng', 'Cập nhật thường xuyên']
    },
    cons: {
      en: ['Premium features require subscription', 'Learning curve for advanced features'],
      vi: ['Tính năng cao cấp yêu cầu trả phí', 'Cần thời gian học các tính năng nâng cao']
    },
    useCases: {
      en: [
        { title: 'Professional Use', examples: ['Enhancing daily workflows', 'Automating repetitive tasks'] },
        { title: 'Personal Projects', examples: ['Creative exploration', 'Learning new skills'] }
      ],
      vi: [
        { title: 'Sử dụng chuyên nghiệp', examples: ['Nâng cao quy trình làm việc hàng ngày', 'Tự động hóa các tác vụ lặp đi lặp lại'] },
        { title: 'Dự án cá nhân', examples: ['Khám phá sáng tạo', 'Học kỹ năng mới'] }
      ]
    },
    affiliateUrl: 'https://getmunch.com',
    howToUse: {
      en: ['Sign up for an account', 'Explore the dashboard', 'Start creating with AI'],
      vi: ['Đăng ký tài khoản', 'Khám phá bảng điều khiển', 'Bắt đầu sáng tạo với AI']
    }
  },
  {
    id: 'vidyo',
    name: 'Vidyo.ai',
    domain: 'vidyo.ai',
    logo: getLogo('vidyo.ai'),
    screenshots: ['https://picsum.photos/seed/vidyo1/800/450', 'https://picsum.photos/seed/vidyo2/800/450'],
    category: 'video',
    rating: 4.8,
    reviewCount: 183,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    pricing: {
      en: 'Freemium',
      vi: 'Miễn phí cơ bản'
    },
    description: {
      en: 'Vidyo.ai is a powerful AI tool for video that helps you achieve more in less time.',
      vi: 'Vidyo.ai là một công cụ AI mạnh mẽ dành cho video giúp bạn đạt được nhiều thành tựu hơn trong thời gian ngắn hơn.'
    },
    features: {
      en: ['Advanced AI capabilities', 'User-friendly interface', 'Fast processing', 'Cloud sync'],
      vi: ['Khả năng AI tiên tiến', 'Giao diện thân thiện', 'Xử lý nhanh', 'Đồng bộ đám mây']
    },
    pros: {
      en: ['High quality output', 'Easy to use', 'Regular updates'],
      vi: ['Đầu ra chất lượng cao', 'Dễ sử dụng', 'Cập nhật thường xuyên']
    },
    cons: {
      en: ['Premium features require subscription', 'Learning curve for advanced features'],
      vi: ['Tính năng cao cấp yêu cầu trả phí', 'Cần thời gian học các tính năng nâng cao']
    },
    useCases: {
      en: [
        { title: 'Professional Use', examples: ['Enhancing daily workflows', 'Automating repetitive tasks'] },
        { title: 'Personal Projects', examples: ['Creative exploration', 'Learning new skills'] }
      ],
      vi: [
        { title: 'Sử dụng chuyên nghiệp', examples: ['Nâng cao quy trình làm việc hàng ngày', 'Tự động hóa các tác vụ lặp đi lặp lại'] },
        { title: 'Dự án cá nhân', examples: ['Khám phá sáng tạo', 'Học kỹ năng mới'] }
      ]
    },
    affiliateUrl: 'https://vidyo.ai',
    howToUse: {
      en: ['Sign up for an account', 'Explore the dashboard', 'Start creating with AI'],
      vi: ['Đăng ký tài khoản', 'Khám phá bảng điều khiển', 'Bắt đầu sáng tạo với AI']
    }
  },
  {
    id: 'fliki',
    name: 'Fliki',
    domain: 'fliki.ai',
    logo: getLogo('fliki.ai'),
    screenshots: ['https://picsum.photos/seed/fliki1/800/450', 'https://picsum.photos/seed/fliki2/800/450'],
    category: 'video',
    rating: 4.3,
    reviewCount: 3862,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    pricing: {
      en: 'Freemium',
      vi: 'Miễn phí cơ bản'
    },
    description: {
      en: 'Fliki is a powerful AI tool for video that helps you achieve more in less time.',
      vi: 'Fliki là một công cụ AI mạnh mẽ dành cho video giúp bạn đạt được nhiều thành tựu hơn trong thời gian ngắn hơn.'
    },
    features: {
      en: ['Advanced AI capabilities', 'User-friendly interface', 'Fast processing', 'Cloud sync'],
      vi: ['Khả năng AI tiên tiến', 'Giao diện thân thiện', 'Xử lý nhanh', 'Đồng bộ đám mây']
    },
    pros: {
      en: ['High quality output', 'Easy to use', 'Regular updates'],
      vi: ['Đầu ra chất lượng cao', 'Dễ sử dụng', 'Cập nhật thường xuyên']
    },
    cons: {
      en: ['Premium features require subscription', 'Learning curve for advanced features'],
      vi: ['Tính năng cao cấp yêu cầu trả phí', 'Cần thời gian học các tính năng nâng cao']
    },
    useCases: {
      en: [
        { title: 'Professional Use', examples: ['Enhancing daily workflows', 'Automating repetitive tasks'] },
        { title: 'Personal Projects', examples: ['Creative exploration', 'Learning new skills'] }
      ],
      vi: [
        { title: 'Sử dụng chuyên nghiệp', examples: ['Nâng cao quy trình làm việc hàng ngày', 'Tự động hóa các tác vụ lặp đi lặp lại'] },
        { title: 'Dự án cá nhân', examples: ['Khám phá sáng tạo', 'Học kỹ năng mới'] }
      ]
    },
    affiliateUrl: 'https://fliki.ai',
    howToUse: {
      en: ['Sign up for an account', 'Explore the dashboard', 'Start creating with AI'],
      vi: ['Đăng ký tài khoản', 'Khám phá bảng điều khiển', 'Bắt đầu sáng tạo với AI']
    }
  },
  {
    id: 'pictory',
    name: 'Pictory',
    domain: 'pictory.ai',
    logo: getLogo('pictory.ai'),
    screenshots: ['https://picsum.photos/seed/pictory1/800/450', 'https://picsum.photos/seed/pictory2/800/450'],
    category: 'video',
    rating: 4.9,
    reviewCount: 1609,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    pricing: {
      en: 'Freemium',
      vi: 'Miễn phí cơ bản'
    },
    description: {
      en: 'Pictory is a powerful AI tool for video that helps you achieve more in less time.',
      vi: 'Pictory là một công cụ AI mạnh mẽ dành cho video giúp bạn đạt được nhiều thành tựu hơn trong thời gian ngắn hơn.'
    },
    features: {
      en: ['Advanced AI capabilities', 'User-friendly interface', 'Fast processing', 'Cloud sync'],
      vi: ['Khả năng AI tiên tiến', 'Giao diện thân thiện', 'Xử lý nhanh', 'Đồng bộ đám mây']
    },
    pros: {
      en: ['High quality output', 'Easy to use', 'Regular updates'],
      vi: ['Đầu ra chất lượng cao', 'Dễ sử dụng', 'Cập nhật thường xuyên']
    },
    cons: {
      en: ['Premium features require subscription', 'Learning curve for advanced features'],
      vi: ['Tính năng cao cấp yêu cầu trả phí', 'Cần thời gian học các tính năng nâng cao']
    },
    useCases: {
      en: [
        { title: 'Professional Use', examples: ['Enhancing daily workflows', 'Automating repetitive tasks'] },
        { title: 'Personal Projects', examples: ['Creative exploration', 'Learning new skills'] }
      ],
      vi: [
        { title: 'Sử dụng chuyên nghiệp', examples: ['Nâng cao quy trình làm việc hàng ngày', 'Tự động hóa các tác vụ lặp đi lặp lại'] },
        { title: 'Dự án cá nhân', examples: ['Khám phá sáng tạo', 'Học kỹ năng mới'] }
      ]
    },
    affiliateUrl: 'https://pictory.ai',
    howToUse: {
      en: ['Sign up for an account', 'Explore the dashboard', 'Start creating with AI'],
      vi: ['Đăng ký tài khoản', 'Khám phá bảng điều khiển', 'Bắt đầu sáng tạo với AI']
    }
  },
  {
    id: 'veed',
    name: 'VEED.IO',
    domain: 'veed.io',
    logo: getLogo('veed.io'),
    screenshots: ['https://picsum.photos/seed/veed1/800/450', 'https://picsum.photos/seed/veed2/800/450'],
    category: 'video',
    rating: 4.2,
    reviewCount: 2833,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    pricing: {
      en: 'Freemium',
      vi: 'Miễn phí cơ bản'
    },
    description: {
      en: 'VEED.IO is a powerful AI tool for video that helps you achieve more in less time.',
      vi: 'VEED.IO là một công cụ AI mạnh mẽ dành cho video giúp bạn đạt được nhiều thành tựu hơn trong thời gian ngắn hơn.'
    },
    features: {
      en: ['Advanced AI capabilities', 'User-friendly interface', 'Fast processing', 'Cloud sync'],
      vi: ['Khả năng AI tiên tiến', 'Giao diện thân thiện', 'Xử lý nhanh', 'Đồng bộ đám mây']
    },
    pros: {
      en: ['High quality output', 'Easy to use', 'Regular updates'],
      vi: ['Đầu ra chất lượng cao', 'Dễ sử dụng', 'Cập nhật thường xuyên']
    },
    cons: {
      en: ['Premium features require subscription', 'Learning curve for advanced features'],
      vi: ['Tính năng cao cấp yêu cầu trả phí', 'Cần thời gian học các tính năng nâng cao']
    },
    useCases: {
      en: [
        { title: 'Professional Use', examples: ['Enhancing daily workflows', 'Automating repetitive tasks'] },
        { title: 'Personal Projects', examples: ['Creative exploration', 'Learning new skills'] }
      ],
      vi: [
        { title: 'Sử dụng chuyên nghiệp', examples: ['Nâng cao quy trình làm việc hàng ngày', 'Tự động hóa các tác vụ lặp đi lặp lại'] },
        { title: 'Dự án cá nhân', examples: ['Khám phá sáng tạo', 'Học kỹ năng mới'] }
      ]
    },
    affiliateUrl: 'https://veed.io',
    howToUse: {
      en: ['Sign up for an account', 'Explore the dashboard', 'Start creating with AI'],
      vi: ['Đăng ký tài khoản', 'Khám phá bảng điều khiển', 'Bắt đầu sáng tạo với AI']
    }
  },
  {
    id: 'capcut',
    name: 'CapCut AI',
    domain: 'capcut.com',
    logo: getLogo('capcut.com'),
    screenshots: ['https://picsum.photos/seed/capcut1/800/450', 'https://picsum.photos/seed/capcut2/800/450'],
    category: 'video',
    rating: 4.7,
    reviewCount: 1701,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    pricing: {
      en: 'Freemium',
      vi: 'Miễn phí cơ bản'
    },
    description: {
      en: 'CapCut AI is a powerful AI tool for video that helps you achieve more in less time.',
      vi: 'CapCut AI là một công cụ AI mạnh mẽ dành cho video giúp bạn đạt được nhiều thành tựu hơn trong thời gian ngắn hơn.'
    },
    features: {
      en: ['Advanced AI capabilities', 'User-friendly interface', 'Fast processing', 'Cloud sync'],
      vi: ['Khả năng AI tiên tiến', 'Giao diện thân thiện', 'Xử lý nhanh', 'Đồng bộ đám mây']
    },
    pros: {
      en: ['High quality output', 'Easy to use', 'Regular updates'],
      vi: ['Đầu ra chất lượng cao', 'Dễ sử dụng', 'Cập nhật thường xuyên']
    },
    cons: {
      en: ['Premium features require subscription', 'Learning curve for advanced features'],
      vi: ['Tính năng cao cấp yêu cầu trả phí', 'Cần thời gian học các tính năng nâng cao']
    },
    useCases: {
      en: [
        { title: 'Professional Use', examples: ['Enhancing daily workflows', 'Automating repetitive tasks'] },
        { title: 'Personal Projects', examples: ['Creative exploration', 'Learning new skills'] }
      ],
      vi: [
        { title: 'Sử dụng chuyên nghiệp', examples: ['Nâng cao quy trình làm việc hàng ngày', 'Tự động hóa các tác vụ lặp đi lặp lại'] },
        { title: 'Dự án cá nhân', examples: ['Khám phá sáng tạo', 'Học kỹ năng mới'] }
      ]
    },
    affiliateUrl: 'https://capcut.com',
    howToUse: {
      en: ['Sign up for an account', 'Explore the dashboard', 'Start creating with AI'],
      vi: ['Đăng ký tài khoản', 'Khám phá bảng điều khiển', 'Bắt đầu sáng tạo với AI']
    }
  },
  {
    id: 'topaz',
    name: 'Topaz Video AI',
    domain: 'topazlabs.com',
    logo: getLogo('topazlabs.com'),
    screenshots: ['https://picsum.photos/seed/topaz1/800/450', 'https://picsum.photos/seed/topaz2/800/450'],
    category: 'video',
    rating: 4.2,
    reviewCount: 1744,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    pricing: {
      en: 'Freemium',
      vi: 'Miễn phí cơ bản'
    },
    description: {
      en: 'Topaz Video AI is a powerful AI tool for video that helps you achieve more in less time.',
      vi: 'Topaz Video AI là một công cụ AI mạnh mẽ dành cho video giúp bạn đạt được nhiều thành tựu hơn trong thời gian ngắn hơn.'
    },
    features: {
      en: ['Advanced AI capabilities', 'User-friendly interface', 'Fast processing', 'Cloud sync'],
      vi: ['Khả năng AI tiên tiến', 'Giao diện thân thiện', 'Xử lý nhanh', 'Đồng bộ đám mây']
    },
    pros: {
      en: ['High quality output', 'Easy to use', 'Regular updates'],
      vi: ['Đầu ra chất lượng cao', 'Dễ sử dụng', 'Cập nhật thường xuyên']
    },
    cons: {
      en: ['Premium features require subscription', 'Learning curve for advanced features'],
      vi: ['Tính năng cao cấp yêu cầu trả phí', 'Cần thời gian học các tính năng nâng cao']
    },
    useCases: {
      en: [
        { title: 'Professional Use', examples: ['Enhancing daily workflows', 'Automating repetitive tasks'] },
        { title: 'Personal Projects', examples: ['Creative exploration', 'Learning new skills'] }
      ],
      vi: [
        { title: 'Sử dụng chuyên nghiệp', examples: ['Nâng cao quy trình làm việc hàng ngày', 'Tự động hóa các tác vụ lặp đi lặp lại'] },
        { title: 'Dự án cá nhân', examples: ['Khám phá sáng tạo', 'Học kỹ năng mới'] }
      ]
    },
    affiliateUrl: 'https://topazlabs.com',
    howToUse: {
      en: ['Sign up for an account', 'Explore the dashboard', 'Start creating with AI'],
      vi: ['Đăng ký tài khoản', 'Khám phá bảng điều khiển', 'Bắt đầu sáng tạo với AI']
    }
  },
  {
    id: 'viggle',
    name: 'Viggle',
    domain: 'viggle.ai',
    logo: getLogo('viggle.ai'),
    screenshots: ['https://picsum.photos/seed/viggle1/800/450', 'https://picsum.photos/seed/viggle2/800/450'],
    category: 'video',
    rating: 4.8,
    reviewCount: 2423,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    pricing: {
      en: 'Freemium',
      vi: 'Miễn phí cơ bản'
    },
    description: {
      en: 'Viggle is a powerful AI tool for video that helps you achieve more in less time.',
      vi: 'Viggle là một công cụ AI mạnh mẽ dành cho video giúp bạn đạt được nhiều thành tựu hơn trong thời gian ngắn hơn.'
    },
    features: {
      en: ['Advanced AI capabilities', 'User-friendly interface', 'Fast processing', 'Cloud sync'],
      vi: ['Khả năng AI tiên tiến', 'Giao diện thân thiện', 'Xử lý nhanh', 'Đồng bộ đám mây']
    },
    pros: {
      en: ['High quality output', 'Easy to use', 'Regular updates'],
      vi: ['Đầu ra chất lượng cao', 'Dễ sử dụng', 'Cập nhật thường xuyên']
    },
    cons: {
      en: ['Premium features require subscription', 'Learning curve for advanced features'],
      vi: ['Tính năng cao cấp yêu cầu trả phí', 'Cần thời gian học các tính năng nâng cao']
    },
    useCases: {
      en: [
        { title: 'Professional Use', examples: ['Enhancing daily workflows', 'Automating repetitive tasks'] },
        { title: 'Personal Projects', examples: ['Creative exploration', 'Learning new skills'] }
      ],
      vi: [
        { title: 'Sử dụng chuyên nghiệp', examples: ['Nâng cao quy trình làm việc hàng ngày', 'Tự động hóa các tác vụ lặp đi lặp lại'] },
        { title: 'Dự án cá nhân', examples: ['Khám phá sáng tạo', 'Học kỹ năng mới'] }
      ]
    },
    affiliateUrl: 'https://viggle.ai',
    howToUse: {
      en: ['Sign up for an account', 'Explore the dashboard', 'Start creating with AI'],
      vi: ['Đăng ký tài khoản', 'Khám phá bảng điều khiển', 'Bắt đầu sáng tạo với AI']
    }
  },
  {
    id: 'tripo',
    name: 'Tripo3D',
    domain: 'tripo3d.ai',
    logo: getLogo('tripo3d.ai'),
    screenshots: ['https://picsum.photos/seed/tripo1/800/450', 'https://picsum.photos/seed/tripo2/800/450'],
    category: 'image',
    rating: 4.2,
    reviewCount: 3425,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    pricing: {
      en: 'Freemium',
      vi: 'Miễn phí cơ bản'
    },
    description: {
      en: 'Tripo3D is a powerful AI tool for image that helps you achieve more in less time.',
      vi: 'Tripo3D là một công cụ AI mạnh mẽ dành cho image giúp bạn đạt được nhiều thành tựu hơn trong thời gian ngắn hơn.'
    },
    features: {
      en: ['Advanced AI capabilities', 'User-friendly interface', 'Fast processing', 'Cloud sync'],
      vi: ['Khả năng AI tiên tiến', 'Giao diện thân thiện', 'Xử lý nhanh', 'Đồng bộ đám mây']
    },
    pros: {
      en: ['High quality output', 'Easy to use', 'Regular updates'],
      vi: ['Đầu ra chất lượng cao', 'Dễ sử dụng', 'Cập nhật thường xuyên']
    },
    cons: {
      en: ['Premium features require subscription', 'Learning curve for advanced features'],
      vi: ['Tính năng cao cấp yêu cầu trả phí', 'Cần thời gian học các tính năng nâng cao']
    },
    useCases: {
      en: [
        { title: 'Professional Use', examples: ['Enhancing daily workflows', 'Automating repetitive tasks'] },
        { title: 'Personal Projects', examples: ['Creative exploration', 'Learning new skills'] }
      ],
      vi: [
        { title: 'Sử dụng chuyên nghiệp', examples: ['Nâng cao quy trình làm việc hàng ngày', 'Tự động hóa các tác vụ lặp đi lặp lại'] },
        { title: 'Dự án cá nhân', examples: ['Khám phá sáng tạo', 'Học kỹ năng mới'] }
      ]
    },
    affiliateUrl: 'https://tripo3d.ai',
    howToUse: {
      en: ['Sign up for an account', 'Explore the dashboard', 'Start creating with AI'],
      vi: ['Đăng ký tài khoản', 'Khám phá bảng điều khiển', 'Bắt đầu sáng tạo với AI']
    }
  },
  {
    id: 'meshy',
    name: 'Meshy',
    domain: 'meshy.ai',
    logo: getLogo('meshy.ai'),
    screenshots: ['https://picsum.photos/seed/meshy1/800/450', 'https://picsum.photos/seed/meshy2/800/450'],
    category: 'image',
    rating: 4.0,
    reviewCount: 4335,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    pricing: {
      en: 'Freemium',
      vi: 'Miễn phí cơ bản'
    },
    description: {
      en: 'Meshy is a powerful AI tool for image that helps you achieve more in less time.',
      vi: 'Meshy là một công cụ AI mạnh mẽ dành cho image giúp bạn đạt được nhiều thành tựu hơn trong thời gian ngắn hơn.'
    },
    features: {
      en: ['Advanced AI capabilities', 'User-friendly interface', 'Fast processing', 'Cloud sync'],
      vi: ['Khả năng AI tiên tiến', 'Giao diện thân thiện', 'Xử lý nhanh', 'Đồng bộ đám mây']
    },
    pros: {
      en: ['High quality output', 'Easy to use', 'Regular updates'],
      vi: ['Đầu ra chất lượng cao', 'Dễ sử dụng', 'Cập nhật thường xuyên']
    },
    cons: {
      en: ['Premium features require subscription', 'Learning curve for advanced features'],
      vi: ['Tính năng cao cấp yêu cầu trả phí', 'Cần thời gian học các tính năng nâng cao']
    },
    useCases: {
      en: [
        { title: 'Professional Use', examples: ['Enhancing daily workflows', 'Automating repetitive tasks'] },
        { title: 'Personal Projects', examples: ['Creative exploration', 'Learning new skills'] }
      ],
      vi: [
        { title: 'Sử dụng chuyên nghiệp', examples: ['Nâng cao quy trình làm việc hàng ngày', 'Tự động hóa các tác vụ lặp đi lặp lại'] },
        { title: 'Dự án cá nhân', examples: ['Khám phá sáng tạo', 'Học kỹ năng mới'] }
      ]
    },
    affiliateUrl: 'https://meshy.ai',
    howToUse: {
      en: ['Sign up for an account', 'Explore the dashboard', 'Start creating with AI'],
      vi: ['Đăng ký tài khoản', 'Khám phá bảng điều khiển', 'Bắt đầu sáng tạo với AI']
    }
  },
  {
    id: 'csm',
    name: 'CSM.ai',
    domain: 'csm.ai',
    logo: getLogo('csm.ai'),
    screenshots: ['https://picsum.photos/seed/csm1/800/450', 'https://picsum.photos/seed/csm2/800/450'],
    category: 'image',
    rating: 4.1,
    reviewCount: 2045,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    pricing: {
      en: 'Freemium',
      vi: 'Miễn phí cơ bản'
    },
    description: {
      en: 'CSM.ai is a powerful AI tool for image that helps you achieve more in less time.',
      vi: 'CSM.ai là một công cụ AI mạnh mẽ dành cho image giúp bạn đạt được nhiều thành tựu hơn trong thời gian ngắn hơn.'
    },
    features: {
      en: ['Advanced AI capabilities', 'User-friendly interface', 'Fast processing', 'Cloud sync'],
      vi: ['Khả năng AI tiên tiến', 'Giao diện thân thiện', 'Xử lý nhanh', 'Đồng bộ đám mây']
    },
    pros: {
      en: ['High quality output', 'Easy to use', 'Regular updates'],
      vi: ['Đầu ra chất lượng cao', 'Dễ sử dụng', 'Cập nhật thường xuyên']
    },
    cons: {
      en: ['Premium features require subscription', 'Learning curve for advanced features'],
      vi: ['Tính năng cao cấp yêu cầu trả phí', 'Cần thời gian học các tính năng nâng cao']
    },
    useCases: {
      en: [
        { title: 'Professional Use', examples: ['Enhancing daily workflows', 'Automating repetitive tasks'] },
        { title: 'Personal Projects', examples: ['Creative exploration', 'Learning new skills'] }
      ],
      vi: [
        { title: 'Sử dụng chuyên nghiệp', examples: ['Nâng cao quy trình làm việc hàng ngày', 'Tự động hóa các tác vụ lặp đi lặp lại'] },
        { title: 'Dự án cá nhân', examples: ['Khám phá sáng tạo', 'Học kỹ năng mới'] }
      ]
    },
    affiliateUrl: 'https://csm.ai',
    howToUse: {
      en: ['Sign up for an account', 'Explore the dashboard', 'Start creating with AI'],
      vi: ['Đăng ký tài khoản', 'Khám phá bảng điều khiển', 'Bắt đầu sáng tạo với AI']
    }
  },
  {
    id: 'blockade',
    name: 'Blockade Labs',
    domain: 'blockadelabs.com',
    logo: getLogo('blockadelabs.com'),
    screenshots: ['https://picsum.photos/seed/blockade1/800/450', 'https://picsum.photos/seed/blockade2/800/450'],
    category: 'image',
    rating: 4.8,
    reviewCount: 587,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    pricing: {
      en: 'Freemium',
      vi: 'Miễn phí cơ bản'
    },
    description: {
      en: 'Blockade Labs is a powerful AI tool for image that helps you achieve more in less time.',
      vi: 'Blockade Labs là một công cụ AI mạnh mẽ dành cho image giúp bạn đạt được nhiều thành tựu hơn trong thời gian ngắn hơn.'
    },
    features: {
      en: ['Advanced AI capabilities', 'User-friendly interface', 'Fast processing', 'Cloud sync'],
      vi: ['Khả năng AI tiên tiến', 'Giao diện thân thiện', 'Xử lý nhanh', 'Đồng bộ đám mây']
    },
    pros: {
      en: ['High quality output', 'Easy to use', 'Regular updates'],
      vi: ['Đầu ra chất lượng cao', 'Dễ sử dụng', 'Cập nhật thường xuyên']
    },
    cons: {
      en: ['Premium features require subscription', 'Learning curve for advanced features'],
      vi: ['Tính năng cao cấp yêu cầu trả phí', 'Cần thời gian học các tính năng nâng cao']
    },
    useCases: {
      en: [
        { title: 'Professional Use', examples: ['Enhancing daily workflows', 'Automating repetitive tasks'] },
        { title: 'Personal Projects', examples: ['Creative exploration', 'Learning new skills'] }
      ],
      vi: [
        { title: 'Sử dụng chuyên nghiệp', examples: ['Nâng cao quy trình làm việc hàng ngày', 'Tự động hóa các tác vụ lặp đi lặp lại'] },
        { title: 'Dự án cá nhân', examples: ['Khám phá sáng tạo', 'Học kỹ năng mới'] }
      ]
    },
    affiliateUrl: 'https://blockadelabs.com',
    howToUse: {
      en: ['Sign up for an account', 'Explore the dashboard', 'Start creating with AI'],
      vi: ['Đăng ký tài khoản', 'Khám phá bảng điều khiển', 'Bắt đầu sáng tạo với AI']
    }
  },
  {
    id: 'vizcom',
    name: 'Vizcom',
    domain: 'vizcom.ai',
    logo: getLogo('vizcom.ai'),
    screenshots: ['https://picsum.photos/seed/vizcom1/800/450', 'https://picsum.photos/seed/vizcom2/800/450'],
    category: 'image',
    rating: 4.8,
    reviewCount: 104,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    pricing: {
      en: 'Freemium',
      vi: 'Miễn phí cơ bản'
    },
    description: {
      en: 'Vizcom is a powerful AI tool for image that helps you achieve more in less time.',
      vi: 'Vizcom là một công cụ AI mạnh mẽ dành cho image giúp bạn đạt được nhiều thành tựu hơn trong thời gian ngắn hơn.'
    },
    features: {
      en: ['Advanced AI capabilities', 'User-friendly interface', 'Fast processing', 'Cloud sync'],
      vi: ['Khả năng AI tiên tiến', 'Giao diện thân thiện', 'Xử lý nhanh', 'Đồng bộ đám mây']
    },
    pros: {
      en: ['High quality output', 'Easy to use', 'Regular updates'],
      vi: ['Đầu ra chất lượng cao', 'Dễ sử dụng', 'Cập nhật thường xuyên']
    },
    cons: {
      en: ['Premium features require subscription', 'Learning curve for advanced features'],
      vi: ['Tính năng cao cấp yêu cầu trả phí', 'Cần thời gian học các tính năng nâng cao']
    },
    useCases: {
      en: [
        { title: 'Professional Use', examples: ['Enhancing daily workflows', 'Automating repetitive tasks'] },
        { title: 'Personal Projects', examples: ['Creative exploration', 'Learning new skills'] }
      ],
      vi: [
        { title: 'Sử dụng chuyên nghiệp', examples: ['Nâng cao quy trình làm việc hàng ngày', 'Tự động hóa các tác vụ lặp đi lặp lại'] },
        { title: 'Dự án cá nhân', examples: ['Khám phá sáng tạo', 'Học kỹ năng mới'] }
      ]
    },
    affiliateUrl: 'https://vizcom.ai',
    howToUse: {
      en: ['Sign up for an account', 'Explore the dashboard', 'Start creating with AI'],
      vi: ['Đăng ký tài khoản', 'Khám phá bảng điều khiển', 'Bắt đầu sáng tạo với AI']
    }
  },
  {
    id: 'kittle',
    name: 'Kittl',
    domain: 'kittl.com',
    logo: getLogo('kittl.com'),
    screenshots: ['https://picsum.photos/seed/kittle1/800/450', 'https://picsum.photos/seed/kittle2/800/450'],
    category: 'image',
    rating: 4.9,
    reviewCount: 1441,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    pricing: {
      en: 'Freemium',
      vi: 'Miễn phí cơ bản'
    },
    description: {
      en: 'Kittl is a powerful AI tool for image that helps you achieve more in less time.',
      vi: 'Kittl là một công cụ AI mạnh mẽ dành cho image giúp bạn đạt được nhiều thành tựu hơn trong thời gian ngắn hơn.'
    },
    features: {
      en: ['Advanced AI capabilities', 'User-friendly interface', 'Fast processing', 'Cloud sync'],
      vi: ['Khả năng AI tiên tiến', 'Giao diện thân thiện', 'Xử lý nhanh', 'Đồng bộ đám mây']
    },
    pros: {
      en: ['High quality output', 'Easy to use', 'Regular updates'],
      vi: ['Đầu ra chất lượng cao', 'Dễ sử dụng', 'Cập nhật thường xuyên']
    },
    cons: {
      en: ['Premium features require subscription', 'Learning curve for advanced features'],
      vi: ['Tính năng cao cấp yêu cầu trả phí', 'Cần thời gian học các tính năng nâng cao']
    },
    useCases: {
      en: [
        { title: 'Professional Use', examples: ['Enhancing daily workflows', 'Automating repetitive tasks'] },
        { title: 'Personal Projects', examples: ['Creative exploration', 'Learning new skills'] }
      ],
      vi: [
        { title: 'Sử dụng chuyên nghiệp', examples: ['Nâng cao quy trình làm việc hàng ngày', 'Tự động hóa các tác vụ lặp đi lặp lại'] },
        { title: 'Dự án cá nhân', examples: ['Khám phá sáng tạo', 'Học kỹ năng mới'] }
      ]
    },
    affiliateUrl: 'https://kittl.com',
    howToUse: {
      en: ['Sign up for an account', 'Explore the dashboard', 'Start creating with AI'],
      vi: ['Đăng ký tài khoản', 'Khám phá bảng điều khiển', 'Bắt đầu sáng tạo với AI']
    }
  },
  {
    id: 'relume',
    name: 'Relume',
    domain: 'relume.io',
    logo: getLogo('relume.io'),
    screenshots: ['https://picsum.photos/seed/relume1/800/450', 'https://picsum.photos/seed/relume2/800/450'],
    category: 'coding',
    rating: 4.7,
    reviewCount: 1036,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    pricing: {
      en: 'Freemium',
      vi: 'Miễn phí cơ bản'
    },
    description: {
      en: 'Relume is a powerful AI tool for coding that helps you achieve more in less time.',
      vi: 'Relume là một công cụ AI mạnh mẽ dành cho coding giúp bạn đạt được nhiều thành tựu hơn trong thời gian ngắn hơn.'
    },
    features: {
      en: ['Advanced AI capabilities', 'User-friendly interface', 'Fast processing', 'Cloud sync'],
      vi: ['Khả năng AI tiên tiến', 'Giao diện thân thiện', 'Xử lý nhanh', 'Đồng bộ đám mây']
    },
    pros: {
      en: ['High quality output', 'Easy to use', 'Regular updates'],
      vi: ['Đầu ra chất lượng cao', 'Dễ sử dụng', 'Cập nhật thường xuyên']
    },
    cons: {
      en: ['Premium features require subscription', 'Learning curve for advanced features'],
      vi: ['Tính năng cao cấp yêu cầu trả phí', 'Cần thời gian học các tính năng nâng cao']
    },
    useCases: {
      en: [
        { title: 'Professional Use', examples: ['Enhancing daily workflows', 'Automating repetitive tasks'] },
        { title: 'Personal Projects', examples: ['Creative exploration', 'Learning new skills'] }
      ],
      vi: [
        { title: 'Sử dụng chuyên nghiệp', examples: ['Nâng cao quy trình làm việc hàng ngày', 'Tự động hóa các tác vụ lặp đi lặp lại'] },
        { title: 'Dự án cá nhân', examples: ['Khám phá sáng tạo', 'Học kỹ năng mới'] }
      ]
    },
    affiliateUrl: 'https://relume.io',
    howToUse: {
      en: ['Sign up for an account', 'Explore the dashboard', 'Start creating with AI'],
      vi: ['Đăng ký tài khoản', 'Khám phá bảng điều khiển', 'Bắt đầu sáng tạo với AI']
    }
  },
  {
    id: 'framer',
    name: 'Framer AI',
    domain: 'framer.com',
    logo: getLogo('framer.com'),
    screenshots: ['https://picsum.photos/seed/framer1/800/450', 'https://picsum.photos/seed/framer2/800/450'],
    category: 'coding',
    rating: 5.0,
    reviewCount: 2647,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    pricing: {
      en: 'Freemium',
      vi: 'Miễn phí cơ bản'
    },
    description: {
      en: 'Framer AI is a powerful AI tool for coding that helps you achieve more in less time.',
      vi: 'Framer AI là một công cụ AI mạnh mẽ dành cho coding giúp bạn đạt được nhiều thành tựu hơn trong thời gian ngắn hơn.'
    },
    features: {
      en: ['Advanced AI capabilities', 'User-friendly interface', 'Fast processing', 'Cloud sync'],
      vi: ['Khả năng AI tiên tiến', 'Giao diện thân thiện', 'Xử lý nhanh', 'Đồng bộ đám mây']
    },
    pros: {
      en: ['High quality output', 'Easy to use', 'Regular updates'],
      vi: ['Đầu ra chất lượng cao', 'Dễ sử dụng', 'Cập nhật thường xuyên']
    },
    cons: {
      en: ['Premium features require subscription', 'Learning curve for advanced features'],
      vi: ['Tính năng cao cấp yêu cầu trả phí', 'Cần thời gian học các tính năng nâng cao']
    },
    useCases: {
      en: [
        { title: 'Professional Use', examples: ['Enhancing daily workflows', 'Automating repetitive tasks'] },
        { title: 'Personal Projects', examples: ['Creative exploration', 'Learning new skills'] }
      ],
      vi: [
        { title: 'Sử dụng chuyên nghiệp', examples: ['Nâng cao quy trình làm việc hàng ngày', 'Tự động hóa các tác vụ lặp đi lặp lại'] },
        { title: 'Dự án cá nhân', examples: ['Khám phá sáng tạo', 'Học kỹ năng mới'] }
      ]
    },
    affiliateUrl: 'https://framer.com',
    howToUse: {
      en: ['Sign up for an account', 'Explore the dashboard', 'Start creating with AI'],
      vi: ['Đăng ký tài khoản', 'Khám phá bảng điều khiển', 'Bắt đầu sáng tạo với AI']
    }
  },
  {
    id: 'webflow',
    name: 'Webflow AI',
    domain: 'webflow.com',
    logo: getLogo('webflow.com'),
    screenshots: ['https://picsum.photos/seed/webflow1/800/450', 'https://picsum.photos/seed/webflow2/800/450'],
    category: 'coding',
    rating: 4.3,
    reviewCount: 2649,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    pricing: {
      en: 'Freemium',
      vi: 'Miễn phí cơ bản'
    },
    description: {
      en: 'Webflow AI is a powerful AI tool for coding that helps you achieve more in less time.',
      vi: 'Webflow AI là một công cụ AI mạnh mẽ dành cho coding giúp bạn đạt được nhiều thành tựu hơn trong thời gian ngắn hơn.'
    },
    features: {
      en: ['Advanced AI capabilities', 'User-friendly interface', 'Fast processing', 'Cloud sync'],
      vi: ['Khả năng AI tiên tiến', 'Giao diện thân thiện', 'Xử lý nhanh', 'Đồng bộ đám mây']
    },
    pros: {
      en: ['High quality output', 'Easy to use', 'Regular updates'],
      vi: ['Đầu ra chất lượng cao', 'Dễ sử dụng', 'Cập nhật thường xuyên']
    },
    cons: {
      en: ['Premium features require subscription', 'Learning curve for advanced features'],
      vi: ['Tính năng cao cấp yêu cầu trả phí', 'Cần thời gian học các tính năng nâng cao']
    },
    useCases: {
      en: [
        { title: 'Professional Use', examples: ['Enhancing daily workflows', 'Automating repetitive tasks'] },
        { title: 'Personal Projects', examples: ['Creative exploration', 'Learning new skills'] }
      ],
      vi: [
        { title: 'Sử dụng chuyên nghiệp', examples: ['Nâng cao quy trình làm việc hàng ngày', 'Tự động hóa các tác vụ lặp đi lặp lại'] },
        { title: 'Dự án cá nhân', examples: ['Khám phá sáng tạo', 'Học kỹ năng mới'] }
      ]
    },
    affiliateUrl: 'https://webflow.com',
    howToUse: {
      en: ['Sign up for an account', 'Explore the dashboard', 'Start creating with AI'],
      vi: ['Đăng ký tài khoản', 'Khám phá bảng điều khiển', 'Bắt đầu sáng tạo với AI']
    }
  },
  {
    id: 'dorik',
    name: 'Dorik AI',
    domain: 'dorik.com',
    logo: getLogo('dorik.com'),
    screenshots: ['https://picsum.photos/seed/dorik1/800/450', 'https://picsum.photos/seed/dorik2/800/450'],
    category: 'coding',
    rating: 4.0,
    reviewCount: 4878,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    pricing: {
      en: 'Freemium',
      vi: 'Miễn phí cơ bản'
    },
    description: {
      en: 'Dorik AI is a powerful AI tool for coding that helps you achieve more in less time.',
      vi: 'Dorik AI là một công cụ AI mạnh mẽ dành cho coding giúp bạn đạt được nhiều thành tựu hơn trong thời gian ngắn hơn.'
    },
    features: {
      en: ['Advanced AI capabilities', 'User-friendly interface', 'Fast processing', 'Cloud sync'],
      vi: ['Khả năng AI tiên tiến', 'Giao diện thân thiện', 'Xử lý nhanh', 'Đồng bộ đám mây']
    },
    pros: {
      en: ['High quality output', 'Easy to use', 'Regular updates'],
      vi: ['Đầu ra chất lượng cao', 'Dễ sử dụng', 'Cập nhật thường xuyên']
    },
    cons: {
      en: ['Premium features require subscription', 'Learning curve for advanced features'],
      vi: ['Tính năng cao cấp yêu cầu trả phí', 'Cần thời gian học các tính năng nâng cao']
    },
    useCases: {
      en: [
        { title: 'Professional Use', examples: ['Enhancing daily workflows', 'Automating repetitive tasks'] },
        { title: 'Personal Projects', examples: ['Creative exploration', 'Learning new skills'] }
      ],
      vi: [
        { title: 'Sử dụng chuyên nghiệp', examples: ['Nâng cao quy trình làm việc hàng ngày', 'Tự động hóa các tác vụ lặp đi lặp lại'] },
        { title: 'Dự án cá nhân', examples: ['Khám phá sáng tạo', 'Học kỹ năng mới'] }
      ]
    },
    affiliateUrl: 'https://dorik.com',
    howToUse: {
      en: ['Sign up for an account', 'Explore the dashboard', 'Start creating with AI'],
      vi: ['Đăng ký tài khoản', 'Khám phá bảng điều khiển', 'Bắt đầu sáng tạo với AI']
    }
  },
  {
    id: '10web',
    name: '10Web',
    domain: '10web.io',
    logo: getLogo('10web.io'),
    screenshots: ['https://picsum.photos/seed/10web1/800/450', 'https://picsum.photos/seed/10web2/800/450'],
    category: 'coding',
    rating: 4.5,
    reviewCount: 227,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    pricing: {
      en: 'Freemium',
      vi: 'Miễn phí cơ bản'
    },
    description: {
      en: '10Web is a powerful AI tool for coding that helps you achieve more in less time.',
      vi: '10Web là một công cụ AI mạnh mẽ dành cho coding giúp bạn đạt được nhiều thành tựu hơn trong thời gian ngắn hơn.'
    },
    features: {
      en: ['Advanced AI capabilities', 'User-friendly interface', 'Fast processing', 'Cloud sync'],
      vi: ['Khả năng AI tiên tiến', 'Giao diện thân thiện', 'Xử lý nhanh', 'Đồng bộ đám mây']
    },
    pros: {
      en: ['High quality output', 'Easy to use', 'Regular updates'],
      vi: ['Đầu ra chất lượng cao', 'Dễ sử dụng', 'Cập nhật thường xuyên']
    },
    cons: {
      en: ['Premium features require subscription', 'Learning curve for advanced features'],
      vi: ['Tính năng cao cấp yêu cầu trả phí', 'Cần thời gian học các tính năng nâng cao']
    },
    useCases: {
      en: [
        { title: 'Professional Use', examples: ['Enhancing daily workflows', 'Automating repetitive tasks'] },
        { title: 'Personal Projects', examples: ['Creative exploration', 'Learning new skills'] }
      ],
      vi: [
        { title: 'Sử dụng chuyên nghiệp', examples: ['Nâng cao quy trình làm việc hàng ngày', 'Tự động hóa các tác vụ lặp đi lặp lại'] },
        { title: 'Dự án cá nhân', examples: ['Khám phá sáng tạo', 'Học kỹ năng mới'] }
      ]
    },
    affiliateUrl: 'https://10web.io',
    howToUse: {
      en: ['Sign up for an account', 'Explore the dashboard', 'Start creating with AI'],
      vi: ['Đăng ký tài khoản', 'Khám phá bảng điều khiển', 'Bắt đầu sáng tạo với AI']
    }
  },
  {
    id: 'durable',
    name: 'Durable',
    domain: 'durable.co',
    logo: getLogo('durable.co'),
    screenshots: ['https://picsum.photos/seed/durable1/800/450', 'https://picsum.photos/seed/durable2/800/450'],
    category: 'coding',
    rating: 4.2,
    reviewCount: 1163,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    pricing: {
      en: 'Freemium',
      vi: 'Miễn phí cơ bản'
    },
    description: {
      en: 'Durable is a powerful AI tool for coding that helps you achieve more in less time.',
      vi: 'Durable là một công cụ AI mạnh mẽ dành cho coding giúp bạn đạt được nhiều thành tựu hơn trong thời gian ngắn hơn.'
    },
    features: {
      en: ['Advanced AI capabilities', 'User-friendly interface', 'Fast processing', 'Cloud sync'],
      vi: ['Khả năng AI tiên tiến', 'Giao diện thân thiện', 'Xử lý nhanh', 'Đồng bộ đám mây']
    },
    pros: {
      en: ['High quality output', 'Easy to use', 'Regular updates'],
      vi: ['Đầu ra chất lượng cao', 'Dễ sử dụng', 'Cập nhật thường xuyên']
    },
    cons: {
      en: ['Premium features require subscription', 'Learning curve for advanced features'],
      vi: ['Tính năng cao cấp yêu cầu trả phí', 'Cần thời gian học các tính năng nâng cao']
    },
    useCases: {
      en: [
        { title: 'Professional Use', examples: ['Enhancing daily workflows', 'Automating repetitive tasks'] },
        { title: 'Personal Projects', examples: ['Creative exploration', 'Learning new skills'] }
      ],
      vi: [
        { title: 'Sử dụng chuyên nghiệp', examples: ['Nâng cao quy trình làm việc hàng ngày', 'Tự động hóa các tác vụ lặp đi lặp lại'] },
        { title: 'Dự án cá nhân', examples: ['Khám phá sáng tạo', 'Học kỹ năng mới'] }
      ]
    },
    affiliateUrl: 'https://durable.co',
    howToUse: {
      en: ['Sign up for an account', 'Explore the dashboard', 'Start creating with AI'],
      vi: ['Đăng ký tài khoản', 'Khám phá bảng điều khiển', 'Bắt đầu sáng tạo với AI']
    }
  },
  {
    id: 'mixo',
    name: 'Mixo',
    domain: 'mixo.io',
    logo: getLogo('mixo.io'),
    screenshots: ['https://picsum.photos/seed/mixo1/800/450', 'https://picsum.photos/seed/mixo2/800/450'],
    category: 'coding',
    rating: 4.6,
    reviewCount: 3345,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    pricing: {
      en: 'Freemium',
      vi: 'Miễn phí cơ bản'
    },
    description: {
      en: 'Mixo is a powerful AI tool for coding that helps you achieve more in less time.',
      vi: 'Mixo là một công cụ AI mạnh mẽ dành cho coding giúp bạn đạt được nhiều thành tựu hơn trong thời gian ngắn hơn.'
    },
    features: {
      en: ['Advanced AI capabilities', 'User-friendly interface', 'Fast processing', 'Cloud sync'],
      vi: ['Khả năng AI tiên tiến', 'Giao diện thân thiện', 'Xử lý nhanh', 'Đồng bộ đám mây']
    },
    pros: {
      en: ['High quality output', 'Easy to use', 'Regular updates'],
      vi: ['Đầu ra chất lượng cao', 'Dễ sử dụng', 'Cập nhật thường xuyên']
    },
    cons: {
      en: ['Premium features require subscription', 'Learning curve for advanced features'],
      vi: ['Tính năng cao cấp yêu cầu trả phí', 'Cần thời gian học các tính năng nâng cao']
    },
    useCases: {
      en: [
        { title: 'Professional Use', examples: ['Enhancing daily workflows', 'Automating repetitive tasks'] },
        { title: 'Personal Projects', examples: ['Creative exploration', 'Learning new skills'] }
      ],
      vi: [
        { title: 'Sử dụng chuyên nghiệp', examples: ['Nâng cao quy trình làm việc hàng ngày', 'Tự động hóa các tác vụ lặp đi lặp lại'] },
        { title: 'Dự án cá nhân', examples: ['Khám phá sáng tạo', 'Học kỹ năng mới'] }
      ]
    },
    affiliateUrl: 'https://mixo.io',
    howToUse: {
      en: ['Sign up for an account', 'Explore the dashboard', 'Start creating with AI'],
      vi: ['Đăng ký tài khoản', 'Khám phá bảng điều khiển', 'Bắt đầu sáng tạo với AI']
    }
  },
  {
    id: 'gamma-site',
    name: 'Gamma Sites',
    domain: 'gamma.app',
    logo: getLogo('gamma.app'),
    screenshots: ['https://picsum.photos/seed/gamma-site1/800/450', 'https://picsum.photos/seed/gamma-site2/800/450'],
    category: 'coding',
    rating: 4.0,
    reviewCount: 5049,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    pricing: {
      en: 'Freemium',
      vi: 'Miễn phí cơ bản'
    },
    description: {
      en: 'Gamma Sites is a powerful AI tool for coding that helps you achieve more in less time.',
      vi: 'Gamma Sites là một công cụ AI mạnh mẽ dành cho coding giúp bạn đạt được nhiều thành tựu hơn trong thời gian ngắn hơn.'
    },
    features: {
      en: ['Advanced AI capabilities', 'User-friendly interface', 'Fast processing', 'Cloud sync'],
      vi: ['Khả năng AI tiên tiến', 'Giao diện thân thiện', 'Xử lý nhanh', 'Đồng bộ đám mây']
    },
    pros: {
      en: ['High quality output', 'Easy to use', 'Regular updates'],
      vi: ['Đầu ra chất lượng cao', 'Dễ sử dụng', 'Cập nhật thường xuyên']
    },
    cons: {
      en: ['Premium features require subscription', 'Learning curve for advanced features'],
      vi: ['Tính năng cao cấp yêu cầu trả phí', 'Cần thời gian học các tính năng nâng cao']
    },
    useCases: {
      en: [
        { title: 'Professional Use', examples: ['Enhancing daily workflows', 'Automating repetitive tasks'] },
        { title: 'Personal Projects', examples: ['Creative exploration', 'Learning new skills'] }
      ],
      vi: [
        { title: 'Sử dụng chuyên nghiệp', examples: ['Nâng cao quy trình làm việc hàng ngày', 'Tự động hóa các tác vụ lặp đi lặp lại'] },
        { title: 'Dự án cá nhân', examples: ['Khám phá sáng tạo', 'Học kỹ năng mới'] }
      ]
    },
    affiliateUrl: 'https://gamma.app',
    howToUse: {
      en: ['Sign up for an account', 'Explore the dashboard', 'Start creating with AI'],
      vi: ['Đăng ký tài khoản', 'Khám phá bảng điều khiển', 'Bắt đầu sáng tạo với AI']
    }
  },
  {
    id: 'chatdoc',
    name: 'ChatDOC',
    domain: 'chatdoc.com',
    logo: getLogo('chatdoc.com'),
    screenshots: ['https://picsum.photos/seed/chatdoc1/800/450', 'https://picsum.photos/seed/chatdoc2/800/450'],
    category: 'productivity',
    rating: 4.5,
    reviewCount: 4620,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    pricing: {
      en: 'Freemium',
      vi: 'Miễn phí cơ bản'
    },
    description: {
      en: 'ChatDOC is a powerful AI tool for productivity that helps you achieve more in less time.',
      vi: 'ChatDOC là một công cụ AI mạnh mẽ dành cho productivity giúp bạn đạt được nhiều thành tựu hơn trong thời gian ngắn hơn.'
    },
    features: {
      en: ['Advanced AI capabilities', 'User-friendly interface', 'Fast processing', 'Cloud sync'],
      vi: ['Khả năng AI tiên tiến', 'Giao diện thân thiện', 'Xử lý nhanh', 'Đồng bộ đám mây']
    },
    pros: {
      en: ['High quality output', 'Easy to use', 'Regular updates'],
      vi: ['Đầu ra chất lượng cao', 'Dễ sử dụng', 'Cập nhật thường xuyên']
    },
    cons: {
      en: ['Premium features require subscription', 'Learning curve for advanced features'],
      vi: ['Tính năng cao cấp yêu cầu trả phí', 'Cần thời gian học các tính năng nâng cao']
    },
    useCases: {
      en: [
        { title: 'Professional Use', examples: ['Enhancing daily workflows', 'Automating repetitive tasks'] },
        { title: 'Personal Projects', examples: ['Creative exploration', 'Learning new skills'] }
      ],
      vi: [
        { title: 'Sử dụng chuyên nghiệp', examples: ['Nâng cao quy trình làm việc hàng ngày', 'Tự động hóa các tác vụ lặp đi lặp lại'] },
        { title: 'Dự án cá nhân', examples: ['Khám phá sáng tạo', 'Học kỹ năng mới'] }
      ]
    },
    affiliateUrl: 'https://chatdoc.com',
    howToUse: {
      en: ['Sign up for an account', 'Explore the dashboard', 'Start creating with AI'],
      vi: ['Đăng ký tài khoản', 'Khám phá bảng điều khiển', 'Bắt đầu sáng tạo với AI']
    }
  },
  {
    id: 'pdf-ai',
    name: 'PDF.ai',
    domain: 'pdf.ai',
    logo: getLogo('pdf.ai'),
    screenshots: ['https://picsum.photos/seed/pdf-ai1/800/450', 'https://picsum.photos/seed/pdf-ai2/800/450'],
    category: 'productivity',
    rating: 4.9,
    reviewCount: 2243,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    pricing: {
      en: 'Freemium',
      vi: 'Miễn phí cơ bản'
    },
    description: {
      en: 'PDF.ai is a powerful AI tool for productivity that helps you achieve more in less time.',
      vi: 'PDF.ai là một công cụ AI mạnh mẽ dành cho productivity giúp bạn đạt được nhiều thành tựu hơn trong thời gian ngắn hơn.'
    },
    features: {
      en: ['Advanced AI capabilities', 'User-friendly interface', 'Fast processing', 'Cloud sync'],
      vi: ['Khả năng AI tiên tiến', 'Giao diện thân thiện', 'Xử lý nhanh', 'Đồng bộ đám mây']
    },
    pros: {
      en: ['High quality output', 'Easy to use', 'Regular updates'],
      vi: ['Đầu ra chất lượng cao', 'Dễ sử dụng', 'Cập nhật thường xuyên']
    },
    cons: {
      en: ['Premium features require subscription', 'Learning curve for advanced features'],
      vi: ['Tính năng cao cấp yêu cầu trả phí', 'Cần thời gian học các tính năng nâng cao']
    },
    useCases: {
      en: [
        { title: 'Professional Use', examples: ['Enhancing daily workflows', 'Automating repetitive tasks'] },
        { title: 'Personal Projects', examples: ['Creative exploration', 'Learning new skills'] }
      ],
      vi: [
        { title: 'Sử dụng chuyên nghiệp', examples: ['Nâng cao quy trình làm việc hàng ngày', 'Tự động hóa các tác vụ lặp đi lặp lại'] },
        { title: 'Dự án cá nhân', examples: ['Khám phá sáng tạo', 'Học kỹ năng mới'] }
      ]
    },
    affiliateUrl: 'https://pdf.ai',
    howToUse: {
      en: ['Sign up for an account', 'Explore the dashboard', 'Start creating with AI'],
      vi: ['Đăng ký tài khoản', 'Khám phá bảng điều khiển', 'Bắt đầu sáng tạo với AI']
    }
  },
  {
    id: 'humata',
    name: 'Humata',
    domain: 'humata.ai',
    logo: getLogo('humata.ai'),
    screenshots: ['https://picsum.photos/seed/humata1/800/450', 'https://picsum.photos/seed/humata2/800/450'],
    category: 'productivity',
    rating: 4.5,
    reviewCount: 808,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    pricing: {
      en: 'Freemium',
      vi: 'Miễn phí cơ bản'
    },
    description: {
      en: 'Humata is a powerful AI tool for productivity that helps you achieve more in less time.',
      vi: 'Humata là một công cụ AI mạnh mẽ dành cho productivity giúp bạn đạt được nhiều thành tựu hơn trong thời gian ngắn hơn.'
    },
    features: {
      en: ['Advanced AI capabilities', 'User-friendly interface', 'Fast processing', 'Cloud sync'],
      vi: ['Khả năng AI tiên tiến', 'Giao diện thân thiện', 'Xử lý nhanh', 'Đồng bộ đám mây']
    },
    pros: {
      en: ['High quality output', 'Easy to use', 'Regular updates'],
      vi: ['Đầu ra chất lượng cao', 'Dễ sử dụng', 'Cập nhật thường xuyên']
    },
    cons: {
      en: ['Premium features require subscription', 'Learning curve for advanced features'],
      vi: ['Tính năng cao cấp yêu cầu trả phí', 'Cần thời gian học các tính năng nâng cao']
    },
    useCases: {
      en: [
        { title: 'Professional Use', examples: ['Enhancing daily workflows', 'Automating repetitive tasks'] },
        { title: 'Personal Projects', examples: ['Creative exploration', 'Learning new skills'] }
      ],
      vi: [
        { title: 'Sử dụng chuyên nghiệp', examples: ['Nâng cao quy trình làm việc hàng ngày', 'Tự động hóa các tác vụ lặp đi lặp lại'] },
        { title: 'Dự án cá nhân', examples: ['Khám phá sáng tạo', 'Học kỹ năng mới'] }
      ]
    },
    affiliateUrl: 'https://humata.ai',
    howToUse: {
      en: ['Sign up for an account', 'Explore the dashboard', 'Start creating with AI'],
      vi: ['Đăng ký tài khoản', 'Khám phá bảng điều khiển', 'Bắt đầu sáng tạo với AI']
    }
  },
  {
    id: 'sharly',
    name: 'Sharly',
    domain: 'sharly.ai',
    logo: getLogo('sharly.ai'),
    screenshots: ['https://picsum.photos/seed/sharly1/800/450', 'https://picsum.photos/seed/sharly2/800/450'],
    category: 'productivity',
    rating: 4.4,
    reviewCount: 3013,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    pricing: {
      en: 'Freemium',
      vi: 'Miễn phí cơ bản'
    },
    description: {
      en: 'Sharly is a powerful AI tool for productivity that helps you achieve more in less time.',
      vi: 'Sharly là một công cụ AI mạnh mẽ dành cho productivity giúp bạn đạt được nhiều thành tựu hơn trong thời gian ngắn hơn.'
    },
    features: {
      en: ['Advanced AI capabilities', 'User-friendly interface', 'Fast processing', 'Cloud sync'],
      vi: ['Khả năng AI tiên tiến', 'Giao diện thân thiện', 'Xử lý nhanh', 'Đồng bộ đám mây']
    },
    pros: {
      en: ['High quality output', 'Easy to use', 'Regular updates'],
      vi: ['Đầu ra chất lượng cao', 'Dễ sử dụng', 'Cập nhật thường xuyên']
    },
    cons: {
      en: ['Premium features require subscription', 'Learning curve for advanced features'],
      vi: ['Tính năng cao cấp yêu cầu trả phí', 'Cần thời gian học các tính năng nâng cao']
    },
    useCases: {
      en: [
        { title: 'Professional Use', examples: ['Enhancing daily workflows', 'Automating repetitive tasks'] },
        { title: 'Personal Projects', examples: ['Creative exploration', 'Learning new skills'] }
      ],
      vi: [
        { title: 'Sử dụng chuyên nghiệp', examples: ['Nâng cao quy trình làm việc hàng ngày', 'Tự động hóa các tác vụ lặp đi lặp lại'] },
        { title: 'Dự án cá nhân', examples: ['Khám phá sáng tạo', 'Học kỹ năng mới'] }
      ]
    },
    affiliateUrl: 'https://sharly.ai',
    howToUse: {
      en: ['Sign up for an account', 'Explore the dashboard', 'Start creating with AI'],
      vi: ['Đăng ký tài khoản', 'Khám phá bảng điều khiển', 'Bắt đầu sáng tạo với AI']
    }
  },
  {
    id: 'monica',
    name: 'Monica',
    domain: 'monica.im',
    logo: getLogo('monica.im'),
    screenshots: ['https://picsum.photos/seed/monica1/800/450', 'https://picsum.photos/seed/monica2/800/450'],
    category: 'productivity',
    rating: 4.6,
    reviewCount: 2429,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    pricing: {
      en: 'Freemium',
      vi: 'Miễn phí cơ bản'
    },
    description: {
      en: 'Monica is a powerful AI tool for productivity that helps you achieve more in less time.',
      vi: 'Monica là một công cụ AI mạnh mẽ dành cho productivity giúp bạn đạt được nhiều thành tựu hơn trong thời gian ngắn hơn.'
    },
    features: {
      en: ['Advanced AI capabilities', 'User-friendly interface', 'Fast processing', 'Cloud sync'],
      vi: ['Khả năng AI tiên tiến', 'Giao diện thân thiện', 'Xử lý nhanh', 'Đồng bộ đám mây']
    },
    pros: {
      en: ['High quality output', 'Easy to use', 'Regular updates'],
      vi: ['Đầu ra chất lượng cao', 'Dễ sử dụng', 'Cập nhật thường xuyên']
    },
    cons: {
      en: ['Premium features require subscription', 'Learning curve for advanced features'],
      vi: ['Tính năng cao cấp yêu cầu trả phí', 'Cần thời gian học các tính năng nâng cao']
    },
    useCases: {
      en: [
        { title: 'Professional Use', examples: ['Enhancing daily workflows', 'Automating repetitive tasks'] },
        { title: 'Personal Projects', examples: ['Creative exploration', 'Learning new skills'] }
      ],
      vi: [
        { title: 'Sử dụng chuyên nghiệp', examples: ['Nâng cao quy trình làm việc hàng ngày', 'Tự động hóa các tác vụ lặp đi lặp lại'] },
        { title: 'Dự án cá nhân', examples: ['Khám phá sáng tạo', 'Học kỹ năng mới'] }
      ]
    },
    affiliateUrl: 'https://monica.im',
    howToUse: {
      en: ['Sign up for an account', 'Explore the dashboard', 'Start creating with AI'],
      vi: ['Đăng ký tài khoản', 'Khám phá bảng điều khiển', 'Bắt đầu sáng tạo với AI']
    }
  },
  {
    id: 'harpa',
    name: 'Harpa AI',
    domain: 'harpa.ai',
    logo: getLogo('harpa.ai'),
    screenshots: ['https://picsum.photos/seed/harpa1/800/450', 'https://picsum.photos/seed/harpa2/800/450'],
    category: 'productivity',
    rating: 4.5,
    reviewCount: 4127,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    pricing: {
      en: 'Freemium',
      vi: 'Miễn phí cơ bản'
    },
    description: {
      en: 'Harpa AI is a powerful AI tool for productivity that helps you achieve more in less time.',
      vi: 'Harpa AI là một công cụ AI mạnh mẽ dành cho productivity giúp bạn đạt được nhiều thành tựu hơn trong thời gian ngắn hơn.'
    },
    features: {
      en: ['Advanced AI capabilities', 'User-friendly interface', 'Fast processing', 'Cloud sync'],
      vi: ['Khả năng AI tiên tiến', 'Giao diện thân thiện', 'Xử lý nhanh', 'Đồng bộ đám mây']
    },
    pros: {
      en: ['High quality output', 'Easy to use', 'Regular updates'],
      vi: ['Đầu ra chất lượng cao', 'Dễ sử dụng', 'Cập nhật thường xuyên']
    },
    cons: {
      en: ['Premium features require subscription', 'Learning curve for advanced features'],
      vi: ['Tính năng cao cấp yêu cầu trả phí', 'Cần thời gian học các tính năng nâng cao']
    },
    useCases: {
      en: [
        { title: 'Professional Use', examples: ['Enhancing daily workflows', 'Automating repetitive tasks'] },
        { title: 'Personal Projects', examples: ['Creative exploration', 'Learning new skills'] }
      ],
      vi: [
        { title: 'Sử dụng chuyên nghiệp', examples: ['Nâng cao quy trình làm việc hàng ngày', 'Tự động hóa các tác vụ lặp đi lặp lại'] },
        { title: 'Dự án cá nhân', examples: ['Khám phá sáng tạo', 'Học kỹ năng mới'] }
      ]
    },
    affiliateUrl: 'https://harpa.ai',
    howToUse: {
      en: ['Sign up for an account', 'Explore the dashboard', 'Start creating with AI'],
      vi: ['Đăng ký tài khoản', 'Khám phá bảng điều khiển', 'Bắt đầu sáng tạo với AI']
    }
  },
  {
    id: 'sider',
    name: 'Sider',
    domain: 'sider.ai',
    logo: getLogo('sider.ai'),
    screenshots: ['https://picsum.photos/seed/sider1/800/450', 'https://picsum.photos/seed/sider2/800/450'],
    category: 'productivity',
    rating: 4.6,
    reviewCount: 648,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    pricing: {
      en: 'Freemium',
      vi: 'Miễn phí cơ bản'
    },
    description: {
      en: 'Sider is a powerful AI tool for productivity that helps you achieve more in less time.',
      vi: 'Sider là một công cụ AI mạnh mẽ dành cho productivity giúp bạn đạt được nhiều thành tựu hơn trong thời gian ngắn hơn.'
    },
    features: {
      en: ['Advanced AI capabilities', 'User-friendly interface', 'Fast processing', 'Cloud sync'],
      vi: ['Khả năng AI tiên tiến', 'Giao diện thân thiện', 'Xử lý nhanh', 'Đồng bộ đám mây']
    },
    pros: {
      en: ['High quality output', 'Easy to use', 'Regular updates'],
      vi: ['Đầu ra chất lượng cao', 'Dễ sử dụng', 'Cập nhật thường xuyên']
    },
    cons: {
      en: ['Premium features require subscription', 'Learning curve for advanced features'],
      vi: ['Tính năng cao cấp yêu cầu trả phí', 'Cần thời gian học các tính năng nâng cao']
    },
    useCases: {
      en: [
        { title: 'Professional Use', examples: ['Enhancing daily workflows', 'Automating repetitive tasks'] },
        { title: 'Personal Projects', examples: ['Creative exploration', 'Learning new skills'] }
      ],
      vi: [
        { title: 'Sử dụng chuyên nghiệp', examples: ['Nâng cao quy trình làm việc hàng ngày', 'Tự động hóa các tác vụ lặp đi lặp lại'] },
        { title: 'Dự án cá nhân', examples: ['Khám phá sáng tạo', 'Học kỹ năng mới'] }
      ]
    },
    affiliateUrl: 'https://sider.ai',
    howToUse: {
      en: ['Sign up for an account', 'Explore the dashboard', 'Start creating with AI'],
      vi: ['Đăng ký tài khoản', 'Khám phá bảng điều khiển', 'Bắt đầu sáng tạo với AI']
    }
  },
  {
    id: 'maxai',
    name: 'MaxAI',
    domain: 'maxai.me',
    logo: getLogo('maxai.me'),
    screenshots: ['https://picsum.photos/seed/maxai1/800/450', 'https://picsum.photos/seed/maxai2/800/450'],
    category: 'productivity',
    rating: 4.2,
    reviewCount: 4574,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    pricing: {
      en: 'Freemium',
      vi: 'Miễn phí cơ bản'
    },
    description: {
      en: 'MaxAI is a powerful AI tool for productivity that helps you achieve more in less time.',
      vi: 'MaxAI là một công cụ AI mạnh mẽ dành cho productivity giúp bạn đạt được nhiều thành tựu hơn trong thời gian ngắn hơn.'
    },
    features: {
      en: ['Advanced AI capabilities', 'User-friendly interface', 'Fast processing', 'Cloud sync'],
      vi: ['Khả năng AI tiên tiến', 'Giao diện thân thiện', 'Xử lý nhanh', 'Đồng bộ đám mây']
    },
    pros: {
      en: ['High quality output', 'Easy to use', 'Regular updates'],
      vi: ['Đầu ra chất lượng cao', 'Dễ sử dụng', 'Cập nhật thường xuyên']
    },
    cons: {
      en: ['Premium features require subscription', 'Learning curve for advanced features'],
      vi: ['Tính năng cao cấp yêu cầu trả phí', 'Cần thời gian học các tính năng nâng cao']
    },
    useCases: {
      en: [
        { title: 'Professional Use', examples: ['Enhancing daily workflows', 'Automating repetitive tasks'] },
        { title: 'Personal Projects', examples: ['Creative exploration', 'Learning new skills'] }
      ],
      vi: [
        { title: 'Sử dụng chuyên nghiệp', examples: ['Nâng cao quy trình làm việc hàng ngày', 'Tự động hóa các tác vụ lặp đi lặp lại'] },
        { title: 'Dự án cá nhân', examples: ['Khám phá sáng tạo', 'Học kỹ năng mới'] }
      ]
    },
    affiliateUrl: 'https://maxai.me',
    howToUse: {
      en: ['Sign up for an account', 'Explore the dashboard', 'Start creating with AI'],
      vi: ['Đăng ký tài khoản', 'Khám phá bảng điều khiển', 'Bắt đầu sáng tạo với AI']
    }
  },
  {
    id: 'merlin',
    name: 'Merlin',
    domain: 'getmerlin.in',
    logo: getLogo('getmerlin.in'),
    screenshots: ['https://picsum.photos/seed/merlin1/800/450', 'https://picsum.photos/seed/merlin2/800/450'],
    category: 'productivity',
    rating: 4.0,
    reviewCount: 484,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    pricing: {
      en: 'Freemium',
      vi: 'Miễn phí cơ bản'
    },
    description: {
      en: 'Merlin is a powerful AI tool for productivity that helps you achieve more in less time.',
      vi: 'Merlin là một công cụ AI mạnh mẽ dành cho productivity giúp bạn đạt được nhiều thành tựu hơn trong thời gian ngắn hơn.'
    },
    features: {
      en: ['Advanced AI capabilities', 'User-friendly interface', 'Fast processing', 'Cloud sync'],
      vi: ['Khả năng AI tiên tiến', 'Giao diện thân thiện', 'Xử lý nhanh', 'Đồng bộ đám mây']
    },
    pros: {
      en: ['High quality output', 'Easy to use', 'Regular updates'],
      vi: ['Đầu ra chất lượng cao', 'Dễ sử dụng', 'Cập nhật thường xuyên']
    },
    cons: {
      en: ['Premium features require subscription', 'Learning curve for advanced features'],
      vi: ['Tính năng cao cấp yêu cầu trả phí', 'Cần thời gian học các tính năng nâng cao']
    },
    useCases: {
      en: [
        { title: 'Professional Use', examples: ['Enhancing daily workflows', 'Automating repetitive tasks'] },
        { title: 'Personal Projects', examples: ['Creative exploration', 'Learning new skills'] }
      ],
      vi: [
        { title: 'Sử dụng chuyên nghiệp', examples: ['Nâng cao quy trình làm việc hàng ngày', 'Tự động hóa các tác vụ lặp đi lặp lại'] },
        { title: 'Dự án cá nhân', examples: ['Khám phá sáng tạo', 'Học kỹ năng mới'] }
      ]
    },
    affiliateUrl: 'https://getmerlin.in',
    howToUse: {
      en: ['Sign up for an account', 'Explore the dashboard', 'Start creating with AI'],
      vi: ['Đăng ký tài khoản', 'Khám phá bảng điều khiển', 'Bắt đầu sáng tạo với AI']
    }
  },
  {
    id: 'aiprm',
    name: 'AIPRM',
    domain: 'aiprm.com',
    logo: getLogo('aiprm.com'),
    screenshots: ['https://picsum.photos/seed/aiprm1/800/450', 'https://picsum.photos/seed/aiprm2/800/450'],
    category: 'productivity',
    rating: 4.5,
    reviewCount: 2498,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    pricing: {
      en: 'Freemium',
      vi: 'Miễn phí cơ bản'
    },
    description: {
      en: 'AIPRM is a powerful AI tool for productivity that helps you achieve more in less time.',
      vi: 'AIPRM là một công cụ AI mạnh mẽ dành cho productivity giúp bạn đạt được nhiều thành tựu hơn trong thời gian ngắn hơn.'
    },
    features: {
      en: ['Advanced AI capabilities', 'User-friendly interface', 'Fast processing', 'Cloud sync'],
      vi: ['Khả năng AI tiên tiến', 'Giao diện thân thiện', 'Xử lý nhanh', 'Đồng bộ đám mây']
    },
    pros: {
      en: ['High quality output', 'Easy to use', 'Regular updates'],
      vi: ['Đầu ra chất lượng cao', 'Dễ sử dụng', 'Cập nhật thường xuyên']
    },
    cons: {
      en: ['Premium features require subscription', 'Learning curve for advanced features'],
      vi: ['Tính năng cao cấp yêu cầu trả phí', 'Cần thời gian học các tính năng nâng cao']
    },
    useCases: {
      en: [
        { title: 'Professional Use', examples: ['Enhancing daily workflows', 'Automating repetitive tasks'] },
        { title: 'Personal Projects', examples: ['Creative exploration', 'Learning new skills'] }
      ],
      vi: [
        { title: 'Sử dụng chuyên nghiệp', examples: ['Nâng cao quy trình làm việc hàng ngày', 'Tự động hóa các tác vụ lặp đi lặp lại'] },
        { title: 'Dự án cá nhân', examples: ['Khám phá sáng tạo', 'Học kỹ năng mới'] }
      ]
    },
    affiliateUrl: 'https://aiprm.com',
    howToUse: {
      en: ['Sign up for an account', 'Explore the dashboard', 'Start creating with AI'],
      vi: ['Đăng ký tài khoản', 'Khám phá bảng điều khiển', 'Bắt đầu sáng tạo với AI']
    }
  },
  {
    id: 'zapier',
    name: 'Zapier Central',
    domain: 'zapier.com',
    logo: getLogo('zapier.com'),
    screenshots: ['https://picsum.photos/seed/zapier1/800/450', 'https://picsum.photos/seed/zapier2/800/450'],
    category: 'productivity',
    rating: 4.8,
    reviewCount: 2281,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    pricing: {
      en: 'Freemium',
      vi: 'Miễn phí cơ bản'
    },
    description: {
      en: 'Zapier Central is a powerful AI tool for productivity that helps you achieve more in less time.',
      vi: 'Zapier Central là một công cụ AI mạnh mẽ dành cho productivity giúp bạn đạt được nhiều thành tựu hơn trong thời gian ngắn hơn.'
    },
    features: {
      en: ['Advanced AI capabilities', 'User-friendly interface', 'Fast processing', 'Cloud sync'],
      vi: ['Khả năng AI tiên tiến', 'Giao diện thân thiện', 'Xử lý nhanh', 'Đồng bộ đám mây']
    },
    pros: {
      en: ['High quality output', 'Easy to use', 'Regular updates'],
      vi: ['Đầu ra chất lượng cao', 'Dễ sử dụng', 'Cập nhật thường xuyên']
    },
    cons: {
      en: ['Premium features require subscription', 'Learning curve for advanced features'],
      vi: ['Tính năng cao cấp yêu cầu trả phí', 'Cần thời gian học các tính năng nâng cao']
    },
    useCases: {
      en: [
        { title: 'Professional Use', examples: ['Enhancing daily workflows', 'Automating repetitive tasks'] },
        { title: 'Personal Projects', examples: ['Creative exploration', 'Learning new skills'] }
      ],
      vi: [
        { title: 'Sử dụng chuyên nghiệp', examples: ['Nâng cao quy trình làm việc hàng ngày', 'Tự động hóa các tác vụ lặp đi lặp lại'] },
        { title: 'Dự án cá nhân', examples: ['Khám phá sáng tạo', 'Học kỹ năng mới'] }
      ]
    },
    affiliateUrl: 'https://zapier.com',
    howToUse: {
      en: ['Sign up for an account', 'Explore the dashboard', 'Start creating with AI'],
      vi: ['Đăng ký tài khoản', 'Khám phá bảng điều khiển', 'Bắt đầu sáng tạo với AI']
    }
  },
  {
    id: 'make',
    name: 'Make AI',
    domain: 'make.com',
    logo: getLogo('make.com'),
    screenshots: ['https://picsum.photos/seed/make1/800/450', 'https://picsum.photos/seed/make2/800/450'],
    category: 'productivity',
    rating: 4.4,
    reviewCount: 3148,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    pricing: {
      en: 'Freemium',
      vi: 'Miễn phí cơ bản'
    },
    description: {
      en: 'Make AI is a powerful AI tool for productivity that helps you achieve more in less time.',
      vi: 'Make AI là một công cụ AI mạnh mẽ dành cho productivity giúp bạn đạt được nhiều thành tựu hơn trong thời gian ngắn hơn.'
    },
    features: {
      en: ['Advanced AI capabilities', 'User-friendly interface', 'Fast processing', 'Cloud sync'],
      vi: ['Khả năng AI tiên tiến', 'Giao diện thân thiện', 'Xử lý nhanh', 'Đồng bộ đám mây']
    },
    pros: {
      en: ['High quality output', 'Easy to use', 'Regular updates'],
      vi: ['Đầu ra chất lượng cao', 'Dễ sử dụng', 'Cập nhật thường xuyên']
    },
    cons: {
      en: ['Premium features require subscription', 'Learning curve for advanced features'],
      vi: ['Tính năng cao cấp yêu cầu trả phí', 'Cần thời gian học các tính năng nâng cao']
    },
    useCases: {
      en: [
        { title: 'Professional Use', examples: ['Enhancing daily workflows', 'Automating repetitive tasks'] },
        { title: 'Personal Projects', examples: ['Creative exploration', 'Learning new skills'] }
      ],
      vi: [
        { title: 'Sử dụng chuyên nghiệp', examples: ['Nâng cao quy trình làm việc hàng ngày', 'Tự động hóa các tác vụ lặp đi lặp lại'] },
        { title: 'Dự án cá nhân', examples: ['Khám phá sáng tạo', 'Học kỹ năng mới'] }
      ]
    },
    affiliateUrl: 'https://make.com',
    howToUse: {
      en: ['Sign up for an account', 'Explore the dashboard', 'Start creating with AI'],
      vi: ['Đăng ký tài khoản', 'Khám phá bảng điều khiển', 'Bắt đầu sáng tạo với AI']
    }
  },
  {
    id: 'bardeen',
    name: 'Bardeen',
    domain: 'bardeen.ai',
    logo: getLogo('bardeen.ai'),
    screenshots: ['https://picsum.photos/seed/bardeen1/800/450', 'https://picsum.photos/seed/bardeen2/800/450'],
    category: 'productivity',
    rating: 4.0,
    reviewCount: 1812,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    pricing: {
      en: 'Freemium',
      vi: 'Miễn phí cơ bản'
    },
    description: {
      en: 'Bardeen is a powerful AI tool for productivity that helps you achieve more in less time.',
      vi: 'Bardeen là một công cụ AI mạnh mẽ dành cho productivity giúp bạn đạt được nhiều thành tựu hơn trong thời gian ngắn hơn.'
    },
    features: {
      en: ['Advanced AI capabilities', 'User-friendly interface', 'Fast processing', 'Cloud sync'],
      vi: ['Khả năng AI tiên tiến', 'Giao diện thân thiện', 'Xử lý nhanh', 'Đồng bộ đám mây']
    },
    pros: {
      en: ['High quality output', 'Easy to use', 'Regular updates'],
      vi: ['Đầu ra chất lượng cao', 'Dễ sử dụng', 'Cập nhật thường xuyên']
    },
    cons: {
      en: ['Premium features require subscription', 'Learning curve for advanced features'],
      vi: ['Tính năng cao cấp yêu cầu trả phí', 'Cần thời gian học các tính năng nâng cao']
    },
    useCases: {
      en: [
        { title: 'Professional Use', examples: ['Enhancing daily workflows', 'Automating repetitive tasks'] },
        { title: 'Personal Projects', examples: ['Creative exploration', 'Learning new skills'] }
      ],
      vi: [
        { title: 'Sử dụng chuyên nghiệp', examples: ['Nâng cao quy trình làm việc hàng ngày', 'Tự động hóa các tác vụ lặp đi lặp lại'] },
        { title: 'Dự án cá nhân', examples: ['Khám phá sáng tạo', 'Học kỹ năng mới'] }
      ]
    },
    affiliateUrl: 'https://bardeen.ai',
    howToUse: {
      en: ['Sign up for an account', 'Explore the dashboard', 'Start creating with AI'],
      vi: ['Đăng ký tài khoản', 'Khám phá bảng điều khiển', 'Bắt đầu sáng tạo với AI']
    }
  },
  {
    id: 'taskade',
    name: 'Taskade',
    domain: 'taskade.com',
    logo: getLogo('taskade.com'),
    screenshots: ['https://picsum.photos/seed/taskade1/800/450', 'https://picsum.photos/seed/taskade2/800/450'],
    category: 'productivity',
    rating: 4.6,
    reviewCount: 606,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    pricing: {
      en: 'Freemium',
      vi: 'Miễn phí cơ bản'
    },
    description: {
      en: 'Taskade is a powerful AI tool for productivity that helps you achieve more in less time.',
      vi: 'Taskade là một công cụ AI mạnh mẽ dành cho productivity giúp bạn đạt được nhiều thành tựu hơn trong thời gian ngắn hơn.'
    },
    features: {
      en: ['Advanced AI capabilities', 'User-friendly interface', 'Fast processing', 'Cloud sync'],
      vi: ['Khả năng AI tiên tiến', 'Giao diện thân thiện', 'Xử lý nhanh', 'Đồng bộ đám mây']
    },
    pros: {
      en: ['High quality output', 'Easy to use', 'Regular updates'],
      vi: ['Đầu ra chất lượng cao', 'Dễ sử dụng', 'Cập nhật thường xuyên']
    },
    cons: {
      en: ['Premium features require subscription', 'Learning curve for advanced features'],
      vi: ['Tính năng cao cấp yêu cầu trả phí', 'Cần thời gian học các tính năng nâng cao']
    },
    useCases: {
      en: [
        { title: 'Professional Use', examples: ['Enhancing daily workflows', 'Automating repetitive tasks'] },
        { title: 'Personal Projects', examples: ['Creative exploration', 'Learning new skills'] }
      ],
      vi: [
        { title: 'Sử dụng chuyên nghiệp', examples: ['Nâng cao quy trình làm việc hàng ngày', 'Tự động hóa các tác vụ lặp đi lặp lại'] },
        { title: 'Dự án cá nhân', examples: ['Khám phá sáng tạo', 'Học kỹ năng mới'] }
      ]
    },
    affiliateUrl: 'https://taskade.com',
    howToUse: {
      en: ['Sign up for an account', 'Explore the dashboard', 'Start creating with AI'],
      vi: ['Đăng ký tài khoản', 'Khám phá bảng điều khiển', 'Bắt đầu sáng tạo với AI']
    }
  },
  {
    id: 'mem',
    name: 'Mem',
    domain: 'mem.ai',
    logo: getLogo('mem.ai'),
    screenshots: ['https://picsum.photos/seed/mem1/800/450', 'https://picsum.photos/seed/mem2/800/450'],
    category: 'productivity',
    rating: 4.1,
    reviewCount: 144,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    pricing: {
      en: 'Freemium',
      vi: 'Miễn phí cơ bản'
    },
    description: {
      en: 'Mem is a powerful AI tool for productivity that helps you achieve more in less time.',
      vi: 'Mem là một công cụ AI mạnh mẽ dành cho productivity giúp bạn đạt được nhiều thành tựu hơn trong thời gian ngắn hơn.'
    },
    features: {
      en: ['Advanced AI capabilities', 'User-friendly interface', 'Fast processing', 'Cloud sync'],
      vi: ['Khả năng AI tiên tiến', 'Giao diện thân thiện', 'Xử lý nhanh', 'Đồng bộ đám mây']
    },
    pros: {
      en: ['High quality output', 'Easy to use', 'Regular updates'],
      vi: ['Đầu ra chất lượng cao', 'Dễ sử dụng', 'Cập nhật thường xuyên']
    },
    cons: {
      en: ['Premium features require subscription', 'Learning curve for advanced features'],
      vi: ['Tính năng cao cấp yêu cầu trả phí', 'Cần thời gian học các tính năng nâng cao']
    },
    useCases: {
      en: [
        { title: 'Professional Use', examples: ['Enhancing daily workflows', 'Automating repetitive tasks'] },
        { title: 'Personal Projects', examples: ['Creative exploration', 'Learning new skills'] }
      ],
      vi: [
        { title: 'Sử dụng chuyên nghiệp', examples: ['Nâng cao quy trình làm việc hàng ngày', 'Tự động hóa các tác vụ lặp đi lặp lại'] },
        { title: 'Dự án cá nhân', examples: ['Khám phá sáng tạo', 'Học kỹ năng mới'] }
      ]
    },
    affiliateUrl: 'https://mem.ai',
    howToUse: {
      en: ['Sign up for an account', 'Explore the dashboard', 'Start creating with AI'],
      vi: ['Đăng ký tài khoản', 'Khám phá bảng điều khiển', 'Bắt đầu sáng tạo với AI']
    }
  },
  {
    id: 'reflect',
    name: 'Reflect',
    domain: 'reflect.app',
    logo: getLogo('reflect.app'),
    screenshots: ['https://picsum.photos/seed/reflect1/800/450', 'https://picsum.photos/seed/reflect2/800/450'],
    category: 'productivity',
    rating: 4.2,
    reviewCount: 817,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    pricing: {
      en: 'Freemium',
      vi: 'Miễn phí cơ bản'
    },
    description: {
      en: 'Reflect is a powerful AI tool for productivity that helps you achieve more in less time.',
      vi: 'Reflect là một công cụ AI mạnh mẽ dành cho productivity giúp bạn đạt được nhiều thành tựu hơn trong thời gian ngắn hơn.'
    },
    features: {
      en: ['Advanced AI capabilities', 'User-friendly interface', 'Fast processing', 'Cloud sync'],
      vi: ['Khả năng AI tiên tiến', 'Giao diện thân thiện', 'Xử lý nhanh', 'Đồng bộ đám mây']
    },
    pros: {
      en: ['High quality output', 'Easy to use', 'Regular updates'],
      vi: ['Đầu ra chất lượng cao', 'Dễ sử dụng', 'Cập nhật thường xuyên']
    },
    cons: {
      en: ['Premium features require subscription', 'Learning curve for advanced features'],
      vi: ['Tính năng cao cấp yêu cầu trả phí', 'Cần thời gian học các tính năng nâng cao']
    },
    useCases: {
      en: [
        { title: 'Professional Use', examples: ['Enhancing daily workflows', 'Automating repetitive tasks'] },
        { title: 'Personal Projects', examples: ['Creative exploration', 'Learning new skills'] }
      ],
      vi: [
        { title: 'Sử dụng chuyên nghiệp', examples: ['Nâng cao quy trình làm việc hàng ngày', 'Tự động hóa các tác vụ lặp đi lặp lại'] },
        { title: 'Dự án cá nhân', examples: ['Khám phá sáng tạo', 'Học kỹ năng mới'] }
      ]
    },
    affiliateUrl: 'https://reflect.app',
    howToUse: {
      en: ['Sign up for an account', 'Explore the dashboard', 'Start creating with AI'],
      vi: ['Đăng ký tài khoản', 'Khám phá bảng điều khiển', 'Bắt đầu sáng tạo với AI']
    }
  },
  {
    id: 'sana',
    name: 'Sana',
    domain: 'sanalabs.com',
    logo: getLogo('sanalabs.com'),
    screenshots: ['https://picsum.photos/seed/sana1/800/450', 'https://picsum.photos/seed/sana2/800/450'],
    category: 'productivity',
    rating: 4.1,
    reviewCount: 164,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    pricing: {
      en: 'Freemium',
      vi: 'Miễn phí cơ bản'
    },
    description: {
      en: 'Sana is a powerful AI tool for productivity that helps you achieve more in less time.',
      vi: 'Sana là một công cụ AI mạnh mẽ dành cho productivity giúp bạn đạt được nhiều thành tựu hơn trong thời gian ngắn hơn.'
    },
    features: {
      en: ['Advanced AI capabilities', 'User-friendly interface', 'Fast processing', 'Cloud sync'],
      vi: ['Khả năng AI tiên tiến', 'Giao diện thân thiện', 'Xử lý nhanh', 'Đồng bộ đám mây']
    },
    pros: {
      en: ['High quality output', 'Easy to use', 'Regular updates'],
      vi: ['Đầu ra chất lượng cao', 'Dễ sử dụng', 'Cập nhật thường xuyên']
    },
    cons: {
      en: ['Premium features require subscription', 'Learning curve for advanced features'],
      vi: ['Tính năng cao cấp yêu cầu trả phí', 'Cần thời gian học các tính năng nâng cao']
    },
    useCases: {
      en: [
        { title: 'Professional Use', examples: ['Enhancing daily workflows', 'Automating repetitive tasks'] },
        { title: 'Personal Projects', examples: ['Creative exploration', 'Learning new skills'] }
      ],
      vi: [
        { title: 'Sử dụng chuyên nghiệp', examples: ['Nâng cao quy trình làm việc hàng ngày', 'Tự động hóa các tác vụ lặp đi lặp lại'] },
        { title: 'Dự án cá nhân', examples: ['Khám phá sáng tạo', 'Học kỹ năng mới'] }
      ]
    },
    affiliateUrl: 'https://sanalabs.com',
    howToUse: {
      en: ['Sign up for an account', 'Explore the dashboard', 'Start creating with AI'],
      vi: ['Đăng ký tài khoản', 'Khám phá bảng điều khiển', 'Bắt đầu sáng tạo với AI']
    }
  },
  {
    id: 'glean',
    name: 'Glean',
    domain: 'glean.com',
    logo: getLogo('glean.com'),
    screenshots: ['https://picsum.photos/seed/glean1/800/450', 'https://picsum.photos/seed/glean2/800/450'],
    category: 'productivity',
    rating: 5.0,
    reviewCount: 3060,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    pricing: {
      en: 'Freemium',
      vi: 'Miễn phí cơ bản'
    },
    description: {
      en: 'Glean is a powerful AI tool for productivity that helps you achieve more in less time.',
      vi: 'Glean là một công cụ AI mạnh mẽ dành cho productivity giúp bạn đạt được nhiều thành tựu hơn trong thời gian ngắn hơn.'
    },
    features: {
      en: ['Advanced AI capabilities', 'User-friendly interface', 'Fast processing', 'Cloud sync'],
      vi: ['Khả năng AI tiên tiến', 'Giao diện thân thiện', 'Xử lý nhanh', 'Đồng bộ đám mây']
    },
    pros: {
      en: ['High quality output', 'Easy to use', 'Regular updates'],
      vi: ['Đầu ra chất lượng cao', 'Dễ sử dụng', 'Cập nhật thường xuyên']
    },
    cons: {
      en: ['Premium features require subscription', 'Learning curve for advanced features'],
      vi: ['Tính năng cao cấp yêu cầu trả phí', 'Cần thời gian học các tính năng nâng cao']
    },
    useCases: {
      en: [
        { title: 'Professional Use', examples: ['Enhancing daily workflows', 'Automating repetitive tasks'] },
        { title: 'Personal Projects', examples: ['Creative exploration', 'Learning new skills'] }
      ],
      vi: [
        { title: 'Sử dụng chuyên nghiệp', examples: ['Nâng cao quy trình làm việc hàng ngày', 'Tự động hóa các tác vụ lặp đi lặp lại'] },
        { title: 'Dự án cá nhân', examples: ['Khám phá sáng tạo', 'Học kỹ năng mới'] }
      ]
    },
    affiliateUrl: 'https://glean.com',
    howToUse: {
      en: ['Sign up for an account', 'Explore the dashboard', 'Start creating with AI'],
      vi: ['Đăng ký tài khoản', 'Khám phá bảng điều khiển', 'Bắt đầu sáng tạo với AI']
    }
  },
  {
    id: 'dust',
    name: 'Dust',
    domain: 'dust.tt',
    logo: getLogo('dust.tt'),
    screenshots: ['https://picsum.photos/seed/dust1/800/450', 'https://picsum.photos/seed/dust2/800/450'],
    category: 'productivity',
    rating: 4.8,
    reviewCount: 1717,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    pricing: {
      en: 'Freemium',
      vi: 'Miễn phí cơ bản'
    },
    description: {
      en: 'Dust is a powerful AI tool for productivity that helps you achieve more in less time.',
      vi: 'Dust là một công cụ AI mạnh mẽ dành cho productivity giúp bạn đạt được nhiều thành tựu hơn trong thời gian ngắn hơn.'
    },
    features: {
      en: ['Advanced AI capabilities', 'User-friendly interface', 'Fast processing', 'Cloud sync'],
      vi: ['Khả năng AI tiên tiến', 'Giao diện thân thiện', 'Xử lý nhanh', 'Đồng bộ đám mây']
    },
    pros: {
      en: ['High quality output', 'Easy to use', 'Regular updates'],
      vi: ['Đầu ra chất lượng cao', 'Dễ sử dụng', 'Cập nhật thường xuyên']
    },
    cons: {
      en: ['Premium features require subscription', 'Learning curve for advanced features'],
      vi: ['Tính năng cao cấp yêu cầu trả phí', 'Cần thời gian học các tính năng nâng cao']
    },
    useCases: {
      en: [
        { title: 'Professional Use', examples: ['Enhancing daily workflows', 'Automating repetitive tasks'] },
        { title: 'Personal Projects', examples: ['Creative exploration', 'Learning new skills'] }
      ],
      vi: [
        { title: 'Sử dụng chuyên nghiệp', examples: ['Nâng cao quy trình làm việc hàng ngày', 'Tự động hóa các tác vụ lặp đi lặp lại'] },
        { title: 'Dự án cá nhân', examples: ['Khám phá sáng tạo', 'Học kỹ năng mới'] }
      ]
    },
    affiliateUrl: 'https://dust.tt',
    howToUse: {
      en: ['Sign up for an account', 'Explore the dashboard', 'Start creating with AI'],
      vi: ['Đăng ký tài khoản', 'Khám phá bảng điều khiển', 'Bắt đầu sáng tạo với AI']
    }
  },
  {
    id: 'coze',
    name: 'Coze',
    domain: 'coze.com',
    logo: getLogo('coze.com'),
    screenshots: ['https://picsum.photos/seed/coze1/800/450', 'https://picsum.photos/seed/coze2/800/450'],
    category: 'coding',
    rating: 4.4,
    reviewCount: 1725,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    pricing: {
      en: 'Freemium',
      vi: 'Miễn phí cơ bản'
    },
    description: {
      en: 'Coze is a powerful AI tool for coding that helps you achieve more in less time.',
      vi: 'Coze là một công cụ AI mạnh mẽ dành cho coding giúp bạn đạt được nhiều thành tựu hơn trong thời gian ngắn hơn.'
    },
    features: {
      en: ['Advanced AI capabilities', 'User-friendly interface', 'Fast processing', 'Cloud sync'],
      vi: ['Khả năng AI tiên tiến', 'Giao diện thân thiện', 'Xử lý nhanh', 'Đồng bộ đám mây']
    },
    pros: {
      en: ['High quality output', 'Easy to use', 'Regular updates'],
      vi: ['Đầu ra chất lượng cao', 'Dễ sử dụng', 'Cập nhật thường xuyên']
    },
    cons: {
      en: ['Premium features require subscription', 'Learning curve for advanced features'],
      vi: ['Tính năng cao cấp yêu cầu trả phí', 'Cần thời gian học các tính năng nâng cao']
    },
    useCases: {
      en: [
        { title: 'Professional Use', examples: ['Enhancing daily workflows', 'Automating repetitive tasks'] },
        { title: 'Personal Projects', examples: ['Creative exploration', 'Learning new skills'] }
      ],
      vi: [
        { title: 'Sử dụng chuyên nghiệp', examples: ['Nâng cao quy trình làm việc hàng ngày', 'Tự động hóa các tác vụ lặp đi lặp lại'] },
        { title: 'Dự án cá nhân', examples: ['Khám phá sáng tạo', 'Học kỹ năng mới'] }
      ]
    },
    affiliateUrl: 'https://coze.com',
    howToUse: {
      en: ['Sign up for an account', 'Explore the dashboard', 'Start creating with AI'],
      vi: ['Đăng ký tài khoản', 'Khám phá bảng điều khiển', 'Bắt đầu sáng tạo với AI']
    }
  },
  {
    id: 'dify',
    name: 'Dify',
    domain: 'dify.ai',
    logo: getLogo('dify.ai'),
    screenshots: ['https://picsum.photos/seed/dify1/800/450', 'https://picsum.photos/seed/dify2/800/450'],
    category: 'coding',
    rating: 4.8,
    reviewCount: 1499,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    pricing: {
      en: 'Freemium',
      vi: 'Miễn phí cơ bản'
    },
    description: {
      en: 'Dify is a powerful AI tool for coding that helps you achieve more in less time.',
      vi: 'Dify là một công cụ AI mạnh mẽ dành cho coding giúp bạn đạt được nhiều thành tựu hơn trong thời gian ngắn hơn.'
    },
    features: {
      en: ['Advanced AI capabilities', 'User-friendly interface', 'Fast processing', 'Cloud sync'],
      vi: ['Khả năng AI tiên tiến', 'Giao diện thân thiện', 'Xử lý nhanh', 'Đồng bộ đám mây']
    },
    pros: {
      en: ['High quality output', 'Easy to use', 'Regular updates'],
      vi: ['Đầu ra chất lượng cao', 'Dễ sử dụng', 'Cập nhật thường xuyên']
    },
    cons: {
      en: ['Premium features require subscription', 'Learning curve for advanced features'],
      vi: ['Tính năng cao cấp yêu cầu trả phí', 'Cần thời gian học các tính năng nâng cao']
    },
    useCases: {
      en: [
        { title: 'Professional Use', examples: ['Enhancing daily workflows', 'Automating repetitive tasks'] },
        { title: 'Personal Projects', examples: ['Creative exploration', 'Learning new skills'] }
      ],
      vi: [
        { title: 'Sử dụng chuyên nghiệp', examples: ['Nâng cao quy trình làm việc hàng ngày', 'Tự động hóa các tác vụ lặp đi lặp lại'] },
        { title: 'Dự án cá nhân', examples: ['Khám phá sáng tạo', 'Học kỹ năng mới'] }
      ]
    },
    affiliateUrl: 'https://dify.ai',
    howToUse: {
      en: ['Sign up for an account', 'Explore the dashboard', 'Start creating with AI'],
      vi: ['Đăng ký tài khoản', 'Khám phá bảng điều khiển', 'Bắt đầu sáng tạo với AI']
    }
  },
  {
    id: 'flowise',
    name: 'Flowise',
    domain: 'flowiseai.com',
    logo: getLogo('flowiseai.com'),
    screenshots: ['https://picsum.photos/seed/flowise1/800/450', 'https://picsum.photos/seed/flowise2/800/450'],
    category: 'coding',
    rating: 4.5,
    reviewCount: 363,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    pricing: {
      en: 'Freemium',
      vi: 'Miễn phí cơ bản'
    },
    description: {
      en: 'Flowise is a powerful AI tool for coding that helps you achieve more in less time.',
      vi: 'Flowise là một công cụ AI mạnh mẽ dành cho coding giúp bạn đạt được nhiều thành tựu hơn trong thời gian ngắn hơn.'
    },
    features: {
      en: ['Advanced AI capabilities', 'User-friendly interface', 'Fast processing', 'Cloud sync'],
      vi: ['Khả năng AI tiên tiến', 'Giao diện thân thiện', 'Xử lý nhanh', 'Đồng bộ đám mây']
    },
    pros: {
      en: ['High quality output', 'Easy to use', 'Regular updates'],
      vi: ['Đầu ra chất lượng cao', 'Dễ sử dụng', 'Cập nhật thường xuyên']
    },
    cons: {
      en: ['Premium features require subscription', 'Learning curve for advanced features'],
      vi: ['Tính năng cao cấp yêu cầu trả phí', 'Cần thời gian học các tính năng nâng cao']
    },
    useCases: {
      en: [
        { title: 'Professional Use', examples: ['Enhancing daily workflows', 'Automating repetitive tasks'] },
        { title: 'Personal Projects', examples: ['Creative exploration', 'Learning new skills'] }
      ],
      vi: [
        { title: 'Sử dụng chuyên nghiệp', examples: ['Nâng cao quy trình làm việc hàng ngày', 'Tự động hóa các tác vụ lặp đi lặp lại'] },
        { title: 'Dự án cá nhân', examples: ['Khám phá sáng tạo', 'Học kỹ năng mới'] }
      ]
    },
    affiliateUrl: 'https://flowiseai.com',
    howToUse: {
      en: ['Sign up for an account', 'Explore the dashboard', 'Start creating with AI'],
      vi: ['Đăng ký tài khoản', 'Khám phá bảng điều khiển', 'Bắt đầu sáng tạo với AI']
    }
  },
  {
    id: 'langflow',
    name: 'Langflow',
    domain: 'langflow.org',
    logo: getLogo('langflow.org'),
    screenshots: ['https://picsum.photos/seed/langflow1/800/450', 'https://picsum.photos/seed/langflow2/800/450'],
    category: 'coding',
    rating: 4.9,
    reviewCount: 4668,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    pricing: {
      en: 'Freemium',
      vi: 'Miễn phí cơ bản'
    },
    description: {
      en: 'Langflow is a powerful AI tool for coding that helps you achieve more in less time.',
      vi: 'Langflow là một công cụ AI mạnh mẽ dành cho coding giúp bạn đạt được nhiều thành tựu hơn trong thời gian ngắn hơn.'
    },
    features: {
      en: ['Advanced AI capabilities', 'User-friendly interface', 'Fast processing', 'Cloud sync'],
      vi: ['Khả năng AI tiên tiến', 'Giao diện thân thiện', 'Xử lý nhanh', 'Đồng bộ đám mây']
    },
    pros: {
      en: ['High quality output', 'Easy to use', 'Regular updates'],
      vi: ['Đầu ra chất lượng cao', 'Dễ sử dụng', 'Cập nhật thường xuyên']
    },
    cons: {
      en: ['Premium features require subscription', 'Learning curve for advanced features'],
      vi: ['Tính năng cao cấp yêu cầu trả phí', 'Cần thời gian học các tính năng nâng cao']
    },
    useCases: {
      en: [
        { title: 'Professional Use', examples: ['Enhancing daily workflows', 'Automating repetitive tasks'] },
        { title: 'Personal Projects', examples: ['Creative exploration', 'Learning new skills'] }
      ],
      vi: [
        { title: 'Sử dụng chuyên nghiệp', examples: ['Nâng cao quy trình làm việc hàng ngày', 'Tự động hóa các tác vụ lặp đi lặp lại'] },
        { title: 'Dự án cá nhân', examples: ['Khám phá sáng tạo', 'Học kỹ năng mới'] }
      ]
    },
    affiliateUrl: 'https://langflow.org',
    howToUse: {
      en: ['Sign up for an account', 'Explore the dashboard', 'Start creating with AI'],
      vi: ['Đăng ký tài khoản', 'Khám phá bảng điều khiển', 'Bắt đầu sáng tạo với AI']
    }
  },
  {
    id: 'voice-ai',
    name: 'Voice.ai',
    domain: 'voice.ai',
    logo: getLogo('voice.ai'),
    screenshots: ['https://picsum.photos/seed/voice-ai1/800/450', 'https://picsum.photos/seed/voice-ai2/800/450'],
    category: 'audio',
    rating: 4.2,
    reviewCount: 1365,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    pricing: {
      en: 'Freemium',
      vi: 'Miễn phí cơ bản'
    },
    description: {
      en: 'Voice.ai is a powerful AI tool for audio that helps you achieve more in less time.',
      vi: 'Voice.ai là một công cụ AI mạnh mẽ dành cho audio giúp bạn đạt được nhiều thành tựu hơn trong thời gian ngắn hơn.'
    },
    features: {
      en: ['Advanced AI capabilities', 'User-friendly interface', 'Fast processing', 'Cloud sync'],
      vi: ['Khả năng AI tiên tiến', 'Giao diện thân thiện', 'Xử lý nhanh', 'Đồng bộ đám mây']
    },
    pros: {
      en: ['High quality output', 'Easy to use', 'Regular updates'],
      vi: ['Đầu ra chất lượng cao', 'Dễ sử dụng', 'Cập nhật thường xuyên']
    },
    cons: {
      en: ['Premium features require subscription', 'Learning curve for advanced features'],
      vi: ['Tính năng cao cấp yêu cầu trả phí', 'Cần thời gian học các tính năng nâng cao']
    },
    useCases: {
      en: [
        { title: 'Professional Use', examples: ['Enhancing daily workflows', 'Automating repetitive tasks'] },
        { title: 'Personal Projects', examples: ['Creative exploration', 'Learning new skills'] }
      ],
      vi: [
        { title: 'Sử dụng chuyên nghiệp', examples: ['Nâng cao quy trình làm việc hàng ngày', 'Tự động hóa các tác vụ lặp đi lặp lại'] },
        { title: 'Dự án cá nhân', examples: ['Khám phá sáng tạo', 'Học kỹ năng mới'] }
      ]
    },
    affiliateUrl: 'https://voice.ai',
    howToUse: {
      en: ['Sign up for an account', 'Explore the dashboard', 'Start creating with AI'],
      vi: ['Đăng ký tài khoản', 'Khám phá bảng điều khiển', 'Bắt đầu sáng tạo với AI']
    }
  },
  {
    id: 'kits',
    name: 'Kits AI',
    domain: 'kits.ai',
    logo: getLogo('kits.ai'),
    screenshots: ['https://picsum.photos/seed/kits1/800/450', 'https://picsum.photos/seed/kits2/800/450'],
    category: 'audio',
    rating: 4.2,
    reviewCount: 3863,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    pricing: {
      en: 'Freemium',
      vi: 'Miễn phí cơ bản'
    },
    description: {
      en: 'Kits AI is a powerful AI tool for audio that helps you achieve more in less time.',
      vi: 'Kits AI là một công cụ AI mạnh mẽ dành cho audio giúp bạn đạt được nhiều thành tựu hơn trong thời gian ngắn hơn.'
    },
    features: {
      en: ['Advanced AI capabilities', 'User-friendly interface', 'Fast processing', 'Cloud sync'],
      vi: ['Khả năng AI tiên tiến', 'Giao diện thân thiện', 'Xử lý nhanh', 'Đồng bộ đám mây']
    },
    pros: {
      en: ['High quality output', 'Easy to use', 'Regular updates'],
      vi: ['Đầu ra chất lượng cao', 'Dễ sử dụng', 'Cập nhật thường xuyên']
    },
    cons: {
      en: ['Premium features require subscription', 'Learning curve for advanced features'],
      vi: ['Tính năng cao cấp yêu cầu trả phí', 'Cần thời gian học các tính năng nâng cao']
    },
    useCases: {
      en: [
        { title: 'Professional Use', examples: ['Enhancing daily workflows', 'Automating repetitive tasks'] },
        { title: 'Personal Projects', examples: ['Creative exploration', 'Learning new skills'] }
      ],
      vi: [
        { title: 'Sử dụng chuyên nghiệp', examples: ['Nâng cao quy trình làm việc hàng ngày', 'Tự động hóa các tác vụ lặp đi lặp lại'] },
        { title: 'Dự án cá nhân', examples: ['Khám phá sáng tạo', 'Học kỹ năng mới'] }
      ]
    },
    affiliateUrl: 'https://kits.ai',
    howToUse: {
      en: ['Sign up for an account', 'Explore the dashboard', 'Start creating with AI'],
      vi: ['Đăng ký tài khoản', 'Khám phá bảng điều khiển', 'Bắt đầu sáng tạo với AI']
    }
  },
  {
    id: 'lalal',
    name: 'LALAL.AI',
    domain: 'lalal.ai',
    logo: getLogo('lalal.ai'),
    screenshots: ['https://picsum.photos/seed/lalal1/800/450', 'https://picsum.photos/seed/lalal2/800/450'],
    category: 'audio',
    rating: 4.6,
    reviewCount: 1536,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    pricing: {
      en: 'Freemium',
      vi: 'Miễn phí cơ bản'
    },
    description: {
      en: 'LALAL.AI is a powerful AI tool for audio that helps you achieve more in less time.',
      vi: 'LALAL.AI là một công cụ AI mạnh mẽ dành cho audio giúp bạn đạt được nhiều thành tựu hơn trong thời gian ngắn hơn.'
    },
    features: {
      en: ['Advanced AI capabilities', 'User-friendly interface', 'Fast processing', 'Cloud sync'],
      vi: ['Khả năng AI tiên tiến', 'Giao diện thân thiện', 'Xử lý nhanh', 'Đồng bộ đám mây']
    },
    pros: {
      en: ['High quality output', 'Easy to use', 'Regular updates'],
      vi: ['Đầu ra chất lượng cao', 'Dễ sử dụng', 'Cập nhật thường xuyên']
    },
    cons: {
      en: ['Premium features require subscription', 'Learning curve for advanced features'],
      vi: ['Tính năng cao cấp yêu cầu trả phí', 'Cần thời gian học các tính năng nâng cao']
    },
    useCases: {
      en: [
        { title: 'Professional Use', examples: ['Enhancing daily workflows', 'Automating repetitive tasks'] },
        { title: 'Personal Projects', examples: ['Creative exploration', 'Learning new skills'] }
      ],
      vi: [
        { title: 'Sử dụng chuyên nghiệp', examples: ['Nâng cao quy trình làm việc hàng ngày', 'Tự động hóa các tác vụ lặp đi lặp lại'] },
        { title: 'Dự án cá nhân', examples: ['Khám phá sáng tạo', 'Học kỹ năng mới'] }
      ]
    },
    affiliateUrl: 'https://lalal.ai',
    howToUse: {
      en: ['Sign up for an account', 'Explore the dashboard', 'Start creating with AI'],
      vi: ['Đăng ký tài khoản', 'Khám phá bảng điều khiển', 'Bắt đầu sáng tạo với AI']
    }
  },
  {
    id: 'moises',
    name: 'Moises',
    domain: 'moises.ai',
    logo: getLogo('moises.ai'),
    screenshots: ['https://picsum.photos/seed/moises1/800/450', 'https://picsum.photos/seed/moises2/800/450'],
    category: 'audio',
    rating: 4.1,
    reviewCount: 910,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    pricing: {
      en: 'Freemium',
      vi: 'Miễn phí cơ bản'
    },
    description: {
      en: 'Moises is a powerful AI tool for audio that helps you achieve more in less time.',
      vi: 'Moises là một công cụ AI mạnh mẽ dành cho audio giúp bạn đạt được nhiều thành tựu hơn trong thời gian ngắn hơn.'
    },
    features: {
      en: ['Advanced AI capabilities', 'User-friendly interface', 'Fast processing', 'Cloud sync'],
      vi: ['Khả năng AI tiên tiến', 'Giao diện thân thiện', 'Xử lý nhanh', 'Đồng bộ đám mây']
    },
    pros: {
      en: ['High quality output', 'Easy to use', 'Regular updates'],
      vi: ['Đầu ra chất lượng cao', 'Dễ sử dụng', 'Cập nhật thường xuyên']
    },
    cons: {
      en: ['Premium features require subscription', 'Learning curve for advanced features'],
      vi: ['Tính năng cao cấp yêu cầu trả phí', 'Cần thời gian học các tính năng nâng cao']
    },
    useCases: {
      en: [
        { title: 'Professional Use', examples: ['Enhancing daily workflows', 'Automating repetitive tasks'] },
        { title: 'Personal Projects', examples: ['Creative exploration', 'Learning new skills'] }
      ],
      vi: [
        { title: 'Sử dụng chuyên nghiệp', examples: ['Nâng cao quy trình làm việc hàng ngày', 'Tự động hóa các tác vụ lặp đi lặp lại'] },
        { title: 'Dự án cá nhân', examples: ['Khám phá sáng tạo', 'Học kỹ năng mới'] }
      ]
    },
    affiliateUrl: 'https://moises.ai',
    howToUse: {
      en: ['Sign up for an account', 'Explore the dashboard', 'Start creating with AI'],
      vi: ['Đăng ký tài khoản', 'Khám phá bảng điều khiển', 'Bắt đầu sáng tạo với AI']
    }
  },
  {
    id: 'soundraw',
    name: 'Soundraw',
    domain: 'soundraw.io',
    logo: getLogo('soundraw.io'),
    screenshots: ['https://picsum.photos/seed/soundraw1/800/450', 'https://picsum.photos/seed/soundraw2/800/450'],
    category: 'audio',
    rating: 4.3,
    reviewCount: 4587,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    pricing: {
      en: 'Freemium',
      vi: 'Miễn phí cơ bản'
    },
    description: {
      en: 'Soundraw is a powerful AI tool for audio that helps you achieve more in less time.',
      vi: 'Soundraw là một công cụ AI mạnh mẽ dành cho audio giúp bạn đạt được nhiều thành tựu hơn trong thời gian ngắn hơn.'
    },
    features: {
      en: ['Advanced AI capabilities', 'User-friendly interface', 'Fast processing', 'Cloud sync'],
      vi: ['Khả năng AI tiên tiến', 'Giao diện thân thiện', 'Xử lý nhanh', 'Đồng bộ đám mây']
    },
    pros: {
      en: ['High quality output', 'Easy to use', 'Regular updates'],
      vi: ['Đầu ra chất lượng cao', 'Dễ sử dụng', 'Cập nhật thường xuyên']
    },
    cons: {
      en: ['Premium features require subscription', 'Learning curve for advanced features'],
      vi: ['Tính năng cao cấp yêu cầu trả phí', 'Cần thời gian học các tính năng nâng cao']
    },
    useCases: {
      en: [
        { title: 'Professional Use', examples: ['Enhancing daily workflows', 'Automating repetitive tasks'] },
        { title: 'Personal Projects', examples: ['Creative exploration', 'Learning new skills'] }
      ],
      vi: [
        { title: 'Sử dụng chuyên nghiệp', examples: ['Nâng cao quy trình làm việc hàng ngày', 'Tự động hóa các tác vụ lặp đi lặp lại'] },
        { title: 'Dự án cá nhân', examples: ['Khám phá sáng tạo', 'Học kỹ năng mới'] }
      ]
    },
    affiliateUrl: 'https://soundraw.io',
    howToUse: {
      en: ['Sign up for an account', 'Explore the dashboard', 'Start creating with AI'],
      vi: ['Đăng ký tài khoản', 'Khám phá bảng điều khiển', 'Bắt đầu sáng tạo với AI']
    }
  },
  {
    id: 'aiva',
    name: 'AIVA',
    domain: 'aiva.ai',
    logo: getLogo('aiva.ai'),
    screenshots: ['https://picsum.photos/seed/aiva1/800/450', 'https://picsum.photos/seed/aiva2/800/450'],
    category: 'audio',
    rating: 4.2,
    reviewCount: 4048,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    pricing: {
      en: 'Freemium',
      vi: 'Miễn phí cơ bản'
    },
    description: {
      en: 'AIVA is a powerful AI tool for audio that helps you achieve more in less time.',
      vi: 'AIVA là một công cụ AI mạnh mẽ dành cho audio giúp bạn đạt được nhiều thành tựu hơn trong thời gian ngắn hơn.'
    },
    features: {
      en: ['Advanced AI capabilities', 'User-friendly interface', 'Fast processing', 'Cloud sync'],
      vi: ['Khả năng AI tiên tiến', 'Giao diện thân thiện', 'Xử lý nhanh', 'Đồng bộ đám mây']
    },
    pros: {
      en: ['High quality output', 'Easy to use', 'Regular updates'],
      vi: ['Đầu ra chất lượng cao', 'Dễ sử dụng', 'Cập nhật thường xuyên']
    },
    cons: {
      en: ['Premium features require subscription', 'Learning curve for advanced features'],
      vi: ['Tính năng cao cấp yêu cầu trả phí', 'Cần thời gian học các tính năng nâng cao']
    },
    useCases: {
      en: [
        { title: 'Professional Use', examples: ['Enhancing daily workflows', 'Automating repetitive tasks'] },
        { title: 'Personal Projects', examples: ['Creative exploration', 'Learning new skills'] }
      ],
      vi: [
        { title: 'Sử dụng chuyên nghiệp', examples: ['Nâng cao quy trình làm việc hàng ngày', 'Tự động hóa các tác vụ lặp đi lặp lại'] },
        { title: 'Dự án cá nhân', examples: ['Khám phá sáng tạo', 'Học kỹ năng mới'] }
      ]
    },
    affiliateUrl: 'https://aiva.ai',
    howToUse: {
      en: ['Sign up for an account', 'Explore the dashboard', 'Start creating with AI'],
      vi: ['Đăng ký tài khoản', 'Khám phá bảng điều khiển', 'Bắt đầu sáng tạo với AI']
    }
  },
  {
    id: 'boomy',
    name: 'Boomy',
    domain: 'boomy.com',
    logo: getLogo('boomy.com'),
    screenshots: ['https://picsum.photos/seed/boomy1/800/450', 'https://picsum.photos/seed/boomy2/800/450'],
    category: 'audio',
    rating: 4.1,
    reviewCount: 2722,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    pricing: {
      en: 'Freemium',
      vi: 'Miễn phí cơ bản'
    },
    description: {
      en: 'Boomy is a powerful AI tool for audio that helps you achieve more in less time.',
      vi: 'Boomy là một công cụ AI mạnh mẽ dành cho audio giúp bạn đạt được nhiều thành tựu hơn trong thời gian ngắn hơn.'
    },
    features: {
      en: ['Advanced AI capabilities', 'User-friendly interface', 'Fast processing', 'Cloud sync'],
      vi: ['Khả năng AI tiên tiến', 'Giao diện thân thiện', 'Xử lý nhanh', 'Đồng bộ đám mây']
    },
    pros: {
      en: ['High quality output', 'Easy to use', 'Regular updates'],
      vi: ['Đầu ra chất lượng cao', 'Dễ sử dụng', 'Cập nhật thường xuyên']
    },
    cons: {
      en: ['Premium features require subscription', 'Learning curve for advanced features'],
      vi: ['Tính năng cao cấp yêu cầu trả phí', 'Cần thời gian học các tính năng nâng cao']
    },
    useCases: {
      en: [
        { title: 'Professional Use', examples: ['Enhancing daily workflows', 'Automating repetitive tasks'] },
        { title: 'Personal Projects', examples: ['Creative exploration', 'Learning new skills'] }
      ],
      vi: [
        { title: 'Sử dụng chuyên nghiệp', examples: ['Nâng cao quy trình làm việc hàng ngày', 'Tự động hóa các tác vụ lặp đi lặp lại'] },
        { title: 'Dự án cá nhân', examples: ['Khám phá sáng tạo', 'Học kỹ năng mới'] }
      ]
    },
    affiliateUrl: 'https://boomy.com',
    howToUse: {
      en: ['Sign up for an account', 'Explore the dashboard', 'Start creating with AI'],
      vi: ['Đăng ký tài khoản', 'Khám phá bảng điều khiển', 'Bắt đầu sáng tạo với AI']
    }
  },
  {
    id: 'beatoven',
    name: 'Beatoven',
    domain: 'beatoven.ai',
    logo: getLogo('beatoven.ai'),
    screenshots: ['https://picsum.photos/seed/beatoven1/800/450', 'https://picsum.photos/seed/beatoven2/800/450'],
    category: 'audio',
    rating: 4.4,
    reviewCount: 4240,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    pricing: {
      en: 'Freemium',
      vi: 'Miễn phí cơ bản'
    },
    description: {
      en: 'Beatoven is a powerful AI tool for audio that helps you achieve more in less time.',
      vi: 'Beatoven là một công cụ AI mạnh mẽ dành cho audio giúp bạn đạt được nhiều thành tựu hơn trong thời gian ngắn hơn.'
    },
    features: {
      en: ['Advanced AI capabilities', 'User-friendly interface', 'Fast processing', 'Cloud sync'],
      vi: ['Khả năng AI tiên tiến', 'Giao diện thân thiện', 'Xử lý nhanh', 'Đồng bộ đám mây']
    },
    pros: {
      en: ['High quality output', 'Easy to use', 'Regular updates'],
      vi: ['Đầu ra chất lượng cao', 'Dễ sử dụng', 'Cập nhật thường xuyên']
    },
    cons: {
      en: ['Premium features require subscription', 'Learning curve for advanced features'],
      vi: ['Tính năng cao cấp yêu cầu trả phí', 'Cần thời gian học các tính năng nâng cao']
    },
    useCases: {
      en: [
        { title: 'Professional Use', examples: ['Enhancing daily workflows', 'Automating repetitive tasks'] },
        { title: 'Personal Projects', examples: ['Creative exploration', 'Learning new skills'] }
      ],
      vi: [
        { title: 'Sử dụng chuyên nghiệp', examples: ['Nâng cao quy trình làm việc hàng ngày', 'Tự động hóa các tác vụ lặp đi lặp lại'] },
        { title: 'Dự án cá nhân', examples: ['Khám phá sáng tạo', 'Học kỹ năng mới'] }
      ]
    },
    affiliateUrl: 'https://beatoven.ai',
    howToUse: {
      en: ['Sign up for an account', 'Explore the dashboard', 'Start creating with AI'],
      vi: ['Đăng ký tài khoản', 'Khám phá bảng điều khiển', 'Bắt đầu sáng tạo với AI']
    }
  },
  {
    id: 'mubert',
    name: 'Mubert',
    domain: 'mubert.com',
    logo: getLogo('mubert.com'),
    screenshots: ['https://picsum.photos/seed/mubert1/800/450', 'https://picsum.photos/seed/mubert2/800/450'],
    category: 'audio',
    rating: 4.7,
    reviewCount: 2029,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    pricing: {
      en: 'Freemium',
      vi: 'Miễn phí cơ bản'
    },
    description: {
      en: 'Mubert is a powerful AI tool for audio that helps you achieve more in less time.',
      vi: 'Mubert là một công cụ AI mạnh mẽ dành cho audio giúp bạn đạt được nhiều thành tựu hơn trong thời gian ngắn hơn.'
    },
    features: {
      en: ['Advanced AI capabilities', 'User-friendly interface', 'Fast processing', 'Cloud sync'],
      vi: ['Khả năng AI tiên tiến', 'Giao diện thân thiện', 'Xử lý nhanh', 'Đồng bộ đám mây']
    },
    pros: {
      en: ['High quality output', 'Easy to use', 'Regular updates'],
      vi: ['Đầu ra chất lượng cao', 'Dễ sử dụng', 'Cập nhật thường xuyên']
    },
    cons: {
      en: ['Premium features require subscription', 'Learning curve for advanced features'],
      vi: ['Tính năng cao cấp yêu cầu trả phí', 'Cần thời gian học các tính năng nâng cao']
    },
    useCases: {
      en: [
        { title: 'Professional Use', examples: ['Enhancing daily workflows', 'Automating repetitive tasks'] },
        { title: 'Personal Projects', examples: ['Creative exploration', 'Learning new skills'] }
      ],
      vi: [
        { title: 'Sử dụng chuyên nghiệp', examples: ['Nâng cao quy trình làm việc hàng ngày', 'Tự động hóa các tác vụ lặp đi lặp lại'] },
        { title: 'Dự án cá nhân', examples: ['Khám phá sáng tạo', 'Học kỹ năng mới'] }
      ]
    },
    affiliateUrl: 'https://mubert.com',
    howToUse: {
      en: ['Sign up for an account', 'Explore the dashboard', 'Start creating with AI'],
      vi: ['Đăng ký tài khoản', 'Khám phá bảng điều khiển', 'Bắt đầu sáng tạo với AI']
    }
  },
  {
    id: 'audiocraft',
    name: 'AudioCraft',
    domain: 'audiocraft.metademolab.com',
    logo: getLogo('audiocraft.metademolab.com'),
    screenshots: ['https://picsum.photos/seed/audiocraft1/800/450', 'https://picsum.photos/seed/audiocraft2/800/450'],
    category: 'audio',
    rating: 4.2,
    reviewCount: 808,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    pricing: {
      en: 'Freemium',
      vi: 'Miễn phí cơ bản'
    },
    description: {
      en: 'AudioCraft is a powerful AI tool for audio that helps you achieve more in less time.',
      vi: 'AudioCraft là một công cụ AI mạnh mẽ dành cho audio giúp bạn đạt được nhiều thành tựu hơn trong thời gian ngắn hơn.'
    },
    features: {
      en: ['Advanced AI capabilities', 'User-friendly interface', 'Fast processing', 'Cloud sync'],
      vi: ['Khả năng AI tiên tiến', 'Giao diện thân thiện', 'Xử lý nhanh', 'Đồng bộ đám mây']
    },
    pros: {
      en: ['High quality output', 'Easy to use', 'Regular updates'],
      vi: ['Đầu ra chất lượng cao', 'Dễ sử dụng', 'Cập nhật thường xuyên']
    },
    cons: {
      en: ['Premium features require subscription', 'Learning curve for advanced features'],
      vi: ['Tính năng cao cấp yêu cầu trả phí', 'Cần thời gian học các tính năng nâng cao']
    },
    useCases: {
      en: [
        { title: 'Professional Use', examples: ['Enhancing daily workflows', 'Automating repetitive tasks'] },
        { title: 'Personal Projects', examples: ['Creative exploration', 'Learning new skills'] }
      ],
      vi: [
        { title: 'Sử dụng chuyên nghiệp', examples: ['Nâng cao quy trình làm việc hàng ngày', 'Tự động hóa các tác vụ lặp đi lặp lại'] },
        { title: 'Dự án cá nhân', examples: ['Khám phá sáng tạo', 'Học kỹ năng mới'] }
      ]
    },
    affiliateUrl: 'https://audiocraft.metademolab.com',
    howToUse: {
      en: ['Sign up for an account', 'Explore the dashboard', 'Start creating with AI'],
      vi: ['Đăng ký tài khoản', 'Khám phá bảng điều khiển', 'Bắt đầu sáng tạo với AI']
    }
  },
  {
    id: 'stable-audio',
    name: 'Stable Audio',
    domain: 'stableaudio.com',
    logo: getLogo('stableaudio.com'),
    screenshots: ['https://picsum.photos/seed/stable-audio1/800/450', 'https://picsum.photos/seed/stable-audio2/800/450'],
    category: 'audio',
    rating: 4.9,
    reviewCount: 3033,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    pricing: {
      en: 'Freemium',
      vi: 'Miễn phí cơ bản'
    },
    description: {
      en: 'Stable Audio is a powerful AI tool for audio that helps you achieve more in less time.',
      vi: 'Stable Audio là một công cụ AI mạnh mẽ dành cho audio giúp bạn đạt được nhiều thành tựu hơn trong thời gian ngắn hơn.'
    },
    features: {
      en: ['Advanced AI capabilities', 'User-friendly interface', 'Fast processing', 'Cloud sync'],
      vi: ['Khả năng AI tiên tiến', 'Giao diện thân thiện', 'Xử lý nhanh', 'Đồng bộ đám mây']
    },
    pros: {
      en: ['High quality output', 'Easy to use', 'Regular updates'],
      vi: ['Đầu ra chất lượng cao', 'Dễ sử dụng', 'Cập nhật thường xuyên']
    },
    cons: {
      en: ['Premium features require subscription', 'Learning curve for advanced features'],
      vi: ['Tính năng cao cấp yêu cầu trả phí', 'Cần thời gian học các tính năng nâng cao']
    },
    useCases: {
      en: [
        { title: 'Professional Use', examples: ['Enhancing daily workflows', 'Automating repetitive tasks'] },
        { title: 'Personal Projects', examples: ['Creative exploration', 'Learning new skills'] }
      ],
      vi: [
        { title: 'Sử dụng chuyên nghiệp', examples: ['Nâng cao quy trình làm việc hàng ngày', 'Tự động hóa các tác vụ lặp đi lặp lại'] },
        { title: 'Dự án cá nhân', examples: ['Khám phá sáng tạo', 'Học kỹ năng mới'] }
      ]
    },
    affiliateUrl: 'https://stableaudio.com',
    howToUse: {
      en: ['Sign up for an account', 'Explore the dashboard', 'Start creating with AI'],
      vi: ['Đăng ký tài khoản', 'Khám phá bảng điều khiển', 'Bắt đầu sáng tạo với AI']
    }
  },
  {
    id: 'musicgen',
    name: 'MusicGen',
    domain: 'huggingface.co',
    logo: getLogo('huggingface.co'),
    screenshots: ['https://picsum.photos/seed/musicgen1/800/450', 'https://picsum.photos/seed/musicgen2/800/450'],
    category: 'audio',
    rating: 4.6,
    reviewCount: 3038,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    pricing: {
      en: 'Freemium',
      vi: 'Miễn phí cơ bản'
    },
    description: {
      en: 'MusicGen is a powerful AI tool for audio that helps you achieve more in less time.',
      vi: 'MusicGen là một công cụ AI mạnh mẽ dành cho audio giúp bạn đạt được nhiều thành tựu hơn trong thời gian ngắn hơn.'
    },
    features: {
      en: ['Advanced AI capabilities', 'User-friendly interface', 'Fast processing', 'Cloud sync'],
      vi: ['Khả năng AI tiên tiến', 'Giao diện thân thiện', 'Xử lý nhanh', 'Đồng bộ đám mây']
    },
    pros: {
      en: ['High quality output', 'Easy to use', 'Regular updates'],
      vi: ['Đầu ra chất lượng cao', 'Dễ sử dụng', 'Cập nhật thường xuyên']
    },
    cons: {
      en: ['Premium features require subscription', 'Learning curve for advanced features'],
      vi: ['Tính năng cao cấp yêu cầu trả phí', 'Cần thời gian học các tính năng nâng cao']
    },
    useCases: {
      en: [
        { title: 'Professional Use', examples: ['Enhancing daily workflows', 'Automating repetitive tasks'] },
        { title: 'Personal Projects', examples: ['Creative exploration', 'Learning new skills'] }
      ],
      vi: [
        { title: 'Sử dụng chuyên nghiệp', examples: ['Nâng cao quy trình làm việc hàng ngày', 'Tự động hóa các tác vụ lặp đi lặp lại'] },
        { title: 'Dự án cá nhân', examples: ['Khám phá sáng tạo', 'Học kỹ năng mới'] }
      ]
    },
    affiliateUrl: 'https://huggingface.co',
    howToUse: {
      en: ['Sign up for an account', 'Explore the dashboard', 'Start creating with AI'],
      vi: ['Đăng ký tài khoản', 'Khám phá bảng điều khiển', 'Bắt đầu sáng tạo với AI']
    }
  },
  {
    id: 'bark',
    name: 'Bark',
    domain: 'suno.com',
    logo: getLogo('suno.com'),
    screenshots: ['https://picsum.photos/seed/bark1/800/450', 'https://picsum.photos/seed/bark2/800/450'],
    category: 'audio',
    rating: 4.6,
    reviewCount: 4426,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    pricing: {
      en: 'Freemium',
      vi: 'Miễn phí cơ bản'
    },
    description: {
      en: 'Bark is a powerful AI tool for audio that helps you achieve more in less time.',
      vi: 'Bark là một công cụ AI mạnh mẽ dành cho audio giúp bạn đạt được nhiều thành tựu hơn trong thời gian ngắn hơn.'
    },
    features: {
      en: ['Advanced AI capabilities', 'User-friendly interface', 'Fast processing', 'Cloud sync'],
      vi: ['Khả năng AI tiên tiến', 'Giao diện thân thiện', 'Xử lý nhanh', 'Đồng bộ đám mây']
    },
    pros: {
      en: ['High quality output', 'Easy to use', 'Regular updates'],
      vi: ['Đầu ra chất lượng cao', 'Dễ sử dụng', 'Cập nhật thường xuyên']
    },
    cons: {
      en: ['Premium features require subscription', 'Learning curve for advanced features'],
      vi: ['Tính năng cao cấp yêu cầu trả phí', 'Cần thời gian học các tính năng nâng cao']
    },
    useCases: {
      en: [
        { title: 'Professional Use', examples: ['Enhancing daily workflows', 'Automating repetitive tasks'] },
        { title: 'Personal Projects', examples: ['Creative exploration', 'Learning new skills'] }
      ],
      vi: [
        { title: 'Sử dụng chuyên nghiệp', examples: ['Nâng cao quy trình làm việc hàng ngày', 'Tự động hóa các tác vụ lặp đi lặp lại'] },
        { title: 'Dự án cá nhân', examples: ['Khám phá sáng tạo', 'Học kỹ năng mới'] }
      ]
    },
    affiliateUrl: 'https://suno.com',
    howToUse: {
      en: ['Sign up for an account', 'Explore the dashboard', 'Start creating with AI'],
      vi: ['Đăng ký tài khoản', 'Khám phá bảng điều khiển', 'Bắt đầu sáng tạo với AI']
    }
  },
  {
    id: 'tortoise',
    name: 'Tortoise TTS',
    domain: 'github.com',
    logo: getLogo('github.com'),
    screenshots: ['https://picsum.photos/seed/tortoise1/800/450', 'https://picsum.photos/seed/tortoise2/800/450'],
    category: 'audio',
    rating: 4.5,
    reviewCount: 2608,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    pricing: {
      en: 'Freemium',
      vi: 'Miễn phí cơ bản'
    },
    description: {
      en: 'Tortoise TTS is a powerful AI tool for audio that helps you achieve more in less time.',
      vi: 'Tortoise TTS là một công cụ AI mạnh mẽ dành cho audio giúp bạn đạt được nhiều thành tựu hơn trong thời gian ngắn hơn.'
    },
    features: {
      en: ['Advanced AI capabilities', 'User-friendly interface', 'Fast processing', 'Cloud sync'],
      vi: ['Khả năng AI tiên tiến', 'Giao diện thân thiện', 'Xử lý nhanh', 'Đồng bộ đám mây']
    },
    pros: {
      en: ['High quality output', 'Easy to use', 'Regular updates'],
      vi: ['Đầu ra chất lượng cao', 'Dễ sử dụng', 'Cập nhật thường xuyên']
    },
    cons: {
      en: ['Premium features require subscription', 'Learning curve for advanced features'],
      vi: ['Tính năng cao cấp yêu cầu trả phí', 'Cần thời gian học các tính năng nâng cao']
    },
    useCases: {
      en: [
        { title: 'Professional Use', examples: ['Enhancing daily workflows', 'Automating repetitive tasks'] },
        { title: 'Personal Projects', examples: ['Creative exploration', 'Learning new skills'] }
      ],
      vi: [
        { title: 'Sử dụng chuyên nghiệp', examples: ['Nâng cao quy trình làm việc hàng ngày', 'Tự động hóa các tác vụ lặp đi lặp lại'] },
        { title: 'Dự án cá nhân', examples: ['Khám phá sáng tạo', 'Học kỹ năng mới'] }
      ]
    },
    affiliateUrl: 'https://github.com',
    howToUse: {
      en: ['Sign up for an account', 'Explore the dashboard', 'Start creating with AI'],
      vi: ['Đăng ký tài khoản', 'Khám phá bảng điều khiển', 'Bắt đầu sáng tạo với AI']
    }
  },
  {
    id: 'coqui',
    name: 'Coqui',
    domain: 'coqui.ai',
    logo: getLogo('coqui.ai'),
    screenshots: ['https://picsum.photos/seed/coqui1/800/450', 'https://picsum.photos/seed/coqui2/800/450'],
    category: 'audio',
    rating: 4.6,
    reviewCount: 2181,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    pricing: {
      en: 'Freemium',
      vi: 'Miễn phí cơ bản'
    },
    description: {
      en: 'Coqui is a powerful AI tool for audio that helps you achieve more in less time.',
      vi: 'Coqui là một công cụ AI mạnh mẽ dành cho audio giúp bạn đạt được nhiều thành tựu hơn trong thời gian ngắn hơn.'
    },
    features: {
      en: ['Advanced AI capabilities', 'User-friendly interface', 'Fast processing', 'Cloud sync'],
      vi: ['Khả năng AI tiên tiến', 'Giao diện thân thiện', 'Xử lý nhanh', 'Đồng bộ đám mây']
    },
    pros: {
      en: ['High quality output', 'Easy to use', 'Regular updates'],
      vi: ['Đầu ra chất lượng cao', 'Dễ sử dụng', 'Cập nhật thường xuyên']
    },
    cons: {
      en: ['Premium features require subscription', 'Learning curve for advanced features'],
      vi: ['Tính năng cao cấp yêu cầu trả phí', 'Cần thời gian học các tính năng nâng cao']
    },
    useCases: {
      en: [
        { title: 'Professional Use', examples: ['Enhancing daily workflows', 'Automating repetitive tasks'] },
        { title: 'Personal Projects', examples: ['Creative exploration', 'Learning new skills'] }
      ],
      vi: [
        { title: 'Sử dụng chuyên nghiệp', examples: ['Nâng cao quy trình làm việc hàng ngày', 'Tự động hóa các tác vụ lặp đi lặp lại'] },
        { title: 'Dự án cá nhân', examples: ['Khám phá sáng tạo', 'Học kỹ năng mới'] }
      ]
    },
    affiliateUrl: 'https://coqui.ai',
    howToUse: {
      en: ['Sign up for an account', 'Explore the dashboard', 'Start creating with AI'],
      vi: ['Đăng ký tài khoản', 'Khám phá bảng điều khiển', 'Bắt đầu sáng tạo với AI']
    }
  },
  {
    id: 'respeecher',
    name: 'Respeecher',
    domain: 'respeecher.com',
    logo: getLogo('respeecher.com'),
    screenshots: ['https://picsum.photos/seed/respeecher1/800/450', 'https://picsum.photos/seed/respeecher2/800/450'],
    category: 'audio',
    rating: 4.7,
    reviewCount: 896,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    pricing: {
      en: 'Freemium',
      vi: 'Miễn phí cơ bản'
    },
    description: {
      en: 'Respeecher is a powerful AI tool for audio that helps you achieve more in less time.',
      vi: 'Respeecher là một công cụ AI mạnh mẽ dành cho audio giúp bạn đạt được nhiều thành tựu hơn trong thời gian ngắn hơn.'
    },
    features: {
      en: ['Advanced AI capabilities', 'User-friendly interface', 'Fast processing', 'Cloud sync'],
      vi: ['Khả năng AI tiên tiến', 'Giao diện thân thiện', 'Xử lý nhanh', 'Đồng bộ đám mây']
    },
    pros: {
      en: ['High quality output', 'Easy to use', 'Regular updates'],
      vi: ['Đầu ra chất lượng cao', 'Dễ sử dụng', 'Cập nhật thường xuyên']
    },
    cons: {
      en: ['Premium features require subscription', 'Learning curve for advanced features'],
      vi: ['Tính năng cao cấp yêu cầu trả phí', 'Cần thời gian học các tính năng nâng cao']
    },
    useCases: {
      en: [
        { title: 'Professional Use', examples: ['Enhancing daily workflows', 'Automating repetitive tasks'] },
        { title: 'Personal Projects', examples: ['Creative exploration', 'Learning new skills'] }
      ],
      vi: [
        { title: 'Sử dụng chuyên nghiệp', examples: ['Nâng cao quy trình làm việc hàng ngày', 'Tự động hóa các tác vụ lặp đi lặp lại'] },
        { title: 'Dự án cá nhân', examples: ['Khám phá sáng tạo', 'Học kỹ năng mới'] }
      ]
    },
    affiliateUrl: 'https://respeecher.com',
    howToUse: {
      en: ['Sign up for an account', 'Explore the dashboard', 'Start creating with AI'],
      vi: ['Đăng ký tài khoản', 'Khám phá bảng điều khiển', 'Bắt đầu sáng tạo với AI']
    }
  },
  {
    id: 'altered',
    name: 'Altered',
    domain: 'altered.ai',
    logo: getLogo('altered.ai'),
    screenshots: ['https://picsum.photos/seed/altered1/800/450', 'https://picsum.photos/seed/altered2/800/450'],
    category: 'audio',
    rating: 4.8,
    reviewCount: 661,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    pricing: {
      en: 'Freemium',
      vi: 'Miễn phí cơ bản'
    },
    description: {
      en: 'Altered is a powerful AI tool for audio that helps you achieve more in less time.',
      vi: 'Altered là một công cụ AI mạnh mẽ dành cho audio giúp bạn đạt được nhiều thành tựu hơn trong thời gian ngắn hơn.'
    },
    features: {
      en: ['Advanced AI capabilities', 'User-friendly interface', 'Fast processing', 'Cloud sync'],
      vi: ['Khả năng AI tiên tiến', 'Giao diện thân thiện', 'Xử lý nhanh', 'Đồng bộ đám mây']
    },
    pros: {
      en: ['High quality output', 'Easy to use', 'Regular updates'],
      vi: ['Đầu ra chất lượng cao', 'Dễ sử dụng', 'Cập nhật thường xuyên']
    },
    cons: {
      en: ['Premium features require subscription', 'Learning curve for advanced features'],
      vi: ['Tính năng cao cấp yêu cầu trả phí', 'Cần thời gian học các tính năng nâng cao']
    },
    useCases: {
      en: [
        { title: 'Professional Use', examples: ['Enhancing daily workflows', 'Automating repetitive tasks'] },
        { title: 'Personal Projects', examples: ['Creative exploration', 'Learning new skills'] }
      ],
      vi: [
        { title: 'Sử dụng chuyên nghiệp', examples: ['Nâng cao quy trình làm việc hàng ngày', 'Tự động hóa các tác vụ lặp đi lặp lại'] },
        { title: 'Dự án cá nhân', examples: ['Khám phá sáng tạo', 'Học kỹ năng mới'] }
      ]
    },
    affiliateUrl: 'https://altered.ai',
    howToUse: {
      en: ['Sign up for an account', 'Explore the dashboard', 'Start creating with AI'],
      vi: ['Đăng ký tài khoản', 'Khám phá bảng điều khiển', 'Bắt đầu sáng tạo với AI']
    }
  },
  {
    id: 'krisp',
    name: 'Krisp',
    domain: 'krisp.ai',
    logo: getLogo('krisp.ai'),
    screenshots: ['https://picsum.photos/seed/krisp1/800/450', 'https://picsum.photos/seed/krisp2/800/450'],
    category: 'audio',
    rating: 4.5,
    reviewCount: 4923,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    pricing: {
      en: 'Freemium',
      vi: 'Miễn phí cơ bản'
    },
    description: {
      en: 'Krisp is a powerful AI tool for audio that helps you achieve more in less time.',
      vi: 'Krisp là một công cụ AI mạnh mẽ dành cho audio giúp bạn đạt được nhiều thành tựu hơn trong thời gian ngắn hơn.'
    },
    features: {
      en: ['Advanced AI capabilities', 'User-friendly interface', 'Fast processing', 'Cloud sync'],
      vi: ['Khả năng AI tiên tiến', 'Giao diện thân thiện', 'Xử lý nhanh', 'Đồng bộ đám mây']
    },
    pros: {
      en: ['High quality output', 'Easy to use', 'Regular updates'],
      vi: ['Đầu ra chất lượng cao', 'Dễ sử dụng', 'Cập nhật thường xuyên']
    },
    cons: {
      en: ['Premium features require subscription', 'Learning curve for advanced features'],
      vi: ['Tính năng cao cấp yêu cầu trả phí', 'Cần thời gian học các tính năng nâng cao']
    },
    useCases: {
      en: [
        { title: 'Professional Use', examples: ['Enhancing daily workflows', 'Automating repetitive tasks'] },
        { title: 'Personal Projects', examples: ['Creative exploration', 'Learning new skills'] }
      ],
      vi: [
        { title: 'Sử dụng chuyên nghiệp', examples: ['Nâng cao quy trình làm việc hàng ngày', 'Tự động hóa các tác vụ lặp đi lặp lại'] },
        { title: 'Dự án cá nhân', examples: ['Khám phá sáng tạo', 'Học kỹ năng mới'] }
      ]
    },
    affiliateUrl: 'https://krisp.ai',
    howToUse: {
      en: ['Sign up for an account', 'Explore the dashboard', 'Start creating with AI'],
      vi: ['Đăng ký tài khoản', 'Khám phá bảng điều khiển', 'Bắt đầu sáng tạo với AI']
    }
  },
  {
    id: 'adobe-podcast',
    name: 'Adobe Podcast',
    domain: 'podcast.adobe.com',
    logo: getLogo('podcast.adobe.com'),
    screenshots: ['https://picsum.photos/seed/adobe-podcast1/800/450', 'https://picsum.photos/seed/adobe-podcast2/800/450'],
    category: 'audio',
    rating: 5.0,
    reviewCount: 1384,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    pricing: {
      en: 'Freemium',
      vi: 'Miễn phí cơ bản'
    },
    description: {
      en: 'Adobe Podcast is a powerful AI tool for audio that helps you achieve more in less time.',
      vi: 'Adobe Podcast là một công cụ AI mạnh mẽ dành cho audio giúp bạn đạt được nhiều thành tựu hơn trong thời gian ngắn hơn.'
    },
    features: {
      en: ['Advanced AI capabilities', 'User-friendly interface', 'Fast processing', 'Cloud sync'],
      vi: ['Khả năng AI tiên tiến', 'Giao diện thân thiện', 'Xử lý nhanh', 'Đồng bộ đám mây']
    },
    pros: {
      en: ['High quality output', 'Easy to use', 'Regular updates'],
      vi: ['Đầu ra chất lượng cao', 'Dễ sử dụng', 'Cập nhật thường xuyên']
    },
    cons: {
      en: ['Premium features require subscription', 'Learning curve for advanced features'],
      vi: ['Tính năng cao cấp yêu cầu trả phí', 'Cần thời gian học các tính năng nâng cao']
    },
    useCases: {
      en: [
        { title: 'Professional Use', examples: ['Enhancing daily workflows', 'Automating repetitive tasks'] },
        { title: 'Personal Projects', examples: ['Creative exploration', 'Learning new skills'] }
      ],
      vi: [
        { title: 'Sử dụng chuyên nghiệp', examples: ['Nâng cao quy trình làm việc hàng ngày', 'Tự động hóa các tác vụ lặp đi lặp lại'] },
        { title: 'Dự án cá nhân', examples: ['Khám phá sáng tạo', 'Học kỹ năng mới'] }
      ]
    },
    affiliateUrl: 'https://podcast.adobe.com',
    howToUse: {
      en: ['Sign up for an account', 'Explore the dashboard', 'Start creating with AI'],
      vi: ['Đăng ký tài khoản', 'Khám phá bảng điều khiển', 'Bắt đầu sáng tạo với AI']
    }
  },
  {
    id: 'auphonic',
    name: 'Auphonic',
    domain: 'auphonic.com',
    logo: getLogo('auphonic.com'),
    screenshots: ['https://picsum.photos/seed/auphonic1/800/450', 'https://picsum.photos/seed/auphonic2/800/450'],
    category: 'audio',
    rating: 4.1,
    reviewCount: 1245,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    pricing: {
      en: 'Freemium',
      vi: 'Miễn phí cơ bản'
    },
    description: {
      en: 'Auphonic is a powerful AI tool for audio that helps you achieve more in less time.',
      vi: 'Auphonic là một công cụ AI mạnh mẽ dành cho audio giúp bạn đạt được nhiều thành tựu hơn trong thời gian ngắn hơn.'
    },
    features: {
      en: ['Advanced AI capabilities', 'User-friendly interface', 'Fast processing', 'Cloud sync'],
      vi: ['Khả năng AI tiên tiến', 'Giao diện thân thiện', 'Xử lý nhanh', 'Đồng bộ đám mây']
    },
    pros: {
      en: ['High quality output', 'Easy to use', 'Regular updates'],
      vi: ['Đầu ra chất lượng cao', 'Dễ sử dụng', 'Cập nhật thường xuyên']
    },
    cons: {
      en: ['Premium features require subscription', 'Learning curve for advanced features'],
      vi: ['Tính năng cao cấp yêu cầu trả phí', 'Cần thời gian học các tính năng nâng cao']
    },
    useCases: {
      en: [
        { title: 'Professional Use', examples: ['Enhancing daily workflows', 'Automating repetitive tasks'] },
        { title: 'Personal Projects', examples: ['Creative exploration', 'Learning new skills'] }
      ],
      vi: [
        { title: 'Sử dụng chuyên nghiệp', examples: ['Nâng cao quy trình làm việc hàng ngày', 'Tự động hóa các tác vụ lặp đi lặp lại'] },
        { title: 'Dự án cá nhân', examples: ['Khám phá sáng tạo', 'Học kỹ năng mới'] }
      ]
    },
    affiliateUrl: 'https://auphonic.com',
    howToUse: {
      en: ['Sign up for an account', 'Explore the dashboard', 'Start creating with AI'],
      vi: ['Đăng ký tài khoản', 'Khám phá bảng điều khiển', 'Bắt đầu sáng tạo với AI']
    }
  },
  {
    id: 'cleanvoice',
    name: 'Cleanvoice',
    domain: 'cleanvoice.ai',
    logo: getLogo('cleanvoice.ai'),
    screenshots: ['https://picsum.photos/seed/cleanvoice1/800/450', 'https://picsum.photos/seed/cleanvoice2/800/450'],
    category: 'audio',
    rating: 4.2,
    reviewCount: 4566,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    pricing: {
      en: 'Freemium',
      vi: 'Miễn phí cơ bản'
    },
    description: {
      en: 'Cleanvoice is a powerful AI tool for audio that helps you achieve more in less time.',
      vi: 'Cleanvoice là một công cụ AI mạnh mẽ dành cho audio giúp bạn đạt được nhiều thành tựu hơn trong thời gian ngắn hơn.'
    },
    features: {
      en: ['Advanced AI capabilities', 'User-friendly interface', 'Fast processing', 'Cloud sync'],
      vi: ['Khả năng AI tiên tiến', 'Giao diện thân thiện', 'Xử lý nhanh', 'Đồng bộ đám mây']
    },
    pros: {
      en: ['High quality output', 'Easy to use', 'Regular updates'],
      vi: ['Đầu ra chất lượng cao', 'Dễ sử dụng', 'Cập nhật thường xuyên']
    },
    cons: {
      en: ['Premium features require subscription', 'Learning curve for advanced features'],
      vi: ['Tính năng cao cấp yêu cầu trả phí', 'Cần thời gian học các tính năng nâng cao']
    },
    useCases: {
      en: [
        { title: 'Professional Use', examples: ['Enhancing daily workflows', 'Automating repetitive tasks'] },
        { title: 'Personal Projects', examples: ['Creative exploration', 'Learning new skills'] }
      ],
      vi: [
        { title: 'Sử dụng chuyên nghiệp', examples: ['Nâng cao quy trình làm việc hàng ngày', 'Tự động hóa các tác vụ lặp đi lặp lại'] },
        { title: 'Dự án cá nhân', examples: ['Khám phá sáng tạo', 'Học kỹ năng mới'] }
      ]
    },
    affiliateUrl: 'https://cleanvoice.ai',
    howToUse: {
      en: ['Sign up for an account', 'Explore the dashboard', 'Start creating with AI'],
      vi: ['Đăng ký tài khoản', 'Khám phá bảng điều khiển', 'Bắt đầu sáng tạo với AI']
    }
  },
  {
    id: 'resemble',
    name: 'Resemble AI',
    domain: 'resemble.ai',
    logo: getLogo('resemble.ai'),
    screenshots: ['https://picsum.photos/seed/resemble1/800/450', 'https://picsum.photos/seed/resemble2/800/450'],
    category: 'audio',
    rating: 4.1,
    reviewCount: 341,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    pricing: {
      en: 'Freemium',
      vi: 'Miễn phí cơ bản'
    },
    description: {
      en: 'Resemble AI is a powerful AI tool for audio that helps you achieve more in less time.',
      vi: 'Resemble AI là một công cụ AI mạnh mẽ dành cho audio giúp bạn đạt được nhiều thành tựu hơn trong thời gian ngắn hơn.'
    },
    features: {
      en: ['Advanced AI capabilities', 'User-friendly interface', 'Fast processing', 'Cloud sync'],
      vi: ['Khả năng AI tiên tiến', 'Giao diện thân thiện', 'Xử lý nhanh', 'Đồng bộ đám mây']
    },
    pros: {
      en: ['High quality output', 'Easy to use', 'Regular updates'],
      vi: ['Đầu ra chất lượng cao', 'Dễ sử dụng', 'Cập nhật thường xuyên']
    },
    cons: {
      en: ['Premium features require subscription', 'Learning curve for advanced features'],
      vi: ['Tính năng cao cấp yêu cầu trả phí', 'Cần thời gian học các tính năng nâng cao']
    },
    useCases: {
      en: [
        { title: 'Professional Use', examples: ['Enhancing daily workflows', 'Automating repetitive tasks'] },
        { title: 'Personal Projects', examples: ['Creative exploration', 'Learning new skills'] }
      ],
      vi: [
        { title: 'Sử dụng chuyên nghiệp', examples: ['Nâng cao quy trình làm việc hàng ngày', 'Tự động hóa các tác vụ lặp đi lặp lại'] },
        { title: 'Dự án cá nhân', examples: ['Khám phá sáng tạo', 'Học kỹ năng mới'] }
      ]
    },
    affiliateUrl: 'https://resemble.ai',
    howToUse: {
      en: ['Sign up for an account', 'Explore the dashboard', 'Start creating with AI'],
      vi: ['Đăng ký tài khoản', 'Khám phá bảng điều khiển', 'Bắt đầu sáng tạo với AI']
    }
  },
  {
    id: 'wellsaid',
    name: 'WellSaid Labs',
    domain: 'wellsaidlabs.com',
    logo: getLogo('wellsaidlabs.com'),
    screenshots: ['https://picsum.photos/seed/wellsaid1/800/450', 'https://picsum.photos/seed/wellsaid2/800/450'],
    category: 'audio',
    rating: 4.3,
    reviewCount: 3635,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    pricing: {
      en: 'Freemium',
      vi: 'Miễn phí cơ bản'
    },
    description: {
      en: 'WellSaid Labs is a powerful AI tool for audio that helps you achieve more in less time.',
      vi: 'WellSaid Labs là một công cụ AI mạnh mẽ dành cho audio giúp bạn đạt được nhiều thành tựu hơn trong thời gian ngắn hơn.'
    },
    features: {
      en: ['Advanced AI capabilities', 'User-friendly interface', 'Fast processing', 'Cloud sync'],
      vi: ['Khả năng AI tiên tiến', 'Giao diện thân thiện', 'Xử lý nhanh', 'Đồng bộ đám mây']
    },
    pros: {
      en: ['High quality output', 'Easy to use', 'Regular updates'],
      vi: ['Đầu ra chất lượng cao', 'Dễ sử dụng', 'Cập nhật thường xuyên']
    },
    cons: {
      en: ['Premium features require subscription', 'Learning curve for advanced features'],
      vi: ['Tính năng cao cấp yêu cầu trả phí', 'Cần thời gian học các tính năng nâng cao']
    },
    useCases: {
      en: [
        { title: 'Professional Use', examples: ['Enhancing daily workflows', 'Automating repetitive tasks'] },
        { title: 'Personal Projects', examples: ['Creative exploration', 'Learning new skills'] }
      ],
      vi: [
        { title: 'Sử dụng chuyên nghiệp', examples: ['Nâng cao quy trình làm việc hàng ngày', 'Tự động hóa các tác vụ lặp đi lặp lại'] },
        { title: 'Dự án cá nhân', examples: ['Khám phá sáng tạo', 'Học kỹ năng mới'] }
      ]
    },
    affiliateUrl: 'https://wellsaidlabs.com',
    howToUse: {
      en: ['Sign up for an account', 'Explore the dashboard', 'Start creating with AI'],
      vi: ['Đăng ký tài khoản', 'Khám phá bảng điều khiển', 'Bắt đầu sáng tạo với AI']
    }
  },
  {
    id: 'lovo',
    name: 'LOVO',
    domain: 'lovo.ai',
    logo: getLogo('lovo.ai'),
    screenshots: ['https://picsum.photos/seed/lovo1/800/450', 'https://picsum.photos/seed/lovo2/800/450'],
    category: 'audio',
    rating: 4.8,
    reviewCount: 2318,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    pricing: {
      en: 'Freemium',
      vi: 'Miễn phí cơ bản'
    },
    description: {
      en: 'LOVO is a powerful AI tool for audio that helps you achieve more in less time.',
      vi: 'LOVO là một công cụ AI mạnh mẽ dành cho audio giúp bạn đạt được nhiều thành tựu hơn trong thời gian ngắn hơn.'
    },
    features: {
      en: ['Advanced AI capabilities', 'User-friendly interface', 'Fast processing', 'Cloud sync'],
      vi: ['Khả năng AI tiên tiến', 'Giao diện thân thiện', 'Xử lý nhanh', 'Đồng bộ đám mây']
    },
    pros: {
      en: ['High quality output', 'Easy to use', 'Regular updates'],
      vi: ['Đầu ra chất lượng cao', 'Dễ sử dụng', 'Cập nhật thường xuyên']
    },
    cons: {
      en: ['Premium features require subscription', 'Learning curve for advanced features'],
      vi: ['Tính năng cao cấp yêu cầu trả phí', 'Cần thời gian học các tính năng nâng cao']
    },
    useCases: {
      en: [
        { title: 'Professional Use', examples: ['Enhancing daily workflows', 'Automating repetitive tasks'] },
        { title: 'Personal Projects', examples: ['Creative exploration', 'Learning new skills'] }
      ],
      vi: [
        { title: 'Sử dụng chuyên nghiệp', examples: ['Nâng cao quy trình làm việc hàng ngày', 'Tự động hóa các tác vụ lặp đi lặp lại'] },
        { title: 'Dự án cá nhân', examples: ['Khám phá sáng tạo', 'Học kỹ năng mới'] }
      ]
    },
    affiliateUrl: 'https://lovo.ai',
    howToUse: {
      en: ['Sign up for an account', 'Explore the dashboard', 'Start creating with AI'],
      vi: ['Đăng ký tài khoản', 'Khám phá bảng điều khiển', 'Bắt đầu sáng tạo với AI']
    }
  },
  {
    id: 'listnr',
    name: 'Listnr',
    domain: 'listnr.tech',
    logo: getLogo('listnr.tech'),
    screenshots: ['https://picsum.photos/seed/listnr1/800/450', 'https://picsum.photos/seed/listnr2/800/450'],
    category: 'audio',
    rating: 4.0,
    reviewCount: 2469,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    pricing: {
      en: 'Freemium',
      vi: 'Miễn phí cơ bản'
    },
    description: {
      en: 'Listnr is a powerful AI tool for audio that helps you achieve more in less time.',
      vi: 'Listnr là một công cụ AI mạnh mẽ dành cho audio giúp bạn đạt được nhiều thành tựu hơn trong thời gian ngắn hơn.'
    },
    features: {
      en: ['Advanced AI capabilities', 'User-friendly interface', 'Fast processing', 'Cloud sync'],
      vi: ['Khả năng AI tiên tiến', 'Giao diện thân thiện', 'Xử lý nhanh', 'Đồng bộ đám mây']
    },
    pros: {
      en: ['High quality output', 'Easy to use', 'Regular updates'],
      vi: ['Đầu ra chất lượng cao', 'Dễ sử dụng', 'Cập nhật thường xuyên']
    },
    cons: {
      en: ['Premium features require subscription', 'Learning curve for advanced features'],
      vi: ['Tính năng cao cấp yêu cầu trả phí', 'Cần thời gian học các tính năng nâng cao']
    },
    useCases: {
      en: [
        { title: 'Professional Use', examples: ['Enhancing daily workflows', 'Automating repetitive tasks'] },
        { title: 'Personal Projects', examples: ['Creative exploration', 'Learning new skills'] }
      ],
      vi: [
        { title: 'Sử dụng chuyên nghiệp', examples: ['Nâng cao quy trình làm việc hàng ngày', 'Tự động hóa các tác vụ lặp đi lặp lại'] },
        { title: 'Dự án cá nhân', examples: ['Khám phá sáng tạo', 'Học kỹ năng mới'] }
      ]
    },
    affiliateUrl: 'https://listnr.tech',
    howToUse: {
      en: ['Sign up for an account', 'Explore the dashboard', 'Start creating with AI'],
      vi: ['Đăng ký tài khoản', 'Khám phá bảng điều khiển', 'Bắt đầu sáng tạo với AI']
    }
  },
  {
    id: 'synthesys',
    name: 'Synthesys',
    domain: 'synthesys.io',
    logo: getLogo('synthesys.io'),
    screenshots: ['https://picsum.photos/seed/synthesys1/800/450', 'https://picsum.photos/seed/synthesys2/800/450'],
    category: 'audio',
    rating: 4.2,
    reviewCount: 1785,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    pricing: {
      en: 'Freemium',
      vi: 'Miễn phí cơ bản'
    },
    description: {
      en: 'Synthesys is a powerful AI tool for audio that helps you achieve more in less time.',
      vi: 'Synthesys là một công cụ AI mạnh mẽ dành cho audio giúp bạn đạt được nhiều thành tựu hơn trong thời gian ngắn hơn.'
    },
    features: {
      en: ['Advanced AI capabilities', 'User-friendly interface', 'Fast processing', 'Cloud sync'],
      vi: ['Khả năng AI tiên tiến', 'Giao diện thân thiện', 'Xử lý nhanh', 'Đồng bộ đám mây']
    },
    pros: {
      en: ['High quality output', 'Easy to use', 'Regular updates'],
      vi: ['Đầu ra chất lượng cao', 'Dễ sử dụng', 'Cập nhật thường xuyên']
    },
    cons: {
      en: ['Premium features require subscription', 'Learning curve for advanced features'],
      vi: ['Tính năng cao cấp yêu cầu trả phí', 'Cần thời gian học các tính năng nâng cao']
    },
    useCases: {
      en: [
        { title: 'Professional Use', examples: ['Enhancing daily workflows', 'Automating repetitive tasks'] },
        { title: 'Personal Projects', examples: ['Creative exploration', 'Learning new skills'] }
      ],
      vi: [
        { title: 'Sử dụng chuyên nghiệp', examples: ['Nâng cao quy trình làm việc hàng ngày', 'Tự động hóa các tác vụ lặp đi lặp lại'] },
        { title: 'Dự án cá nhân', examples: ['Khám phá sáng tạo', 'Học kỹ năng mới'] }
      ]
    },
    affiliateUrl: 'https://synthesys.io',
    howToUse: {
      en: ['Sign up for an account', 'Explore the dashboard', 'Start creating with AI'],
      vi: ['Đăng ký tài khoản', 'Khám phá bảng điều khiển', 'Bắt đầu sáng tạo với AI']
    }
  },
  {
    id: 'fliki-audio',
    name: 'Fliki Audio',
    domain: 'fliki.ai',
    logo: getLogo('fliki.ai'),
    screenshots: ['https://picsum.photos/seed/fliki-audio1/800/450', 'https://picsum.photos/seed/fliki-audio2/800/450'],
    category: 'audio',
    rating: 5.0,
    reviewCount: 1013,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    pricing: {
      en: 'Freemium',
      vi: 'Miễn phí cơ bản'
    },
    description: {
      en: 'Fliki Audio is a powerful AI tool for audio that helps you achieve more in less time.',
      vi: 'Fliki Audio là một công cụ AI mạnh mẽ dành cho audio giúp bạn đạt được nhiều thành tựu hơn trong thời gian ngắn hơn.'
    },
    features: {
      en: ['Advanced AI capabilities', 'User-friendly interface', 'Fast processing', 'Cloud sync'],
      vi: ['Khả năng AI tiên tiến', 'Giao diện thân thiện', 'Xử lý nhanh', 'Đồng bộ đám mây']
    },
    pros: {
      en: ['High quality output', 'Easy to use', 'Regular updates'],
      vi: ['Đầu ra chất lượng cao', 'Dễ sử dụng', 'Cập nhật thường xuyên']
    },
    cons: {
      en: ['Premium features require subscription', 'Learning curve for advanced features'],
      vi: ['Tính năng cao cấp yêu cầu trả phí', 'Cần thời gian học các tính năng nâng cao']
    },
    useCases: {
      en: [
        { title: 'Professional Use', examples: ['Enhancing daily workflows', 'Automating repetitive tasks'] },
        { title: 'Personal Projects', examples: ['Creative exploration', 'Learning new skills'] }
      ],
      vi: [
        { title: 'Sử dụng chuyên nghiệp', examples: ['Nâng cao quy trình làm việc hàng ngày', 'Tự động hóa các tác vụ lặp đi lặp lại'] },
        { title: 'Dự án cá nhân', examples: ['Khám phá sáng tạo', 'Học kỹ năng mới'] }
      ]
    },
    affiliateUrl: 'https://fliki.ai',
    howToUse: {
      en: ['Sign up for an account', 'Explore the dashboard', 'Start creating with AI'],
      vi: ['Đăng ký tài khoản', 'Khám phá bảng điều khiển', 'Bắt đầu sáng tạo với AI']
    }
  },
  {
    id: 'invideo-audio',
    name: 'InVideo Audio',
    domain: 'invideo.io',
    logo: getLogo('invideo.io'),
    screenshots: ['https://picsum.photos/seed/invideo-audio1/800/450', 'https://picsum.photos/seed/invideo-audio2/800/450'],
    category: 'audio',
    rating: 4.9,
    reviewCount: 4779,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    pricing: {
      en: 'Freemium',
      vi: 'Miễn phí cơ bản'
    },
    description: {
      en: 'InVideo Audio is a powerful AI tool for audio that helps you achieve more in less time.',
      vi: 'InVideo Audio là một công cụ AI mạnh mẽ dành cho audio giúp bạn đạt được nhiều thành tựu hơn trong thời gian ngắn hơn.'
    },
    features: {
      en: ['Advanced AI capabilities', 'User-friendly interface', 'Fast processing', 'Cloud sync'],
      vi: ['Khả năng AI tiên tiến', 'Giao diện thân thiện', 'Xử lý nhanh', 'Đồng bộ đám mây']
    },
    pros: {
      en: ['High quality output', 'Easy to use', 'Regular updates'],
      vi: ['Đầu ra chất lượng cao', 'Dễ sử dụng', 'Cập nhật thường xuyên']
    },
    cons: {
      en: ['Premium features require subscription', 'Learning curve for advanced features'],
      vi: ['Tính năng cao cấp yêu cầu trả phí', 'Cần thời gian học các tính năng nâng cao']
    },
    useCases: {
      en: [
        { title: 'Professional Use', examples: ['Enhancing daily workflows', 'Automating repetitive tasks'] },
        { title: 'Personal Projects', examples: ['Creative exploration', 'Learning new skills'] }
      ],
      vi: [
        { title: 'Sử dụng chuyên nghiệp', examples: ['Nâng cao quy trình làm việc hàng ngày', 'Tự động hóa các tác vụ lặp đi lặp lại'] },
        { title: 'Dự án cá nhân', examples: ['Khám phá sáng tạo', 'Học kỹ năng mới'] }
      ]
    },
    affiliateUrl: 'https://invideo.io',
    howToUse: {
      en: ['Sign up for an account', 'Explore the dashboard', 'Start creating with AI'],
      vi: ['Đăng ký tài khoản', 'Khám phá bảng điều khiển', 'Bắt đầu sáng tạo với AI']
    }
  },
  {
    id: 'descript-audio',
    name: 'Descript Audio',
    domain: 'descript.com',
    logo: getLogo('descript.com'),
    screenshots: ['https://picsum.photos/seed/descript-audio1/800/450', 'https://picsum.photos/seed/descript-audio2/800/450'],
    category: 'audio',
    rating: 4.9,
    reviewCount: 5009,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    pricing: {
      en: 'Freemium',
      vi: 'Miễn phí cơ bản'
    },
    description: {
      en: 'Descript Audio is a powerful AI tool for audio that helps you achieve more in less time.',
      vi: 'Descript Audio là một công cụ AI mạnh mẽ dành cho audio giúp bạn đạt được nhiều thành tựu hơn trong thời gian ngắn hơn.'
    },
    features: {
      en: ['Advanced AI capabilities', 'User-friendly interface', 'Fast processing', 'Cloud sync'],
      vi: ['Khả năng AI tiên tiến', 'Giao diện thân thiện', 'Xử lý nhanh', 'Đồng bộ đám mây']
    },
    pros: {
      en: ['High quality output', 'Easy to use', 'Regular updates'],
      vi: ['Đầu ra chất lượng cao', 'Dễ sử dụng', 'Cập nhật thường xuyên']
    },
    cons: {
      en: ['Premium features require subscription', 'Learning curve for advanced features'],
      vi: ['Tính năng cao cấp yêu cầu trả phí', 'Cần thời gian học các tính năng nâng cao']
    },
    useCases: {
      en: [
        { title: 'Professional Use', examples: ['Enhancing daily workflows', 'Automating repetitive tasks'] },
        { title: 'Personal Projects', examples: ['Creative exploration', 'Learning new skills'] }
      ],
      vi: [
        { title: 'Sử dụng chuyên nghiệp', examples: ['Nâng cao quy trình làm việc hàng ngày', 'Tự động hóa các tác vụ lặp đi lặp lại'] },
        { title: 'Dự án cá nhân', examples: ['Khám phá sáng tạo', 'Học kỹ năng mới'] }
      ]
    },
    affiliateUrl: 'https://descript.com',
    howToUse: {
      en: ['Sign up for an account', 'Explore the dashboard', 'Start creating with AI'],
      vi: ['Đăng ký tài khoản', 'Khám phá bảng điều khiển', 'Bắt đầu sáng tạo với AI']
    }
  },
  {
    id: 'podcastle-audio',
    name: 'Podcastle Audio',
    domain: 'podcastle.ai',
    logo: getLogo('podcastle.ai'),
    screenshots: ['https://picsum.photos/seed/podcastle-audio1/800/450', 'https://picsum.photos/seed/podcastle-audio2/800/450'],
    category: 'audio',
    rating: 4.9,
    reviewCount: 4350,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    pricing: {
      en: 'Freemium',
      vi: 'Miễn phí cơ bản'
    },
    description: {
      en: 'Podcastle Audio is a powerful AI tool for audio that helps you achieve more in less time.',
      vi: 'Podcastle Audio là một công cụ AI mạnh mẽ dành cho audio giúp bạn đạt được nhiều thành tựu hơn trong thời gian ngắn hơn.'
    },
    features: {
      en: ['Advanced AI capabilities', 'User-friendly interface', 'Fast processing', 'Cloud sync'],
      vi: ['Khả năng AI tiên tiến', 'Giao diện thân thiện', 'Xử lý nhanh', 'Đồng bộ đám mây']
    },
    pros: {
      en: ['High quality output', 'Easy to use', 'Regular updates'],
      vi: ['Đầu ra chất lượng cao', 'Dễ sử dụng', 'Cập nhật thường xuyên']
    },
    cons: {
      en: ['Premium features require subscription', 'Learning curve for advanced features'],
      vi: ['Tính năng cao cấp yêu cầu trả phí', 'Cần thời gian học các tính năng nâng cao']
    },
    useCases: {
      en: [
        { title: 'Professional Use', examples: ['Enhancing daily workflows', 'Automating repetitive tasks'] },
        { title: 'Personal Projects', examples: ['Creative exploration', 'Learning new skills'] }
      ],
      vi: [
        { title: 'Sử dụng chuyên nghiệp', examples: ['Nâng cao quy trình làm việc hàng ngày', 'Tự động hóa các tác vụ lặp đi lặp lại'] },
        { title: 'Dự án cá nhân', examples: ['Khám phá sáng tạo', 'Học kỹ năng mới'] }
      ]
    },
    affiliateUrl: 'https://podcastle.ai',
    howToUse: {
      en: ['Sign up for an account', 'Explore the dashboard', 'Start creating with AI'],
      vi: ['Đăng ký tài khoản', 'Khám phá bảng điều khiển', 'Bắt đầu sáng tạo với AI']
    }
  },
  {
    id: 'castmagic-audio',
    name: 'Castmagic Audio',
    domain: 'castmagic.io',
    logo: getLogo('castmagic.io'),
    screenshots: ['https://picsum.photos/seed/castmagic-audio1/800/450', 'https://picsum.photos/seed/castmagic-audio2/800/450'],
    category: 'audio',
    rating: 4.7,
    reviewCount: 3927,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    pricing: {
      en: 'Freemium',
      vi: 'Miễn phí cơ bản'
    },
    description: {
      en: 'Castmagic Audio is a powerful AI tool for audio that helps you achieve more in less time.',
      vi: 'Castmagic Audio là một công cụ AI mạnh mẽ dành cho audio giúp bạn đạt được nhiều thành tựu hơn trong thời gian ngắn hơn.'
    },
    features: {
      en: ['Advanced AI capabilities', 'User-friendly interface', 'Fast processing', 'Cloud sync'],
      vi: ['Khả năng AI tiên tiến', 'Giao diện thân thiện', 'Xử lý nhanh', 'Đồng bộ đám mây']
    },
    pros: {
      en: ['High quality output', 'Easy to use', 'Regular updates'],
      vi: ['Đầu ra chất lượng cao', 'Dễ sử dụng', 'Cập nhật thường xuyên']
    },
    cons: {
      en: ['Premium features require subscription', 'Learning curve for advanced features'],
      vi: ['Tính năng cao cấp yêu cầu trả phí', 'Cần thời gian học các tính năng nâng cao']
    },
    useCases: {
      en: [
        { title: 'Professional Use', examples: ['Enhancing daily workflows', 'Automating repetitive tasks'] },
        { title: 'Personal Projects', examples: ['Creative exploration', 'Learning new skills'] }
      ],
      vi: [
        { title: 'Sử dụng chuyên nghiệp', examples: ['Nâng cao quy trình làm việc hàng ngày', 'Tự động hóa các tác vụ lặp đi lặp lại'] },
        { title: 'Dự án cá nhân', examples: ['Khám phá sáng tạo', 'Học kỹ năng mới'] }
      ]
    },
    affiliateUrl: 'https://castmagic.io',
    howToUse: {
      en: ['Sign up for an account', 'Explore the dashboard', 'Start creating with AI'],
      vi: ['Đăng ký tài khoản', 'Khám phá bảng điều khiển', 'Bắt đầu sáng tạo với AI']
    }
  },
  {
    id: 'riverside-audio',
    name: 'Riverside Audio',
    domain: 'riverside.fm',
    logo: getLogo('riverside.fm'),
    screenshots: ['https://picsum.photos/seed/riverside-audio1/800/450', 'https://picsum.photos/seed/riverside-audio2/800/450'],
    category: 'audio',
    rating: 4.6,
    reviewCount: 1509,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    pricing: {
      en: 'Freemium',
      vi: 'Miễn phí cơ bản'
    },
    description: {
      en: 'Riverside Audio is a powerful AI tool for audio that helps you achieve more in less time.',
      vi: 'Riverside Audio là một công cụ AI mạnh mẽ dành cho audio giúp bạn đạt được nhiều thành tựu hơn trong thời gian ngắn hơn.'
    },
    features: {
      en: ['Advanced AI capabilities', 'User-friendly interface', 'Fast processing', 'Cloud sync'],
      vi: ['Khả năng AI tiên tiến', 'Giao diện thân thiện', 'Xử lý nhanh', 'Đồng bộ đám mây']
    },
    pros: {
      en: ['High quality output', 'Easy to use', 'Regular updates'],
      vi: ['Đầu ra chất lượng cao', 'Dễ sử dụng', 'Cập nhật thường xuyên']
    },
    cons: {
      en: ['Premium features require subscription', 'Learning curve for advanced features'],
      vi: ['Tính năng cao cấp yêu cầu trả phí', 'Cần thời gian học các tính năng nâng cao']
    },
    useCases: {
      en: [
        { title: 'Professional Use', examples: ['Enhancing daily workflows', 'Automating repetitive tasks'] },
        { title: 'Personal Projects', examples: ['Creative exploration', 'Learning new skills'] }
      ],
      vi: [
        { title: 'Sử dụng chuyên nghiệp', examples: ['Nâng cao quy trình làm việc hàng ngày', 'Tự động hóa các tác vụ lặp đi lặp lại'] },
        { title: 'Dự án cá nhân', examples: ['Khám phá sáng tạo', 'Học kỹ năng mới'] }
      ]
    },
    affiliateUrl: 'https://riverside.fm',
    howToUse: {
      en: ['Sign up for an account', 'Explore the dashboard', 'Start creating with AI'],
      vi: ['Đăng ký tài khoản', 'Khám phá bảng điều khiển', 'Bắt đầu sáng tạo với AI']
    }
  },
  {
    id: 'munch-audio',
    name: 'Munch Audio',
    domain: 'getmunch.com',
    logo: getLogo('getmunch.com'),
    screenshots: ['https://picsum.photos/seed/munch-audio1/800/450', 'https://picsum.photos/seed/munch-audio2/800/450'],
    category: 'audio',
    rating: 4.0,
    reviewCount: 4800,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    pricing: {
      en: 'Freemium',
      vi: 'Miễn phí cơ bản'
    },
    description: {
      en: 'Munch Audio is a powerful AI tool for audio that helps you achieve more in less time.',
      vi: 'Munch Audio là một công cụ AI mạnh mẽ dành cho audio giúp bạn đạt được nhiều thành tựu hơn trong thời gian ngắn hơn.'
    },
    features: {
      en: ['Advanced AI capabilities', 'User-friendly interface', 'Fast processing', 'Cloud sync'],
      vi: ['Khả năng AI tiên tiến', 'Giao diện thân thiện', 'Xử lý nhanh', 'Đồng bộ đám mây']
    },
    pros: {
      en: ['High quality output', 'Easy to use', 'Regular updates'],
      vi: ['Đầu ra chất lượng cao', 'Dễ sử dụng', 'Cập nhật thường xuyên']
    },
    cons: {
      en: ['Premium features require subscription', 'Learning curve for advanced features'],
      vi: ['Tính năng cao cấp yêu cầu trả phí', 'Cần thời gian học các tính năng nâng cao']
    },
    useCases: {
      en: [
        { title: 'Professional Use', examples: ['Enhancing daily workflows', 'Automating repetitive tasks'] },
        { title: 'Personal Projects', examples: ['Creative exploration', 'Learning new skills'] }
      ],
      vi: [
        { title: 'Sử dụng chuyên nghiệp', examples: ['Nâng cao quy trình làm việc hàng ngày', 'Tự động hóa các tác vụ lặp đi lặp lại'] },
        { title: 'Dự án cá nhân', examples: ['Khám phá sáng tạo', 'Học kỹ năng mới'] }
      ]
    },
    affiliateUrl: 'https://getmunch.com',
    howToUse: {
      en: ['Sign up for an account', 'Explore the dashboard', 'Start creating with AI'],
      vi: ['Đăng ký tài khoản', 'Khám phá bảng điều khiển', 'Bắt đầu sáng tạo với AI']
    }
  },
  {
    id: 'vidyo-audio',
    name: 'Vidyo Audio',
    domain: 'vidyo.ai',
    logo: getLogo('vidyo.ai'),
    screenshots: ['https://picsum.photos/seed/vidyo-audio1/800/450', 'https://picsum.photos/seed/vidyo-audio2/800/450'],
    category: 'audio',
    rating: 4.3,
    reviewCount: 3736,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    pricing: {
      en: 'Freemium',
      vi: 'Miễn phí cơ bản'
    },
    description: {
      en: 'Vidyo Audio is a powerful AI tool for audio that helps you achieve more in less time.',
      vi: 'Vidyo Audio là một công cụ AI mạnh mẽ dành cho audio giúp bạn đạt được nhiều thành tựu hơn trong thời gian ngắn hơn.'
    },
    features: {
      en: ['Advanced AI capabilities', 'User-friendly interface', 'Fast processing', 'Cloud sync'],
      vi: ['Khả năng AI tiên tiến', 'Giao diện thân thiện', 'Xử lý nhanh', 'Đồng bộ đám mây']
    },
    pros: {
      en: ['High quality output', 'Easy to use', 'Regular updates'],
      vi: ['Đầu ra chất lượng cao', 'Dễ sử dụng', 'Cập nhật thường xuyên']
    },
    cons: {
      en: ['Premium features require subscription', 'Learning curve for advanced features'],
      vi: ['Tính năng cao cấp yêu cầu trả phí', 'Cần thời gian học các tính năng nâng cao']
    },
    useCases: {
      en: [
        { title: 'Professional Use', examples: ['Enhancing daily workflows', 'Automating repetitive tasks'] },
        { title: 'Personal Projects', examples: ['Creative exploration', 'Learning new skills'] }
      ],
      vi: [
        { title: 'Sử dụng chuyên nghiệp', examples: ['Nâng cao quy trình làm việc hàng ngày', 'Tự động hóa các tác vụ lặp đi lặp lại'] },
        { title: 'Dự án cá nhân', examples: ['Khám phá sáng tạo', 'Học kỹ năng mới'] }
      ]
    },
    affiliateUrl: 'https://vidyo.ai',
    howToUse: {
      en: ['Sign up for an account', 'Explore the dashboard', 'Start creating with AI'],
      vi: ['Đăng ký tài khoản', 'Khám phá bảng điều khiển', 'Bắt đầu sáng tạo với AI']
    }
  },
  {
    id: 'opus-audio',
    name: 'Opus Audio',
    domain: 'opus.pro',
    logo: getLogo('opus.pro'),
    screenshots: ['https://picsum.photos/seed/opus-audio1/800/450', 'https://picsum.photos/seed/opus-audio2/800/450'],
    category: 'audio',
    rating: 4.1,
    reviewCount: 4270,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    pricing: {
      en: 'Freemium',
      vi: 'Miễn phí cơ bản'
    },
    description: {
      en: 'Opus Audio is a powerful AI tool for audio that helps you achieve more in less time.',
      vi: 'Opus Audio là một công cụ AI mạnh mẽ dành cho audio giúp bạn đạt được nhiều thành tựu hơn trong thời gian ngắn hơn.'
    },
    features: {
      en: ['Advanced AI capabilities', 'User-friendly interface', 'Fast processing', 'Cloud sync'],
      vi: ['Khả năng AI tiên tiến', 'Giao diện thân thiện', 'Xử lý nhanh', 'Đồng bộ đám mây']
    },
    pros: {
      en: ['High quality output', 'Easy to use', 'Regular updates'],
      vi: ['Đầu ra chất lượng cao', 'Dễ sử dụng', 'Cập nhật thường xuyên']
    },
    cons: {
      en: ['Premium features require subscription', 'Learning curve for advanced features'],
      vi: ['Tính năng cao cấp yêu cầu trả phí', 'Cần thời gian học các tính năng nâng cao']
    },
    useCases: {
      en: [
        { title: 'Professional Use', examples: ['Enhancing daily workflows', 'Automating repetitive tasks'] },
        { title: 'Personal Projects', examples: ['Creative exploration', 'Learning new skills'] }
      ],
      vi: [
        { title: 'Sử dụng chuyên nghiệp', examples: ['Nâng cao quy trình làm việc hàng ngày', 'Tự động hóa các tác vụ lặp đi lặp lại'] },
        { title: 'Dự án cá nhân', examples: ['Khám phá sáng tạo', 'Học kỹ năng mới'] }
      ]
    },
    affiliateUrl: 'https://opus.pro',
    howToUse: {
      en: ['Sign up for an account', 'Explore the dashboard', 'Start creating with AI'],
      vi: ['Đăng ký tài khoản', 'Khám phá bảng điều khiển', 'Bắt đầu sáng tạo với AI']
    }
  },
  {
    id: 'captions-audio',
    name: 'Captions Audio',
    domain: 'captions.ai',
    logo: getLogo('captions.ai'),
    screenshots: ['https://picsum.photos/seed/captions-audio1/800/450', 'https://picsum.photos/seed/captions-audio2/800/450'],
    category: 'audio',
    rating: 4.2,
    reviewCount: 2597,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    pricing: {
      en: 'Freemium',
      vi: 'Miễn phí cơ bản'
    },
    description: {
      en: 'Captions Audio is a powerful AI tool for audio that helps you achieve more in less time.',
      vi: 'Captions Audio là một công cụ AI mạnh mẽ dành cho audio giúp bạn đạt được nhiều thành tựu hơn trong thời gian ngắn hơn.'
    },
    features: {
      en: ['Advanced AI capabilities', 'User-friendly interface', 'Fast processing', 'Cloud sync'],
      vi: ['Khả năng AI tiên tiến', 'Giao diện thân thiện', 'Xử lý nhanh', 'Đồng bộ đám mây']
    },
    pros: {
      en: ['High quality output', 'Easy to use', 'Regular updates'],
      vi: ['Đầu ra chất lượng cao', 'Dễ sử dụng', 'Cập nhật thường xuyên']
    },
    cons: {
      en: ['Premium features require subscription', 'Learning curve for advanced features'],
      vi: ['Tính năng cao cấp yêu cầu trả phí', 'Cần thời gian học các tính năng nâng cao']
    },
    useCases: {
      en: [
        { title: 'Professional Use', examples: ['Enhancing daily workflows', 'Automating repetitive tasks'] },
        { title: 'Personal Projects', examples: ['Creative exploration', 'Learning new skills'] }
      ],
      vi: [
        { title: 'Sử dụng chuyên nghiệp', examples: ['Nâng cao quy trình làm việc hàng ngày', 'Tự động hóa các tác vụ lặp đi lặp lại'] },
        { title: 'Dự án cá nhân', examples: ['Khám phá sáng tạo', 'Học kỹ năng mới'] }
      ]
    },
    affiliateUrl: 'https://captions.ai',
    howToUse: {
      en: ['Sign up for an account', 'Explore the dashboard', 'Start creating with AI'],
      vi: ['Đăng ký tài khoản', 'Khám phá bảng điều khiển', 'Bắt đầu sáng tạo với AI']
    }
  },
  {
    id: 'veed-audio',
    name: 'VEED Audio',
    domain: 'veed.io',
    logo: getLogo('veed.io'),
    screenshots: ['https://picsum.photos/seed/veed-audio1/800/450', 'https://picsum.photos/seed/veed-audio2/800/450'],
    category: 'audio',
    rating: 4.8,
    reviewCount: 3091,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    pricing: {
      en: 'Freemium',
      vi: 'Miễn phí cơ bản'
    },
    description: {
      en: 'VEED Audio is a powerful AI tool for audio that helps you achieve more in less time.',
      vi: 'VEED Audio là một công cụ AI mạnh mẽ dành cho audio giúp bạn đạt được nhiều thành tựu hơn trong thời gian ngắn hơn.'
    },
    features: {
      en: ['Advanced AI capabilities', 'User-friendly interface', 'Fast processing', 'Cloud sync'],
      vi: ['Khả năng AI tiên tiến', 'Giao diện thân thiện', 'Xử lý nhanh', 'Đồng bộ đám mây']
    },
    pros: {
      en: ['High quality output', 'Easy to use', 'Regular updates'],
      vi: ['Đầu ra chất lượng cao', 'Dễ sử dụng', 'Cập nhật thường xuyên']
    },
    cons: {
      en: ['Premium features require subscription', 'Learning curve for advanced features'],
      vi: ['Tính năng cao cấp yêu cầu trả phí', 'Cần thời gian học các tính năng nâng cao']
    },
    useCases: {
      en: [
        { title: 'Professional Use', examples: ['Enhancing daily workflows', 'Automating repetitive tasks'] },
        { title: 'Personal Projects', examples: ['Creative exploration', 'Learning new skills'] }
      ],
      vi: [
        { title: 'Sử dụng chuyên nghiệp', examples: ['Nâng cao quy trình làm việc hàng ngày', 'Tự động hóa các tác vụ lặp đi lặp lại'] },
        { title: 'Dự án cá nhân', examples: ['Khám phá sáng tạo', 'Học kỹ năng mới'] }
      ]
    },
    affiliateUrl: 'https://veed.io',
    howToUse: {
      en: ['Sign up for an account', 'Explore the dashboard', 'Start creating with AI'],
      vi: ['Đăng ký tài khoản', 'Khám phá bảng điều khiển', 'Bắt đầu sáng tạo với AI']
    }
  },
  {
    id: 'capcut-audio',
    name: 'CapCut Audio',
    domain: 'capcut.com',
    logo: getLogo('capcut.com'),
    screenshots: ['https://picsum.photos/seed/capcut-audio1/800/450', 'https://picsum.photos/seed/capcut-audio2/800/450'],
    category: 'audio',
    rating: 4.7,
    reviewCount: 4900,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    pricing: {
      en: 'Freemium',
      vi: 'Miễn phí cơ bản'
    },
    description: {
      en: 'CapCut Audio is a powerful AI tool for audio that helps you achieve more in less time.',
      vi: 'CapCut Audio là một công cụ AI mạnh mẽ dành cho audio giúp bạn đạt được nhiều thành tựu hơn trong thời gian ngắn hơn.'
    },
    features: {
      en: ['Advanced AI capabilities', 'User-friendly interface', 'Fast processing', 'Cloud sync'],
      vi: ['Khả năng AI tiên tiến', 'Giao diện thân thiện', 'Xử lý nhanh', 'Đồng bộ đám mây']
    },
    pros: {
      en: ['High quality output', 'Easy to use', 'Regular updates'],
      vi: ['Đầu ra chất lượng cao', 'Dễ sử dụng', 'Cập nhật thường xuyên']
    },
    cons: {
      en: ['Premium features require subscription', 'Learning curve for advanced features'],
      vi: ['Tính năng cao cấp yêu cầu trả phí', 'Cần thời gian học các tính năng nâng cao']
    },
    useCases: {
      en: [
        { title: 'Professional Use', examples: ['Enhancing daily workflows', 'Automating repetitive tasks'] },
        { title: 'Personal Projects', examples: ['Creative exploration', 'Learning new skills'] }
      ],
      vi: [
        { title: 'Sử dụng chuyên nghiệp', examples: ['Nâng cao quy trình làm việc hàng ngày', 'Tự động hóa các tác vụ lặp đi lặp lại'] },
        { title: 'Dự án cá nhân', examples: ['Khám phá sáng tạo', 'Học kỹ năng mới'] }
      ]
    },
    affiliateUrl: 'https://capcut.com',
    howToUse: {
      en: ['Sign up for an account', 'Explore the dashboard', 'Start creating with AI'],
      vi: ['Đăng ký tài khoản', 'Khám phá bảng điều khiển', 'Bắt đầu sáng tạo với AI']
    }
  },
];
