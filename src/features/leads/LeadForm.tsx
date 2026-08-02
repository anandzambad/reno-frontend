'use client';

import { FormEvent, useState } from 'react';
import { api } from '@/lib/api';
import type { LeadCreateRequest } from './types';

const services = [
  { value: 1, label: 'Painting' },
  { value: 2, label: 'Flooring' },
  { value: 3, label: 'Kitchen' },
  { value: 4, label: 'Roof' },
  { value: 5, label: 'Doors & Windows' },
];

export function LeadForm() {
  const [form, setForm] = useState<LeadCreateRequest>({
    service: 1,
    name: '',
    email: '',
    mobileNumber: '',
    postalCode: '',
    description: '',
  });
  const [status, setStatus] = useState('');

  function update<K extends keyof LeadCreateRequest>(key: K, value: LeadCreateRequest[K]) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('Submitting...');
    try {
      await api('/v1/leads', { method: 'POST', body: JSON.stringify(form) });
      setStatus('Lead submitted successfully.');
    } catch (error) {
      setStatus(error instanceof Error ? error.message : 'Unable to submit lead.');
    }
  }

  return (
    <form onSubmit={submit} style={{ display: 'grid', gap: 16, maxWidth: 640 }}>
      <label>Service<select value={form.service} onChange={(e) => update('service', Number(e.target.value))}>{services.map((s) => <option key={s.value} value={s.value}>{s.label}</option>)}</select></label>
      <label>Name<input required value={form.name} onChange={(e) => update('name', e.target.value)} /></label>
      <label>Email<input required type="email" value={form.email} onChange={(e) => update('email', e.target.value)} /></label>
      <label>Mobile<input required value={form.mobileNumber} onChange={(e) => update('mobileNumber', e.target.value)} /></label>
      <label>Postal Code<input required value={form.postalCode} onChange={(e) => update('postalCode', e.target.value)} /></label>
      <label>Describe Your Requirement<textarea required rows={5} value={form.description} onChange={(e) => update('description', e.target.value)} /></label>
      <button type="submit">Submit Lead</button>
      {status && <p role="status">{status}</p>}
    </form>
  );
}
