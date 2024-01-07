import { v4 } from 'uuid';

export const cards = [
	{
		id: v4(),
		img: './public/images 3/image-colton.jpg',
		name: 'Colton Smith',
		verified: 'Verified Buyer',
		description:
			'“ We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent! ”',
		$gridColumn: '1/3',
		$gridRow: '1/2'
	},
	{
		id: v4(),
		img: './public/images 3/image-irene.jpg',
		name: 'Irene Roberts',
		verified: 'Verified Buyer',
		description:
			'“ Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery.”',
		$gridColumn: '2/3',
		$gridRow: '2/3'
	},
	{
		id: v4(),
		img: './public/images 3/image-anne.jpg',
		name: 'Anne Wallace',
		verified: 'Verified Buyer',
		description:
			'“ Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone! ”',
		$gridColumn: '3/3',
		$gridRow: '3/3'
	}
];
