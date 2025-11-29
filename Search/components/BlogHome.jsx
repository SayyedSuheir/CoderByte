import React,{useState} from 'react'
import {useDebounce} from 'react-use'
import TextSearch from './TextSearch'

function BlogHome() {
    const posts = [
  {
    id: 1,
    title: "The Rise of AI Assistants",
    date: "2025-01-01",
    body: "AI assistants are quickly becoming part of everyday workflows for developers, writers, and marketers. Tools powered by large language models now support coding, research, documentation, and business communication at scale."
  },
  {
    id: 2,
    title: "JavaScript Trends in 2025",
    date: "2025-01-02",
    body: "Modern JavaScript development is shifting toward server components, lightweight frameworks, and edge-first rendering. Performance optimization and developer experience remain top priorities."
  },
  {
    id: 3,
    title: "What Is Edge Computing?",
    date: "2025-01-03",
    body: "Edge computing processes data closer to the source instead of centralized servers. This reduces latency and improves real-time reactions for IoT devices and streaming platforms."
  },
  {
    id: 4,
    title: "Cybersecurity Basics",
    date: "2025-01-04",
    body: "Strong passwords, two-factor authentication, and routine software updates are still core security practices. Awareness training helps teams identify phishing threats."
  },
  {
    id: 5,
    title: "The Future of Web Design",
    date: "2025-01-05",
    body: "Design trends now prioritize accessibility, speed, and usability. Clean layouts and adaptive animations improve user engagement across devices."
  },
  {
    id: 6,
    title: "Understanding APIs",
    date: "2025-01-06",
    body: "APIs connect modern software systems by exchanging data securely and efficiently. They power integrations across payments, social networks, and cloud services."
  },
  {
    id: 7,
    title: "React vs Vue",
    date: "2025-01-07",
    body: "React offers a mature ecosystem for large projects, while Vue focuses on simplicity and progressive adoption. Both encourage component-based UI development."
  },
  {
    id: 8,
    title: "Cloud Computing Explained",
    date: "2025-01-08",
    body: "Cloud platforms deliver on-demand infrastructure without physical servers. Teams scale applications rapidly using managed services."
  },
  {
    id: 9,
    title: "Introduction to Docker",
    date: "2025-01-09",
    body: "Docker containers bundle apps with dependencies into isolated environments. This ensures consistent behavior from development to production."
  },
  {
    id: 10,
    title: "Why DevOps Matters",
    date: "2025-01-10",
    body: "DevOps encourages collaboration and automation to speed delivery cycles while improving software stability."
  },

  // ---- 11–20 ----
  {
    id: 11,
    title: "AI in Healthcare",
    date: "2025-01-11",
    body: "AI systems help interpret imaging scans, monitor patient data, and suggest treatment options, enhancing healthcare accuracy."
  },
  {
    id: 12,
    title: "5G Technology",
    date: "2025-01-12",
    body: "5G offers ultra-fast connectivity that supports real-time gaming, self-driving vehicles, and remote medical procedures."
  },
  {
    id: 13,
    title: "Blockchain Beyond Crypto",
    date: "2025-01-13",
    body: "Industries use blockchain for verifying supply chains, managing records, and securing digital identities beyond cryptocurrencies."
  },
  {
    id: 14,
    title: "Web Performance Tips",
    date: "2025-01-14",
    body: "Optimizing images, reducing bundle sizes, and caching assets drastically improve page speed and SEO rankings."
  },
  {
    id: 15,
    title: "Data Analytics 101",
    date: "2025-01-15",
    body: "Analytics tools visualize trends that guide marketing strategies, customer engagement, and business decisions."
  },
  {
    id: 16,
    title: "Open Source Culture",
    date: "2025-01-16",
    body: "Global collaboration around shared licenses fuels innovation and keeps software development transparent."
  },
  {
    id: 17,
    title: "Machine Learning Basics",
    date: "2025-01-17",
    body: "ML models learn from data samples to predict outcomes and classify content with increasing accuracy."
  },
  {
    id: 18,
    title: "Introduction to TypeScript",
    date: "2025-01-18",
    body: "Type safety prevents runtime errors and improves IDE tooling when building large JavaScript applications."
  },
  {
    id: 19,
    title: "The Growth of No-Code",
    date: "2025-01-19",
    body: "Visual app builders empower non-developers to create landing pages, forms, and dashboards rapidly."
  },
  {
    id: 20,
    title: "IoT in Smart Homes",
    date: "2025-01-20",
    body: "Connected devices automate lighting, climate control, and safety systems for modern smart homes."
  },

  // ---- 21–40 ----
  {
    id: 21,
    title: "Web Security Essentials",
    date: "2025-01-21",
    body: "HTTPS encryption and strong authentication guard sites from common exploits like man-in-the-middle attacks."
  },
  {
    id: 22,
    title: "Big Data Systems",
    date: "2025-01-22",
    body: "Distributed platforms like Hadoop and Spark manage massive datasets for analytics workloads."
  },
  {
    id: 23,
    title: "VR for Education",
    date: "2025-01-23",
    body: "Students learn through immersive simulations such as science labs or historical reconstructions."
  },
  {
    id: 24,
    title: "AI Ethics",
    date: "2025-01-24",
    body: "Responsible AI design ensures fairness, transparency, and respect for privacy protections."
  },
  {
    id: 25,
    title: "Serverless Architecture",
    date: "2025-01-25",
    body: "Backend functions scale automatically without infrastructure management concerns."
  },
  {
    id: 26,
    title: "SEO for Developers",
    date: "2025-01-26",
    body: "Semantic HTML improves page indexing and discoverability across search platforms."
  },
  {
    id: 27,
    title: "Mobile App Trends",
    date: "2025-01-27",
    body: "Cross-platform frameworks continue reducing development time for mobile projects."
  },
  {
    id: 28,
    title: "Game Development Engines",
    date: "2025-01-28",
    body: "Unreal and Unity provide real-time rendering tools for both indie and AAA games."
  },
  {
    id: 29,
    title: "Wearable Technology",
    date: "2025-01-29",
    body: "Smart watches track fitness metrics and integrate with health analytics platforms."
  },
  {
    id: 30,
    title: "Data Privacy Laws",
    date: "2025-01-30",
    body: "International regulations require transparency over how user data is collected and stored."
  },

  // ---- 31–60 ----
  {
    id: 31,
    title: "GraphQL Explained",
    date: "2025-01-31",
    body: "GraphQL eliminates unnecessary data transfers by letting clients specify exactly what they need."
  },
  {
    id: 32,
    title: "Password Managers",
    date: "2025-02-01",
    body: "Secure vaults generate and store unique passwords for safer authentication practices."
  },
  {
    id: 33,
    title: "AI Code Review",
    date: "2025-02-02",
    body: "Automated scanners detect vulnerabilities in pull requests before production releases."
  },
  {
    id: 34,
    title: "Cloud Cost Optimization",
    date: "2025-02-03",
    body: "Tracking idle servers and unused storage keeps cloud budgets under control."
  },
  {
    id: 35,
    title: "Quantum Computing",
    date: "2025-02-04",
    body: "Quantum machines promise unprecedented computational capabilities while still remaining experimental."
  },
  {
    id: 36,
    title: "Microservices",
    date: "2025-02-05",
    body: "Decoupled services improve update speed but require careful orchestration."
  },
  {
    id: 37,
    title: "Web Accessibility",
    date: "2025-02-06",
    body: "Keyboard navigation and screen reader support create universal web experiences."
  },
  {
    id: 38,
    title: "Business Chatbots",
    date: "2025-02-07",
    body: "Support bots handle routine customer inquiries around the clock."
  },
  {
    id: 39,
    title: "Continuous Integration",
    date: "2025-02-08",
    body: "Automated pipelines catch errors early through regular builds and tests."
  },
  {
    id: 40,
    title: "Drones in Logistics",
    date: "2025-02-09",
    body: "Autonomous deliveries promise faster shipping for small packages."
  },

  
    ];
        

    const [searchedText,setSearchedText] = useState("");
    const [debouncedSearchedTerm,setDebounceSearchedTerm] = useState("");

    useDebounce(
        () => setDebounceSearchedTerm(searchedText),
         500, 
         [searchedText]);

      const passRegExp = (text) => 
            text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    // Filter posts by whole word match
    const filteredPosts = debouncedSearchedTerm
            ? posts.filter(post => {
                const stext = passRegExp(debouncedSearchedTerm);
                const regex = new RegExp(`\\b${stext}\\b`, "i"); // whole word, case-insensitive
                return regex.test(post.title) || regex.test(post.body);
                })
            : posts;

       
        const markText = (text) => {
            if(!debouncedSearchedTerm) return text;

            
            const stext = passRegExp(debouncedSearchedTerm);
            const regex = new RegExp(`\\b(${stext})\\b`, "gi");
            document.getElementById("post-number").style.display = "flex";
            return text.split(regex).map((part, index) =>
            part.toLowerCase() === debouncedSearchedTerm.toLowerCase()
            ? <span key={index} className='mark-up'>{part}</span> : part

           
    );
     
    };
  return (
    <div>
        <TextSearch value={searchedText} onChange={setSearchedText}/>
        <div className='posts-section'>
         <div id='post-number'>
          <label> { filteredPosts.length > 1 ? filteredPosts.length + " posts found" : filteredPosts.length + " post found"} </label>  
        </div>
        { filteredPosts.map(post =>( 
        <div key={post.id}>
          
            <h3 className='post-title'>{markText(post.title)}</h3>
            <h5 className='post-date'>{post.date}</h5>
            <p className='post-body'>{markText(post.body)}</p>

        </div>
        ))} 
        </div>
    </div>
  )
}

export default BlogHome