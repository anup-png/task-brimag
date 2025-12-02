# 📦 Task-Brimag Backend (Express + Prisma + PostgreSQL)

Project Link : https://task-brimag-frontend.onrender.com/

This backend service is built using **Node.js**, **Express**, **Prisma ORM**, and **PostgreSQL (Neon Database)**.  
It provides a clean REST API to manage production orders with full CRUD support.

---

## 🚀 Features

- REST API built with Express
- Prisma ORM with PostgreSQL
- UUID used as primary key
- Order status enum system (PENDING, PROCESSING, COMPLETED)
- Fully deployable to Render
- Secure DB connection with SSL (required by Neon)

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Runtime | Node.js |
| Server Framework | Express.js |
| ORM | Prisma |
| Database | PostgreSQL (Neon.tech) |
| Deployment | Render.com |

---


# 📌 API Routes Overview

Base URL:  
`https://<your-backend-url>`

---

### 🟡 GET /allorders
Returns a list of all orders sorted by newest first.

---

### 🔵 GET /order/:id
Fetch a single order by its UUID.

Example:  
`/order/3f6e47a2-bd03-4dc2-97e7-2b6bb9cbb41b`

---

### 🟢 POST /createorder
Creates a new order.

Expected JSON body:
```json
{
  "productName": "Laptop",
  "quantity": 5,
  "status": "PENDING"
}



