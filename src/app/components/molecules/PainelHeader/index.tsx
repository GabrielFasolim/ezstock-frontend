"use client";

import Button from "@/app/components/atoms/Button/DefaultButton";
import SmallButton from "@/app/components/atoms/Button/SmallButton";
import Input from "@/app/components/atoms/Input";
import FilterIcon from "../../../../../public/assets/icons/FilterIcon";
import SwapIcon from "../../../../../public/assets/icons/SwapIcon";
import { Search } from "lucide-react";

interface PainelHeaderProps {
    title: string;
    onAddClientClick: () => void;
    buttonText?: string;
    itemSearch: string;            
    setItemSearch: (value: string) => void;  
}

export default function PainelHeader({
    title,
    onAddClientClick,
    buttonText,
    itemSearch,            
    setItemSearch          
}: PainelHeaderProps) {

    return (
        <div className="w-full flex justify-between items-center mt-8">
            <h1 className="text-2xl font-bold text-primary-900 whitespace-nowrap">{title}</h1>

            <div className="flex gap-4 w-full justify-end">
                <Button
                    text={`${buttonText}`}
                    onClick={onAddClientClick}
                    customColorText="text-offwhite"
                    customColorBg="bg-primary-900"
                    customWidth="w-[200px]"
                />

                <div className="w-[200px]">
                    <Input
                        onChange={(e) => setItemSearch(e.target.value)}
                        placeholder="Pesquisar produtos"
                        type="text"
                        value={itemSearch}  
                        icon={<Search />}
                    />
                </div>

                {/* <div className="text-primary-900 hover:text-white">
                    <SmallButton icon={<FilterIcon />} />
                </div>

                <div className="text-primary-900 hover:text-white">
                    <SmallButton icon={<SwapIcon />} />
                </div> */}
            </div>

        </div>
    );
}
