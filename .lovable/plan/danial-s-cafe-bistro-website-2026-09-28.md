# Danial's Cafe & Bistro — Website

A minimal, clean, premium one-page site for the cafe in Faridkot, built to drive online orders first, with the full menu, directions and click-to-call close behind.

## Style

Minimal premium: generous whitespace, soft cream/off-white background, deep espresso text, one restrained warm accent, large rounded food photography, refined serif headings paired with a clean sans for body text. No clutter, no loud gradients.

## Page structure (single scrolling page + anchors in the top bar)

1. **Header** — logo, links (Menu, About, Visit), and a persistent "Order Online" button. Sticky on scroll; on mobile a bottom bar with Order / Call / Directions.
2. **Hero** — "Your Everyday Hangout Spot", one line about the cafe, primary "Order Online" button and secondary "View Menu". Large food/ambience image. Small trust line: 4.6/5 from 122 reviews on Google.
3. **Highlights** — three short points: welcoming hangout, food-focused with good atmosphere, pocket-friendly (₹1–200 per person).
4. **Menu** — tabbed/grouped categories covering the full offering: coffee & hot drinks, shakes & cold drinks, burgers, pizza, sandwiches & wraps, Punjabi snacks, South Indian, desserts. Each item has a name and short description. Prices left blank as placeholders until you send the real menu — I will not invent prices.
5. **Atmosphere** — a photo strip of the cafe interior and food.
6. **Reviews** — the Google rating and review count shown honestly, with a link to the Google listing. No made-up customer quotes.
7. **Visit us** — address (Opposite Gaushala, near MGM School, Faridkot, Punjab 151203), phone 078145 00305 as click-to-call, embedded Google map link for directions, and a spot for opening hours.
8. **Footer** — contact, social placeholders, ordering links.

## What I need from you

- **Logo and photos**: you said you have both — please upload them and I will swap them in. Until then I generate stand-in food and interior images so the layout reads correctly.
- **Ordering link**: the "Order Online" buttons need a real destination (Zomato, Swiggy, or a WhatsApp number). Until you give me one, they will point to a call/WhatsApp fallback.
- **Menu items and prices**, and **opening hours** — anything you don't supply stays as clearly marked placeholder text rather than invented detail.

## Technical notes

- Static front-end only: content lives in a typed menu data file so items and prices are easy to edit in one place.
- Built as the site's home route with anchor-scroll sections; design tokens (cream/espresso/accent, radii, shadows, fonts) defined centrally in the stylesheet, no hardcoded colors in components.
- Uploaded logo/photos go through the asset pipeline and are referenced by URL.
- Page metadata set for the cafe (title, description, social preview) so it shares well and ranks locally.
