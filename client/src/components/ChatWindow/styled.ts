import { styled } from '@mui/material/styles';

export const Container = styled('div')(({ theme }) => ({
  width: '90%',
  maxWidth: '90%',
  minHeight: '100vh',
  padding: '1rem',
  paddingTop: '5rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  color: theme.palette.mode === 'dark' ? 'white' : 'black',

}));

export const MessageWrapper = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  alignItems: 'flex-start',
  justifyContent: 'center',
  gap: '2rem',
  marginBottom: '1rem',
  overflowWrap: 'break-word',
  wordBreak: 'break-word',

  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',    
    alignItems: 'center',
    padding: '1 .5rem',
  },
}));


export const ChatForm = styled('form')(({ theme }) => ({
  width: '100%',
  maxWidth: '800px',
  padding: '1rem',
  display: 'flex',
  flexWrap: 'wrap',        
  gap: '0.5rem',
  justifyContent: 'center',

  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'stretch',
  },
}));

export const Message = styled('div')({
  fontSize: '1.25rem',
  minHeight: '2rem',
  maxWidth: '600px',
  textAlign: 'left'
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

export const ResponsiveImage = styled('img')(({ theme }) => ({
  width: '100%',
  maxWidth: '500px',
  height: 'auto',
  borderRadius: '8px',
  boxShadow: '0 0 10px rgba(255, 255, 255, 0.2)',
  objectFit: 'cover',
  display: 'block',
  margin: '1rem 0',

  [theme.breakpoints.down('sm')]: {
    maxWidth: '100%',
  },
}));

