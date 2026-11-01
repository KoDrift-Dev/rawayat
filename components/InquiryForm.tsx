"use client";

import { useState } from "react";
import { waLink } from "@/lib/site";
import { Btn, Field } from "@/components/ui";
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

  return (
    <form onSubmit={submit}>
      <div className="form-row c2">
        <Field label="Your Name">
          <input
            id="inq-name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full name"
            className="input"
            autoComplete="name"
          />
        </Field>
        <Field label="Phone Number">
          <input
            id="inq-phone"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="03XX-XXXXXXX"
            className="input"
            autoComplete="tel"
            inputMode="tel"
          />
        </Field>
        <Field label="Event Type">
          <select id="inq-type" value={type} onChange={(e) => setType(e.target.value)} className="input">
            {EVENT_TYPES.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </Field>
        <Field label="Event Date">
          <input
            id="inq-date"
            required
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="input"
          />
        </Field>
      </div>
      <div style={{ marginTop: 16 }}>
        <Field label="Expected Guests">
          <input
            id="inq-guests"
            type="number"
            min="50"
            step="50"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            className="input"
            inputMode="numeric"
          />
        </Field>
      </div>
      <div style={{ marginTop: 20 }}>
        <Btn type="submit" variant="gold" block>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
            <WhatsAppIcon className="h-5 w-5" />
            Send Inquiry on WhatsApp
          </span>
        </Btn>
        <p className="small muted" style={{ marginTop: 10, marginBottom: 0, textAlign: "center" }}>
          Opens WhatsApp with your details prefilled — nothing is booked or stored here.
        </p>
      </div>
    </form>
  );
}
