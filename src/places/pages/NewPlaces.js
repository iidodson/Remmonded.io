import React from "react";
import Input from "../../shared/FormElements/Input";
import { VALIDATOR_REQUIRE } from "../../shared/Utilites/Validators"

function NewPlaces() {
  return (
    <div className="container">
      <form className="place-form">
        <Input
          element="input"
          type="text"
          label="Title"
          errorText="Please enter a valid title."
          validators={[VALIDATOR_REQUIRE()]}
        />
      </form>
    </div>
  );
}

export default NewPlaces;
