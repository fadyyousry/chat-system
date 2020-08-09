class Auth {
  static myInstance = null;

  constructor() {
    this.cookie = 'login';
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
    this.store = JSON.parse(localStorage.getItem(this.cookie));
  }

  jwt() {
    if (this.authed) return this.store.token;
  }

  email() {
    if (this.authed) return this.store.email;
  }

  id() {
    if (this.authed) return this.store.userId;
  }

  login(store, callback=() => {}) {
    this.authed = true;
    localStorage.setItem(this.cookie, JSON.stringify(store));
    this.reload();
    callback();
  }

  logout(callback=() => {}) {
    this.authed = false;
    localStorage.removeItem(this.cookie);
    callback();
  }

  isAuth() {
    return this.authed;
  }
}

export default Auth.getInstance();
