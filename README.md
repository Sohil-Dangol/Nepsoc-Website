# 🇳🇵 University of Warwick NepSoc Website

The official website for the **University of Warwick Nepalese Society (NepSoc)** — a central hub for society information, events, culture, social media, and membership.

🔗 **Live Website:** [Warwick NepSoc]([https://warwicknepsoc.co.uk/](https://sohil-dangol.github.io/Nepsoc-Website/index.html))
🔗 **GitHub Repository:** [Sohil-Dangol/Nepsoc-Website](https://github.com/Sohil-Dangol/Nepsoc-Website)

---

## 📖 About

The Warwick NepSoc website was developed to provide students with an accessible and engaging way to discover the society, learn about upcoming events, explore Nepali culture, and connect with the NepSoc community.

The site was designed with a focus on:

* 🎨 Modern and responsive UI
* 📱 Mobile-friendly layouts
* 🇳🇵 Nepali cultural identity and branding
* 📅 Event discovery and information
* 📸 Integration with social media content
* ❤️ Interactive user engagement
* ⚡ Lightweight front-end architecture

The website is used as a public-facing platform for the society and is intended to support both current students and anyone interested in Nepali culture at Warwick.

---

## ✨ Features

### 🏠 Homepage

The homepage introduces Warwick NepSoc through:

* Hero section and society introduction
* "Who We Are" section
* Community, culture and belonging feature cards
* Society statistics and highlights
* Event carousel
* Social media section
* Testimonials
* Membership call-to-action

### 📅 Events

A dedicated events section provides information about NepSoc activities throughout the year, including cultural and social events such as:

* Momo nights
* Arts & crafts
* Bar crawls
* Cultural celebrations
* Social gatherings
* Food-focused events

Event information is managed through JavaScript data and displayed dynamically throughout the site.

### 📱 Social Media Integration

The website incorporates NepSoc's social media presence directly into the site through embedded:

* Instagram content
* TikTok videos

This allows visitors to see recent society activity without having to leave the website.

### ❤️ Interactive Engagement

The site includes an interactive "Show us some love" feature where visitors can click a heart to support the society.

The interaction is connected to **Supabase**, allowing the displayed count to persist between visitors.

### 🎞️ Animations & UI

The website uses several front-end interactions to improve the browsing experience, including:

* Scroll reveal animations
* Image and content transitions
* Event carousel navigation
* Reusable navigation and footer components
* Responsive layouts

---

## 🛠️ Tech Stack

| Technology           | Purpose                                                |
| -------------------- | ------------------------------------------------------ |
| **HTML5**            | Page structure and semantic content                    |
| **CSS3**             | Styling, layouts, responsive design and animations     |
| **JavaScript**       | Interactivity and dynamic content                      |
| **Supabase**         | Persistent data for the interactive engagement counter |
| **TikTok Embed API** | Embedded TikTok content                                |
| **Instagram Embed**  | Embedded Instagram content                             |
| **Google Fonts**     | Typography                                             |

The project uses a lightweight front-end architecture without a large JavaScript framework.

---

## 📁 Project Structure

```text
Nepsoc-Website/
├── css/
│   ├── elements.css
│   ├── events.css
│   ├── execgrid.css
│   ├── footer.css
│   ├── gallery.css
│   ├── homepage.css
│   ├── navbar.css
│   ├── shop.css
│   └── sports.css
│
├── html/
│   ├── events.html
│   ├── exec.html
│   ├── footer.html
│   ├── gallery.html
│   ├── navbar.html
│   ├── shop.html
│   └── sports.html
│
├── images/
│   ├── display/
│   ├── events_page/
│   ├── event_posters/
│   │   └── past/
│   ├── gallery/
│   │   ├── 2324/
│   │   ├── 2425/
│   │   ├── 2526/
│   │   ├── 2627/
│   │   ├── ball/
│   │   ├── cake decorating/
│   │   ├── crawl 2025 jan/
│   │   ├── Freshers Fair/
│   │   ├── Momo Night/
│   │   ├── movie night/
│   │   ├── nepsoc vs abacus/
│   │   └── shrinky dinks/
│   ├── icons/
│   └── sports/
│
├── js/
│   ├── carousel.js
│   ├── eventsData.js
│   ├── gallery.js
│   ├── galleryReveal.js
│   ├── heart.js
│   ├── loadComponents.js
│   ├── scrollReveal.js
│   └── simpleCarousel.js
│
└──index.html
```

---

## 🚀 Running Locally

Clone the repository:

```bash
git clone https://github.com/Sohil-Dangol/Nepsoc-Website.git
cd Nepsoc-Website
```

Because the project is primarily a static front-end application, it can be run using a local development server.

For example, with Python:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

> Some functionality, such as external social-media embeds and Supabase interactions, may require an internet connection.

---

## 🎨 Design

The website combines modern web design with visual elements inspired by Nepali culture.

The design incorporates:

* Nepali-inspired imagery
* Prayer flags
* Nepal-themed icons
* Cultural photography
* Bold typography
* Warm, community-focused messaging
* Responsive layouts for desktop and mobile

The goal was to create something that feels like a **student society website rather than a generic template**, while still keeping the interface straightforward to navigate.

---

## 📸 Media

The repository contains images and visual assets used throughout the website.

Additional screenshots, promotional graphics and demonstration videos can also be included in the repository's documentation.

---

## 🔮 Future Improvements

Potential future improvements include:

* [ ] Dedicated event registration system
* [ ] Improved event filtering and search
* [ ] Online committee management
* [ ] Automated event updates
* [ ] Improved accessibility
* [ ] Performance optimisation
* [ ] More interactive cultural content
* [ ] Event photo galleries
* [ ] Improved analytics
* [ ] Content management system for easier updates

---

## 👥 Contributors

Developed and maintained for the **University of Warwick Nepalese Society**.

### Website Development

**Sohil Dangol**
University of Warwick

---

## 📄 License

This repository is primarily intended to document and showcase the development of the Warwick NepSoc website.

Society branding, photographs, videos and other media may belong to their respective owners and should not be reused without permission.
