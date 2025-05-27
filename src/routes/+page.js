/** @type {import('./$types').PageLoad} */
export function load() {
  const posts = [
    {
      slug: 'future-web-development',
      title: "The Future of Web Development",
      excerpt: "Exploring the latest trends and technologies shaping the web development landscape in 2025.",
      content: `<p>Web development continues to evolve at a rapid pace. From AI-powered development tools to new frameworks that prioritize performance and developer experience, the industry is experiencing unprecedented innovation.</p>
                <p>This comprehensive guide explores the key trends every developer should know about modern web development.</p>`,
      author: "Sarah Chen",
      date: "2025-05-20",
      readTime: "8 min read",
      category: "Technology",
      tags: ["Web Dev", "JavaScript", "AI"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop&auto=format",
      imageHeight: 400
    },
    {
      slug: 'quick-css-tips',
      title: "Quick CSS Tips",
      excerpt: "Essential CSS tricks every developer should know.",
      content: `<p>Short and sweet CSS tips that will improve your styling workflow immediately.</p>
                <p>Master flexbox, grid, and modern CSS properties with these practical examples.</p>`,
      author: "Mike Rodriguez",
      date: "2025-05-18",
      readTime: "3 min read",
      category: "CSS",
      tags: ["CSS", "Tips"],
      image: "https://images.unsplash.com/photo-1523437113738-bbd3cc89fb19?w=600&h=300&fit=crop&auto=format",
      imageHeight: 300
    },
    {
      slug: 'scalable-react-apps',
      title: "Building Scalable React Applications",
      excerpt: "Learn how to architect React applications that can grow with your business needs.",
      content: `<p>Creating scalable React applications requires careful planning and architectural decisions from the start.</p>
                <p>This comprehensive guide covers project structure, state management, and performance optimization.</p>
                <p>We'll explore real-world examples and best practices proven in production environments.</p>
                <p>Whether building a startup app or enterprise system, these principles help create maintainable React applications.</p>`,
      author: "Alex Thompson",
      date: "2025-05-15",
      readTime: "12 min read",
      category: "React",
      tags: ["React", "Architecture", "Performance"],
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=500&fit=crop&auto=format",
      imageHeight: 500
    },
    {
      slug: 'ai-in-design',
      title: "AI in Design",
      excerpt: "How artificial intelligence is transforming the design process.",
      content: `<p>AI tools are revolutionizing how designers work, from automated layouts to intelligent color suggestions.</p>
                <p>Discover the latest AI-powered design tools and how they're changing creative workflows.</p>`,
      author: "Emma Wilson",
      date: "2025-05-12",
      readTime: "6 min read",
      category: "Design",
      tags: ["AI", "Design", "Tools"],
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&h=350&fit=crop&auto=format",
      imageHeight: 350
    },
    {
      slug: 'code-review-best-practices',
      title: "The Art of Code Review",
      excerpt: "Master the balance of providing constructive feedback while maintaining team morale and code quality.",
      content: `<p>Code reviews are more than just catching bugs—they're opportunities for knowledge sharing, mentorship, and team building.</p>
                <p>This detailed exploration covers the psychology behind effective code reviews and practical feedback techniques.</p>
                <p>Learn how to establish a code review culture that promotes growth rather than criticism.</p>
                <p>We'll dive into common pitfalls, automation strategies, and making reviews a positive experience for everyone.</p>
                <p>From junior developers to senior architects, everyone benefits from well-structured code review processes.</p>`,
      author: "David Park",
      date: "2025-05-10",
      readTime: "10 min read",
      category: "Best Practices",
      tags: ["Code Review", "Collaboration", "Team Work"],
      image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=600&h=450&fit=crop&auto=format",
      imageHeight: 450
    },
    {
      slug: 'mobile-first-design',
      title: "Mobile First Design",
      excerpt: "Why mobile-first design matters more than ever in 2025.",
      content: `<p>With mobile traffic dominating the web, designing for mobile first isn't optional—it's essential.</p>
                <p>Learn the principles and techniques for creating responsive designs that work beautifully on every device.</p>`,
      author: "Lisa Zhang",
      date: "2025-05-08",
      readTime: "4 min read",
      category: "Mobile",
      tags: ["Mobile", "Design", "Responsive"],
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=280&fit=crop&auto=format",
      imageHeight: 280
    },
    {
      slug: 'modern-javascript-guide',
      title: "Understanding Modern JavaScript",
      excerpt: "A comprehensive journey through JavaScript's evolution from ES6 to ES2025.",
      content: `<p>JavaScript has undergone tremendous changes since ES6 introduced classes, arrow functions, and modules.</p>
                <p>This extensive guide takes you through JavaScript's evolution, explaining not just what's new, but why these features matter.</p>
                <p>We'll explore advanced concepts like optional chaining, nullish coalescing, top-level await, and the latest proposals.</p>
                <p>Each section includes practical examples and use cases to help you understand when and how to use these features effectively.</p>
                <p>From destructuring to async iterators, master the tools that are shaping modern web development.</p>
                <img src="https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=500&h=300&fit=crop&auto=format" alt="JavaScript code" />
                <p>Understanding these patterns will make you a more effective JavaScript developer and help you write cleaner, more maintainable code.</p>`,
      author: "Carlos Mendez",
      date: "2025-05-05",
      readTime: "15 min read",
      category: "JavaScript",
      tags: ["JavaScript", "ES6+", "Modern Web"],
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=600&h=550&fit=crop&auto=format",
      imageHeight: 550
    },
    {
      slug: 'docker-basics',
      title: "Docker Basics",
      excerpt: "Getting started with containerization for modern development workflows.",
      content: `<p>Learn the fundamentals of Docker and how it simplifies deployment and development workflows.</p>
                <p>From creating your first container to orchestrating complex applications, this guide covers the essentials.</p>`,
      author: "Tom Anderson",
      date: "2025-05-03",
      readTime: "7 min read",
      category: "DevOps",
      tags: ["Docker", "DevOps", "Containers"],
      image: "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=600&h=320&fit=crop&auto=format",
      imageHeight: 320
    },
    {
      slug: 'ux-psychology',
      title: "The Psychology of User Experience",
      excerpt: "Creating interfaces that feel right by understanding how users think and behave.",
      content: `<p>Great user experience design goes beyond aesthetics—it's rooted in understanding how people think, process information, and make decisions.</p>
                <p>This comprehensive exploration of UX psychology covers cognitive load theory, the psychology of color and typography, and decision-making processes.</p>
                <p>We'll examine real-world case studies from successful applications and websites, analyzing common UX patterns through a psychological lens.</p>
                <img src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=500&h=250&fit=crop&auto=format" alt="UX design wireframes" />
                <p>Topics include attention management, memory limitations, emotional design, and the subtle ways interface design influences user behavior.</p>
                <p>Learn to create more intuitive and engaging user experiences by designing with human psychology in mind.</p>`,
      author: "Dr. Rebecca Foster",
      date: "2025-05-01",
      readTime: "13 min read",
      category: "UX Design",
      tags: ["UX", "Psychology", "Design Theory"],
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=600&h=480&fit=crop&auto=format",
      imageHeight: 480
    },
    {
      slug: 'git-workflows',
      title: "Git Workflows That Work",
      excerpt: "Streamline your development process with effective Git strategies.",
      content: `<p>Master Git workflows that will improve your team's productivity and code quality.</p>
                <p>From feature branches to release management, learn the strategies that work in real-world development teams.</p>`,
      author: "Jennifer Lee",
      date: "2025-04-28",
      readTime: "5 min read",
      category: "Version Control",
      tags: ["Git", "Workflow", "Collaboration"],
      image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=600&h=360&fit=crop&auto=format",
      imageHeight: 360
    },
    {
      slug: 'web-accessibility-guide',
      title: "Web Accessibility: Building for Everyone",
      excerpt: "Creating inclusive web experiences that work for users of all abilities and assistive technologies.",
      content: `<p>Web accessibility isn't just about compliance—it's about creating digital experiences that truly serve everyone.</p>
                <p>This comprehensive guide covers the fundamentals of accessible web development, from semantic HTML and ARIA attributes to keyboard navigation.</p>
                <p>We'll explore practical implementation strategies, common accessibility pitfalls, and automated testing tools.</p>
                <p>Learn how to conduct accessibility audits, understand WCAG guidelines, and create websites that are genuinely usable by people with diverse abilities.</p>
                <img src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=500&h=300&fit=crop&auto=format" alt="Accessibility testing" />
                <p>Integration accessibility considerations into your development workflow from day one makes better products for everyone.</p>`,
      author: "Maria Gonzalez",
      date: "2025-04-25",
      readTime: "11 min read",
      category: "Accessibility",
      tags: ["A11y", "Inclusive Design", "Web Standards"],
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=420&fit=crop&auto=format",
      imageHeight: 420
    },
    {
      slug: 'quick-debug-fixes',
      title: "Quick Debug Fixes",
      excerpt: "Common web development problems and their immediate solutions.",
      content: `<p>A collection of quick solutions to everyday development challenges that every developer encounters.</p>`,
      author: "Ryan O'Connor",
      date: "2025-04-22",
      readTime: "2 min read",
      category: "Tips",
      tags: ["Quick Tips", "Debug", "Solutions"],
      image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=600&h=250&fit=crop&auto=format",
      imageHeight: 250
    },
    {
      slug: 'typescript-best-practices',
      title: "TypeScript Best Practices",
      excerpt: "Writing better TypeScript code with proven patterns and techniques.",
      content: `<p>TypeScript has become essential for large-scale JavaScript applications, but using it effectively requires understanding its nuances.</p>
                <p>This guide covers advanced TypeScript patterns, utility types, and best practices for team development.</p>
                <p>Learn how to leverage TypeScript's type system to catch bugs early and improve code maintainability.</p>
                <p>From generic constraints to conditional types, master the features that make TypeScript powerful.</p>`,
      author: "Kevin Walsh",
      date: "2025-04-20",
      readTime: "9 min read",
      category: "TypeScript",
      tags: ["TypeScript", "Best Practices", "Types"],
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=380&fit=crop&auto=format",
      imageHeight: 380
    },
    {
      slug: 'serverless-architecture',
      title: "Serverless Architecture Patterns",
      excerpt: "Building scalable applications with serverless technologies and cloud functions.",
      content: `<p>Serverless computing has revolutionized how we build and deploy applications, offering unprecedented scalability and cost efficiency.</p>
                <p>This comprehensive guide explores serverless architecture patterns, from simple functions to complex event-driven systems.</p>
                <p>We'll cover AWS Lambda, Vercel Functions, and other serverless platforms, with real-world examples and best practices.</p>
                <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&h=300&fit=crop&auto=format" alt="Cloud computing" />
                <p>Learn how to design serverless applications that scale automatically and only charge for what you use.</p>
                <p>From API gateways to database integrations, master the serverless ecosystem for modern web development.</p>`,
      author: "Amanda Kim",
      date: "2025-04-18",
      readTime: "14 min read",
      category: "Cloud",
      tags: ["Serverless", "AWS", "Architecture"],
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&h=460&fit=crop&auto=format",
      imageHeight: 460
    },
    {
      slug: 'css-grid-mastery',
      title: "CSS Grid Mastery",
      excerpt: "Advanced CSS Grid techniques for complex layouts.",
      content: `<p>CSS Grid is the most powerful layout system available in CSS, enabling complex designs that were previously impossible.</p>
                <p>Master grid areas, implicit grids, and advanced positioning techniques with practical examples.</p>`,
      author: "Sophie Turner",
      date: "2025-04-15",
      readTime: "6 min read",
      category: "CSS",
      tags: ["CSS Grid", "Layout", "Advanced"],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=290&fit=crop&auto=format",
      imageHeight: 290
    },
    {
      slug: 'api-design-principles',
      title: "RESTful API Design Principles",
      excerpt: "Creating APIs that developers love to use with clear patterns and conventions.",
      content: `<p>Good API design is crucial for developer experience and application maintainability.</p>
                <p>This guide covers REST principles, HTTP status codes, versioning strategies, and documentation best practices.</p>
                <p>Learn how to design APIs that are intuitive, consistent, and easy to integrate with.</p>
                <p>We'll explore real-world examples from popular APIs and common pitfalls to avoid.</p>
                <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=280&fit=crop&auto=format" alt="API documentation" />
                <p>From authentication patterns to error handling, build APIs that stand the test of time.</p>`,
      author: "Marcus Chen",
      date: "2025-04-12",
      readTime: "10 min read",
      category: "Backend",
      tags: ["API", "REST", "Backend"],
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop&auto=format",
      imageHeight: 400
    },
    {
      slug: 'performance-optimization',
      title: "Web Performance Optimization",
      excerpt: "Techniques for building lightning-fast web applications.",
      content: `<p>Performance optimization is critical for user experience and search engine rankings.</p>
                <p>This comprehensive guide covers everything from image optimization to code splitting and caching strategies.</p>
                <p>Learn how to measure performance with tools like Lighthouse and WebPageTest, and implement optimizations that make a real difference.</p>
                <p>We'll explore browser rendering, critical rendering path, and advanced techniques like service workers and prefetching.</p>
                <p>From bundle analysis to CDN optimization, master the tools and techniques for building fast web applications.</p>`,
      author: "Rachel Green",
      date: "2025-04-10",
      readTime: "12 min read",
      category: "Performance",
      tags: ["Performance", "Optimization", "Web Vitals"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=440&fit=crop&auto=format",
      imageHeight: 440
    },
    {
      slug: 'design-systems',
      title: "Building Design Systems",
      excerpt: "Creating consistent, scalable design languages for your applications.",
      content: `<p>Design systems provide the foundation for consistent user experiences across applications and teams.</p>
                <p>This guide covers everything from color palettes and typography to component libraries and design tokens.</p>
                <p>Learn how to build, maintain, and scale design systems that grow with your organization.</p>`,
      author: "Oliver Stone",
      date: "2025-04-08",
      readTime: "8 min read",
      category: "Design",
      tags: ["Design Systems", "UI", "Consistency"],
      image: "https://images.unsplash.com/photo-1541462608143-67571c6738dd?w=600&h=340&fit=crop&auto=format",
      imageHeight: 340
    },
    {
      slug: 'progressive-web-apps',
      title: "Progressive Web Apps in 2025",
      excerpt: "Building app-like experiences on the web with modern PWA techniques.",
      content: `<p>Progressive Web Apps combine the best of web and native applications, offering offline functionality and app-like experiences.</p>
                <p>This comprehensive guide covers service workers, web app manifests, and the latest PWA capabilities.</p>
                <p>Learn how to implement push notifications, background sync, and install prompts for a truly native-like experience.</p>
                <p>We'll explore the latest APIs and best practices for PWA development in 2025.</p>
                <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&h=300&fit=crop&auto=format" alt="Mobile app interface" />
                <p>From offline strategies to performance optimization, master the art of building Progressive Web Apps.</p>`,
      author: "Nina Patel",
      date: "2025-04-05",
      readTime: "11 min read",
      category: "PWA",
      tags: ["PWA", "Mobile", "Offline"],
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=390&fit=crop&auto=format",
      imageHeight: 390
    },
    {
      slug: 'micro-frontends',
      title: "Micro-Frontends Architecture",
      excerpt: "Scaling frontend development with independent, deployable applications.",
      content: `<p>Micro-frontends extend the microservices concept to frontend development, enabling teams to work independently on different parts of an application.</p>
                <p>This detailed exploration covers implementation strategies, communication patterns, and tooling for micro-frontend architectures.</p>
                <p>Learn when micro-frontends make sense and how to avoid common pitfalls in distributed frontend systems.</p>
                <p>We'll examine real-world case studies and implementation patterns used by major tech companies.</p>
                <p>From module federation to single-spa, explore the tools and techniques for building scalable frontend architectures.</p>`,
      author: "Diego Martinez",
      date: "2025-04-02",
      readTime: "13 min read",
      category: "Architecture",
      tags: ["Micro-frontends", "Architecture", "Scalability"],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=470&fit=crop&auto=format",
      imageHeight: 470
    }
  ];

  return {
    posts
  };
}