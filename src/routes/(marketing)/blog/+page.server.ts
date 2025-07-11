import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import type { PostsResponse } from '$lib/types';

export const load = (async ({fetch}) => {
    const postRes = await fetch('/api/posts');
    if(!postRes.ok) {
        error(postRes.status, 'Failed to fetch posts');
    }
    return {
        title: "The Blog",
        description: 'Our blog posts',
        posts: (await postRes.json()) as PostsResponse,
        postType: Math.random() > 0.5 ? 1 : 2
    };
}) satisfies PageServerLoad;