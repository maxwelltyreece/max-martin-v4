
import ClientRootWrapper from "./components/Navbar/clientRootWrapper";
import './styles/globals.css';


export const metadata = {
  title: "Max Martin",
  description: "Portfolio showcasing music and computing projects",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body>
        {/* Client-side wrapper for Navbar + Shader */}
        <ClientRootWrapper>
          {children}
        </ClientRootWrapper>
      </body>
    </html>
  );
}
