const service = 'https://jsonplaceholder.typicode.com/posts/';

const forms = document.querySelectorAll('.form');


const formSend = (data, callback, falseCb) => {
    const request = new XMLHttpRequest();
    request.open('POST', service);

    request.addEventListener('readystatechange', () => {
        if (request.readyState !== 4) return;
        if (request.status === 200 || request.status === 201) {
            const response = JSON.parse(request.responseText);
            callback(response.id);
        } else {
            falseCb(request.status);
            throw new Error(request.status);
        }
    });

    request.send(data);
};

const formHandle = (form) => {
    const subBtns = form.querySelectorAll('.button[type="submit"]');
    const smallElem = document.createElement('small');
    form.append(smallElem);

    form.addEventListener('submit', ev => {
        ev.preventDefault();

        let flag = true;

        const userData = {};

        for (const field of form.elements) { 
            const { name, value } = field;          
            if (name) {
                if (value.trim()) {
                    field.style.border = '';
                    userData[name] = value.trim();
                } else {
                    field.style.border = '1px solid red';
                    flag = false;
                    field.value = '';
                }
            }
        }

        if (!flag) {
            return smallElem.textContent = 'Fill in all the fields of the form!';
        }

        formSend(JSON.stringify(userData),
        (id) => {
            smallElem.innerHTML = 'Your order number' + id + '. <br> You will be contacted shortly!';
            smallElem.style.color = 'green';
            subBtns.forEach(btn => {
                btn.disabled = true;
            });

            setTimeout(() => {
                subBtns.forEach(btn => {
                    btn.disabled = false;
                });
                smallElem.textContent = '';
            }, 5000);
        },
        (err) => {
            smallElem.textContent = 'Error: ' + err.message;
            smallElem.style.color = 'red';
        });

        form.reset();
    });
};

forms.forEach(formHandle);
