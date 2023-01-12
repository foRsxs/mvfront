import {fetchPost} from "./mvjs/fetchPost";

export function chat() {

    const csrf       = document.querySelector('meta[name="csrf-token"]').content;
    const btnChat    = document.getElementById('chat_btn');
    const _uniq      = document.getElementById('uniq');
    const msg        = document.getElementById('chat_msg');
    const chatWindow = document.querySelector('.lk-order__body_part-chat_body_list');

    if(btnChat && msg){

        if (chatWindow && chatWindow.hasChildNodes()){
            chatWindow.scrollTop = chatWindow.scrollHeight;
        }

        msg.onkeydown = function(event){
            if(event.key === 'Enter')
                sendMsg();
        }

        btnChat.addEventListener('click', ()=>{
           sendMsg();
        })

        function sendMsg() {
            if (msg.value){
                fetchPost('/order/message',JSON.stringify({ _token: csrf, message: msg.value, uniq: _uniq.value}), body => {

                    if (body && body.result){

                        if (body.viewmessage){
                            chatWindow.innerHTML += body.viewmessage;
                            msg.value = '';
                            chatWindow.scrollTop = chatWindow.scrollHeight;
                        }
                    }
                })
            }
        }
    }
}