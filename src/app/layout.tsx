import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ErrorBoundary from "@/components/ErrorBoundary";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Caka Kuaför | Profesyonel Saç Tasarımı ve Mikro Kaynak",
    template: "%s | Caka Kuaför",
  },
  description:
    "Caka Kuaför: Profesyonel saç tasarımı, bakım, kesim, renklendirme ve mikro kaynak hizmetleri.",
  metadataBase: new URL("https://localhost"),
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", type: "image/x-icon" }
    ],
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-black`}
      >
        <ErrorBoundary>
          <Header />
          <main className="pt-16 min-h-[calc(100vh-16rem)]">{children}</main>
          <Footer />
        </ErrorBoundary>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.addEventListener('error', function(e) {
                if (e.message.includes('Failed to fetch') || e.message.includes('chrome-extension')) {
                  console.log('Chrome extension error caught and ignored');
                  e.preventDefault();
                  return false;
                }
              });
              
              window.addEventListener('unhandledrejection', function(e) {
                if (e.reason && (e.reason.message.includes('Failed to fetch') || e.reason.message.includes('chrome-extension'))) {
                  console.log('Chrome extension promise rejection caught and ignored');
                  e.preventDefault();
                  return false;
                }
              });
            `,
          }}
        />
        <SpeedInsights />
      </body>
    </html>
  );
}
