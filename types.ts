
export enum AppView {
  LANDING = 'LANDING',
  DASHBOARD = 'DASHBOARD'
}

export interface StatItem {
  label: string;
  value: string | number;
  change: number;
  icon: string;
}

export interface NavItem {
  label: string;
  id: string;
  icon: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}
