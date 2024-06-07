import React from "react";
import Form from "../../forms/components/Form";
import ROUTES from "../../routes/routesModel";
import Input from "../../forms/components/Input";
import { Grid, FormControlLabel, Checkbox } from "@mui/material";

export default function SignupForm({
  onSubmit,
  onReset,
  validateForm,
  title,
  errors,
  data,
  onInputChange,
  handleChangeCheckBox,
}) {
  return (
    <Form
      onSubmit={onSubmit}
      onReset={onReset}
      validateForm={validateForm}
      title={title}
      styles={{ maxWidth: "800px" }}
      to={ROUTES.ROOT}
    >
      <Input
        name="first"
        label="first name"
        error={errors.first}
        onChange={onInputChange}
        data={data}
        sm={6}
      />
      <Input
        name="middle"
        label="Gamer name"
        error={errors.middle}
        onChange={onInputChange}
        data={data}
        sm={6}
        required={false}
      />
      <Input
        name="last"
        label="last name"
        error={errors.last}
        onChange={onInputChange}
        data={data}
        sm={6}
      />
      <Input
        name="phone"
        label="phone"
        type="phone"
        error={errors.phone}
        onChange={onInputChange}
        data={data}
        sm={6}
      />
      <Input
        name="email"
        label="email"
        type="email"
        error={errors.email}
        onChange={onInputChange}
        data={data}
        sm={6}
      />
      <Input
        name="password"
        label="password"
        type="password"
        error={errors.password}
        onChange={onInputChange}
        data={data}
        sm={6}
      />
      <Input
        name="url"
        label="image url"
        error={errors.url}
        onChange={onInputChange}
        data={data}
        sm={6}
        required={false}
      />
      <Input
        name="alt"
        label="image alt"
        error={errors.alt}
        onChange={onInputChange}
        data={data}
        sm={6}
        required={false}
      />
      <Input
        name="state"
        label="state"
        error={errors.state}
        onChange={onInputChange}
        data={data}
        sm={6}
        required={false}
      />
      <Input
        label="country"
        name="country"
        error={errors.country}
        onChange={onInputChange}
        data={data}
        sm={6}
      />
      <Input
        name="city"
        label="city"
        error={errors.city}
        onChange={onInputChange}
        data={data}
        sm={6}
      />
      <Input
        name="street"
        label="street"
        error={errors.street}
        onChange={onInputChange}
        data={data}
        sm={6}
      />
      <Input
        name="houseNumber"
        label="house Number"
        type="number"
        error={errors.houseNumber}
        onChange={onInputChange}
        data={data}
        sm={6}
      />
      <Input
        name="zip"
        label="zip"
        error={errors.zip}
        onChange={onInputChange}
        data={data}
        sm={6}
        required={false}
      />
      <Grid item>
        <FormControlLabel
          onChange={handleChangeCheckBox}
          name="isBusiness"
          control={<Checkbox value={data.isBusiness} color="primary" />}
          label="Signup as business"
        />
      </Grid>
    </Form>
  );
}