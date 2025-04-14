import AppTheme from '../shared-theme/AppTheme';
import formCustomizations from './formCustomizations'; // ✅

const xThemeComponents = {

  ...formCustomizations, // ✅ merged properly
};

export default function Dashboard(props) {
  return (
    <AppTheme {...props} themeComponents={xThemeComponents}>
      {/* your app here */}
    </AppTheme>
  );
}


