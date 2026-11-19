import { type CSSProperties, useEffect, useRef, useState } from "react";
import {
  ArrowUpLeft,
  ArrowUpRight,
  BadgeCheck,
  Building2,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Globe2,
  Leaf,
  Mail,
  Menu,
  MoveUpLeft,
  MoveUpRight,
  Network,
  Pause,
  Play,
  ShieldCheck,
  Volume2,
  VolumeX,
  X,
} from "lucide-react";

type Language = "en" | "he";

const content = {
  en: {
    nav: { about: "About", team: "Our Team", divisions: "Our Businesses", partners: "Partnerships", updates: "Updates", contact: "Contact us" },
    switchLabel: "עברית",
    switchAria: "Switch to Hebrew",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    homeAria: "BROOKS & PARTNERS — Home",
    video: { mute: "Mute video", unmute: "Unmute video", pause: "Pause video", play: "Play video", scroll: "Scroll to content" },
    about: {
      eyebrow: "Who we are",
      heading: "More than a\nsingle sector.",
      link: "Explore our approach",
      lead: "BROOKS & PARTNERS is a public platform operating at the intersection of opportunity, expertise and people.",
      copy: "We identify growth engines, connect leading partners and guide complex initiatives from the first idea to enduring value. Our approach rests on rigorous planning, agile thinking and a deep commitment to trust.",
      signature: "Three businesses. One perspective.",
      signatureStrong: "Growing together, responsibly.",
    },
    divisions: {
      eyebrow: "Our growth engines",
      heading: "Focused on what\nmoves tomorrow.",
      intro: "Our work connects assets, infrastructure and technology to create a resilient foundation for growth in a changing world.",
      items: [
        {
          number: "01",
          label: "REAL ESTATE & DEVELOPMENT",
          title: "Real Estate & Development",
          paragraphs: [
            "Brooks Partners builds on an established real estate development platform through its affiliated partnerships, including Tuboul Brooks and Tuboul Brooks Daniel, specializing in large-scale urban renewal and residential developments across Israel.",
            "With a portfolio of 2,800 residential units under development and 830 units currently being marketed, the group is involved in major residential and urban renewal projects across Israel.",
            "Our portfolio includes flagship developments in Bat Yam, Givatayim, Azor, and Northern Israel, alongside additional residential projects in strategic locations.",
            "Combining extensive development experience, financial expertise, and established industry partnerships, we focus on delivering high-quality residential projects and creating long-term value.",
          ],
        },
        {
          number: "02",
          label: "ENERGY & INFRASTRUCTURE",
          title: "Energy & Infrastructure",
          paragraphs: [
            "Brooks Partners develops and advances strategic energy and infrastructure projects across Greece and Europe, with a focus on renewable energy, power infrastructure, and data center development.",
            "Through our dedicated Greek office and local professional team, we identify, structure, and promote investment opportunities in the energy and digital infrastructure sectors.",
            "Our activities include solar and wind energy developments, alongside data center initiatives designed to meet the growing demand for reliable power and advanced computing infrastructure.",
            "Working with international energy companies, technology providers, and strategic partners, we connect investment opportunities with technical expertise and long-term development capabilities.",
          ],
        },
        {
          number: "03",
          label: "DEFENSE & TECHNOLOGY",
          title: "Defense & Technology",
          paragraphs: [
            "Brooks Partners connects advanced defense technologies with operational expertise, strategic partnerships, and international market opportunities.",
            "Our activities focus on unmanned aerial systems, autonomous technologies, artificial intelligence, and advanced solutions for defense, homeland security, and critical infrastructure protection.",
            "Through our strategic collaboration with local European companies, we advance innovative aerial technologies and operational solutions across Greece, Israel, and additional European markets.",
            "We also collaborate with leading Israeli defense-tech companies, integrating advanced command-and-control, AI-driven solutions, and intelligent systems for defense and civilian applications.",
            "Combining extensive operational experience with international business development capabilities, we support technology integration, market expansion, and long-term strategic cooperation.",
          ],
        },
      ],
    },
    team: {
      eyebrow: "Our team",
      heading: "The people behind\nthe partnership.",
      competenciesLabel: "Core Competencies & Focus Areas",
      members: [
        {
          number: "01",
          initials: "HB",
          name: "Haim Brooks Cohen",
          role: "Founder & Chief Executive Officer",
          bio: [
            "Former Senior Department Head at the Israel Security Agency (Shin Bet), concluding a distinguished career in national security with senior leadership positions in Israel and abroad.",
            "Extensive executive leadership experience, overseeing complex operations, multidisciplinary teams, and strategic initiatives in Israel and international environments.",
            "Managing Partner of Tuboul Brooks and Tuboul Brooks Daniel, leading major real estate development and urban renewal projects across Israel.",
            "Leads one of Bat Yam's largest urban renewal developments, alongside active projects in Givatayim, Azor, and Northern Israel.",
            "Established an investment fund focused on wind energy, in collaboration with international energy companies, advancing renewable energy investment opportunities abroad.",
            "Founder & CEO of Brooks Partners, leading the group's strategic direction, international partnerships, and expansion across Real Estate, Energy, Defense & Technology.",
          ],
          competencies: ["Executive Leadership", "National Security Expertise", "Real Estate Development", "Energy Investments & Development", "Strategic Partnerships"],
        },
        {
          number: "02",
          initials: "UB",
          name: "Uri Bar Chaim, CPA",
          role: "Partner, Deputy CEO & Chief Financial Officer",
          bio: [
            "20+ years of executive leadership in financial strategy, M&A, capital markets, and IPOs for public and private companies.",
            "Proven track record in corporate expansion, scaling real estate development firms and driving multi-billion NIS project portfolios.",
            "Member of Israel's National Directors Registry, with extensive corporate governance and board-level experience.",
            "Former Senior Division Head at the Ministry of Construction & Housing, managing national assets and regulatory frameworks.",
            "Expertise in financial transformation, banking partnerships, capital structure optimization, and advanced ERP & AI integration.",
            "Advanced Academic Credentials: M.R.E. (Summa Cum Laude, Technion), M.B.A. (Tel Aviv University), and B.A. in Accounting & Information Systems (Cum Laude, JCT & The Hebrew University of Jerusalem).",
          ],
          competencies: ["Financial Strategy", "M&A & Capital Markets", "Real Estate & Development", "Corporate Governance", "Executive Leadership"],
        },
        {
          number: "03",
          initials: "IB",
          name: "Iftach Brooks",
          role: "Business Development & Operational Integration",
          bio: [
            "12 years of service in specialized units of the Israeli Air Force, with extensive experience across diverse operational environments.",
            "Led multidisciplinary teams and organizational development initiatives, including the establishment and growth of new operational units.",
            "Managed the integration of advanced technological capabilities, overseeing complex implementation processes and operational readiness.",
            "Bachelor's degree in Economics, Entrepreneurship & Data from Reichman University, combining analytical, business, and technological expertise.",
            "Focused on international business development and strategic partnerships at Brooks Partners, connecting operational expertise, innovative technologies, and commercial opportunities.",
          ],
          competencies: ["Operational Leadership", "Technology Integration", "Organizational Development", "Business Development", "Strategic Partnerships"],
        },
      ],
    },
    values: {
      eyebrow: "The values that guide us",
      heading: "What stays constant\nwhen everything changes.",
      items: [
        { number: "01", title: "Trust", copy: "The foundation of every long-term relationship." },
        { number: "02", title: "Excellence", copy: "Excellence is not just our goal. It defines how we work." },
        { number: "03", title: "Simplicity", copy: "We make the complex clear, so every step forward is a confident one." },
        { number: "04", title: "People", copy: "People are the heart of every partnership — and we put them at the center." },
        { number: "05", title: "Innovation", copy: "An openness to opportunity and new ways to create value." },
      ],
    },
    partners: {
      eyebrow: "Partnerships",
      logosAria: "Our partners",
      heading: "Shared value begins\nwith transparency.",
      copy: "We believe a strong partnership is the foundation for growth. That is why we act with transparency, responsibility and long-term thinking — toward our shareholders, partners and the communities around us.",
      button: "Speak with Investor Relations",
      kicker: "THE BROOKS APPROACH",
      quote: "“Partnerships built on trust let us see further — and build with greater clarity.”",
      stats: ["Business areas", "Shared vision", "Growth possibilities"],
    },
    updates: {
      eyebrow: "News & Updates",
      heading: "What's happening\nat BROOKS.",
      all: "View all updates",
      readAria: "Read",
      articles: [
        { date: "10.09.2026", tag: "Company update", title: "BROOKS & PARTNERS expands into new growth channels", copy: "The company continues to strengthen its multidisciplinary model through strategic partnerships." },
        { date: "27.08.2026", tag: "Energy", title: "New partnership advances renewable-energy solutions", copy: "Another step toward long-term impact alongside shared economic value." },
        { date: "04.08.2026", tag: "Real estate", title: "Planning with vision: a new project joins the portfolio", copy: "The project reflects our view of living spaces, quality and forward-looking urban environments." },
      ],
    },
    contact: {
      eyebrow: "Let's talk",
      heading: "Tomorrow begins\nwith a conversation.",
      copy: "Have an idea, opportunity or partnership that can create value? We would be glad to connect.",
      form: {
        name: "Full name",
        namePlaceholder: "How should we address you?",
        email: "Email address",
        emailPlaceholder: "your@email.com",
        subject: "Subject",
        subjectPlaceholder: "Choose a subject",
        partnership: "Partnership",
        investors: "Investors",
        general: "General enquiry",
        submit: "Send enquiry",
        success: "Thank you. Your enquiry has been received and we will be in touch soon.",
      },
    },
    footer: {
      tagline: "GLOBAL COOPERATION, BUILT ON TRUST.",
      about: "About",
      activity: "Businesses",
      contact: "Contact",
      copyright: "© 2026 BROOKS & PARTNERS. All rights reserved.",
      legal: "Privacy & Terms",
    },
  },
  he: {
    nav: { about: "אודות", team: "הצוות שלנו", divisions: "תחומי פעילות", partners: "שותפויות", updates: "עדכונים", contact: "דברו איתנו" },
    switchLabel: "EN",
    switchAria: "Switch to English",
    menuOpen: "פתיחת תפריט",
    menuClose: "סגירת תפריט",
    homeAria: "BROOKS & PARTNERS — דף הבית",
    video: { mute: "השתקת הסרטון", unmute: "הפעלת צליל", pause: "השהיית הסרטון", play: "ניגון הסרטון", scroll: "גלילה לתוכן" },
    about: {
      eyebrow: "מי אנחנו",
      heading: "הרבה מעבר\nלתחום אחד.",
      link: "לקריאה על הגישה שלנו",
      lead: "BROOKS & PARTNERS היא פלטפורמה ציבורית הפועלת במפגש שבין הזדמנות, מומחיות ואנשים.",
      copy: "אנו מאתרים מנועי צמיחה, מחברים בין שותפים מובילים, ומלווים מהלכים מורכבים מהרעיון ועד ליצירת ערך ממשי. הגישה שלנו נשענת על תכנון מדויק, גמישות מחשבתית ומחויבות עמוקה לאמון.",
      signature: "שלושה תחומים. תפיסה אחת.",
      signatureStrong: "צמיחה משותפת, באחריות.",
    },
    divisions: {
      eyebrow: "מנועי הצמיחה שלנו",
      heading: "מתמחים במה\nשמניע את המחר.",
      intro: "הפעילות שלנו מחברת בין נכסים, תשתיות ויכולות טכנולוגיות — כדי לייצר בסיס יציב לצמיחה במציאות משתנה.",
      items: [
        {
          number: "01",
          label: "REAL ESTATE & DEVELOPMENT",
          title: "נדל״ן וייזום",
          paragraphs: [
            "Brooks Partners נשענת על פלטפורמת ייזום נדל״ן מבוססת באמצעות שותפויותיה, ובהן טובול ברוקס וטובול ברוקס דניאל, המתמחות בפרויקטים רחבי היקף של התחדשות עירונית ומגורים ברחבי ישראל.",
            "עם 2,800 יחידות דיור בשלבי פיתוח ו־830 יחידות בשיווק, הקבוצה מעורבת בפרויקטים מרכזיים של מגורים והתחדשות עירונית ברחבי הארץ.",
            "הפורטפוליו שלנו כולל פרויקטי דגל בבת ים, בגבעתיים, באזור ובצפון הארץ, לצד פרויקטי מגורים נוספים במיקומים אסטרטגיים.",
            "בשילוב של ניסיון ייזום עשיר, מומחיות פיננסית ושותפויות מבוססות בענף, אנו מתמקדים בהקמת פרויקטי מגורים איכותיים וביצירת ערך לטווח ארוך.",
          ],
        },
        {
          number: "02",
          label: "ENERGY & INFRASTRUCTURE",
          title: "אנרגיה ותשתיות",
          paragraphs: [
            "Brooks Partners מפתחת ומקדמת פרויקטים אסטרטגיים בתחומי האנרגיה והתשתיות ביוון ובאירופה, בדגש על אנרגיה מתחדשת, תשתיות חשמל ופיתוח מרכזי נתונים.",
            "באמצעות משרדנו ביוון וצוות מקצועי מקומי, אנו מאתרים, מגבשים ומקדמים הזדמנויות השקעה בתחומי האנרגיה והתשתיות הדיגיטליות.",
            "פעילותנו כוללת פיתוח פרויקטים של אנרגיה סולארית ואנרגיית רוח, לצד מיזמי מרכזי נתונים שנועדו לתת מענה לביקוש הגובר לאספקת חשמל אמינה ולתשתיות מחשוב מתקדמות.",
            "בעבודה משותפת עם חברות אנרגיה בינלאומיות, ספקי טכנולוגיה ושותפים אסטרטגיים, אנו מחברים בין הזדמנויות השקעה לבין מומחיות טכנית ויכולות פיתוח ארוכות טווח.",
          ],
        },
        {
          number: "03",
          label: "DEFENSE & TECHNOLOGY",
          title: "ביטחון וטכנולוגיה",
          paragraphs: [
            "Brooks Partners מחברת בין טכנולוגיות ביטחוניות מתקדמות לבין מומחיות מבצעית, שותפויות אסטרטגיות והזדמנויות בשווקים בינלאומיים.",
            "פעילותנו מתמקדת במערכות אוויריות בלתי מאוישות, בטכנולוגיות אוטונומיות, בבינה מלאכותית ובפתרונות מתקדמים לביטחון, לביטחון המולדת ולהגנה על תשתיות קריטיות.",
            "באמצעות שיתוף פעולה אסטרטגי עם חברות אירופיות מקומיות, אנו מקדמים טכנולוגיות אוויריות חדשניות ופתרונות מבצעיים ביוון, בישראל ובשווקים נוספים באירופה.",
            "בנוסף, אנו משתפים פעולה עם חברות דיפנס־טק ישראליות מובילות, ומשלבים מערכות שליטה ובקרה מתקדמות, פתרונות מבוססי בינה מלאכותית ומערכות חכמות ליישומים ביטחוניים ואזרחיים.",
            "בשילוב של ניסיון מבצעי עשיר ויכולות פיתוח עסקי בינלאומי, אנו תומכים בהטמעת טכנולוגיות, בהתרחבות לשווקים חדשים ובשיתופי פעולה אסטרטגיים ארוכי טווח.",
          ],
        },
      ],
    },
    team: {
      eyebrow: "הצוות שלנו",
      heading: "האנשים שמאחורי\nהשותפות.",
      competenciesLabel: "תחומי מומחיות ומיקוד",
      members: [
        {
          number: "01",
          initials: "HB",
          name: "חיים ברוקס כהן",
          role: "מייסד ומנכ״ל",
          bio: [
            "לשעבר ראש אגף בכיר בשירות הביטחון הכללי (שב״כ); סיים קריירה מוערכת בתחום הביטחון הלאומי, שבמהלכה מילא תפקידי הנהגה בכירים בישראל ובחו״ל.",
            "ניסיון ניהולי בכיר ורחב בהובלת מבצעים מורכבים, צוותים רב־תחומיים ומהלכים אסטרטגיים בישראל ובזירה הבינלאומית.",
            "שותף מנהל בטובול ברוקס ובטובול ברוקס דניאל, המובילות פרויקטים מרכזיים של ייזום נדל״ן והתחדשות עירונית ברחבי ישראל.",
            "מוביל את אחד ממיזמי ההתחדשות העירונית הגדולים בבת ים, לצד פרויקטים פעילים בגבעתיים, באזור ובצפון הארץ.",
            "הקים קרן השקעות המתמקדת באנרגיית רוח, בשיתוף חברות אנרגיה בינלאומיות, לקידום הזדמנויות השקעה באנרגיה מתחדשת בחו״ל.",
            "מייסד ומנכ״ל Brooks Partners; מוביל את הכיוון האסטרטגי של הקבוצה, את שותפויותיה הבינלאומיות ואת התרחבותה בתחומי הנדל״ן, האנרגיה, הביטחון והטכנולוגיה.",
          ],
          competencies: ["מנהיגות בכירה", "מומחיות בביטחון לאומי", "ייזום נדל״ן", "השקעות ופיתוח בתחום האנרגיה", "שותפויות אסטרטגיות"],
        },
        {
          number: "02",
          initials: "UB",
          name: "אורי בר חיים, רו״ח",
          role: "שותף, משנה למנכ״ל וסמנכ״ל כספים",
          bio: [
            "למעלה מ־20 שנות ניסיון ניהולי בכיר באסטרטגיה פיננסית, מיזוגים ורכישות, שוק ההון והנפקות ראשונות לציבור (IPO), בחברות ציבוריות ופרטיות.",
            "רקורד מוכח בהתרחבות עסקית, בהצמחת חברות ייזום נדל״ן ובהובלת פורטפוליו פרויקטים בהיקף של מיליארדי שקלים.",
            "חבר בנבחרת הדירקטורים הלאומית, בעל ניסיון רב בממשל תאגידי ובעבודת דירקטוריונים.",
            "לשעבר מנהל אגף בכיר במשרד הבינוי והשיכון, שם ניהל נכסים לאומיים ומסגרות רגולטוריות.",
            "מומחיות בטרנספורמציה פיננסית, בשותפויות עם המערכת הבנקאית, באופטימיזציה של מבנה ההון ובהטמעת מערכות ERP ובינה מלאכותית מתקדמות.",
            "השכלה אקדמית מתקדמת: תואר שני בנדל״ן (M.R.E., בהצטיינות יתרה, הטכניון), תואר שני במנהל עסקים (M.B.A., אוניברסיטת תל אביב) ותואר ראשון בחשבונאות ומערכות מידע (בהצטיינות, המרכז האקדמי לב והאוניברסיטה העברית בירושלים).",
          ],
          competencies: ["אסטרטגיה פיננסית", "מיזוגים ורכישות ושוק ההון", "נדל״ן וייזום", "ממשל תאגידי", "מנהיגות בכירה"],
        },
        {
          number: "03",
          initials: "IB",
          name: "יפתח ברוקס",
          role: "פיתוח עסקי ואינטגרציה מבצעית",
          bio: [
            "12 שנות שירות ביחידות מיוחדות של חיל האוויר הישראלי, עם ניסיון רב במגוון סביבות מבצעיות.",
            "הוביל צוותים רב־תחומיים ותהליכי פיתוח ארגוני, לרבות הקמה והצמחה של יחידות מבצעיות חדשות.",
            "ניהל שילוב של יכולות טכנולוגיות מתקדמות, תוך פיקוח על תהליכי הטמעה מורכבים ועל הכשירות המבצעית.",
            "בעל תואר ראשון בכלכלה, יזמות ודאטה מאוניברסיטת רייכמן, המשלב מומחיות אנליטית, עסקית וטכנולוגית.",
            "מתמקד בפיתוח עסקי בינלאומי ובשותפויות אסטרטגיות ב־Brooks Partners, ומחבר בין מומחיות מבצעית, טכנולוגיות חדשניות והזדמנויות מסחריות.",
          ],
          competencies: ["מנהיגות מבצעית", "אינטגרציה טכנולוגית", "פיתוח ארגוני", "פיתוח עסקי", "שותפויות אסטרטגיות"],
        },
      ],
    },
    values: {
      eyebrow: "הערכים שמובילים אותנו",
      heading: "מה נשאר קבוע\nכשכל השאר משתנה.",
      items: [
        { number: "01", title: "אמון", copy: "הבסיס לכל מערכת יחסים ארוכת טווח." },
        { number: "02", title: "מצוינות", copy: "מצוינות עבורנו אינה יעד, אלא הדרך שבה אנחנו פועלים." },
        { number: "03", title: "פשטות", copy: "מפשטים את המורכב – ומתקדמים בביטחון." },
        { number: "04", title: "אנשים", copy: "אנשים הם הלב של כל שותפות – ואנחנו שמים אותם במרכז." },
        { number: "05", title: "חדשנות", copy: "פתיחות להזדמנויות ולדרכים חדשות ליצור ערך." },
      ],
    },
    partners: {
      eyebrow: "שותפויות",
      logosAria: "השותפים שלנו",
      heading: "ערך משותף\nמתחיל בשקיפות.",
      copy: "אנו מאמינים כי שותפות טובה היא תשתית לצמיחה. לכן אנחנו פועלים בשקיפות, באחריות ובחשיבה ארוכת טווח — מול בעלי המניות, השותפים והקהילות שסביבנו.",
      button: "ליצירת קשר עם קשרי משקיעים",
      kicker: "גישת BROOKS",
      quote: "“שיתופי פעולה שמבוססים על אמון מאפשרים לנו לראות רחוק יותר — ולבנות נכון יותר.”",
      stats: ["תחומי פעילות", "חזון משותף", "אפשרויות לצמיחה"],
    },
    updates: {
      eyebrow: "חדשות ועדכונים",
      heading: "מה קורה\nב־BROOKS.",
      all: "לכל העדכונים",
      readAria: "לקריאת",
      articles: [
        { date: "10.09.2026", tag: "עדכון חברה", title: "BROOKS & PARTNERS מרחיבה את פעילותה באפיקי צמיחה חדשים", copy: "החברה ממשיכה לחזק את מודל הפעילות הרב־תחומי שלה באמצעות שיתופי פעולה אסטרטגיים." },
        { date: "27.08.2026", tag: "אנרגיה", title: "שותפות חדשה לקידום פתרונות אנרגיה מתחדשת", copy: "מהלך נוסף בדרך ליצירת השפעה ארוכת טווח לצד יצירת ערך כלכלי משותף." },
        { date: "04.08.2026", tag: "נדל״ן", title: "תכנון עם ראייה קדימה: פרויקט חדש מצטרף לפורטפוליו", copy: "הפרויקט משקף את תפיסת החברה לגבי מרחבי חיים, איכות וסביבה עירונית מתקדמת." },
      ],
    },
    contact: {
      eyebrow: "בואו נדבר",
      heading: "המחר מתחיל\nבשיחה אחת.",
      copy: "יש לכם רעיון, הזדמנות או שותפות שיכולה לייצר ערך? נשמח להכיר.",
      form: {
        name: "שם מלא",
        namePlaceholder: "איך נוכל לפנות אליכם?",
        email: "כתובת אימייל",
        emailPlaceholder: "your@email.com",
        subject: "נושא הפנייה",
        subjectPlaceholder: "בחרו נושא",
        partnership: "שיתוף פעולה",
        investors: "משקיעים",
        general: "פנייה כללית",
        submit: "שליחת פנייה",
        success: "תודה, פנייתכם התקבלה. נחזור אליכם בהקדם.",
      },
    },
    footer: {
      tagline: "GLOBAL COOPERATION, BUILT ON TRUST.",
      about: "אודות",
      activity: "פעילות",
      contact: "צור קשר",
      copyright: "© 2026 BROOKS & PARTNERS. כל הזכויות שמורות.",
      legal: "Privacy & Terms",
    },
  },
} as const;

const divisionImages = [
  "/assets/images/real-estate.jpg",
  "/assets/images/energy.jpg",
  "/assets/images/defense.jpg",
];

// Partner logos for the moving strip. `height` is the display height in px on desktop,
// tuned per logo so wide wordmarks and compact emblems carry similar visual weight.
const partnerLogos = [
  { file: "tubul.svg", name: "Tubul Group", height: 50 },
  { file: "bank-hapoalim.svg", name: "Bank Hapoalim", height: 30 },
  { file: "leumi-partners.svg", name: "Leumi Partners", height: 50 },
  { file: "electra.png", name: "Electra", height: 44 },
  { file: "dragosta-energy.png", name: "Dragosta Energy", height: 68 },
  { file: "erm.svg", name: "ERM", height: 38 },
  { file: "mprest.svg", name: "mPrest", height: 46 },
  { file: "broadsat-technologies.png", name: "Broadsat Technologies", height: 50 },
  { file: "nawi-group.svg", name: "Nawi Group", height: 38 },
  { file: "reality.svg", name: "Reality", height: 40 },
  { file: "margolin.png", name: "I. Margolin", height: 80 },
  { file: "arnon-tadmor-levy.svg", name: "Arnon, Tadmor-Levy", height: 58 },
  { file: "gilboa-engineers.png", name: "Gilboa Engineers", height: 84 },
  { file: "david-engineers.png", name: "David Engineers", height: 50 },
  { file: "rozio-architects.png", name: "Rozio Architects & Urban Planners", height: 66 },
  { file: "miloslavsky-architects.png", name: "Miloslavsky Architects", height: 34 },
  { file: "tell-david.png", name: "Tell David", height: 30 },
];

const divisionIcons = [Building2, Leaf, ShieldCheck];

// Portraits for the team section, in the same order as `team.members`.
// Drop the files into client/public/assets/images/team/ and replace `null` with the path,
// e.g. "/assets/images/team/haim-brooks-cohen.jpg". Until then a monogram placeholder is shown.
const teamPhotos: (string | null)[] = ["/assets/images/team/haim-brooks-cohen.jpg", "/assets/images/team/uri-bar-chaim.jpg", null];

const hebrewPattern = /[\u0590-\u05FF]/;

/** Heading split into lines; each line slides up from behind a mask when its section scrolls into view. */
function RevealLines({ text }: { text: string }) {
  return (
    <>
      {text.split("\n").map((part, index) => (
        <span className="line" key={index}>
          <span className="line-inner" style={{ "--i": index } as CSSProperties}>{part}</span>
        </span>
      ))}
    </>
  );
}

/** Paragraph split into words that fade into focus one after another. */
function RevealWords({ text }: { text: string }) {
  const chunks: string[] = [];
  const mixedDirection = hebrewPattern.test(text);
  text.split(" ").forEach((word, index, words) => {
    // Keep runs of Latin words together inside Hebrew text so their left-to-right order survives.
    if (mixedDirection && index > 0 && !hebrewPattern.test(word) && !hebrewPattern.test(words[index - 1])) {
      chunks[chunks.length - 1] += ` ${word}`;
    } else {
      chunks.push(word);
    }
  });
  return (
    <>
      {chunks.map((chunk, index) => (
        <span className="word" key={index} style={{ "--i": index } as CSSProperties}>{chunk}{index < chunks.length - 1 ? " " : ""}</span>
      ))}
    </>
  );
}

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Home() {
  const [language, setLanguage] = useState<Language>("en");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [sent, setSent] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobileVideo, setIsMobileVideo] = useState(() => window.matchMedia("(max-width: 900px)").matches);
  const videoRef = useRef<HTMLVideoElement>(null);
  const t = content[language];
  const isHebrew = language === "he";
  const DirectionArrow = isHebrew ? ArrowUpLeft : ArrowUpRight;
  const MoveArrow = isHebrew ? MoveUpLeft : MoveUpRight;
  const DirectionChevron = isHebrew ? ChevronLeft : ChevronRight;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 900px)");
    const onViewportChange = () => setIsMobileVideo(mediaQuery.matches);
    onViewportChange();
    mediaQuery.addEventListener("change", onViewportChange);
    return () => mediaQuery.removeEventListener("change", onViewportChange);
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(".scroll-reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -48px" },
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = isHebrew ? "rtl" : "ltr";
    document.title = isHebrew
      ? "BROOKS & PARTNERS | שיתופי פעולה גלובליים, מבוססי אמון"
      : "BROOKS & PARTNERS | Global Cooperation, Built on Trust.";
  }, [isHebrew, language]);

  const navigate = (target: string) => {
    setMenuOpen(false);
    scrollToId(target);
  };

  const switchLanguage = () => {
    setLanguage((current) => (current === "en" ? "he" : "en"));
    setMenuOpen(false);
    setSent(false);
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    const nextMuted = !isMuted;
    video.muted = nextMuted;
    setIsMuted(nextMuted);
    if (!isPaused) video.play().catch(() => undefined);
  };

  const togglePlayback = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play().then(() => setIsPaused(false)).catch(() => undefined);
    } else {
      video.pause();
      setIsPaused(true);
    }
  };

  return (
    <div className={`site-shell language-${language}`} dir={isHebrew ? "rtl" : "ltr"}>
      <div className="scroll-progress" aria-hidden="true" />
      <header className={`topbar ${scrolled ? "topbar-scrolled" : "topbar-at-top"}`}>
        <div className="topbar-inner">
          <a className="brand" href="#top" aria-label={t.homeAria} onClick={() => navigate("top")}>
            <img className="brand-logo brand-logo-navy" src="/assets/images/brooks-partners-logo.png" alt="BROOKS & PARTNERS" />
            <img className="brand-logo brand-logo-white" src="/assets/images/brooks-partners-logo-white.png" alt="" aria-hidden="true" />
          </a>

          <nav className="desktop-nav" aria-label="Primary navigation">
            <button onClick={() => navigate("about")}>{t.nav.about}</button>
            <button onClick={() => navigate("team")}>{t.nav.team}</button>
            <button onClick={() => navigate("divisions")}>{t.nav.divisions}</button>
            <button onClick={() => navigate("partners")}>{t.nav.partners}</button>
            <button onClick={() => navigate("updates")}>{t.nav.updates}</button>
          </nav>

          <div className="topbar-actions">
            <button className="lang-switch" onClick={switchLanguage} aria-label={t.switchAria}>{t.switchLabel}</button>
            <button className="contact-link" onClick={() => navigate("contact")}>
              {t.nav.contact} <DirectionArrow size={15} strokeWidth={2.2} />
            </button>
            <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? t.menuClose : t.menuOpen}>
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-menu ${menuOpen ? "open" : ""}`} aria-hidden={!menuOpen}>
        <button onClick={() => navigate("about")}>{t.nav.about} <DirectionChevron size={18} /></button>
        <button onClick={() => navigate("team")}>{t.nav.team} <DirectionChevron size={18} /></button>
        <button onClick={() => navigate("divisions")}>{t.nav.divisions} <DirectionChevron size={18} /></button>
        <button onClick={() => navigate("partners")}>{t.nav.partners} <DirectionChevron size={18} /></button>
        <button onClick={() => navigate("updates")}>{t.nav.updates} <DirectionChevron size={18} /></button>
        <button onClick={() => navigate("contact")}>{t.nav.contact} <DirectionChevron size={18} /></button>
        <button className="mobile-language-switch" onClick={switchLanguage}>{t.switchLabel}</button>
      </div>

      <main id="top">
        <section className={`video-hero ${isMobileVideo ? "video-hero-mobile" : "video-hero-desktop"}`} aria-label="BROOKS & PARTNERS film">
          <div className="video-hero-frame">
            <video
              key={isMobileVideo ? "mobile-video" : "desktop-video"}
              ref={videoRef}
              autoPlay
              muted={isMuted}
              loop
              playsInline
              preload="auto"
              poster={isMobileVideo ? "/assets/videos/brooks-mobile-poster.jpg" : "/assets/videos/brooks-and-partners-poster.jpg"}
              onPlay={() => setIsPaused(false)}
              onPause={() => setIsPaused(true)}
            >
              <source src={isMobileVideo ? "/assets/videos/brooks-mobile.mp4" : "/assets/videos/brooks-and-partners.mp4"} type="video/mp4" />
            </video>
          </div>
          <div className="video-hero-shade" />
          <div className="video-hero-controls">
            <button type="button" onClick={toggleMute} aria-label={isMuted ? t.video.unmute : t.video.mute} title={isMuted ? t.video.unmute : t.video.mute}>
              {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
            </button>
            <button type="button" onClick={togglePlayback} aria-label={isPaused ? t.video.play : t.video.pause} title={isPaused ? t.video.play : t.video.pause}>
              {isPaused ? <Play size={18} fill="currentColor" /> : <Pause size={18} />}
            </button>
          </div>
          <div className="video-hero-scroll-strip">
            <button type="button" onClick={() => navigate("about")} aria-label={t.video.scroll} title={t.video.scroll}>
              <ChevronDown size={24} strokeWidth={1.25} />
            </button>
          </div>
        </section>

        <section className="statement-section" id="about" aria-labelledby="about-heading">
          <div className="container statement-grid">
            <div className="section-intro reveal scroll-reveal">
              <p className="eyebrow">{t.about.eyebrow}</p>
              <h2 id="about-heading"><RevealLines text={t.about.heading} /></h2>
              <a href="#partners" className="text-link" onClick={(event) => { event.preventDefault(); navigate("partners"); }}>
                {t.about.link} <DirectionArrow size={18} />
              </a>
            </div>
            <div className="statement-copy reveal delay-1 scroll-reveal scroll-delay-1">
              <p className="lead"><RevealWords text={t.about.lead} /></p>
              <p>{t.about.copy}</p>
              <div className="signature-row">
                <div className="round-mark"><Network size={24} /></div>
                <span>{t.about.signature}<br /><b>{t.about.signatureStrong}</b></span>
              </div>
            </div>
          </div>
        </section>

        <section className="team-section" id="team" aria-labelledby="team-heading">
          <div className="container">
            <div className="team-top scroll-reveal">
              <p className="eyebrow">{t.team.eyebrow}</p>
              <h2 id="team-heading"><RevealLines text={t.team.heading} /></h2>
            </div>
            <div className="team-grid">
              {t.team.members.map((member, index) => {
                const photo = teamPhotos[index];
                return (
                  <article className="team-card" key={member.number}>
                    <div className={`team-head scroll-reveal scroll-delay-${index + 1}`}>
                      <div className="team-photo">
                        {photo ? <img src={photo} alt={member.name} loading="lazy" /> : <span aria-hidden="true">{member.initials}</span>}
                      </div>
                      <div className="team-id">
                        <span className="team-number">{member.number}</span>
                        <h3>{member.name}</h3>
                        <p className="team-role">{member.role}</p>
                      </div>
                    </div>
                    <ul className="team-bio">
                      {member.bio.map((item, itemIndex) => <li className="scroll-reveal" key={itemIndex}>{item}</li>)}
                    </ul>
                    <div className="team-competencies scroll-reveal">
                      <p className="team-label">{t.team.competenciesLabel}</p>
                      <ul className="team-tags">
                        {member.competencies.map((item, itemIndex) => <li key={itemIndex} style={{ "--i": itemIndex } as CSSProperties}>{item}</li>)}
                      </ul>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="divisions-section" id="divisions" aria-labelledby="divisions-heading">
          <div className="container section-heading-row scroll-reveal">
            <div>
              <p className="eyebrow light">{t.divisions.eyebrow}</p>
              <h2 id="divisions-heading"><RevealLines text={t.divisions.heading} /></h2>
            </div>
            <p>{t.divisions.intro}</p>
          </div>
          <div className="division-grid">
            {t.divisions.items.map((division, index) => {
              const Icon = divisionIcons[index];
              return (
                <article className={`division-card scroll-reveal scroll-delay-${index + 1}`} key={division.number}>
                  <img src={divisionImages[index]} alt="" />
                  <div className="division-shade" />
                  <div className="division-content">
                    <div className="division-topline"><span>{division.number}</span><Icon size={20} /></div>
                    <div className="division-body">
                      <div className="division-title scroll-reveal">
                        <p className="division-english">{division.label}</p>
                        <h3>{division.title}</h3>
                      </div>
                      {division.paragraphs.map((paragraph, paragraphIndex) => (
                        <p className="division-copy scroll-reveal" key={paragraphIndex}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="values-section" aria-labelledby="values-heading">
          <div className="container">
            <div className="values-top scroll-reveal">
              <p className="eyebrow">{t.values.eyebrow}</p>
              <h2 id="values-heading"><RevealLines text={t.values.heading} /></h2>
            </div>
            <div className="values-grid">
              {t.values.items.map((value) => (
                <article className={`value-card scroll-reveal scroll-delay-${Number(value.number)}`} key={value.number}>
                  <span className="value-number">{value.number}</span>
                  <div className="value-line" />
                  <h3>{value.title}</h3>
                  <p>{value.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="partners-section" id="partners" aria-labelledby="partners-heading">
          <div className="partners-pattern" />
          <div className="container partners-grid">
            <div className="partners-copy scroll-reveal">
              <figure className="atmosphere-strip atmosphere-strip-partners"><img src="/assets/images/brooks-meeting-room.jpg" alt="" /></figure>
              <p className="eyebrow light">{t.partners.eyebrow}</p>
              <h2 id="partners-heading"><RevealLines text={t.partners.heading} /></h2>
              <p>{t.partners.copy}</p>
              <button className="button button-outline-light" onClick={() => navigate("contact")}>{t.partners.button} <DirectionArrow size={18} /></button>
            </div>
            <div className="partner-panel scroll-reveal scroll-delay-2">
              <div className="panel-icon"><Globe2 size={26} /></div>
              <p className="panel-kicker">{t.partners.kicker}</p>
              <p className="panel-quote"><RevealWords text={t.partners.quote} /></p>
              <div className="partner-stats">
                <div><strong>3</strong><span>{t.partners.stats[0]}</span></div>
                <div><strong>1</strong><span>{t.partners.stats[1]}</span></div>
                <div><strong>∞</strong><span>{t.partners.stats[2]}</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="updates-section" id="updates" aria-labelledby="updates-heading">
          <div className="container">
            <div className="partner-logos" role="group" aria-label={t.partners.logosAria}>
              <div className="partner-logos-track">
                {[0, 1].map((copy) => (
                  <div className="partner-logos-set" key={copy} aria-hidden={copy === 1}>
                    {partnerLogos.map((logo) => (
                      <img
                        key={logo.file}
                        src={`/assets/images/partners/${logo.file}`}
                        alt={copy === 0 ? logo.name : ""}
                        style={{ "--logo-h": `${logo.height}px` } as CSSProperties}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <div className="updates-heading scroll-reveal">
              <div>
                <p className="eyebrow">{t.updates.eyebrow}</p>
                <h2 id="updates-heading"><RevealLines text={t.updates.heading} /></h2>
              </div>
              <button className="text-link" onClick={() => navigate("contact")}>{t.updates.all} <DirectionArrow size={18} /></button>
            </div>
            <figure className="atmosphere-strip atmosphere-strip-updates"><img src="/assets/images/brooks-wall-sign.jpg" alt="" /></figure>
            <div className="articles-grid">
              {t.updates.articles.map((article, index) => (
                <article className={`article-card article-${index + 1} scroll-reveal scroll-delay-${index + 1}`} key={index}>
                  <div className="article-meta"><span>{article.tag}</span><time>{article.date}</time></div>
                  <h3>{article.title}</h3>
                  <p>{article.copy}</p>
                  <button className="article-arrow" aria-label={`${t.updates.readAria} ${article.title}`} onClick={() => navigate("contact")}><DirectionArrow size={18} /></button>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-heading">
          <div className="container contact-grid">
            <div className="contact-copy scroll-reveal">
              <p className="eyebrow light">{t.contact.eyebrow}</p>
              <h2 id="contact-heading"><RevealLines text={t.contact.heading} /></h2>
              <p>{t.contact.copy}</p>
              <figure className="atmosphere-strip atmosphere-strip-contact"><img src="/assets/images/brooks-reception.jpg" alt="" /></figure>
              <a className="email-link" href="mailto:info@brooks-partners.com"><Mail size={19} /> info@brooks-partners.com</a>
            </div>
            <form className="contact-form scroll-reveal scroll-delay-2" onSubmit={(event) => { event.preventDefault(); setSent(true); }}>
              <label>{t.contact.form.name}<input required placeholder={t.contact.form.namePlaceholder} /></label>
              <label>{t.contact.form.email}<input required type="email" placeholder={t.contact.form.emailPlaceholder} dir="ltr" /></label>
              <label>{t.contact.form.subject}<select key={language} defaultValue=""><option value="" disabled>{t.contact.form.subjectPlaceholder}</option><option>{t.contact.form.partnership}</option><option>{t.contact.form.investors}</option><option>{t.contact.form.general}</option></select></label>
              <button type="submit" className="button button-gold">{t.contact.form.submit} <MoveArrow size={18} /></button>
              {sent && <p className="form-success"><BadgeCheck size={16} /> {t.contact.form.success}</p>}
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-top">
          <a className="brand footer-brand" href="#top" aria-label={t.homeAria} onClick={() => navigate("top")}><img className="brand-logo" src="/assets/images/brooks-partners-logo-white.png" alt="BROOKS & PARTNERS" /></a>
          <p>{t.footer.tagline}</p>
          <div className="footer-links"><a href="#about" onClick={(event) => { event.preventDefault(); navigate("about"); }}>{t.footer.about}</a><a href="#divisions" onClick={(event) => { event.preventDefault(); navigate("divisions"); }}>{t.footer.activity}</a><a href="#contact" onClick={(event) => { event.preventDefault(); navigate("contact"); }}>{t.footer.contact}</a></div>
        </div>
        <div className="container footer-bottom"><span>{t.footer.copyright}</span><span>{t.footer.legal}</span></div>
      </footer>
    </div>
  );
}
