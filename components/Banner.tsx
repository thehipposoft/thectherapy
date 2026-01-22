"use client"

import React, { useEffect, useState } from 'react';
import BannerSlick from './BannerSlick';
import DynamicPromotion from './DynamicPromotion';
import getPromotion from '../api/getPromotion';
import { Promotion } from '@/api/getPromotion';
import Image from 'next/image';

const Banner = () => {
    const [promotion, setPromotion] = useState<Promotion | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkDate = (from: string, till: string) => {
            if (!from || !till) return false;
            try {
                const parseDate = (str: string) => {
                    const year = parseInt(str.substring(0, 4));
                    const month = parseInt(str.substring(4, 6)) - 1;
                    const day = parseInt(str.substring(6, 8));
                    return new Date(year, month, day);
                }
                const fromDate = parseDate(from);
                const tillDate = parseDate(till);
                tillDate.setHours(23, 59, 59, 999);
                return new Date() >= fromDate && new Date() <= tillDate;
            } catch { return false; }
        };

        const initBanner = async () => {
            try {
                const data = await getPromotion();
                if (data?.acf && checkDate(data.acf.valid_from, data.acf.valid_till)) {
                    setPromotion(data);
                }
            } catch (error) {
                console.error("Error fetching banner data:", error);
            } finally {
                setLoading(false);
            }
        };

        initBanner();
    }, []);

    if (loading) {
        return (
            <div className="flex h-[92vh] w-full items-center justify-center">
                <div className="flex flex-col justify-center items-center gap-8">
                    <div className="h-20 w-20 animate-[spin_5s_linear_infinite] rounded-full border-4 border-nav border-t-[#ffffff43]"></div>
                </div>
            </div>
        );
    }

    // Si hay promoción, renderiza DynamicPromotion, si no, BannerSlick
    return (
        <div>
            {promotion ? (
                <DynamicPromotion promotion={promotion} />
            ) : (
                <BannerSlick />
            )}
        </div>
    );
};

export default Banner;
   
