import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import Button from "@material-ui/core/Button";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import DeleteIcon from "@material-ui/icons/Delete";
import Fab from "@material-ui/core/Fab";

export const Cart = () => {
  const { cartItems, setCartItems } = useContext(CartContext);

  const clearCart = () => {
    setCartItems([]);
  };

  const removeFromCart = idx => {
    setCartItems(cartItems.filter((_, i) => i !== idx));
  };

  return (
    <>
      <h4>Items in cart</h4>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Price</TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {cartItems.map((item, idx) => (
            <TableRow key={idx}>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.price} Ft</TableCell>
              <TableCell>
                <Fab
                  size="small"
                  color="secondary"
                  aria-label="Delete"
                  onClick={() => {
                    removeFromCart(idx);
                  }}
                >
                  <DeleteIcon />
                </Fab>
              </TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell variant="head">Total ({cartItems.length})</TableCell>
            <TableCell>
              {cartItems
                .map(item => item.price)
                .reduce((acc, curr) => acc + curr, 0)}{" "}
              Ft
            </TableCell>
            <TableCell />
          </TableRow>
        </TableBody>
      </Table>
      <Button variant="contained" color="secondary" onClick={clearCart}>
        Empty Cart
        <DeleteIcon />
      </Button>
    </>
  );
};
