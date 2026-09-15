import { useEffect, useState } from "react";
import {
  ArrowDownLeft,
  ArrowUpLeft,
  BadgeCheck,
  BarChart3,
  Building2,
  ChevronLeft,
  Globe2,
  Leaf,
  Mail,
  Menu,
  MoveUpLeft,
  Network,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";

const divisions = [
  {
    number: "01",
    title: "נדל״ן",
    english: "REAL ESTATE",
    copy: "ייזום, השבחה וניהול נכסים באזורים בעלי פוטנציאל, מתוך ראייה ארוכת טווח של איכות, קיימות וקהילה.",
    image: "/manus-storage/real-estate_0f6456e5.jpg",
    icon: Building2,
  },
  {
    number: "02",
    title: "אנרגיה",
    english: "ENERGY",
    copy: "קידום תשתיות אנרגיה מתחדשת ופתרונות יעילים המשלבים צמיחה עסקית עם אחריות סביבתית.",
    image: "/manus-storage/energy_2eea6369.jpg",
    icon: Leaf,
  },
  {
    number: "03",
    title: "ביטחון וטכנולוגיה",
    english: "DEFENSE & TECHNOLOGY",
    copy: "השקעה ביכולות טכנולוגיות מתקדמות ובשותפויות המאפשרות מענה מדויק לאתגרי העתיד.",
    image: "/manus-storage/defense_0c5f1240.jpg",
    icon: ShieldCheck,
  },
];

const values = [
  { number: "01", title: "אמון", copy: "הבסיס לכל מערכת יחסים ארוכת טווח." },
  { number: "02", title: "מצוינות", copy: "סטנדרט בלתי מתפשר בבחירה, בביצוע ובתוצאה." },
  { number: "03", title: "פשטות", copy: "חשיבה בהירה שמאפשרת להתקדם בביטחון." },
  { number: "04", title: "אנשים", copy: "אנשים טובים הם הכוח שמאחורי כל שותפות." },
  { number: "05", title: "חדשנות", copy: "פתיחות להזדמנויות ולדרכים חדשות ליצור ערך." },
];

const articles = [
  {
    date: "10.09.2026",
    tag: "עדכון חברה",
    title: "BROOKS & PARTNERS מרחיבה את פעילותה באפיקי צמיחה חדשים",
    copy: "החברה ממשיכה לחזק את מודל הפעילות הרב־תחומי שלה באמצעות שיתופי פעולה אסטרטגיים.",
  },
  {
    date: "27.08.2026",
    tag: "אנרגיה",
    title: "שותפות חדשה לקידום פתרונות אנרגיה מתחדשת",
    copy: "מהלך נוסף בדרך ליצירת השפעה ארוכת טווח לצד יצירת ערך כלכלי משותף.",
  },
  {
    date: "04.08.2026",
    tag: "נדל״ן",
    title: "תכנון עם ראייה קדימה: פרויקט חדש מצטרף לפורטפוליו",
    copy: "הפרויקט משקף את תפיסת החברה לגבי מרחבי חיים, איכות וסביבה עירונית מתקדמת.",
  },
];

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navigate = (target: string) => {
    setMenuOpen(false);
    scrollToId(target);
  };

  return (
    <div className="site-shell" dir="rtl">
      <header className={`topbar ${scrolled ? "topbar-scrolled" : ""}`}>
        <div className="topbar-inner">
          <a className="brand" href="#top" aria-label="BROOKS & PARTNERS — דף הבית" onClick={() => navigate("top")}>
            <span className="brand-main">BROOKS</span>
            <span className="brand-sub"><bdi>&amp; PARTNERS</bdi></span>
          </a>

          <nav className="desktop-nav" aria-label="ניווט ראשי">
            <button onClick={() => navigate("about")}>אודות</button>
            <button onClick={() => navigate("divisions")}>תחומי פעילות</button>
            <button onClick={() => navigate("partners")}>שותפויות</button>
            <button onClick={() => navigate("updates")}>עדכונים</button>
          </nav>

          <div className="topbar-actions">
            <button className="lang-switch" aria-label="Switch to English">EN</button>
            <button className="contact-link" onClick={() => navigate("contact")}>
              דברו איתנו <ArrowUpLeft size={15} strokeWidth={2.2} />
            </button>
            <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "סגירת תפריט" : "פתיחת תפריט"}>
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-menu ${menuOpen ? "open" : ""}`} aria-hidden={!menuOpen}>
        <button onClick={() => navigate("about")}>אודות <ChevronLeft size={18} /></button>
        <button onClick={() => navigate("divisions")}>תחומי פעילות <ChevronLeft size={18} /></button>
        <button onClick={() => navigate("partners")}>שותפויות <ChevronLeft size={18} /></button>
        <button onClick={() => navigate("updates")}>עדכונים <ChevronLeft size={18} /></button>
        <button onClick={() => navigate("contact")}>יצירת קשר <ChevronLeft size={18} /></button>
      </div>

      <main id="top">
        <section className="hero" aria-labelledby="hero-heading">
          <div className="hero-media" />
          <div className="hero-overlay" />
          <div className="hero-inner container">
            <div className="hero-copy reveal">
              <p className="eyebrow light"><span /> פלטפורמה ציבורית רב־תחומית</p>
              <h1 id="hero-heading">
                צומחים קדימה.<br />
                <em>ביחד.</em>
              </h1>
              <p className="hero-description">אנו בונים שיתופי פעולה גלובליים בתחומי הנדל״ן, האנרגיה והביטחון — ומבססים ערך שנמשך לאורך זמן.</p>
              <div className="hero-buttons">
                <button className="button button-gold" onClick={() => navigate("about")}>הכירו את BROOKS <ArrowDownLeft size={18} /></button>
                <button className="button button-ghost" onClick={() => navigate("divisions")}>תחומי הפעילות שלנו <ChevronLeft size={18} /></button>
              </div>
            </div>

            <div className="hero-slogan">
              <span className="slogan-rule" />
              <p>GLOBAL COOPERATION,<br /><strong>BUILT ON TRUST.</strong></p>
            </div>

            <div className="hero-scroll" aria-hidden="true">
              <span>גלו עוד</span>
              <i />
            </div>
          </div>
        </section>

        <section className="statement-section" id="about" aria-labelledby="about-heading">
          <div className="container statement-grid">
            <div className="section-intro reveal">
              <p className="eyebrow"><span /> מי אנחנו</p>
              <h2 id="about-heading">הרבה מעבר<br />לתחום אחד.</h2>
              <a href="#partners" className="text-link" onClick={(event) => { event.preventDefault(); navigate("partners"); }}>
                לקריאה על הגישה שלנו <ArrowUpLeft size={18} />
              </a>
            </div>
            <div className="statement-copy reveal delay-1">
              <p className="lead">BROOKS &amp; PARTNERS היא פלטפורמה ציבורית הפועלת במפגש שבין הזדמנות, מומחיות ואנשים.</p>
              <p>אנו מאתרים מנועי צמיחה, מחברים בין שותפים מובילים, ומלווים מהלכים מורכבים מהרעיון ועד ליצירת ערך ממשי. הגישה שלנו נשענת על תכנון מדויק, גמישות מחשבתית ומחויבות עמוקה לאמון.</p>
              <div className="signature-row">
                <div className="round-mark"><Network size={24} /></div>
                <span>שלושה תחומים. תפיסה אחת.<br /><b>צמיחה משותפת, באחריות.</b></span>
              </div>
            </div>
          </div>
        </section>

        <section className="divisions-section" id="divisions" aria-labelledby="divisions-heading">
          <div className="container section-heading-row">
            <div>
              <p className="eyebrow light"><span /> מנועי הצמיחה שלנו</p>
              <h2 id="divisions-heading">מתמחים במה<br />שמניע את המחר.</h2>
            </div>
            <p>הפעילות שלנו מחברת בין נכסים, תשתיות ויכולות טכנולוגיות — כדי לייצר בסיס יציב לצמיחה במציאות משתנה.</p>
          </div>
          <div className="division-grid">
            {divisions.map((division) => {
              const Icon = division.icon;
              return (
                <article className="division-card" key={division.number}>
                  <img src={division.image} alt="" />
                  <div className="division-shade" />
                  <div className="division-content">
                    <div className="division-topline"><span>{division.number}</span><Icon size={20} /></div>
                    <div>
                      <p className="division-english">{division.english}</p>
                      <h3>{division.title}</h3>
                      <p className="division-copy">{division.copy}</p>
                      <button className="round-arrow" aria-label={`לפרטים על תחום ${division.title}`} onClick={() => navigate("contact")}><ArrowUpLeft size={20} /></button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="values-section" aria-labelledby="values-heading">
          <div className="container">
            <div className="values-top">
              <p className="eyebrow"><span /> הערכים שמובילים אותנו</p>
              <h2 id="values-heading">מה נשאר קבוע<br />כשכל השאר משתנה.</h2>
            </div>
            <div className="values-grid">
              {values.map((value) => (
                <article className="value-card" key={value.number}>
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
            <div className="partners-copy">
              <p className="eyebrow light"><span /> שותפויות ומשקיעים</p>
              <h2 id="partners-heading">ערך משותף<br />מתחיל בשקיפות.</h2>
              <p>אנו מאמינים כי שותפות טובה היא תשתית לצמיחה. לכן אנחנו פועלים בשקיפות, באחריות ובחשיבה ארוכת טווח — מול בעלי המניות, השותפים והקהילות שסביבנו.</p>
              <button className="button button-outline-light" onClick={() => navigate("contact")}>ליצירת קשר עם קשרי משקיעים <ArrowUpLeft size={18} /></button>
            </div>
            <div className="partner-panel">
              <div className="panel-icon"><Globe2 size={26} /></div>
              <p className="panel-kicker">THE BROOKS APPROACH</p>
              <p className="panel-quote">“שיתופי פעולה שמבוססים על אמון מאפשרים לנו לראות רחוק יותר — ולבנות נכון יותר.”</p>
              <div className="partner-stats">
                <div><strong>3</strong><span>תחומי פעילות</span></div>
                <div><strong>1</strong><span>חזון משותף</span></div>
                <div><strong>∞</strong><span>אפשרויות לצמיחה</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="updates-section" id="updates" aria-labelledby="updates-heading">
          <div className="container">
            <div className="updates-heading">
              <div>
                <p className="eyebrow"><span /> חדשות ועדכונים</p>
                <h2 id="updates-heading">מה קורה ב־BROOKS.</h2>
              </div>
              <button className="text-link" onClick={() => navigate("contact")}>לכל העדכונים <ArrowUpLeft size={18} /></button>
            </div>
            <div className="articles-grid">
              {articles.map((article, index) => (
                <article className={`article-card article-${index + 1}`} key={article.title}>
                  <div className="article-meta"><span>{article.tag}</span><time>{article.date}</time></div>
                  <h3>{article.title}</h3>
                  <p>{article.copy}</p>
                  <button className="article-arrow" aria-label={`לקריאת ${article.title}`} onClick={() => navigate("contact")}><ArrowUpLeft size={18} /></button>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-heading">
          <div className="container contact-grid">
            <div className="contact-copy">
              <p className="eyebrow light"><span /> בואו נדבר</p>
              <h2 id="contact-heading">המחר מתחיל<br />בשיחה אחת.</h2>
              <p>יש לכם רעיון, הזדמנות או שותפות שיכולה לייצר ערך? נשמח להכיר.</p>
              <a className="email-link" href="mailto:info@brooks-partners.com"><Mail size={19} /> info@brooks-partners.com</a>
            </div>
            <form className="contact-form" onSubmit={(event) => { event.preventDefault(); setSent(true); }}>
              <label>שם מלא<input required placeholder="איך נוכל לפנות אליכם?" /></label>
              <label>כתובת אימייל<input required type="email" placeholder="your@email.com" dir="ltr" /></label>
              <label>נושא הפנייה<select defaultValue=""><option value="" disabled>בחרו נושא</option><option>שיתוף פעולה</option><option>משקיעים</option><option>פנייה כללית</option></select></label>
              <button type="submit" className="button button-gold">שליחת פנייה <MoveUpLeft size={18} /></button>
              {sent && <p className="form-success"><BadgeCheck size={16} /> תודה, פנייתכם התקבלה. נחזור אליכם בהקדם.</p>}
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-top">
          <a className="brand footer-brand" href="#top" onClick={() => navigate("top")}><span className="brand-main">BROOKS</span><span className="brand-sub"><bdi>&amp; PARTNERS</bdi></span></a>
          <p>GLOBAL COOPERATION, BUILT ON TRUST.</p>
          <div className="footer-links"><a href="#about" onClick={(event) => { event.preventDefault(); navigate("about"); }}>אודות</a><a href="#divisions" onClick={(event) => { event.preventDefault(); navigate("divisions"); }}>פעילות</a><a href="#contact" onClick={(event) => { event.preventDefault(); navigate("contact"); }}>צור קשר</a></div>
        </div>
        <div className="container footer-bottom"><span>© 2026 BROOKS &amp; PARTNERS. כל הזכויות שמורות.</span><span>Privacy &amp; Terms</span></div>
      </footer>
    </div>
  );
}
