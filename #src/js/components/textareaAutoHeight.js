export function textareaAutoHeight(el) {
    const textarea = document.querySelector(el);

    if(textarea) {
        textarea.addEventListener('keyup', function() {
            if(this.scrollTop > 0) {
                this.style.height = this.scrollHeight + 'px';
            }
        });
    }
}