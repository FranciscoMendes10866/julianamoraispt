import JWTDecode from 'jwt-decode';
import cookieparser from 'cookieparser';

export const actions = {
    nuxtServerInit({ commit }, { req }) {
        if (process.server && process.static) return;
        if (!req.headers.cookie) return;

        const parsed = cookieparser.parse(req.headers.cookie);
        const accessTokenCookie = parsed.access_token;

        if (!accessTokenCookie) return;

        const decoded = JWTDecode(accessTokenCookie);

        if (decoded) {
            commit('users/SET_USER', {
                uid: decoded.user_id,
                email: decoded.email
            });
        }
    }
};


//Locale state (vue-i18n)
export const state = () => ({
  locales: ['pt', 'en'],
  locale: 'pt'
})

export const mutations = {
  SET_LANG (state, locale) {
    if (state.locales.includes(locale)) {
      state.locale = locale
    }
  }
}

  