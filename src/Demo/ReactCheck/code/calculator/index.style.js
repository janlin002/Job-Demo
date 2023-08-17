import { Height } from "@material-ui/icons";
import { styled, Box } from "@mui/material";

export const StyledContainer = styled(Box)(()=>({
  margin: '30px',
  width: '300px',
  // height: '520px',
  border: '1px solid grey',
  borderRadius: '20px'
}))
export const StyledHeader = styled(Box)(()=>({
  marginTop: '10px',
  backgroundColor: 'grey',
  width: '250px',
  height: '100px',
  borderRadius: '20px',
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'flex-end',
  padding: '0 30px 10px',
}));

export const StyledContent = styled(Box)(()=>({
  width: '80px',
  height: '80px',
  margin: '10px',
  borderRadius: '50%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  border: '1px solid black',

  '&.checked':{
    color: 'red'
  }
}))