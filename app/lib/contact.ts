// Zakelijk WhatsApp-nummer. wa.me verwacht landcode zonder + of 00 en zonder spaties.
export const WHATSAPP_NUMBER = "31626029133";

export const WHATSAPP_DISPLAY = "+31 6 26029133";

const WHATSAPP_GREETING = "Hoi Mo Pro Max, ik heb een vraag over jullie websites.";

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_GREETING)}`;
