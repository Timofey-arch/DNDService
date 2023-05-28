import type { AppProps } from 'next/app';
import '../../src/styles/Desktop/main.css';
import '../../src/styles/Desktop/character_form.css';
import '../../src/styles/Desktop/handbook.css';
import '../../src/styles/Desktop/api_info.css'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
