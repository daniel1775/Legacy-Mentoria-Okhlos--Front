import Swal from 'sweetalert'

 const ModalAlert = function success(title,text,icon) {
    Swal(
        title,
        text,
        icon //success error warning
    )
}

export default ModalAlert