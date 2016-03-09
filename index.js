import ReactDOM from "react-dom";
import React from "react";
import Bootstrap from "bootstrap/dist/css/bootstrap.css"
import { Input,ButtonInput } from "react-bootstrap";

const inputTypeInstance = (
    <form>
        <Input type="text" label="Text" placeholder="Enter text"/>
        <Input type="email" label="Email Address" placeholder="Enter email"/>
        <Input type="password" label="Password"/>
        <ButtonInput type="reset" value="Reset Button"/>
        <ButtonInput type="submit" value="Submit Button"/>
    </form>
);

ReactDOM.render(inputTypeInstance, document.getElementById("root"));