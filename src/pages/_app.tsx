import type { AppProps } from 'next/app';
import '../../src/styles/Desktop/main.css';
import '../../src/styles/Desktop/character_form.css';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
