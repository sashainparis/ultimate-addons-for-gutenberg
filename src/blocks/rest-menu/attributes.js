/**
 * BLOCK: UAGB Section Attributes
 */

const ITEM_COUNT = 3

const testimonial_block = []

for (var i = 1; i <= ITEM_COUNT; i++) {
	var desc_text = "Lorem Ipsum is simply dummy text"
	var title_text    = "Manu Item "+i
	var price_text    = "$19"
	testimonial_block.push(
		{
			"description": desc_text,
			"title": title_text,
			"price": price_text,
			"image": "",
		}
	)
}

const attributes = {
	menu_item_count: {
		type: "number",
		default: ITEM_COUNT
	},
	test_block: {
		type: "array",
		default : testimonial_block,
	},	
	headingAlign: {
		type: "string",
		default: "center",
	},
	descColor: {
		type: "string",
		default: "#333"
	},
	priceColor: {
		type: "string",
		default: "#888888"		
	},	
	titleColor: {
		type: "string",
		default: "#333"		
	},		
	iconimgStyle: {
		type: "string",
		default: "circle"
	},	
	imagePosition:{
		type: "string",
		default: "bottom"
	},	
	imageAlignment:{
		type: "string",
		default: "top"
	},
	titleFontSize: {
		type: "number",
	},	
	priceFontSize: {
		type: "number",
	},
	descFontSize: {
		type: "number",
	},
	priceSpace: {
		type: "number",
		default : 5
	},	
	descSpace: {
		type: "number",
		default : 15
	},
	titleSpace :{
		type: "number",
		default: 5,
	},		
	block_id :{
		type : 'string',
		default : 'not_set'
	},	
	imgVrPadding :{
		type: "number",
		default: 10,
	},
	imgHrPadding :{
		type: "number",
		default: 10,
	},
	imgTopPadding :{
		type: "number",
		default: 10,
	},
	imgBottomPadding :{
		type: "number",
		default: 10,
	},
	iconImage: {
		type: "object",
		default:{
			'url': '',
			'alt': 'Menu placeholder img',
		}
	},
	imageSize:{
		type: 'string',
		default: 'thumbnail',
	},
	imageWidth :{
		type: "number",
		default: 60,
	},	
	columns :{
		type: "number",
		default: 1,
	},	
	tcolumns :{
		type: "number",
		default: 1,
	},	
	mcolumns :{
		type: "number",
		default: 1,
	},	
	rowGap: {
		type: "number",
		default : 10
	},
	columnGap: {
		type: "number",
		default : 10
	},	
	contentPadding: {
		type: "number",
		default : 5
	},	
	backgroundType: {
		type: "string",
	},
	backgroundImage: {
		type: "object",
	},
	backgroundPosition: {
		type: "string",
		default: "center-center"
	},
	backgroundSize: {
		type: "string",
		default: "cover"
	},
	backgroundRepeat: {
		type: "string",
		default: "no-repeat"
	},
	backgroundAttachment: {
		type: "string",
		default: "scroll"
	},
	backgroundColor:{
		type: "string"
	},
	backgroundImageColor: {
		type: "string"
	},
	borderStyle : {
		type: "string",
		default: "none"
	},
	borderWidth : {
		type: "number",
		default: "1"
	},
	borderRadius : {
		type: "number"
	},
	borderColor : {
		type: "string"
	},	
	backgroundOpacity:{
		type: "number",
		default: 0
	},
	arrowColor:{
		type: "string",
		default: "#333"
	},
	stack: {
		type: "string",
		default: "tablet"
	}
}

export default attributes
