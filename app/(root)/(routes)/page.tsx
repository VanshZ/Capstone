'use client';
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';
import Container from "@/components/ui/container";

const HomePage = () => {
    const router = useRouter();
    const [searchQuery, setSearchQuery] = useState('');
    const [realEstateData, setRealEstateData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSearch = async () => {
        setIsLoading(true);
        setError('');
        try {
            // Replace with your actual API call
            const response = await fetch(`https://api.zillow.com/your-endpoint?query=${searchQuery}`, {
                headers: {
                    // Your API key or authentication details
                    'Authorization': `Bearer ${process.env.RAPIDAPI_KEY}`,
                }
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            // Adjust this to match the structure of the data from Zillow
            setRealEstateData(data.properties);
        } catch (error) {
            setError('Failed to fetch real estate data');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Container>
            <input 
                type="text" 
                value={searchQuery} 
                onChange={(e) => setSearchQuery(e.target.value)} 
                placeholder="Enter a location"
            />
            <Button onClick={handleSearch}>Search</Button>
            {isLoading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {realEstateData && (
                <div>
                    {/* Adjust this to render your data as needed */}
                    {realEstateData.map((property, index) => (
                        <div key={index}>
                            <p>{property.address}</p>
                            {/* Add more property details here */}
                        </div>
                    ))}
                </div>
            )}
        </Container>
    );
};

export default HomePage;
