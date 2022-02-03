export function textareaAutoHeight(el) {
    const textarea = document.querySelector(el);

    textarea.addEventListener('keyup', function() {
        if(this.scrollTop > 0) {
            this.style.height = this.scrollHeight + 'px';
        }
    });
}