/* ==========================================================================
   AŞK & BAĞ OYUNLARI - MELİH & KEVSER SCRIPT.JS
   ========================================================================== */

// --- 1. ALL 36 QUESTIONS DATASET (ARTHUR ARON 36 QUESTIONS IN TURKISH) ---
const QUESTIONS_DATA = [
    // SET 1 (1-12)
    { id: 1, stage: 1, stageTitle: "1. Aşama - Tanışma & Hafif Yakınlaşma", text: "Dünyadaki herhangi bir insanla akşam yemeği yiyebilecek olsaydın, bu kim olurdu?" },
    { id: 2, stage: 1, stageTitle: "1. Aşama - Tanışma & Hafif Yakınlaşma", text: "Ünlü olmak ister miydin? Hangi konuda veya ne şekilde?" },
    { id: 3, stage: 1, stageTitle: "1. Aşama - Tanışma & Hafif Yakınlaşma", text: "Bir telefon konuşması yapmadan önce söyleyeceklerini zihninde prova eder misin? Neden?" },
    { id: 4, stage: 1, stageTitle: "1. Aşama - Tanışma & Hafif Yakınlaşma", text: "Senin için 'mükemmel' bir gün nasıl başlar ve nasıl devam eder?" },
    { id: 5, stage: 1, stageTitle: "1. Aşama - Tanışma & Hafif Yakınlaşma", text: "En son ne zaman kendi kendine şarkı söyledin? Peki en son ne zaman bir başkasına söyledin?" },
    { id: 6, stage: 1, stageTitle: "1. Aşama - Tanışma & Hafif Yakınlaşma", text: "90 yaşına kadar yaşayacak olsaydın ve hayatının son 60 yılında ya 30 yaşındaki zihnini ya da 30 yaşındaki bedenini koruyabilseydin, hangisini seçerdin?" },
    { id: 7, stage: 1, stageTitle: "1. Aşama - Tanışma & Hafif Yakınlaşma", text: "Nasıl öleceğine dair gizli bir hissin veya ön sezilerin var mı?" },
    { id: 8, stage: 1, stageTitle: "1. Aşama - Tanışma & Hafif Yakınlaşma", text: "Partnerinle ortak olduğunu düşündüğün 3 özelliği say." },
    { id: 9, stage: 1, stageTitle: "1. Aşama - Tanışma & Hafif Yakınlaşma", text: "Hayatında en çok neye karşı minnet duyuyorsun?" },
    { id: 10, stage: 1, stageTitle: "1. Aşama - Tanışma & Hafif Yakınlaşma", text: "Büyütülme tarzında tek bir şeyi değiştirebilecek olsaydın, bu ne olurdu?" },
    { id: 11, stage: 1, stageTitle: "1. Aşama - Tanışma & Hafif Yakınlaşma", text: "4 dakika içinde partnerine hayat hikayeni olabildiğince detaylı bir şekilde anlat." },
    { id: 12, stage: 1, stageTitle: "1. Aşama - Tanışma & Hafif Yakınlaşma", text: "Yarın sabah uyandığında yeni bir yetenek veya özellik kazanmış olarak uyansaydın, bu ne olurdu?" },

    // SET 2 (13-24)
    { id: 13, stage: 2, stageTitle: "2. Aşama - Derinleşme & Değerler", text: "Bir kristal küre sana kendin, hayatın, geleceğin ya da başka herhangi bir şey hakkında gerçeği söyleyebilseydi, neyi bilmek isterdin?" },
    { id: 14, stage: 2, stageTitle: "2. Aşama - Derinleşme & Değerler", text: "Uzun zamandır yapmayı hayal ettiğin bir şey var mı? Neden yapmadın?" },
    { id: 15, stage: 2, stageTitle: "2. Aşama - Derinleşme & Değerler", text: "Hayatındaki en büyük başarı nedir?" },
    { id: 16, stage: 2, stageTitle: "2. Aşama - Derinleşme & Değerler", text: "Bir arkadaşlıkta en çok neye değer verirsin?" },
    { id: 17, stage: 2, stageTitle: "2. Aşama - Derinleşme & Değerler", text: "En değerli hafıza/anı senin için hangisi?" },
    { id: 18, stage: 2, stageTitle: "2. Aşama - Derinleşme & Değerler", text: "En korkunç veya en kötü anın hangisi?" },
    { id: 19, stage: 2, stageTitle: "2. Aşama - Derinleşme & Değerler", text: "Hayatının aniden sona ereceğini bileseydin, yaşama biçiminde neyi değiştirirdin? Neden?" },
    { id: 20, stage: 2, stageTitle: "2. Aşama - Derinleşme & Değerler", text: "Arkadaşlık senin için ne anlama geliyor?" },
    { id: 21, stage: 2, stageTitle: "2. Aşama - Derinleşme & Değerler", text: "Sevgi ve şefkat hayatında nasıl bir rol oynuyor?" },
    { id: 22, stage: 2, stageTitle: "2. Aşama - Derinleşme & Değerler", text: "Partnerinde olumlu bir özellik olarak gördüğün 5 şeyi sırayla paylaş." },
    { id: 23, stage: 2, stageTitle: "2. Aşama - Derinleşme & Değerler", text: "Ailen ne kadar yakın ve sıcak? Çocukluğunun diğer insanlardan daha mutlu geçtiğini düşünüyor musun?" },
    { id: 24, stage: 2, stageTitle: "2. Aşama - Derinleşme & Değerler", text: "Annene karşı hissettiklerin hakkında ne düşünüyorsun?" },

    // SET 3 (25-36)
    { id: 25, stage: 3, stageTitle: "3. Aşama - Kırılganlık & Tam Güven", text: "Her biriniz 'Biz ...' ile başlayan 3 doğru cümle kurun. Örneğin: 'Biz şu an ikimiz de...'" },
    { id: 26, stage: 3, stageTitle: "3. Aşama - Kırılganlık & Tam Güven", text: "Şöyle başlayan bir cümleyi tamamla: 'Keşke paylaşabileceğim biri olsaydı...'" },
    { id: 27, stage: 3, stageTitle: "3. Aşama - Kırılganlık & Tam Güven", text: "Partnerinle çok yakın bir arkadaş olacaksanız, onun senin hakkında bilmesi gereken en önemli şeyi söyle." },
    { id: 28, stage: 3, stageTitle: "3. Aşama - Kırılganlık & Tam Güven", text: "Partnerine onun hakkında neyi beğendiğini söyle; bu defa dürüst ol ve yeni tanıştığın birine demeyeceğin şeyleri söyle." },
    { id: 29, stage: 3, stageTitle: "3. Aşama - Kırılganlık & Tam Güven", text: "Hayatındaki utanç verici bir anı partnerinle paylaş." },
    { id: 30, stage: 3, stageTitle: "3. Aşama - Kırılganlık & Tam Güven", text: "En son ne zaman başka birinin önünde ağladın? Peki en son ne zaman kendi kendine ağladın?" },
    { id: 31, stage: 3, stageTitle: "3. Aşama - Kırılganlık & Tam Güven", text: "Partnerinde şimdiden sevmeye başladığın bir şeyi ona söyle." },
    { id: 32, stage: 3, stageTitle: "3. Aşama - Kırılganlık & Tam Güven", text: "Senin için şakası yapılamayacak kadar ciddi olan şey nedir (varsa)?" },
    { id: 33, stage: 3, stageTitle: "3. Aşama - Kırılganlık & Tam Güven", text: "Bu akşam kimseyle iletişim kuramadan ölecek olsaydın, birine söylemediğin için en çok pişman olacağın şey ne olurdu? Neden henüz söylemedin?" },
    { id: 34, stage: 3, stageTitle: "3. Aşama - Kırılganlık & Tam Güven", text: "Evin (içindeki her şeyle birlikte) alev alsa ve sevdiklerini ve evcil hayvanlarını kurtardıktan sonra tek bir şeyi kurtarma hakkın olsa, bu ne olurdu? Neden?" },
    { id: 35, stage: 3, stageTitle: "3. Aşama - Kırılganlık & Tam Güven", text: "Ailendeki tüm insanların ölümünden en çok hangisi seni sarsardı? Neden?" },
    { id: 36, stage: 3, stageTitle: "3. Aşama - Kırılganlık & Tam Güven", text: "Kişisel bir sorununu paylaş ve partnerinden bunu nasıl çözeceği konusunda tavsiye iste. Ayrıca partnerinden bu sorunu seçerken nasıl hissettiğini sana yansıtmasını iste." }
];

// --- 2. 20 SCENARIOS CATEGORY DEFINITIONS ---
const SCENARIO_CATEGORIES = [
    {
        title: "✈️ 1. Seyahat & Gezi Hayalleri",
        items: [
            "1. Hiç bilmediğimiz egzotik bir sahil kasabasında 1 hafta baş başa yaşamak",
            "2. Karavanla tüm Avrupa veya Kuzey Işıkları rotasını birlikte gezmek",
            "3. İtalya'da bir bağ evinde makarna & şarap atölyesine katılmak",
            "4. Dünyanın en yüksek tepesinde gün doğumunu şampanya ile karşılamak"
        ]
    },
    {
        title: "🏡 2. Ortak Yaşam & Evimiz",
        items: [
            "5. Orman içinde kendi hands-on cam ve ahşap kaplı romantik bir ev inşa etmek",
            "6. Evimizin çatı katını dev bir açık hava sinemasına dönüştürmek",
            "7. Yağmurlu günlerde tüm gün yataktan çıkmayıp gurme yemekler pişirmek",
            "8. Birlikte bir tatlı dükkanı veya mini kafe açıp işletmek"
        ]
    },
    {
        title: "🕯️ 3. Romantik Baş Başalar",
        items: [
            "9. Şehrin tüm ışıkları söndüğünde mum ışığında sabaha kadar dans etmek",
            "10. Özel kiralık bir yatta gece yıldızların altında denize girmek",
            "11. Birbirimize mektuplar yazıp 5 yıl sonra açmak üzere bahçeye gömmek",
            "12. Tüm günü birbirimize sürpriz jestler yapma oyunu olarak ilan etmek"
        ]
    },
    {
        title: "🎢 4. Çılgın Maceralar",
        items: [
            "13. İkimiz aynı anda paraşütle atlayıp gökyüzünde el ele tutuşmak",
            "14. Haritada rastgele gözümüz kapalı bir nokta seçip 2 saat sonra oraya gitmek",
            "15. Bir gece kulübünü sadece ikimiz için kapatıp özel DJ performansıyla eğlenmek",
            "16. Birlikte lunaparktaki tüm hızlı trenlere 10 kere üst üste binmek"
        ]
    },
    {
        title: "🌌 5. Geleceğimiz & Özel Anlar",
        items: [
            "17. Yaşlandığımızda birlikte deniz kenarında küçük bir kasabaya yerleşmek",
            "18. Tüm anılarımızı içeren 1000 sayfalık özel bir fotoğraf albümü hazırlamak",
            "19. Hayatımızdaki en zorlu anı birlikte sırt sırta verip tamamen aşmak",
            "20. Yıllar sonra aynı tanıştığımız gün gibi romantik bir randevuyu tekrarlamak"
        ]
    }
];

// --- 3. STATE MANAGEMENT ---
let appState = {
    partner1: "Melih",
    partner2: "Kevser",
    scenarioActivePlayer: "p2", // Default to Kevser
    scenariosData: {
        p1: Array(20).fill(""),
        p2: Array(20).fill("")
    },
    wishes: [],
    currentQuestionIndex: 0,
    activeQuestionPlayer: "p2", // Default to Kevser
    answeredQuestions: [],
    questionNotes: {}, // { qId: { p1: "Melih's note", p2: "Kevser's note" } }
    isTestCompleted: false,
    jarNotes: [],
    currentRitualIndex: 0
};

// --- 4. INITIALIZATION ---
document.addEventListener("DOMContentLoaded", () => {
    loadStateFromStorage();
    initCanvas();
    initNavigationTabs();
    initJarModule();
    init20ScenariosModule();
    initQuestionsModule();
});

// --- LOCAL STORAGE HELPERS ---
function saveStateToStorage() {
    localStorage.setItem("ask_oyun_state", JSON.stringify(appState));
}

function loadStateFromStorage() {
    const saved = localStorage.getItem("ask_oyun_state");
    if (saved) {
        try {
            const parsed = JSON.parse(saved);
            appState = { ...appState, ...parsed };
            appState.partner1 = "Melih";
            appState.partner2 = "Kevser";
            if (!appState.scenariosData) {
                appState.scenariosData = { p1: Array(20).fill(""), p2: Array(20).fill("") };
            }
        } catch (e) {
            console.error("Storage parse error:", e);
        }
    }
}

// --- TOAST NOTIFICATIONS ---
function showToast(message, icon = "💖") {
    const container = document.getElementById("toast-container");
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerHTML = `<span>${icon}</span> <span>${message}</span>`;
    container.appendChild(toast);
    setTimeout(() => {
        toast.remove();
    }, 3000);
}

// --- BACKGROUND CANVAS ---
function initCanvas() {
    const canvas = document.getElementById("bg-canvas");
    const ctx = canvas.getContext("2d");

    let width, height;
    let particles = [];

    function resize() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    }
    window.addEventListener("resize", resize);
    resize();

    class Particle {
        constructor() {
            this.reset();
        }
        reset() {
            this.x = Math.random() * width;
            this.y = height + Math.random() * 50;
            this.size = Math.random() * 12 + 6;
            this.speedY = Math.random() * 0.8 + 0.3;
            this.opacity = Math.random() * 0.5 + 0.2;
            this.isHeart = Math.random() > 0.4;
            this.rotation = Math.random() * Math.PI * 2;
        }
        update() {
            this.y -= this.speedY;
            this.x += Math.sin(this.y * 0.01) * 0.5;
            if (this.y < -20) this.reset();
        }
        draw() {
            ctx.save();
            ctx.globalAlpha = this.opacity;
            ctx.translate(this.x, this.y);
            ctx.rotate(this.rotation);

            if (this.isHeart) {
                ctx.fillStyle = "#ff758c";
                ctx.font = `${this.size}px sans-serif`;
                ctx.fillText("♥", 0, 0);
            } else {
                ctx.fillStyle = "#f6d365";
                ctx.beginPath();
                ctx.arc(0, 0, this.size / 4, 0, Math.PI * 2);
                ctx.fill();
            }
            ctx.restore();
        }
    }

    for (let i = 0; i < 35; i++) {
        particles.push(new Particle());
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);
        particles.forEach(p => {
            p.update();
            p.draw();
        });
        requestAnimationFrame(animate);
    }
    animate();
}

function playChimeSound() {
    try {
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();

        osc.type = "sine";
        osc.frequency.setValueAtTime(880, audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(1760, audioCtx.currentTime + 0.1);

        gain.gain.setValueAtTime(0.15, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.7);

        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.7);
    } catch (e) {}
}

// --- NAVIGATION TABS (with Slide Direction) ---
function launchConfetti(intensity = 'normal') {
    const canvas = document.createElement('canvas');
    canvas.style.cssText = [
        'position:fixed', 'top:0', 'left:0',
        'width:100vw', 'height:100vh',
        'pointer-events:none', 'z-index:9999'
    ].join(';');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    const colors = ['#ff4b72','#f5cf6d','#a855f7','#84fab0','#ff758c','#b19ffb','#fda085','#4fc3f7','#ce93d8'];
    const count = intensity === 'big' ? 180 : 90;
    const duration = intensity === 'big' ? 4200 : 2800;

    const particles = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: -Math.random() * canvas.height * 0.4 - 10,
        w: Math.random() * 10 + 5,
        h: Math.random() * 6 + 3,
        color: colors[Math.floor(Math.random() * colors.length)],
        isHeart: Math.random() > 0.65,
        rot: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.18,
        vx: (Math.random() - 0.5) * 3.5,
        vy: Math.random() * 4.5 + 1.8,
        opacity: 1
    }));

    let startTime = null;

    function animate(ts) {
        if (!startTime) startTime = ts;
        const elapsed = ts - startTime;
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        let alive = false;
        particles.forEach(p => {
            if (p.y < canvas.height + 30) {
                alive = true;
                p.x += p.vx;
                p.y += p.vy;
                p.rot += p.rotSpeed;
                if (elapsed > duration * 0.55) {
                    p.opacity = Math.max(0, 1 - (elapsed - duration * 0.55) / (duration * 0.45));
                }
                ctx.save();
                ctx.globalAlpha = p.opacity;
                ctx.translate(p.x, p.y);
                ctx.rotate(p.rot);
                ctx.fillStyle = p.color;
                if (p.isHeart) {
                    ctx.font = `${p.w + 6}px sans-serif`;
                    ctx.fillText('♥', -p.w / 2, p.h / 2);
                } else {
                    ctx.beginPath();
                    ctx.ellipse(0, 0, p.w / 2, p.h / 2, 0, 0, Math.PI * 2);
                    ctx.fill();
                }
                ctx.restore();
            }
        });

        if (alive && elapsed < duration + 600) {
            requestAnimationFrame(animate);
        } else {
            canvas.remove();
        }
    }
    requestAnimationFrame(animate);
}

// --- NAVIGATION TABS (with Slide Direction) ---
const TAB_ORDER = ['tab-jar', 'tab-wishes', 'tab-questions'];
let currentTabIndex = 0;

function initNavigationTabs() {
    const tabs = document.querySelectorAll(".nav-tab");
    const panes = document.querySelectorAll(".tab-pane");

    tabs.forEach((tab, newIndex) => {
        tab.addEventListener("click", () => {
            if (newIndex === currentTabIndex) return;

            const direction = newIndex > currentTabIndex ? "slide-enter-right" : "slide-enter-left";
            currentTabIndex = newIndex;

            tabs.forEach(t => t.classList.remove("active"));
            panes.forEach(p => {
                p.classList.remove("active", "slide-enter-right", "slide-enter-left");
            });

            tab.classList.add("active");
            const target = tab.getAttribute("data-tab");
            const targetPane = document.getElementById(target);
            targetPane.classList.add("active", direction);

            // Clean up animation class after it finishes
            setTimeout(() => {
                targetPane.classList.remove("slide-enter-right", "slide-enter-left");
            }, 450);
        });
    });
}

// --- MODULE 1: TAKDİR & TEŞEKKÜR KAVANOZU ---
function initJarModule() {
    const openAddModalBtn = document.getElementById("open-add-note-modal-btn");
    const closeAddModalBtn = document.getElementById("close-note-modal-btn");
    const addNoteModal = document.getElementById("add-note-modal");
    const submitNoteBtn = document.getElementById("submit-note-btn");

    const colorOpts = document.querySelectorAll(".color-opt");
    let selectedColor = "pink";

    colorOpts.forEach(btn => {
        btn.addEventListener("click", () => {
            colorOpts.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            selectedColor = btn.getAttribute("data-color");
        });
    });

    openAddModalBtn.addEventListener("click", () => {
        addNoteModal.classList.remove("hidden");
    });
    closeAddModalBtn.addEventListener("click", () => {
        addNoteModal.classList.add("hidden");
    });

    submitNoteBtn.addEventListener("click", () => {
        const text = document.getElementById("note-content-input").value.trim();
        const authorKey = document.getElementById("note-author-select").value;
        const tag = document.getElementById("note-tag-select").value;

        if (!text) {
            showToast("Lütfen not metnini yazın!", "⚠️");
            return;
        }

        const authorName = authorKey === "p2" ? "Kevser" : "Melih";

        const newNote = {
            id: Date.now(),
            author: authorName,
            color: selectedColor,
            tag: tag,
            text: text,
            date: new Date().toLocaleDateString("tr-TR")
        };

        appState.jarNotes.unshift(newNote);
        saveStateToStorage();

        document.getElementById("note-content-input").value = "";
        addNoteModal.classList.add("hidden");

        playChimeSound();
        launchConfetti('normal');
        renderJarDisplay();
        showToast("Sevgi notunuz gizli olarak kavanoza atıldı! 🫙", "💌");
    });

    const openRitualBtn = document.getElementById("open-jar-ritual-btn");
    const ritualModal = document.getElementById("jar-ritual-modal");
    const closeRitualBtn = document.getElementById("close-jar-ritual-btn");
    const nextRitualNoteBtn = document.getElementById("next-ritual-note-btn");

    openRitualBtn.addEventListener("click", () => {
        if (appState.jarNotes.length === 0) {
            showToast("Henüz kavanozda not yok! Önce birkaç not ekleyin.", "🫙");
            return;
        }
        document.getElementById("jar-lid").classList.add("open");
        appState.currentRitualIndex = 0;
        renderRitualScrollNote();
        ritualModal.classList.remove("hidden");
    });

    closeRitualBtn.addEventListener("click", () => {
        ritualModal.classList.add("hidden");
        document.getElementById("jar-lid").classList.remove("open");
    });

    nextRitualNoteBtn.addEventListener("click", () => {
        appState.currentRitualIndex++;
        if (appState.currentRitualIndex >= appState.jarNotes.length) {
            appState.currentRitualIndex = 0;
        }
        playChimeSound();
        renderRitualScrollNote();
    });

    renderJarDisplay();
}

function renderJarDisplay() {
    const countBadge = document.getElementById("jar-count-badge");
    const countText = document.getElementById("jar-note-count-text");
    const jarInside = document.getElementById("jar-notes-inside");
    const feed = document.getElementById("notes-feed");

    const noteCount = appState.jarNotes.length;
    countBadge.textContent = noteCount;
    countText.innerHTML = `Kavanozda <strong>${noteCount}</strong> gizli sevgi notu birikti.`;

    jarInside.innerHTML = "";
    appState.jarNotes.slice(0, 24).forEach(note => {
        const slip = document.createElement("div");
        slip.className = `paper-slip ${note.color}`;
        slip.style.setProperty("--rot", Math.floor(Math.random() * 60 - 30));
        switch (note.color) {
            case "pink": slip.style.background = "#ff758c"; break;
            case "gold": slip.style.background = "#f6d365"; break;
            case "purple": slip.style.background = "#b19ffb"; break;
            case "blue": slip.style.background = "#84fab0"; break;
        }
        jarInside.appendChild(slip);
    });

    feed.innerHTML = "";
    if (appState.jarNotes.length === 0) {
        feed.innerHTML = '<p class="empty-msg">Henüz kavanoza not atılmadı.</p>';
        return;
    }

    appState.jarNotes.forEach((note, idx) => {
        const card = document.createElement("div");
        card.className = `feed-note-card ${note.color}`;
        card.innerHTML = `
            <div class="feed-note-header">
                <span>Kimden: <strong>${note.author}</strong> (${note.date})</span>
                <span class="feed-note-tag">${note.tag}</span>
            </div>
            <div class="feed-note-locked-body">
                🔒 <span>Gizli Not #${appState.jarNotes.length - idx} (Okunması için kavanozu açın)</span>
            </div>
        `;
        feed.appendChild(card);
    });
}

function renderRitualScrollNote() {
    const note = appState.jarNotes[appState.currentRitualIndex];
    const scrollTag = document.getElementById("scroll-tag");
    const scrollText = document.getElementById("scroll-text");
    const scrollAuthor = document.getElementById("scroll-author");
    const scrollPaper = document.getElementById("scroll-paper");

    if (note) {
        scrollTag.textContent = note.tag;
        scrollText.textContent = `"${note.text}"`;
        scrollAuthor.textContent = `- ${note.author} (${note.date})`;

        scrollPaper.style.animation = 'none';
        scrollPaper.offsetHeight;
        scrollPaper.style.animation = null;
    }
}

// --- MODULE 2: 20 HAYAL SENARYOSU OYUNU ---
function init20ScenariosModule() {
    const melihRoleBtn = document.getElementById("scenario-role-melih");
    const kevserRoleBtn = document.getElementById("scenario-role-kevser");
    const saveBtn = document.getElementById("save-wishes-btn");

    melihRoleBtn.addEventListener("click", () => {
        melihRoleBtn.classList.add("active");
        kevserRoleBtn.classList.remove("active");
        saveCurrentScenarioInputs();
        appState.scenarioActivePlayer = "p1";
        render20ScenarioForms();
    });

    kevserRoleBtn.addEventListener("click", () => {
        kevserRoleBtn.classList.add("active");
        melihRoleBtn.classList.remove("active");
        saveCurrentScenarioInputs();
        appState.scenarioActivePlayer = "p2";
        render20ScenarioForms();
    });

    saveBtn.addEventListener("click", () => {
        saveCurrentScenarioInputs();
        saveStateToStorage();
        renderScenarioRevealDeck();
        showToast("Melih & Kevser'in 20 Senaryosu başarıyla yüklendi!", "✨");
    });

    render20ScenarioForms();
    if (appState.scenariosData.p1.some(Boolean) || appState.scenariosData.p2.some(Boolean)) {
        renderScenarioRevealDeck();
    }
}

function saveCurrentScenarioInputs() {
    const activePlayer = appState.scenarioActivePlayer;
    let globalIndex = 0;
    SCENARIO_CATEGORIES.forEach((cat, catIdx) => {
        cat.items.forEach((itemLabel, itemIdx) => {
            const el = document.getElementById(`scen-input-${catIdx}-${itemIdx}`);
            if (el) {
                appState.scenariosData[activePlayer][globalIndex] = el.value.trim();
            }
            globalIndex++;
        });
    });
}

function render20ScenarioForms() {
    const wrapper = document.getElementById("scenario-forms-wrapper");
    const activePlayer = appState.scenarioActivePlayer;
    const authorName = activePlayer === "p2" ? "Kevser" : "Melih";

    wrapper.innerHTML = "";
    let globalIndex = 0;

    SCENARIO_CATEGORIES.forEach((cat, catIdx) => {
        const block = document.createElement("div");
        block.className = "scenario-category-block";

        let html = `<h3 class="category-title">${cat.title}</h3><div class="category-scenarios-grid">`;

        cat.items.forEach((itemLabel, itemIdx) => {
            const existingVal = appState.scenariosData[activePlayer][globalIndex] || "";
            html += `
                <div class="wish-input-group">
                    <label>${itemLabel}</label>
                    <textarea id="scen-input-${catIdx}-${itemIdx}" placeholder="${authorName}'in bu senaryodaki detaylı hayali...">${existingVal}</textarea>
                </div>
            `;
            globalIndex++;
        });

        html += `</div>`;
        block.innerHTML = html;
        wrapper.appendChild(block);
    });
}

function renderScenarioRevealDeck() {
    const revealSec = document.getElementById("wishes-reveal-section");
    const grid = document.getElementById("reveal-cards-grid");

    revealSec.classList.remove("hidden");
    grid.innerHTML = "";

    let count = 0;
    let globalIndex = 0;

    SCENARIO_CATEGORIES.forEach(cat => {
        cat.items.forEach(itemLabel => {
            const melihText = appState.scenariosData.p1[globalIndex];
            const kevserText = appState.scenariosData.p2[globalIndex];

            if (melihText || kevserText) {
                count++;
                const card = document.createElement("div");
                card.className = "wish-reveal-card";
                card.innerHTML = `
                    <div class="wish-card-inner">
                        <div class="wish-card-author">${itemLabel}</div>
                        ${kevserText ? `<div class="wish-card-text"><strong>💖 Kevser:</strong> "${kevserText}"</div>` : ''}
                        ${melihText ? `<div class="wish-card-text" style="margin-top:6px;"><strong>💙 Melih:</strong> "${melihText}"</div>` : ''}
                    </div>
                `;
                grid.appendChild(card);
            }
            globalIndex++;
        });
    });

    if (count === 0) {
        grid.innerHTML = '<p class="empty-msg">Henüz kaydedilmiş 20 senaryo metni bulunmuyor.</p>';
    }
}

// --- MODULE 3: 36 SORU EGZERSİZİ ---
function initQuestionsModule() {
    const switchMelihBtn = document.getElementById("q-switch-melih");
    const switchKevserBtn = document.getElementById("q-switch-kevser");

    const prevBtn = document.getElementById("prev-q-btn");
    const nextBtn = document.getElementById("next-q-btn");
    const saveAnswerBtn = document.getElementById("save-single-q-answer-btn");
    const finishBtn = document.getElementById("finish-36-questions-btn");

    switchMelihBtn.addEventListener("click", () => {
        switchMelihBtn.classList.add("active");
        switchKevserBtn.classList.remove("active");
        appState.activeQuestionPlayer = "p1";
        renderCurrentQuestion();
    });

    switchKevserBtn.addEventListener("click", () => {
        switchKevserBtn.classList.add("active");
        switchMelihBtn.classList.remove("active");
        appState.activeQuestionPlayer = "p2";
        renderCurrentQuestion();
    });

    prevBtn.addEventListener("click", () => {
        if (appState.currentQuestionIndex > 0) {
            appState.currentQuestionIndex--;
            renderCurrentQuestion();
        }
    });

    nextBtn.addEventListener("click", () => {
        if (appState.currentQuestionIndex < QUESTIONS_DATA.length - 1) {
            appState.currentQuestionIndex++;
            renderCurrentQuestion();
        }
    });

    saveAnswerBtn.addEventListener("click", () => {
        const currentQ = QUESTIONS_DATA[appState.currentQuestionIndex];
        const val = document.getElementById("active-player-q-input").value.trim();

        if (!val) {
            showToast("Lütfen cevabınızı yazın!", "⚠️");
            return;
        }

        if (!appState.questionNotes[currentQ.id]) {
            appState.questionNotes[currentQ.id] = { p1: "", p2: "" };
        }

        const activePlayer = appState.activeQuestionPlayer;
        appState.questionNotes[currentQ.id][activePlayer] = val;

        saveStateToStorage();
        playChimeSound();

        const authorName = activePlayer === "p2" ? "Kevser" : "Melih";
        showToast(`${authorName}'in cevabı gizli kaydedildi!`, "🔒");
        renderCurrentQuestion();
    });

    finishBtn.addEventListener("click", () => {
        appState.isTestCompleted = true;
        saveStateToStorage();
        playChimeSound();
        launchConfetti('big');
        showToast("Tebrikler Melih & Kevser! 36 Soruluk test bitti, tüm cevaplar açıldı! 💖🎉", "👑");
        renderCurrentQuestion();
        renderAllAnswersResultsDeck();
    });

    renderCurrentQuestion();
    if (appState.isTestCompleted) {
        renderAllAnswersResultsDeck();
    }
}

function renderCurrentQuestion() {
    const q = QUESTIONS_DATA[appState.currentQuestionIndex];
    document.getElementById("q-stage-badge").textContent = q.stageTitle;
    document.getElementById("q-num-display").textContent = `#${q.id}`;
    document.getElementById("q-text-display").textContent = q.text;

    const activePlayer = appState.activeQuestionPlayer;
    const isKevserActive = (activePlayer === "p2");

    const activeLabel = document.getElementById("active-player-label");
    const activeInput = document.getElementById("active-player-q-input");
    const otherLabel = document.getElementById("other-player-label");
    const otherContent = document.getElementById("other-answer-content");

    const savedObj = appState.questionNotes[q.id] || { p1: "", p2: "" };

    if (isKevserActive) {
        activeLabel.textContent = "💖 Kevser'in Cevabı:";
        activeInput.placeholder = "Kevser, senin bu sorudaki cevabın...";
        activeInput.value = savedObj.p2 || "";

        otherLabel.textContent = "💙 Melih'in Cevabı:";
        if (appState.isTestCompleted) {
            if (savedObj.p1) {
                otherContent.className = "other-answer-content";
                otherContent.textContent = `"${savedObj.p1}"`;
            } else {
                otherContent.className = "other-answer-content locked";
                otherContent.textContent = "Melih bu soruyu boş bıraktı.";
            }
        } else {
            otherContent.className = "other-answer-content locked";
            if (savedObj.p1) {
                otherContent.textContent = "🔒 Melih cevabını kaydetti! (Test bitince açılacak)";
            } else {
                otherContent.textContent = "🔒 Melih henüz bu soruyu cevaplamadı.";
            }
        }
    } else {
        activeLabel.textContent = "💙 Melih'in Cevabı:";
        activeInput.placeholder = "Melih, senin bu sorudaki cevabın...";
        activeInput.value = savedObj.p1 || "";

        otherLabel.textContent = "💖 Kevser'in Cevabı:";
        if (appState.isTestCompleted) {
            if (savedObj.p2) {
                otherContent.className = "other-answer-content";
                otherContent.textContent = `"${savedObj.p2}"`;
            } else {
                otherContent.className = "other-answer-content locked";
                otherContent.textContent = "Kevser bu soruyu boş bıraktı.";
            }
        } else {
            otherContent.className = "other-answer-content locked";
            if (savedObj.p2) {
                otherContent.textContent = "🔒 Kevser cevabını kaydetti! (Test bitince açılacak)";
            } else {
                otherContent.textContent = "🔒 Kevser henüz bu soruyu cevaplamadı.";
            }
        }
    }

    const hasP1 = !!savedObj.p1;
    const hasP2 = !!savedObj.p2;
    const bothAnswered = hasP1 && hasP2;

    const lockNotice = document.getElementById("q-lock-status-notice") || document.getElementById("q-lock-notice");
    const nextBtn = document.getElementById("next-q-btn");
    const finishBtn = document.getElementById("finish-36-questions-btn");

    if (bothAnswered) {
        lockNotice.className = "q-lock-status-notice unlocked";
        lockNotice.textContent = "✅ İkiniz de cevapladınız! (Cevaplar gizli kaydedildi, sonraki soruya geçebilirsiniz)";
        nextBtn.disabled = (appState.currentQuestionIndex === QUESTIONS_DATA.length - 1);
    } else {
        lockNotice.className = "q-lock-status-notice";
        if (hasP2 && !hasP1) {
            lockNotice.textContent = "🔒 Kevser cevabını yazdı. Melih'in de cevabını yazması bekleniyor.";
        } else if (!hasP2 && hasP1) {
            lockNotice.textContent = "🔒 Melih cevabını yazdı. Kevser'in de cevabını yazması bekleniyor.";
        } else {
            lockNotice.textContent = "🔒 Sonraki soruya geçebilmek için hem Kevser hem Melih cevap vermelidir.";
        }
        nextBtn.disabled = true;
    }

    const isLastQuestion = (appState.currentQuestionIndex === QUESTIONS_DATA.length - 1);
    if ((isLastQuestion && bothAnswered) || appState.isTestCompleted) {
        finishBtn.classList.remove("hidden");
        if (appState.isTestCompleted) {
            finishBtn.textContent = "🎉 Test Tamamlandı (Tüm Cevaplar Açık)";
        }
    } else {
        finishBtn.classList.add("hidden");
    }

    const progressPercent = Math.round(((appState.currentQuestionIndex + 1) / QUESTIONS_DATA.length) * 100);
    document.getElementById("question-number-indicator").textContent = `Soru ${appState.currentQuestionIndex + 1} / 36`;
    document.getElementById("question-progress-percent").textContent = `%${progressPercent} Tamamlandı`;
    document.getElementById("question-progress-fill").style.width = `${progressPercent}%`;

    document.getElementById("prev-q-btn").disabled = (appState.currentQuestionIndex === 0);
}

function renderAllAnswersResultsDeck() {
    const resultsSec = document.getElementById("q-results-section");
    const deck = document.getElementById("all-answers-deck");

    resultsSec.classList.remove("hidden");
    deck.innerHTML = "";

    QUESTIONS_DATA.forEach(q => {
        const saved = appState.questionNotes[q.id] || { p1: "", p2: "" };
        const card = document.createElement("div");
        card.className = "answer-result-card";
        card.innerHTML = `
            <div class="result-card-num">Soru #${q.id}</div>
            <div class="result-card-q">${q.text}</div>
            <div class="result-answers-grid">
                <div class="result-person-box kevser">
                    <div class="result-person-name">💖 Kevser:</div>
                    <div class="result-person-text">${saved.p2 ? `"${saved.p2}"` : '<em>Cevap yok</em>'}</div>
                </div>
                <div class="result-person-box melih">
                    <div class="result-person-name">💙 Melih:</div>
                    <div class="result-person-text">${saved.p1 ? `"${saved.p1}"` : '<em>Cevap yok</em>'}</div>
                </div>
            </div>
        `;
        deck.appendChild(card);
    });
}
