/**
 * Jothi Akka Payalugada — Real Ludo Tournament Engine with Member Passcode Auth & Dynamic Winner Placement
 */

const LUDO_PLAYERS = {
  berlin: { id: "berlin", name: "Berlin", role: "Code Master", color: "#EF4444", theme: "red", avatar: "assets/images/berlin_code_master.jpg" },
  suresh: { id: "suresh", name: "Suresh", role: "UI/UX Master", color: "#EAB308", theme: "yellow", avatar: "assets/images/suresh_ui_ux.jpg" },
  abinash: { id: "abinash", name: "Abinash", role: "AI Master", color: "#10B981", theme: "green", avatar: "assets/images/abinash_ai_master.jpg" },
  ashok: { id: "ashok", name: "Ashok", role: "App Developer", color: "#3B82F6", theme: "blue", avatar: "assets/images/ashok_app_developer.jpg" }
};

const MEMBER_CREDENTIALS = {
  jothi:   { pass: "boss123",   name: "Jothi Akka", role: "Boss (Admin Override)", avatar: "assets/images/jothi_akka_boss.jpg" },
  berlin:  { pass: "code123",   name: "Berlin",     role: "Code Master",           avatar: "assets/images/berlin_code_master.jpg" },
  suresh:  { pass: "design123", name: "Suresh",     role: "UI/UX Master",          avatar: "assets/images/suresh_ui_ux.jpg" },
  abinash: { pass: "ai123",     name: "Abinash",    role: "AI Master",             avatar: "assets/images/abinash_ai_master.jpg" },
  ashok:   { pass: "app123",    name: "Ashok",      role: "App Developer",         avatar: "assets/images/ashok_app_developer.jpg" }
};

const PLAYER_KEYS = ["berlin", "abinash", "suresh", "ashok"];

const MAIN_TRACK = [
  {r: 6, c: 1}, {r: 6, c: 2}, {r: 6, c: 3}, {r: 6, c: 4}, {r: 6, c: 5},
  {r: 5, c: 6}, {r: 4, c: 6}, {r: 3, c: 6}, {r: 2, c: 6}, {r: 1, c: 6}, {r: 0, c: 6},
  {r: 0, c: 7},
  {r: 0, c: 8}, {r: 1, c: 8}, {r: 2, c: 8}, {r: 3, c: 8}, {r: 4, c: 8}, {r: 5, c: 8},
  {r: 6, c: 9}, {r: 6, c: 10}, {r: 6, c: 11}, {r: 6, c: 12}, {r: 6, c: 13}, {r: 6, c: 14},
  {r: 7, c: 14},
  {r: 8, c: 14}, {r: 8, c: 13}, {r: 8, c: 12}, {r: 8, c: 11}, {r: 8, c: 10}, {r: 8, c: 9},
  {r: 9, c: 8}, {r: 10, c: 8}, {r: 11, c: 8}, {r: 12, c: 8}, {r: 13, c: 8}, {r: 14, c: 8},
  {r: 14, c: 7},
  {r: 14, c: 6}, {r: 13, c: 6}, {r: 12, c: 6}, {r: 11, c: 6}, {r: 10, c: 6}, {r: 9, c: 6},
  {r: 8, c: 5}, {r: 8, c: 4}, {r: 8, c: 3}, {r: 8, c: 2}, {r: 8, c: 1}, {r: 8, c: 0},
  {r: 7, c: 0},
  {r: 6, c: 0}
];

const START_INDEX = { berlin: 0, abinash: 13, suresh: 26, ashok: 39 };

const SAFE_SPOTS = [0, 13, 26, 39, 8, 21, 34, 47];

const HOME_PATHS = {
  berlin:  [{r:7, c:1}, {r:7, c:2}, {r:7, c:3}, {r:7, c:4}, {r:7, c:5}, {r:7, c:6}],
  abinash: [{r:1, c:7}, {r:2, c:7}, {r:3, c:7}, {r:4, c:7}, {r:5, c:7}, {r:6, c:7}],
  suresh:  [{r:7, c:13}, {r:7, c:12}, {r:7, c:11}, {r:7, c:10}, {r:7, c:9}, {r:7, c:8}],
  ashok:   [{r:13, c:7}, {r:12, c:7}, {r:11, c:7}, {r:10, c:7}, {r:9, c:7}, {r:8, c:7}]
};

const BASE_CELLS = {
  berlin:  [{r:2, c:2}, {r:2, c:3}, {r:3, c:2}, {r:3, c:3}],
  abinash: [{r:2, c:11}, {r:2, c:12}, {r:3, c:11}, {r:3, c:12}],
  suresh:  [{r:11, c:11}, {r:11, c:12}, {r:12, c:11}, {r:12, c:12}],
  ashok:   [{r:11, c:2}, {r:11, c:3}, {r:12, c:2}, {r:12, c:3}]
};

let gameState = {
  currentCycle: "TOURNAMENT_WEEK",
  turnIndex: 0,
  lastDice: null,
  isRolling: false,
  awaitingManualSelection: false,
  movableTokens: [],
  loggedInUser: null,
  tokens: {
    berlin: [-1, -1, -1, -1],
    abinash: [-1, -1, -1, -1],
    suresh: [-1, -1, -1, -1],
    ashok: [-1, -1, -1, -1]
  },
  scores: { berlin: 320, abinash: 280, suresh: 210, ashok: 190 },
  wins: { berlin: 3, abinash: 2, suresh: 2, ashok: 1 },
  interimLeader: "berlin"
};

function loadLudoState() {
  const saved = localStorage.getItem("jothi_ludo_state");
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      gameState.scores = { ...gameState.scores, ...parsed.scores };
      gameState.wins = { ...gameState.wins, ...parsed.wins };
      gameState.currentCycle = parsed.currentCycle || "TOURNAMENT_WEEK";
      gameState.interimLeader = parsed.interimLeader || getTopScorer();
    } catch (e) {
      console.error(e);
    }
  }

  const savedUser = localStorage.getItem("jothi_logged_user");
  if (savedUser && MEMBER_CREDENTIALS[savedUser]) {
    gameState.loggedInUser = savedUser;
  }

  updateTopLeader();
  updateAuthHeader();
}

function saveLudoState() {
  localStorage.setItem("jothi_ludo_state", JSON.stringify({
    scores: gameState.scores,
    wins: gameState.wins,
    currentCycle: gameState.currentCycle,
    interimLeader: gameState.interimLeader
  }));
}

function getTopScorer() {
  return PLAYER_KEYS.reduce((top, p) => gameState.scores[p] > gameState.scores[top] ? p : top, "berlin");
}

function updateTopLeader() {
  const topKey = getTopScorer();
  gameState.interimLeader = topKey;
  
  const leaderObj = LUDO_PLAYERS[topKey];
  
  // 1. Update Interim Leader Banner in Ludo Arena
  const leaderBanner = document.getElementById("interimLeaderDisplay");
  if (leaderBanner) {
    leaderBanner.innerHTML = `
      <div class="flex items-center justify-between gap-4 p-4 rounded-2xl bg-gradient-to-r from-amber-500/20 via-purple-500/20 to-cyan-500/20 border border-amber-400/40">
        <div class="flex items-center gap-3">
          <div class="w-12 h-12 rounded-xl overflow-hidden border-2 border-amber-400 shadow-lg">
            <img src="${leaderObj.avatar}" class="w-full h-full object-cover">
          </div>
          <div>
            <div class="text-xs font-mono text-amber-400 font-bold uppercase tracking-wider">👑 NEXT WEEK TEAM LEADER</div>
            <div class="text-lg font-black text-white">${leaderObj.name} (${leaderObj.role})</div>
          </div>
        </div>
        <div class="text-right font-mono">
          <div class="text-xl font-black text-amber-400">${gameState.scores[topKey]} PTS</div>
          <div class="text-[10px] text-gray-400">${gameState.wins[topKey]} Matches Won</div>
        </div>
      </div>
    `;
  }

  // 2. DYNAMICALLY RE-ORDER SQUAD CARDS: Put #1 Winner FIRST next to Jothi Akka!
  reorderSquadCardsByRank();

  // 3. Update Boss Spotlight Co-Leader Box
  updateBossSpotlightCoLeader(leaderObj);
}

function updateBossSpotlightCoLeader(leaderObj) {
  const coLeaderContainer = document.getElementById("bossCoLeaderBox");
  if (!coLeaderContainer) return;

  coLeaderContainer.innerHTML = `
    <div class="p-4 rounded-2xl bg-gradient-to-r from-amber-500/20 via-purple-950/60 to-slate-900 border-2 border-amber-400/50 flex items-center justify-between gap-4">
      <div class="flex items-center gap-3">
        <img src="${leaderObj.avatar}" class="w-12 h-12 rounded-xl object-cover border-2 border-amber-400 shadow-md">
        <div>
          <div class="text-[11px] font-mono text-amber-400 font-extrabold uppercase tracking-wider">👑 #1 CO-CAPTAIN NEXT TO JOTHI AKKA</div>
          <div class="text-base font-black text-white">${leaderObj.name} (${leaderObj.role})</div>
          <div class="text-xs text-amber-200">Current Leaderboard Winner • ${gameState.scores[leaderObj.id]} PTS</div>
        </div>
      </div>
      <span class="px-3 py-1.5 rounded-xl bg-amber-400 text-slate-950 font-black text-xs uppercase tracking-wider shadow-lg">
        RANK #1
      </span>
    </div>
  `;
}

function reorderSquadCardsByRank() {
  const sortedKeys = [...PLAYER_KEYS].sort((a, b) => gameState.scores[b] - gameState.scores[a]);
  const squadGrid = document.getElementById("squadCardsGrid");
  if (!squadGrid) return;

  sortedKeys.forEach((key, index) => {
    const card = squadGrid.querySelector(`.card-${key}`);
    if (card) {
      squadGrid.appendChild(card); // Re-appends card in rank order!

      // Add special #1 crown badge for top winner card
      let badge = card.querySelector(".winner-rank-badge");
      if (index === 0) {
        if (!badge) {
          badge = document.createElement("div");
          badge.className = "winner-rank-badge absolute -top-3 left-4 px-3 py-1 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-950 font-black text-[10px] uppercase tracking-wider shadow-xl z-20 border border-amber-300";
          card.classList.add("relative");
          card.prepend(badge);
        }
        badge.innerHTML = `<i class="fas fa-crown text-slate-950 mr-1"></i> #1 LEADER (NEXT TO JOTHI AKKA)`;
      } else {
        if (badge) badge.remove();
      }
    }
  });
}

function loginMember(memberId, password) {
  const cred = MEMBER_CREDENTIALS[memberId];
  if (!cred) {
    showToast("Invalid Member ID!", "warning");
    return false;
  }

  if (cred.pass !== password) {
    showToast("Incorrect Password!", "warning");
    return false;
  }

  gameState.loggedInUser = memberId;
  localStorage.setItem("jothi_logged_user", memberId);

  showToast(`Welcome ${cred.name}! Logged in successfully.`, "success");
  appendLudoLog(`[AUTH] 🔑 ${cred.name} logged into the system.`);

  closeLoginModal();
  updateAuthHeader();
  updateTurnControlsUI();
  renderTokens();
  return true;
}

function logoutMember() {
  gameState.loggedInUser = null;
  localStorage.removeItem("jothi_logged_user");
  showToast("Logged out of session.", "info");
  updateAuthHeader();
  updateTurnControlsUI();
  renderTokens();
}

function updateAuthHeader() {
  const authBar = document.getElementById("authSessionBar");
  if (!authBar) return;

  if (gameState.loggedInUser) {
    const cred = MEMBER_CREDENTIALS[gameState.loggedInUser];
    authBar.innerHTML = `
      <div class="flex items-center gap-3 bg-slate-900/90 border border-slate-700 px-4 py-2 rounded-xl">
        <img src="${cred.avatar}" class="w-8 h-8 rounded-lg object-cover border border-amber-400">
        <div class="text-xs">
          <div class="text-white font-extrabold flex items-center gap-1.5">
            ${cred.name} <span class="text-[10px] px-1.5 py-0.2 rounded bg-emerald-950 text-emerald-300 font-mono">ONLINE</span>
          </div>
          <div class="text-[10px] text-gray-400">${cred.role}</div>
        </div>
        <button onclick="logoutMember()" class="ml-2 text-xs text-rose-400 hover:text-rose-300 font-bold">
          <i class="fas fa-sign-out-alt"></i> Logout
        </button>
      </div>
    `;
  } else {
    authBar.innerHTML = `
      <button onclick="openLoginModal()" class="py-2 px-4 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs transition flex items-center gap-2 border border-purple-400/40 shadow-lg">
        <i class="fas fa-key text-amber-400"></i> Member Login
      </button>
    `;
  }
}

function openLoginModal(prefillMemberId = "") {
  const modalContainer = document.getElementById("memberModalContainer");
  const modalContent = document.getElementById("memberModalContent");

  const prefillId = prefillMemberId || "berlin";
  const prefillPass = MEMBER_CREDENTIALS[prefillId] ? MEMBER_CREDENTIALS[prefillId].pass : "code123";

  modalContent.innerHTML = `
    <div class="relative p-6 sm:p-8">
      <button onclick="closeMemberModal()" class="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-900 text-gray-400 hover:text-white flex items-center justify-center border border-slate-800">
        <i class="fas fa-times"></i>
      </button>

      <div class="text-center mb-6">
        <div class="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-400 mx-auto flex items-center justify-center text-amber-400 text-xl font-bold mb-2">
          <i class="fas fa-lock"></i>
        </div>
        <h3 class="text-2xl font-black text-white">MEMBER LOGIN</h3>
        <p class="text-xs text-gray-400 mt-1">Enter your Member ID &amp; Password to unlock your turn!</p>
      </div>

      <div class="mb-6 p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2">
        <div class="text-[11px] font-mono text-amber-400 font-bold">🔑 QUICK DEMO CREDENTIALS:</div>
        <div class="flex flex-wrap gap-2 text-[11px] font-mono">
          <button onclick="fillLogin('berlin','code123')" class="px-2.5 py-1 rounded bg-red-950/80 border border-red-500/40 text-red-300">Berlin (code123)</button>
          <button onclick="fillLogin('suresh','design123')" class="px-2.5 py-1 rounded bg-yellow-950/80 border border-yellow-500/40 text-yellow-300">Suresh (design123)</button>
          <button onclick="fillLogin('abinash','ai123')" class="px-2.5 py-1 rounded bg-emerald-950/80 border border-emerald-500/40 text-emerald-300">Abinash (ai123)</button>
          <button onclick="fillLogin('ashok','app123')" class="px-2.5 py-1 rounded bg-blue-950/80 border border-blue-500/40 text-blue-300">Ashok (app123)</button>
          <button onclick="fillLogin('jothi','boss123')" class="px-2.5 py-1 rounded bg-purple-950/80 border border-purple-500/40 text-purple-300">Jothi Akka (boss123)</button>
        </div>
      </div>

      <form onsubmit="event.preventDefault(); submitLoginForm();" class="space-y-4">
        <div>
          <label class="block text-xs font-mono text-gray-400 mb-1">Select Member ID:</label>
          <select id="loginMemberSelect" class="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-amber-400 font-mono">
            <option value="berlin" ${prefillId === 'berlin' ? 'selected' : ''}>berlin (Code Master)</option>
            <option value="suresh" ${prefillId === 'suresh' ? 'selected' : ''}>suresh (UI/UX Master)</option>
            <option value="abinash" ${prefillId === 'abinash' ? 'selected' : ''}>abinash (AI Master)</option>
            <option value="ashok" ${prefillId === 'ashok' ? 'selected' : ''}>ashok (App Developer)</option>
            <option value="jothi" ${prefillId === 'jothi' ? 'selected' : ''}>jothi (Boss - Admin Override)</option>
          </select>
        </div>

        <div>
          <label class="block text-xs font-mono text-gray-400 mb-1">Password:</label>
          <input id="loginPasswordInput" type="password" value="${prefillPass}" required class="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-amber-400 font-mono">
        </div>

        <button type="submit" class="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-400 via-rose-500 to-purple-600 text-slate-950 font-black text-sm uppercase tracking-wider shadow-lg transition btn-shimmer">
          Login &amp; Play Turn
        </button>
      </form>
    </div>
  `;

  modalContainer.classList.remove("hidden");
  modalContainer.classList.add("flex");
}

function fillLogin(id, pass) {
  const sel = document.getElementById("loginMemberSelect");
  const passIn = document.getElementById("loginPasswordInput");
  if (sel) sel.value = id;
  if (passIn) passIn.value = pass;
}

function submitLoginForm() {
  const id = document.getElementById("loginMemberSelect").value;
  const pass = document.getElementById("loginPasswordInput").value;
  loginMember(id, pass);
}

function closeLoginModal() {
  closeMemberModal();
}

function renderLudoBoard() {
  const boardEl = document.getElementById("ludoBoard");
  if (!boardEl) return;

  boardEl.innerHTML = "";

  for (let r = 0; r < 15; r++) {
    for (let c = 0; c < 15; c++) {
      const cell = document.createElement("div");
      cell.className = `ludo-cell cell-${r}-${c}`;

      if (r < 6 && c < 6) cell.classList.add("bg-red-950/60", "border-red-500/30");
      else if (r < 6 && c > 8) cell.classList.add("bg-emerald-950/60", "border-emerald-500/30");
      else if (r > 8 && c > 8) cell.classList.add("bg-amber-950/60", "border-amber-500/30");
      else if (r > 8 && c < 6) cell.classList.add("bg-blue-950/60", "border-blue-500/30");

      if (r === 7 && c >= 1 && c <= 5) cell.classList.add("bg-red-600/60");
      if (c === 7 && r >= 1 && r <= 5) cell.classList.add("bg-emerald-600/60");
      if (r === 7 && c >= 9 && c <= 13) cell.classList.add("bg-amber-500/60");
      if (c === 7 && r >= 9 && r <= 13) cell.classList.add("bg-blue-600/60");

      if (r === 6 && c === 1) cell.classList.add("bg-red-500", "font-bold");
      if (r === 1 && c === 8) cell.classList.add("bg-emerald-500", "font-bold");
      if (r === 8 && c === 13) cell.classList.add("bg-amber-400", "font-bold");
      if (r === 13 && c === 6) cell.classList.add("bg-blue-500", "font-bold");

      if (r >= 6 && r <= 8 && c >= 6 && c <= 8) {
        cell.classList.add("bg-slate-900", "border-amber-400/40");
        if (r === 7 && c === 7) {
          cell.innerHTML = `<i class="fas fa-trophy text-amber-400 text-sm animate-pulse"></i>`;
        }
      }

      boardEl.appendChild(cell);
    }
  }

  renderTokens();
  updateTurnControlsUI();
}

function renderTokens() {
  document.querySelectorAll(".ludo-token").forEach(t => t.remove());

  const activePlayerKey = PLAYER_KEYS[gameState.turnIndex];
  const isAuthorizedToPlay = gameState.loggedInUser === activePlayerKey || gameState.loggedInUser === "jothi";

  PLAYER_KEYS.forEach(playerKey => {
    const player = LUDO_PLAYERS[playerKey];
    const tokenPositions = gameState.tokens[playerKey];

    tokenPositions.forEach((pos, tokenIdx) => {
      let targetCell = null;

      if (pos === -1) {
        const coords = BASE_CELLS[playerKey][tokenIdx];
        targetCell = document.querySelector(`.cell-${coords.r}-${coords.c}`);
      } else if (pos >= 0 && pos < 52) {
        const trackIdx = (START_INDEX[playerKey] + pos) % 52;
        const coords = MAIN_TRACK[trackIdx];
        targetCell = document.querySelector(`.cell-${coords.r}-${coords.c}`);
      } else if (pos >= 52) {
        const homeStep = pos - 52;
        const coords = HOME_PATHS[playerKey][homeStep];
        targetCell = document.querySelector(`.cell-${coords.r}-${coords.c}`);
      }

      if (targetCell) {
        const tokenEl = document.createElement("div");
        const isMovable = isAuthorizedToPlay && gameState.awaitingManualSelection && playerKey === activePlayerKey && gameState.movableTokens.includes(tokenIdx);
        
        tokenEl.className = `ludo-token token-${player.theme} ${isMovable ? 'movable-token-highlight' : ''}`;
        tokenEl.innerText = `${player.name[0]}${tokenIdx+1}`;
        
        tokenEl.onclick = () => onTokenClick(playerKey, tokenIdx);
        targetCell.appendChild(tokenEl);
      }
    });
  });
}

function updateTurnControlsUI() {
  const activePlayerKey = PLAYER_KEYS[gameState.turnIndex];
  const activePlayer = LUDO_PLAYERS[activePlayerKey];

  const isAuthorized = gameState.loggedInUser === activePlayerKey || gameState.loggedInUser === "jothi";

  const controlsBox = document.getElementById("playerTurnControls");
  if (!controlsBox) return;

  if (isAuthorized) {
    controlsBox.innerHTML = `
      <div class="p-4 rounded-2xl bg-slate-900/90 border-2 border-slate-800 flex flex-wrap items-center justify-between gap-4">
        
        <div class="flex items-center gap-3">
          <img src="${activePlayer.avatar}" class="w-12 h-12 rounded-xl object-cover border-2" style="border-color: ${activePlayer.color}">
          <div>
            <div class="text-xs font-mono text-gray-400 flex items-center gap-1.5">
              <span>Current Turn:</span>
              <span class="px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 font-bold text-[10px]">UNLOCKED &amp; READY</span>
            </div>
            <div class="text-lg font-black text-white" style="color: ${activePlayer.color}">
              ${activePlayer.name} (${activePlayer.role})
            </div>
          </div>
        </div>

        <div class="flex items-center gap-4">
          <div id="diceDisplay" class="w-14 h-14 rounded-2xl bg-slate-950 border-2 flex items-center justify-center text-3xl font-black text-white shadow-xl" style="border-color: ${activePlayer.color}">
            <span id="diceVal">${gameState.lastDice || "🎲"}</span>
          </div>

          <button id="rollDiceBtn" onclick="rollActivePlayerDice('${activePlayerKey}')" class="py-3.5 px-6 rounded-xl font-black text-xs uppercase tracking-wider text-slate-950 shadow-xl transition btn-shimmer flex items-center gap-2" style="background-color: ${activePlayer.color}">
            <i class="fas fa-dice"></i> Roll Dice for ${activePlayer.name}
          </button>
        </div>

      </div>
    `;
  } else {
    controlsBox.innerHTML = `
      <div class="p-4 rounded-2xl bg-amber-950/40 border-2 border-amber-500/40 flex flex-wrap items-center justify-between gap-4">
        
        <div class="flex items-center gap-3">
          <img src="${activePlayer.avatar}" class="w-12 h-12 rounded-xl object-cover border-2 border-amber-400 opacity-60">
          <div>
            <div class="text-xs font-mono text-amber-400 font-bold flex items-center gap-1.5">
              <i class="fas fa-lock"></i> TURN LOCKED FOR ${activePlayer.name.toUpperCase()}
            </div>
            <div class="text-sm text-gray-300 mt-0.5">
              Login as <strong>${activePlayer.name}</strong> (ID: <code class="text-amber-300">${activePlayerKey}</code>) to roll dice!
            </div>
          </div>
        </div>

        <button onclick="openLoginModal('${activePlayerKey}')" class="py-3 px-5 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-950 font-black text-xs uppercase tracking-wider shadow-lg transition btn-shimmer flex items-center gap-2">
          <i class="fas fa-key"></i> Login as ${activePlayer.name}
        </button>

      </div>
    `;
  }
}

function rollActivePlayerDice(playerKey) {
  const activePlayerKey = PLAYER_KEYS[gameState.turnIndex];
  if (playerKey !== activePlayerKey) {
    showToast(`It is currently ${LUDO_PLAYERS[activePlayerKey].name}'s turn!`, "warning");
    return;
  }

  const isAuthorized = gameState.loggedInUser === activePlayerKey || gameState.loggedInUser === "jothi";
  if (!isAuthorized) {
    showToast(`Please login as ${LUDO_PLAYERS[activePlayerKey].name} to roll the dice!`, "warning");
    openLoginModal(activePlayerKey);
    return;
  }

  if (gameState.isRolling || gameState.awaitingManualSelection) return;

  if (gameState.currentCycle === "LEADERSHIP_WEEK") {
    showToast("Tournament is locked during Leadership Week!", "warning");
    return;
  }

  gameState.isRolling = true;
  const rollBtn = document.getElementById("rollDiceBtn");
  if (rollBtn) rollBtn.disabled = true;

  const diceEl = document.getElementById("diceDisplay");
  const diceValEl = document.getElementById("diceVal");
  if (diceEl) diceEl.classList.add("animate-spin");

  let rolls = 0;
  const interval = setInterval(() => {
    const tempVal = Math.floor(Math.random() * 6) + 1;
    if (diceValEl) diceValEl.innerText = tempVal;
    rolls++;

    if (rolls > 10) {
      clearInterval(interval);
      if (diceEl) diceEl.classList.remove("animate-spin");

      const finalDice = Math.floor(Math.random() * 6) + 1;
      gameState.lastDice = finalDice;
      if (diceValEl) diceValEl.innerText = finalDice;

      gameState.isRolling = false;
      const player = LUDO_PLAYERS[activePlayerKey];
      appendLudoLog(`[DICE ROLL] 🎲 ${player.name} rolled a ${finalDice}!`);

      evaluateTurnMove(activePlayerKey, finalDice);
    }
  }, 70);
}

function evaluateTurnMove(playerKey, dice) {
  const playerTokens = gameState.tokens[playerKey];
  const movable = [];

  playerTokens.forEach((pos, idx) => {
    if (pos === -1 && dice === 6) movable.push(idx);
    else if (pos >= 0 && pos + dice <= 57) movable.push(idx);
  });

  gameState.movableTokens = movable;

  if (movable.length === 0) {
    appendLudoLog(`[NO MOVE] ${LUDO_PLAYERS[playerKey].name} has no valid moves for ${dice}.`);
    setTimeout(nextTurn, 1000);
    return;
  }

  if (movable.length === 1) {
    appendLudoLog(`[AUTO MOVE] Only 1 token available. Moving automatically...`);
    setTimeout(() => {
      executeTokenMove(playerKey, movable[0], dice);
    }, 400);
  } else {
    gameState.awaitingManualSelection = true;
    appendLudoLog(`[MANUAL SELECT] ${LUDO_PLAYERS[playerKey].name} has ${movable.length} movable coins! Click a coin on the board to move.`);
    showToast(`Click a glowing coin to move ${dice} steps!`, "info");
    renderTokens();
  }
}

function onTokenClick(playerKey, tokenIdx) {
  const activePlayerKey = PLAYER_KEYS[gameState.turnIndex];
  if (playerKey !== activePlayerKey) return;

  const isAuthorized = gameState.loggedInUser === activePlayerKey || gameState.loggedInUser === "jothi";
  if (!isAuthorized) {
    showToast(`Please login as ${LUDO_PLAYERS[activePlayerKey].name} to move coins!`, "warning");
    openLoginModal(activePlayerKey);
    return;
  }

  if (gameState.awaitingManualSelection && gameState.movableTokens.includes(tokenIdx)) {
    gameState.awaitingManualSelection = false;
    executeTokenMove(activePlayerKey, tokenIdx, gameState.lastDice);
  }
}

function executeTokenMove(playerKey, tokenIdx, steps) {
  let currentPos = gameState.tokens[playerKey][tokenIdx];
  let newPos = currentPos;

  if (currentPos === -1 && steps === 6) {
    newPos = 0;
    gameState.tokens[playerKey][tokenIdx] = 0;
    appendLudoLog(`[BASE EXIT] ${LUDO_PLAYERS[playerKey].name}'s coin ${tokenIdx+1} entered the board!`);
  } else if (currentPos >= 0) {
    newPos = currentPos + steps;
    if (newPos <= 57) {
      gameState.tokens[playerKey][tokenIdx] = newPos;
      appendLudoLog(`[MOVE] ${LUDO_PLAYERS[playerKey].name} moved coin ${tokenIdx+1} to step ${newPos}.`);

      if (newPos === 57) {
        appendLudoLog(`[GOAL! 🏆] ${LUDO_PLAYERS[playerKey].name} brought a coin HOME!`);
        gameState.scores[playerKey] += 50;
        checkWinCondition(playerKey);
      }
    }
  }

  let captureOccurred = false;
  if (newPos >= 0 && newPos < 52) {
    const activeTrackIdx = (START_INDEX[playerKey] + newPos) % 52;
    const isSafeSpot = SAFE_SPOTS.includes(activeTrackIdx);

    if (!isSafeSpot) {
      PLAYER_KEYS.forEach(oppKey => {
        if (oppKey !== playerKey) {
          gameState.tokens[oppKey].forEach((oppPos, oppIdx) => {
            if (oppPos >= 0 && oppPos < 52) {
              const oppTrackIdx = (START_INDEX[oppKey] + oppPos) % 52;
              if (oppTrackIdx === activeTrackIdx) {
                gameState.tokens[oppKey][oppIdx] = -1;
                captureOccurred = true;
                appendLudoLog(`[CUT! 💥] ${LUDO_PLAYERS[playerKey].name} cut ${LUDO_PLAYERS[oppKey].name}'s coin! Sent back to base!`);
                showToast(`💥 ${LUDO_PLAYERS[playerKey].name} cut ${LUDO_PLAYERS[oppKey].name}'s coin!`, "success");
              }
            }
          });
        }
      });
    }
  }

  renderTokens();

  if (steps === 6 || captureOccurred) {
    appendLudoLog(`[BONUS TURN] ${LUDO_PLAYERS[playerKey].name} gets another turn!`);
    updateTurnControlsUI();
  } else {
    nextTurn();
  }
}

function nextTurn() {
  gameState.awaitingManualSelection = false;
  gameState.movableTokens = [];
  gameState.turnIndex = (gameState.turnIndex + 1) % 4;
  updateTurnControlsUI();
  renderTokens();
}

function checkWinCondition(playerKey) {
  const tokens = gameState.tokens[playerKey];
  if (tokens.every(p => p === 57)) {
    gameState.scores[playerKey] += 100;
    gameState.wins[playerKey] += 1;
    saveLudoState();
    updateLeaderboardTable();
    updateTopLeader();
    showToast(`🏆 TOURNAMENT WINNER: ${LUDO_PLAYERS[playerKey].name}!`, "success");
  }
}

function simulateFastMatch() {
  if (gameState.currentCycle === "LEADERSHIP_WEEK") return;
  
  showToast("Simulating fast Ludo match...", "info");
  let turns = 0;
  const interval = setInterval(() => {
    const currentPlayerKey = PLAYER_KEYS[gameState.turnIndex];
    const dice = Math.floor(Math.random() * 6) + 1;
    gameState.lastDice = dice;

    evaluateTurnMove(currentPlayerKey, dice);
    turns++;

    if (turns > 30) {
      clearInterval(interval);
      const winnerKey = PLAYER_KEYS[Math.floor(Math.random() * 4)];
      gameState.scores[winnerKey] += 100;
      gameState.wins[winnerKey] += 1;
      saveLudoState();
      updateLeaderboardTable();
      updateTopLeader();
      renderTokens();
      showToast(`Match Complete! Winner: ${LUDO_PLAYERS[winnerKey].name}`, "success");
    }
  }, 150);
}

function toggleWeekCycle() {
  if (gameState.currentCycle === "TOURNAMENT_WEEK") {
    gameState.currentCycle = "LEADERSHIP_WEEK";
    gameState.interimLeader = getTopScorer();
    showToast(`Switched to LEADERSHIP WEEK! Leader: ${LUDO_PLAYERS[gameState.interimLeader].name}`, "success");
  } else {
    gameState.currentCycle = "TOURNAMENT_WEEK";
    showToast("Switched to TOURNAMENT WEEK! Arena Unlocked!", "info");
  }

  saveLudoState();
  updateCycleUI();
}

function updateCycleUI() {
  const cycleBanner = document.getElementById("cycleBanner");
  const arenaLockOverlay = document.getElementById("arenaLockOverlay");

  const leaderKey = gameState.interimLeader;
  const leaderObj = LUDO_PLAYERS[leaderKey];

  if (gameState.currentCycle === "TOURNAMENT_WEEK") {
    if (cycleBanner) {
      cycleBanner.className = "p-4 rounded-2xl bg-gradient-to-r from-emerald-950/80 via-teal-900/60 to-slate-900 border-2 border-emerald-500/50 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl";
      cycleBanner.innerHTML = `
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-400 flex items-center justify-center text-emerald-400 text-lg font-bold">
            <i class="fas fa-gamepad"></i>
          </div>
          <div>
            <div class="text-xs font-mono text-emerald-400 font-extrabold tracking-wider uppercase">🎮 TOURNAMENT WEEK IN PROGRESS</div>
            <div class="text-sm font-bold text-white">Ludo Arena is OPEN! Play matches & earn points to claim next week's leadership.</div>
          </div>
        </div>
        <button onclick="toggleWeekCycle()" class="px-4 py-2 rounded-xl bg-slate-900 border border-emerald-500/40 text-emerald-300 text-xs font-bold hover:bg-slate-800 transition whitespace-nowrap">
          ⚡ Fast-Forward to Leadership Week
        </button>
      `;
    }
    if (arenaLockOverlay) arenaLockOverlay.classList.add("hidden");
  } else {
    if (cycleBanner) {
      cycleBanner.className = "p-4 rounded-2xl bg-gradient-to-r from-amber-950/80 via-purple-900/60 to-slate-900 border-2 border-amber-400/60 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl";
      cycleBanner.innerHTML = `
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-400 flex items-center justify-center text-amber-400 text-lg font-bold">
            <i class="fas fa-crown"></i>
          </div>
          <div>
            <div class="text-xs font-mono text-amber-400 font-extrabold tracking-wider uppercase">👑 LEADERSHIP WEEK — ACTIVE LEADER: ${leaderObj.name.toUpperCase()}</div>
            <div class="text-sm font-bold text-white">${leaderObj.name} is serving as Team Leader under Boss Jothi Akka. Ludo Arena on cooldown.</div>
          </div>
        </div>
        <button onclick="toggleWeekCycle()" class="px-4 py-2 rounded-xl bg-slate-900 border border-amber-400/40 text-amber-300 text-xs font-bold hover:bg-slate-800 transition whitespace-nowrap">
          🔓 Unlock Next Tournament Week
        </button>
      `;
    }
    if (arenaLockOverlay) arenaLockOverlay.classList.remove("hidden");
  }

  updateLeaderboardTable();
}

function updateLeaderboardTable() {
  const tbody = document.getElementById("leaderboardBody");
  if (!tbody) return;

  const sortedKeys = [...PLAYER_KEYS].sort((a, b) => gameState.scores[b] - gameState.scores[a]);
  const topKey = sortedKeys[0];

  tbody.innerHTML = sortedKeys.map((key, rank) => {
    const player = LUDO_PLAYERS[key];
    const isTop = key === topKey;

    return `
      <tr class="border-b border-slate-800/80 ${isTop ? 'bg-amber-500/10 font-bold' : ''}">
        <td class="py-3 px-2 sm:px-4 font-mono text-center">
          ${rank === 0 ? '<span class="text-amber-400 font-black text-base">🥇 #1</span>' :
            rank === 1 ? '<span class="text-gray-300 font-bold">🥈 #2</span>' :
            rank === 2 ? '<span class="text-amber-600 font-bold">🥉 #3</span>' :
            `<span class="text-gray-500">#${rank+1}</span>`}
        </td>
        <td class="py-3 px-2 sm:px-4">
          <div class="flex items-center gap-2.5">
            <img src="${player.avatar}" class="w-9 h-9 rounded-lg object-cover border border-slate-700 flex-shrink-0">
            <div>
              <div class="text-white text-sm font-bold flex flex-wrap items-center gap-1.5">
                <span>${player.name}</span>
                ${isTop ? '<span class="px-2 py-0.5 rounded text-[10px] bg-amber-400 text-slate-950 font-black whitespace-nowrap inline-block shadow">👑 TEAM LEADER</span>' : ''}
              </div>
              <div class="text-xs text-gray-400">${player.role}</div>
            </div>
          </div>
        </td>
        <td class="py-3 px-2 sm:px-4 text-center font-mono font-bold text-amber-400">${gameState.scores[key]} PTS</td>
        <td class="py-3 px-2 sm:px-4 text-center font-mono text-cyan-300">${gameState.wins[key]}</td>
      </tr>
    `;
  }).join("");
}

function resetLudoGame() {
  gameState.tokens = {
    berlin: [-1, -1, -1, -1],
    abinash: [-1, -1, -1, -1],
    suresh: [-1, -1, -1, -1],
    ashok: [-1, -1, -1, -1]
  };
  gameState.awaitingManualSelection = false;
  gameState.movableTokens = [];
  renderTokens();
  showToast("Ludo Board Reset!", "info");
}

function appendLudoLog(msg) {
  const logBox = document.getElementById("ludoMatchLog");
  if (!logBox) return;

  const item = document.createElement("div");
  item.className = "text-xs font-mono text-gray-300 my-0.5";
  item.innerText = msg;
  logBox.appendChild(item);
  logBox.scrollTop = logBox.scrollHeight;
}

document.addEventListener("DOMContentLoaded", () => {
  loadLudoState();
  renderLudoBoard();
  updateCycleUI();
});
