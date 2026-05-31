export type Lang = "en" | "nl";

export const translations = {
  en: {
    nav: {
      services: "Services",
      portfolio: "Our Work",
      pricing: "Packages",
      about: "About",
      lang: "NL",
    },
    hero: {
      badge: "Online within 48 hours",
      headline: "Your website. Live in 48 hours. Or your money back.",
      subline:
        "We don't start building until we understand who you are, who your customers are, and what makes you different. Then we deliver — fast, sharp, and exactly right.",
      cta: "Book a free call",
      ctaSub: "No obligation · 30 minutes · Response within 2 hours",
      scroll: "See how it works",
      niches: ["Barbers", "Nail salons", "Coaches", "Driving schools", "Contractors", "Mobile booking & app"],
    },
    problem: {
      headline: "Sound familiar?",
      subline: "You're good at what you do. But online, nobody can see it yet.",
      cards: [
        {
          title: "Google can't find you",
          body: "Every day without a website is a day your customers land with someone else. Not because you're worse — just because they found the other person first.",
        },
        {
          title: "You're losing customers without knowing it",
          body: "You'll never get a call from someone who found your competitor instead. That's the silent cost of not being online.",
        },
        {
          title: "Agencies promise the world, deliver a template",
          body: "They ask for your logo, write 'Welcome to our website' and send an invoice. You paid thousands for something that could belong to anyone.",
        },
        {
          title: "Months of waiting for something that never feels finished",
          body: "Web agencies take 6 to 12 weeks on average — and go quiet halfway through. Your website should be live in 48 hours, not 48 days.",
        },
        {
          title: "A big bill, little to show for it",
          body: "A beautiful website nobody finds is an expensive brochure. We build sites that get found — and that convert visitors into customers.",
        },
        {
          title: "Managing appointments has become a second job",
          body: "Post-its, WhatsApp messages, notes on your phone. One central system — accessible on any device — takes care of it all.",
        },
      ],
    },
    services: {
      headline: "What you get",
      subline: "Four services. One goal: a business that works online — built around you.",
      items: [
        {
          title: "Branding & Identity",
          body: "Before we design anything, we learn who you are and who your customers are. The result: an identity that people actually remember — and that feels unmistakably yours.",
          features: [
            "Custom logo design",
            "Color palette & typography",
            "Brand style guide",
            "Social media kit (profile, banners, post templates, story templates)",
            "Original copywriting — written in your voice",
          ],
        },
        {
          title: "Website Design & Build",
          body: "100% custom. No templates, no shortcuts. A website that tells your story, works on every device, and gives visitors a reason to contact you.",
          features: [
            "100% custom design",
            "Mobile-first & fast",
            "Original copy written for you",
            "Contact form + Google Maps",
            "2 months support included",
          ],
        },
        {
          title: "Booking System",
          body: "All your appointments in one place — always. Customers book online, you add walk-ins manually. One system, any device, always up to date.",
          features: ["Online booking 24/7", "All bookings in one place", "Access from phone, tablet or computer", "Manual entry for phone bookings", "Automatic confirmations"],
        },
        {
          title: "SEO (Search Engine Optimisation)",
          body: "What's the point of a great website if nobody finds it? We make sure you show up when your customers search — on Google, on Maps, in your area.",
          features: ["Google Business setup & optimisation", "Google Maps visibility", "Higher search rankings", "Review strategy", "3 months of reporting"],
        },
      ],
    },
    howItWorks: {
      headline: "From call to live. In 48 hours.",
      subline: "Three steps. No waiting. No guesswork.",
      steps: [
        {
          number: "01",
          title: "We ask the questions others skip",
          body: "Who are your customers? What makes you different? Why would someone choose you over the competition? That's what we build.",
          guarantee: "Appointment confirmed within 2 hours",
        },
        {
          number: "02",
          title: "We build. You run your business.",
          body: "No endless back-and-forth. No weeks of feedback rounds. We deliver — you approve. Fast, smooth, done.",
          guarantee: "Your website live within 48 hours",
        },
        {
          number: "03",
          title: "Live. And we stay.",
          body: "Your business goes online. We stay reachable for questions, updates, and a monthly check-in. You're never left to figure it out alone.",
          guarantee: "We don't disappear after launch",
        },
      ],
    },
    usp: {
      headline: "What makes Mo Pro Max different",
      items: [
        { title: "We learn your business before we touch a pixel", body: "Most agencies paste a template and call it custom work. We interview you first — and build only once we fully understand who you are and who your customers are." },
        { title: "48 hours — guaranteed", body: "Not a target. A guarantee. If your site isn't live within 48 hours, you get your money back. No exceptions, no fine print." },
        { title: "You call, we pick up", body: "No ticket system. No waiting queue. Direct contact with the person who built your site — who knows your business by name." },
        { title: "We're still here six months later", body: "Monthly check-in. Always reachable. We treat your business like it's our own — because your success is the only review that matters." },
      ],
    },
    portfolio: {
      headline: "Results speak louder",
      subline: "Real businesses. Real outcomes.",
      cta: "Get results like these",
      items: [
        {
          name: "Kapper Youssef",
          category: "Barbershop · Brand + Booking",
          result: "Booked out within 2 weeks of going live",
          color: "from-amber-900 to-amber-700",
        },
        {
          name: "Nail Studio Rosa",
          category: "Nail Salon · Website + Brand",
          result: "40% more new clients in first month",
          color: "from-pink-900 to-pink-700",
        },
        {
          name: "Amir Coaching",
          category: "Life Coach · Full Package",
          result: "Professional image that matches the quality of his work",
          color: "from-blue-900 to-blue-700",
        },
      ],
    },
    pricing: {
      headline: "Transparent pricing. Always.",
      subline: "What you see is what you pay. No hidden costs, no surprises, no asterisks.",
      cta: "Get started",
      ctaCustom: "Request a quote",
      popular: "Most popular",
      maintenance: "+ Monthly maintenance: €19/mo (basic) · €35/mo (Pro Max · priority support)",
      features: [
        "Personal responsive web design",
        "Contact form + Google Maps",
        "Logo + house style",
        "First 2 months support included",
        "Branding & House Style",
        "Social media kit",
        "Booking system",
        "SEO (Search Engine Optimisation)",
        "Priority support",
      ],
      tiers: [
        { name: "Starter", price: "€199",      highlight: false, isCustom: false, included: [true, true, true, false, false, false, false, false, false] },
        { name: "Pro",     price: "€349",       highlight: true,  isCustom: false, included: [true, true, true, true,  true,  true,  true,  true,  false] },
        { name: "Pro Max", price: "€849",       highlight: false, isCustom: false, included: [true, true, true, true,  true,  true,  true,  true,  true ] },
        { name: "Custom",  price: "On request", highlight: false, isCustom: true,  included: [true, true, true, true,  true,  true,  true,  true,  true ] },
      ],
    },
    about: {
      headline: "The person behind Mo Pro Max",
      story: [
        "I started Mo Pro Max after watching too many good business owners pay thousands for a website that looked like everyone else's.",
        "A template with their logo. 'Welcome to our website' in the header. An invoice that hurt. And a website that sat there, doing nothing, finding nobody.",
        "I decided to do it differently. I ask the questions other agencies skip. I write the copy myself. I build fast and stay after launch. And I only start building once I genuinely understand your business — not just your logo.",
      ],
      cta: "Let's build something real",
    },
    contact: {
      headline: "Let's talk.",
      subline: "A free 30-minute call. No sales pitch — just an honest conversation about what you need and whether we're the right fit.",
      form: {
        name: "Your name",
        email: "Email address",
        business: "Type of business",
        message: "Tell us about your business",
        send: "Send message",
        sent: "Message sent! We'll be in touch within 2 hours.",
      },
      promise: "Response within 2 hours — guaranteed",
      whatsapp: "Prefer WhatsApp?",
    },
    footer: {
      tagline: "Mo Pro Max — Websites that work. People who stay.",
      links: ["Services", "Our Work", "Packages", "About", "Contact"],
      legal: "All rights reserved.",
    },
  },
  nl: {
    nav: {
      services: "Diensten",
      portfolio: "Ons Werk",
      pricing: "Pakketten",
      about: "Over Ons",
      lang: "EN",
    },
    hero: {
      badge: "Binnen 48 uur online",
      headline: "Jouw website. Live in 48 uur. Of je geld terug.",
      subline:
        "We beginnen pas als we begrijpen wie jij bent, wie jouw klanten zijn en wat jou uniek maakt. Dan leveren we — snel, scherp en precies goed.",
      cta: "Plan een gratis gesprek",
      ctaSub: "Vrijblijvend · 30 minuten · Reactie binnen 2 uur",
      scroll: "Bekijk hoe het werkt",
      niches: ["Kappers", "Nagelsalons", "Coaches", "Rijscholen", "Aannemers", "Mobiel boekingssysteem & app"],
    },
    problem: {
      headline: "Herken je dit?",
      subline: "Je doet het goed. Maar online is dat nog niet te zien.",
      cards: [
        {
          title: "Google vindt je niet",
          body: "Elke dag zonder website is een dag dat jouw klanten bij iemand anders landen. Niet omdat die beter is — maar omdat die gevonden werd.",
        },
        {
          title: "Je verliest klanten zonder het te weten",
          body: "Je krijgt nooit een telefoontje van iemand die jouw concurrent heeft gevonden. Dat is de stille prijs van niet online zijn.",
        },
        {
          title: "Bureaus beloven veel, leveren een template",
          body: "Logo erin. 'Welkom op onze website' in de header. Factuur buiten. Je betaalde duizenden euro's voor iets dat van iedereen had kunnen zijn.",
        },
        {
          title: "Maanden wachten op iets dat nooit af voelt",
          body: "Webdesignbureaus doen er gemiddeld 6 tot 12 weken over — en communiceren amper. Jouw website staat er in 48 uur, niet 48 dagen.",
        },
        {
          title: "Hoge rekening, weinig resultaat",
          body: "Een mooie website die niemand vindt is een dure folder. Wij bouwen sites die gevonden worden — en bezoekers omzetten in klanten.",
        },
        {
          title: "Afspraken bijhouden is een bijbaantje geworden",
          body: "Post-its, WhatsApp-berichten, notities op je telefoon. Eén centraal systeem — bereikbaar op elk apparaat — lost dit allemaal op.",
        },
      ],
    },
    services: {
      headline: "Wat je krijgt",
      subline: "Vier diensten. Één doel: een bedrijf dat online werkt — gebouwd rond jou.",
      items: [
        {
          title: "Branding & Huisstijl",
          body: "Voor we ook maar iets ontwerpen, leren we wie jij bent en wie jouw klanten zijn. Het resultaat: een identiteit die mensen onthouden — en die onmiskenbaar van jou is.",
          features: [
            "Uniek logo op maat",
            "Kleurenpalet & typografie",
            "Merk stijlgids",
            "Social media kit (profiel, banners, post-templates, story-templates)",
            "Originele teksten — geschreven in jouw stem",
          ],
        },
        {
          title: "Website Ontwerp & Bouw",
          body: "100% op maat. Geen templates, geen shortcuts. Een website die jouw verhaal vertelt, op elk apparaat werkt en bezoekers een reden geeft om contact op te nemen.",
          features: [
            "100% op maat ontwerp",
            "Mobiel-first & snel",
            "Originele websiteteksten voor jou geschreven",
            "Contactformulier + Google Maps",
            "2 maanden support inbegrepen",
          ],
        },
        {
          title: "Boekingssysteem",
          body: "Al jouw afspraken op één plek — altijd. Klanten boeken online, jij voegt loopklanten handmatig toe. Één systeem, elk apparaat, altijd actueel.",
          features: ["Online boeken 24/7", "Alle boekingen op één plek", "Bereikbaar via telefoon, tablet of computer", "Handmatig invoeren als klanten bellen", "Automatische bevestigingen"],
        },
        {
          title: "SEO (Search Engine Optimisation)",
          body: "Wat heeft een geweldige website voor zin als niemand je vindt? We zorgen dat je zichtbaar bent als jouw klanten zoeken — op Google, op Maps, in jouw regio.",
          features: ["Google Business instellen & optimaliseren", "Zichtbaarheid op Google Maps", "Hogere zoekposities", "Review-strategie", "3 maanden rapportage"],
        },
      ],
    },
    howItWorks: {
      headline: "Van gesprek naar live. In 48 uur.",
      subline: "Drie stappen. Geen wachten. Geen gedoe.",
      steps: [
        {
          number: "01",
          title: "Wij stellen de vragen die anderen overslaan",
          body: "Wie zijn jouw klanten? Wat maakt jou anders? Waarom kiezen mensen voor jou en niet voor de concurrent? Dát bouwen we.",
          guarantee: "Afspraak bevestigd binnen 2 uur",
        },
        {
          number: "02",
          title: "Wij bouwen. Jij doet gewoon zaken.",
          body: "Geen eindeloos heen-en-weer. Geen weken aan feedbackrondes. Wij leveren — jij keurt goed. Snel, soepel, klaar.",
          guarantee: "Jouw website live binnen 48 uur",
        },
        {
          number: "03",
          title: "Live. En wij blijven.",
          body: "Jouw bedrijf staat online. Wij blijven bereikbaar voor vragen, updates en een maandelijkse check-in. Je staat er nooit alleen voor.",
          guarantee: "Wij verdwijnen niet na de lancering",
        },
      ],
    },
    usp: {
      headline: "Wat Mo Pro Max anders maakt",
      items: [
        { title: "Wij leren je kennen voor we een pixel aanraken", body: "De meeste bureaus plakken een template en noemen het maatwerk. Wij beginnen met een gesprek — en bouwen pas als we écht begrijpen wie jij bent en wat jouw klanten zoeken." },
        { title: "48 uur — gegarandeerd", body: "Geen streefdoel. Een garantie. Als jouw site er niet binnen 48 uur staat, krijg je je geld terug. Zonder uitzondering, zonder kleine lettertjes." },
        { title: "Jij belt, wij nemen op", body: "Geen ticketsysteem. Geen wachtrij. Direct contact met degene die jouw site gebouwd heeft — en jouw bedrijf bij naam kent." },
        { title: "Wij zijn er nog zes maanden later", body: "Maandelijkse check-in. Altijd bereikbaar. We behandelen jouw bedrijf alsof het ons eigen is — want jouw succes is de enige recensie die telt." },
      ],
    },
    portfolio: {
      headline: "Resultaten spreken luider",
      subline: "Echte bedrijven. Echte uitkomsten.",
      cta: "Zulke resultaten voor jou",
      items: [
        {
          name: "Kapper Youssef",
          category: "Kapper · Merk + Boeking",
          result: "Volgeboekt binnen 2 weken na lancering",
          color: "from-amber-900 to-amber-700",
        },
        {
          name: "Nail Studio Rosa",
          category: "Nagelsalon · Website + Merk",
          result: "40% meer nieuwe klanten in de eerste maand",
          color: "from-pink-900 to-pink-700",
        },
        {
          name: "Amir Coaching",
          category: "Life Coach · Volledig pakket",
          result: "Professioneel imago dat past bij de kwaliteit van zijn werk",
          color: "from-blue-900 to-blue-700",
        },
      ],
    },
    pricing: {
      headline: "Transparante prijzen. Altijd.",
      subline: "Wat je ziet is wat je betaalt. Geen verborgen kosten, geen verrassingen, geen kleine lettertjes.",
      cta: "Aan de slag",
      ctaCustom: "Vraag een offerte aan",
      popular: "Meest gekozen",
      maintenance: "+ Maandelijks onderhoud: €19/mnd (basis) · €35/mnd (Pro Max · priority support)",
      features: [
        "Persoonlijk responsief webdesign",
        "Contactformulier + Google Maps",
        "Logo + huisstijl",
        "Eerste 2 maanden support inbegrepen",
        "Branding & Huisstijl",
        "Social media kit",
        "Boekingssysteem",
        "SEO (Search Engine Optimisation)",
        "Priority support",
      ],
      tiers: [
        { name: "Starter", price: "€199",       highlight: false, isCustom: false, included: [true, true, true, false, false, false, false, false, false] },
        { name: "Pro",     price: "€349",        highlight: true,  isCustom: false, included: [true, true, true, true,  true,  true,  true,  true,  false] },
        { name: "Pro Max", price: "€849",        highlight: false, isCustom: false, included: [true, true, true, true,  true,  true,  true,  true,  true ] },
        { name: "Custom",  price: "Op aanvraag", highlight: false, isCustom: true,  included: [true, true, true, true,  true,  true,  true,  true,  true ] },
      ],
    },
    about: {
      headline: "De persoon achter Mo Pro Max",
      story: [
        "Ik startte Mo Pro Max nadat ik te vaak zag hoe goede ondernemers duizenden euro's betaalden voor een website die eruitzag als die van iedereen.",
        "Een template met hun logo. 'Welkom op onze website' in de header. Een factuur die pijn deed. En een website die er stond — maar niets deed, niemand vond en niets vertelde over wie ze écht zijn.",
        "Ik doe het anders. Ik stel de vragen die anderen overslaan. Ik schrijf de teksten zelf. Ik lever snel en blijf na de lancering. En ik begin pas te bouwen als ik jouw bedrijf écht begrijp — niet alleen je logo.",
      ],
      cta: "Laten we iets echts bouwen",
    },
    contact: {
      headline: "Laten we praten.",
      subline: "Een gratis gesprek van 30 minuten. Geen verkooppraatje — gewoon een eerlijk gesprek over wat jij nodig hebt en of wij de juiste match zijn.",
      form: {
        name: "Jouw naam",
        email: "E-mailadres",
        business: "Type bedrijf",
        message: "Vertel iets over jouw bedrijf",
        send: "Verstuur bericht",
        sent: "Bericht verstuurd! We nemen binnen 2 uur contact op.",
      },
      promise: "Reactie binnen 2 uur — gegarandeerd",
      whatsapp: "Liever WhatsApp?",
    },
    footer: {
      tagline: "Mo Pro Max — Websites die werken. Mensen die blijven.",
      links: ["Diensten", "Ons Werk", "Pakketten", "Over Ons", "Contact"],
      legal: "Alle rechten voorbehouden.",
    },
  },
};
