export interface AITool {
  id: string;
  name: string;
  logo: string;
  screenshots: string[];
  category: 'video' | 'image' | 'writing' | 'coding' | 'audio' | 'productivity';
  rating: number;
  reviewCount: number;
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
  affiliateUrl: string;
  howToUse: {
    en: string[];
    vi: string[];
  };
}

export const TOOLS: AITool[] = [
  {
    id: 'gemini',
    name: 'Google Gemini',
    logo: 'https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg',
    screenshots: [
      'https://picsum.photos/seed/gemini1/800/450',
      'https://picsum.photos/seed/gemini2/800/450'
    ],
    category: 'writing',
    rating: 4.8,
    reviewCount: 1250,
    pricing: {
      en: 'Free / $20/mo (Advanced)',
      vi: 'Miễn phí / 500.000đ/tháng (Advanced)'
    },
    description: {
      en: 'Gemini is Google\'s most capable AI model, built to be multimodal from the ground up.',
      vi: 'Gemini là mô hình AI mạnh mẽ nhất của Google, được xây dựng đa phương thức ngay từ đầu.'
    },
    features: {
      en: ['Multimodal reasoning', 'Coding assistance', 'Creative writing', 'Google Workspace integration'],
      vi: ['Lập luận đa phương thức', 'Hỗ trợ lập trình', 'Viết lách sáng tạo', 'Tích hợp Google Workspace']
    },
    pros: {
      en: ['Fast response', 'Deep Google integration', 'Excellent reasoning'],
      vi: ['Phản hồi nhanh', 'Tích hợp sâu với Google', 'Khả năng lập luận xuất sắc']
    },
    cons: {
      en: ['Occasional hallucinations', 'Advanced features require subscription'],
      vi: ['Đôi khi có ảo giác', 'Tính năng nâng cao cần đăng ký thuê bao']
    },
    affiliateUrl: 'https://gemini.google.com',
    howToUse: {
      en: ['Sign in with Google', 'Enter your prompt', 'Refine results with follow-up questions'],
      vi: ['Đăng nhập bằng Google', 'Nhập yêu cầu của bạn', 'Tinh chỉnh kết quả bằng các câu hỏi tiếp theo']
    }
  },
  {
    id: 'midjourney',
    name: 'Midjourney',
    logo: 'https://picsum.photos/seed/mjlogo/200/200',
    screenshots: [
      'https://picsum.photos/seed/mj1/800/450',
      'https://picsum.photos/seed/mj2/800/450'
    ],
    category: 'image',
    rating: 4.9,
    reviewCount: 3400,
    pricing: {
      en: 'Starts at $10/mo',
      vi: 'Từ 250.000đ/tháng'
    },
    description: {
      en: 'An independent research lab exploring new mediums of thought and expanding the imaginative powers of the human species.',
      vi: 'Một phòng nghiên cứu độc lập khám phá các phương thức tư duy mới và mở rộng khả năng tưởng tượng của con người.'
    },
    features: {
      en: ['High-quality artistic generation', 'V6 Alpha model', 'Discord-based interface', 'In-painting'],
      vi: ['Tạo ảnh nghệ thuật chất lượng cao', 'Mô hình V6 Alpha', 'Giao diện dựa trên Discord', 'In-painting']
    },
    pros: {
      en: ['Unmatched artistic quality', 'Active community', 'Constant updates'],
      vi: ['Chất lượng nghệ thuật vô đối', 'Cộng đồng năng động', 'Cập nhật liên tục']
    },
    cons: {
      en: ['Discord interface can be confusing', 'No free tier anymore'],
      vi: ['Giao diện Discord có thể gây bối rối', 'Không còn gói miễn phí']
    },
    affiliateUrl: 'https://midjourney.com',
    howToUse: {
      en: ['Join Discord', 'Use /imagine command', 'Upscale or vary your favorite results'],
      vi: ['Tham gia Discord', 'Sử dụng lệnh /imagine', 'Phóng to hoặc tạo biến thể cho kết quả yêu thích']
    }
  },
  {
    id: 'runway',
    name: 'Runway Gen-3',
    logo: 'https://picsum.photos/seed/runwaylogo/200/200',
    screenshots: [
      'https://picsum.photos/seed/runway1/800/450',
      'https://picsum.photos/seed/runway2/800/450'
    ],
    category: 'video',
    rating: 4.7,
    reviewCount: 890,
    pricing: {
      en: 'Free / $12/mo (Standard)',
      vi: 'Miễn phí / 300.000đ/tháng (Standard)'
    },
    description: {
      en: 'Advancing creativity with artificial intelligence. Generate videos from text or images.',
      vi: 'Thúc đẩy sự sáng tạo với trí tuệ nhân tạo. Tạo video từ văn bản hoặc hình ảnh.'
    },
    features: {
      en: ['Text-to-Video', 'Image-to-Video', 'Motion Brush', 'Director Mode'],
      vi: ['Văn bản sang Video', 'Hình ảnh sang Video', 'Motion Brush', 'Chế độ Đạo diễn']
    },
    pros: {
      en: ['Cinematic quality', 'Powerful editing tools', 'Fast generation'],
      vi: ['Chất lượng điện ảnh', 'Công cụ chỉnh sửa mạnh mẽ', 'Tạo video nhanh']
    },
    cons: {
      en: ['Steep learning curve', 'High credit consumption'],
      vi: ['Khó học cho người mới', 'Tốn nhiều credit']
    },
    affiliateUrl: 'https://runwayml.com',
    howToUse: {
      en: ['Upload an image or write a prompt', 'Adjust motion settings', 'Generate and download'],
      vi: ['Tải ảnh lên hoặc viết yêu cầu', 'Điều chỉnh cài đặt chuyển động', 'Tạo và tải về']
    }
  },
  {
    id: 'cursor',
    name: 'Cursor',
    logo: 'https://picsum.photos/seed/cursorlogo/200/200',
    screenshots: [
      'https://picsum.photos/seed/cursor1/800/450',
      'https://picsum.photos/seed/cursor2/800/450'
    ],
    category: 'coding',
    rating: 4.9,
    reviewCount: 2100,
    pricing: {
      en: 'Free / $20/mo (Pro)',
      vi: 'Miễn phí / 500.000đ/tháng (Pro)'
    },
    description: {
      en: 'The AI-first code editor. Built on VS Code, optimized for pair programming with AI.',
      vi: 'Trình soạn thảo mã nguồn ưu tiên AI. Xây dựng trên VS Code, tối ưu hóa cho lập trình cặp với AI.'
    },
    features: {
      en: ['AI Chat', 'Codebase Indexing', 'Auto-fix errors', 'Predictive editing'],
      vi: ['Chat với AI', 'Lập chỉ mục mã nguồn', 'Tự động sửa lỗi', 'Chỉnh sửa dự đoán']
    },
    pros: {
      en: ['Seamless VS Code migration', 'Context-aware suggestions', 'Massive productivity boost'],
      vi: ['Chuyển đổi mượt mà từ VS Code', 'Gợi ý theo ngữ cảnh', 'Tăng năng suất đáng kể']
    },
    cons: {
      en: ['Requires subscription for best models', 'Privacy concerns for some'],
      vi: ['Cần đăng ký cho các mô hình tốt nhất', 'Lo ngại về quyền riêng tư đối với một số người']
    },
    affiliateUrl: 'https://cursor.com',
    howToUse: {
      en: ['Install Cursor', 'Import VS Code extensions', 'Press Cmd+K to edit or Cmd+L to chat'],
      vi: ['Cài đặt Cursor', 'Nhập các tiện ích mở rộng VS Code', 'Nhấn Cmd+K để sửa hoặc Cmd+L để chat']
    }
  }
];
