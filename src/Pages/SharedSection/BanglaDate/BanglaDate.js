import { useState, useEffect } from 'react';

const BanglaDate = (isoDateString) => {
    const [bengaliDate, setBengaliDate] = useState('');

    useEffect(() => {
        if (!isoDateString) {
            setBengaliDate('');
            return;
        }

        const date = new Date(isoDateString);

        // Define Bengali month names
        const bengaliMonths = [
            "জানুয়ারী", "ফেব্রুয়ারী", "মার্চ", "এপ্রিল", "মে", "জুন",
            "জুলাই", "আগস্ট", "সেপ্টেম্বর", "অক্টোবর", "নভেম্বর", "ডিসেম্বর"
        ];

        // Define Bengali numbers for digit conversion
        const bengaliNumbers = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];

        // Helper function to convert a number to its Bengali digit representation
        const getBengaliNumber = (num) => {
            return num.toString().split('').map(digit => bengaliNumbers[parseInt(digit)]).join('');
        };

        // Get day, month, and year
        const day = getBengaliNumber(date.getDate());
        const month = bengaliMonths[date.getMonth()];
        const year = getBengaliNumber(date.getFullYear());

        // Set the formatted Bengali date
        setBengaliDate(`${day} ই ${month}, ${year}`);
    }, [isoDateString]); // Re-run effect if isoDateString changes

    return bengaliDate;
};

export default BanglaDate;