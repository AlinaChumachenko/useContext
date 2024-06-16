import { ThemeProvider } from "../contexts/ThemeContext.js";
import "@/styles/globals.css";

const MyApp = ({ Component, pageProps }) => (
  // Компонент, який обгортає всю програму, щоб забезпечити доступ до контексту
  <>
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  </>
);

export default MyApp;
