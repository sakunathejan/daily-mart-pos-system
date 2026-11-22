# Pay Nest POS System

A modern, responsive Point of Sale interface built for retail, cafe, and supermarket workflows. Pay Nest provides a clean product catalog, order management, receipt summary, cash and card payment flows, and a payment confirmation experience.

## Features

- Searchable product menu
- Product categories and product cards
- Add-product form with image upload
- Dine-in and takeaway order modes
- Live order item and subtotal summary
- Automatic tax and total calculations
- Cash and card payment options
- Cash shortcuts, amount received, and change calculation
- Payment success confirmation
- Responsive desktop, tablet, and mobile layouts

## Built With

- React
- Vite
- Tailwind CSS
- Sonner toast notifications
- Styled Components

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/sakunathejan/pay-nest-pos-system.git
   ```

2. Enter the project directory:

   ```bash
   cd pay-nest-pos-system
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local address shown by Vite in a browser.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Create a production build |
| `npm run lint` | Run ESLint |
| `npm run preview` | Preview the production build locally |

## Project Structure

```text
src/
├── App.jsx
├── index.css
├── main.jsx
└── components/
    ├── AddProduct.jsx
    ├── ChargePopUp.jsx
    ├── NavBar.jsx
    ├── PaymentSuccessPopUp.jsx
    ├── ProductMenu.jsx
    └── Receipt.jsx
```

## Usage

1. Browse or search the product menu.
2. Add products to create an order.
3. Select a dine-in or takeaway mode.
4. Review the subtotal, 8% tax, and total.
5. Open the payment screen and choose cash or card.
6. Complete the sale and start a new order.
