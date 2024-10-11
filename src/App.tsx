import { useTheme } from './hooks/useTheme.ts';
import PWABadge from './PWABadge.tsx';

// Implement theming
// https://dev.to/danhawkins/a-simple-theme-switcher-in-react-for-tailwind-css-1349

export default function App() {
  const { isDarkMode } = useTheme();

  console.log(isDarkMode);

  return (
    <>
      <div>App</div>
      <PWABadge />
    </>
  );
}

