import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className="mx-32 my-10">{children}</body>
    </html>
  );
}
