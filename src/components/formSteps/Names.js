import React from 'react'
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const Names = ({formData, setFormData, navigation}) => {
    const { firstName, lastName, nickName } = formData;
    return (
        <Container maxWidth="xs">
        <h3>Names</h3>
        <TextField
          label="First Name"
          name="firstName"
          value={firstName}
          onChange={setFormData}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullWidth
        />
        <TextField
          label="Last Name"
          name="lastName"
          value={lastName}
          onChange={setFormData}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullWidth
        />
        <TextField
          label="Nick Name"
          name="nickName"
          value={nickName}
          onChange={setFormData}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullWidth
        />
        <Button
          variant="contained"
          fullWidth
          color="primary"
          style={{ marginTop: "1rem" }}
          onClick={() => navigation.next()}
        >
          Next
        </Button>
      </Container>
    )
}

export default Names
