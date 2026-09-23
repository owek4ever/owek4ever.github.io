import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "../styles/globals.css"
import PageLoader from "@/components/PageLoader"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || "https://owek4ever.github.io"),
  title: {
    default: "Ilyass Chakroun | Portfolio",
    template: "%s | Ilyass Chakroun Portfolio",
  },
  description: "Personal portfolio of Ilyass Chakroun. Software Engineering student specializing in full-stack development, ERP systems, and AI-driven analytics.",
  keywords: ["Ilyass Chakroun", "Portfolio", "Software Engineer", "Full Stack Developer", "Web Development", "Dolibarr ERP", "React Native", "Python", "Next.js"],
  authors: [{ name: "Ilyass Chakroun" }],
  creator: "Ilyass Chakroun",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Ilyass Chakroun | Portfolio",
    description: "Personal portfolio of Ilyass Chakroun. Software Engineering student specializing in full-stack development, ERP systems, and AI-driven analytics.",
    siteName: "Ilyass Chakroun Portfolio",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Ilyass Chakroun Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ilyass Chakroun | Portfolio",
    description: "Personal portfolio of Ilyass Chakroun. Software Engineering student specializing in full-stack development, ERP systems, and AI-driven analytics.",
    images: ["/images/hero.jpg"],
    creator: "@owek4ever",
  },
  icons: {
    icon: "/images/hero.jpg",
    shortcut: "/images/hero.jpg",
    apple: "/images/hero.jpg",
  },
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "ZbLhiilDbtLDyIx5eH6Jeoe1jPkXNKId-LhXG1HhLWA",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <PageLoader />
        {children}
      </body>
    </html>
  )
}

