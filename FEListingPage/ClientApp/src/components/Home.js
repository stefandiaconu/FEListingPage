import React, { Component, useState, useEffect } from 'react';
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns"
import "./Home.css"
import localData from './data/example-payload.json';

console.log(localData.item.products);

function FetchedData() {
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch(
            "https://api.github.com/users/stefandiaconu"
            //"https://spanishinquisition.victorianplumbing.co.uk/interviews/listings?apikey=yj2bV48J40KsBpIMLvrZZ1j1KwxN4u3A83H8IBvI"
        ).then(response => response.json())
         .then(setData);
    }, []);
    if (data)
        console.log(data.login);
    if (data)
        return (
            <div>
                <h1>{data.login}</h1>
            </div>
            
            );
}

export class Home extends Component {
    static displayName = Home.name;

    render() {
        let images = [];
        for (var i = 0; i < localData.item.products.length; i++) {
            images.push(<img src={localData.item.products[i].image.url} height="auto" width="100%" alt={localData.item.products[i].defaultCategory.name } />);
        }
        const divstyle = {
            margin: 100,
            width: 250
        };

        const sortList: { [key: string]: Object }[] = [
            { Id: 1, Text: "Recommended" },
            { Id: 2, Text: "PriceLowToHight" },
            { Id: 3, Text: "PriceHighToLow" },
            { Id: 4, Text: "LargestDiscount" }
        ];

        return (
            <div>
                <FetchedData />
                <div style={divstyle}>
                    <DropDownListComponent
                        dataSource={sortList}
                        fields={{ value: "Id", text: "Text" }}
                        placeholder="Sort by"></DropDownListComponent>
                </div>
                <div className="p-1 m-1 border flex justify-center" style={{columnCount:3}}>
                    {images}
                </div>
            </div>
    );
  }
}
