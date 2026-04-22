# 🚗 Car Wash MVP Website – Project Specification

## 📌 Project Overview
Build a simple MVP website to validate demand for a **home car washing service in Accra, Ghana**.

The goal is to:
- Attract potential customers
- Allow users to request/book a car wash
- Collect user data for validation

⚠️ This is NOT a full booking system. Keep it simple and fast.

---

## 🎯 Core Objectives
- Validate demand for home car washing services
- Enable users to easily request a service
- Provide clear service information and pricing
- Enable direct communication (WhatsApp / phone)

---

## 🧱 Pages Required

### 1. Landing Page (`/`)
Main conversion page.

#### Sections:
- Hero Section
  - Headline: "Car Wash at Your Doorstep"
  - CTA button: "Book Now"

- How It Works
  - Step 1: Choose service
  - Step 2: Enter location
  - Step 3: We come to you

- Services & Pricing
  - Basic Wash
  - Interior Cleaning
  - Full Wash

- Trust Section
  - Images of washing bay
  - Testimonials (optional)

- Final CTA
  - Button linking to booking page

---

### 2. Booking Page (`/book`)
Simple form to collect service requests.

#### Form Fields:
- Full Name (required)
- Phone Number (required)
- Location (required)
- Car Type (dropdown: Saloon, SUV, etc.)
- Service Type (dropdown)
- Preferred Date/Time (optional)
- Additional Notes (optional)

#### Behavior:
- On submit:
  - Option A: Send data to backend API
  - Option B: Redirect to WhatsApp with pre-filled message

---

### 3. About Page (`/about`) *(Optional)*
- Business background
- Mission / vision
- Why choose this service

---

### 4. Contact Page (`/contact`) *(Optional)*
- Phone number
- WhatsApp link
- Business location (washing bay)

---

## ⚙️ Functional Requirements

### Booking Flow
- User clicks "Book Now"
- Navigates to `/book`
- Fills form
- Submits request
- Receives confirmation (simple message or redirect)

---

### WhatsApp Integration (Recommended)
- Generate pre-filled message:

Hello, I want to book a car wash.
Location:
Car Type:
Preferred Time:

- Redirect user to WhatsApp chat

---

### Backend (Optional for MVP)
If implemented:

#### API Endpoint:
`POST /api/requests`

#### Request Body:
```json
{
"name": "string",
"phone": "string",
"location": "string",
"carType": "string",
"service": "string",
"preferredTime": "string"
}