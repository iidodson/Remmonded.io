import React from 'react';
import Input from "../../shared/FormElements/Input"

function NewPlaces() {
    return (
        <form className="place-form">
        <Input type="text" label="Title"/>
        </form>
    );
}

export default NewPlaces;