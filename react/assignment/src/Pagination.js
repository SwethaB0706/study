import React, { useState , useEffect} from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  CircularProgress,
} from "@mui/material";

const PaginatedTable = () => {
  // Sample data for the table
 

  const [rows, setRows] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [ageRange, setAgeRange] = useState("all");
  const [loading, setLoading] = useState(true);

  //  // Fetch data from the Random User API
  //  useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       setLoading(true);
  //       const response = await fetch("https://randomuser.me/api/?results=20");
  //       const data = await response.json();
  //       // Transform the data to match our table structure
  //       const transformedData = data.results.map((user, index) => ({
  //         id: index + 1,
  //         name: `${user.name.first} ${user.name.last}`,
  //         age: user.dob.age,
  //         email: user.email,
  //       }));
  //       setRows(transformedData);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, []);


  // Fetch data from the backend API
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch("http://localhost:8080/api/page");
        const data = await response.json();
        const transformedData = data.map((item) => ({
          id: item.id,
          name: item.name,
          age: item.age,
          email: item.email,
        }));
        setRows(transformedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Handle page change
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  // Handle rows per page change
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

    // Handle age range change
    const handleAgeRangeChange = (event) => {
      setAgeRange(event.target.value);
      setPage(0); // Reset to the first page when filtering
    };


  // Filter rows based on the selected age range
  const filterRowsByAge = (rows) => {
    if (ageRange === "all") return rows;
    const [minAge, maxAge] = ageRange.split("-").map(Number);
    return rows.filter((row) => row.age >= minAge && row.age <= maxAge);
  };

  // Get filtered and paginated rows
  const filteredRows = filterRowsByAge(rows);
  const paginatedRows = filteredRows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <Paper sx={{ padding: 1, boxShadow: 6 }}>
      {/* Age Range Filter Dropdown */}
      <FormControl sx={{ marginBottom: 2, minWidth: 100, left:"700px"}}>
        <InputLabel>Age Range</InputLabel>
        <Select value={ageRange} onChange={handleAgeRangeChange} label="Age Range">
          <MenuItem value="all" sx={{fontFamily : "cursive"}}>All Ages</MenuItem>
          <MenuItem value={"20-30"}>20-30</MenuItem>
          <MenuItem value="31-40">31-40</MenuItem>
          <MenuItem value="41-50">41-50</MenuItem>
          <MenuItem value="51-60">51-60</MenuItem>
          <MenuItem value="61-70">61-70</MenuItem>
        </Select>
      </FormControl>
      {loading ? (
        <CircularProgress sx = {{color:"red"}}/>
      ) : (
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" , fontFamily : "cursive" }}>ID</TableCell>
              <TableCell sx={{ fontWeight: "bold" , fontFamily : "cursive"}}>Name</TableCell>
              <TableCell sx={{ fontWeight: "bold" , fontFamily : "cursive"}}>Age</TableCell>
              <TableCell sx={{ fontWeight: "bold" , fontFamily : "cursive"}}>Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedRows.map((row,index) => (
              <TableRow key={row.id}
              sx={{
                backgroundColor: index % 2 === 0 ? "#f9f9f9" : "#ffffff",
                "&:hover": { backgroundColor: "#f1f1f1" },
              }}>
                <TableCell sx={{fontFamily : "cursive"}}>{row.id}</TableCell>
                <TableCell sx={{fontFamily : "cursive"}}>{row.name}</TableCell>
                <TableCell sx={{fontFamily : "cursive"}}>{row.age}</TableCell>
                <TableCell sx={{fontFamily : "cursive"}}>{row.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table> 
      </TableContainer>
      )}
      <TablePagination
        component="div"
        count={rows.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        rowsPerPageOptions={[5, 10, 15, 20]}
        labelRowsPerPage="Rows per page"
      />
    </Paper>
  );
};

export default PaginatedTable;
