import React from "react";
import { Row, Col } from "react-bootstrap";
import FilterList from "../../components/FilterList";

import Header from "../../components/Header";
import Product from "../../components/Product";
import Spinner from "../../components/Spinner";
import { onlyUnique } from "../../utils/helper";

import { loadProducts } from "../../utils/service";

import "./style.scss";

function Home() {
  const [loading, setLoading] = React.useState(true);
  const [products, setProducts] = React.useState([]);

  const [categories, setCategories] = React.useState([]);
  const [selectedC, setSelectedC] = React.useState([]);

  const [brands, setBrands] = React.useState([]);
  const [selectedB, setSelectedB] = React.useState([]);

  const [filtered, setFiltered] = React.useState([]);

  React.useEffect(() => {
    setLoading(true);
    loadProducts()
      .then((res) => {
        setProducts(res.products);

        const categories = res.products
          .map((product) => product.category)
          .filter(onlyUnique);

        const brands = res.products
          .map((product) => product.brand)
          .filter(onlyUnique);

        setCategories(categories);
        setBrands(brands);
      })
      .finally(() => setLoading(false));
  }, []);

  React.useEffect(() => {
    let filteredProducts = products;

    if (selectedC.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>
        selectedC.includes(product.category)
      );
    }

    if (selectedB.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>
        selectedB.includes(product.brand)
      );
    }

    setFiltered(filteredProducts);
  }, [products, selectedC, selectedB]);

  return (
    <div>
      <Header />
      {loading ? (
        <Spinner />
      ) : (
        <Row>
          <Col md={2}>
            <div className="filters">
              <FilterList
                name="Category"
                items={categories}
                selected={selectedC}
                setSelected={setSelectedC}
              />

              <FilterList
                name="Brands"
                items={brands}
                selected={selectedB}
                setSelected={setSelectedB}
              />
            </div>
          </Col>
          <Col md={10}>
            <div className="grid">
              {filtered.map((product) => (
                <Product
                  key={product.productId}
                  imageUrl={product.searchImage}
                  productName={product.productName}
                  price={product.price}
                  brand={product.brand}
                />
              ))}
            </div>
          </Col>
        </Row>
      )}
    </div>
  );
}

export default Home;
