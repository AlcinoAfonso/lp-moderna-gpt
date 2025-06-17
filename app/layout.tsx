import "@/app/globals.css";

export const metadata = {
  title: "LP Moderna",
  description: "Landing page moderna gerada por GPT",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
