export const providers = [
  { id: 'github', name: 'GitHub' },
  { id: 'google', name: 'Google' },
] as const;

export type ProviderId = (typeof providers)[number]['id'];
