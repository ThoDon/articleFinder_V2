import { useCallback } from 'react';
import axios from 'axios';

export const handleFetchStories = useCallback(async () => {
	dispatchStories({ type: 'STORIES_FETCH_INIT' });

	try {
		const result = await axios.get(url);

		dispatchStories({
			type: 'STORIES_FETCH_SUCCESS',
			payload: result.data.hits,
		});
	} catch {
		dispatchStories({ type: 'STORIES_FETCH_FAILURE' });
	}
}, [url]);
