const users = [
    {
        id:1,
        email: 'test@test.ru',
        phone: '7784654732',
        password: '12345'
    }
]

const userPhone = document.querySelector('input[name="phone"]')
const userPhoneReg = document.querySelector('input[name="phoneReg"]')
const maskOptions = {
    mask: '+{7}(000)000-00-00'
};

let userPhoneRegMask = IMask(userPhoneReg, maskOptions);
let userPhoneMask = IMask(userPhone, maskOptions);

const login = () => {
    const userEmail = document.querySelector('input[name="email"]').value;
    const userPassword = document.querySelector('input[name="password"]').value;
    users.forEach(item => {
        if(item.email === userEmail && item.phone === userPhoneMask.unmaskedValue && item.password === userPassword){
            window.location = '/pages/app.html'
        }
    })
}

const reg = () => {
    const userEmail = document.querySelector('input[name="emailReg"]').value;
    const userPassword = document.querySelector('input[name="passwordReg"]').value;
    users.push(
        {id: 2,
                email: userEmail,
                phone: userPhoneRegMask.unmaskedValue,
                password: userPassword
    });
    console.log(userPhoneRegMask.unmaskedValue)
    document.getElementById('reg').classList.remove('open');
    document.getElementById('auth').classList.add('open');
}
const navigate = (form) => {
    document.querySelectorAll('form').forEach(item =>{
        item.classList.add('open');
    });
    form.parentNode.classList.remove('open');
}