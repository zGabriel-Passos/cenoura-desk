import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  // **OBRIGATÓRIO:** Especifique os pesos que você usará.
  // Você pode listar vários, como '400', '600', '700'.
  weight: ['400', '600', '700', '800'],

  subsets: ['latin'],

  // Define a fonte como uma variável CSS para usar no CSS global/Tailwind
  variable: '--font-poppins',

  display: 'swap', // Melhor estratégia para evitar layout shift
});

export const metadata: Metadata = {
  title: "CenouraHub - Agente Repositório Python",
  description: "Descubra projetos e ideias.",
  icons: {
    icon: '/icon2.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={poppins.variable}>
      <body>
        {children}
      </body>
    </html>
  );
}
