"use client";

import { FormEvent, useEffect, useState } from "react";
import Link from "next/link";

interface Lead { id:number; name:string; email:string; mobileNumber:string; postalCode:string; description:string; status:string }
const API = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8080/api/v1";

export default function LeadsPage(){
  const [leads,setLeads]=useState<Lead[]>([]); const [q,setQ]=useState(""); const [loading,setLoading]=useState(true); const [error,setError]=useState("");
  useEffect(()=>{ fetch(`${API}/leads`).then(r=>r.ok?r.json():Promise.reject(new Error("Unable to load leads"))).then(x=>setLeads(x.data??[])).catch(e=>setError(e.message)).finally(()=>setLoading(false)); },[]);
  const filtered=leads.filter(x=>`${x.name} ${x.email} ${x.mobileNumber}`.toLowerCase().includes(q.toLowerCase()));
  return <main className="shell"><header className="topbar"><Link className="brand" href="/">Reno</Link><div className="user-chip">Admin <span>Leads</span></div></header><section className="hero"><div><p className="eyebrow">Customer pipeline</p><h1>Leads</h1><p className="muted">Track every request from first contact to completion.</p></div><Link className="primary" href="/leads/new">Create lead</Link></section><section className="panel"><div className="panel-head"><input aria-label="Search leads" value={q} onChange={e=>setQ(e.target.value)} placeholder="Search by name, email or phone" className="search"/></div>{loading?<p className="state">Loading leads…</p>:error?<p className="state error">{error}. Start the backend and try again.</p>:<div className="table-wrap"><table><thead><tr><th>Name</th><th>Contact</th><th>Location</th><th>Status</th></tr></thead><tbody>{filtered.map(l=><tr key={l.id}><td><strong>{l.name}</strong><br/><small>{l.description}</small></td><td>{l.email}<br/>{l.mobileNumber}</td><td>{l.postalCode}</td><td><span className={`badge ${l.status.toLowerCase()}`}>{l.status}</span></td></tr>)}</tbody></table>{!filtered.length&&<p className="state">No leads match your search.</p>}</div>}</section></main>
}

export function LeadForm(){
 const [busy,setBusy]=useState(false); const [message,setMessage]=useState("");
 async function submit(e:FormEvent<HTMLFormElement>){e.preventDefault();setBusy(true);setMessage("");const body=Object.fromEntries(new FormData(e.currentTarget));try{const r=await fetch(`${API}/leads`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...body,service:Number(body.service)})});if(!r.ok)throw new Error("Could not create lead");setMessage("Lead created successfully.");e.currentTarget.reset()}catch(err){setMessage(err instanceof Error?err.message:"Something went wrong")}finally{setBusy(false)}}
 return <form onSubmit={submit} className="form-grid"><label>Service ID<input name="service" type="number" min="1" required/></label><label>Name<input name="name" required/></label><label>Email<input name="email" type="email" required/></label><label>Mobile number<input name="mobileNumber" required/></label><label>Postal code<input name="postalCode" required/></label><label className="full">Description<textarea name="description" rows={5} required/></label><button className="primary" disabled={busy}>{busy?"Creating…":"Create lead"}</button>{message&&<p className="muted">{message}</p>}</form>
}
