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
      headline: "Your business deserves more than a template.",
      subline:
        "We learn your business before we touch a single pixel. No cookie-cutter sites, no guesswork — your story, your customers, your website. Built fast, built right.",
      cta: "Book a free call",
      ctaSub: "No obligation · 30 minutes",
      scroll: "See how it works",
      niches: ["Barbers", "Nail salons", "Coaches", "Driving schools", "Contractors", "Mobile booking & app"],
    },
    problem: {
      headline: "Sound familiar?",
      subline:
        "Still running your business through WhatsApp and word of mouth? You're losing customers who are searching for you online right now.",
      cards: [
        {
          title: "Not found online",
          body: "Customers search Google first. Without a website, you simply don't exist to them.",
        },
        {
          title: "No professional image",
          body: "A Facebook page is not a website. A real site builds trust and credibility instantly.",
        },
        {
          title: "Your agency doesn't get you",
          body: "They ask for your logo, write 'Welcome to our website' and send an invoice. That's not a website — that's a placeholder with your name on it. We learn who you are before we build anything.",
        },
        {
          title: "Waiting weeks at an agency",
          body: "Most web agencies take 1 to 3 months and then go silent. Your website should be live in 48 hours, not 48 days.",
        },
        {
          title: "Paying too much for too little",
          body: "Agencies charge €2,500+ for a basic website — logo and booking system cost extra. We include everything from €199.",
        },
        {
          title: "No overview of your appointments",
          body: "Someone calls to book? You write it on a note. A customer books online? You find out later. One central system — accessible on computer and phone — fixes all of that.",
        },
      ],
    },
    services: {
      headline: "What we deliver",
      subline: "Four services. One goal: a business that works online — built around who you are.",
      items: [
        {
          title: "Branding & House Style",
          body: "Your brand is more than a logo. We learn who you are, who your customers are, and what you stand for — then we build an identity that people actually remember.",
          features: [
            "Custom logo design",
            "Color palette & typography",
            "Branding & House Style",
            "Social media kit (profile, banners, post templates, story templates)",
            "Original copywriting — we write your texts, in your voice",
          ],
        },
        {
          title: "Website Design & Build",
          body: "No templates. No copy-paste. A custom website built around your story, your customers, and your goals — fast and mobile-first.",
          features: [
            "100% custom design",
            "Mobile-first & fast",
            "Original website copy written for you",
            "Contact form + Google Maps",
            "1 month support included",
          ],
        },
        {
          title: "Booking System",
          body: "All your appointments within arm's reach — always. Customers book online, you add walk-ins manually when someone calls. One central system, accessible from any device, always up to date.",
          features: ["Online booking 24/7", "All bookings in one place", "Access from phone, tablet or computer", "Manual entry when customers call", "Automatic confirmations"],
        },
        {
          title: "SEO (Search Engine Optimisation)",
          body: "What's the point of a great website if nobody finds it? We make sure you show up when customers search for what you do — on Google, on Maps, in your area.",
          features: ["Google Business setup & optimisation", "Google Maps visibility", "Search ranking improvement", "Review strategy", "3 months reporting"],
        },
      ],
    },
    howItWorks: {
      headline: "How it works",
      subline: "From first call to going live in three simple steps.",
      steps: [
        {
          number: "01",
          title: "We learn your business",
          body: "You talk, we listen. We dig into who you are, who your customers are, and what makes you different. Only then do we start building.",
          guarantee: "We confirm your appointment within 2 hours",
        },
        {
          number: "02",
          title: "We build it around you",
          body: "No templates, no copy-paste. A website built specifically around your brand, your story, and your goals — handled entirely by us.",
          guarantee: "Your website is live within 48 hours",
        },
        {
          number: "03",
          title: "You go live — we stay",
          body: "Your business goes online. We stay reachable for questions, updates, and a monthly check-in. You're never left hanging.",
          guarantee: "We don't disappear after launch",
        },
      ],
    },
    usp: {
      headline: "Why business owners choose Mo Pro Max",
      items: [
        { title: "We learn your business first", body: "Before we build a single page, we understand who you are, who your customers are, and what you want to be known for. That's the foundation of every site we build." },
        { title: "Online within 48 hours", body: "Not in weeks or months. Most of our clients go live within 48 hours after the first call." },
        { title: "Always reachable", body: "Response within 2 hours. No automated emails, no call centers — just direct contact with the person who built your site." },
        { title: "Still here after launch", body: "The biggest complaint about agencies? They vanish. We send a monthly check-in and are always one message away." },
      ],
    },
    portfolio: {
      headline: "Our work",
      subline: "A few of the businesses we've helped get online.",
      cta: "Start your project",
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
      headline: "Clear pricing",
      subline: "No hidden costs. No surprises. Pick the package that fits.",
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
      headline: "Who is behind Mo Pro Max?",
      story: [
        "I started Mo Pro Max with one rule: understand before you build.",
        "Most agencies ask for your logo, write 'Welcome to our website' in the header, and send an invoice. That's not a website — that's a placeholder with your name on it. I've seen it happen too many times to talented business owners who deserved better.",
        "I take the time to learn your business. Who your customers are. What makes you different. What you want to be known for. Then I build a site that actually tells that story — fast, personal, and exactly right for you. And I'm still there after launch.",
      ],
      cta: "Let's work together",
    },
    contact: {
      headline: "Ready to get started?",
      subline: "Book a free 30-minute call. We'll talk about your business and figure out exactly what you need.",
      form: {
        name: "Your name",
        email: "Email address",
        business: "Business type",
        message: "Tell us about your business",
        send: "Send message",
        sent: "Message sent! We'll be in touch within 24 hours.",
      },
      promise: "We respond within 24 hours",
      whatsapp: "Prefer WhatsApp?",
    },
    footer: {
      tagline: "Your business, online. Done right.",
      links: ["Services", "Our Work", "Pricing", "About", "Contact"],
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
      headline: "Jouw bedrijf verdient meer dan een template.",
      subline:
        "Wij leren jouw bedrijf kennen voor we een pixel aanraken. Geen standaard oplossingen, geen uitpoepen — jouw verhaal, jouw klanten, jouw website. Snel gebouwd, goed gedaan.",
      cta: "Plan een gratis gesprek",
      ctaSub: "Vrijblijvend · 30 minuten",
      scroll: "Bekijk hoe het werkt",
      niches: ["Kappers", "Nagelsalons", "Coaches", "Rijscholen", "Aannemers", "Mobiel boekingssysteem & app"],
    },
    problem: {
      headline: "Klinkt dit bekend?",
      subline:
        "Loop je je bedrijf nog via WhatsApp en mond-tot-mondreclame? Dan mis je klanten die nu online naar jou zoeken.",
      cards: [
        {
          title: "Niet vindbaar online",
          body: "Klanten zoeken eerst op Google. Zonder website besta je simpelweg niet voor hen.",
        },
        {
          title: "Geen professioneel imago",
          body: "Een Facebook-pagina is geen website. Een echte site wekt direct vertrouwen en geloofwaardigheid.",
        },
        {
          title: "Jouw bureau snapt je niet",
          body: "Ze vragen om je logo, typen 'Welkom op onze website' en sturen een factuur. Dat is geen website — dat is een naamplaatje. Wij leren eerst wie jij bent voor we ook maar één ding bouwen.",
        },
        {
          title: "Weken wachten bij een bureau",
          body: "De meeste webdesignbureaus doen er 1 tot 3 maanden over — en communiceren amper. Jouw website staat er binnen 48 uur, niet 48 dagen.",
        },
        {
          title: "Te duur voor wat je krijgt",
          body: "Bureaus rekenen €2.500+ voor een basiswebsite — logo en boekingssysteem betaal je extra. Wij geven alles mee vanaf €199.",
        },
        {
          title: "Geen overzicht van je afspraken",
          body: "Iemand belt voor een afspraak? Je schrijft het op een briefje. Een klant boekt online? Je hoort het later. Één centraal systeem — bereikbaar op computer én telefoon — lost dit allemaal op.",
        },
      ],
    },
    services: {
      headline: "Wat wij leveren",
      subline: "Vier diensten. Één doel: een bedrijf dat online werkt — gebouwd rond wie jij bent.",
      items: [
        {
          title: "Branding & Huisstijl",
          body: "Jouw merk is meer dan een logo. Wij leren wie jij bent, wie jouw klanten zijn en waar jij voor staat — dan bouwen we een identiteit die mensen écht onthouden.",
          features: [
            "Uniek logo op maat",
            "Kleurenpalet & typografie",
            "Merk stijlgids",
            "Social media kit (profiel, banners, post-templates, story-templates)",
            "Originele teksten — wij schrijven jouw copy, in jouw stem",
          ],
        },
        {
          title: "Website Ontwerp & Bouw",
          body: "Geen templates. Geen copy-paste. Een website op maat gebouwd rond jouw verhaal, jouw klanten en jouw doelen — snel en mobielvriendelijk.",
          features: [
            "100% op maat ontwerp",
            "Mobiel-first & snel",
            "Originele websiteteksten geschreven voor jou",
            "Contactformulier + Google Maps",
            "1 maand support inbegrepen",
          ],
        },
        {
          title: "Boekingssysteem",
          body: "Al jouw afspraken altijd binnen handbereik. Klanten boeken online, jij voegt loopklanten handmatig toe als iemand belt. Één centraal systeem, bereikbaar op elk apparaat, altijd up-to-date.",
          features: ["Online boeken 24/7", "Alle boekingen op één plek", "Bereikbaar via telefoon, tablet of computer", "Handmatig invoeren als klanten bellen", "Automatische bevestigingen"],
        },
        {
          title: "SEO (Search Engine Optimisation)",
          body: "Wat heeft een geweldige website voor zin als niemand je vindt? Wij zorgen dat je zichtbaar bent wanneer klanten zoeken naar wat jij doet — op Google, op Maps, in jouw regio.",
          features: ["Google Business instellen & optimaliseren", "Zichtbaarheid op Google Maps", "Hogere zoekresultaten", "Review-strategie", "3 maanden rapportage"],
        },
      ],
    },
    howItWorks: {
      headline: "Hoe het werkt",
      subline: "Van eerste gesprek tot online gaan in drie eenvoudige stappen.",
      steps: [
        {
          number: "01",
          title: "Wij leren jouw bedrijf kennen",
          body: "Jij praat, wij luisteren. We duiken in wie jij bent, wie jouw klanten zijn en wat jou anders maakt. Pas als we dat snappen, beginnen we.",
          guarantee: "Wij bevestigen jouw afspraak binnen 2 uur",
        },
        {
          number: "02",
          title: "Wij bouwen het om jou heen",
          body: "Geen templates, geen copy-paste. Een website gebouwd rond jouw merk, jouw verhaal en jouw doelen — door ons geregeld van A tot Z.",
          guarantee: "Jouw website staat er binnen 48 uur",
        },
        {
          number: "03",
          title: "Jij gaat live — wij blijven",
          body: "Jouw bedrijf staat online. Wij blijven bereikbaar voor vragen, updates en een maandelijkse check-in. Je staat er nooit alleen voor.",
          guarantee: "Wij verdwijnen niet na de lancering",
        },
      ],
    },
    usp: {
      headline: "Waarom ondernemers kiezen voor Mo Pro Max",
      items: [
        { title: "Wij leren jouw bedrijf eerst kennen", body: "Voor we een pagina bouwen, begrijpen we wie jij bent, wie jouw klanten zijn en waar jij voor wilt staan. Dát is de basis van elke website die wij maken." },
        { title: "Binnen 48 uur online", body: "Niet over weken of maanden. De meeste klanten gaan live binnen 48 uur na het eerste gesprek." },
        { title: "Altijd bereikbaar", body: "Reactie binnen 2 uur. Geen automatische e-mails, geen callcenter — gewoon direct contact met degene die jouw site gebouwd heeft." },
        { title: "Nog steeds er na de lancering", body: "De grootste klacht over bureaus? Ze verdwijnen. Wij sturen een maandelijkse check-in en zijn altijd één berichtje weg." },
      ],
    },
    portfolio: {
      headline: "Ons werk",
      subline: "Een aantal bedrijven die wij online hebben geholpen.",
      cta: "Start jouw project",
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
      headline: "Duidelijke tarieven",
      subline: "Geen verborgen kosten. Geen verrassingen. Kies het pakket dat past.",
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
      headline: "Wie zit er achter Mo Pro Max?",
      story: [
        "Ik startte Mo Pro Max met één regel: begrijpen voor je bouwt.",
        "De meeste bureaus vragen om je logo, typen 'Welkom op onze website' in de header en sturen een factuur. Dat is geen website — dat is een naamplaatje. Ik heb dit te vaak zien gebeuren bij ondernemers die beter verdienen.",
        "Ik neem de tijd om jouw bedrijf te leren kennen. Wie jouw klanten zijn. Wat jou anders maakt. Waar je voor wilt staan. Dan bouw ik een website die dat verhaal ook écht vertelt — snel, persoonlijk en precies goed. En ik ben er nog steeds na de lancering.",
      ],
      cta: "Laten we samenwerken",
    },
    contact: {
      headline: "Klaar om te beginnen?",
      subline: "Plan een gratis gesprek van 30 minuten. We praten over jouw bedrijf en bepalen precies wat je nodig hebt.",
      form: {
        name: "Jouw naam",
        email: "E-mailadres",
        business: "Type bedrijf",
        message: "Vertel iets over jouw bedrijf",
        send: "Verstuur bericht",
        sent: "Bericht verstuurd! We nemen binnen 24 uur contact op.",
      },
      promise: "Wij reageren binnen 24 uur",
      whatsapp: "Liever WhatsApp?",
    },
    footer: {
      tagline: "Jouw bedrijf, online. Goed geregeld.",
      links: ["Diensten", "Ons Werk", "Tarieven", "Over Ons", "Contact"],
      legal: "Alle rechten voorbehouden.",
    },
  },
};
