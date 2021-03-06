const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const insertColor = require('./routes/insertColor');
const insertPattern = require('./routes/insertPattern');
const insertFigure = require('./routes/insertFigure');
const insertProduct = require('./routes/insertProduct');
const insertOrder = require('./routes/insertOrder');
const insertOrderDetail = require('./routes/insertOrderDetail');
const insertProductList = require('./routes/insertProductList');
const updateColor = require('./routes/updateColor');
const updatePattern = require('./routes/updatePattern');
const updateFigure = require('./routes/updateFigure');
const updateProduct = require('./routes/updateProduct');
const updateOrder = require('./routes/updateOrder');
const updateOrderDetail = require('./routes/updateOrderDetail');
const updateProductList = require('./routes/updateProductList');
const deleteColor = require('./routes/deleteColor');
const deleteFigure = require('./routes/deleteFigure');
const deletePattern = require('./routes/deletePattern');
const deleteProduct = require('./routes/deleteProduct');
const deleteOrder = require('./routes/deleteOrder');
const deleteOrderDetail = require('./routes/deleteOrderDetail');
const deleteProductList = require('./routes/deleteProductList');
const selectColor = require('./routes/selectColor');
const selectPattern = require('./routes/selectPattern');
const selectFigure = require('./routes/selectFigure');
const selectProductlist = require('./routes/selectProductlist');
const selectOrderDetail = require('./routes/selectOrderDetail');
const selectOrder = require('./routes/selectOrder');

app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);

app.get("/", (req, res) => {
    res.json({ message: "ok" });
});

app.use("/insert-Color", insertColor);
app.use("/insert-Pattern", insertPattern);
app.use("/insert-Figure", insertFigure);
app.use("/insert-Product", insertProduct);
app.use("/insert-Order", insertOrder);
app.use("/insert-OrderDetail", insertOrderDetail);
app.use("/insert-ProductList", insertProductList);
app.use("/update-Color", updateColor);
app.use("/update-Pattern", updatePattern);
app.use("/update-Figure", updateFigure);
app.use("/update-Product", updateProduct);
app.use("/update-Order", updateOrder);
app.use("/update-OrderDetail", updateOrderDetail);
app.use("/update-ProductList", updateProductList);
app.use("/delete-Color", deleteColor);
app.use("/delete-Figure", deleteFigure);
app.use("/delete-Pattern", deletePattern);
app.use("/delete-Product", deleteProduct);
app.use("/delete-Order", deleteOrder);
app.use("/delete-OrderDetail", deleteOrderDetail);
app.use("/delete-ProductList", deleteProductList);
app.use("/select-Color", selectColor);
app.use("/select-Pattern", selectPattern);
app.use("/select-Figure", selectFigure);
app.use("/select-Productlist", selectProductlist);
app.use("/select-OrderDetail", selectOrderDetail);
app.use("/select-Order", selectOrder);

app.listen(port, () => {
    console.log('Starting node.js at port '+ port);
});