import api from '$lib/axios.js';

export async function load() {
    const res = await api.get('/health');
    return {
        content: res.data
    };
}

export const prerender = false
export const ssr = false
export const csr = true