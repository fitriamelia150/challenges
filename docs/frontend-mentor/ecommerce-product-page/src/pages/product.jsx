import ProductImagesLayout from "../components/Layouts/ProductImagesLayout"
import ProductDetail from "../components/Fragments/ProductDetail"

const data = {
    title: "fall limited edition sneakers",
    price: 125.00,
    description: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they`ll withstand everything the weather can offer.",
    discount: 50,
    discountPrice: 250.00
}

const ProductPage = () => {

    return (
        <div className="flex flex-col items-center justify-center lg:flex-row lg:gap-32"> 
            <ProductImagesLayout/>
            <ProductDetail data={data}/>
        </div>
    )
}

export default ProductPage