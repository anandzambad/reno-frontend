"use client";

import { useState } from "react";
import { Sparkles, Check, Plus, Trash2 } from "lucide-react";
import "./planner.css";

type Task = { stage: string; title: string; description: string; priority: string; estimatedDays: number; dependsOn: string };
const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:8080";

export default function WorkPlannerPage({ params }: { params: { projectCode: string } }) {
  const [requirements, setRequirements] = useState("Kitchen, two bathrooms, electrical, painting and flooring");
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function generate() {
    setLoading(true); setMessage("");
    try {
      const res = await fetch(`${API_BASE}/api/ai/work-plans/draft`, {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ projectCode: params.projectCode, projectTitle: "Renevo Project", propertyType: "", requirements, scope: requirements })
      });
      if (!res.ok) throw new Error("Unable to generate draft");
      const data = await res.json(); setTasks(data.tasks ?? []);
    } catch { setMessage("AI draft is not connected yet. Check the backend URL and CORS configuration."); }
    finally { setLoading(false); }
  }

  function remove(index: number) { setTasks(tasks.filter((_, i) => i !== index)); }

  return <main className="planner-shell">
    <div className="planner-head"><div><p className="eyebrow">Work</p><h1>AI Work Planner</h1><p className="muted">Create a draft, review it, then put approved work on the board.</p></div><span className="ai-pill"><Sparkles size={15}/> AI assisted</span></div>
    <section className="planner-card"><label htmlFor="requirements">What needs to be done?</label><textarea id="requirements" value={requirements} onChange={e => setRequirements(e.target.value)} /><button className="ai-button" onClick={generate} disabled={loading || !requirements.trim()}><Sparkles size={17}/>{loading ? "Creating draft…" : "Generate Work Plan"}</button>{message && <p className="notice">{message}</p>}</section>
    {tasks.length > 0 && <section className="planner-card"><div className="review-head"><div><h2>Review work plan</h2><p className="muted">AI suggestions are drafts. Review before approval.</p></div><span className="draft">Draft</span></div><div className="task-list">{tasks.map((task, i) => <div className="task-row" key={`${task.title}-${i}`}><div><strong>{task.title}</strong><small>{task.stage} · {task.estimatedDays} day(s) · {task.priority}</small></div><button className="icon-button" aria-label={`Remove ${task.title}`} onClick={() => remove(i)}><Trash2 size={17}/></button></div>)}</div><div className="review-actions"><button className="secondary"><Plus size={17}/> Add task</button><button className="primary"><Check size={17}/> Approve work plan</button></div></section>}
  </main>;
}
