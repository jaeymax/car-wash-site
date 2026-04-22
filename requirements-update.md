# 🧼🚗 Cleaning Services MVP Website – Project Specification

## 📌 Project Overview
Build a simple MVP website to validate demand for:
- 🚗 Car washing services (on-site & home service)
- 🧼 Home cleaning services

Target location: **Accra, Ghana**

The goal is to:
- Attract customers
- Allow users to request a service
- Validate demand for both service categories

⚠️ This is NOT a full booking system. Keep it simple.

---

## 🎯 Core Objectives
- Validate demand for multiple cleaning services
- Allow users to easily request either service
- Clearly differentiate service categories
- Enable fast communication (WhatsApp / phone)

---

## 🧱 Pages Required

### 1. Landing Page (`/`)
Main conversion page covering both services.

#### Sections:

- Hero Section
  - Headline: "Professional Cleaning Services at Your Doorstep"
  - Subtext: "Car Wash & Home Cleaning Anywhere in Accra"
  - CTA: "Book a Service"

- Services Overview (IMPORTANT)
  - 🚗 Car Washing
  - 🧼 Home Cleaning
  - Each with short description + "Book Now" button

- How It Works
  - Step 1: Choose service
  - Step 2: Enter location
  - Step 3: We come to you

- Pricing (Simple)
  - Separate sections:
    - Car Wash pricing
    - Home Cleaning pricing

- Trust Section
  - Photos (washing bay / cleaning work)
  - Testimonials (optional)

- Final CTA
  - "Book Now"

---

### 2. Booking Page (`/book`)
Single unified form for all services.

#### Form Fields:
- Full Name (required)
- Phone Number (required)
- Service Type (required)
  - Car Wash
  - Home Cleaning
- Location (required)
- Car Type *(only if Car Wash selected)*
- Cleaning Type *(only if Home Cleaning selected)*  
  - e.g. Basic Cleaning, Deep Cleaning
- Preferred Date/Time (optional)
- Additional Notes (optional)

#### Behavior:
- Show/hide fields dynamically based on service type
- On submit:
  - Option A: Send to backend
  - Option B: Redirect to WhatsApp with pre-filled message

---

### 3. Services Page (`/services`) *(Optional but recommended)*
Breakdown of both services.

#### Sections:
- Car Washing Services
  - Description
  - Pricing
- Home Cleaning Services
  - Description
  - Pricing

---

### 4. About Page (`/about`) *(Optional)*
- Business story
- Mission
- Why trust the service

---

### 5. Contact Page (`/contact`) *(Optional)*
- Phone number
- WhatsApp link
- Business location

---

## ⚙️ Functional Requirements

### Booking Flow
- User selects service from landing page OR booking page
- Fills form
- Submits request
- Receives confirmation

---

### WhatsApp Integration (Highly Recommended)

#### Pre-filled message example:

Hello, I want to book a service.

Service Type:
Location:
Details:
Preferred Time:


---

### Backend (Optional for MVP)

#### API Endpoint:
`POST /api/requests`

#### Request Body:
```json
{
  "name": "string",
  "phone": "string",
  "serviceType": "car_wash | home_cleaning",
  "location": "string",
  "carType": "string (optional)",
  "cleaningType": "string (optional)",
  "preferredTime": "string",
  "notes": "string"
}