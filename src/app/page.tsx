import Link from "next/link";
import { ArrowRight, ClipboardList, FileText, Hammer, Users } from "lucide-react";

const cards = [
  { label: "Active leads", value: "8", hint: "Needs attention", icon: ClipboardList, href: "/leads" },
  { label: "Contractors", value: "5", hint: "Available partners", icon: Users, href: "/contractors" },
  { label: "Estimates", value: "12", hint: "This month", icon: FileText, href: "/estimates" },
  { label: "Work orders", value: "4", hint: "In progress", icon: Hammer, href: "/work-orders" }
];

const leads = [
  ["#RN-1008", "Kitchen renovation", "New", "Today"],
  ["#RN-1007", "Bathroom remodel", "Assigned", "Yesterday"],
  ["#RN-1006", "Flooring work", "In progress", "2 days ago"]
];

export default function HomePage() {
  return (
    <main className="shell">
      <header className="topbar"><div><span className="brand-mark">R</span><span className="brand">Reno</span></div><div className="user-chip">AJ <span>Admin</span></div></header>
      <section className="hero"><div><p className="eyebrow">Overview</p><h1>Good morning, Anand</h1><p className="muted">Here is what needs your attention today.</p></div><Link className="primary" href="/leads/new">Create lead <ArrowRight size={17}/></Link></section>
      <section className="stats">{cards.map(({ label, value, hint, icon: Icon, href }) => <Link href={href} className="stat-card" key={label}><div className="icon-box"><Icon size={20}/></div><div><p>{label}</p><strong>{value}</strong><small>{hint}</small></div></Link>)}</section>
      <section className="panel"><div className="panel-head"><div><h2>Recent leads</h2><p className="muted">The latest customer requests</p></div><Link href="/leads" className="text-link">View all <ArrowRight size={16}/></Link></div><div className="table-wrap"><table><thead><tr><th>Lead</th><th>Service</th><th>Status</th><th>Created</th></tr></thead><tbody>{leads.map(([id, service, status, date]) => <tr key={id}><td><strong>{id}</strong></td><td>{service}</td><td><span className={`badge ${status.toLowerCase().replaceAll(" ", "-")}`}>{status}</span></td><td>{date}</td></tr>)}</tbody></table></div></section>
      <footer>Reno V2 · Fast, simple and built for every stage of the customer journey.</footer>
    </main>
  );
}
