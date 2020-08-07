class Auth {
  static myInstance = null;

  constructor() {
    this.reload();
    this.authed = this.store && this.store.login ? true : false;
  }

  static getInstance() {
    if (Auth.myInstance == null) {
        Auth.myInstance = new Auth();
    }
    return this.myInstance;
  }

  reload() {
    this.store = JSON.parse(localStorage.getItem('login'));
  }

  jwt() {
    this.reload();
    if (this.authed) return this.store.token;
  }

  userId() {
    this.reload();
    if (this.authed) return this.store.current_user_id;
  }

  login(callback=() => {}) {
    this.authed = true;
    callback();
  }

  logout(callback=() => {}) {
    this.authed = false;
    localStorage.removeItem('login');
    callback();
  }

  isAuth() {
    return this.authed;
  }
}

export default Auth.getInstance();
