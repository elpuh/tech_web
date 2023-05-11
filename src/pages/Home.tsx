import React, {useEffect} from 'react';
import {useRootStore} from "../mst/RootStore.store";
import ProductCard from "../components/ProductCard";
import {observer} from "mobx-react";

const Home:React.FC = observer(() => {
    const {fetchProducts, products} = useRootStore()

    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <div
            style={{display: "flex", flexWrap: "wrap", justifyContent: "center", padding: 50}}
        >
            {products.length === 0 ? (
                <div>No products</div>
            ) : (
                products.map((item) => {
                    return (
                        <ProductCard key={item.id} item={item}/>
                    )
                })
            )
            }
        </div>
    );
});

export default Home;