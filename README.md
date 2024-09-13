# Qikserve Menu

## Challenge - Front End Developer

This project was developed as part of a technical challenge for Qikserve, focusing on building a restaurant menu application. Customers can browse restaurant menus, view details about items, and add them to a cart. The application is built using **Next.js**, **React**, **TypeScript**, and **Redux**, with a strong focus on clean code, componentization, and responsiveness.

You can view the deployed version of the project [here](https://qikserve-menu.vercel.app/).

---

## Table of Contents

- [Tech Stack](#tech-stack)
- [How to Run](#how-to-run)
- [Assumptions](#assumptions)
- [Process and Choices](#process-and-choices)
- [Features](#features)
- [Future Improvements](#future-improvements)
- [Contact](#contact)

---

## Tech Stack

This project was built using the following technologies:

- **Next.js** (as framework)
- **React** (for UI development)
- **TypeScript** (for static typing)
- **Redux** (for state management)
- **ES6+**
- **CSS Modules** (for scoped CSS)
- **Vercel** (for deployment)

---

## How to Run

### Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v14 or higher)
- npm or yarn

### Running the Application

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Marcosh22/qikserve-menu.git
   cd qikserve-menu

   ```

2. **Run the development server:**

   ```bash
   npm install

   ```

3. **Install dependencies:**

   ```bash
   npm run dev

   ```

4. **Open the project in your browser:**

   ```bash
   http://localhost:3000

   ```

### Building for Production

To build the project for production, use:

   ```bash
   npm run build
   npm run start

   ```
    

This will build the application and start a server optimized for production.

---

## Assumptions

- **Time Constraints:** Due to time constraints, features like internationalization (i18n) and unit testing could not be implemented. However, these are important aspects and could be integrated in a future iteration.

- **Framework Choice:** Next.js was selected over a traditional React setup due to its built-in features such as server-side rendering (SSR) and static site generation (SSG). This choice aligns with the recommendation from the React documentation to use frameworks that manage complexities like code splitting, performance optimization, and routing effectively.

- **Code Quality:** While this implementation focuses on core functionality, maintaining clean code, modularity, and responsive design were top priorities. Future improvements will include enhancing internationalization support and adding comprehensive unit tests.

---

## Process and Choices

#### Framework: **Next.js**

I opted to use **Next.js** for several key reasons:

According to the [official React documentation](https://reactjs.org/docs/getting-started.html), while it's possible to use React without a framework, leveraging a framework like Next.js addresses several challenges that arise when building a complete app or site with React. Here’s why Next.js was chosen:

- **Complexity Management:** As your JavaScript bundle grows with new features, managing code splitting for individual routes and optimizing data fetching can become complex. Next.js handles these aspects efficiently out-of-the-box, avoiding the need for manual setup and integration of multiple tools.

- **Performance Optimization:** Next.js provides built-in support for server-side rendering (SSR) and static site generation (SSG), which improves performance and user experience by delivering HTML content early. This is particularly beneficial for users with poor network conditions and low-end devices.

- **Scalability:** As the app grows, Next.js scales effortlessly, allowing you to add features without worrying about the underlying infrastructure. It supports both static generation and server-side rendering, which helps in delivering content quickly and interactively.

- **Ease of Use:** By using Next.js, you avoid the complexities of integrating various libraries for routing, data fetching, and code splitting. It offers a structured environment that simplifies development and maintenance, and provides a strong community and ecosystem for support.

### State Management: **Redux**

For managing the application state, especially handling the **basket/cart** functionality, I used **Redux**. It's an excellent choice for applications where state management needs to be predictable and scalable.

### CSS: **CSS Modules**

Each component has its own style file using **CSS Modules**, ensuring that the styles are scoped locally to avoid global conflicts. This approach keeps the codebase clean and modular.

---

## Features

- **View Restaurant Details:** Users can browse restaurant information and its menu items.
- **Add to Basket:** Users can add menu items to the basket with specific quantities and modifiers.
- **Responsive Design:** The layout adjusts for both desktop and mobile devices.

---

## Future Improvements

- **Internationalization (i18n):** Add support for different languages, dates, and currency formats.
- **Unit Tests:** Integrate **React Testing Library** to ensure component functionality and reduce potential bugs.
- **Performance Optimization:** Improve load times for slower connections.

---

## Contact

Feel free to reach out to me via [LinkedIn](https://www.linkedin.com/in/marcoshsouza) or [email](mailto:marcos.henriquerds@gmail.com) if you have any questions or feedback.

---

Thank you for the opportunity to complete this challenge!
