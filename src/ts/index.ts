import { Modal } from "bootstrap";
//id: badModal
let myModal = document.getElementById("badModal") as unknown;

function callModal(): void {
    (myModal as Modal).show();
}