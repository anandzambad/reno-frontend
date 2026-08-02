import Link from "next/link";
import { LeadForm } from "../page";

export default function NewLeadPage(){return <main className="shell"><header className="topbar"><Link className="brand" href="/">Reno</Link><Link className="text-link" href="/leads">Back to leads</Link></header><section className="hero"><div><p className="eyebrow">Customer request</p><h1>Create a lead</h1><p className="muted">Capture the essentials now; enrich the lead later.</p></div></section><section className="panel form-panel"><LeadForm/></section></main>}
