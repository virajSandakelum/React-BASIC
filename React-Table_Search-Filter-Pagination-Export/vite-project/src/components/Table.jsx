import { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';

const Table = () => {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedState, setSelectedState] = useState(''); 
    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage] = useState(5);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                const jsonData = await response.json();
                const dataWithRandomState = jsonData.map((item) => ({
                    ...item,
                    state: Math.random() < 0.5 ? 'check' : 'uncheck',
                }));
                setData(dataWithRandomState);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        const filteredResults = data.filter((item) => {
            const matchesSearchTerm = item.name.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesState = selectedState ? item.state.toLowerCase() === selectedState.toLowerCase() : true;
            return matchesSearchTerm && matchesState;
        });

        setFilteredData(filteredResults);
        setCurrentPage(0);
    }, [data, searchTerm, selectedState]);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleStateFilter = (event) => {
        setSelectedState(event.target.value);
    };

    const handlePageChange = ({ selected }) => {
        setCurrentPage(selected);
    };

    const offset = currentPage * itemsPerPage;
    const currentItems = filteredData.slice(offset, offset + itemsPerPage);

    return (
        <div>
            <input
                type="text"
                value={searchTerm}
                onChange={handleSearch}
                placeholder="Search..."
            />

            <select value={selectedState} onChange={handleStateFilter}>
                <option value="">All States</option>
                <option value="check">Check</option>
                <option value="uncheck">Uncheck</option>
            </select>

            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>State</th>
                    </tr>
                </thead>
                <tbody>
                    {currentItems.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.username}</td>
                            <td>{item.email}</td>
                            <td>{item.state}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <ReactPaginate
                previousLabel={'Previous'}
                nextLabel={'Next'}
                pageCount={Math.ceil(filteredData.length / itemsPerPage)}
                onPageChange={handlePageChange}
            />
        </div>
    );
};

export default Table;
