import PropTypes from "prop-types";
import { Container, CardImage } from "./styles";
import { CartButton } from "../CartButton";

export function CardProduct({ product }) {
	console.log(product);
	return (
		<Container>
			<CardImage src={product.url} alt={product.name} />
			<div>
				<p>{product.name}</p>
				<strong>{product.price}</strong>
			</div>
			{/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
<CartButton></CartButton>
		</Container>
	);
}

CardProduct.propTypes = {
	product: PropTypes.object,
};
