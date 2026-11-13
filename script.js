const translations = {
  ar: {
    skip: "انتقل إلى المحتوى", brandRole: "أمن المعلومات · Blue Team", navAbout: "نبذة", navProjects: "المشاريع", navPlatforms: "المنصات", navBlog: "المدونة", navCourses: "الدورات", navSkills: "المهارات", navContact: "التواصل",
    themeDark: "الوضع الداكن", themeLight: "الوضع الفاتح", availability: "عمليات الأمن السيبراني والاستجابة للحوادث", heroRole: "محلل عمليات أمنية SOC · Blue Team · مراقبة الشبكات",
    heroSummary: "خريج أمن معلومات يركز على التحقيق في الحوادث وتحليل السجلات وحركة الشبكة.", downloadCv: "تنزيل السيرة الذاتية",
    roleKicker: "SECURITY OPERATIONS & TRIAGE", roleTitle: "SOC Analyst", roleDescription: "تحليل التنبيهات والسجلات وحركة الشبكة، والتمييز بين النشاط الطبيعي والمشبوه، وتوثيق النتائج وتوصيات الدفاع.", roleHighlight: "تحليل موثق · مؤشرات اختراق · توصيات دفاعية",
    projectsCta: "استكشف المشاريع", contactCta: "تواصل معي", proofDegree: "بكالوريوس أمن معلومات", proofLink: "رابط إثبات العمل", labStatus: "مختبر عملي",
    signalCaption: "من البيانات إلى الاستجابة", stepObserve: "الملاحظة", stepObserveSub: "السجلات وحركة الشبكة", stepInvestigate: "التحقيق", stepInvestigateSub: "الأحداث والمؤشرات", stepReport: "التوثيق", stepReportSub: "النتائج وتوصيات الدفاع",
    aboutKicker: "01 / نبذة", aboutTitle: "أحوّل الإشارات إلى فهم واضح", aboutText: "خريج أمن معلومات من جامعة سيئون، بنيت خبرة تطبيقية عبر مختبرات الدفاع السيبراني والمشاريع الشخصية ومختبر منزلي. أركز على تحليل السجلات وحركة الشبكة، والتحقيق في الحوادث، واستخلاص مؤشرات الاختراق لصياغة توصيات دفاعية واضحة.",
    aboutNote: "أبحث عن فرصة بداية مهنية أساهم فيها في المراقبة الأمنية والتحقيق والاستجابة للحوادث.", projectsKicker: "02 / أعمال مختارة", projectsTitle: "مشاريع ومختبرات عملية", projectsIntro: "تطبيقات عملية في تحليل الشبكات، ومراقبة الأحداث، والاستجابة للحوادث.", platformsKicker: "03 / المنصات التدريبية", platformsTitle: "منصات التدريب العملي", platformsIntro: "ملفاتك على منصات التدريب العملي ومختبرات الأمن السيبراني.", platformStatus: "منصة تدريب", platformCyberText: "ملفي الشخصي على منصة CyberDefenders", letsdefendText: "ملفي الشخصي على منصة LetsDefend.",
    projectGraduationLabel: "مشروع التخرج · 2026", projectGraduationTitle: "نظام ذكي لتحليل الحزم واكتشاف الحوادث", projectGraduationText: "تطوير نظام يعالج ملفات PCAP، ويستخرج سمات حركة الشبكة ويعرضها، ثم يصنّف الحركة الضارة باستخدام Random Forest لدعم اكتشاف الحوادث. النظام قيد التحسين.",
    projectLabLabel: "مختبرات دفاع رقمي · 2025–الآن", projectCyberText: "إنجاز أكثر من 25 مختبرًا في الاستجابة للحوادث، وصيد التهديدات، وتحليل البرمجيات الخبيثة والذاكرة والسجلات. توثيق النتائج وربطها بإطار MITRE ATT&CK.",
    projectHomeLabel: "مختبر منزلي · 2022–الآن", projectHomeTitle: "مختبر مراقبة واختبار أمني", projectHomeText: "بناء بيئة تضم Kali Linux وWindows وWindows Server وMetasploitable وSplunk لمحاكاة الهجمات ومراجعة السجلات وحركة الشبكة وتحسين فرص الاكتشاف.",
    academicLabel: "مشروع أكاديمي", bankTitle: "نظام تحويلات مصرفية آمن مصغر", bankText: "تطبيق مصادقة وصلاحيات حسب الدور ومعاملات قاعدة بيانات آمنة واستعلامات مقيّدة للحد من حقن SQL.", libraryTitle: "نظام إدارة مكتبة", libraryText: "تطبيق سطح مكتب لإدارة الكتب والأعضاء وعمليات الاستعارة والإرجاع.",
    skillsKicker: "06 / المهارات", skillsTitle: "أدوات ومعرفة تطبيقية", skillOps: "عمليات الأمن", skillOpsText: "التحقيق في الحوادث، تحليل السجلات، اكتشاف التهديدات، تحليل حركة الشبكة، تحديد مؤشرات الاختراق، أساسيات SIEM.",
    skillTools: "أدوات الأمن", skillNetwork: "الشبكات والأنظمة", skillNetworkText: "TCP/IP، التوجيه والتحويل، تقسيم الشبكات، IDS/IPS، الجدران النارية، Windows Server وLinux.", skillFrameworks: "الأطر والمفاهيم", skillProgramming: "البرمجة وقواعد البيانات", studyTitle: "دراسة ذاتية وتطوير مستمر", studyText: "دراسة مسارات eCIR وOSCP وأساسيات Network+ ضمن التعلم الذاتي، إلى جانب تطبيقات عملية في الاستجابة للحوادث والشبكات.",
    backgroundKicker: "07 / الخلفية", backgroundTitle: "الأساس الأكاديمي", degree: "بكالوريوس أمن المعلومات", university: "جامعة سيئون · حضرموت، اليمن", languagesKicker: "اللغات", arabicLanguage: "العربية", nativeLevel: "اللغة الأم", englishLanguage: "الإنجليزية", intermediateLevel: "متوسط", languageNote: "الإنجليزية بمستوى عملي مناسب للتواصل في بيئة العمل.",
    blogKicker: "04 / المدونة", blogTitle: "ملاحظات وكتابات أمنية", blogIntro: "مقالات تقنية وملخصات مختبرات وفيديوهات من القناة.", blogEmptyTitle: "مساحة للـ Write-ups والفيديوهات", blogEmptyText: "ستتم إضافتها قريبًا.", videoBlogTitle: "فيديو جديد", videoBlogText: "مشاهدة الفيديو على قناة YouTube.", watchVideo: "شاهد الفيديو",
    coursesKicker: "05 / الدورات والشهادات", coursesTitle: "تعلم وممارسة مستمرة", coursesIntro: "تفاصيل مختصرة لكل مسار، مع زر عرض الشهادة عند توفر رابطها.", coursePractice: "مختبرات عملية", coursePlatform: "منصة تدريب", tryhackmeText: "ملفي الشخصي على منصة TryHackMe.", viewProfile: "عرض الملف", courseSelfStudy: "دراسة ذاتية", courseCyberText: "أكثر من 25 مختبرًا في الاستجابة للحوادث والتحليل الجنائي الرقمي وصيد التهديدات وتحليل السجلات.", courseEcirPrepText: "إتمام دورة eCIR Prep المقدمة عبر NetRiders Academy.", courseForensicsText: "شهادة إتمام دورة Digital Forensics Fundamentals من NetRiders Academy.", courseOscpText: "دراسة موضوعات اختبار الاختراق وتصعيد الصلاحيات وActive Directory وما بعد الاستغلال.", courseNetworkText: "أساسيات TCP/IP والتوجيه والتحويل وتقسيم الشبكات واستكشاف أعطال الشبكات.", courseSecurityPlusText: "دراسة ذاتية لمفاهيم الأمن السيبراني، والتهديدات والثغرات، وأمن الشبكات، وإدارة المخاطر والاستجابة للحوادث.", courseAPlusText: "دراسة ذاتية لأساسيات مكونات الحاسوب وأنظمة التشغيل وصيانة الأجهزة واستكشاف الأعطال التقنية.", viewCertificate: "عرض الشهادة", verifyCertificate: "تحقق من الشهادة", courseCertificate: "شهادة إتمام", courseSplunkText: "شهادة إتمام دورة Intro to Splunk للتعلم الإلكتروني، بساعة تعليمية واحدة.", courseSplunkDate: "16 فبراير 2026 · ساعة تعليمية واحدة", enterpriseSecurityText: "شهادة إتمام دورة Introduction to Enterprise Security (eLearning) من Splunk، بساعة تعليمية واحدة.", enterpriseSecurityDate: "13 نوفمبر 2026 · ساعة تعليمية واحدة", writeupFormat: "WRITE-UP / ملاحظة تقنية", videoFormat: "YOUTUBE / VIDEO", readWriteup: "اقرأ الملاحظة", watchVideo: "شاهد الفيديو",
    backgroundKicker: "07 / الخلفية", contactKicker: "08 / تواصل", contactTitle: "اترك لي رسالة", contactText: "أدخل بريدك الإلكتروني ورسالتك، وسأعاود التواصل معك.", contactEmailLabel: "بريدك الإلكتروني", contactEmailPlaceholder: "name@example.com", contactMessageLabel: "رسالتك", contactMessagePlaceholder: "اكتب رسالتك هنا...", contactSubmit: "إرسال الرسالة", footerNote: "ملف مهني في أمن المعلومات · 2026", backTop: "العودة إلى الأعلى ↑"
  },
  en: {
    skip: "Skip to content", brandRole: "Information Security · Blue Team", navAbout: "About", navProjects: "Projects", navPlatforms: "Platforms", navBlog: "Blog", navCourses: "Courses", navSkills: "Skills", navContact: "Contact",
    themeDark: "Dark mode", themeLight: "Light mode", availability: "Security operations and incident response", heroRole: "SOC Analyst · Blue Team · Network Monitoring",
    heroSummary: "Information Security graduate focused on incident investigation and log and network traffic analysis.", downloadCv: "Download résumé",
    roleKicker: "SECURITY OPERATIONS & TRIAGE", roleTitle: "SOC Analyst", roleDescription: "Analyzing alerts, logs, and network traffic; distinguishing normal from suspicious activity; and documenting findings and defensive recommendations.", roleHighlight: "Documented analysis · Indicators of compromise · Defensive guidance",
    projectsCta: "Explore projects", contactCta: "Contact me", proofDegree: "B.Sc. Information Security", proofLink: "View work evidence", labStatus: "Hands-on lab",
    signalCaption: "From data to response", stepObserve: "Observe", stepObserveSub: "Logs and network traffic", stepInvestigate: "Investigate", stepInvestigateSub: "Events and indicators", stepReport: "Document", stepReportSub: "Findings and defense guidance",
    aboutKicker: "01 / ABOUT", aboutTitle: "Turning signals into clear understanding", aboutText: "I am an Information Security graduate from Seiyun University. I have built hands-on experience through Blue Team labs, personal projects, and a home lab. I focus on analyzing logs and network traffic, investigating incidents, and turning indicators of compromise into clear defensive recommendations.",
    aboutNote: "Interested in contributing to security monitoring, investigation, and incident response.", projectsKicker: "02 / SELECTED WORK", projectsTitle: "Projects & hands-on labs", projectsIntro: "Practical work across network analysis, event monitoring, and incident response.", platformsKicker: "03 / TRAINING PLATFORMS", platformsTitle: "Hands-on training platforms", platformsIntro: "Profiles for practical cybersecurity training and lab platforms.", platformStatus: "Training platform", platformCyberText: "My profile on the CyberDefenders platform.", letsdefendText: "My profile on the LetsDefend platform.",
    projectGraduationLabel: "Graduation project · 2026", projectGraduationTitle: "Intelligent Network Packet Analysis & Incident Detection System", projectGraduationText: "Built a system to process PCAP files, extract and visualize network traffic features, then classify malicious traffic with a Random Forest model to support incident detection. The system is currently being refined.",
    projectLabLabel: "Digital forensics labs · 2025–present", projectCyberText: "Completed 25+ labs in incident response, threat hunting, malware, memory, and log analysis. Documented findings and mapped activity to MITRE ATT&CK.",
    projectHomeLabel: "Home security lab · 2022–present", projectHomeTitle: "Security monitoring and testing lab", projectHomeText: "Built an environment with Kali Linux, Windows, Windows Server, Metasploitable, and Splunk to simulate attacks and review logs and network traffic for detection opportunities.",
    academicLabel: "Academic project", bankTitle: "Small-Scale Secure Banking Transfer System", bankText: "Implemented authentication, role-based authorization, secure database transactions, and parameterized queries to reduce SQL injection risk.", libraryTitle: "Library Management System", libraryText: "Developed a desktop application for managing books, members, borrowing, and return operations.",
    skillsKicker: "06 / SKILLS", skillsTitle: "Applied tools and knowledge", skillOps: "Security operations", skillOpsText: "Incident investigation, log analysis, threat detection, network traffic analysis, IOC identification, and SIEM fundamentals.",
    skillTools: "Security tools", skillNetwork: "Networking & systems", skillNetworkText: "TCP/IP, routing and switching, subnetting, IDS/IPS, firewalls, Windows Server, and Linux.", skillFrameworks: "Frameworks & concepts", skillProgramming: "Programming & databases", studyTitle: "Self-study and continuous learning", studyText: "Self-study based on eCIR and OSCP curricula and Network+ fundamentals, supported by practical work in incident response and networking.",
    backgroundKicker: "04 / BACKGROUND", backgroundTitle: "Academic foundation", degree: "B.Sc. in Information Security", university: "Seiyun University · Hadhramaut, Yemen", languagesKicker: "LANGUAGES", arabicLanguage: "Arabic", nativeLevel: "Native", englishLanguage: "English", intermediateLevel: "Intermediate", languageNote: "English proficiency suitable for day-to-day communication in a professional workplace.",
    blogKicker: "04 / BLOG", blogTitle: "Security notes & write-ups", blogIntro: "Technical articles, lab notes, and videos from the channel.", blogEmptyTitle: "A space for write-ups and videos", blogEmptyText: "Coming soon.", videoBlogTitle: "New video", videoBlogText: "Watch the video on the YouTube channel.", watchVideo: "Watch video",
    coursesKicker: "05 / COURSES & CERTIFICATES", coursesTitle: "Continuous learning and practice", coursesIntro: "A short description for each track, with a certificate link when available.", coursePractice: "Hands-on labs", coursePlatform: "Training platform", tryhackmeText: "My profile on the TryHackMe platform.", viewProfile: "View profile", courseSelfStudy: "Self-study", courseCyberText: "25+ labs in incident response, digital forensics, threat hunting, and log analysis.", courseEcirPrepText: "Certificate of completion for the eCIR Prep course from NetRiders Academy.", courseForensicsText: "Certificate of completion for Digital Forensics Fundamentals from NetRiders Academy.", courseOscpText: "Study of penetration testing, privilege escalation, Active Directory, and post-exploitation topics.", courseNetworkText: "TCP/IP, routing and switching, subnetting, and network troubleshooting fundamentals.", courseSecurityPlusText: "Self-study of cybersecurity concepts, threats and vulnerabilities, network security, risk management, and incident response.", courseAPlusText: "Self-study of computer hardware, operating systems, device maintenance, and technical troubleshooting fundamentals.", viewCertificate: "View certificate", verifyCertificate: "Verify certificate", courseCertificate: "Certificate of completion", courseSplunkText: "Completed the Intro to Splunk eLearning course, worth one credit hour.", courseSplunkDate: "16 February 2026 · 1 credit hour", enterpriseSecurityText: "Completed the Splunk Introduction to Enterprise Security eLearning course, worth one credit hour.", enterpriseSecurityDate: "13 November 2026 · 1 credit hour", writeupFormat: "WRITE-UP / FIELD NOTE", videoFormat: "YOUTUBE / VIDEO", readWriteup: "Read note", watchVideo: "Watch video",
    backgroundKicker: "07 / BACKGROUND", contactKicker: "08 / CONTACT", contactTitle: "Leave me a message", contactText: "Enter your email address and message, and I’ll get back to you.", contactEmailLabel: "Your email address", contactEmailPlaceholder: "name@example.com", contactMessageLabel: "Your message", contactMessagePlaceholder: "Write your message here...", contactSubmit: "Send message", footerNote: "Information Security profile · 2026", backTop: "Back to top ↑"
  }
};

const root = document.documentElement;
const languageToggle = document.querySelector("#language-toggle");
const themeToggle = document.querySelector("#theme-toggle");

// Fill these values after receiving the public links and certificate details.
// WhatsApp accepts digits only, for example: 9677XXXXXXXX.
const SITE_LINKS = {
  youtubeChannel: "",
  whatsappPhone: "967774031466",
  proof: { graduation: "", homelab: "", banking: "", library: "" },
  certificates: { cyberdefenders: "", ecir: "", oscp: "", networkplus: "" }
};
const BLOG_POSTS = [];

function savedValue(key, fallback) {
  try { return localStorage.getItem(key) || fallback; } catch { return fallback; }
}

function saveValue(key, value) {
  try { localStorage.setItem(key, value); } catch { /* The page still works without storage. */ }
}

function setLanguage(language) {
  const selected = translations[language] ? language : "ar";
  root.lang = selected;
  root.dir = selected === "ar" ? "rtl" : "ltr";
  document.querySelectorAll("[data-copy]").forEach((node) => {
    const value = translations[selected][node.dataset.copy];
    if (value) node.textContent = value;
  });
  document.querySelectorAll("[data-placeholder]").forEach((node) => {
    const value = translations[selected][node.dataset.placeholder];
    if (value) node.placeholder = value;
  });
  const next = selected === "ar" ? "en" : "ar";
  languageToggle.textContent = selected === "ar" ? "EN" : "العربية";
  languageToggle.setAttribute("aria-label", next === "en" ? "Switch to English" : "التبديل إلى العربية");
  document.querySelector(".main-nav").setAttribute("aria-label", selected === "ar" ? "التنقل الرئيسي" : "Main navigation");
  const themeLabel = translations[selected][root.dataset.theme === "dark" ? "themeLight" : "themeDark"];
  themeToggle.setAttribute("aria-label", themeLabel);
  document.title = selected === "ar" ? "Mohammed Ashram | SOC Analyst" : "Mohammed Ashram | SOC Analyst";
  document.querySelector('meta[name="description"]').content = selected === "ar"
    ? "Mohammed Ashram — أمن معلومات وعمليات SOC وBlue Team وتحليل الشبكات."
    : "Mohammed Ashram — Information Security graduate focused on SOC operations, incident investigation, and network analysis.";
  saveValue("portfolio-language", selected);
  renderBlogPosts();
}

function setTheme(theme) {
  const selected = theme === "dark" ? "dark" : "light";
  root.dataset.theme = selected;
  const dark = selected === "dark";
  themeToggle.querySelector("[data-theme-icon]").textContent = dark ? "☼" : "◐";
  themeToggle.querySelector("[data-copy]").dataset.copy = dark ? "themeLight" : "themeDark";
  themeToggle.querySelector("[data-copy]").textContent = translations[root.lang][dark ? "themeLight" : "themeDark"];
  themeToggle.setAttribute("aria-label", translations[root.lang][dark ? "themeLight" : "themeDark"]);
  saveValue("portfolio-theme", selected);
}

languageToggle.addEventListener("click", () => setLanguage(root.lang === "ar" ? "en" : "ar"));
themeToggle.addEventListener("click", () => setTheme(root.dataset.theme === "dark" ? "light" : "dark"));
setLanguage(savedValue("portfolio-language", "ar"));
setTheme(savedValue("portfolio-theme", "dark"));

function validWebUrl(value) {
  try {
    const url = new URL(value);
    return url.protocol === "https:" || url.protocol === "http:" ? url.href : "";
  } catch {
    return "";
  }
}

function wireOptionalLink(element, value) {
  const href = validWebUrl(value);
  if (!href) {
    element.hidden = true;
    element.removeAttribute("href");
    return false;
  }
  element.href = href;
  element.target = "_blank";
  element.rel = "noopener noreferrer";
  element.hidden = false;
  return true;
}

function wireOptionalContent() {
  wireOptionalLink(document.querySelector('[data-optional-link="youtube"]'), SITE_LINKS.youtubeChannel);
  const digits = SITE_LINKS.whatsappPhone.replace(/\D/g, "");
  wireOptionalLink(document.querySelector('[data-optional-link="whatsapp"]'), digits ? `https://wa.me/${digits}` : "");

  document.querySelectorAll("[data-proof-link]").forEach((link) => {
    wireOptionalLink(link, SITE_LINKS.proof[link.dataset.proofLink]);
  });
  document.querySelectorAll("[data-certificate-link]").forEach((link) => {
    wireOptionalLink(link, SITE_LINKS.certificates[link.dataset.certificateLink]);
  });

}

function renderBlogPosts() {
  const grid = document.querySelector("#blog-grid");
  if (!grid) return;
  const emptyState = grid.querySelector(".blog-empty");
  grid.querySelectorAll(".blog-entry").forEach((entry) => entry.remove());
  const renderable = BLOG_POSTS.filter((post) => {
    if (post.type !== "video") return post.type === "writeup";
    const href = validWebUrl(post.url);
    if (!href) return false;
    const host = new URL(href).hostname.toLowerCase();
    return host === "youtu.be" || host.endsWith("youtube.com");
  });
  emptyState.hidden = renderable.length > 0;

  renderable.forEach((post) => {
    const language = post[root.lang] || post.en || post.ar || {};
    const card = document.createElement("article");
    card.className = "blog-card blog-entry";
    const format = document.createElement("span");
    format.className = "blog-format";
    format.textContent = translations[root.lang][post.type === "video" ? "videoFormat" : "writeupFormat"];
    const heading = document.createElement("h3");
    heading.textContent = language.title || "";
    const summary = document.createElement("p");
    summary.textContent = language.summary || "";
    card.append(format, heading, summary);

    if (post.type === "video") {
      const link = document.createElement("a");
      link.className = "text-link";
      link.href = validWebUrl(post.url);
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.textContent = translations[root.lang].watchVideo + " ↗";
      card.append(link);
    } else {
      const details = document.createElement("details");
      details.className = "blog-details";
      const summaryLine = document.createElement("summary");
      summaryLine.textContent = translations[root.lang].readWriteup;
      const body = document.createElement("div");
      body.textContent = language.content || "";
      details.append(summaryLine, body);
      card.append(details);
    }
    grid.append(card);
  });
}

renderBlogPosts();
wireOptionalContent();









