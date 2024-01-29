function setup() {
    return {
        showModal: false,
        title: '',
        content: '',

        handleModalEvent(e) {
            this.title = e.detail.title;
            this.content = e.detail.content;

            this.showModal = true;
        }
    }
}

function formData() {
    return {
        title: '',
        content: '',
        
        submit() {
            modalEvent = new CustomEvent(
                'modal',
                {
                    detail: {
                        'title' : this.title,
                        'content': this.content
                    }
                }
            );

            window.dispatchEvent(modalEvent);
        }
    }
}
