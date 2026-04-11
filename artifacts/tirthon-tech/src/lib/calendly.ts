export const CALENDLY_URL = "https://calendly.com/tirthontech";

type CalendlyGlobal = {
  initPopupWidget: (options: { url: string }) => void;
};

declare global {
  interface Window {
    Calendly?: CalendlyGlobal;
  }
}

/**
 * Opens the Calendly booking popup if the widget script has loaded,
 * otherwise falls back to opening the Calendly page in a new tab.
 */
export function openCalendly(): void {
  if (window.Calendly) {
    window.Calendly.initPopupWidget({ url: CALENDLY_URL });
  } else {
    window.open(CALENDLY_URL, "_blank", "noopener,noreferrer");
  }
}
