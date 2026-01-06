# TolMol ⚖️💰
**"Daam wahi, par kya wazan sahi?"**

TolMol is a specialized "Quantity vs. Price" auditor designed for the Indian grocery market. Unlike standard price comparators, TolMol audits the **True Value** of products by calculating the price-per-unit (₹/100g or ₹/100ml) across quick-commerce apps and offline giants like DMart.

## 🚀 The Problem We're Solving
1. **Shrinkflation:** Brands reduce packet weights (e.g., 500g to 425g) while keeping prices constant. 
2. **Online-Offline Gap:** Offline stores like DMart often beat "10-minute" apps by 20-30%, but users lack real-time visibility.
3. **Cryptic Billing:** Offline bills use abbreviations (MGG NDL 70G) that are hard for average users to audit.

## ✨ Key Features
- **Smart Audit:** Instantly see the price-per-unit for any product.
- **Shrinkflation Watchdog:** Tracks historical weight data to flag products that have "shrunk."
- **Polyglot Search:** Compare live prices across **Blinkit, Zepto, Instamart, and BigBasket**.
- **AI Bill Scanner:** Scan physical receipts (DMart, Reliance, etc.) to extract and archive offline savings.

## 🛠️ Tech Stack
This project uses a **Polyglot Microservices** architecture to balance stability with high-performance AI processing.

- **Core API (Java):** Spring Boot 3.x (User Management, Security, Data Persistence)
- **AI/Scraper Service (Python):** FastAPI (OCR Processing, LLM Parsing, Web Scraping)
- **Database:** PostgreSQL (Relational Master Data) + Redis (Search Caching)
- **Frontend:** Flutter (Mobile App) & Next.js (Web Dashboard)

## 📁 Repository Structure
```text
tolmol-root/
├── tolmol-core/        # Spring Boot (System of Record)
├── tolmol-ai/          # Python (OCR & Scraper Engine)
├── tolmol-web/         # Next.js (Analytics Dashboard)
├── tolmol-mobile/      # Flutter (The Scanner App)
└── shared/             # API Contracts & OpenAPI Specs
