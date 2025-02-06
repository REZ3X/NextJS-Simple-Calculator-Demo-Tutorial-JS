/**
 * Footer component that renders a footer element with specified styles and content.
 *
 * @component
 * @example
 * return (
 *   <Footer />
 * )
 */
export default function Footer() {
    return (
      <footer className="w-full mt-4 h-24 w-screen p-4 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 text-center fixed bottom-0">
        <p>&copy; 2023 Demo created by [Your Name]</p>
      </footer>
    );
  }