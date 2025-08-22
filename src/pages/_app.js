import { AppProvider } from "@/contexts/AppContext";

export default function App({ Component, pageProps }) {
  return (
    <AppProvider initialData={pageProps.initialData}>
      <Component {...pageProps} />;
    </AppProvider>
  );
}
