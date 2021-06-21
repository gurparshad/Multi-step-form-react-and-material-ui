import React from 'react'
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const Contact = ({ formData, setFormData, navigation }) => {
    const { phone, email } = formData;
    return (
        <Container maxWidth="xs">
        <h3>Contact</h3>
        <TextField
          label="Phone"
          name="phone"
          value={phone}
          onChange={setFormData}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullWidth
        />
        <TextField
          label="E-Mail"
          name="email"
          value={email}
          onChange={setFormData}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullWidth
        />
        <div style={{ marginTop: "1rem" }}>
          <Button
            color="secondary"
            variant="contained"
            style={{ marginRight: "1rem" }}
            onClick={() => navigation.previous()}
          >
            Back
          </Button>
          <Button
            color="primary"
            variant="contained"
            onClick={() => navigation.next()}
          >
            Next
          </Button>
        </div>
      </Container>
    )
}

export default Contact
