import Link from "next/link";
import {
  ArrowRight,
  CircleCheck,
  CircleDollarSign,
  HelpCircle,
  Package,
  PlayCircle,
  Wrench,
} from "lucide-react";

const stages = [
  { label: "Requirement", done: true },
  { label: "Quote", done: true },
  { label: "Agreement", done: true },
  { label: "Work", done: false, current: true },
  { label: "Complete", done: false },
];

const work = [
  ["Kitchen wiring", "Completed", "done"],
  ["Electrical DB", "Completed", "done"],
  ["Switch installation", "In progress", "progress"],
  ["Final testing", "Next", "next"],
];

export default function HomePage() {
  return (
    <main className="shell">
      <header className="topbar">
        <Link href="/" className="brand-wrap">
          <span className="brand-mark">R</span>
          <span className="brand">Renevo</span>
        </Link>
        <div className="user-chip">AJ <span>Customer</span></div>
      </header>

      <section className="hero compact-hero">
        <div>
          <p className="eyebrow">My Project</p>
          <h1>2 BHK Renovation</h1>
          <p className="muted">REN-PUN-2026-00123 · Pune</p>
        </div>
        <span className="status-pill">On track</span>
      </section>

      <section className="project-progress panel">
        <div className="panel-head">
          <div>
            <h2>Project progress</h2>
            <p className="muted">Everything for this renovation stays under one Project ID.</p>
          </div>
          <strong className="progress-value">45%</strong>
        </div>
        <div className="progress-track"><span style={{ width: "45%" }} /></div>
        <div className="stage-list">
          {stages.map((stage) => (
            <div className={`stage ${stage.done ? "done" : ""} ${stage.current ? "current" : ""}`} key={stage.label}>
              {stage.done ? <CircleCheck size={18} /> : <span className="stage-dot" />}
              <span>{stage.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="next-action panel">
        <div>
          <p className="eyebrow">Next action</p>
          <h2>Electrical work is in progress</h2>
          <p className="muted">Your contractor is completing switch installation. No action is needed from you right now.</p>
        </div>
        <Link className="primary" href="/projects/REN-PUN-2026-00123">
          View project <ArrowRight size={17} />
        </Link>
      </section>

      <section className="simple-grid">
        <Link href="/projects/REN-PUN-2026-00123" className="feature-card">
          <div className="feature-icon"><Wrench size={20} /></div>
          <div><h3>Work</h3><p>See what is completed, in progress and next.</p></div>
          <ArrowRight size={18} />
        </Link>
        <Link href="/projects/REN-PUN-2026-00123" className="feature-card">
          <div className="feature-icon"><CircleDollarSign size={20} /></div>
          <div><h3>Payments</h3><p>See paid, upcoming and current payments.</p></div>
          <ArrowRight size={18} />
        </Link>
        <Link href="/projects/REN-PUN-2026-00123" className="feature-card">
          <div className="feature-icon"><Package size={20} /></div>
          <div><h3>Materials</h3><p>Track ordered and delivered materials.</p></div>
          <ArrowRight size={18} />
        </Link>
        <Link href="/projects/REN-PUN-2026-00123" className="feature-card">
          <div className="feature-icon"><HelpCircle size={20} /></div>
          <div><h3>Help</h3><p>Contact your contractor or report an issue.</p></div>
          <ArrowRight size={18} />
        </Link>
      </section>

      <section className="panel">
        <div className="panel-head">
          <div><h2>Current work</h2><p className="muted">Simple progress view for the customer.</p></div>
          <PlayCircle size={20} />
        </div>
        <div className="simple-list">
          {work.map(([name, status, kind]) => (
            <div className="simple-row" key={name}>
              <div><strong>{name}</strong><small>Electrical stage</small></div>
              <span className={`badge ${kind}`}>{status}</span>
            </div>
          ))}
        </div>
      </section>

      <footer>Renevo · Reimagine Your Space.</footer>
    </main>
  );
}
