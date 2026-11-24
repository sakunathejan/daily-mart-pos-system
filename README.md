# Daily Mart POS System 🛒💳

[![React](https://img.shields.io/badge/React-19.3.1-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.3.6-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.0-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)

**Pay Nest** is a modern, responsive Point of Sale (POS) system built with **React 19**, **Vite**, and **Tailwind CSS v4**. Designed for retail stores, cafes, and restaurants, it provides an intuitive interface for managing live sales, orders, customer relations, and payments.

---

## 📸 Key Features

### 1. Point of Sale & Quick Ordering
- **Interactive Menu & Catalog**: Browse food and beverage items with real-time keyword search.
- **Dynamic Product Addition**: Add custom products on the fly with name, price, category, and image upload.
- **Cart & Receipt Summary**:
  - Add items to order with instant price updates.
  - Choose between **Dine-In** and **Take Away** modes.
  - Automatic calculations for Subtotal, Tax (8%), and Grand Total.
  - Clear order and item removal capabilities.

### 2. Checkout & Payment Processing
- **Charge Modal**: Seamless checkout workflow triggered directly from the receipt.
- **Multiple Payment Methods**: Supports both **Cash** and **Card** transactions.
- **Cash Shortcuts & Calculations**:
  - Quick-denomination cash shortcut buttons.
  - Real-time calculation of amount received, change due, and balance.
- **Payment Success Confirmation**: Modal displaying a success state and complete transaction summary.

### 3. Order Management System
- **Comprehensive Order History**: View all placed orders with Order ID, customer details, timestamps, order type badges, and total amounts.
- **Order Details Inspection**: Modal view breaking down items ordered, prices, and payment info.
- **Order Editing**: Edit order types (Dine In / Take Away) and customer notes.
- **Order Deletion**: Remove orders with smooth animated trash-bin confirmation.
- **Table Pagination**: Easily navigate large order histories.

### 4. Customer Management System
- **Customer Directory**: Track customer profiles, contact info, total orders placed, and lifetime spend.
- **Customer Tiers**: Automatic badge indicators for **Active** and **VIP** customers.
- **Customer Details Modal**: Deep-dive into specific customer history and statistics.
- **Add & Edit Customers**: Add new clients with auto-generated customer IDs (`CUST-00X`) or update contact details and status.
- **Customer Deletion**: Clean removal of customer records.
- **Pagination Controls**: Responsive table pagination for seamless customer browsing.

### 5. UI/UX Design & Micro-Interactions
- Built on a clean, modern **Stone & Orange** aesthetic.
- Interactive, animated action buttons sourced from the community (Uiverse.io).
- Fully responsive across desktop workstations, tablets, and mobile devices.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **React 19** | Modern UI component architecture with clean hooks (`useState`, `useEffect`) |
| **Vite 8** | Ultra-fast development server and optimized production build bundler |
| **Tailwind CSS v4** | Next-generation utility-first styling via `@tailwindcss/vite` |
| **Sonner** | Modern toast notifications for action feedback |
| **Uiverse UI** | High-performance CSS-animated micro-interaction components |

---

## 📁 Project Structure

```text
pay-nest-pos-system/
├── public/                 # Static assets and icons
├── src/
│   ├── components/
│   │   ├── AddProduct.jsx           # Product creation form with image upload
│   │   ├── BinButton.css            # Styling for animated trash bin button
│   │   ├── BinButton.jsx            # Animated delete button component
│   │   ├── ChargePopUp.jsx          # Checkout, cash shortcuts & card payment modal
│   │   ├── CustomerManagement.jsx   # Customer directory, CRUD modals & pagination
│   │   ├── EditButton.jsx           # Animated edit button component
│   │   ├── EditForm.jsx             # Order editing modal
│   │   ├── NavBar.jsx               # Navigation bar with search & mode switching
│   │   ├── OrderManagement.jsx      # Order history table, actions & pagination
│   │   ├── PaymentSuccessPopUp.jsx  # Sale confirmation & receipt summary modal
│   │   ├── ProductMenu.jsx          # Catalog grid display & item selection
│   │   ├── Receipt.jsx              # Order summary sidebar & calculation logic
│   │   └── ViewDetailsModal.jsx     # Order details modal viewer
│   ├── App.jsx                      # Root application layout & global state
│   ├── index.css                    # Tailwind CSS v4 layers and base styles
│   └── main.jsx                     # React DOM entry point
├── package.json             # Project dependencies and npm scripts
├── vite.config.js           # Vite and Tailwind plugin configuration
└── README.md                # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18 or higher recommended)
- [npm](https://www.npmjs.com/) (bundled with Node.js)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/sakunathejan/pay-nest-pos-system.git
   ```

2. **Navigate to the project folder**:
   ```bash
   cd pay-nest-pos-system
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Start the development server**:
   ```bash
   npm run dev
   ```

5. Open your browser and visit the local server URL displayed in your terminal (typically `http://localhost:5173`).

---

## 📜 Available Scripts

In the project directory, you can run:

| Command | Description |
|---|---|
| `npm run dev` | Starts Vite dev server with hot module replacement (HMR) |
| `npm run build` | Compiles and bundles production-ready assets into `/dist` |
| `npm run preview` | Serves the production build locally to test performance |
| `npm run lint` | Runs ESLint to check for code quality and syntax issues |

---

## 💡 How It Works

1. **Taking an Order**:
   - Browse the menu or search items via the top search bar.
   - Click on items to add them to the order receipt on the right.
   - Toggle **Dine-In** or **Take Away** mode.
   - Click **Charge (Rs [Amount])** to open payment processing.
2. **Completing a Sale**:
   - Select **Cash** or **Card**.
   - For cash, use the shortcut buttons or enter the exact amount given.
   - Review the calculated change and click **Complete Sale**.
   - The payment success popup confirms the transaction and saves the order.
3. **Managing Orders**:
   - Switch to **Order Management** in the navigation bar.
   - Review past orders, view full item breakdowns, edit details, or delete completed records.
4. **Managing Customers**:
   - Switch to **Customer Management** to view regular and VIP clients.
   - Add new customers, update contact records, or review customer spending history.

---

## 🤝 Attribution & Credits

- Animated buttons created via [Uiverse.io](https://uiverse.io/):
  - **Edit Button**: by [M4rio1](https://uiverse.io/M4rio1/short-mule-12) (Mario Salazar) under MIT License.
  - **Bin Button**: by [seyed-mohsen-mousavi](https://uiverse.io/seyed-mohsen-mousavi/chilly-badger-49) (SEYED) under MIT License.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
