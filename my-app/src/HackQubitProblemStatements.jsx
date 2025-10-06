import React, { useState, useEffect } from "react";
import "./HackQubitProblemStatements.css";
import TypewriterText from "./TypewriterText";
import ClubHeader from "./ClubHeader";

const categories = [
  { id: "ai", name: "AI / ML", emoji: "🤖" },
  { id: "web3", name: "Web3 & Digital Governance", emoji: "🌐" },
  { id: "clinic", name: "Streamlined Clinic Growth", emoji: "🧠" },
  { id: "cyber", name: "Cybersecurity & Digital Identity", emoji: "🛡️" },
  { id: "edtech", name: "EdTech & Smart Campus", emoji: "🎓" },
  { id: "safety", name: "Public Safety & Welfare", emoji: "🚨" },
  { id: "healthcare", name: "Healthcare & Wellness", emoji: "👨‍⚕️" },
];

const problemStatements = {
  ai: [
    {
      title: "Predictive Crop Intelligence",
      context:
        "Farmers face increasing difficulty predicting crop yield and detecting diseases due to changing weather patterns, pests, and soil variability. Traditional methods are slow, reactive, and often result in significant losses.",
      challenge: [
        "⚡ Leverage IoT sensors to collect real-time data on soil, weather, and crop health.",
        "⚡ Use satellite imagery to monitor large-scale crop patterns and anomalies.",
        "⚡ Apply machine learning models to forecast crop yield accurately and detect early signs of disease.",
      ],
      goals: [
        "🎯 Empower farmers with actionable insights for timely interventions.",
        "🎯 Reduce crop losses and optimize resource usage.",
        "🎯 Enhance food security by improving yield predictability.",
      ],
      techStack: [
        "♦ Python",
        "♦ TensorFlow/PyTorch",
        "♦ IoT Sensors",
        "♦ Satellite Imagery APIs",
      ],
    },
    {
      title: "AI Traffic Flow Optimization",
      context:
        "Cities are plagued by traffic congestion, causing delays, higher fuel consumption, and increased emissions. Current traffic signal systems are static and cannot adapt to real-time traffic changes.",
      challenge: [
        "⚡ Collect live traffic data from cameras, sensors, and GPS devices.",
        "⚡ Develop a dynamic machine learning model that adjusts traffic signals in real-time.",
        "⚡ Simulate and validate traffic optimization strategies to reduce congestion.",
      ],
      goals: [
        "🎯 Enhance city mobility and reduce commute times.",
        "🎯 Decrease vehicle emissions and fuel consumption.",
        "🎯 Improve overall urban quality of life.",
      ],
      techStack: ["♦ Python", "♦ TensorFlow", "♦ OpenCV", "♦ IoT Sensors", "♦ Traffic APIs"],
    },
  ],
  web3: [
    {
      title: "Blockchain-based Land Registry",
      context:
        "Property ownership records are often fragmented, vulnerable to fraud, and hard to verify. Paper-based systems are slow and prone to tampering.",
      challenge: [
        "⚡ Design a decentralized blockchain platform for secure storage of property records.",
        "⚡ Ensure immutability and tamper-proof verification of ownership.",
        "⚡ Enable public access to verify property records easily.",
      ],
      goals: [
        "🎯 Ensure transparency in property transactions.",
        "🎯 Prevent fraud and tampering of ownership records.",
        "🎯 Simplify and accelerate property verification processes.",
      ],
      techStack: ["♦ Solidity", "♦ Ethereum", "♦ Smart Contracts", "♦ IPFS", "♦ Web3.js"],
    },
    {
      title: "Decentralized Voting Platform",
      context:
        "Current digital voting systems can be vulnerable to manipulation, lack transparency, and reduce trust in electoral outcomes.",
      challenge: [
        "⚡ Develop a blockchain-based voting system to secure votes.",
        "⚡ Ensure transparency and verifiability of each vote.",
        "⚡ Protect against tampering and unauthorized access.",
      ],
      goals: [
        "🎯 Increase voter trust in the electoral process.",
        "🎯 Enhance transparency of elections.",
        "🎯 Provide secure, verifiable, and tamper-proof voting.",
      ],
      techStack: ["♦ Solidity", "♦ Ethereum", "♦ Smart Contracts", "♦ React", "♦ Web3.js"],
    },
  ],
  clinic: [
    {
      title: "Clinic Lead-to-Booking Micro-App — Presented by Izzki Tech",
      context:
        "Clinics receive large volumes of Facebook leads, but converting those leads into confirmed patient appointments is inefficient and inconsistent. Manual follow-ups often cause delays, missed opportunities, and loss of potential clients. A fast, automated, and insight-driven solution is needed to improve lead conversion efficiency and demonstrate measurable business growth within 30 days.",
      challenge: [
        "⚡ Develop an AI-driven micro-app that converts Facebook leads into booked clinic appointments in one screen.",
        "⚡ Auto-generate a Weekly Growth Brief summarizing performance insights.",
        "⚡ Import and clean leads.csv (deduplication, consent filtering, source normalization).",
        "⚡ Build a landing + one-screen booking flow that writes confirmed bookings to the database.",
        "⚡ On booking confirmation, send a simulated API call (POST /sendMessage payload to console).",
        "⚡ Automatically generate a Weekly Growth Brief (HTML/PDF) summarizing key KPIs, uplift vs. baseline, and 3 suggested next actions.",
      ],
      goals: [
        "🎯 Simplify and automate clinic lead-to-appointment conversions.",
        "🎯 Demonstrate measurable growth and efficiency improvements within 30 days.",
        "🎯 Provide actionable insights to clinic management through AI-generated reports.",
        "🎯 Prepare the winning prototype for real-world pilot deployment.",
      ],
      techStack: [
        "♦ Frontend: React / Next.js",
        "♦ Backend: Node.js / Express",
        "♦ Database: MongoDB / PostgreSQL",
        "♦ AI Components: Python, Pandas (for data cleaning), simple ML scoring (optional)",
        "♦ Automation: REST API integration, Scheduler for Weekly Reports",
        "♦ Reports: HTML/PDF generator libraries (e.g., jsPDF / Puppeteer)",
      ],
      result: [
        "🚀 The winning team receives ₹5,000 cash + 2-week productization support (value ₹10,000).",
        "🚀 During this 2-week phase, the app will undergo expert code review, security & consent compliance check, deployment script creation, and clinic-ready demo dataset integration.",
        "🚀 Final outcome: a clinic-pilot-ready AI micro-app.",
        "🚀 IP remains with the team, with Izzki Tech retaining showcase rights.",
      ],
    },
  ],
  cyber: [
    {
      title: "Digital Identity Vault",
      context:
        "Citizens’ digital identities are scattered across multiple online platforms, creating risks of breaches, identity theft, and difficulty accessing services.",
      challenge: [
        "⚡ Design a unified identity management system for secure storage of digital identities.",
        "⚡ Ensure privacy-first access controls for user data.",
        "⚡ Enable controlled verification across multiple platforms.",
      ],
      goals: [
        "🎯 Strengthen digital trust and security.",
        "🎯 Simplify authentication processes across services.",
        "🎯 Protect sensitive personal data from misuse or breaches.",
      ],
      techStack: ["♦ Node.js", "♦ MongoDB", "♦ JWT", "♦ OAuth 2.0", "♦ Blockchain"],
    },
    {
      title: "AI Threat Detection",
      context:
        "Organizations face increasing cyber threats from sophisticated malware, phishing, and ransomware attacks.",
      challenge: [
        "⚡ Develop AI models to detect cybersecurity threats in real-time.",
        "⚡ Integrate threat detection with organizational IT systems.",
        "⚡ Respond automatically to potential security breaches.",
      ],
      goals: [
        "🎯 Minimize cyberattacks and data breaches.",
        "🎯 Enhance organizational resilience against evolving threats.",
        "🎯 Protect sensitive corporate and customer data.",
      ],
      techStack: ["♦ Python", "♦ TensorFlow", "♦ OpenAI GPT", "♦ SIEM tools", "♦ Network APIs"],
    },
  ],
  edtech: [
    {
      title: "Smart Campus Insights",
      context:
        "Universities often lack real-time insights into classroom utilization, student engagement, and campus movement patterns, leading to inefficient management and safety concerns.",
      challenge: [
        "⚡ Deploy IoT sensors to monitor classroom occupancy and campus movement.",
        "⚡ Analyze engagement patterns while respecting privacy.",
        "⚡ Build a dashboard to visualize real-time campus insights.",
      ],
      goals: [
        "🎯 Optimize use of campus resources and spaces.",
        "🎯 Enhance student safety and engagement.",
        "🎯 Support a connected learning environment.",
      ],
      techStack: ["♦ IoT Sensors", "♦ Node.js", "♦ React", "♦ Firebase", "♦ Data Analytics"],
    },
    {
      title: "AI Tutoring Assistant",
      context:
        "Students often struggle to get timely assistance, and teachers cannot provide personalized attention to each student.",
      challenge: [
        "⚡ Develop an AI system to provide personalized tutoring support.",
        "⚡ Track student performance and adapt learning content accordingly.",
        "⚡ Integrate with teacher workflows for enhanced guidance.",
      ],
      goals: [
        "🎯 Improve learning outcomes for students.",
        "🎯 Assist teachers in providing personalized attention.",
        "🎯 Enhance overall student engagement.",
      ],
      techStack: ["♦ Python", "♦ TensorFlow", "♦ React", "♦ NLP APIs", "♦ Firebase"],
    },
  ],
  safety: [
    {
      title: "AI-Powered Emergency Detection",
      context:
        "Emergency incidents such as accidents, fires, or natural disasters often go undetected until it’s too late, causing delays in response and increased casualties.",
      challenge: [
        "⚡ Implement computer vision to detect emergencies from CCTV, drones, or sensors.",
        "⚡ Trigger instant alerts to authorities in real-time.",
        "⚡ Minimize false positives while ensuring timely detection.",
      ],
      goals: [
        "🎯 Reduce emergency response times.",
        "🎯 Enhance public safety and preparedness.",
        "🎯 Minimize damage and loss of life during emergencies.",
      ],
      techStack: ["♦ Python", "♦ OpenCV", "♦ TensorFlow", "♦ IoT Sensors", "♦ Drones"],
    },
    {
      title: "Smart Disaster Response",
      context:
        "Disaster management teams lack real-time insights into affected areas, making rescue operations slower and less efficient.",
      challenge: [
        "⚡ Collect real-time disaster data using AI and IoT sensors.",
        "⚡ Map affected zones for better resource allocation.",
        "⚡ Optimize rescue and relief operations based on live insights.",
      ],
      goals: [
        "🎯 Accelerate disaster response efforts.",
        "🎯 Save lives and reduce property damage.",
        "🎯 Improve coordination among disaster management teams.",
      ],
      techStack: ["♦ Python", "♦ TensorFlow", "♦ GIS APIs", "♦ IoT Sensors", "♦ Node.js"],
    },
  ],
  healthcare: [
    {
      title: "Detection of Blood Vessel Blockages",
      context:
        "Develop an alternative to traditional, invasive angiography that is non-invasive, cost-effective, and uses AI-driven image analysis with techniques like ultrasound or infrared light.",
      challenge: [
        "⚡ Design AI-driven analysis for non-invasive imaging data.",
        "⚡ Detect blood vessel blockages early and accurately.",
        "⚡ Validate results against traditional diagnostic methods.",
      ],
      goals: [
        "🎯 Enhance early diagnosis and intervention.",
        "🎯 Reduce patient risk and procedure costs.",
        "🎯 Make vascular health monitoring more accessible.",
      ],
      techStack: ["♦ Python", "♦ TensorFlow/Keras", "♦ OpenCV", "♦ Ultrasound/Infrared Imaging", "♦ AI Algorithms"],
    },
    {
      title: "Unified Health Data Information Management System",
      context:
        "Create a centralized platform to manage healthcare data, preventing misuse of government schemes, ensuring proper utilization, and providing the government with a comprehensive view of healthcare operations.",
      challenge: [
        "⚡ Integrate healthcare data from multiple sources securely.",
        "⚡ Analyze and monitor utilization for transparency and efficiency.",
        "⚡ Ensure compliance with privacy regulations and secure access.",
      ],
      goals: [
        "🎯 Improve allocation of healthcare resources.",
        "🎯 Support policy-making with real-time data insights.",
        "🎯 Prevent misuse of government healthcare schemes.",
      ],
      techStack: ["♦ React", "♦ Node.js", "♦ MongoDB/PostgreSQL", "♦ Blockchain (optional)", "♦ Data Analytics"],
    },
  ],
};

export default function HackQubitProblemStatements() {
  const [active, setActive] = useState("ai");
  const [expandedCards, setExpandedCards] = useState({});

  useEffect(() => {
    const handleContextMenu = (e) => e.preventDefault();
    document.addEventListener("contextmenu", handleContextMenu);
    return () => document.removeEventListener("contextmenu", handleContextMenu);
  }, []);

  const handleScroll = (id) => {
    setActive(id);
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  const toggleCard = (catId, index) => {
    setExpandedCards((prev) => ({
      ...prev,
      [`${catId}-${index}`]: !prev[`${catId}-${index}`],
    }));
  };

  return (
    <div className="hackqubit-container min-h-screen bg-gradient-to-b from-black via-gray-950 to-black text-white font-sans">
      <ClubHeader/>
      <h1 className="text-center text-5xl font-extrabold mt-16 tracking-wide f1-heading text-red-500">
        HackQubit — Problem Statements
      </h1>

      <section className="text-center mt-8 px-6 max-w-3xl mx-auto hero-text">
        <p className="text-gray-300 text-lg leading-relaxed">
          Uncover the challenges and turn your ideas into impactful solutions.
        </p>
        <p className="italic text-red-500 mt-3 text-2xl font-bold">
          <TypewriterText
            texts={["Fast minds.", "Bold ideas.", "Real impact."]}
            typingSpeed={120}
            pause={800}
          />
        </p>
      </section>

      <div className="category-container mt-14">
        <div className="category-buttons no-select">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleScroll(cat.id)}
              className={`category-button ${
                active === cat.id ? "active" : ""
              } transition-all duration-300`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      <div className="sections-container mt-20 px-6 max-w-6xl mx-auto">
        {categories.map((cat) => (
          <section
            key={cat.id}
            id={cat.id}
            className="category-section mb-20 p-8 rounded-3xl bg-gray-900/70 border border-gray-800 shadow-lg hover:shadow-red-900/20 transition-all duration-300"
          >
            <h2 className="text-3xl font-bold text-center mb-10 text-red-400 border-b border-gray-700 inline-block pb-2">
              {cat.emoji} {cat.name}
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {problemStatements[cat.id]?.map((ps, index) => {
                const isExpanded = expandedCards[`${cat.id}-${index}`];
                return (
                  <div
                    key={index}
                    className="problem-card no-select p-6 rounded-2xl bg-gray-950/80 border border-gray-800 hover:border-red-500 transition-all duration-300 cursor-pointer"
                    onClick={() => toggleCard(cat.id, index)}
                  >
                    <h3 className="text-xl font-semibold text-red-400 mb-3">
                      {ps.title}
                    </h3>

                    {isExpanded && (
                      <div className="mt-4 space-y-6">
                        <div className="ml-2">
                          <p className="heading-text mb-2">🏎️ Context:</p>
                          <p className="text-gray-300">{ps.context}</p>
                        </div>

                        <div className="ml-2">
                          <p className="heading-text mb-2">⏱️ Challenge:</p>
                          <div className="text-gray-300 space-y-2">
                            {ps.challenge.map((item, idx) => (
                              <p key={idx} className="ml-4">{item}</p>
                            ))}
                          </div>
                        </div>

                        <div className="ml-2">
                          <p className="heading-text mb-2">🏁 Goals:</p>
                          <div className="text-gray-300 space-y-2">
                            {ps.goals.map((item, idx) => (
                              <p key={idx} className="ml-4">{item}</p>
                            ))}
                          </div>
                        </div>

                        {ps.result && (
                          <div className="ml-2">
                            <p className="heading-text mb-2">🎯 Result:</p>
                            <div className="text-gray-300 space-y-2">
                              {ps.result.map((item, idx) => (
                                <p key={idx} className="ml-4">{item}</p>
                              ))}
                            </div>
                          </div>
                        )}

                        <div className="ml-2">
                          <p className="heading-text mb-2">💻 Tech Stack:</p>
                          <div className="text-gray-300 space-y-1">
                            {ps.techStack.map((item, idx) => (
                              <p key={idx} className="ml-4">{item}</p>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {!isExpanded && (
                      <p className="text-gray-400 mt-2 italic text-sm">
                        Click to expand & view details
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        ))}
        <footer className="footer-container">
          <p>© HackQubit 2K25 | RVSCET</p>
        </footer>
      </div>
    </div>
  );
}
