import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableContainer, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core';
import { Link } from "react-router-dom";
import Loader from '../../components/Loader';
import RawMaterial from '../../build/RawMaterial.json';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function ViewRawMaterials(props) {
  const classes = useStyles();
  const { account, web3, supplyChain } = props;

  const [loading, setLoading] = useState(true);
  const [addresses, setAddresses] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const rawMaterialAddresses = await supplyChain.methods.getAllPackages().call({ from: account });
        const components = rawMaterialAddresses.map((addr) => (
          <TableRow key={addr}>
            <TableCell>
              <Link to={{
                pathname: `/supplier/view-raw-material/${addr}`,
                query: { address: addr, account, web3, supplyChain }
              }}>{addr}</Link>
            </TableCell>
          </TableRow>
        ));
        setAddresses(components);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching raw material addresses:', error);
        setLoading(false);
      }
    }

    fetchData();
  }, [account, web3, supplyChain]);

  if (loading) {
    return <Loader />; // Assuming Loader component handles loading state
  }

  return (
    <div>
      <h4>Raw Material addresses created by Supplier</h4>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Raw Material Address</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {addresses}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
