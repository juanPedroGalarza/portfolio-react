import { styled } from "@mui/material";

const ContactStyled = styled("form")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: ".5rem",
  width: "100%",
  maxWidth: 1000,
  gap: 20,
  "@media (max-width: 1440px)": {
    maxWidth: 700
  },
  "@media (max-width: 1024px)": {
    maxWidth: 500
  },
}));

export default ContactStyled;