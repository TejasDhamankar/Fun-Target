// pages/_app.tsx
import '@/styles/globals.css'; // Include global styles here
import { DataProvider } from '../store/GlobalState';

interface MyAppProps {
  Component: React.ComponentType<any>;
  pageProps: any;
}

const MyApp: React.FC<MyAppProps> = ({ Component, pageProps }) => {
  return (
    <DataProvider>
      <div className="app-frame">
        <div className="app-shell">
          <Component {...pageProps} />
        </div>
      </div>
    </DataProvider>
  );
};

export default MyApp;
