import { styled } from '@mui/material/styles';

export const Container = styled('div')(({ theme }) => ({
  width: '100%',
  maxWidth: '100%',
  justifyContent: 'flex-end', 
  padding: '1rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  color: theme.palette.mode === 'dark' ? 'white' : 'black',
}));

export const MessageWrapper = styled('div')({
  flex: 1,
  overflowY: 'auto',
  width: '100%',
  display: 'flex',
  paddingBottom: '6rem', 
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: '2rem',
  marginBottom: '1rem',
});

export const ChatForm = styled('form')({
  position: 'fixed',
  bottom: 80,
  left: 0,
  right: 0,
  width: '100%',
  maxWidth: '100%',
  padding: '1rem',
  boxSizing: 'border-box',
  zIndex: 10,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1rem',
});

export const Message = styled('div')({
  fontSize: '1.25rem',
  minHeight: '2rem',
});

export const Input = styled('textarea')(({ theme }) => ({
  padding: '0.75rem 1rem',
  fontSize: '1rem',
  width: '100%',
  minHeight: '4rem',
  maxWidth: '100%',
  borderRadius: '8px',
  border: '1px solid #ccc',
  resize: 'none',
  overflow: 'hidden',
  boxSizing: 'border-box',
  fontFamily: 'inherit',

  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem',
    minHeight: '5rem',
  },
}));

export const Button = styled('button')({
  padding: '0.75rem 1.5rem',
  fontSize: '1rem',
  borderRadius: '8px',
  border: 'none',
  backgroundColor: '#1976d2',
  color: 'white',
  cursor: 'pointer',
  marginTop: '0.5rem',
  transition: 'background-color 0.2s ease-in-out',

  '&:hover': {
    backgroundColor: '#1565c0',
  },

  '&:disabled': {
    backgroundColor: '#90caf9',
    cursor: 'not-allowed',
  },
});
