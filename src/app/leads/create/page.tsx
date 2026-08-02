import { LeadForm } from '@/features/leads/LeadForm';

export default function CreateLeadPage() {
  return (
    <main style={{ padding: 32 }}>
      <h1>Create Lead</h1>
      <p>Reno V2 lead registration.</p>
      <LeadForm />
    </main>
  );
}
