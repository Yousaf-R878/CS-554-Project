import React, { useState } from "react";
import NavbarExplore from "../../components/Navbar/NavbarExplore";
import PostCard from "@/src/components/PostCard/PostCard";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select } from "@/components/ui/select";

const Explore = () => {
    const [inputValue, setInputValue] = useState("");
    const [badges, setBadges] = useState([]);
    const [selectedSort, setSelectedSort] = useState("recent");

    // Function to handle the input change
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    // * This handles ENTER PRESS
    const handleInputKeyPress = (e) => {
        if (e.key === "Enter" && inputValue) {
            setBadges([...badges, inputValue]);
            setInputValue(""); 
        }
    };

    const handleSortChange = (e) => {
        setSelectedSort(e.target.value);
    };

    return (
        <>
            <NavbarExplore />
            <div className="container mx-auto p-4">
                <Input
                    placeholder="Search for dates!"
                    value={inputValue}
                    onChange={handleInputChange}
                    onKeyPress={handleInputKeyPress}
                />
                <div className="flex flex-wrap gap-2 my-4 ">
                    {badges.map((badge, index) => (
                        <Badge className="bg-palecyan " key={index}>{badge}</Badge>
                    ))}
                </div>
                <Select value={selectedSort} onChange={handleSortChange}>
                    <option value="recent">Recent</option>
                    <option value="popular">Popular</option>
                </Select>
                <div className="grid grid-cols-3 gap-4">                    <PostCard />
                    <PostCard />
                    <PostCard />
                </div>
            </div>
        </>
    );
};

export default Explore;
