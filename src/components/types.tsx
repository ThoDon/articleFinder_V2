export type Story = {
	objectID: string;
	url: string;
	title: string;
	author: string;
	num_comments: number;
	points: number;
};

export type ItemProps = {
	item: Story;
	onRemoveItem: (item: Story) => void;
};

export type Stories = Array<Story>;

export type ListProps = {
	list: Stories;
	onRemoveItem: (item: Story) => void;
};

export type StoriesState = {
	data: Stories;
	isLoading: boolean;
	isError: boolean;
};

export interface StoriesFetchInitAction {
	type: 'STORIES_FETCH_INIT';
}

export interface StoriesFetchSuccessAction {
	type: 'STORIES_FETCH_SUCCESS';
	payload: Stories;
}

export interface StoriesFetchFailureAction {
	type: 'STORIES_FETCH_FAILURE';
}

export interface StoriesRemoveAction {
	type: 'REMOVE_STORY';
	payload: Story;
}

export type StoriesAction =
	| StoriesFetchInitAction
	| StoriesFetchSuccessAction
	| StoriesFetchFailureAction
	| StoriesRemoveAction;

export type SearchFormProps = {
	searchTerm: string;
	onSearchInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
	onSearchSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};

export type InputWithLabelProps = {
	id: string;
	value: string;
	type?: string;
	onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	isFocused?: boolean;
	children: React.ReactNode;
};
