import React, { useState, useEffect, useReducer, useCallback } from 'react';
import useSemiPersistentState from './components/hooks/useSemiPersistentState';
import storiesReducer from './components/reducers/storiesReducer';
import SearchForm from './components/ui/SearchForm';
import List from './components/ui/List';
import axios from 'axios';
import { Story } from './components/types';

import './App.css';

const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?query=';

const App = () => {
	const [searchTerm, setSearchTerm] = useSemiPersistentState('search', 'React');

	const [url, setUrl] = useState(`${API_ENDPOINT}${searchTerm}`);

	const [stories, dispatchStories] = useReducer(storiesReducer, {
		data: [],
		isLoading: false,
		isError: false,
	});

	const handleFetchStories = useCallback(async () => {
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

	useEffect(() => {
		handleFetchStories();
	}, [handleFetchStories]);

	const handleRemoveStory = (item: Story) => {
		dispatchStories({
			type: 'REMOVE_STORY',
			payload: item,
		});
	};

	const handleSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(event.target.value);
	};

	const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		setUrl(`${API_ENDPOINT}${searchTerm}`);

		event.preventDefault();
	};

	return (
		<div className='container'>
			<h1 className='headline-primary'>My Hacker Stories</h1>

			<SearchForm
				searchTerm={searchTerm}
				onSearchInput={handleSearchInput}
				onSearchSubmit={handleSearchSubmit}
			/>

			{stories.isError && <p>Something went wrong ...</p>}

			{stories.isLoading ? (
				<p>Loading ...</p>
			) : (
				<List list={stories.data} onRemoveItem={handleRemoveStory} />
			)}
		</div>
	);
};

export default App;
