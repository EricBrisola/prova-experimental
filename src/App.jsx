import { useState } from "react";
import "./App.css";

function App() {
  const [productsList, setProductsList] = useState([]);
  const [product, setProduct] = useState({
    productName: "",
    productDescription: "",
    productValue: "",
    isAvailable: false,
  });
  //   𝐂𝐚𝐝𝐚𝐬𝐭𝐫𝐨:

  // - Formulário com os campos abaixo:

  //   - Nome do produto - campo de texto
  //   - Descrição do produto - campo de texto
  //   - Valor do produto - campo de valor
  //   - Disponível para venda - campo com 2 opções: sim / não

  // 𝐋𝐢𝐬𝐭𝐚𝐠𝐞𝐦:

  // - Colunas da listagem: nome, valor
  // - Ordenação por valor do menor para o maior
  // - Quando cadastrar um novo produto é para abrir a listagem automaticamente
  // - Deve existir um botão para cadastrar um novo produto a partir da listagem

  const handleFormChange = (ev) => {
    const value =
      ev.target.type === "checkbox" ? ev.target.checked : ev.target.value;
    setProduct((prev) => ({
      ...prev,
      [ev.target.name]: value,
    }));
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();

    setProductsList((prev) => {
      const orderedByPrice = [...prev, product].sort(
        (a, b) => a.productValue - b.productValue
      );
      return orderedByPrice;
    });

    setProduct({
      productName: "",
      productDescription: "",
      productValue: "",
      isAvailable: false,
    });
  };
  console.log(productsList);
  return (
    <main className="app">
      <h1>Cadastro de produtos</h1>
      <section className="app-body">
        <form onSubmit={handleSubmit} className="productsForm">
          <h1>Novo produto</h1>
          <label htmlFor="productName">
            Nome:
            <input
              type="text"
              name="productName"
              id="productName"
              onChange={handleFormChange}
              value={product.productName}
              required
              className="typed-inputs"
            />
          </label>
          <label htmlFor="productDescription">
            Descrição:
            <textarea
              name="productDescription"
              cols="25"
              rows="5"
              id="productDescription"
              onChange={handleFormChange}
              value={product.productDescription}
              required
            ></textarea>
          </label>
          <label htmlFor="productValue">
            Valor:
            <input
              type="number"
              name="productValue"
              id="productValue"
              onChange={handleFormChange}
              value={product.productValue}
              required
              className="typed-inputs"
            />
          </label>
          <article className="checkboxes-section">
            <p>Disponível para venda ?</p>
            <div className="checkboxes">
              <label htmlFor="isAvailable">
                Sim
                <input
                  type="radio"
                  name="isAvailable"
                  id="isAvailable"
                  onChange={handleFormChange}
                  value={true}
                  required
                />
              </label>
              <label htmlFor="isNotAvailable">
                Não
                <input
                  type="radio"
                  name="isAvailable"
                  id="isNotAvailable"
                  onChange={handleFormChange}
                  value={false}
                />
              </label>
            </div>
          </article>
          <button>Cadastrar</button>
        </form>

        <section className="productsList">
          <h1 className="registered-products">Produtos cadastrados</h1>
          {productsList.length >= 1 ? (
            productsList.map((product, idx) => {
              return (
                <article key={idx} className="product">
                  <p>Nome: {product.productName}</p>
                  <p>Valor: R${product.productValue}</p>
                </article>
              );
            })
          ) : (
            <p>Nenhum produto cadastrado</p>
          )}
        </section>
      </section>
    </main>
  );
}

export default App;
