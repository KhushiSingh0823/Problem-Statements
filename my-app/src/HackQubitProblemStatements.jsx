import React, { useState, useEffect } from "react";
import "./HackQubitProblemStatements.css";
import TypewriterText from "./TypewriterText";

const categories = [
  { id: "ai", name: "AI / ML", emoji: "🤖" },
  { id: "web3", name: "Web3 & Digital Governance", emoji: "🌐" },
  { id: "cyber", name: "Cybersecurity & Digital Identity", emoji: "🛡️" },
  { id: "edtech", name: "EdTech & Smart Campus", emoji: "🎓" },
  { id: "safety", name: "Public Safety & Welfare", emoji: "🚨" },
  { id: "fintech", name: "FinTech & Smart Transactions", emoji: "💰" },
];

const problemStatements = {
  ai: [
    {
      title: "Predictive Crop Intelligence",
      context:
        "Farmers face increasing difficulty predicting crop yield and detecting diseases due to changing weather patterns, pests, and soil variability. Traditional methods are slow, reactive, and often result in significant losses.",
      challenge:
        "Build an AI-driven system leveraging IoT sensors, satellite imagery, and machine learning to forecast crop yield accurately and detect early signs of diseases before they spread.",
      goals:
        "Empower farmers with actionable insights, reduce crop losses, optimize resource usage, and enhance food security.",
    },
    {
      title: "AI Traffic Flow Optimization",
      context:
        "Cities are plagued by traffic congestion, causing delays, higher fuel consumption, and increased emissions. Current traffic signal systems are static and cannot adapt to real-time traffic changes.",
      challenge:
        "Develop a machine learning model that dynamically adjusts traffic signals based on live data from cameras, sensors, and GPS devices to optimize traffic flow.",
      goals:
        "Enhance city mobility, reduce commute times, decrease emissions, and improve urban quality of life.",
    },
  ],
  web3: [
    {
      title: "Blockchain-based Land Registry",
      context:
        "Property ownership records are often fragmented, vulnerable to fraud, and hard to verify. Paper-based systems are slow and prone to tampering.",
      challenge:
        "Create a decentralized blockchain platform where all property records are securely stored, immutable, and easily verifiable by the public.",
      goals:
        "Ensure transparency, prevent fraud, simplify property transactions, and enable instant ownership verification.",
    },
    {
      title: "Decentralized Voting Platform",
      context:
        "Current digital voting systems can be vulnerable to manipulation, lack transparency, and reduce trust in electoral outcomes.",
      challenge:
        "Build a blockchain-based voting platform that is transparent, verifiable, and tamper-proof.",
      goals:
        "Increase voter trust, enhance electoral transparency, and provide secure, verifiable voting processes.",
    },
  ],
  cyber: [
    {
      title: "Digital Identity Vault",
      context:
        "Citizens’ digital identities are scattered across multiple online platforms, creating risks of breaches, identity theft, and difficulty accessing services.",
      challenge:
        "Design a unified, privacy-first identity management system that secures personal data while allowing controlled and verifiable access across platforms.",
      goals:
        "Strengthen digital trust, simplify authentication, and protect sensitive personal data for safer online interactions.",
    },
    {
      title: "AI Threat Detection",
      context:
        "Organizations face increasing cyber threats from sophisticated malware, phishing, and ransomware attacks.",
      challenge:
        "Develop an AI-powered cybersecurity system that detects and responds to threats in real-time.",
      goals:
        "Minimize cyberattacks, protect sensitive data, and enhance organizational resilience.",
    },
  ],
  edtech: [
    {
      title: "Smart Campus Insights",
      context:
        "Universities often lack real-time insights into classroom utilization, student engagement, and campus movement patterns, leading to inefficient management and safety concerns.",
      challenge:
        "Build an IoT-based dashboard that monitors classroom occupancy, movement flows, and engagement levels while respecting privacy.",
      goals:
        "Optimize campus resources, enhance student safety, improve engagement, and create a connected learning environment.",
    },
    {
      title: "AI Tutoring Assistant",
      context:
        "Students often struggle to get timely assistance, and teachers cannot provide personalized attention to each student.",
      challenge:
        "Develop an AI tutoring system that provides personalized learning support based on student performance.",
      goals:
        "Improve learning outcomes, assist teachers, and enhance student engagement.",
    },
  ],
  safety: [
    {
      title: "AI-Powered Emergency Detection",
      context:
        "Emergency incidents such as accidents, fires, or natural disasters often go undetected until it’s too late, causing delays in response and increased casualties.",
      challenge:
        "Develop a computer vision system capable of detecting emergencies in real-time from CCTV, drones, or sensors and instantly alerting authorities.",
      goals:
        "Reduce emergency response times, enhance public safety, and minimize damage or loss of life.",
    },
    {
      title: "Smart Disaster Response",
      context:
        "Disaster management teams lack real-time insights into affected areas, making rescue operations slower and less efficient.",
      challenge:
        "Create a platform using AI and IoT sensors to map disaster-affected zones and optimize resource allocation.",
      goals:
        "Speed up response, save lives, and enhance coordination during emergencies.",
    },
  ],
  fintech: [
    {
      title: "Smart Spending Assistant",
      context:
        "Many users struggle to track spending patterns and identify unusual transactions in daily financial activities, which can lead to overspending or undetected fraud.",
      challenge:
        "Build an AI-powered personal finance assistant that monitors spending, detects anomalies, categorizes expenses, and provides actionable insights in real time.",
      goals:
        "Promote financial literacy, help users manage budgets effectively, and prevent fraudulent transactions.",
    },
    {
      title: "Predictive Credit Scoring",
      context:
        "Traditional credit scoring methods are slow and often fail to predict defaults accurately.",
      challenge:
        "Develop a machine learning-based credit scoring model that predicts credit risk more accurately using diverse datasets.",
      goals:
        "Reduce loan defaults, improve financial inclusion, and make lending safer for institutions and users.",
    },
  ],
};

export default function HackQubitProblemStatements() {
  const [active, setActive] = useState("ai");
  const [expandedCards, setExpandedCards] = useState({});

  // Disable right-click globally
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
      {/* Heading */}
      <h1 className="text-center text-5xl font-extrabold mt-16 tracking-wide f1-heading text-red-500">
        HackQuBit — Problem Statements
      </h1>

      {/* Hero Section */}
      <section className="text-center mt-8 px-6 max-w-3xl mx-auto hero-text">
        <p className="text-gray-300 text-lg leading-relaxed">
          Start your engines, innovators! HackQuBit challenges you to race
          against time and craft solutions that redefine the digital world.
        </p>
        <p className="italic text-red-500 mt-3 text-2xl font-bold">
          <TypewriterText
            texts={["Fast minds.", "Bold ideas.", "Real impact."]}
            typingSpeed={120}
            pause={800}
          />
        </p>
      </section>

      {/* Category Buttons */}
      <div className="category-bar flex flex-wrap justify-center gap-4 mt-14 px-6">
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

      {/* Problem Statements */}
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
                      <div className="mt-4 space-y-4">
                        <div>
                          <p className="font-semibold text-gray-100">🏎️ Context:</p>
                          <p className="text-gray-300 mt-1">{ps.context}</p>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-100">⏱️ Challenge:</p>
                          <p className="text-gray-300 mt-1">{ps.challenge}</p>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-100">🏁 Goals:</p>
                          <p className="text-gray-300 mt-1">{ps.goals}</p>
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
      </div>
    </div>
  );
}
