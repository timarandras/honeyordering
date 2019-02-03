import React, { useState, useEffect, useContext } from "react";
import { CartContext } from "./CartContext";
import Button from "@material-ui/core/Button";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";

export const HoneyList = ({ addToCart }) => {
  const [honeys, setHoneys] = useState([]);
  const { cartItems, setCartItems } = useContext(CartContext);

  const fetchHoneys = async () => {
    try {
      const response = await fetch(
        "https://my-json-server.typicode.com/timarandras/restsandbox/honeys"
      );
      if (response.ok) {
        const honeys = await response.json();
        setHoneys(honeys);
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(
    () => {
      fetchHoneys();
    },
    [honeys]
  );

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Price</TableCell>
          <TableCell />
        </TableRow>
      </TableHead>
      <TableBody>
        {honeys.map(item => (
          <TableRow key={item.id}>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.price}</TableCell>
            <TableCell align="left">
              <Fab
                size="small"
                color="primary"
                aria-label="Add"
                onClick={() => {
                  setCartItems([...cartItems, item]);
                }}
              >
                <AddIcon />
              </Fab>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
