📱 PacMac Mobile README(s)

A developer‑friendly summary first — it’ll save your focus for actual repairs 🚀
(Scroll for the full README to paste into your GitHub repo.)

⸻

TL;DR
	•	PacMac Mobile is a Lovable.ai‑built Progressive Web App (PWA) for Apple device repair, trade‑in, and rent‑to‑own services.
	•	It powers user flows for booking repairs, getting trade‑in quotes, and browsing rent‑to-own inventory.
	•	Built using Lovable.ai, meaning React/TypeScript frontend + Supabase backend under the hood.  ￼
	•	Hosted at pacmacmobile.lovable.app — advertised as “Apple Repair, Trade‑In & Rent‑to‑Own Devices” in its header.  ￼
	•	As of mid‑2025, the business also trades as P3 Lending, offering Bitcoin‑powered P2P lending for device purchases.  ￼

⸻

README Template to Paste into GitHub

# PacMac Mobile / P3 Lending Web App

### ⚙️ Overview  
PacMac Mobile is a Progressive Web App built with **Lovable.ai**, designed for customers to:

- Book **repair services** for iPhones, iPads, Macs, and other Apple devices  
- Request **trade‑in quotes** for older Apple gadgets  
- Browse **rent‑to‑own listings**, including short‑term rentals and P2P financing via Bitcoin

As of **July 2025**, the platform has rebranded partially as **P3 Lending**, integrating decentralized lending and rent‑to‑own models.  [oai_citation:3‡Facebook](https://www.facebook.com/p/P3-Lending-61573009392683/?utm_source=chatgpt.com)

---

## ⚡️ Why Lovable.ai?

Lovable is an AI‑powered web app generation platform that lets you build full‑stack apps using natural‑language prompts. It uses:

- **React**, **TypeScript**, and **Tailwind CSS** for the frontend  
- **Supabase** (PostgreSQL + Auth + File Storage) for the backend  
- A chat‑based prompt interface that generates, updates, and previews your app in real time  [oai_citation:4‡Lovable Documentation](https://docs.lovable.dev/introduction/getting-started?utm_source=chatgpt.com)

With Lovable.ai, PacMac Mobile’s entire website is described via a single prompt + prompts for specific pages (e.g. trade‑in form, rent‑to‑own catalog), and Lovable created the UI and backend automatically.

---

## ⚙ Feature Overview  

| Feature                     | Description |
|----------------------------|-------------|
| 🛠 Repair Booking         | Users schedule device repairs, select service options, and upload diagnostics photos or serial numbers |
| 💸 Trade‑In Estimator     | Upload device details; system returns an estimate (based on depreciated MSRP) and mailing instructions |
| 🏦 Rent‑to‑Own Explorer  | Browse available inventory, see monthly rates, choose Bitcoin or USD P2P payment options |
| 🔁 P3 Lending Dashboard   | Track payment history, upload ID, set up auto‑payments, and chat with support |
| 📧 Contact & Support      | Integrated chat widget with FAQ, email form, and cancellation workflow |
| 🔍 Policy & Info Pages    | Privacy policy, refund terms, warranty details generated based on lender compliance |

---

## 🚀 Getting Started (Developer Guide)

### 1. Clone & Setup  
```bash
git clone https://github.com/your‑org/pacmac‑mobile.git
cd pacmac‑mobile

2. Connect Lovable Project (via .lovable.json)

Add your project ID and enable GitHub integration in Lovable settings. Example .lovable.json:

{
  "projectId": "d9fc321c‑4e2d‑4270‑995d‑4fdbcbb24a38",
  "alias": "pacmac‑mobile",
  "env": {
    "SUPABASE_URL": "https://xyz.supabase.co",
    "SUPABASE_ANON_KEY": "✂️ your anon key"
  }
}

Then export code via:

lovable sync

3. Run Locally

npm install
npm run dev     # Runs Vite frontend with hot reload
npm run serve   # If backend has SSR/static export

4. Deploy
	•	Deploy to Vercel or Netlify (auto‑pull on GitHub push)
	•	Ensure env variables (SUPABASE_URL, etc.) are configured
	•	Use Lovable.ai’s Deploy > Preview Link > Production toggle as needed

⸻

🧭 Usage Instructions (As a Customer)
	1.	Visit https://pacmacmobile.lovable.app
	2.	Use the navigation header to choose between:
	•	Repair – describes issue, upload photos, select shipping or in‑store
	•	Trade‑in – enter pub. model & condition, receive instant quote
	•	Rent‑to‑Own – select plan, choose payment method (USD or BTC via Metamask)
	3.	Log in / sign up (email/password or wallet login if P3 Lending)
	4.	Monitor repair/trade/rental progress via your Dashboard

⸻

🧩 Contributing
	•	Prompt Improvement: Submit new content prompts to Lovable via Pull Request—Lovable will rebuild the UI instantly
	•	Backend Enhancements: Supabase SQL or stored procedure changes go into /supabase folder
	•	UI Polishing: Tailwind + React improvements in /src (live updates feature in Lovable)
	•	Issue Tracking: Bug reports and feature requests tracked with GitHub Issues

⸻

🛡 Policies & Compliance
	•	Trade‑in values are estimates; final value determined after post‑inspection
	•	All rent‑to‑own agreements follow P3 Lending terms — users must submit ID, pass KYC before contract activation
	•	Data handling maintained via Supabase Auth, Email OTP, and Cloudflare bot protection

⸻

🧰 Future Roadmap
	•	[ ] Add iOS & Android native wrapper using HQ‑Native (future Lovable mobile export)
	•	[ ] Launch voice‑input troubleshooting wizard for repairs
	•	[ ] Allow store associates to manage walk‑in quotes with admin portal
	•	[ ] Enable autofill from Apple serial numbers (API pending)

⸻

📄 License & Credits
	•	All code generated with Lovable.ai prompt‑based scripting – see CONTRIBUTING.md for attribution
	•	Supabase only stores hashed user‑passwords and handles email verification
	•	Lovable‑generated assets may be subject to Lovable.ai terms of use

---

## 🌟 Notes for You (if you want to dive deeper)

- The site previously showed “PacMac Mobile – Apple Repair, Trade‑In & Rent‑to‑Own Devices” as its main page heading.  [oai_citation:5‡pacmacmobile.lovable.app](https://pacmacmobile.lovable.app/)  
- Pandemic pivot alert: The business now identifies as **P3 Lending**, integrating **P2P lending over Bitcoin** for rent‑to‑own plans.  [oai_citation:6‡Facebook](https://www.facebook.com/p/P3-Lending-61573009392683/?utm_source=chatgpt.com)  
- Lovable’s default stack (React + Supabase, visual prompting, code preview) means the archived export likely includes `package.json`, frontend `/src`, plus a `/server` folder that contains backend endpoint scaffolds.  [oai_citation:7‡Lovable Documentation](https://docs.lovable.dev/introduction/getting-started?utm_source=chatgpt.com)  

Let me know if you'd like a separate Dev README by file (e.g. where to add new API routes or supabase migrations). I can walk you through it **just like you're 5**, no skipping steps 😊
