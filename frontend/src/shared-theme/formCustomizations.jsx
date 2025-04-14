// src/shared-theme/FormCustomization.js

const formCustomizations = {
    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: '#f5f5f5',
          borderRadius: 4,
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'gray',
            },
            '&:hover fieldset': {
              borderColor: 'darkgray',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'gray',
            },
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: '#000',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#333',
          },
        },
      },
    },
  };
  
  export default formCustomizations;
  