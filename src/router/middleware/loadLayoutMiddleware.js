export async function loadLayoutMiddleware(route) {
    try {
        let layout = route.meta.layout
        let layoutComponent = await import(`../../layouts/${layout}.vue`)
        route.meta.layoutComponent = layoutComponent.default
    } catch (e) {
        console.error('Error occurred in processing of layouts: ', e)
        console.log('Mounted default layout App')
        let defaultLayout = 'App'
        let layoutComponent = await import(`../../layouts/${defaultLayout}.vue`)
        route.meta.layout = layoutComponent.default
    }
}