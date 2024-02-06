import { renderToString } from 'vue/server-renderer'
import { createApp } from './main'
import {basename} from 'node:path'

export async function render(url) {
    const { app, router } = createApp()

    await router.push(url)
    await router.isReady()

    const ctx = {}
    const html = await renderToString(app, ctx)

    return {html}
}