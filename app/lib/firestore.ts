import {
  collection,
  addDoc,
  getDocs,
  getDoc,
  doc,
  updateDoc,
  deleteDoc,
  setDoc,
  query,
  orderBy,
  serverTimestamp,
  Timestamp,
} from "firebase/firestore";
import { db } from "./firebase";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface ContactMessage {
  id?: string;
  name: string;
  email: string;
  phone?: string;
  message: string;
  read: boolean;
  replied: boolean;
  createdAt: Timestamp | null;
}

export interface Booking {
  id?: string;
  name: string;
  email: string;
  phone?: string;
  service?: string;
  date: string;
  time: string;
  notes?: string;
  status: "pending" | "confirmed" | "cancelled";
  createdAt: Timestamp | null;
}

export interface PortfolioItem {
  id?: string;
  title: string;
  description: string;
  category: string;
  result: string;
  color: string;
  imageUrl?: string;
  liveUrl?: string;
  tags: string[];
  order: number;
  visible: boolean;
  createdAt: Timestamp | null;
}

export interface AvailabilitySlot {
  id?: string;
  date: string;       // "YYYY-MM-DD"
  times: string[];    // ["09:00","10:00",...]
  blocked: boolean;
}

export interface SiteSettings {
  portfolioVisible: boolean;   // master switch for the whole Portfolio section on the public site
}

// ─── Contact messages ─────────────────────────────────────────────────────────

export async function saveContactMessage(data: Omit<ContactMessage, "id" | "createdAt" | "read" | "replied">) {
  return addDoc(collection(db, "messages"), {
    ...data,
    read: false,
    replied: false,
    createdAt: serverTimestamp(),
  });
}

export async function getMessages() {
  const q = query(collection(db, "messages"), orderBy("createdAt", "desc"));
  const snap = await getDocs(q);
  return snap.docs.map(d => ({ id: d.id, ...d.data() } as ContactMessage));
}

export async function markMessageRead(id: string) {
  return updateDoc(doc(db, "messages", id), { read: true });
}

export async function markMessageReplied(id: string) {
  return updateDoc(doc(db, "messages", id), { replied: true, read: true });
}

export async function deleteMessage(id: string) {
  return deleteDoc(doc(db, "messages", id));
}

// ─── Bookings ─────────────────────────────────────────────────────────────────

export async function saveBooking(data: Omit<Booking, "id" | "createdAt" | "status">) {
  return addDoc(collection(db, "bookings"), {
    ...data,
    status: "pending",
    createdAt: serverTimestamp(),
  });
}

export async function getBookings() {
  const q = query(collection(db, "bookings"), orderBy("createdAt", "desc"));
  const snap = await getDocs(q);
  return snap.docs.map(d => ({ id: d.id, ...d.data() } as Booking));
}

export async function updateBookingStatus(id: string, status: Booking["status"]) {
  return updateDoc(doc(db, "bookings", id), { status });
}

export async function deleteBooking(id: string) {
  return deleteDoc(doc(db, "bookings", id));
}

// ─── Portfolio ────────────────────────────────────────────────────────────────

export async function getPortfolioItems() {
  const q = query(collection(db, "portfolio"), orderBy("order", "asc"));
  const snap = await getDocs(q);
  return snap.docs.map(d => ({ id: d.id, ...d.data() } as PortfolioItem));
}

export async function addPortfolioItem(data: Omit<PortfolioItem, "id" | "createdAt">) {
  return addDoc(collection(db, "portfolio"), { ...data, createdAt: serverTimestamp() });
}

export async function updatePortfolioItem(id: string, data: Partial<PortfolioItem>) {
  return updateDoc(doc(db, "portfolio", id), data);
}

export async function deletePortfolioItem(id: string) {
  return deleteDoc(doc(db, "portfolio", id));
}

// ─── Availability ─────────────────────────────────────────────────────────────

export async function getAvailability() {
  const snap = await getDocs(collection(db, "availability"));
  return snap.docs.map(d => ({ id: d.id, ...d.data() } as AvailabilitySlot));
}

export async function setAvailability(date: string, times: string[], blocked = false) {
  // Use date as document ID — setDoc with merge prevents duplicates
  return setDoc(doc(db, "availability", date), { date, times, blocked }, { merge: true });
}

export async function getAvailabilityForDate(date: string): Promise<AvailabilitySlot | null> {
  const snap = await getDocs(query(collection(db, "availability")));
  const found = snap.docs.find(d => d.id === date);
  return found ? { id: found.id, ...found.data() } as AvailabilitySlot : null;
}

// ─── Site settings ────────────────────────────────────────────────────────────

export async function getSiteSettings(): Promise<SiteSettings> {
  const snap = await getDoc(doc(db, "settings", "site"));
  const data = snap.exists() ? (snap.data() as Partial<SiteSettings>) : {};
  // default: visible — preserves existing behaviour when nothing is set yet
  return { portfolioVisible: data.portfolioVisible ?? true };
}

export async function setPortfolioVisible(visible: boolean) {
  return setDoc(doc(db, "settings", "site"), { portfolioVisible: visible }, { merge: true });
}
