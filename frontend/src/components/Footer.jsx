function Footer({ lang }) {
  return (
    <footer className="text-center mt-20 py-6 text-sm text-gray-500 border-t">
      © {new Date().getFullYear()} K and K Transport Express ·{" "}
      <a
        href="https://kktransportexpress.com"
        target="_blank"
        className="text-blue-600 hover:underline"
      >
        www.kktransportexpress.com
      </a>
    </footer>
  );
}

export default Footer;
