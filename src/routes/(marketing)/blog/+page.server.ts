import type { PageServerLoad } from './$types';

export const load = (async ({parent}) => {
    const parentData = await parent();
    return {
        title: "The Blog",
        count: 10,
        data: parentData.marketingLayoutData
    };
}) satisfies PageServerLoad;