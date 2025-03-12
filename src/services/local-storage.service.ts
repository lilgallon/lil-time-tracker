const EVENTS_KEY = 'events'

export class LocalStorageService {
  public static loadEvents(): any[] {
    const localStorageContent = localStorage.getItem(EVENTS_KEY);
    return localStorageContent ? JSON.parse(localStorageContent) : [];
  }

  public static saveEvents(events: any[]): void {
    localStorage.setItem(EVENTS_KEY, JSON.stringify(events));
  }
}
