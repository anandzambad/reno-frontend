export const moduleCatalog = [
  'authentication', 'users', 'leads', 'lead-assignment', 'contractors',
  'contractor-applications', 'complaints', 'estimation', 'invoices',
  'work-orders', 'documents', 'reports', 'locations', 'services',
  'subscriptions', 'promotions', 'admin',
] as const;

export type RenoModule = (typeof moduleCatalog)[number];
