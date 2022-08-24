export type TSortItem = {
	id: number;
	name: string;
	value: string;
	order: string;
};

export type TPageItem = {
	id: number;
	name: string;
};

export const pages: TPageItem[] = [
	{
		id: 1,
		name: 'Rock & Roll',
	},
	{
		id: 2,
		name: 'Hip Hop',
	},
];

export const sorts: TSortItem[] = [
	{
		id: 1,
		name: 'популярные',
		value: 'rating',
		order: 'desc',
	},
	{
		id: 2,
		name: 'сначала дорогие',
		value: 'price',
		order: 'desc',
	},
	{
		id: 3,
		name: 'сначала дешёвые',
		value: 'price',
		order: 'asc',
	},
	{
		id: 4,
		name: 'от А до Я',
		value: 'name',
		order: 'asc',
	},
	{
		id: 5,
		name: 'от Я до А',
		value: 'name',
		order: 'desc',
	},
];
