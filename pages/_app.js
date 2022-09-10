import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import Container from "../components/container";
import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Container>
        <Component {...pageProps} />
      </Container>
    </ThemeProvider>
  );
}
