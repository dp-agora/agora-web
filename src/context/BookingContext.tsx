"use client";

import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';


interface BookingContextType {
    isOpen: boolean;
    openBooking: () => void;
    closeBooking: () => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export function BookingProvider({ children }: { children: ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);

    const openBooking = useCallback(() => {
        setIsOpen(true);
        document.body.style.overflow = 'hidden';
    }, []);

    const closeBooking = useCallback(() => {
        setIsOpen(false);
        document.body.style.overflow = 'unset';
    }, []);

    return (
        <BookingContext.Provider value={{ isOpen, openBooking, closeBooking }}>
            {children}
        </BookingContext.Provider>
    );
}

export function useBooking() {
    const context = useContext(BookingContext);
    if (context === undefined) {
        throw new Error('useBooking must be used within a BookingProvider');
    }
    return context;
}
