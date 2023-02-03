import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import React from 'react';
import './App.css';
import Footer from "./components/fragments/footer";
import Navigation from "./components/fragments/navigation";

function App() {
  return (
      <Router>
        <div>
          <Navigation  />
          {/*<Routes>*/}
          {/*  <Route exact path="/login"  render={(props) => (<LoginForm />)} element={<LoginForm handleLogin={handleLogin} />} />*/}

          {/*  <Route exact path="/" element={<MainContent />} />*/}
          {/*  <Route exact path="/ProductModel" element={<ProductModelList />} />*/}
          {/*  <Route exact path="/ProductModel/details/:IDproduct" element={< ProductModelDetails />  } />*/}
          {/*  <Route exact path="/ProductModel/add" element={< ProductModelForm />  } />*/}
          {/*  <Route exact path="/ProductModel/edit/:IDproduct" element={< ProductModelForm />  } />*/}

          {/*  <Route exact path="/Order" element={<OrderList />} />*/}
          {/*  <Route exact path="/Order/add" element={<OrderForm />} />*/}
          {/*  <Route exact path="/Order/edit/:IDorder" element={<OrderForm />} />*/}
          {/*  <Route exact path="/Order/details/:IDorder" element={<OrderDetails />} />*/}

          {/*  <Route exact path="/OrderedProducts" element={<OrderedProductsList />} />*/}
          {/*  <Route exact path="/OrderedProducts/add" element={<OrderedProductsForm />} />*/}
          {/*  <Route exact path="/OrderedProducts/edit/:IDordered" element={<OrderedProductsForm />} />*/}
          {/*  <Route exact path="/OrderedProducts/details/:IDordered" element={< OrderedProductsDetails />  } />*/}
          {/*</Routes>*/}
          <Footer />
        </div>
      </Router>
  );
}

export default App;
