import React from 'react'
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const Address = ({ formData, setFormData, navigation }) => {
    const { address, city, state, zip } = formData;
    return (
        <Container maxWidth="xs">
        <h3>Address</h3>
        <TextField
          label="Address"
          name="address"
          value={address}
          onChange={setFormData}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullWidth
        />
        <TextField
          label="City"
          name="city"
          value={city}
          onChange={setFormData}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullWidth
        />
        <TextField
          label="State"
          name="state"
          value={state}
          onChange={setFormData}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullWidth
        />
        <TextField
          label="Zip"
          name="zip"
          type="number"
          value={zip}
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

export default Address
