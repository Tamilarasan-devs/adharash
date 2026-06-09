import React from "react";
import {
  GraduationCap,
  Music,
  Dumbbell,
  Palette,
  CheckCircle,
  School,
  Sparkles,
  Trophy,
} from "lucide-react";

import heroImg from "../../../assets/img/about/heroImg.webp";
import campusImg from "../../../assets/img/about/campusImg.webp";
import img1 from "../../../assets/img/about/img.avif";
import img2 from "../../../assets/img/about/img2.avif";
import img3 from "../../../assets/img/about/img3.avif";

/* ─── Design tokens ───────────────────────────────────────────── */
const NAVY = "#0E1B2E";
const GOLD = "#C9A84C";
const GOLD2 = "#B8952A";
const IVORY = "#FAFAF6";
const PARCH = "#F4F1E8";
const BORDER = "#E2D9C4";
const MUTED = "#5A6A7A";

/* ─── Shared primitive styles ─────────────────────────────────── */
const eyebrowStyle = {
  display: "flex",
  alignItems: "center",
  gap: "10px",
  fontSize: "11px",
  letterSpacing: "3px",
  textTransform: "uppercase",
  color: GOLD2,
  fontWeight: 600,
  marginBottom: "12px",
};

const sectionTitleStyle = {
  fontFamily: "'Playfair Display', Georgia, serif",
  fontSize: "clamp(2rem, 4vw, 2.6rem)",
  fontWeight: 700,
  lineHeight: 1.2,
  color: NAVY,
  margin: "0 0 1.5rem",
};

const goldRuleFull = {
  width: "100%",
  height: "0.5px",
  background: `linear-gradient(90deg, transparent, ${BORDER} 20%, ${BORDER} 80%, transparent)`,
};

/* ─── Main component ──────────────────────────────────────────── */
export default function AvpsAnthiyur() {
  const clubs = [
    "Music Club", "Art & Craft Club", "Road Safety Club",
    "Life Skills Club", "Oratorical Club", "Literary Club",
    "Reading Club", "Dance Club", "Quiz Club",
  ];

  const games = [
    "Athletics", "Football", "Basketball", "Volleyball",
    "Kho-Kho", "Kabaddi", "Throw Ball", "Swimming",
  ];

  const eca = [
    "Archery", "Classical Dance", "Western Dance", "Boxing",
    "Yoga", "Skating", "Chess", "Taekwondo",
    "Silambam", "Aerobics & Sports Fitness",
  ];

  const supw = [
    "Meal Planning & Preparation", "Dress Designing", "Textile Designing",
    "Type Writing", "Gardening", "Craft Work", "Tailoring & Embroidery",
  ];

  return (
    <>
      {/* Google Font */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@300;400;500;600&display=swap');
        body { font-family: 'Inter', sans-serif; }
        .avps-tag-card:hover {
          border-color: ${GOLD} !important;
          box-shadow: 0 2px 14px rgba(201,168,76,0.13) !important;
        }
        .avps-gallery-img:hover { transform: scale(1.04); }
      `}</style>

      <section style={{ background: IVORY, color: NAVY, fontFamily: "'Inter', sans-serif", overflow: "hidden" }}>

        {/* ═══════════════════════════════════ HERO ══════════════════════════════════ */}
        <div style={{
          position: "relative", minHeight: "88vh",
          display: "flex", alignItems: "center",
          background: `linear-gradient(160deg, ${NAVY} 0%, #1A2E4A 60%, ${NAVY} 100%)`,
          overflow: "hidden", padding: "4rem 3rem",
        }}>
          {/* decorative rings */}
          <div style={{
            position: "absolute", top: -80, right: -80,
            width: 520, height: 520, borderRadius: "50%",
            border: `0.5px solid rgba(201,168,76,0.15)`, pointerEvents: "none",
          }} />
          <div style={{
            position: "absolute", bottom: -120, left: -60,
            width: 380, height: 380, borderRadius: "50%",
            border: `0.5px solid rgba(201,168,76,0.08)`, pointerEvents: "none",
          }} />

          {/* background image overlay */}
          <img src={heroImg} alt="" aria-hidden="true" style={{
            position: "absolute", inset: 0, width: "100%", height: "100%",
            objectFit: "cover", opacity: 0.12,
          }} />

          <div style={{ position: "relative", zIndex: 1, maxWidth: 620 }}>
            {/* badge */}
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              border: `0.5px solid rgba(201,168,76,0.5)`,
              borderRadius: 100, padding: "6px 18px",
              fontSize: 12, letterSpacing: "2px",
              textTransform: "uppercase", color: GOLD,
              marginBottom: "2rem",
            }}>
              <GraduationCap size={13} />
              CBSE School · Anthiyur
            </div>

            <h1 style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(3rem, 6vw, 5rem)",
              fontWeight: 700, color: IVORY,
              lineHeight: 1.08, margin: "0 0 1.5rem",
            }}>
              AVPS<br />Anthiyur
            </h1>

            <p style={{ color: "rgba(250,250,246,0.65)", fontSize: 16, lineHeight: 1.85, maxWidth: 480, marginBottom: "2.5rem" }}>
              A distinguished institution shaping minds through academic excellence,
              discipline, and the timeless values of holistic education.
            </p>

            {/* stats row */}
            <div style={{ display: "flex", gap: "2rem" }}>
              {[["2010", "Established"], ["CBSE", "Curriculum"], ["K–XII", "All Grades"]].map(([val, lbl]) => (
                <div key={lbl} style={{ borderLeft: `1.5px solid ${GOLD}`, paddingLeft: "1rem" }}>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", fontWeight: 700, color: GOLD, lineHeight: 1 }}>{val}</div>
                  <div style={{ fontSize: 11, letterSpacing: "2px", textTransform: "uppercase", color: "rgba(250,250,246,0.45)", marginTop: 4 }}>{lbl}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ════════════════════════════════════ ABOUT ════════════════════════════════ */}
        <div style={{ padding: "5rem 3rem" }}>
          <div style={{  margin: "0 auto", display: "grid", gridTemplateColumns: "3fr 2fr", gap: "4rem", alignItems: "start" }}>
            <div>
              <Eyebrow icon={<School size={13} />} label="About the School" />
              <h2 style={sectionTitleStyle}>Learning Beyond<br />the Classroom</h2>
              <p style={{ color: MUTED, lineHeight: 1.9, marginBottom: "1rem" }}>
                Our academics are rooted in experiential learning, creativity, and discipline —
                all aligned with CBSE standards and designed to prepare students for the world ahead.
              </p>
              <p style={{ color: MUTED, lineHeight: 1.9 }}>
                Through yoga, robotics, arts, and co-curricular engagement, every student at
                AVPS Anthiyur discovers their own path to excellence.
              </p>
            </div>

            {/* feature box */}
            <div style={{ background: NAVY, borderRadius: 16, padding: "2rem" }}>
              <div style={{ fontSize: 11, letterSpacing: "2px", textTransform: "uppercase", color: GOLD, marginBottom: "1rem", fontWeight: 600 }}>
                School Pillars
              </div>
              {["Academic Excellence", "Character & Discipline", "Sports & Fitness", "Arts & Culture", "Innovation & Robotics", "Life Skills"].map((p, i) => (
                <div key={i} style={{
                  padding: "10px 0",
                  borderBottom: i < 5 ? `0.5px solid rgba(201,168,76,0.18)` : "none",
                  fontSize: 14, color: "rgba(250,250,246,0.8)",
                  display: "flex", alignItems: "center", gap: 10,
                }}>
                  <span style={{ width: 5, height: 5, borderRadius: "50%", background: GOLD, flexShrink: 0 }} />
                  {p}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ══════════════════════════════ CAMPUS GALLERY ═════════════════════════════ */}
        <div style={{ padding: "0 3rem 5rem", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
            {[img1, img2, img3].map((src, i) => (
              <img
                key={i} src={src} alt={`Campus view ${i + 1}`}
                className="avps-gallery-img"
                style={{ borderRadius: 20, height: 400, width: "100%", objectFit: "cover", transition: "transform 0.5s ease", display: "block" }}
              />
            ))}
          </div>
        </div>

        <div style={goldRuleFull} />

        {/* ════════════════════════════════════ CLUBS ════════════════════════════════ */}
        <TagSection
          eyebrowIcon={<Music size={13} />}
          eyebrow="Student Life"
          title="Student Clubs"
          items={clubs}
          bg={PARCH}
        />

        <div style={goldRuleFull} />

        {/* ═══════════════════════════════════ SPORTS ════════════════════════════════ */}
        <TagSection
          eyebrowIcon={<Trophy size={13} />}
          eyebrow="Sports"
          title="Sports & Games"
          items={games}
          bg={IVORY}
        />

        <div style={goldRuleFull} />

        {/* ════════════════════════════════════ ECA ══════════════════════════════════ */}
        <TagSection
          eyebrowIcon={<Sparkles size={13} />}
          eyebrow="Activities"
          title="Extra Curricular Activities"
          items={eca}
          bg={PARCH}
        />

        <div style={goldRuleFull} />

        {/* ═══════════════════════════════════ SUPW ══════════════════════════════════ */}
        <TagSection
          eyebrowIcon={<CheckCircle size={13} />}
          eyebrow="Practical Skills"
          title="SUPW Activities"
          items={supw}
          bg={IVORY}
        />

        <div style={goldRuleFull} />

        {/* ════════════════════════════════ CURRICULUM ═══════════════════════════════ */}
        <div style={{ background: PARCH, padding: "5rem 3rem" }}>
          <div style={{ margin: "0 auto" }}>
            <Eyebrow icon={<GraduationCap size={13} />} label="Academics" />
            <h2 style={sectionTitleStyle}>Academic Structure</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16, marginTop: "1.5rem" }}>
              <CurrCard title="Kindergarten" items={["Cognitive Development", "Physical Development", "Language Skills", "Life Skills"]} />
              <CurrCard title="Grade I – V" items={["English", "Mathematics", "Science", "Robotics", "Arts"]} />
              <CurrCard title="Grade VI – X" items={["Science", "Social Science", "Mathematics", "Coding", "Sports"]} />
              <CurrCard title="Grade XI – XII" items={["Physics", "Chemistry", "Biology", "Commerce", "Computer Science"]} />
            </div>
          </div>
        </div>

        {/* ══════════════════════════════ FOOTER BANNER ══════════════════════════════ */}
        <div style={{
          background: NAVY, padding: "5rem 3rem", textAlign: "center",
          position: "relative", overflow: "hidden",
        }}>
          {/* watermark text */}
          <div aria-hidden="true" style={{
            position: "absolute", fontFamily: "'Playfair Display', serif",
            fontSize: "16rem", fontWeight: 700,
            color: "rgba(255,255,255,0.025)",
            top: "50%", left: "50%",
            transform: "translate(-50%,-50%)",
            pointerEvents: "none", whiteSpace: "nowrap", userSelect: "none",
          }}>AVPS</div>

          <div style={{ position: "relative", zIndex: 1 }}>
            <div style={{ width: 60, height: 2, background: GOLD, margin: "0 auto 1.5rem" }} />
            <h2 style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700, color: IVORY, margin: "0 0 1rem",
            }}>AVPS Anthiyur</h2>
            <p style={{ color: "rgba(250,250,246,0.6)", maxWidth: 520, margin: "0 auto", lineHeight: 1.85 }}>
              Established in 2010, shaping futures through modern CBSE education,
              strong values, and holistic development in the heart of Anthiyur.
            </p>
            <div style={{ width: 60, height: 2, background: GOLD, margin: "1.5rem auto" }} />
            <div style={{ fontSize: 11, letterSpacing: "3px", textTransform: "uppercase", color: "rgba(250,250,246,0.3)" }}>
              Excellence · Discipline · Growth
            </div>
          </div>
        </div>

      </section>
    </>
  );
}

/* ─── Eyebrow label ────────────────────────────────────────────── */
function Eyebrow({ icon, label }) {
  return (
    <div style={eyebrowStyle}>
      <span style={{ width: 24, height: 1, background: GOLD, flexShrink: 0 }} />
      {icon}
      {label}
    </div>
  );
}

/* ─── Tag section (Clubs / Sports / ECA / SUPW) ───────────────── */
function TagSection({ eyebrowIcon, eyebrow, title, items, bg }) {
  return (
    <div style={{ background: bg, padding: "5rem 3rem" }}>
      <div style={{  margin: "0 auto" }}>
        <Eyebrow icon={eyebrowIcon} label={eyebrow} />
        <h2 style={sectionTitleStyle}>{title}</h2>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(190px, 1fr))",
          gap: 12, marginTop: "1.5rem",
        }}>
          {items.map((item, i) => (
            <div
              key={i}
              className="avps-tag-card"
              style={{
                background: IVORY, border: `0.5px solid ${BORDER}`,
                borderRadius: 10, padding: "13px 18px",
                fontSize: 14, color: "#2A3A4A", fontWeight: 500,
                display: "flex", alignItems: "center", gap: 10,
                transition: "border-color 0.2s, box-shadow 0.2s", cursor: "default",
              }}
            >
              <span style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 11, color: GOLD2, minWidth: 20, fontWeight: 700,
              }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Curriculum card ──────────────────────────────────────────── */
function CurrCard({ title, items }) {
  return (
    <div style={{
      background: IVORY, border: `0.5px solid ${BORDER}`,
      borderRadius: 14, padding: "1.75rem 1.5rem",
      position: "relative", overflow: "hidden",
    }}>
      {/* gold top bar */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: 2,
        background: `linear-gradient(90deg, ${GOLD}, #E8C96E)`,
      }} />
      <h3 style={{
        fontFamily: "'Playfair Display', Georgia, serif",
        fontSize: 15, fontWeight: 700, color: NAVY, marginBottom: "1rem",
      }}>{title}</h3>
      <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
        {items.map((item, i) => (
          <li key={i} style={{
            fontSize: 13, color: MUTED,
            padding: "5px 0",
            borderBottom: i < items.length - 1 ? `0.5px solid #F0EBE0` : "none",
            display: "flex", alignItems: "center", gap: 8,
          }}>
            <span style={{ width: 4, height: 4, borderRadius: "50%", background: GOLD, flexShrink: 0 }} />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}