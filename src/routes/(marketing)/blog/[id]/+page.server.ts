import { error } from '@sveltejs/kit';
import type { Post, PostComment } from '$lib/types';

export const load = (async ({ params, fetch }) => {

    async function fetchPost() {
        const postRes = await fetch(`https://dummyjson.com/posts/${params.id}`);
        if (postRes.status !== 200){
            error(postRes.status, 'Failed to load post.');
        }
        const postResJSON: Post = await postRes.json();
        return postResJSON;
    }

    async function fetchComments() {
        const postCommentsRes = await fetch(`https://dummyjson.com/posts/${params.id}/comments`);
        const commentsArray: PostComment[] = postCommentsRes.ok ? (await postCommentsRes.json()).comments : [];
        return commentsArray;
    }

    const [post, comments] = await Promise.all([fetchPost(), fetchComments()]);

    return {
        post: post,
        comments: comments
    };
});