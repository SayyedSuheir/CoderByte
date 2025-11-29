import React,{useState,useRef} from 'react'
import {useDebounce} from 'react-use'
import TextSearch from './TextSearch'
import { Card, Button } from 'react-bootstrap';

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
           
            return text.split(regex).map((part, index) =>
            part.toLowerCase() === debouncedSearchedTerm.toLowerCase()
            ? <span key={index} className='mark-up'>{part}</span> : part

           
    );
     
    };
    const showNotification = debouncedSearchedTerm.length > 0;

    function handleEmpty(){
     
     
      if(filteredPosts.length === 0){
         
        return  " Post not found";
      }
      
      if(filteredPosts.length > 1){
        
        return filteredPosts.length + " Posts found"
      }
      else{
         
        return filteredPosts.length + " Post found"
      }
      
    }
  return (
    <div className='main'>
      <header>
        <div className='search-section'>
          <TextSearch value={searchedText} onChange={setSearchedText}/>
        </div>
        <div className='search-card'>
          <Card >
            <Card.Body>
              <Card.Title>CoderByte</Card.Title>
              
              <Card.Text>
                is an online platform used to practice coding, prepare for technical interviews, and assess programming skills.
              </Card.Text>
              <div className='card-footer'>
                <div className='x-link'>
                  <Card.Link href="https://x.com/coderbyte">
                  <Button className='links'>
                    <svg xmlns="http://www.w3.org/2000/svg" display="block" role="presentation" viewBox="0 0 20 20">
                      <defs>
                        <linearGradient id="P94mHTZeM-1895101284-linear-gradient" x1="0" x2="1" y1="0.4975124378109453" y2="0.5024875621890547">
                        <stop offset="0" stop-color="rgb(46, 209, 166)"/>
                        <stop offset="0.4964946557866911" stop-color="rgb(32, 122, 249)"/>
                        <stop offset="1" stop-color="rgb(128, 0, 255)"/>
                        </linearGradient>
                      </defs>
                      <path d="M 15.575 0.001 L 10.579 5.712 L 6.259 0.001 L 0 0.001 L 7.477 9.777 L 0.391 17.875 L 3.425 17.875 L 8.894 11.627 L 13.674 17.875 L 19.775 17.875 L 11.982 7.572 L 18.607 0 L 15.574 0 Z M 14.511 16.061 L 3.542 1.72 L 5.345 1.72 L 16.191 16.06 L 14.511 16.06 Z" 
                      fill="url(#P94mHTZeM-1895101284-linear-gradient)"
                      height="15px" id="P94mHTZeM" transform="translate(0 1)" width="15px"
                      />
                      X link
                    </svg>
                    
                  </Button>
                  </Card.Link>
                </div>
                <div className='linkedin-link'>
                  <Card.Link href="https://www.linkedin.com/company/coderbyte/">
                    <Button className='links'>
                      <svg xmlns="http://www.w3.org/2000/svg" display="block" role="presentation" viewBox="0 0 20 20" >
                      <defs><linearGradient id="SfCFwPjtW-2411860657-linear-gradient" x1="0" x2="1" y1="0.4975124378109453" y2="0.5024875621890547">
                      <stop offset="0" stop-color="rgb(46, 209, 166)"/>
                      <stop offset="0.4739935247747748" stop-color="rgb(32, 122, 249)"/>
                      <stop offset="1" stop-color="rgb(128, 0, 255)"/></linearGradient>
                      </defs>
                      <path
                      d="M 15.336 15.339 L 12.671 15.339 L 12.671 11.162 C 12.671 10.166 12.651 8.884 11.281 8.884 C 9.892 8.884 9.68 9.968 9.68 11.089 L 9.68 15.339 L 7.014 15.339 L 7.014 6.75 L 9.574 6.75 L 9.574 7.92 L 9.609 7.92 C 9.967 7.246 10.837 6.533 12.137 6.533 C 14.837 6.533 15.337 8.311 15.337 10.624 L 15.337 15.339 Z M 4.004 5.575 C 3.593 5.576 3.199 5.412 2.908 5.122 C 2.618 4.831 2.455 4.437 2.456 4.026 C 2.457 3.171 3.15 2.478 4.005 2.479 C 4.86 2.48 5.553 3.173 5.552 4.028 C 5.551 4.883 4.858 5.576 4.003 5.575 Z M 5.34 15.339 L 2.667 15.339 L 2.667 6.75 L 5.34 6.75 Z M 16.67 0 L 1.33 0 C 0.594 0 0 0.58 0 1.297 L 0 16.703 C 0 17.42 0.594 18 1.328 18 L 16.667 18 C 17.4 18 18 17.42 18 16.703 L 18 1.297 C 18 0.581 17.4 0 16.666 0 L 16.669 0 Z" 
                      fill="url(#SfCFwPjtW-2411860657-linear-gradient)"
                        height="15px" id="SfCFwPjtW" transform="translate(1 1)" width="15px"
                        />
                        LinkedIn link
                      </svg>
                      
                    </Button>
                  </Card.Link>
                </div>
              </div>
            </Card.Body>
          </Card>
         
        </div>  

        
      </header>

        <div className='posts-section'>
        {showNotification && (
            <div className='post-number'>
              <label>
                {handleEmpty()}
                
              </label>  

            </div>
        )}
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