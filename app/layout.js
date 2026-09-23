import "./globals.css";

export const metadata = {
  title: "Tentang Kami - Sharing Happiness",
  description: "Setiap Kebaikan Selalu Memiliki Cerita",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Gamja+Flower&family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="mobile-container">{children}</div>
      </body>
    </html>
  );
}
