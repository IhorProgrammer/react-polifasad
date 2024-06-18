import AuthAPI from "../../API/AuthAPI";
import "./AuthModal.scss";


export default function AuthModal() {

    function formSubmit(e) {
        e.preventDefault();
        const form = e.target;
        new AuthAPI().get(form.login.value, form.password.value).then((token) => {
            if( token == null ) {
                alert("Пароль або логін невірні");
                return;
            }
            localStorage.setItem("auth-token", token)
            window.location.href = "."; 

        });
    }
        

  return (
    <div className="container auth-modal-component">
            <form className="col s12" onSubmit={formSubmit}>
                <h1>Авторизація</h1>
                <div className="input-field col s12">
                    <input id="login" type="text" name="login" className="validate" placeholder="Login"/>
                    <label className="active" htmlFor="login">Login</label>
                </div>
                <div className="input-field col s12">
                    <input id="password" type="text" name="password" className="validate" placeholder="Password"/>
                    <label className="active" htmlFor="password">Password</label>
                </div>
                <button className="btn waves-effect waves-light red" type="submit" name="action">Авторизуватись
                </button>
            </form>
    </div>    
);
}
