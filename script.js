// Create and place the Form in the page
let container = document.createElement("div")
container.innerHTML = `
<form id="loginForm" action="javascript:loginFinish()">
    <h2>Log In</h2>
    <input type="text" id="email" placeholder="Email">
    <input type="password" id="passw" placeholder="Password">
    <input type="submit" id="loginInput" value="Log in">
    <a id="forgotLink" href="#">Forgot your password?</a>
    <div class="or"><hr/><span>or</span><hr/></div>
    <input type="submit" id="loginGoogle" value="Log in with Google">
    <input type="submit" id="loginFB" value="Log in with Facebook">
</form>`;
document.body.append(container);

// Find the Form
let loginForm =document.querySelector("#loginForm");

// Create the backing under a form
let backing = document.createElement("div");
backing.classList.add("backing");
document.body.prepend(backing);

function loginStart() {
    backing.style = "display:block;";
    document.body.style=`overflow: hidden; margin-right: ${getScrollbarWidth()}px;`;
    loginForm.style="display:block;";
};

function loginFinish() {
    backing.style = "display:none;";
    document.body.style="";
    loginForm.style="display:none;";
};

// Login Button
let btnLogin = document.querySelector("#login");
btnLogin.onclick = loginStart;

// Swith off the Form
backing.onclick = loginFinish;

// Scrollbar Width Calculation
function getScrollbarWidth() {
    const div = document.createElement('div');
    div.style.width = '100px';
    div.style.height = '100px';
    div.style.overflow = 'scroll';
    document.body.appendChild(div);
    const scrollbarWidth = div.offsetWidth - div.clientWidth;
    document.body.removeChild(div);
    return scrollbarWidth;
}