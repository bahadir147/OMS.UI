declare const $: any;
export class ToastMessage {
    static instance: ToastMessage;

    static getInstance() {
        if (ToastMessage.instance == null) {
            ToastMessage.instance = new ToastMessage();
        }
        return ToastMessage.instance;
    }

    showToast(from, align, type, message) {
        $.notify({
            message: message,
        }, {
                placement: { from, align },
                offset: { x: 20, y: 35 },
                type,
                template: `<div class="alert alert-{0} alert-with-icon col-md-4">
                <i class="material-icons alert-icon">notifications</i>
                <button class="close" type="button" data-dismiss="alert" aria-label="Close"><i class="material-icons">close</i></button>
                <span>{2}</span>
              </div>`
            });
    }
}
