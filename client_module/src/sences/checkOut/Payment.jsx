import React from "react";
import { Box, Typography, TextField } from "@mui/material";

const Payment = ({ values, errors, touched, handleChange, handleBlur }) => {
  return (
    <>
      <Box m="30px 0">
        <Box>
          <Typography sx={{ mb: "15px" }} fontSize="18px">
            Contact Info
          </Typography>

          {/* Text field for Email */}
          <TextField
            label="Email"
            fullWidth
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.email}
            name="email"
            error={!!touched.email && !!errors.email}
            helperText={touched.email && errors.email}
            sx={{ gridColumn: "span 4", marginBottom: "15px" }}
          />

          {/* Text field for Phone number */}
          <TextField
            label="Phone Number"
            fullWidth
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.phoneNumber}
            name="phoneNumber"
            error={!!touched.phoneNumber && !!errors.phoneNumber}
            helperText={touched.phoneNumber && errors.phoneNumber}
            sx={{ gridColumn: "span 4", marginBottom: "15px" }}
          />

        </Box>
      </Box>
    </>
  );
};

export default Payment;
