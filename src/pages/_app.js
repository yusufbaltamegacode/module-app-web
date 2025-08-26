import { AppProvider } from "../contexts/AppContext";

export default function ModuleApp({ Component, pageProps }) {
  return (
    <AppProvider initialData={pageProps.initialData}>
      <Component {...pageProps} />;
    </AppProvider>
  );
}
