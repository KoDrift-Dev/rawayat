"use client";

import { useState } from "react";
import { waLink } from "@/lib/site";
import WhatsAppIcon from "@/components/WhatsAppIcon";

const EVENT_TYPES = ["Barat", "Walima", "Mehndi", "Nikah", "Reception", "Engagement", "Other"];

// Enquiry only: this form opens WhatsApp with the details prefilled.
// It books nothing and stores nothing.
export default function InquiryForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [type, setType] = useState("Barat");
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState("500");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Assalam-o-Alaikum! I would like to inquire about Rawayat Marquee & Marriage Hall.\n\nName: ${name}\nPhone: ${phone}\nEvent: ${type}\nDate: ${date}\nGuests: ${guests}\n\nPlease confirm availability.`;
    window.open(waLink(msg), "_blank");
  };

  const input = "w-full rounded-xl border border-line bg-white px-4 py-2.5 text-ink focus:border-gold focus:outline-none";
  const label = "mb-1 block text-sm font-bold text-green";

  return (
    <form onSubmit={submit} className="grid gap-4 sm:grid-cols-2">
      <div>
        <label htmlFor="inq-name" className={label}>Your Name</label>
        <input id="inq-name" required value={name} onChange={(e) => setName(e.target.value)} placeholder="Full name" className={input} />
      </div>
      <div>
        <label htmlFor="inq-phone" className={label}>Phone Number</label>
        <input id="inq-phone" required value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="03XX-XXXXXXX" className={input} />
      </div>
      <div>
        <label htmlFor="inq-type" className={label}>Event Type</label>
        <select id="inq-type" value={type} onChange={(e) => setType(e.target.value)} className={input}>
          {EVENT_TYPES.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="inq-date" className={label}>Event Date</label>
        <input id="inq-date" required type="date" value={date} onChange={(e) => setDate(e.target.value)} className={input} />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="inq-guests" className={label}>Expected Guests</label>
        <input id="inq-guests" type="number" min="50" step="50" value={guests} onChange={(e) => setGuests(e.target.value)} className={input} />
      </div>
      <div className="sm:col-span-2">
        <button type="submit" className="flex w-full items-center justify-center gap-2 rounded-full bg-gold px-5 py-3 font-bold text-[#1d1a12] hover:bg-gold-dark hover:text-white">
          <WhatsAppIcon className="h-5 w-5" />
          Send Inquiry on WhatsApp
        </button>
      </div>
    </form>
  );
}
