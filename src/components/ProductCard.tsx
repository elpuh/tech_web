import React from 'react';
import {observer} from "mobx-react";
import {IProductModel} from "../mst/interfaces";
import {Card} from "antd";

const ProductCard:React.FC<{ item: IProductModel }> = observer(({item}) => {
    return (
        <Card
            title={item.title}
            hoverable
            style={{width: 240, margin: 20}}
            cover={<img alt="example" src={item.thumbnail}/>}
        >
            <div>{item.description}</div>
        </Card>
    );
});

export default ProductCard;