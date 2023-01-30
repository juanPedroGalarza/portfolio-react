import { Box, Button, Grid, TextField, Typography } from "@mui/material"
import React from "react"
import ContactStyled from "./StyledComponents/ContactStyled"

export default function Contact() {
  return (
    <Box>
      <Typography variant="h4" paragraph>Contact me</Typography>
      <ContactStyled
        id="contact"
        action="https://getform.io/f/80033bce-5a64-4bc0-9ddc-4eb995407b9f"
        method="post"
      >
        <Grid container spacing={4}>
          <Grid item xs={12} sm={10} md={8} lg={6} xl={5}>
            <TextField
              required
              id="name-form-contact"
              label="Name"
              variant="outlined"
              fullWidth
              name="name"
            />
          </Grid>
          <Grid item xs={12} sm={10} md={8} lg={6} xl={5}>
            <TextField
              required
              id="email-form-contact"
              label="Email"
              variant="outlined"
              fullWidth
              type="email"
              name="email"
            />
          </Grid>
        </Grid>
        <TextField
          required
          id="message-form-contact"
          label="Message"
          variant="outlined"
          fullWidth
          multiline
          minRows={7}
          maxRows={7}
          name="message"
        />
        <Button type="submit" color="success" variant="outlined"
        >Send</Button>
      </ContactStyled>
    </Box>
  )
}