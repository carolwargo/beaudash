import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import SignInCard from '../../components/SignInCard/SignInCard';
import Content from '../../components/SignInCard/Content';
import AppTheme from '../../shared-theme/AppTheme'; // ✅ Re-add AppThemeimport FormCustomizations from '../../shared-theme/FormCustomization';
import formCustomizations from '../../shared-theme/formCustomization'; // ✅ Re-add FormCustomizations

const xThemeComponents = {
  ...formCustomizations,
};

export default function HomePage() {
  return (
    <AppTheme themeComponents={xThemeComponents}> {/* ✅ Wrap with AppTheme */}
      <CssBaseline enableColorScheme />
      <Stack
        direction="column"
        component="main"
        sx={[
          {
            justifyContent: 'center',
            height: '100vh',
            minHeight: '100%',
          },
          (theme) => ({
            '&::before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              zIndex: -1,
              inset: 0,
              backgroundImage:
                'radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))',
              backgroundRepeat: 'no-repeat',
              ...theme.applyStyles?.('dark', {
                backgroundImage:
                  'radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))',
              }),
            },
          }),
        ]}
      >
        <Stack
          direction={{ xs: 'column-reverse', md: 'row' }}
          sx={{
            justifyContent: 'center',
            gap: { xs: 6, sm: 12 },
            p: 2,
            mx: 'auto',
          }}
        >
          <Content />
          <SignInCard />
        </Stack>
      </Stack>
    </AppTheme>
  );
}
