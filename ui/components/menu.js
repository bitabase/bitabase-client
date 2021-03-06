module.exports = function (app, html) {
  return html`
    <header>
      <div class="logo">
        <a href="/">
          <img class="logo-icon" src="/img/favicon.png" />
          <img class="logo-name" src="/img/logo-white.png" />
        </a>
      </div>
      <nav>
        <a href="/" class="${app.state.page === 'home' && 'active'}">>Home</a>
        <a href="/tutorial" class="${app.state.page === 'tutorial' && 'active'}">Tutorial</a>
        <a href="/databases">Your Databases</a>
        <a href="/pricing">Pricing</a>
        <a href="/community">Community</a>
        <a href=${app.config.docsUrl}>Docs</a>
        <a href=${app.config.blogUrl}>Blog</a>
        <a href="/support">Support</a>
      </nav>
      ${app.state.user
        ? html`
            <div class="user">
              <div>
                <strong>${app.state.user.email}</strong>
              </div>
              <div>
                <a href="/">Logout</a>,
                <a href="/account">My Account</a>
              </div>
            </div>
          `
        : html`
            <div class="user-buttons">
              <a href="/login" class="${app.state.page === 'login' && 'active'}">Login</a>
              <a href="/join" class="primary ${app.state.page === 'join' && 'active'}">Join</a>
            </div>
          `
      }
    </header>
  `;
};
