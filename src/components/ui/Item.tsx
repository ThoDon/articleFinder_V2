import React from 'react';
import { ItemProps } from '../types';

const Item = ({ item, onRemoveItem }: ItemProps) => (
	<div className='item'>
		<span style={{ width: '40%' }}>
			<a href={item.url}>{item.title}</a>
		</span>
		<span style={{ width: '30%' }}>{item.author}</span>
		<span style={{ width: '10%' }}>{item.num_comments}</span>
		<span style={{ width: '10%' }}>{item.points}</span>
		<span style={{ width: '10%' }}>
			<button
				type='button'
				onClick={() => onRemoveItem(item)}
				className='button button_small'
			>
				Dismiss
			</button>
		</span>
	</div>
);

export default Item;
