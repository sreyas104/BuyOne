import React, { useState, useEffect } from 'react';
import ProductList from '../../Components/ProductLists/ProductList';
import { Button } from 'react-bootstrap';

function HomeProducts() {
    const [scrollCount, setScrollCount] = useState(0);
    const [productCount, setProductCount] = useState(2); // Initial number of products
    const [showMore, setShowMore] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrollCount((prevCount) => prevCount + 1);

            // Determine when to load more products
            if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 200) {
                setShowMore(true);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const loadMore = () => {
        setProductCount((prevCount) => prevCount + 2); // Load 2 more products
    };

    // Generate the list of ProductList components
    const productLists = Array.from({ length: productCount }).map((_, index) => (
        <div key={index}>
            <ProductList />
        </div>
    ));

    return (
        <div>
            {productLists}
            {showMore && (
                <Button className='m-4' style={{ position: "fixed", bottom: "0", right: "0" }} variant='primary' onClick={loadMore}>Load More</Button>
            )}
        </div>
    );
}

export default HomeProducts;
