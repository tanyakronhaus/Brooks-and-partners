import { Fragment, useEffect, useRef, useState } from "react";
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
    nav: { about: "About", divisions: "Our Businesses", partners: "Partnerships", updates: "Updates", contact: "Contact us" },
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
      detailsAria: "Learn more about",
      items: [
        { number: "01", label: "REAL ESTATE", title: "Real Estate", copy: "Development, enhancement and asset management in high-potential locations, guided by a long-term view of quality, sustainability and community." },
        { number: "02", label: "ENERGY", title: "Energy", copy: "Advancing renewable-energy infrastructure and efficient solutions that combine commercial growth with environmental responsibility." },
        { number: "03", label: "DEFENSE & TECHNOLOGY", title: "Defense & Technology", copy: "Investing in advanced technology and partnerships that provide a precise response to the challenges of tomorrow." },
      ],
    },
    values: {
      eyebrow: "The values that guide us",
      heading: "What stays constant\nwhen everything changes.",
      items: [
        { number: "01", title: "Trust", copy: "The foundation of every long-term relationship." },
        { number: "02", title: "Excellence", copy: "An uncompromising standard in selection, execution and outcome." },
        { number: "03", title: "Simplicity", copy: "Clear thinking that makes confident progress possible." },
        { number: "04", title: "People", copy: "Good people are the force behind every partnership." },
        { number: "05", title: "Innovation", copy: "An openness to opportunity and new ways to create value." },
      ],
    },
    partners: {
      eyebrow: "Partnerships & Investors",
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
    nav: { about: "אודות", divisions: "תחומי פעילות", partners: "שותפויות", updates: "עדכונים", contact: "דברו איתנו" },
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
      detailsAria: "לפרטים על תחום",
      items: [
        { number: "01", label: "REAL ESTATE", title: "נדל״ן", copy: "ייזום, השבחה וניהול נכסים באזורים בעלי פוטנציאל, מתוך ראייה ארוכת טווח של איכות, קיימות וקהילה." },
        { number: "02", label: "ENERGY", title: "אנרגיה", copy: "קידום תשתיות אנרגיה מתחדשת ופתרונות יעילים המשלבים צמיחה עסקית עם אחריות סביבתית." },
        { number: "03", label: "DEFENSE & TECHNOLOGY", title: "ביטחון וטכנולוגיה", copy: "השקעה ביכולות טכנולוגיות מתקדמות ובשותפויות המאפשרות מענה מדויק לאתגרי העתיד." },
      ],
    },
    values: {
      eyebrow: "הערכים שמובילים אותנו",
      heading: "מה נשאר קבוע\nכשכל השאר משתנה.",
      items: [
        { number: "01", title: "אמון", copy: "הבסיס לכל מערכת יחסים ארוכת טווח." },
        { number: "02", title: "מצוינות", copy: "סטנדרט בלתי מתפשר בבחירה, בביצוע ובתוצאה." },
        { number: "03", title: "פשטות", copy: "חשיבה בהירה שמאפשרת להתקדם בביטחון." },
        { number: "04", title: "אנשים", copy: "אנשים טובים הם הכוח שמאחורי כל שותפות." },
        { number: "05", title: "חדשנות", copy: "פתיחות להזדמנויות ולדרכים חדשות ליצור ערך." },
      ],
    },
    partners: {
      eyebrow: "שותפויות ומשקיעים",
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

const divisionIcons = [Building2, Leaf, ShieldCheck];

function lines(text: string) {
  const parts = text.split("\n");
  return parts.map((part, index) => (
    <Fragment key={`${part}-${index}`}>
      {part}
      {index < parts.length - 1 ? <br /> : null}
    </Fragment>
  ));
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
      <header className={`topbar ${scrolled ? "topbar-scrolled" : "topbar-at-top"}`}>
        <div className="topbar-inner">
          <a className="brand" href="#top" aria-label={t.homeAria} onClick={() => navigate("top")}>
            <img className="brand-logo brand-logo-navy" src="/assets/images/brooks-partners-logo.png" alt="BROOKS & PARTNERS" />
            <img className="brand-logo brand-logo-white" src="/assets/images/brooks-partners-logo-white.png" alt="" aria-hidden="true" />
          </a>

          <nav className="desktop-nav" aria-label="Primary navigation">
            <button onClick={() => navigate("about")}>{t.nav.about}</button>
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
              <h2 id="about-heading">{lines(t.about.heading)}</h2>
              <a href="#partners" className="text-link" onClick={(event) => { event.preventDefault(); navigate("partners"); }}>
                {t.about.link} <DirectionArrow size={18} />
              </a>
            </div>
            <div className="statement-copy reveal delay-1 scroll-reveal scroll-delay-1">
              <p className="lead">{t.about.lead}</p>
              <p>{t.about.copy}</p>
              <div className="signature-row">
                <div className="round-mark"><Network size={24} /></div>
                <span>{t.about.signature}<br /><b>{t.about.signatureStrong}</b></span>
              </div>
            </div>
          </div>
        </section>

        <section className="divisions-section" id="divisions" aria-labelledby="divisions-heading">
          <div className="container section-heading-row scroll-reveal">
            <div>
              <p className="eyebrow light">{t.divisions.eyebrow}</p>
              <h2 id="divisions-heading">{lines(t.divisions.heading)}</h2>
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
                    <div>
                      <p className="division-english">{division.label}</p>
                      <h3>{division.title}</h3>
                      <p className="division-copy">{division.copy}</p>
                      <button className="round-arrow" aria-label={`${t.divisions.detailsAria} ${division.title}`} onClick={() => navigate("contact")}><DirectionArrow size={20} /></button>
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
              <h2 id="values-heading">{lines(t.values.heading)}</h2>
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
              <h2 id="partners-heading">{lines(t.partners.heading)}</h2>
              <p>{t.partners.copy}</p>
              <button className="button button-outline-light" onClick={() => navigate("contact")}>{t.partners.button} <DirectionArrow size={18} /></button>
            </div>
            <div className="partner-panel scroll-reveal scroll-delay-2">
              <div className="panel-icon"><Globe2 size={26} /></div>
              <p className="panel-kicker">{t.partners.kicker}</p>
              <p className="panel-quote">{t.partners.quote}</p>
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
            <div className="desktop-office-marquee" aria-hidden="true">
              <div className="desktop-office-marquee-track">
                <img src="/assets/images/brooks-wall-sign.jpg" alt="" />
                <img src="/assets/images/brooks-meeting-room.jpg" alt="" />
                <img src="/assets/images/brooks-reception.jpg" alt="" />
                <img src="/assets/images/brooks-wall-sign.jpg" alt="" />
                <img src="/assets/images/brooks-meeting-room.jpg" alt="" />
                <img src="/assets/images/brooks-reception.jpg" alt="" />
              </div>
            </div>
            <div className="updates-heading scroll-reveal">
              <div>
                <p className="eyebrow">{t.updates.eyebrow}</p>
                <h2 id="updates-heading">{lines(t.updates.heading)}</h2>
              </div>
              <button className="text-link" onClick={() => navigate("contact")}>{t.updates.all} <DirectionArrow size={18} /></button>
            </div>
            <figure className="atmosphere-strip atmosphere-strip-updates"><img src="/assets/images/brooks-wall-sign.jpg" alt="" /></figure>
            <div className="articles-grid">
              {t.updates.articles.map((article, index) => (
                <article className={`article-card article-${index + 1} scroll-reveal scroll-delay-${index + 1}`} key={article.title}>
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
              <h2 id="contact-heading">{lines(t.contact.heading)}</h2>
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
