import AppTheme from '../shared-theme/AppTheme';
import chartsCustomizations from '../customizations/chartsCustomizations'; // Adjust the path as needed
import dataGridCustomizations from '../customizations/dataGridCustomizations'; // Adjust the path as needed
import datePickersCustomizations from '../customizations/datePickersCustomizations'; // Adjust the path as needed
import treeViewCustomizations from '../customizations/treeViewCustomizations'; // Adjust the path as needed

const xThemeComponents = {
  ...chartsCustomizations,
  ...dataGridCustomizations,
  ...datePickersCustomizations,
  ...treeViewCustomizations,
};

export default function Dashboard(props) {
  return (
    <AppTheme {...props} themeComponents={xThemeComponents}>...</AppTheme>
  )
}
