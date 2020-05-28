export default ({ store, route, redirect }) => {

    const user = store.state.users.user;

    //Bloquear as routes do dashboard se tiver loggedout
    const blockedRoute = /\/dashboard\/*/g;

    //Se tentar ir para as routes do dashboard tem de fazer login
    if (!user && route.path.match(blockedRoute)) {
        redirect('/login');
    }


    //Bloquear outras routes se tiver loggedin
    const homeRoute = '/'
    const aboutRoute = '/about'
    const servicesRoute = '/services'
    const blogRoute = '/blog'
    const contactRoute = '/contact'

    //Se o user tentar ir a outras routes é redirecionado para o dashboard(se tiver loggedin)
    if (user && route.path === homeRoute) {
        redirect('/dashboard/Index')
    }

    if (user && route.path === aboutRoute) {
        redirect('/dashboard/Index')
    }

    if (user && route.path === servicesRoute) {
        redirect('/dashboard/Index')
    }

    if (user && route.path === blogRoute) {
        redirect('/dashboard/Index')
    }

    if (user && route.path === contactRoute) {
        redirect('/dashboard/Index')
    }



    //Bloquear EN outras routes se tiver loggedin
    const homeEnRoute = '/en/'
    const aboutEnRoute = '/en/about'
    const servicesEnRoute = '/en/services'
    const blogEnRoute = '/en/blog'
    const contactEnRoute = '/en/contact'

    //Se o user tentar ir as EN routes é redirecionado para o dashboard(se tiver loggedin)
    if (user && route.path === homeEnRoute) {
        redirect('/dashboard/Index')
    }

    if (user && route.path === aboutEnRoute) {
        redirect('/dashboard/Index')
    }

    if (user && route.path === servicesEnRoute) {
        redirect('/dashboard/Index')
    }

    if (user && route.path === blogEnRoute) {
        redirect('/dashboard/Index')
    }

    if (user && route.path === contactEnRoute) {
        redirect('/dashboard/Index')
    }
}
