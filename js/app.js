// Jothi Akka & Payalugada Interactive App Engine

const SQUAD_DATA = {
  jothi_akka: {
    id: "jothi_akka",
    name: "Boss Jothi Akka",
    gender: "Female",
    role: "Chief Technology Officer & Squad Commander",
    tagline: "Visionary Captain & CTO who directs Payalugada IT to build 100% bug-free enterprise solutions!",
    badge: "👑 SQUAD BOSS & FOUNDER",
    image: "assets/images/jothi_akka_boss.jpg",
    ringClass: "avatar-ring-gold",
    textClass: "text-amber-400",
    fillClass: "skill-fill-gold",
    skills: [
      { name: "Squad Leadership & Direction", level: 100 },
      { name: "Enterprise Architecture & SLA Governance", level: 99 },
      { name: "Code Review & Security Audit", level: 99 },
      { name: "AI & Cloud Infrastructure Strategy", level: 98 },
      { name: "Client Vision & Agile Delivery", level: 97 }
    ],
    techStack: ["Leadership", "TypeScript", "Go", "Node.js", "React", "PyTorch AI", "Kubernetes", "PostgreSQL", "System Architecture"],
    bio: "Boss Jothi Akka is the powerhouse commander behind Payalugada IT. She personally directs the 4 Tech Masters (Berlin, Suresh, Abinash, Ashok), conducting rigorous code audits and architecture reviews. Under her command, 150+ high-scale applications have been built with a 99.99% bug-free uptime SLA!",
    quote: "Payalugada, task mudikkaama yaarum thoonga koodadhu! Let's build something epic today!",
    stats: { projects: "150+", clientRating: "5.0 ★", codeAudits: "1,400+", squadTrust: "100%" }
  },
  berlin: {
    id: "berlin",
    name: "Berlin",
    gender: "Female",
    role: "Code Master",
    tagline: "Backend Architect & Algorithms Wizard who writes clean, blazing-fast microservices.",
    badge: "💻 CODE MASTER",
    image: "assets/images/berlin_code_master.jpg",
    ringClass: "avatar-ring-cyan",
    textClass: "text-cyan-400",
    fillClass: "skill-fill-cyan",
    skills: [
      { name: "Data Structures & Algorithms", level: 98 },
      { name: "Node.js & Go Microservices", level: 96 },
      { name: "PostgreSQL & Redis Optimization", level: 95 },
      { name: "API Security & GraphQL", level: 92 }
    ],
    techStack: ["Node.js", "TypeScript", "Python", "Go", "Docker", "GraphQL", "PostgreSQL"],
    bio: "Berlin is the coding powerhouse of the team. Known as the 'Code Master', she converts complex business logic into rock-solid backend code in record time. Jothi Akka's go-to expert for heavy backend architecture.",
    quote: "Code clean-a irukkanum, speed-a run aaganum! Jothi Akka command panna instantly compile aagum!",
    stats: { commits: "4,500+", prsMerged: "890+", uptime: "99.99%", latency: "< 12ms" }
  },
  suresh: {
    id: "suresh",
    name: "Suresh",
    gender: "Male",
    role: "UI/UX Master",
    tagline: "Design Alchemist crafting slick pixel-perfect UI, glassmorphism, and micro-interactions.",
    badge: "🎨 UI/UX MASTER",
    image: "assets/images/suresh_ui_ux.jpg",
    ringClass: "avatar-ring-pink",
    textClass: "text-pink-400",
    fillClass: "skill-fill-pink",
    skills: [
      { name: "Figma UI/UX & Design Systems", level: 99 },
      { name: "Tailwind CSS & Web Animations", level: 96 },
      { name: "User Journey & Wireframing", level: 94 },
      { name: "Prototyping & Motion Graphics", level: 91 }
    ],
    techStack: ["Figma", "Tailwind CSS", "Framer Motion", "Spline 3D", "Adobe XD", "CSS3 Magic"],
    bio: "Suresh brings visual life to every project Jothi Akka envisions. His UI/UX mastery creates breathtaking digital experiences that leave users in awe. From modern glassmorphism to fluid 3D graphics, Suresh makes code look beautiful.",
    quote: "Design dhaan first impression! Jothi Akka solra visual aesthetic-a 100% exact-a bring pannuvaen!",
    stats: { designsCreated: "320+", figmaFiles: "1,100+", designTokens: "500+", awards: "12 Design Icons" }
  },
  abinash: {
    id: "abinash",
    name: "Abinash",
    gender: "Male",
    role: "AI Master",
    tagline: "Neural Network Architect & LLM Engineer pioneering intelligent futuristic AI features.",
    badge: "🧠 AI MASTER",
    image: "assets/images/abinash_ai_master.jpg",
    ringClass: "avatar-ring-emerald",
    textClass: "text-emerald-400",
    fillClass: "skill-fill-emerald",
    skills: [
      { name: "LLM Fine-Tuning & Prompt Eng.", level: 97 },
      { name: "PyTorch & TensorFlow Models", level: 95 },
      { name: "RAG Systems & Vector DBs", level: 94 },
      { name: "Computer Vision & Agents", level: 92 }
    ],
    techStack: ["PyTorch", "LangChain", "OpenAI APIs", "VectorDB (Chroma/Pinecone)", "Python", "HuggingFace"],
    bio: "Abinash is the resident artificial intelligence wizard. Whenever Jothi Akka requests smart AI automation, RAG pipelines, or autonomous agent integration, Abinash deploys state-of-the-art models within minutes.",
    quote: "AI model accuracy 99.9% touch pannanum! Jothi Akka-voda vision-ukku neural networks deploy ready!",
    stats: { modelsTrained: "85+", tokensProcessed: "10B+", ragPipelines: "40+", accuracyScore: "99.4%" }
  },
  ashok: {
    id: "ashok",
    name: "Ashok",
    gender: "Male",
    role: "App Developer",
    tagline: "Mobile App Ninja building lightning-fast cross-platform iOS & Android mobile apps.",
    badge: "📱 APP DEVELOPER",
    image: "assets/images/ashok_app_developer.jpg",
    ringClass: "avatar-ring-purple",
    textClass: "text-purple-400",
    fillClass: "skill-fill-purple",
    skills: [
      { name: "Flutter & React Native", level: 97 },
      { name: "Swift & Kotlin Native Apps", level: 93 },
      { name: "Mobile UI State Management", level: 96 },
      { name: "App Store & Play Store CI/CD", level: 92 }
    ],
    techStack: ["Flutter", "React Native", "Swift", "Kotlin", "Firebase", "App Store Connect", "Fastlane"],
    bio: "Ashok is the mobile specialist of Jothi Akka Payalugada. He turns complex web applications into buttery-smooth mobile applications for iOS and Android. High FPS, zero lag, and instant push notifications are his trademark.",
    quote: "iOS-lum Android-lum smooth-a run aagum! Jothi Akka team-ukku mobile app 100% top quality!",
    stats: { appsPublished: "45+", totalDownloads: "2.5M+", crashFreeRate: "99.9%", appRating: "4.9 ★" }
  }
};

const TASK_SOLUTIONS = [
  {
    keywords: ["backend", "api", "database", "code", "bug", "security", "server"],
    assignee: "berlin",
    bossComment: "Berlin! Code Master நீ தான் இந்த Backend & Database task-a உடனே hand-over எடுத்து 100% bug-free-a deploy பண்ணனும்!",
    actionText: "Berlin is writing optimized microservice code..."
  },
  {
    keywords: ["ui", "ux", "design", "figma", "frontend", "layout", "color", "animation"],
    assignee: "suresh",
    bossComment: "Suresh! UI/UX Master நீ தான் இந்த Design & Layout task-a பாத்துக்கணும். Modern glassmorphism & pixel perfection venum!",
    actionText: "Suresh is crafting custom Figma UI components..."
  },
  {
    keywords: ["ai", "llm", "chat", "bot", "model", "neural", "python", "prompt", "rag"],
    assignee: "abinash",
    bossComment: "Abinash! AI Master, unnodaiya Neural Networks & Agentic AI model-a deploy panni indha automation task-a complete pannu!",
    actionText: "Abinash is fine-tuning LLM pipelines..."
  },
  {
    keywords: ["app", "mobile", "ios", "android", "flutter", "react native", "phone"],
    assignee: "ashok",
    bossComment: "Ashok! App Developer நீ தான் இந்த iOS & Android Mobile App-a build panni Play Store / App Store-la publish pannanum!",
    actionText: "Ashok is compiling Flutter cross-platform mobile build..."
  }
];

document.addEventListener("DOMContentLoaded", () => {
  initTerminalSimulation();
  initTaskAssigner();
  initSearch();
  initCodePlayground();
  initQuiz();
  initProjects();
  
  // New Squad Feature Engines
  initArcadeGame();
  initDjStation();
  initAchievements();
  initBugDuel();
  initSquadAiBot();

  // Hash deep-linking page switch
  const hash = window.location.hash.replace("#", "");
  if (hash && document.getElementById("page-" + hash)) {
    switchAppPage(hash);
  }
});

function switchAppPage(pageId) {
  const pages = document.querySelectorAll(".app-page-view");
  pages.forEach(p => p.classList.remove("hidden"));

  let target = document.getElementById(pageId) || document.getElementById("page-" + pageId);
  if (!target) {
    if (pageId === 'arch') target = document.getElementById('architecture');
    else if (pageId === 'code') target = document.getElementById('codePlayground');
    else if (pageId === 'quiz') target = document.getElementById('codeQuiz');
    else if (pageId === 'fun') target = document.getElementById('soundboard');
    else if (pageId === 'ludo') target = document.getElementById('ludoArena');
  }

  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }

  try {
    history.pushState(null, null, "#" + pageId);
  } catch (e) {}
}

window.addEventListener("hashchange", () => {
  const hash = window.location.hash.replace("#", "");
  if (hash && document.getElementById("page-" + hash)) {
    switchAppPage(hash);
  }
});

function openMemberModal(memberKey) {
  const member = SQUAD_DATA[memberKey];
  if (!member) return;

  const modalContainer = document.getElementById("memberModalContainer");
  const modalContent = document.getElementById("memberModalContent");

  const skillsHtml = member.skills.map(s => `
    <div class="mb-4">
      <div class="flex justify-between items-center mb-1">
        <span class="text-sm font-semibold text-gray-200">${s.name}</span>
        <span class="text-xs font-mono font-bold ${member.textClass}">${s.level}%</span>
      </div>
      <div class="bg-slate-900 h-2.5 rounded-full overflow-hidden border border-slate-800">
        <div class="h-full rounded-full ${member.fillClass}" style="width: ${s.level}%"></div>
      </div>
    </div>
  `).join("");

  const techHtml = member.techStack.map(t => `
    <span class="px-3 py-1 text-xs font-mono rounded-full bg-slate-900 border border-slate-700 text-gray-200">
      #${t}
    </span>
  `).join("");

  const statsHtml = Object.entries(member.stats).map(([k, v]) => `
    <div class="bg-[#070913]/90 p-3 rounded-xl border border-slate-800 text-center">
      <div class="text-xl font-bold font-mono ${member.textClass}">${v}</div>
      <div class="text-xs text-gray-400 capitalize mt-1">${k.replace(/([A-Z])/g, ' $1')}</div>
    </div>
  `).join("");

  const bossExtraActions = memberKey === 'jothi_akka' ? `
    <div class="mt-4 pt-3 border-t border-amber-500/30 flex flex-wrap gap-2">
      <button onclick="playMemberSound('jothi_akka')" class="px-3.5 py-2 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 border border-amber-400/50 text-amber-300 text-xs font-mono font-bold transition flex items-center gap-1.5 shadow">
        <i class="fas fa-volume-high text-amber-400"></i> 👑 Listen Voice Command
      </button>
      <button onclick="triggerSecretMatrix()" class="px-3.5 py-2 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 border border-amber-400/50 text-amber-300 text-xs font-mono font-bold transition flex items-center gap-1.5 shadow">
        <i class="fas fa-terminal text-amber-400"></i> ⚡ Golden Matrix Rain
      </button>
      <button onclick="closeMemberModal(); switchAppPage('command');" class="px-3.5 py-2 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-950 text-xs font-black uppercase transition shadow btn-shimmer">
        <i class="fas fa-paper-plane"></i> 🎯 Assign Priority Task
      </button>
    </div>
  ` : '';

  modalContent.innerHTML = `
    <div class="relative p-6 sm:p-8 ${memberKey === 'jothi_akka' ? 'border-4 border-amber-400/60 rounded-3xl bg-slate-950/95 shadow-2xl' : ''}">
      <button onclick="closeMemberModal()" class="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-900 hover:bg-rose-600 text-gray-400 hover:text-white flex items-center justify-center transition border border-slate-800">
        <i class="fas fa-times"></i>
      </button>

      <div class="flex flex-col md:flex-row gap-6 items-center md:items-start">
        <div class="relative w-36 h-36 md:w-44 md:h-44 flex-shrink-0 rounded-2xl overflow-hidden ${member.ringClass}">
          <img src="${member.image}" alt="${member.name}" class="w-full h-full object-cover">
          <span class="absolute bottom-2 left-2 right-2 text-center text-[10px] font-extrabold uppercase tracking-wider py-1 px-2 rounded bg-slate-950/80 backdrop-blur-md text-amber-400 border border-amber-500/30">
            ${member.badge}
          </span>
        </div>

        <div class="flex-1 text-center md:text-left">
          <div class="flex items-center justify-center md:justify-start gap-3 flex-wrap">
            <h3 class="text-2xl sm:text-3xl font-extrabold text-white">${member.name}</h3>
            <span class="px-3 py-1 rounded-full text-xs font-semibold bg-purple-900/40 text-purple-300 border border-purple-500/30">
              ${member.role}
            </span>
          </div>

          <p class="text-sm ${member.textClass} mt-2 font-semibold">${member.tagline}</p>
          <p class="text-sm text-gray-300 mt-4 leading-relaxed bg-[#070913]/70 p-4 rounded-xl border border-slate-800">${member.bio}</p>

          <div class="mt-4 p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs italic flex items-center gap-2">
            <i class="fas fa-quote-left text-amber-400 text-sm"></i>
            <span>"${member.quote}"</span>
          </div>

          <div class="mt-4 pt-3 border-t border-slate-800/80 flex flex-wrap gap-2">
            <button onclick="triggerSingleSongUpload('${memberKey === 'jothi_akka' ? 'jothi' : memberKey}'); closeMemberModal(); switchAppPage('djStation');" class="px-3 py-2 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-400 text-cyan-300 text-xs font-mono font-bold transition flex items-center gap-1.5" title="Upload 1 Song for ${member.name}">
              <i class="fas fa-music"></i> 🎵 Upload Song for ${member.name.split(' ')[0]}
            </button>
            <button onclick="triggerAlbumUpload('${memberKey === 'jothi_akka' ? 'jothi' : memberKey}'); closeMemberModal(); switchAppPage('djStation');" class="px-3 py-2 rounded-xl bg-gradient-to-r from-emerald-500 via-cyan-400 to-purple-500 text-slate-950 text-xs font-mono font-black transition flex items-center gap-1.5" title="Upload Full Album for ${member.name}">
              <i class="fas fa-compact-disc"></i> 💿 Upload Album (20 Songs)
            </button>
          </div>

          ${bossExtraActions}
        </div>
      </div>

      <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
        ${statsHtml}
      </div>

      <div class="mt-6 pt-6 border-t border-slate-800 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h4 class="text-sm font-bold text-gray-300 uppercase tracking-wider mb-4 flex items-center gap-2">
            <i class="fas fa-bolt text-amber-400"></i> Core Competencies
          </h4>
          ${skillsHtml}
        </div>

        <div>
          <h4 class="text-sm font-bold text-gray-300 uppercase tracking-wider mb-4 flex items-center gap-2">
            <i class="fas fa-code text-cyan-400"></i> Tech Stack & Tools
          </h4>
          <div class="flex flex-wrap gap-2 mb-6">
            ${techHtml}
          </div>

          <button onclick="triggerDirectMessage('${member.name}', '${member.role}')" class="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-amber-400 via-rose-500 to-purple-600 text-slate-950 font-extrabold text-sm shadow-xl transition btn-shimmer flex items-center justify-center gap-2">
            <i class="fas fa-paper-plane"></i> Send Direct Task to ${member.name}
          </button>
        </div>
      </div>
    </div>
  `;

  modalContainer.classList.remove("hidden");
  modalContainer.classList.add("flex");
}

function closeMemberModal() {
  const modalContainer = document.getElementById("memberModalContainer");
  modalContainer.classList.add("hidden");
  modalContainer.classList.remove("flex");
}

function initTaskAssigner() {
  const taskBtn = document.getElementById("assignTaskBtn");
  if (!taskBtn) return;

  taskBtn.addEventListener("click", () => {
    const taskInput = document.getElementById("taskDescription").value.trim();
    if (!taskInput) {
      showToast("Please enter a task description first!", "warning");
      return;
    }

    const lowerInput = taskInput.toLowerCase();
    let matchedSolution = TASK_SOLUTIONS[0];

    for (const sol of TASK_SOLUTIONS) {
      if (sol.keywords.some(kw => lowerInput.includes(kw))) {
        matchedSolution = sol;
        break;
      }
    }

    const assignedMember = SQUAD_DATA[matchedSolution.assignee];

    const resultBox = document.getElementById("taskResultBox");
    resultBox.innerHTML = `
      <div class="p-6 rounded-2xl bg-[#070913]/95 border-2 border-amber-400/50 shadow-2xl space-y-4 animate-fade-in">
        <div class="flex items-center gap-4">
          <div class="w-12 h-12 rounded-full overflow-hidden border-2 border-amber-400 flex-shrink-0">
            <img src="${SQUAD_DATA.jothi_akka.image}" class="w-full h-full object-cover">
          </div>
          <div>
            <h4 class="text-amber-400 font-extrabold text-sm">👑 Jothi Akka (Boss Directive)</h4>
            <p class="text-xs text-gray-200 italic mt-0.5">"${matchedSolution.bossComment}"</p>
          </div>
        </div>

        <div class="p-4 rounded-xl bg-slate-900/80 border border-slate-700 flex items-center justify-between gap-4">
          <div class="flex items-center gap-3">
            <img src="${assignedMember.image}" class="w-12 h-12 rounded-xl object-cover border-2 border-amber-400">
            <div>
              <div class="text-white font-extrabold text-sm">${assignedMember.name}</div>
              <div class="text-xs ${assignedMember.textClass} font-semibold">${assignedMember.badge} • ${assignedMember.role}</div>
            </div>
          </div>
          <button onclick="openMemberModal('${assignedMember.id}')" class="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold transition">
            View Profile
          </button>
        </div>

        <div class="flex items-center gap-2 text-xs text-emerald-400 font-mono">
          <i class="fas fa-spinner fa-spin"></i>
          <span>${matchedSolution.actionText}</span>
        </div>
      </div>
    `;

    resultBox.classList.remove("hidden");
    showToast(`Task assigned by Jothi Akka to ${assignedMember.name}!`, "success");
    appendTerminalLog(`[JOTHI_AKKA_CMD] New Task: "${taskInput.substring(0, 30)}..." -> Assigned to ${assignedMember.name.toUpperCase()}`);
  });
}

function initTerminalSimulation() {
  const logs = [
    { sender: "JOTHI_AKKA", text: "Payalugada team, status update குடுங்க! New client project deploy பண்ணனும்." },
    { sender: "BERLIN", text: "Jothi Akka, backend microservices 100% benchmarked! Latency < 10ms." },
    { sender: "SURESH", text: "Boss! Figma UI system 2.0 components ready. Dark glassmorphism applied!" },
    { sender: "ABINASH", text: "AI Agent fine-tuned with 99.8% precision. Ready for prompt streaming." },
    { sender: "ASHOK", text: "iOS & Android Flutter build successfully compiled and uploaded to App Stores!" },
    { sender: "JOTHI_AKKA", text: "Super da Payalugada! Keep rocking the tech world!" }
  ];

  let index = 0;
  setInterval(() => {
    const log = logs[index % logs.length];
    appendTerminalLog(`[${log.sender}] ${log.text}`);
    index++;
  }, 4000);
}

function appendTerminalLog(message) {
  const terminalBody = document.getElementById("terminalOutput");
  if (!terminalBody) return;

  const timeStr = new Date().toLocaleTimeString('en-US', { hour12: false });
  const logItem = document.createElement("div");
  logItem.className = "text-xs font-mono my-1 leading-relaxed";

  if (message.includes("JOTHI_AKKA")) {
    logItem.innerHTML = `<span class="text-gray-500">[${timeStr}]</span> <span class="text-amber-400 font-bold">${message}</span>`;
  } else if (message.includes("BERLIN")) {
    logItem.innerHTML = `<span class="text-gray-500">[${timeStr}]</span> <span class="text-cyan-400">${message}</span>`;
  } else if (message.includes("SURESH")) {
    logItem.innerHTML = `<span class="text-gray-500">[${timeStr}]</span> <span class="text-pink-400">${message}</span>`;
  } else if (message.includes("ABINASH")) {
    logItem.innerHTML = `<span class="text-gray-500">[${timeStr}]</span> <span class="text-emerald-400">${message}</span>`;
  } else if (message.includes("ASHOK")) {
    logItem.innerHTML = `<span class="text-gray-500">[${timeStr}]</span> <span class="text-purple-400">${message}</span>`;
  } else {
    logItem.innerHTML = `<span class="text-gray-500">[${timeStr}]</span> <span class="text-gray-300">${message}</span>`;
  }

  terminalBody.appendChild(logItem);
  terminalBody.scrollTop = terminalBody.scrollHeight;
}

function initSearch() {
  const searchInput = document.getElementById("squadSearchInput");
  if (!searchInput) return;

  searchInput.addEventListener("input", (e) => {
    const val = e.target.value.toLowerCase().trim();
    const cards = document.querySelectorAll(".squad-card");

    cards.forEach(card => {
      const name = card.getAttribute("data-name") || "";
      const role = card.getAttribute("data-role") || "";
      const tags = card.getAttribute("data-tags") || "";

      if (name.includes(val) || role.includes(val) || tags.includes(val)) {
        card.style.display = "flex";
      } else {
        card.style.display = "none";
      }
    });
  });
}

function triggerDirectMessage(memberName, role) {
  closeMemberModal();
  const contactSec = document.getElementById("contactSection");
  if (contactSec) {
    contactSec.scrollIntoView({ behavior: 'smooth' });
    const msgBox = document.getElementById("contactMessage");
    if (msgBox) {
      msgBox.value = `Hi ${memberName} (${role}), Jothi Akka recommended I connect with you for a project!`;
    }
  }
}

function showToast(msg, type = "info") {
  const toast = document.createElement("div");
  toast.className = `fixed bottom-5 right-5 z-50 px-5 py-3 rounded-xl shadow-2xl backdrop-blur-md border text-sm font-semibold text-white transition-all transform translate-y-0 opacity-100 flex items-center gap-3 ${
    type === 'success' ? 'bg-emerald-900/90 border-emerald-500/50 text-emerald-200' :
    type === 'warning' ? 'bg-amber-900/90 border-amber-500/50 text-amber-200' :
    'bg-purple-900/90 border-purple-500/50 text-purple-200'
  }`;

  toast.innerHTML = `<i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-info-circle'}"></i> ${msg}`;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(20px)";
    setTimeout(() => toast.remove(), 400);
  }, 3500);
}

// ==========================================================
// 1. CODE PLAYGROUND & SNIPPET SHOWCASE
// ==========================================================
const CODE_SNIPPETS = {
  jothi_akka: {
    fileName: "jothi_orchestrator.ts",
    code: `// Boss Jothi Akka - Enterprise API Gateway Orchestrator
import { SLAEngine, SquadDispatch } from '@payalugada/core';

export class JothiBossOrchestrator {
  private squad = ['Berlin', 'Suresh', 'Abinash', 'Ashok'];

  public async handleClientDirective(request: ClientProjectRequest) {
    console.log("👑 Jothi Akka: Client directive received!", request.title);
    
    // SLA Verification & Quality Assurance Audit
    const slaValid = await SLAEngine.verifyClientSLA(request.clientId);
    if (!slaValid) throw new Error("SLA check failed! Jothi Akka demands 100% precision.");

    // Dynamic Dispatch to the 4 Masters
    const assignedMaster = SquadDispatch.autoRoute(request.type);
    console.log(\`👑 Jothi Akka -> Directing task to \${assignedMaster}...\`);

    return {
      status: "APPROVED_BY_JOTHI_AKKA",
      lead: assignedMaster,
      executionSpeed: "< 15ms"
    };
  }
}`
  },
  berlin: {
    fileName: "berlin_backend_microservice.js",
    code: `// Berlin (Code Master) - High Concurrency Express + Redis API
const express = require('express');
const Redis = require('ioredis');
const redis = new Redis(process.env.REDIS_URL);
const app = express();

// Berlin: Code clean-a irukkanum, speed-a run aaganum!
app.get('/api/v1/high-throughput', async (req, res) => {
  const cacheKey = \`payalugada:\${req.query.id}\`;
  
  // 1. Redis High-Speed Cache Lookup (< 2ms)
  const cachedData = await redis.get(cacheKey);
  if (cachedData) {
    return res.json({ source: 'Redis_Memory_Cluster', data: JSON.parse(cachedData) });
  }

  // 2. Optimized PostgreSQL Database Query
  const dbResult = await db.query('SELECT * FROM squad_transactions WHERE id = $1', [req.query.id]);
  await redis.set(cacheKey, JSON.stringify(dbResult.rows[0]), 'EX', 3600);

  res.json({ source: 'PostgreSQL_Master', data: dbResult.rows[0], lead: 'Berlin Code Master' });
});`
  },
  suresh: {
    fileName: "suresh_glassmorphism_ui.js",
    code: `// Suresh (UI/UX Master) - Glassmorphism & Framer Micro-Interactions
import { motion } from 'framer-motion';

export const SureshGlassCard = ({ title, badgeText, children }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03, rotateY: 5 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="relative p-6 rounded-3xl bg-gradient-to-br from-slate-900/80 via-[#070913]/90 to-purple-950/40 
                 backdrop-blur-2xl border border-pink-500/30 shadow-2xl overflow-hidden"
    >
      {/* Suresh: Design dhaan first impression! */}
      <div class="absolute -top-10 -right-10 w-32 h-32 bg-pink-500/20 rounded-full blur-2xl pointer-events-none" />
      <span className="px-3 py-1 text-[10px] font-mono font-bold text-pink-300 bg-pink-950/80 rounded-full border border-pink-500/40">
        🎨 {badgeText}
      </span>
      <h3 className="text-xl font-black text-white mt-3">{title}</h3>
      <div className="mt-4 text-sm text-gray-300">{children}</div>
    </motion.div>
  );
};`
  },
  abinash: {
    fileName: "abinash_rag_agent.py",
    code: `# Abinash (AI Master) - PyTorch Vector Search & LangChain RAG Pipeline
import torch
from langchain_community.vectorstores import Chroma
from langchain_openai import OpenAIEmbeddings

class AbinashNeuralRAG:
    def __init__(self, collection_name="payalugada_ai"):
        # Abinash: AI Model accuracy 99.9% touch pannanum!
        self.embeddings = OpenAIEmbeddings(model="text-embedding-3-large")
        self.vector_store = Chroma(collection_name=collection_name, embedding_function=self.embeddings)
        print("🧠 Abinash AI Master: Vector DB initialized successfully!")

    def query_neural_context(self, user_prompt: str, top_k: int = 3):
        results = self.vector_store.similarity_search_with_relevance_scores(user_prompt, k=top_k)
        context = "\\n".join([doc.page_content for doc, score in results if score > 0.85])
        return {
            "retrieved_context": context,
            "confidence_score": 0.998,
            "master": "Abinash AI Agent"
        }`
  },
  ashok: {
    fileName: "ashok_flutter_state.dart",
    code: `// Ashok (App Developer) - Flutter 60FPS Cross-Platform State Engine
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

// Ashok: iOS-lum Android-lum smooth-a run aagum!
class PayalugadaAppState extends ChangeNotifier {
  int _activeTab = 0;
  bool _isSyncing = false;

  int get activeTab => _activeTab;
  bool get isSyncing => _isSyncing;

  void switchTab(int index) {
    _activeTab = index;
    notifyListeners(); // 60 FPS smooth repaint
  }

  Future<void> syncWithJothiServer() async {
    _isSyncing = true;
    notifyListeners();
    await Future.delayed(const Duration(milliseconds: 400));
    _isSyncing = false;
    notifyListeners();
  }
}`
  }
};

let currentCodeMember = "jothi_akka";

function initCodePlayground() {
  switchCodeTab("jothi_akka");
}

function switchCodeTab(memberKey) {
  currentCodeMember = memberKey;
  const snippet = CODE_SNIPPETS[memberKey];
  if (!snippet) return;

  document.querySelectorAll(".code-tab-btn").forEach(btn => {
    btn.className = "code-tab-btn px-4 py-2 rounded-xl text-xs font-mono font-bold bg-slate-900 text-gray-400 border border-slate-800 hover:border-amber-400";
  });

  const activeBtn = document.getElementById(`codeTab-${memberKey}`);
  if (activeBtn) {
    activeBtn.className = "code-tab-btn px-4 py-2 rounded-xl text-xs font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow";
  }

  const fileNameEl = document.getElementById("codeFileName");
  if (fileNameEl) fileNameEl.textContent = snippet.fileName;

  const displayEl = document.getElementById("codeDisplayArea");
  if (displayEl) {
    displayEl.textContent = snippet.code;
  }
}

function copyCodeSnippet() {
  const snippet = CODE_SNIPPETS[currentCodeMember];
  if (snippet) {
    navigator.clipboard.writeText(snippet.code);
    showToast(`Copied ${snippet.fileName} to clipboard!`, "success");
  }
}

function runCodeSimulation() {
  const snippet = CODE_SNIPPETS[currentCodeMember];
  showToast(`Simulating execution of ${snippet.fileName}...`, "info");
  appendTerminalLog(`[EXEC_SIM] Executing ${snippet.fileName} by ${currentCodeMember.toUpperCase()}...`);
  setTimeout(() => {
    appendTerminalLog(`[EXEC_SUCCESS] ${snippet.fileName} compiled with 0 errors. Execution time: 11ms.`);
    showToast(`Simulation complete! Check Live Console.`, "success");
  }, 1000);
}


// ==========================================================
// 2. IT ARCHITECTURE LAYER SELECTOR
// ==========================================================
const ARCH_DETAILS = {
  all: "Full Ecosystem Flow: Boss Gateway -> Microservices DB -> Glassmorphism UI -> Neural AI RAG -> Mobile Native Suite.",
  jothi_gateway: "Boss API Gateway: Manages client SLAs, load balancing, rate limiting, and authenticates all incoming traffic.",
  berlin_backend: "Backend Microservices: Node.js & Go cluster running PostgreSQL & Redis with sub-10ms query execution.",
  suresh_ui: "Glassmorphism UI Engine: Built with Tailwind CSS, Spline 3D, and fluid micro-interactions for web & desktop.",
  abinash_ai: "Neural RAG AI Engine: PyTorch & VectorDB pipeline providing real-time AI search, generation, and agent routing.",
  ashok_mobile: "Cross-Platform Mobile Suite: Flutter & Native Swift/Kotlin apps optimized for 60 FPS performance on iOS & Android."
};

function selectArchLayer(layerKey) {
  document.querySelectorAll(".arch-layer-btn").forEach(btn => {
    btn.className = "arch-layer-btn px-4 py-2 rounded-xl text-xs font-mono font-bold bg-slate-900 text-gray-400 border border-slate-800";
  });

  const activeBtn = document.getElementById(`archBtn-${layerKey}`);
  if (activeBtn) {
    activeBtn.className = "arch-layer-btn px-4 py-2 rounded-xl text-xs font-mono font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow";
  }

  const detailBox = document.getElementById("archDetailBox");
  if (detailBox) {
    detailBox.querySelector("span").textContent = ARCH_DETAILS[layerKey] || ARCH_DETAILS.all;
  }

  appendTerminalLog(`[ARCH_INSPECT] Inspected Architecture Layer: ${layerKey.toUpperCase()}`);
}


// ==========================================================
// 3. DEVOPS CLOUD ACTIONS
// ==========================================================
function triggerDevOpsAction(actionKey) {
  const actions = {
    deploy_k8s: { title: "Deploying K8s Pods", log: "[DEVOPS_K8S] Rolling update triggered. 24 Pods deployed to AWS US-East." },
    flush_redis: { title: "Flushing Redis Cache", log: "[DEVOPS_REDIS] Redis memory purged. Keys re-indexed in 3ms." },
    reindex_ai: { title: "Re-Indexing Vector DB", log: "[DEVOPS_AI] Vector embeddings updated for 100,000 documents." },
    run_tests: { title: "Running E2E Integration Tests", log: "[DEVOPS_TEST] 480 unit tests & 120 E2E tests passed cleanly! 0 failures." },
    build_mobile: { title: "Compiling Flutter Build", log: "[DEVOPS_BUILD] Flutter iOS & Android release APK/IPA generated (#1481)." }
  };

  const item = actions[actionKey];
  if (!item) return;

  showToast(`${item.title}...`, "info");
  appendTerminalLog(item.log);
}


// ==========================================================
// 4. IT BUG BATTLE & CODE QUIZ ARENA
// ==========================================================
const QUIZ_QUESTIONS = [
  {
    question: "1. Berlin is writing a high-concurrency Node.js API. Why does she prefer '===' over '==' in code reviews?",
    options: [
      "Strict equality (===) checks both value & type, avoiding hidden type coercion bugs.",
      "Strict equality is 100x slower than loose equality.",
      "Loose equality (==) only works on numbers.",
      "Boss Jothi Akka requires '==' for all backend databases."
    ],
    answer: 0,
    explanation: "Strict equality (===) ensures type safety, preventing subtle bugs in backend APIs!"
  },
  {
    question: "2. Which PostgreSQL extension does Abinash use for ultra-fast AI vector similarity search?",
    options: [
      "pg_stat_statements",
      "pgvector (with HNSW index)",
      "pg_crypto",
      "pg_trgm"
    ],
    answer: 1,
    explanation: "pgvector with HNSW indexing allows Abinash to search vector embeddings in milliseconds!"
  },
  {
    question: "3. What CSS property creates Suresh's signature translucent frosted glass background?",
    options: [
      "background-clip: text",
      "backdrop-filter: blur(20px)",
      "box-shadow: inset 0 0 10px white",
      "transform: scale(1.05)"
    ],
    answer: 1,
    explanation: "backdrop-filter: blur() creates modern glassmorphism visuals across modern browsers."
  },
  {
    question: "4. Why does Ashok use 'notifyListeners()' in his Flutter App State Management Provider?",
    options: [
      "To restart the smartphone OS.",
      "To notify subscribed UI widgets to efficiently rebuild at 60 FPS.",
      "To send push notifications to App Store.",
      "To clear the RAM memory cache."
    ],
    answer: 1,
    explanation: "notifyListeners() notifies dependent Flutter widgets to repaint smoothly without lag."
  },
  {
    question: "5. What happens when a squad member wins the weekly Ludo Tournament?",
    options: [
      "They are automatically promoted to #1 Co-Leader right next to Jothi Akka!",
      "They get deleted from the codebase.",
      "They have to rewrite all backend APIs in C++.",
      "Nothing changes."
    ],
    answer: 0,
    explanation: "The winner automatically gains the #1 Co-Leader spot next to Boss Jothi Akka for the week!"
  }
];

let currentQuizIndex = 0;
let quizScore = 0;
let selectedOption = null;

function initQuiz() {
  currentQuizIndex = 0;
  quizScore = 0;
  renderQuizQuestion();
}

function renderQuizQuestion() {
  const card = document.getElementById("quizCard");
  if (!card) return;

  if (currentQuizIndex >= QUIZ_QUESTIONS.length) {
    // Quiz Completed!
    card.innerHTML = `
      <div class="text-center py-6 space-y-4">
        <div class="w-20 h-20 mx-auto rounded-full bg-gradient-to-tr from-amber-400 to-rose-500 p-[3px] shadow-2xl">
          <div class="w-full h-full bg-[#070913] rounded-full flex items-center justify-center text-amber-400 text-3xl">
            <i class="fas fa-award"></i>
          </div>
        </div>
        
        <h3 class="text-3xl font-black text-white">BUG BATTLE COMPLETED!</h3>
        <p class="text-lg text-amber-300 font-mono font-bold">Your Score: ${quizScore} / ${QUIZ_QUESTIONS.length}</p>

        <div class="p-4 rounded-2xl bg-[#070913] border border-amber-500/30 max-w-md mx-auto text-xs text-gray-300">
          <span class="text-amber-400 font-bold">👑 Jothi Akka Certification:</span><br>
          ${quizScore === 5 ? "🔥 LEGENDARY SENIOR ARCHITECT! Boss Jothi Akka gives you 100% approval!" :
            quizScore >= 3 ? "⚡ PAYALUGADA FULL-STACK CODER! Great job on tech fundamentals!" :
            "💻 JUNIOR DEVELOPER! Keep learning with Jothi Akka & Squad!"}
        </div>

        <button onclick="initQuiz()" class="py-3 px-8 rounded-xl bg-gradient-to-r from-amber-400 via-rose-500 to-purple-600 text-slate-950 font-black text-xs uppercase tracking-wider shadow-lg transition btn-shimmer">
          <i class="fas fa-rotate-left"></i> Retake Bug Battle Quiz
        </button>
      </div>
    `;
    return;
  }

  const q = QUIZ_QUESTIONS[currentQuizIndex];
  selectedOption = null;

  const optionsHtml = q.options.map((opt, idx) => `
    <button onclick="selectQuizOption(${idx})" id="quizOpt-${idx}" class="w-full p-4 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-pink-500/60 text-left text-xs sm:text-sm text-gray-200 font-medium transition flex items-center gap-3">
      <span class="w-6 h-6 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-xs font-mono text-pink-400 font-bold">${String.fromCharCode(65 + idx)}</span>
      <span>${opt}</span>
    </button>
  `).join("");

  card.innerHTML = `
    <div class="space-y-6">
      <div class="flex items-center justify-between border-b border-slate-800 pb-4">
        <span class="text-xs font-mono text-pink-400 font-bold">QUESTION ${currentQuizIndex + 1} OF ${QUIZ_QUESTIONS.length}</span>
        <span class="text-xs font-mono text-amber-400 font-bold">CURRENT SCORE: ${quizScore}</span>
      </div>

      <h4 class="text-lg sm:text-xl font-extrabold text-white leading-relaxed">${q.question}</h4>

      <div class="space-y-3">
        ${optionsHtml}
      </div>

      <div class="pt-4 border-t border-slate-800 flex justify-between items-center">
        <div id="quizFeedback" class="text-xs font-mono text-gray-400">Select an answer above...</div>
        <button id="nextQuizBtn" onclick="nextQuizQuestion()" disabled class="py-3 px-6 rounded-xl bg-slate-800 opacity-50 text-gray-400 font-bold text-xs transition cursor-not-allowed">
          Submit Answer <i class="fas fa-arrow-right ml-1"></i>
        </button>
      </div>
    </div>
  `;
}

function selectQuizOption(idx) {
  selectedOption = idx;
  const q = QUIZ_QUESTIONS[currentQuizIndex];

  document.querySelectorAll("[id^='quizOpt-']").forEach((btn, i) => {
    if (i === idx) {
      btn.className = "w-full p-4 rounded-xl bg-pink-950/60 border-2 border-pink-500 text-left text-xs sm:text-sm text-white font-bold transition flex items-center gap-3 shadow-lg";
    } else {
      btn.className = "w-full p-4 rounded-xl bg-slate-900/90 border border-slate-800 text-left text-xs sm:text-sm text-gray-400 font-medium transition opacity-60 flex items-center gap-3";
    }
  });

  const nextBtn = document.getElementById("nextQuizBtn");
  if (nextBtn) {
    nextBtn.disabled = false;
    nextBtn.className = "py-3 px-6 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-950 font-black text-xs transition shadow-lg btn-shimmer cursor-pointer";
  }

  const feedback = document.getElementById("quizFeedback");
  if (feedback) {
    feedback.innerHTML = `<span class="text-amber-300 font-bold">Selected option ${String.fromCharCode(65 + idx)}. Click Submit Answer to verify!</span>`;
  }
}

function nextQuizQuestion() {
  if (selectedOption === null) return;

  const q = QUIZ_QUESTIONS[currentQuizIndex];
  if (selectedOption === q.answer) {
    quizScore++;
    showToast("Correct Answer! +1 Point", "success");
  } else {
    showToast("Incorrect answer!", "warning");
  }

  currentQuizIndex++;
  renderQuizQuestion();
}


// ==========================================================
// 5. SQUAD IT PROJECTS PORTFOLIO
// ==========================================================
const PROJECTS_DATA = [
  {
    id: "proj_1",
    category: "ai",
    title: "JothiAI Enterprise Agent Platform",
    leads: ["Jothi Akka", "Abinash"],
    badge: "🧠 AI / LLM AGENT",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&auto=format&fit=crop&q=80",
    desc: "Autonomous multi-agent task execution platform powered by fine-tuned LLMs, RAG vector embeddings, and real-time streaming.",
    tags: ["Python", "PyTorch", "LangChain", "OpenAI", "VectorDB"]
  },
  {
    id: "proj_2",
    category: "backend",
    title: "PayaluFintech 100K TPS Gateway",
    leads: ["Jothi Akka", "Berlin"],
    badge: "💻 HIGH-SPEED FINTECH",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=80",
    desc: "Ultra-low latency crypto and fiat payment microservices pipeline processing 100,000 transactions per second with Redis caching.",
    tags: ["Node.js", "Go", "PostgreSQL", "Redis", "Docker"]
  },
  {
    id: "proj_3",
    category: "ui",
    title: "Aura Glass Design System 2.0",
    leads: ["Jothi Akka", "Suresh"],
    badge: "🎨 UI/UX DESIGN SYSTEM",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=600&auto=format&fit=crop&q=80",
    desc: "Comprehensive glassmorphism UI token framework used across web and mobile web apps with 50+ re-usable Tailwind components.",
    tags: ["Figma", "Tailwind CSS", "Framer Motion", "Spline 3D"]
  },
  {
    id: "proj_4",
    category: "mobile",
    title: "PayaluGo Mobile Suite (iOS & Android)",
    leads: ["Jothi Akka", "Ashok"],
    badge: "📱 FLUTTER MOBILE APP",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&auto=format&fit=crop&q=80",
    desc: "Multi-tenant mobile app with 60 FPS smooth gesture animations, offline synchronization, and instant push notification engine.",
    tags: ["Flutter", "Dart", "Firebase", "iOS/Swift", "Android"]
  },
  {
    id: "proj_5",
    category: "ai",
    title: "NeuraHealth Medical RAG Engine",
    leads: ["Abinash", "Berlin"],
    badge: "🏥 HEALTHCARE TECH",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&auto=format&fit=crop&q=80",
    desc: "HIPAA-compliant document analysis engine enabling doctors to query patient histories in natural language with 99.8% precision.",
    tags: ["Python", "FastAPI", "ChromaDB", "AWS Med", "React"]
  },
  {
    id: "proj_6",
    category: "backend",
    title: "Real Ludo Engine & Dynamic Winner Placement",
    leads: ["Jothi Akka & Squad"],
    badge: "🎲 GAMING ALGORITHM",
    image: "https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?w=600&auto=format&fit=crop&q=80",
    desc: "Turn-based multiplayer Ludo tournament board game with passcode member login and real-time winner leaderboard re-ordering.",
    tags: ["JavaScript", "HTML5 Canvas", "Tailwind", "LocalStorage"]
  }
];

function initProjects() {
  renderProjects("all");
}

function filterProjects(filterKey) {
  document.querySelectorAll(".proj-filter-btn").forEach(btn => {
    btn.className = "proj-filter-btn px-4 py-2 rounded-xl text-xs font-mono font-bold bg-slate-900 text-gray-400 border border-slate-800";
  });

  const activeBtn = document.getElementById(`projFilter-${filterKey}`);
  if (activeBtn) {
    activeBtn.className = "proj-filter-btn px-4 py-2 rounded-xl text-xs font-mono font-bold bg-purple-500/20 text-purple-300 border border-purple-500/40 shadow";
  }

  renderProjects(filterKey);
}

function renderProjects(filterKey) {
  const grid = document.getElementById("projectsGrid");
  if (!grid) return;

  const filtered = filterKey === "all" ? PROJECTS_DATA : PROJECTS_DATA.filter(p => p.category === filterKey);

  grid.innerHTML = filtered.map(p => `
    <div class="glass-vibrant rounded-2xl overflow-hidden border border-purple-500/30 flex flex-col justify-between group hover:scale-[1.02] transition duration-300">
      <div>
        <div class="relative h-48 overflow-hidden">
          <img src="${p.image}" alt="${p.title}" class="w-full h-full object-cover group-hover:scale-110 transition duration-500">
          <span class="absolute top-3 right-3 px-3 py-1 rounded-full text-[10px] font-mono font-extrabold bg-[#070913]/90 backdrop-blur-md text-amber-400 border border-amber-400/40">
            ${p.badge}
          </span>
        </div>

        <div class="p-5">
          <div class="text-[11px] font-mono text-purple-300 font-bold">Leads: ${p.leads.join(", ")}</div>
          <h4 class="text-lg font-extrabold text-white mt-1 group-hover:text-amber-400 transition">${p.title}</h4>
          <p class="text-xs text-gray-300 mt-2 leading-relaxed line-clamp-3">${p.desc}</p>

          <div class="flex flex-wrap gap-1.5 mt-4">
            ${p.tags.map(t => `<span class="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-900 text-gray-300 border border-slate-800">#${t}</span>`).join("")}
          </div>
        </div>
      </div>

      <div class="p-5 pt-0">
        <button onclick="showToast('Project Demo Link: ${p.title} deployed under Jothi Akka!', 'success')" class="w-full py-2.5 rounded-xl bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/40 text-purple-300 text-xs font-bold transition flex items-center justify-center gap-2">
          <i class="fas fa-external-link-alt"></i> View Solution Architecture
        </button>
      </div>
    </div>
  `).join("");
}


// ==========================================================
// 6. TAMIL DEVELOPER IT MEMES & QUOTES GENERATOR
// ==========================================================
const MEMES_DATA = [
  {
    text: `"Client: Requirement maathirukom bro! <br>Jothi Akka: Payalugada, deploy panna code-a instant-a update pannungada!"`,
    author: "— Jothi Akka (Boss Quote #1)"
  },
  {
    text: `"Code local machine-la super-a work aagudhu bro! <br>Berlin: Production-la Docker container podunga, seamless-a run aagum!"`,
    author: "— Berlin (Code Master)"
  },
  {
    text: `"Design-la red color maathi cyan glassmorphism podunga bro! <br>Suresh: Aesthetic perfection dhaan namma trademark!"`,
    author: "— Suresh (UI/UX Master)"
  },
  {
    text: `"Model training-ukku 3090 GPU overload aayiduchu! <br>Abinash: Don't worry, RAG vector pipeline optimize panniyaachu!"`,
    author: "— Abinash (AI Master)"
  },
  {
    text: `"Flutter hot reload press panna moment-la life bright aayiduchu! <br>Ashok: 60 FPS mobile smoothness guaranteed!"`,
    author: "— Ashok (App Developer)"
  },
  {
    text: `"Requirement ketaa 'Ennane solraanga!' - Client vs Squad <br>Jothi Akka: Payalugada, requirement clear-a tharuvaen, task-a mudinga!"`,
    author: "— Squad Developer Fun Quote"
  }
];

let memeIndex = 0;

function generateRandomMeme() {
  memeIndex = (memeIndex + 1) % MEMES_DATA.length;
  const item = MEMES_DATA[memeIndex];

  const textEl = document.getElementById("memeText");
  const authorEl = document.getElementById("memeAuthor");

  if (textEl && authorEl) {
    textEl.style.opacity = "0";
    setTimeout(() => {
      textEl.innerHTML = item.text;
      authorEl.textContent = item.author;
      textEl.style.opacity = "1";
    }, 200);
  }
  showToast("Loaded next Tamil Developer Quote!", "info");
}


// ==========================================================
// 7. NEW SQUAD INTERACTIVE ENGINES (ARCADE, DJ, TROPHIES, AI BOT, DUEL)
// ==========================================================

// ----------------------------------------------------------
// 7A. 🎮 BOSS BATTLE RETRO CANVAS ARCADE GAME ENGINE
// ----------------------------------------------------------
let arcadeCanvas, arcadeCtx;
let arcadeGameActive = false;
let arcadeScore = 0;
let arcadeHighScore = parseInt(localStorage.getItem("payalugada_arcade_highscore") || "0");
let arcadeMissedCount = 0;
let arcadeHero = "jothi_akka";
let arcadePlayer = { x: 400, y: 360, w: 50, h: 40, speed: 8, dx: 0 };
let arcadeBullets = [];
let arcadeEnemies = [];
let arcadeParticles = [];
let arcadeAnimFrame = null;
let arcadeKeys = {};

const ARCADE_HEROES = {
  jothi_akka: { name: "Jothi Akka", color: "#F59E0B", icon: "👑" },
  berlin: { name: "Berlin", color: "#06B6D4", icon: "💻" },
  suresh: { name: "Suresh", color: "#EC4899", icon: "🎨" },
  abinash: { name: "Abinash", color: "#10B981", icon: "🧠" },
  ashok: { name: "Ashok", color: "#8B5CF6", icon: "📱" }
};

const BUG_TYPES = [
  { label: "SyntaxError", color: "#EF4444", points: 10, baseSpeed: 1.0 },
  { label: "500 Crash", color: "#F59E0B", points: 15, baseSpeed: 1.2 },
  { label: "MemoryLeak", color: "#8B5CF6", points: 20, baseSpeed: 1.4 },
  { label: "NullPointer", color: "#EC4899", points: 25, baseSpeed: 1.6 }
];

function initArcadeGame() {
  arcadeCanvas = document.getElementById("arcadeCanvas");
  if (!arcadeCanvas) return;
  arcadeCtx = arcadeCanvas.getContext("2d");

  const highEl = document.getElementById("arcadeHighScore");
  if (highEl) highEl.textContent = arcadeHighScore;

  // Keyboard Event Listeners
  window.addEventListener("keydown", (e) => {
    if (["ArrowLeft", "ArrowRight", "Space", "a", "d"].includes(e.code) && arcadeGameActive) {
      if (e.code === "Space") e.preventDefault();
    }
    arcadeKeys[e.code] = true;

    if (arcadeGameActive && e.code === "Space") {
      fireArcadeLaser();
    }
  });

  window.addEventListener("keyup", (e) => {
    arcadeKeys[e.code] = false;
  });

  // Mobile Controls
  const btnLeft = document.getElementById("btnMoveLeft");
  const btnRight = document.getElementById("btnMoveRight");
  const btnFire = document.getElementById("btnFireLaser");

  if (btnLeft) {
    btnLeft.addEventListener("touchstart", (e) => { e.preventDefault(); arcadeKeys["ArrowLeft"] = true; });
    btnLeft.addEventListener("touchend", () => { arcadeKeys["ArrowLeft"] = false; });
    btnLeft.addEventListener("mousedown", () => { arcadeKeys["ArrowLeft"] = true; });
    btnLeft.addEventListener("mouseup", () => { arcadeKeys["ArrowLeft"] = false; });
  }

  if (btnRight) {
    btnRight.addEventListener("touchstart", (e) => { e.preventDefault(); arcadeKeys["ArrowRight"] = true; });
    btnRight.addEventListener("touchend", () => { arcadeKeys["ArrowRight"] = false; });
    btnRight.addEventListener("mousedown", () => { arcadeKeys["ArrowRight"] = true; });
    btnRight.addEventListener("mouseup", () => { arcadeKeys["ArrowRight"] = false; });
  }

  if (btnFire) {
    btnFire.addEventListener("click", () => {
      if (arcadeGameActive) fireArcadeLaser();
    });
  }
}

function selectArcadeHero(heroKey) {
  if (!ARCADE_HEROES[heroKey]) return;
  arcadeHero = heroKey;
  
  document.querySelectorAll(".hero-select-btn").forEach(btn => {
    btn.classList.remove("active-hero", "bg-amber-500/20");
  });

  const targetBtn = document.getElementById(`heroBtn-${heroKey}`);
  if (targetBtn) targetBtn.classList.add("active-hero", "bg-amber-500/20");

  showToast(`Selected ${ARCADE_HEROES[heroKey].name} as Arcade Hero!`, "info");
}

function startArcadeGame() {
  arcadeScore = 0;
  arcadeMissedCount = 0;
  arcadeBullets = [];
  arcadeEnemies = [];
  arcadeParticles = [];
  arcadePlayer.x = (arcadeCanvas.width / 2) - 25;
  arcadeGameActive = true;

  const overlay = document.getElementById("arcadeOverlay");
  if (overlay) overlay.classList.add("hidden");

  updateArcadeHud();
  if (arcadeAnimFrame) cancelAnimationFrame(arcadeAnimFrame);
  arcadeGameLoop();

  showToast("Battle Started! Shoot down IT Bugs (5 Misses Allowed)!", "success");
}

function fireArcadeLaser() {
  const heroObj = ARCADE_HEROES[arcadeHero];
  arcadeBullets.push({
    x: arcadePlayer.x + (arcadePlayer.w / 2) - 3,
    y: arcadePlayer.y - 10,
    w: 6,
    h: 16,
    speed: 10,
    color: heroObj.color
  });
}

function updateArcadeHud() {
  const scoreEl = document.getElementById("arcadeScore");
  const missedEl = document.getElementById("arcadeMissedText");

  if (scoreEl) scoreEl.textContent = arcadeScore;
  if (missedEl) {
    missedEl.textContent = `${arcadeMissedCount} / 5`;
    if (arcadeMissedCount >= 4) missedEl.className = "text-xl font-mono font-black text-rose-500 animate-pulse";
    else if (arcadeMissedCount >= 2) missedEl.className = "text-xl font-mono font-black text-amber-400";
    else missedEl.className = "text-xl font-mono font-black text-cyan-400";
  }
}

function arcadeGameLoop() {
  if (!arcadeGameActive) return;

  // Clear Canvas
  arcadeCtx.fillStyle = "#03050B";
  arcadeCtx.fillRect(0, 0, arcadeCanvas.width, arcadeCanvas.height);

  // Background Starfield
  arcadeCtx.fillStyle = "rgba(255, 255, 255, 0.3)";
  for (let i = 0; i < 25; i++) {
    const sx = (i * 37) % arcadeCanvas.width;
    const sy = (Date.now() * 0.05 + i * 20) % arcadeCanvas.height;
    arcadeCtx.fillRect(sx, sy, 2, 2);
  }

  // Player Movement
  if (arcadeKeys["ArrowLeft"] || arcadeKeys["KeyA"]) {
    arcadePlayer.x = Math.max(10, arcadePlayer.x - arcadePlayer.speed);
  }
  if (arcadeKeys["ArrowRight"] || arcadeKeys["KeyD"]) {
    arcadePlayer.x = Math.min(arcadeCanvas.width - arcadePlayer.w - 10, arcadePlayer.x + arcadePlayer.speed);
  }

  // Draw Player Ship
  const heroObj = ARCADE_HEROES[arcadeHero];
  arcadeCtx.fillStyle = heroObj.color;
  arcadeCtx.beginPath();
  arcadeCtx.moveTo(arcadePlayer.x + arcadePlayer.w / 2, arcadePlayer.y);
  arcadeCtx.lineTo(arcadePlayer.x + arcadePlayer.w, arcadePlayer.y + arcadePlayer.h);
  arcadeCtx.lineTo(arcadePlayer.x, arcadePlayer.y + arcadePlayer.h);
  arcadeCtx.closePath();
  arcadeCtx.fill();

  // Player Icon Badge
  arcadeCtx.font = "16px sans-serif";
  arcadeCtx.fillText(heroObj.icon, arcadePlayer.x + 14, arcadePlayer.y + 32);

  // Dynamic Difficulty Scaling based on Score
  const speedMult = 1.0 + Math.min(2.5, (arcadeScore / 50) * 0.35);
  const spawnRate = Math.min(0.045, 0.015 + (arcadeScore / 100) * 0.008);

  // Spawn Enemy Bugs
  if (Math.random() < spawnRate) {
    const bType = BUG_TYPES[Math.floor(Math.random() * BUG_TYPES.length)];
    arcadeEnemies.push({
      x: Math.random() * (arcadeCanvas.width - 100) + 10,
      y: -30,
      w: 80,
      h: 28,
      type: bType,
      speed: bType.baseSpeed * speedMult
    });
  }

  // Update & Draw Bullets
  for (let i = arcadeBullets.length - 1; i >= 0; i--) {
    const b = arcadeBullets[i];
    b.y -= b.speed;

    arcadeCtx.fillStyle = b.color;
    arcadeCtx.fillRect(b.x, b.y, b.w, b.h);

    if (b.y < -20) arcadeBullets.splice(i, 1);
  }

  // Update & Draw Enemies
  for (let i = arcadeEnemies.length - 1; i >= 0; i--) {
    const bug = arcadeEnemies[i];
    bug.y += bug.speed;

    // Draw Bug Card
    arcadeCtx.fillStyle = bug.type.color;
    arcadeCtx.fillRect(bug.x, bug.y, bug.w, bug.h);

    arcadeCtx.fillStyle = "#FFFFFF";
    arcadeCtx.font = "10px monospace";
    arcadeCtx.fillText("🐛 " + bug.type.label, bug.x + 4, bug.y + 18);

    // Collision with Bullets
    for (let j = arcadeBullets.length - 1; j >= 0; j--) {
      const laser = arcadeBullets[j];
      if (laser.x >= bug.x && laser.x <= bug.x + bug.w && laser.y >= bug.y && laser.y <= bug.y + bug.h) {
        // Hit!
        arcadeScore += bug.type.points;
        updateArcadeHud();

        // Particles
        for (let p = 0; p < 8; p++) {
          arcadeParticles.push({
            x: bug.x + bug.w / 2,
            y: bug.y + bug.h / 2,
            vx: (Math.random() - 0.5) * 6,
            vy: (Math.random() - 0.5) * 6,
            color: bug.type.color,
            life: 20
          });
        }

        arcadeEnemies.splice(i, 1);
        arcadeBullets.splice(j, 1);

        // Check Arcade Achievement
        if (arcadeScore >= 100) {
          unlockAchievement("arcade_legend");
        }
        break;
      }
    }

    // Bug reaches bottom (Missed Bug!)
    if (bug.y > arcadeCanvas.height) {
      arcadeEnemies.splice(i, 1);
      arcadeMissedCount++;
      updateArcadeHud();

      showToast(`⚠️ Bug Missed! (${arcadeMissedCount} / 5)`, "warning");

      if (arcadeMissedCount >= 5) {
        endArcadeGame();
        return;
      }
    }
  }

  // Update Particles
  for (let p = arcadeParticles.length - 1; p >= 0; p--) {
    const pt = arcadeParticles[p];
    pt.x += pt.vx;
    pt.y += pt.vy;
    pt.life--;

    arcadeCtx.fillStyle = pt.color;
    arcadeCtx.fillRect(pt.x, pt.y, 3, 3);

    if (pt.life <= 0) arcadeParticles.splice(p, 1);
  }

  arcadeAnimFrame = requestAnimationFrame(arcadeGameLoop);
}

function endArcadeGame() {
  arcadeGameActive = false;
  
  if (arcadeScore > arcadeHighScore) {
    arcadeHighScore = arcadeScore;
    localStorage.setItem("payalugada_arcade_highscore", arcadeHighScore.toString());
    const highEl = document.getElementById("arcadeHighScore");
    if (highEl) highEl.textContent = arcadeHighScore;
  }

  const overlay = document.getElementById("arcadeOverlay");
  if (overlay) {
    overlay.classList.remove("hidden");
    overlay.innerHTML = `
      <div class="w-16 h-16 rounded-2xl bg-rose-500/20 border border-rose-400 flex items-center justify-center text-rose-400 text-3xl shadow-xl mb-3">
        💥
      </div>
      <h3 class="text-2xl font-black text-white mb-1">5 BUGS MISSED! GAME OVER</h3>
      <p class="text-sm font-mono text-amber-400 mb-4">FINAL SCORE: ${arcadeScore} PTS</p>
      <button onclick="startArcadeGame()" class="py-3 px-6 rounded-xl bg-gradient-to-r from-rose-500 to-amber-400 text-slate-950 font-black text-xs uppercase tracking-wider shadow-lg hover:scale-105 transition">
        🔄 PLAY AGAIN
      </button>
    `;
  }
}


// ----------------------------------------------------------
// 7B. 💚 SPOTIFY STYLE TAMIL SQUAD AUDIO PLAYER & DJ STAGE ENGINE
// ----------------------------------------------------------
const MEMBER_INFO = {
  jothi: {
    name: "BOSS JOTHI AKKA (CTO)",
    title: "Boss Jothi Akka",
    category: "👑 BOSS JOTHI AKKA'S PLAYLIST",
    art: "assets/images/jothi_akka_boss.jpg"
  },
  berlin: {
    name: "BERLIN (CODE MASTER)",
    title: "Berlin Code Master",
    category: "💻 BERLIN'S CHRISTIAN SONGS",
    art: "assets/images/berlin_code_master.jpg"
  },
  ashok: {
    name: "ASHOK (APP DEVELOPER)",
    title: "Ashok App Developer",
    category: "📱 ASHOK'S CHRISTIAN WORSHIP",
    art: "assets/images/ashok_app_developer.jpg"
  },
  suresh: {
    name: "SURESH (UI/UX MASTER)",
    title: "Suresh UI/UX Master",
    category: "🎨 SURESH'S MOVIE HITS",
    art: "assets/images/suresh_ui_ux.jpg"
  },
  abinash: {
    name: "ABINASH (AI MASTER)",
    title: "Abinash AI Master",
    category: "🧠 ABINASH'S TECHNO MASS",
    art: "assets/images/abinash_ai_master.jpg"
  }
};

const MEMBER_PLAYLISTS = {
  jothi: [
    {
      id: 0,
      title: "அரபிக் குத்து (Arabic Kuthu)",
      artist: "BOSS JOTHI AKKA (CTO)",
      sub: "Beast Movie Mass Anirudh Song • MP3 Vocal Audio",
      category: "👑 BOSS JOTHI AKKA'S PLAYLIST",
      art: "assets/images/jothi_akka_boss.jpg",
      src: "assets/audio/jothi_movie.mp3",
      duration: 280
    }
  ],
  berlin: [
    {
      id: 0,
      title: "இயேசுவே என் தேவனே",
      artist: "BERLIN (CODE MASTER)",
      sub: "Tamil Christian Worship Praise Song • MP3 Vocal Audio",
      category: "💻 BERLIN'S CHRISTIAN PRAISE",
      art: "assets/images/berlin_code_master.jpg",
      src: "assets/audio/ashok_christian.mp3",
      duration: 225
    }
  ],
  ashok: [
    {
      id: 0,
      title: "உன்னையே நான் நேசிப்பேன்",
      artist: "ASHOK (APP DEVELOPER)",
      sub: "Tamil Christian Devotional Praise Song • MP3 Vocal Audio",
      category: "📱 ASHOK'S CHRISTIAN WORSHIP",
      art: "assets/images/ashok_app_developer.jpg",
      src: "assets/audio/ashok_christian.mp3",
      duration: 250
    }
  ],
  suresh: [
    {
      id: 0,
      title: "வாத்தி கமிங் (Vaathi Coming)",
      artist: "SURESH (UI/UX MASTER)",
      sub: "Master Movie Hit Anirudh Song • MP3 Vocal Audio",
      category: "🎨 SURESH'S MOVIE HITS",
      art: "assets/images/suresh_ui_ux.jpg",
      src: "assets/audio/jothi_movie.mp3",
      duration: 230
    }
  ],
  abinash: [
    {
      id: 0,
      title: "ஹுக்கும் (Hukum Jailer Theme)",
      artist: "ABINASH (AI MASTER)",
      sub: "Jailer Movie Mass Theme Song • MP3 Vocal Audio",
      category: "🧠 ABINASH'S TECHNO MASS",
      art: "assets/images/abinash_ai_master.jpg",
      src: "assets/audio/jothi_movie.mp3",
      duration: 210
    }
  ]
};

let activeMemberKey = "jothi";
let SPOTIFY_PLAYLIST = MEMBER_PLAYLISTS.jothi;
let spotifyCurrentIdx = 0;
let spotifyIsPlaying = false;
let spotifyVolume = 0.8;
let spotifyElapsed = 0;
let sfxAudioCtx = null;

function switchMemberPlaylist(memberKey) {
  if (!MEMBER_PLAYLISTS[memberKey]) return;
  activeMemberKey = memberKey;
  SPOTIFY_PLAYLIST = MEMBER_PLAYLISTS[memberKey];
  spotifyCurrentIdx = 0;

  // Highlight active tab
  document.querySelectorAll("[id^='memTab-']").forEach(btn => {
    btn.className = "px-3.5 py-1.5 rounded-xl bg-slate-900 text-gray-400 border border-slate-800 text-xs font-mono font-bold flex items-center gap-1.5 transition";
  });

  const activeBtn = document.getElementById(`memTab-${memberKey}`);
  const colorClasses = {
    jothi: "px-3.5 py-1.5 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-400 text-xs font-mono font-bold flex items-center gap-1.5 transition",
    berlin: "px-3.5 py-1.5 rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-400 text-xs font-mono font-bold flex items-center gap-1.5 transition",
    ashok: "px-3.5 py-1.5 rounded-xl bg-purple-500/20 text-purple-300 border border-purple-400 text-xs font-mono font-bold flex items-center gap-1.5 transition",
    suresh: "px-3.5 py-1.5 rounded-xl bg-pink-500/20 text-pink-300 border border-pink-400 text-xs font-mono font-bold flex items-center gap-1.5 transition",
    abinash: "px-3.5 py-1.5 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-400 text-xs font-mono font-bold flex items-center gap-1.5 transition"
  };

  if (activeBtn) activeBtn.className = colorClasses[memberKey] || colorClasses.jothi;

  const labelEl = document.getElementById("activeMemberPlaylistName");
  const info = MEMBER_INFO[memberKey] || MEMBER_INFO.jothi;
  if (labelEl) {
    labelEl.textContent = `${info.category} (${SPOTIFY_PLAYLIST.length} SONGS)`;
  }

  updateSpotifyPlayerUI();
  renderSpotifyPlaylistGrid();

  const audioEl = document.getElementById("spotifyAudio");
  if (audioEl && SPOTIFY_PLAYLIST[0]) {
    audioEl.src = SPOTIFY_PLAYLIST[0].src;
  }

  showToast(`🎵 Switched to ${info.title}'s Personal Playlist!`, "success");
}

function playDjSfx(type) {
  try {
    if (!sfxAudioCtx) sfxAudioCtx = new (window.AudioContext || window.webkitAudioContext)();
    if (sfxAudioCtx.state === "suspended") sfxAudioCtx.resume();

    const now = sfxAudioCtx.currentTime;
    const osc = sfxAudioCtx.createOscillator();
    const gain = sfxAudioCtx.createGain();

    osc.connect(gain);
    gain.connect(sfxAudioCtx.destination);

    if (type === "airhorn") {
      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(466, now);
      osc.frequency.exponentialRampToValueAtTime(700, now + 0.15);
      gain.gain.setValueAtTime(0.4, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);
      osc.start(now);
      osc.stop(now + 0.4);
      showToast("📢 AIRHORN BLAST!!", "warning");
    } else if (type === "bassdrop") {
      osc.type = "sine";
      osc.frequency.setValueAtTime(150, now);
      osc.frequency.exponentialRampToValueAtTime(30, now + 0.8);
      gain.gain.setValueAtTime(0.6, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.8);
      osc.start(now);
      osc.stop(now + 0.8);
      showToast("💣 HEAVY BASS DROP!!", "error");
    } else if (type === "scratch") {
      osc.type = "triangle";
      osc.frequency.setValueAtTime(800, now);
      osc.frequency.linearRampToValueAtTime(300, now + 0.1);
      osc.frequency.linearRampToValueAtTime(900, now + 0.2);
      gain.gain.setValueAtTime(0.35, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
      osc.start(now);
      osc.stop(now + 0.25);
      showToast("🎛️ DJ SCRATCH!", "info");
    } else if (type === "cheer") {
      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(523, now);
      osc.frequency.exponentialRampToValueAtTime(659, now + 0.3);
      gain.gain.setValueAtTime(0.3, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.5);
      osc.start(now);
      osc.stop(now + 0.5);
      showToast("👏 MASS CROWD CHEERS!", "success");
    } else if (type === "laser") {
      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(1200, now);
      osc.frequency.exponentialRampToValueAtTime(100, now + 0.25);
      gain.gain.setValueAtTime(0.4, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
      osc.start(now);
      osc.stop(now + 0.25);
      showToast("⚡ CYBER LASER!", "info");
    } else if (type === "kuthu") {
      osc.type = "triangle";
      osc.frequency.setValueAtTime(180, now);
      osc.frequency.exponentialRampToValueAtTime(45, now + 0.3);
      gain.gain.setValueAtTime(0.5, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
      osc.start(now);
      osc.stop(now + 0.35);
      showToast("🥁 KUTHU BEAT DROP!!", "warning");
    }
  } catch (e) {}
}

// Animated Disco DJ Stage Lights Engine
function initDjDiscoLights() {
  const canvas = document.getElementById("djDiscoOverlay");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  let angle = 0;

  function renderDiscoLights() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (spotifyIsPlaying) {
      angle += 0.03;
      const colors = ["#ff007f", "#00f3ff", "#00ff87", "#ffaa00", "#a855f7", "#ff0055"];

      for (let i = 0; i < colors.length; i++) {
        const beamX = (canvas.width / (colors.length - 1)) * i;
        const targetX = beamX + Math.sin(angle + i) * (canvas.width * 0.3);

        const gradient = ctx.createLinearGradient(beamX, 0, targetX, canvas.height);
        gradient.addColorStop(0, colors[i]);
        gradient.addColorStop(1, "transparent");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.moveTo(beamX - 15, 0);
        ctx.lineTo(beamX + 15, 0);
        ctx.lineTo(targetX + 60, canvas.height);
        ctx.lineTo(targetX - 60, canvas.height);
        ctx.closePath();
        ctx.fill();
      }
    }
    requestAnimationFrame(renderDiscoLights);
  }
  renderDiscoLights();
}

// ----------------------------------------------------------
// INDEXEDDB PERMANENT AUDIO PERSISTENCE ENGINE (MEMBER-KEYED)
// ----------------------------------------------------------
const DB_NAME = "PayalugadaAudioDB";
const DB_VERSION = 1;
const STORE_NAME = "uploaded_songs";

function openAudioDB() {
  return new Promise((resolve, reject) => {
    if (!window.indexedDB) return reject("IndexedDB not supported");
    const request = window.indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = (e) => {
      const db = e.target.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: "id" });
      }
    };

    request.onsuccess = (e) => resolve(e.target.result);
    request.onerror = (e) => reject(e.target.error);
  });
}

async function saveSongsToDB(memberPlaylists) {
  try {
    const db = await openAudioDB();
    const tx = db.transaction(STORE_NAME, "readwrite");
    const store = tx.objectStore(STORE_NAME);

    store.clear();

    const keys = Object.keys(memberPlaylists);
    for (const key of keys) {
      const list = memberPlaylists[key];
      if (!list) continue;
      for (let i = 0; i < list.length; i++) {
        const item = list[i];
        store.put({
          id: `${key}_${i}`,
          memberKey: key,
          trackIdx: i,
          title: item.title,
          artist: item.artist,
          sub: item.sub,
          category: item.category,
          art: item.art,
          audioBlob: item.rawBlob || null,
          src: item.rawBlob ? null : item.src,
          duration: item.duration || 240
        });
      }
    }

    tx.oncomplete = () => {
      console.log("IndexedDB: Member audio playlists saved permanently!");
    };
  } catch (err) {
    console.error("IndexedDB Save Error:", err);
  }
}

async function loadSavedSongsFromDB() {
  try {
    const db = await openAudioDB();
    const tx = db.transaction(STORE_NAME, "readonly");
    const store = tx.objectStore(STORE_NAME);

    const request = store.getAll();
    request.onsuccess = () => {
      const items = request.result;
      if (items && items.length > 0) {
        const restoredLists = {};

        items.forEach((item) => {
          const mKey = item.memberKey || "jothi";
          if (!restoredLists[mKey]) restoredLists[mKey] = [];

          let audioSrc = item.src;
          if (item.audioBlob) {
            audioSrc = URL.createObjectURL(item.audioBlob);
          }

          restoredLists[mKey].push({
            id: restoredLists[mKey].length,
            title: item.title,
            artist: item.artist,
            sub: item.sub,
            category: item.category,
            art: item.art,
            rawBlob: item.audioBlob,
            src: audioSrc,
            duration: item.duration || 240
          });
        });

        Object.keys(restoredLists).forEach(k => {
          MEMBER_PLAYLISTS[k] = restoredLists[k];
        });

        switchMemberPlaylist(activeMemberKey);
        showToast(`💾 Restored Saved Member Song Playlists!`, "info");
      }
    };
  } catch (err) {
    console.error("IndexedDB Load Error:", err);
  }
}

async function clearSavedSongsDB() {
  try {
    const db = await openAudioDB();
    const tx = db.transaction(STORE_NAME, "readwrite");
    const store = tx.objectStore(STORE_NAME);
    store.clear();
    showToast("🗑️ Saved Songs Cleared!", "info");
    setTimeout(() => location.reload(), 500);
  } catch (err) {
    console.error(err);
  }
}

function initDjStation() {
  // Load saved songs from IndexedDB permanently!
  loadSavedSongsFromDB();

  // Initialize Animated Disco DJ Stage Lights Engine!
  initDjDiscoLights();

  const visCanvas = document.getElementById("spotifyVisualizerCanvas");
  if (!visCanvas) return;
  const ctx = visCanvas.getContext("2d");

  function drawSpectrum() {
    ctx.fillStyle = "#070913";
    ctx.fillRect(0, 0, visCanvas.width, visCanvas.height);

    const barCount = 28;
    const barWidth = visCanvas.width / barCount;

    for (let i = 0; i < barCount; i++) {
      const h = spotifyIsPlaying 
        ? Math.sin(Date.now() * 0.008 + i * 0.4) * 12 + 15 
        : Math.sin(i * 0.4) * 3 + 4;

      const gradient = ctx.createLinearGradient(0, visCanvas.height - h, 0, visCanvas.height);
      gradient.addColorStop(0, "#1DB954");
      gradient.addColorStop(1, "#06B6D4");

      ctx.fillStyle = gradient;
      ctx.fillRect(i * barWidth + 1, visCanvas.height - h, barWidth - 2, h);
    }
    requestAnimationFrame(drawSpectrum);
  }
  drawSpectrum();
}

function selectSpotifyTrack(idx) {
  if (idx < 0 || idx >= SPOTIFY_PLAYLIST.length) return;
  spotifyCurrentIdx = idx;
  spotifyElapsed = 0;
  spotifyIsPlaying = true;

  updateSpotifyPlayerUI();
  playSpotifyAudio();

  showToast(`💚 Playing MP3 Song: "${SPOTIFY_PLAYLIST[idx].title}"`, "success");
  unlockAchievement("soundboard_freak");
}

function toggleSpotifyPlay() {
  const audioEl = document.getElementById("spotifyAudio");
  const playIcon = document.getElementById("spotifyPlayIcon");
  const frameEl = document.getElementById("djDeckFrame");

  if (!audioEl) return;

  if (audioEl.paused) {
    audioEl.play().catch(e => console.log(e));
    spotifyIsPlaying = true;
    if (playIcon) playIcon.className = "fas fa-pause text-slate-950";
    if (frameEl) frameEl.classList.add("playing-beat");
    showToast("▶ Playing Real MP3 Audio Song", "success");
  } else {
    audioEl.pause();
    spotifyIsPlaying = false;
    if (playIcon) playIcon.className = "fas fa-play ml-0.5 text-slate-950";
    if (frameEl) frameEl.classList.remove("playing-beat");
    showToast("⏸ MP3 Audio Song Paused", "info");
  }
}

function playSpotifyAudio() {
  const track = SPOTIFY_PLAYLIST[spotifyCurrentIdx];
  const audioEl = document.getElementById("spotifyAudio");
  const playIcon = document.getElementById("spotifyPlayIcon");
  const frameEl = document.getElementById("djDeckFrame");

  if (audioEl) {
    audioEl.src = track.src;
    audioEl.volume = spotifyVolume;
    audioEl.play().then(() => {
      spotifyIsPlaying = true;
      if (playIcon) playIcon.className = "fas fa-pause text-slate-950";
      if (frameEl) frameEl.classList.add("playing-beat");
    }).catch(e => {
      console.log("Audio play error:", e);
    });

    audioEl.ontimeupdate = () => {
      if (!audioEl.duration) return;
      spotifyElapsed = Math.floor(audioEl.currentTime);
      const progressPct = (audioEl.currentTime / audioEl.duration) * 100;
      const progressBar = document.getElementById("spotifyProgressBar");
      const currentTimeEl = document.getElementById("spotifyCurrentTime");

      if (progressBar) progressBar.style.width = `${progressPct}%`;
      if (currentTimeEl) {
        const mins = Math.floor(spotifyElapsed / 60);
        const secs = spotifyElapsed % 60;
        currentTimeEl.textContent = `${mins}:${secs < 10 ? '0' : ''}${secs}`;
      }
    };

    audioEl.onended = () => {
      nextSpotifyTrack();
    };
  }
}

function stopSpotifyAudio() {
  const audioEl = document.getElementById("spotifyAudio");
  if (audioEl) audioEl.pause();
}

function nextSpotifyTrack() {
  const nextIdx = (spotifyCurrentIdx + 1) % SPOTIFY_PLAYLIST.length;
  selectSpotifyTrack(nextIdx);
}

function prevSpotifyTrack() {
  const prevIdx = (spotifyCurrentIdx - 1 + SPOTIFY_PLAYLIST.length) % SPOTIFY_PLAYLIST.length;
  selectSpotifyTrack(prevIdx);
}

function setSpotifyVolume(val) {
  spotifyVolume = val / 100;
  const audioEl = document.getElementById("spotifyAudio");
  if (audioEl) audioEl.volume = spotifyVolume;
}

function seekSpotifyAudio(e) {
  const bar = e.currentTarget;
  const rect = bar.getBoundingClientRect();
  const clickX = e.clientX - rect.left;
  const pct = clickX / rect.width;
  const audioEl = document.getElementById("spotifyAudio");

  if (audioEl && audioEl.duration) {
    audioEl.currentTime = pct * audioEl.duration;
  }
}

function updateSpotifyPlayerUI() {
  if (!SPOTIFY_PLAYLIST || !SPOTIFY_PLAYLIST.length) return;
  const track = SPOTIFY_PLAYLIST[spotifyCurrentIdx];
  if (!track) return;

  const info = MEMBER_INFO[activeMemberKey] || MEMBER_INFO.jothi;

  const artEl = document.getElementById("spotifyAlbumArt");
  const artistEl = document.getElementById("spotifyArtistLabel");
  const titleEl = document.getElementById("spotifySongTitle");
  const subEl = document.getElementById("spotifySongSub");
  const catEl = document.getElementById("spotifyBadgeCategory");
  const totalTimeEl = document.getElementById("spotifyTotalTime");
  const playIcon = document.getElementById("spotifyPlayIcon");

  if (artEl) artEl.src = track.art || info.art;
  if (artistEl) artistEl.textContent = track.artist || info.name;
  if (titleEl) titleEl.textContent = track.title;
  if (subEl) subEl.textContent = track.sub || `${info.title} MP3 Audio Track`;
  if (catEl) catEl.textContent = track.category || info.category;
  
  if (totalTimeEl) {
    const mins = Math.floor(track.duration / 60);
    const secs = track.duration % 60;
    totalTimeEl.textContent = `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  }

  if (playIcon) playIcon.className = spotifyIsPlaying ? "fas fa-pause text-slate-950" : "fas fa-play ml-0.5 text-slate-950";

  renderSpotifyPlaylistGrid();
}

function renderSpotifyPlaylistGrid() {
  const container = document.getElementById("spotifyPlaylistGrid");
  if (!container) return;

  container.innerHTML = "";

  const info = MEMBER_INFO[activeMemberKey] || MEMBER_INFO.jothi;

  SPOTIFY_PLAYLIST.forEach((track, i) => {
    const isCurrent = i === spotifyCurrentIdx;
    const artSrc = track.art || info.art;

    const btn = document.createElement("button");
    btn.onclick = () => selectSpotifyTrack(i);
    btn.id = `playlistTrack-${i}`;
    btn.className = isCurrent
      ? "w-full p-3.5 rounded-xl bg-emerald-500/20 border border-emerald-400 text-emerald-300 text-left font-bold transition flex items-center gap-3"
      : "w-full p-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-gray-300 text-left font-bold transition flex items-center gap-3";

    btn.innerHTML = `
      <div class="w-9 h-9 rounded-lg overflow-hidden flex-shrink-0 relative">
        <img src="${artSrc}" class="w-full h-full object-cover">
      </div>
      <div class="flex-1 min-w-0">
        <span class="block truncate">${i + 1}. ${track.title}</span>
        <span class="text-[10px] text-gray-400 font-sans block truncate">${track.sub || track.artist || info.name}</span>
      </div>
      ${isCurrent ? '<i class="fas fa-waveform text-emerald-400 animate-pulse"></i>' : ''}
    `;

    container.appendChild(btn);
  });
}

let targetAudioMemberKey = "jothi";

function triggerMemberAudioUpload(memberKey) {
  targetAudioMemberKey = memberKey || activeMemberKey || "jothi";
  const inputEl = document.getElementById("memberAudioFileInput");
  if (inputEl) {
    inputEl.value = "";
    inputEl.click();
  }
}

function triggerSingleSongUpload(memberKey) {
  triggerMemberAudioUpload(memberKey || activeMemberKey);
}

function triggerAlbumUpload(memberKey) {
  targetAudioMemberKey = memberKey || activeMemberKey || "jothi";
  const inputEl = document.getElementById("albumAudioFileInput");
  if (inputEl) {
    inputEl.value = "";
    inputEl.click();
  }
}

function handleMemberAudioFileChange(event) {
  const files = event.target.files;
  if (!files || !files.length) return;

  const file = files[0];
  const audioBlobUrl = URL.createObjectURL(file);
  const mKey = targetAudioMemberKey || activeMemberKey || "jothi";
  const info = MEMBER_INFO[mKey] || MEMBER_INFO.jothi;
  const cleanTitle = file.name.replace(/\.[^/.]+$/, "");

  if (!MEMBER_PLAYLISTS[mKey]) MEMBER_PLAYLISTS[mKey] = [];

  const trackObj = {
    id: MEMBER_PLAYLISTS[mKey].length,
    title: cleanTitle,
    artist: info.name,
    sub: `${info.title} Custom Track • MP3 Audio`,
    category: info.category,
    art: info.art,
    rawBlob: file,
    src: audioBlobUrl,
    duration: 240
  };

  MEMBER_PLAYLISTS[mKey].unshift(trackObj);

  switchMemberPlaylist(mKey);

  // Save all member playlists to IndexedDB
  saveSongsToDB(MEMBER_PLAYLISTS);

  showToast(`🎉 Uploaded & Saved Custom Song for ${info.title}: "${cleanTitle}"!`, "success");

  const djSec = document.getElementById("djStation");
  if (djSec) djSec.scrollIntoView({ behavior: "smooth" });
}

function handleAlbumAudioFiles(event) {
  const fileList = event.target.files;
  if (!fileList || !fileList.length) return;

  const files = Array.from(fileList).slice(0, 20); // Up to 20 songs at once!
  const mKey = targetAudioMemberKey || activeMemberKey || "jothi";
  const info = MEMBER_INFO[mKey] || MEMBER_INFO.jothi;

  if (!MEMBER_PLAYLISTS[mKey]) MEMBER_PLAYLISTS[mKey] = [];

  // Replace that member's playlist with the uploaded album
  MEMBER_PLAYLISTS[mKey].length = 0;

  files.forEach((file, idx) => {
    const audioBlobUrl = URL.createObjectURL(file);
    const cleanTitle = file.name.replace(/\.[^/.]+$/, "");

    MEMBER_PLAYLISTS[mKey].push({
      id: idx,
      title: cleanTitle,
      artist: info.name,
      sub: `${info.title} Album Track ${idx + 1} of ${files.length} • MP3 Audio`,
      category: `${info.category} (${idx + 1}/${files.length})`,
      art: info.art,
      rawBlob: file,
      src: audioBlobUrl,
      duration: 240
    });
  });

  switchMemberPlaylist(mKey);

  // Save all member playlists to IndexedDB
  saveSongsToDB(MEMBER_PLAYLISTS);

  showToast(`🎉 Uploaded & Saved Full Album (${files.length} Songs) for ${info.title}!`, "success");

  const djSec = document.getElementById("djStation");
  if (djSec) djSec.scrollIntoView({ behavior: "smooth" });
}


// ----------------------------------------------------------
// 7C. 🏆 GAMIFIED ACHIEVEMENTS & CONFETTI SYSTEM ENGINE
// ----------------------------------------------------------
const SQUAD_ACHIEVEMENTS = [
  { id: "ludo_king", title: "🎲 Ludo Arena Champion", desc: "Played or won a Ludo Tournament match", icon: "fa-dice", color: "text-amber-400" },
  { id: "quiz_slayer", title: "🧠 IT Bug Hunter", desc: "Scored high on IT Bug Battle Quiz / Speed Duel", icon: "fa-brain", color: "text-pink-400" },
  { id: "soundboard_freak", title: "🔊 Squad Meme Master", desc: "Mixed dialogue soundboard tracks", icon: "fa-volume-high", color: "text-cyan-400" },
  { id: "arcade_legend", title: "🎮 Arcade Legend", desc: "Scored 100+ points in Boss Arcade Game", icon: "fa-gamepad", color: "text-rose-400" },
  { id: "code_wizard", title: "💻 Code Wizard", desc: "Ran code snippet in Code Playground", icon: "fa-code", color: "text-purple-400" },
  { id: "akka_favorite", title: "👑 Akka's Favorite Payal", desc: "Unlocked 4 or more squad achievements", icon: "fa-crown", color: "text-amber-300" }
];

let userUnlockedBadges = JSON.parse(localStorage.getItem("payalugada_unlocked_badges") || "[]");

function initAchievements() {
  renderAchievementsGrid();
}

function renderAchievementsGrid() {
  const container = document.getElementById("achievementsGrid");
  const countEl = document.getElementById("achievementUnlockedCount");
  if (!container) return;

  if (countEl) countEl.textContent = `${userUnlockedBadges.length} / ${SQUAD_ACHIEVEMENTS.length}`;

  container.innerHTML = SQUAD_ACHIEVEMENTS.map(ach => {
    const isUnlocked = userUnlockedBadges.includes(ach.id);
    return `
      <div class="badge-card ${isUnlocked ? 'unlocked' : 'locked'} p-5 rounded-2xl border border-slate-800 bg-slate-900/80 flex items-start gap-4">
        <div class="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center text-xl ${ach.color} shadow">
          <i class="fas ${ach.icon}"></i>
        </div>
        <div class="flex-1">
          <div class="flex items-center justify-between">
            <h4 class="text-sm font-extrabold text-white">${ach.title}</h4>
            ${isUnlocked ? '<span class="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400">UNLOCKED</span>' : '<span class="text-[10px] font-mono text-gray-500">LOCKED</span>'}
          </div>
          <p class="text-xs text-gray-400 mt-1 font-mono">${ach.desc}</p>
        </div>
      </div>
    `;
  }).join("");
}

function unlockAchievement(id) {
  if (userUnlockedBadges.includes(id)) return;
  userUnlockedBadges.push(id);
  localStorage.setItem("payalugada_unlocked_badges", JSON.stringify(userUnlockedBadges));

  const targetAch = SQUAD_ACHIEVEMENTS.find(a => a.id === id);
  if (targetAch) {
    showToast(`🏆 UNLOCKED TROPHY: "${targetAch.title}"!`, "success");
    triggerConfetti();
  }

  // Check Master Achievement
  if (userUnlockedBadges.length >= 4 && !userUnlockedBadges.includes("akka_favorite")) {
    setTimeout(() => unlockAchievement("akka_favorite"), 1200);
  }

  renderAchievementsGrid();
}

function triggerConfetti() {
  const canvas = document.getElementById("confettiCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const particles = [];
  const colors = ["#F59E0B", "#EC4899", "#06B6D4", "#10B981", "#8B5CF6"];

  for (let i = 0; i < 80; i++) {
    particles.push({
      x: canvas.width / 2,
      y: canvas.height / 2,
      vx: (Math.random() - 0.5) * 14,
      vy: (Math.random() - 0.7) * 16,
      size: Math.random() * 8 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      life: 100
    });
  }

  function renderConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let active = false;

    particles.forEach(p => {
      if (p.life > 0) {
        active = true;
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.3; // gravity
        p.life--;

        ctx.fillStyle = p.color;
        ctx.fillRect(p.x, p.y, p.size, p.size);
      }
    });

    if (active) requestAnimationFrame(renderConfetti);
    else ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
  renderConfetti();
}


// ----------------------------------------------------------
// 7D. 🤖 SQUAD AI ROAST & ADVICE CHATBOT ASSISTANT
// ----------------------------------------------------------
function initSquadAiBot() {
  // Setup default state
}

function toggleJothiAiModal() {
  const modal = document.getElementById("jothiAiModal");
  if (modal) modal.classList.toggle("hidden");
}

function sendQuickAiPrompt(text) {
  const input = document.getElementById("jothiAiInput");
  if (input) {
    input.value = text;
    submitJothiAiQuery();
  }
}

function submitJothiAiQuery() {
  const input = document.getElementById("jothiAiInput");
  const chatBody = document.getElementById("jothiAiChatBody");
  if (!input || !chatBody) return;

  const query = input.value.trim();
  if (!query) return;

  // Append User Msg
  const userMsgHtml = `
    <div class="p-3 rounded-2xl bg-slate-900 border border-slate-800 text-gray-200 text-right">
      <strong>You:</strong> "${query}"
    </div>
  `;
  chatBody.insertAdjacentHTML("beforeend", userMsgHtml);
  input.value = "";

  // Generate Squad Response
  setTimeout(() => {
    let replyText = "";
    const qLower = query.toLowerCase();

    if (qLower.includes("motivate") || qLower.includes("jothi")) {
      replyText = "👑 <strong>Boss Jothi Akka:</strong> Payalugada, no excuses! Code clean-a irukanum, uptime 100% irukanum! Direct your energy into building epic code!";
    } else if (qLower.includes("code") || qLower.includes("backend") || qLower.includes("api")) {
      replyText = "💻 <strong>Berlin (Code Master):</strong> Express/Node.js API endpoint created with async middleware & sub-10ms response time!";
    } else if (qLower.includes("design") || qLower.includes("ui")) {
      replyText = "🎨 <strong>Suresh (UI/UX):</strong> Glassmorphism glow layout applied with Tailwind CSS gradients!";
    } else if (qLower.includes("ai") || qLower.includes("matrix")) {
      replyText = "🧠 <strong>Abinash (AI Master):</strong> Matrix Neural Rain loaded! AI vector embeddings initialized!";
      if (qLower.includes("matrix") && typeof toggleMatrixRain === "function") toggleMatrixRain();
    } else {
      replyText = "👑 <strong>Jothi Akka & Squad:</strong> Super Question! Squad members Berlin, Suresh, Abinash, Ashok are executing this task under Jothi Akka's directive!";
    }

    const aiMsgHtml = `
      <div class="p-3 rounded-2xl bg-[#070913] border border-amber-500/40 text-amber-300">
        ${replyText}
      </div>
    `;
    chatBody.insertAdjacentHTML("beforeend", aiMsgHtml);
    chatBody.scrollTop = chatBody.scrollHeight;
  }, 400);
}


// ----------------------------------------------------------
// 7E. ⚔️ 1v1 SPEED BUG DUEL ARENA ENGINE
// ----------------------------------------------------------
let duelSelectedRival = "berlin";
let duelTimer = null;
let duelTimeLeft = 30;

const DUEL_CHALLENGES = {
  berlin: {
    rivalName: "Berlin (Code Master)",
    difficulty: "HARD",
    targetWpm: 75,
    errorMsg: "Uncaught SyntaxError: Unexpected token 'b' or missing closing parenthesis",
    buggyCode: `function calculateTotal(prices) {\n  return prices.reduce((a, b => a + b);\n}`,
    expectedFix: `prices.reduce((a, b) => a + b)`
  },
  suresh: {
    rivalName: "Suresh (UI/UX Master)",
    difficulty: "MEDIUM",
    targetWpm: 60,
    errorMsg: "TypeError: name.toUpper is not a function",
    buggyCode: `const heroName = "Payalugada";\nconsole.log(heroName.toUpper());`,
    expectedFix: `toUpperCase()`
  },
  abinash: {
    rivalName: "Abinash (AI Master)",
    difficulty: "HARD",
    targetWpm: 80,
    errorMsg: "SyntaxError: Unexpected identifier in for-loop condition",
    buggyCode: `for (let i = 0; i <= 5 i++) {\n  console.log("AI Agent Iteration: " + i);\n}`,
    expectedFix: `i <= 5; i++`
  },
  ashok: {
    rivalName: "Ashok (App Developer)",
    difficulty: "EASY",
    targetWpm: 50,
    errorMsg: "SyntaxError: Unexpected token '{' in if-statement",
    buggyCode: `if (user == null {\n  console.log("App User Offline");\n}`,
    expectedFix: `user == null)`
  }
};

function initBugDuel() {
  selectDuelRival("berlin");
}

function selectDuelRival(rivalKey) {
  if (!DUEL_CHALLENGES[rivalKey]) return;
  duelSelectedRival = rivalKey;

  document.querySelectorAll("[id^='rivalBtn-']").forEach(b => {
    b.className = "px-3.5 py-2 rounded-xl bg-slate-900 text-gray-400 border border-slate-800 font-bold flex items-center gap-2";
  });

  const activeBtn = document.getElementById(`rivalBtn-${rivalKey}`);
  if (activeBtn) {
    activeBtn.className = "px-3.5 py-2 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-400 font-bold flex items-center gap-2";
  }

  resetDuelChallenge();
}

function resetDuelChallenge() {
  const chal = DUEL_CHALLENGES[duelSelectedRival];
  if (!chal) return;

  const diffBadge = document.getElementById("duelDifficultyBadge");
  const errTrace = document.getElementById("duelErrorTrace");
  const codeInput = document.getElementById("duelCodeInput");
  const rivalWpm = document.getElementById("rivalWpmText");
  const timerEl = document.getElementById("duelTimerText");

  if (diffBadge) diffBadge.textContent = chal.difficulty;
  if (errTrace) errTrace.textContent = chal.errorMsg;
  if (codeInput) codeInput.value = chal.buggyCode;
  if (rivalWpm) rivalWpm.textContent = `${chal.targetWpm} WPM`;
  if (timerEl) timerEl.textContent = "00:30";

  duelTimeLeft = 30;
  if (duelTimer) clearInterval(duelTimer);
}

function submitDuelSolution() {
  const chal = DUEL_CHALLENGES[duelSelectedRival];
  const codeInput = document.getElementById("duelCodeInput");
  if (!chal || !codeInput) return;

  const userCode = codeInput.value.trim();

  if (userCode.includes(chal.expectedFix)) {
    unlockAchievement("quiz_slayer");
    showToast(`⚔️ VICTORY! You defeated ${chal.rivalName} in Bug Duel!`, "success");
    triggerConfetti();
  } else {
    showToast(`❌ Bug Fix Failed! Double check error trace for ${chal.rivalName}!`, "error");
  }
}

function closeVideoModal() {
  const container = document.getElementById("videoModalContainer");
  if (container) {
    container.classList.add("hidden");
    container.classList.remove("flex");
  }

  videoIsPlaying = false;
  if (videoTimer) clearInterval(videoTimer);
  if ('speechSynthesis' in window) window.speechSynthesis.cancel();
}

function toggleVideoPlay() {
  videoIsPlaying = !videoIsPlaying;
  updatePlayBtnUI();

  if (videoIsPlaying) {
    playCurrentScene();
  } else {
    if (videoTimer) clearInterval(videoTimer);
    if ('speechSynthesis' in window) window.speechSynthesis.pause();
  }
}

function updatePlayBtnUI() {
  const icon = document.getElementById("videoPlayIcon");
  if (icon) {
    icon.className = videoIsPlaying ? "fas fa-pause" : "fas fa-play";
  }
}

function toggleVideoVoice() {
  videoVoiceEnabled = !videoVoiceEnabled;
  const btn = document.getElementById("voiceToggleBtn");
  if (btn) {
    btn.innerHTML = `<i class="fas ${videoVoiceEnabled ? 'fa-volume-high text-cyan-400' : 'fa-volume-xmark text-gray-500'}"></i> Voice Audio: ${videoVoiceEnabled ? 'ON' : 'OFF'}`;
  }
  if (!videoVoiceEnabled && 'speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
}

function restartVideo() {
  videoCurrentSceneIdx = 0;
  elapsedVideoSeconds = 0;
  videoIsPlaying = true;
  updatePlayBtnUI();
  playCurrentScene();
}

function speakTamilFemaleVoice(text) {
  if (!('speechSynthesis' in window) || !videoVoiceEnabled) return;
  
  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  const voices = window.speechSynthesis.getVoices();

  // Search for Tamil Female voice
  let tamilVoice = voices.find(v => (v.lang.includes('ta') || v.name.includes('Tamil') || v.name.includes('ta-IN')) && (v.name.includes('Female') || v.name.includes('Heera') || v.name.includes('Pallavi') || v.name.includes('Google')));
  
  if (!tamilVoice) {
    tamilVoice = voices.find(v => v.lang.includes('ta') || v.name.toLowerCase().includes('tamil'));
  }

  if (tamilVoice) {
    utterance.voice = tamilVoice;
    utterance.lang = tamilVoice.lang;
  } else {
    utterance.lang = 'ta-IN';
  }

  utterance.pitch = 1.35; // Feminine pitch for Boss Jothi Akka
  utterance.rate = 0.92;  // Natural speech speed

  playCorporateChimeSound();
  window.speechSynthesis.speak(utterance);
}

function playCorporateChimeSound() {
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    
    osc.type = 'sine';
    osc.frequency.setValueAtTime(523.25, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(659.25, ctx.currentTime + 0.15);
    osc.frequency.exponentialRampToValueAtTime(783.99, ctx.currentTime + 0.3);

    gain.gain.setValueAtTime(0.08, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.4);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.4);
  } catch (e) {
    // Fallback
  }
}

// 60 FPS HTML5 Motion Canvas Video Renderer Engine
let motionCanvasAnimFrame = null;
let currentOffscreenImg = new Image();

function startMotionCanvasRenderer(imageSrc) {
  const canvas = document.getElementById("videoCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  const width = canvas.width = canvas.parentElement.clientWidth || 800;
  const height = canvas.height = canvas.parentElement.clientHeight || 450;

  currentOffscreenImg = new Image();
  currentOffscreenImg.src = imageSrc;

  // 35 Animated Floating Cyber Particles
  const particles = Array.from({ length: 35 }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    radius: Math.random() * 2.5 + 1,
    speedX: (Math.random() - 0.5) * 0.8,
    speedY: (Math.random() - 0.5) * 0.8,
    alpha: Math.random() * 0.6 + 0.2,
    color: ['#F59E0B', '#06B6D4', '#EC4899', '#10B981', '#8B5CF6'][Math.floor(Math.random() * 5)]
  }));

  let startTime = Date.now();
  let scanLineY = 0;

  function renderFrame() {
    if (!videoIsPlaying) return;
    const elapsed = Date.now() - startTime;

    ctx.clearRect(0, 0, width, height);

    // 1. Ken Burns Motion Camera Pan & Zoom Effect
    const scale = 1.05 + 0.04 * Math.sin(elapsed * 0.0008);
    const offsetX = Math.cos(elapsed * 0.0006) * 18;
    const offsetY = Math.sin(elapsed * 0.0006) * 12;

    ctx.save();
    ctx.translate(width / 2 + offsetX, height / 2 + offsetY);
    ctx.scale(scale, scale);
    ctx.translate(-width / 2, -height / 2);

    if (currentOffscreenImg.complete && currentOffscreenImg.naturalWidth !== 0) {
      ctx.drawImage(currentOffscreenImg, 0, 0, width, height);
    } else {
      ctx.fillStyle = "#070913";
      ctx.fillRect(0, 0, width, height);
    }
    ctx.restore();

    // 2. Ambient Gradient Shadow
    const grad = ctx.createLinearGradient(0, height * 0.5, 0, height);
    grad.addColorStop(0, "rgba(7, 9, 19, 0)");
    grad.addColorStop(1, "rgba(7, 9, 19, 0.95)");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, width, height);

    // 3. Cyber Motion Laser Scanner Line
    scanLineY = (scanLineY + 2) % height;
    ctx.strokeStyle = "rgba(6, 182, 212, 0.25)";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, scanLineY);
    ctx.lineTo(width, scanLineY);
    ctx.stroke();

    // 4. Floating 3D Light Particles
    particles.forEach(p => {
      p.x += p.speedX;
      p.y += p.speedY;

      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.alpha * (0.6 + 0.4 * Math.sin(elapsed * 0.003));
      ctx.shadowBlur = 10;
      ctx.shadowColor = p.color;
      ctx.fill();
      ctx.shadowBlur = 0;
      ctx.globalAlpha = 1.0;
    });

    // 5. Audio Waveform Spectrum Motion
    const barCount = 24;
    const barWidth = 4;
    const startX = width / 2 - (barCount * (barWidth + 3)) / 2;
    const baseY = height - 130;

    for (let i = 0; i < barCount; i++) {
      const h = 6 + Math.abs(Math.sin(elapsed * 0.008 + i * 0.4)) * 24;
      const x = startX + i * (barWidth + 3);
      ctx.fillStyle = i % 2 === 0 ? "#F59E0B" : "#06B6D4";
      ctx.globalAlpha = 0.7;
      ctx.fillRect(x, baseY - h, barWidth, h);
    }
    ctx.globalAlpha = 1.0;

    motionCanvasAnimFrame = requestAnimationFrame(renderFrame);
  }

  if (motionCanvasAnimFrame) cancelAnimationFrame(motionCanvasAnimFrame);
  motionCanvasAnimFrame = requestAnimationFrame(renderFrame);
}

function playCurrentScene() {
  if (videoTimer) clearInterval(videoTimer);
  if (!videoIsPlaying) return;

  if (videoCurrentSceneIdx >= ONBOARDING_VIDEO_SCENES.length) {
    videoIsPlaying = false;
    updatePlayBtnUI();
    showToast("IT Onboarding Ceremony Completed! Welcome to Payalugada IT!", "success");
    return;
  }

  const scene = ONBOARDING_VIDEO_SCENES[videoCurrentSceneIdx];

  // Update UI Elements
  const badgeEl = document.getElementById("videoSceneBadge");
  const speakerEl = document.getElementById("videoSpeakerLabel");
  const subtitleEl = document.getElementById("videoSubtitleText");
  const actorCardEl = document.getElementById("videoActorCard");

  if (badgeEl) badgeEl.textContent = scene.sceneTitle;
  if (speakerEl) speakerEl.textContent = scene.speaker;
  if (subtitleEl) subtitleEl.textContent = scene.subtitle;

  if (actorCardEl && scene.actor) {
    actorCardEl.innerHTML = `
      <div class="inline-flex items-center gap-3 p-3.5 px-6 rounded-2xl bg-[#070913]/90 border-2 ${scene.actor.badgeClass} backdrop-blur-xl shadow-2xl animate-fade-in">
        <div class="w-12 h-12 rounded-xl overflow-hidden border border-amber-400 flex-shrink-0">
          <img src="${scene.actor.image}" class="w-full h-full object-cover">
        </div>
        <div class="text-left">
          <div class="text-xs font-mono font-bold tracking-wider">${scene.actor.role}</div>
          <div class="text-lg font-black text-white leading-tight">${scene.actor.name}</div>
        </div>
      </div>
    `;
  }

  // Start 60 FPS HTML5 Motion Canvas Renderer with Ken Burns Camera Zoom
  startMotionCanvasRenderer(scene.actor.image);

  // Speak Tamil Female Voice!
  speakTamilFemaleVoice(scene.voiceText);

  // Timer Tick Engine
  let countdown = scene.duration;
  videoTimer = setInterval(() => {
    if (!videoIsPlaying) return;

    countdown--;
    elapsedVideoSeconds++;

    const progressPct = Math.min(100, (elapsedVideoSeconds / totalVideoDuration) * 100);
    const progressBar = document.getElementById("videoProgressBar");
    const timeText = document.getElementById("videoTimeText");

    if (progressBar) progressBar.style.width = `${progressPct}%`;
    if (timeText) timeText.textContent = `0:${elapsedVideoSeconds < 10 ? '0' : ''}${elapsedVideoSeconds} / 0:${totalVideoDuration}`;

    if (countdown <= 0) {
      clearInterval(videoTimer);
      videoCurrentSceneIdx++;
      playCurrentScene();
    }
  }, 1000);
}


// ==========================================================
// 8. SQUAD VOICE SOUNDBOARD ENGINE
// ==========================================================
const SQUAD_SOUNDS = {
  jothi_akka: { text: "வணக்கம்! Code push பண்ணியாச்சு! Project 100% success!", name: "Boss Jothi Akka" },
  berlin: { text: "Berlin Code Master! Microservice latency zero milliseconds!", name: "Berlin" },
  suresh: { text: "Suresh UI/UX! Glassmorphism design 100% pixel perfect!", name: "Suresh" },
  abinash: { text: "Abinash AI Master! Neural network accuracy 99.9%!", name: "Abinash" },
  ashok: { text: "Ashok App Developer! Flutter hot reload mass-u!", name: "Ashok" }
};

function playMemberSound(memberKey) {
  const item = SQUAD_SOUNDS[memberKey];
  if (!item) return;

  showToast(`Playing sound: ${item.name}`, "info");
  appendTerminalLog(`[SOUNDBOARD] Playing voice quote for ${item.name.toUpperCase()}...`);

  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(item.text);
    utterance.lang = 'ta-IN';
    utterance.pitch = memberKey === 'jothi_akka' || memberKey === 'berlin' ? 1.3 : 1.0;
    utterance.rate = 0.95;

    playCorporateChimeSound();
    window.speechSynthesis.speak(utterance);
  }
}


// ==========================================================
// 9. IT PROJECT ESTIMATOR CALCULATOR
// ==========================================================
function calculateProjectEstimate() {
  const isBackend = document.getElementById("estFeatBackend")?.checked;
  const isUI = document.getElementById("estFeatUI")?.checked;
  const isAI = document.getElementById("estFeatAI")?.checked;
  const isMobile = document.getElementById("estFeatMobile")?.checked;
  const isDevops = document.getElementById("estFeatDevops")?.checked;
  const isSecurity = document.getElementById("estFeatSecurity")?.checked;

  let days = 2;
  let leads = ["Boss Jothi Akka"];

  if (isBackend) { days += 3; leads.push("Berlin"); }
  if (isUI) { days += 2; leads.push("Suresh"); }
  if (isAI) { days += 4; leads.push("Abinash"); }
  if (isMobile) { days += 4; leads.push("Ashok"); }
  if (isDevops) { days += 2; }
  if (isSecurity) { days += 1; }

  const resultBox = document.getElementById("estimatorResultBox");
  if (!resultBox) return;

  resultBox.innerHTML = `
    <div class="flex items-center justify-between border-b border-slate-800 pb-3">
      <div>
        <span class="text-xs font-mono text-purple-400 font-bold uppercase">ESTIMATED DELIVERY TIME</span>
        <div class="text-3xl font-black text-white font-mono mt-0.5">${days} WORKING DAYS</div>
      </div>
      <div class="text-right">
        <span class="text-xs font-mono text-amber-400 font-bold uppercase">JOTHI AKKA APPROVAL</span>
        <div class="text-2xl font-black text-amber-300 font-mono mt-0.5">100% GUARANTEED</div>
      </div>
    </div>

    <div class="text-xs font-mono text-gray-300 space-y-1">
      <div><strong class="text-purple-300">Assigned Team Leads:</strong> ${leads.join(", ")}</div>
      <div><strong class="text-cyan-300">Architecture Tier:</strong> Enterprise High-Concurrency Ecosystem</div>
      <div><strong class="text-emerald-300">Quality SLA:</strong> 0 Critical Bugs • 99.99% Uptime SLA</div>
    </div>

    <button onclick="document.getElementById('taskDescription').value='Project Request: ${leads.join(", ")} assigned. Delivery: ${days} days.'; document.getElementById('command').scrollIntoView({behavior:'smooth'});" class="w-full py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs transition flex items-center justify-center gap-2">
      <i class="fas fa-paper-plane"></i> Book Project with Jothi Akka
    </button>
  `;
}


// ==========================================================
// 10. FLOATING JOTHI-AI ASSISTANT
// ==========================================================
function toggleJothiAiModal() {
  const modal = document.getElementById("jothiAiModal");
  if (!modal) return;

  if (modal.classList.contains("hidden")) {
    modal.classList.remove("hidden");
    modal.classList.add("flex");
  } else {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
  }
}

function sendQuickAiPrompt(promptText) {
  const input = document.getElementById("jothiAiInput");
  if (input) {
    input.value = promptText;
    submitJothiAiQuery();
  }
}

function submitJothiAiQuery() {
  const input = document.getElementById("jothiAiInput");
  const body = document.getElementById("jothiAiChatBody");
  if (!input || !body) return;

  const text = input.value.trim();
  if (!text) return;

  // Add User Message
  const userDiv = document.createElement("div");
  userDiv.className = "p-2.5 rounded-xl bg-slate-900 text-gray-200 text-right font-mono text-[11px]";
  userDiv.textContent = text;
  body.appendChild(userDiv);

  input.value = "";
  body.scrollTop = body.scrollHeight;

  // AI Response Logic
  setTimeout(() => {
    let reply = "👑 JothiAI: 'Payalugada, indha project-a 100% bug-free-a complete panni client-kitta submit பண்ணுவோம்!'";
    const lower = text.toLowerCase();

    if (lower.includes("matrix")) {
      triggerSecretMatrix();
      reply = "👑 JothiAI: 'Golden Matrix Rain effect activated on your screen!'";
    } else if (lower.includes("motivate") || lower.includes("team")) {
      reply = "👑 JothiAI: 'Payalugada! Task mudikkaama yaarum thoonga koodadhu! Let's build something legendary today!'";
    } else if (lower.includes("code") || lower.includes("express") || lower.includes("api")) {
      reply = "👑 JothiAI: 'Berlin Code Master high-speed Express + Redis microservice architecture code ready in Code Playground!'";
    }

    const aiDiv = document.createElement("div");
    aiDiv.className = "p-3 rounded-2xl bg-[#070913] border border-amber-500/30 text-amber-300 font-mono text-xs";
    aiDiv.innerHTML = reply;
    body.appendChild(aiDiv);
    body.scrollTop = body.scrollHeight;

    // Speak AI Response
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(reply.replace(/<[^>]*>?/gm, ''));
      utterance.lang = 'ta-IN';
      utterance.pitch = 1.3;
      window.speechSynthesis.speak(utterance);
    }
  }, 500);
}


// ==========================================================
// 11. SECRET GOLDEN MATRIX RAIN ANIMATION
// ==========================================================
let matrixInterval = null;

function triggerSecretMatrix() {
  const canvas = document.getElementById("matrixCanvas");
  if (!canvas) return;

  canvas.style.opacity = "0.9";
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const chars = "JOTHI_AKKA_PAYALUGADA_0123456789_CODE_AI_MOBILE_UIUX";
  const fontSize = 14;
  const columns = Math.floor(canvas.width / fontSize);
  const drops = Array.from({ length: columns }, () => 1);

  showToast("Golden Matrix Rain Activated!", "success");
  appendTerminalLog("[EASTER_EGG] Golden Matrix Rain code stream initialized.");

  if (matrixInterval) clearInterval(matrixInterval);

  matrixInterval = setInterval(() => {
    ctx.fillStyle = "rgba(7, 9, 19, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#F59E0B"; // Gold Matrix Color
    ctx.font = `${fontSize}px var(--font-mono)`;

    for (let i = 0; i < drops.length; i++) {
      const text = chars.charAt(Math.floor(Math.random() * chars.length));
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);

      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }
  }, 33);

  setTimeout(() => {
    canvas.style.opacity = "0";
    setTimeout(() => {
      if (matrixInterval) clearInterval(matrixInterval);
    }, 600);
  }, 7000);
}

// Initial calculation call for estimator
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    calculateProjectEstimate();
  }, 1000);
});




