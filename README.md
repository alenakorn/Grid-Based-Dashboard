# Grid-Based Dashboard

A React + TypeScript application that allows adding, moving, and deleting blocks on a grid-based canvas.

## 🚀 Getting Started

### Run locally

```bash
# 1. Clone the repository
git clone <repository-url>
cd grid-based-dashboard

# 2. Install dependencies
pnpm install

# 3. Start the development server
pnpm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 🔧 Tech Stack

- **React** + **TypeScript**
- **Pure CSS** (no frameworks)
- **useState** + **React Context** for state management
- **Recharts** for charts
- **dnd-kit** for drag & drop

## 🧪 Demo Modes

This dashboard supports two interaction modes:

### 🔹 Demo 1 — default behavior 🐾

🔗 [https://alenakorn.github.io/Grid-Based-Dashboard/](https://alenakorn.github.io/Grid-Based-Dashboard/)

- Widgets can be freely dragged and reordered between each other.
- When a widget is deleted, all following blocks shift forward to fill the space.

### 🔸 Demo 2 — with empty cell support 🐾

🔗 [https://alenakorn.github.io/Grid-Based-Dashboard/?withEmptyCells](https://alenakorn.github.io/Grid-Based-Dashboard/?withEmptyCells)

- Widgets can **only** be dragged into **empty** cells.
- Swapping widgets between each other is **not allowed**.
- When a widget is deleted, its cell remains empty, and other widgets **stay in place**.

  ~(=^‥^)
