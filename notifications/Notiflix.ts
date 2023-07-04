import Notiflix from "notiflix";
import Swal from "sweetalert2";

function Init() {
    Notiflix.Confirm.init({
        backgroundColor: "#020910",
        borderRadius: "5px",
        titleColor: "#fff",
        messageColor: "#000000",
        okButtonBackground: "#fc764e",
        cancelButtonBackground: "#fc683f",
    })

    Notiflix.Report.init({
        backgroundColor: "#020910",
        borderRadius: "5px",
        success: {
            titleColor: "#fff",
            messageColor: "#fff",
            buttonBackground: "#fc764e",
            buttonColor: "#fff",
        },
        failure: {
            titleColor: "#fff",
            messageColor: "#fff",
            buttonBackground: "#fc764e",
            buttonColor: "#fff",
        }
    });
}

const Confirm = Notiflix.Confirm
const Notify = Notiflix.Notify
const Report = Notiflix.Report

export {
    Confirm,
    Notify,
    Report,
    Swal,
    Init
}