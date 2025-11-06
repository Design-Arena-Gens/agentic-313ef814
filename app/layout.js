import './globals.css';

export const metadata = {
  title: 'Cow Birth Script',
  description: 'A structured, cinematic script about a cow giving birth',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className="container">
          {children}
        </main>
      </body>
    </html>
  );
}
