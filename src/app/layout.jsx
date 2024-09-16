import Header from "./components/Header";
import "./globals.css";

export const metadata = {
  title: "School app",
  description: "Mijn app voor school",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
